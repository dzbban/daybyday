const FAMOUS_POLES = [
  // STYCZEŃ
  {d:15, m:1,  year:1869, name:'Stanisław Wyspiański',    desc:'malarz i dramaturg'},
  {d:23, m:1,  year:1983, name:'Justyna Kowalczyk',       desc:'biegaczka narciarska, czterokrotna mistrzyni świata'},
  {d:25, m:1,  year:1913, name:'Witold Lutosławski',      desc:'kompozytor'},
  {d:28, m:1,  year:1611, name:'Jan Heweliusz',           desc:'astronom'},
  {d:28, m:1,  year:1887, name:'Artur Rubinstein',        desc:'pianista'},
  {d:29, m:1,  year:1962, name:'Olga Tokarczuk',          desc:'pisarka, laureatka Nagrody Nobla'},

  // LUTY
  {d:4,  m:2,  year:1746, name:'Tadeusz Kościuszko',      desc:'generał, bohater Polski i USA'},
  {d:17, m:2,  year:1984, name:'Marcin Gortat',           desc:'koszykarz NBA'},
  {d:19, m:2,  year:1473, name:'Mikołaj Kopernik',        desc:'astronom, twórca teorii heliocentrycznej'},
  {d:24, m:2,  year:1929, name:'Zdzisław Beksiński',      desc:'malarz i fotografik'},
  {d:27, m:2,  year:1945, name:'Daniel Olbrychski',       desc:'aktor'},

  // MARZEC
  {d:1,  m:3,  year:1810, name:'Fryderyk Chopin',         desc:'kompozytor i pianista'},
  {d:3,  m:3,  year:1956, name:'Zbigniew Boniek',         desc:'piłkarz, ikona polskiej piłki nożnej'},
  {d:3,  m:3,  year:1977, name:'Adam Małysz',             desc:'skoczek narciarski, czterokrotny zdobywca Pucharu Świata'},
  {d:4,  m:3,  year:1745, name:'Kazimierz Pułaski',       desc:'generał, bohater wojny o niepodległość USA'},
  {d:4,  m:3,  year:1932, name:'Ryszard Kapuściński',     desc:'dziennikarz i pisarz reportażysta'},
  {d:6,  m:3,  year:1926, name:'Andrzej Wajda',           desc:'reżyser filmowy, laureat Oscara'},
  {d:13, m:3,  year:1869, name:'Józef Mehoffer',          desc:'malarz i witrażysta'},
  {d:30, m:3,  year:1892, name:'Stefan Banach',           desc:'matematyk, twórca analizy funkcjonalnej'},

  // KWIECIEŃ
  {d:6,  m:4,  year:1915, name:'Tadeusz Kantor',          desc:'reżyser i artysta teatralny'},
  {d:8,  m:4,  year:1950, name:'Grzegorz Lato',           desc:'piłkarz, król strzelców Mundialu 1974'},

  // MAJ
  {d:5,  m:5,  year:1819, name:'Stanisław Moniuszko',     desc:'kompozytor, ojciec polskiej opery'},
  {d:5,  m:5,  year:1846, name:'Henryk Sienkiewicz',      desc:'pisarz, laureat Nagrody Nobla'},
  {d:16, m:5,  year:1898, name:'Tamara Łempicka',         desc:'malarka, ikona art déco'},
  {d:18, m:5,  year:1920, name:'Karol Wojtyła',           desc:'papież Jan Paweł II'},
  {d:20, m:5,  year:1955, name:'Zbigniew Preisner',       desc:'kompozytor muzyki filmowej'},
  {d:23, m:5,  year:1842, name:'Maria Konopnicka',        desc:'poetka i pisarka'},
  {d:24, m:5,  year:1946, name:'Irena Szewińska',         desc:'lekkoatletka, trzykrotna mistrzyni olimpijska'},
  {d:25, m:5,  year:1987, name:'Kamil Stoch',             desc:'skoczek narciarski, trzykrotny mistrz olimpijski'},
  {d:31, m:5,  year:2001, name:'Iga Świątek',             desc:'tenisistka, wielokrotna liderka rankingu WTA'},

  // CZERWIEC
  {d:6,  m:6,  year:1841, name:'Eliza Orzeszkowa',        desc:'pisarka'},
  {d:20, m:6,  year:1793, name:'Aleksander Fredro',       desc:'komediopisarz i dramaturg'},
  {d:21, m:6,  year:1948, name:'Andrzej Sapkowski',       desc:'pisarz, autor sagi o Wiedźminie'},
  {d:24, m:6,  year:1838, name:'Jan Matejko',             desc:'malarz historyczny'},
  {d:26, m:6,  year:1930, name:'Sławomir Mrożek',         desc:'dramaturg i satyryk'},
  {d:27, m:6,  year:1941, name:'Krzysztof Kieślowski',    desc:'reżyser filmowy'},
  {d:30, m:6,  year:1911, name:'Czesław Miłosz',          desc:'poeta i pisarz, laureat Nagrody Nobla'},

  // LIPIEC
  {d:2,  m:7,  year:1923, name:'Wisława Szymborska',      desc:'poetka, laureatka Nagrody Nobla'},
  {d:6,  m:7,  year:1923, name:'Wojciech Jaruzelski',     desc:'generał i prezydent Polski'},
  {d:10, m:7,  year:1835, name:'Henryk Wieniawski',       desc:'skrzypek i kompozytor'},
  {d:12, m:7,  year:1892, name:'Bruno Schulz',            desc:'pisarz i grafik'},
  {d:15, m:7,  year:1854, name:'Jacek Malczewski',        desc:'malarz symbolista'},

  // SIERPIEŃ
  {d:16, m:8,  year:1905, name:'Marian Rejewski',         desc:'kryptolog, który złamał szyfr Enigmy'},
  {d:17, m:8,  year:1629, name:'Jan III Sobieski',        desc:'król Polski, zwycięzca bitwy pod Wiedniem'},
  {d:18, m:8,  year:1933, name:'Roman Polański',          desc:'reżyser filmowy'},
  {d:20, m:8,  year:1847, name:'Bolesław Prus',           desc:'pisarz i publicysta'},
  {d:21, m:8,  year:1988, name:'Robert Lewandowski',      desc:'piłkarz, jeden z najlepszych napastników świata'},

  // WRZESIEŃ
  {d:4,  m:9,  year:1809, name:'Juliusz Słowacki',        desc:'poeta romantyczny'},
  {d:12, m:9,  year:1921, name:'Stanisław Lem',           desc:'pisarz science fiction'},
  {d:24, m:9,  year:1821, name:'Cyprian Kamil Norwid',    desc:'poeta i rzeźbiarz'},
  {d:29, m:9,  year:1943, name:'Lech Wałęsa',             desc:'polityk, przywódca Solidarności, laureat Pokojowej Nagrody Nobla'},

  // PAŹDZIERNIK
  {d:9,  m:10, year:1921, name:'Tadeusz Różewicz',        desc:'poeta i dramaturg'},
  {d:23, m:10, year:1927, name:'Leszek Kołakowski',       desc:'filozof'},
  {d:23, m:10, year:1947, name:'Kazimierz Deyna',         desc:'piłkarz, legenda reprezentacji Polski'},

  // LISTOPAD
  {d:7,  m:11, year:1867, name:'Maria Skłodowska-Curie',  desc:'fizyczka i chemiczka, dwukrotna laureatka Nagrody Nobla'},
  {d:14, m:11, year:1878, name:'Leopold Staff',           desc:'poeta i tłumacz'},
  {d:18, m:11, year:1860, name:'Ignacy Jan Paderewski',   desc:'pianista i premier Polski'},
  {d:23, m:11, year:1933, name:'Krzysztof Penderecki',    desc:'kompozytor'},

  // GRUDZIEŃ
  {d:5,  m:12, year:1867, name:'Józef Piłsudski',         desc:'marszałek, ojciec niepodległej Polski'},
  {d:13, m:12, year:1983, name:'Otylia Jędrzejczak',      desc:'pływaczka, mistrzyni olimpijska'},
  {d:24, m:12, year:1798, name:'Adam Mickiewicz',         desc:'poeta, wieszcz narodowy'},
];
