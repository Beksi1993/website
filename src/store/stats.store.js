import _ from 'lodash'
import { exportTime } from './index'
import ApiService from '../services/api.service'
import regions from '../services/dict.regions.json'

export function lastChange(data, field, cumulative) {
  const result = {
    lastDay: {
      date: new Date(),
      firstDate: undefined,
      value: undefined,
      diff: undefined,
      percentDiff: undefined,
    },
    dayBefore: {
      date: new Date(),
      firstDate: undefined,
      value: undefined,
      diff: undefined,
      percentDiff: undefined,
    },
    day2Before: {
      date: new Date(),
      value: undefined,
    },
  }

  let i = data.length - 1

  // console.log('lastDay found in row', i, data[i])

  while (i >= 0 && _.get(data, `${i}.${field}`) == null) i--

  result.lastDay.date = new Date(data[i].year, data[i].month - 1, data[i].day)
  result.lastDay.value = _.get(data, `${i}.${field}`)

  if (cumulative) {
    while (i >= 0 && result.lastDay.value === _.get(data, `${i}.${field}`)) i--
    let date = new Date(
      data[i + 1].year,
      data[i + 1].month - 1,
      data[i + 1].day
    )
    if (
      _.get(data, `${i + 1}.${field}`) != null &&
      result.lastDay.date.getTime() != date.getTime()
    ) {
      result.lastDay.firstDate = date
    }
  } else {
    i--
  }

  if (i >= 0) {
    while (i >= 0 && _.get(data, `${i}.${field}`) == null) i--
    result.dayBefore.date = new Date(
      data[i].year,
      data[i].month - 1,
      data[i].day
    )
    result.dayBefore.value = _.get(data, `${i}.${field}`)
  }

  if (cumulative) {
    if (i >= 0) {
      while (i >= 0 && result.dayBefore.value === _.get(data, `${i}.${field}`))
        i--
      let date = new Date(
        data[i + 1].year,
        data[i + 1].month - 1,
        data[i + 1].day
      )
      if (result.dayBefore.date.getTime() != date.getTime()) {
        result.dayBefore.firstDate = date
      }
    }
  } else {
    i--
  }

  if (i >= 0) {
    while (i >= 0 && _.get(data, `${i}.${field}`) == null) i--
    if (data[i]) {
      result.day2Before.date = new Date(
        data[i].year,
        data[i].month - 1,
        data[i].day
      )
      result.day2Before.value = _.get(data, `${i}.${field}`)
    }
  }

  if (!result.dayBefore.value) {
    result.dayBefore = undefined
  } else {
    result.lastDay.diff = result.lastDay.value - result.dayBefore.value
    result.lastDay.percentDiff =
      Math.round((result.lastDay.diff / result.dayBefore.value) * 1000) / 10
  }

  if (!result.day2Before.value) {
    result.day2Before = undefined
  } else {
    result.dayBefore.diff = result.dayBefore.value - result.day2Before.value
    result.dayBefore.percentDiff =
      Math.round((result.dayBefore.diff / result.day2Before.value) * 1000) / 10
  }

  return result
}

const state = {
  exportTime: null,
  loaded: false,
  data: [],
  regions: [],
}

const getters = {
  data: (state) => {
    return state.data
  },

  regions: (state) => {
    return state.regions
  },

  getValueOn: (state, getters) => (field, date) => {
    if (!date) {
      return {}
    }
    let searchResult = getters.data.find((day) => {
      return (
        new Date(Date.parse(day.date)).setHours(0, 0, 0, 0) === date.getTime()
      )
    })
    return { date, value: searchResult ? searchResult[field] : null }
  },

  getLastValue: (state, getters) => (field) => {
    let result = getters.data
      .slice()
      .reverse()
      .find((day) => {
        return day[field]
      })
    return {
      date: result
        ? new Date(Date.parse(result.date))
        : new Date(new Date().setHours(0, 0, 0, 0)),
      value: result ? result[field] : null,
    }
  },

  lastChange: (state, getters) => (field, cumulative) => {
    return lastChange(getters.data, field, cumulative)
  },
}

const actions = {
  fetchData: async ({ commit }) => {
    const ts = new Date().getTime()

    const d = await exportTime(
      `https://raw.githubusercontent.com/sledilnik/data/master/csv/stats.csv.timestamp?nocache=${ts}`
    )
    const data = await ApiService.get('https://api.sledilnik.org/api/stats').then((result) => {
      return result.data
    })

    commit('setData', data)
    commit('setRegions', regions)
    commit('setExportTime', d)
  },
  refreshDataEvery: ({ dispatch }, seconds) => {
    setInterval(() => {
      dispatch('fetchData')
    }, seconds * 1000)
  },
}

const mutations = {
  setData: (state, data) => {
    state.data = data
    state.loaded = true
  },

  setRegions: (state, regions) => {
    state.regions = regions
  },

  setExportTime: (state, exportTime) => {
    state.exportTime = exportTime
  },
}

export const statsStore = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
