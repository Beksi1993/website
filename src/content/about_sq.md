# TBD Të dhëna për ndjekjen e përhapjes së COVID-19 në Maqedoninë e Veriut *SQ

*Projekti **"Covid-19 Treker Maqedoni e Veriut"** grumbullon, analizon dhe publikon të dhëna për përhapjen e virusit korona SARS-CoV-2, shkaktarin e COVID-19, në Maqedoninë e Veriut. Ne duam t'i ofrojmë publikut një pasqyrë më të qartë për peshën e problemit dhe një vlerësim të duhur të rrezikut.*

## Pse i grumbullojmë këto të dhëna?

Sipas përvojës së atyre shteteve ku përhapja e virusit është menaxhuar në mënyrë më efektive, grumbullimi i të dhënave në mënyrë të drejtë, të përditësuara dhe të publikuara në mënyrë transparente është kyç për përgjigje efektive të sistemeve të shëndetit publik.
Vetëm atëherë të dhënat e publikuara mund të qëndrojnë si bazë për të kuptuar se çfarë po ndodh, për sjelljen aktive vetëmbrojtëse të njerëzve dhe për pranimin e urgjencës së masave të ndërmarra të sigurisë.
Të dhënat janë grumbulluar nga burime të ndryshme në janë dispozicion publik, dhe që nga TBD, po përpiqemi të krijojmë një lidhje të drejtpërdrejtë me institucionet e kujdesit shëndetësor dhe Institutin e Shëndetit Publik ([ISHP](https://www.iph.mk)). Ne do të kishim dashur që të ndahen të dhëna të strukturuara me ne, të cilat mandej do të vlerësohen dhe do formësohen në format të përshtatshëm për vizualizim, që do t'i prezantohet publikut si dhe do të shërbejë për punë të mëtejshme me zhvillimin e modeleve dhe parashikimin. Pasi që të dhënat e publikuara në media dhe burime të tjera të caktuara ndonjëherë mund të jenë të paqarta dhe të paqëndrueshme, tabela gjithashtu përfshin shënime mbi burimet dhe përfundimet e bazuara në të dhëna jo të plota.

## TBD Çfarë të dhënash grumbullojmë?

Të dhënat në vijim nga ISHP dhe burime të ndryshme publike përfshihen në bazën e të dhënave çdo ditë (me histori): 

-   numri i testeve të kryera dhe numri i infeksioneve të konfirmuara
    
-   numri i infeksioneve të konfirmuara sipas kategorisë: sipas moshës, gjinisë, rajonit dhe komunës
    
-   të dhëna nga spitalet për pacientët me COVID-19: të shtruar në spital, në njësinë e kujdesit intensiv (NjKI), në gjendje kritike, të lëshuar nga spitali, të shëruar
    
-   monitorimi i rasteve individuale, veçanërisht ato në veprimtari kritike: që punojnë në kujdesin shëndetësor, në shtëpitë e pleqve, mbrojtje civile 
    
-   kapaciteti i sistemit të kujdesit shëndetësor: numri i shtretërve, njësitë e kujdesit intensiv, respiratorët për ventilim...
    
    Ne gjithashtu po përpiqemi që vazhdimisht të shtojmë kategori të reja të rëndësishme. 
    Të gjitha të dhënat janë mbledhur dhe në dispozicion në formë të [GSheets, CSV ose përmes REST API.](/en/datasources)
    

<details>
  <summary>Si redaktohen dhe verifikohen të dhënat?</summary>

Baza e të dhënave përditësohet me të dhënat e ISHP (sipas kategorisë). Të dhënat sipas rajonit dhe moshës ndonjëherë përditësohen më vonë dhe kontrollohen në mënyrë të kryqëzuar pasi të dhënat mund të ndryshojnë si rezultat i hulumtimit epidemiologjik.

TBD Komunat ndiqen në [TBD the Places table](https://docs.google.com/spreadsheets/.
Përditësimi i të dhënave të kujdesit spitalor - procesi i tabelës së Pacientëve:

-   Monitorohen të gjitha shpalljet për COVID-19 (TBD) – rreth orës TBD.
    
-   Monitorimi i numri të të shtrirëve në spital: të gjithë repartet, të shtrirët në njësitë për kujdes intensiv dhe pacientët në gjendje kritike.
    
-   Tranzicionet (pranimet/lëshimet) mes gjendjeve individuale poashtu regjistrohen (kur mund të vërehen nga të dhënat).
    
-   Kur të dhënat e tranzicionit (pranimi/lëshimi) nuk janë të plota, vlerat përcaktohen me anë të deduksionit (duke përdorur formulë).
    
-   Të gjitha burimet dhe deduksionet regjistrohen si komente në qeliza individuale (mundësi për verifikim).
    
-   Të dhënat krahasohen me të dhënat përmbledhëse për pacientët e shtruar në spital dhe pacientët në kujdes intensiv të publikuara çdo ditë nga TBD në TBD pasdite.
    

</details>

## Shfrytëzimi i të dhënave

Të dhënat shfrytëzohen për vizualizime dhe statistika të ndryshme, siç janë [grafikonet, infografikat dhe hartat me informacion mbi infeksionet e konfirmuara dhe pacientët e shtruar në spital] (/en/stats) në faqen tonë të internetit.

Të dhënat tona janë gjithashtu të disponueshme dhe tani më përdoren nga disa portale dhe projekte tjera - mund t'i gjeni në faqen [Links](/en/links).

<details>
  <summary>Mohimi i përgjegjësisë (për më shumë)</summary>

**Ju lutemi vini re: Informatat e publikuara në faqen tonë, përfshirë edhe linqet e modeleve dhe faqeve tjera me të cilat nuk jemi të lidhur drejtpërdrejt, përgatitjen me kujdesin më të madh, duke përdorur burime të disponueshme të të dhënave, njohuri, metodologji dhe teknologji, në pajtim me standartet shkencore. Ne besojmë se vizuelizimet dhe modelet mund të ndihmojnë në sqarimin e faktorëve të ndryshëm që qëndrojnë prapa përhapjes së virusit, përfshirë edhe ndikimin e masave të ndërmarra të sigurisë dhe masat e mundshme në të ardhmen. Përmes kësaj, ne dëshirojmë të theksojmë se të gjithë luajmë një rol të rëndësishëm në këtë pandemi. Sidoqoftë, ne nuk mund plotësisht të garantojmë saktësinë, tërësinë ose dobinë e informacionit në këto faqe, dhe në mënyrë eksplicite mohojmë çfarëdo përgjegjësi për interpretimet dhe simulimet e mëtutjeshme të cilat citojnë vizuelizimet tona si burim.*

</details>

## Na ndihmo - neve, vetes dhe të tjerëve 

Projekti u nis nga [Luka Renko](https://twitter.com/LukaRenko) në Slloveni, për Republikën e Sllovenisë. Ai filloi grumbullimin e të dhënave në fillim të epidemisë COVID-19 dhe është rritur në mënyrë të qëndrueshme në një ekip prej 20 deri 45 vullnetarë dhe pjesëmarrës aktivë për shkak të nevojës gjithnjë e më të madhe për futjen dhe verifikimin e të dhënave, si dhe të programimit. Është projekt crowdsourcing, i përkrahur nga pjesëmarrje masive vullnetare, ku çdokush mund të kontribuojë me burimet dhe të dhënat në mënyrën më të mirë të mundshme. Bashkëngjitu dhe ndihmo. Treker.mk që është klon i sledilnik.org është nisur nga Luka Renko dhe Vladimir Nešković (gjithashtu qytetar i Republikës së Maqedonisë së Veriut) që jeton në Slloveni dhe është pjesë e ekipit të Sledilnik në Slloveni. 
Ekipi në Maqedoninë e Veriut po rritet ngadalë, për momentin ka një numër prej 5-10 pjesëmarrësish aktivë.

## Kushtet e përdorimit

Përdorimi dhe bashkëpunimi janë të dëshirueshëm: të dhënat grumbullohen nga burimet e domenit publik dhe mund të përdoren, të përpunohen apo inkuadrohen lirisht në një përmbajtje jo-reklamuese nëse citohet burimi - covid-19.treker.mk
Për të eksportuar të dhënat në formate tjera ose për t'i përdorur për nevoja vizualizimi, ju lutemi na kontaktoni në info@treker.mk

