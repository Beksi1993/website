module Main

open Elmish
open Elmish.React
open Elmish.Debug
open Elmish.HMR

let Visualizations (elementId : string, query : obj, visualization : string option) =
    Program.mkProgram (App.init query visualization) App.update App.render
    #if DEBUG
    |> Program.withDebugger
    #endif
    |> Program.withReactSynchronous elementId
    |> Program.run
