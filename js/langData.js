/*

Первый ключ объекта всегда 'documentTitle', он не учитывается в выполнении скрипта.

 */

const rusDict = {
 'documentTitle' : 'Путешествия по России',
 'leadTitle' : 'Путешествия\n' +
  'по России',
 'leadSubtitle' : 'Настоящая страна не в выпусках новостей, а здесь.' ,
 'leadCaption' : 'ваша полка — верхняя',
 'introTitle' : 'Чего мы там не видели?',
 'introText' : 'По опросам ВЦИОМ, 95% россиян мечтают куда-нибудь поехать, но только 36% планируют провести отпуск в родной стране. Мол, чего мы тут, дома, не видели? На самом деле, Россия — это целая вселенная с ласковым морем юга, густыми лесами Саян и суровыми льдами плато Путорана. А ещё увидеть все эти красоты можно без миллионов на счету, загранпаспорта и многочасовых перелетов. Как, например, Вера Башмакова — смелая молодая мама, которая взяла в охапку троих детей, усадила их в свою «Ладу» и проехала 20 тысяч километров по родной стране. Мы выбрали и описали некоторые интересные места, достойные вашего отпуска.',
 'introFact' : ['Часовых поясов ', 'Объектов природного наследия ЮНЕСКО ', 'Объектов культурного наследия ЮНЕСКО ', 'Природных заповедников ', 'Аэропортов '],
 'introNumber' : [11, 12, 16, 105, 241],
 'placeTitle' : ['Куршская коса', 'Кольский', 'Алтай', 'Зимний байкал', 'Карелия'],
 'placeParagraph' : {
  0: [
   'Здесь, посреди лесов и песчаных дюн, вы сможете увидеть два водных горизонта — спокойного Куршского залива с одной стороны и подёрнутого рябью волн Балтийского моря с другой. Уникальная природная зона на краю российского анклава.',
   'На этом Калининградская область не заканчивается. Для путешественника и исследователя там же по соседству — самая западная точка России, Балтийская коса, — и немецкое наследие россыпи небольших приморских городов. Атмосфера здешних мест исключает суету, окуная в спокойствие природы и запах стального, прохладного моря.'
  ],
  1: [
   'Почти весь полуостров находится за Полярным кругом. Саамская тундра, от которой на юг — тайга, а на север — Ледовитый океан, прикидывающийся Баренцевым морем.',
   'Возможно, вы смотрели Звягинцева и даже слышали историю арктического фестиваля в Териберке. Возможно, слово «Хибины» не осталось под снегом школьных воспоминаний об уроках географии. Возможно, вы не интересовались пронизывающей земную кору сверхглубокой скважиной, а от апатитов вас давно накрывает апатия. Но ваша мечта увидеть cеверное сияние начинает сбываться с билетом в Мурманск.'
  ],
  2: [
   'Алтай — одно из красивейших мест в России. В первую очередь из-за гор: если ехать вдоль хребта, вы увидите склоны, усыпанные соснами, горные реки и озёра. А если вы откроете в автомобиле окна, сможете познакомиться с невидимым чудом здешних мест — горным воздухом.',
   'Климат на Алтае умеренный, поэтому ехать сюда лучше всего летом. Так вы увидите всё разнообразие местной флоры и фауны. По лесам Алтая бродят лоси, над хребтами летают орлы, а на равнинах пасутся косули. И знаменитые манулы — тоже обитатели Алтайского края.'
  ],
  3: [
   'Всем известен Байкал как крупнейшее озеро в мире. Многие также знают, что это самый большой источник пресной воды и одно из красивейших мест в России.',
   'Конечно, это всё так. Но Байкал ещё идеальное место для соревнований по скийорингу. Это такой вид спорта, когда лыжник привязывает себя к мотоциклу, и тандем старается развить как можно бóльшую скорость на льду. В марте 2019 года на фестивале «Байкальская миля» был поставлен мировой рекорд — 197.011 км/ч.'
  ],
  4: [
   'Сибирь заканчивается не на Урале, а в Карелии: образующая тайгу сибирская лиственница не растёт западнее Водлозера. Зато здесь она вымахивает на 30 метров — леса карельских национальных парков из-за непроходимых болот никогда не знали топора. Некоторым соснам уже больше чем полтысячелетия. Прикоснитесь к живому существу, видевшему солнце раньше, чем увидал его Иван Грозный. В девственном лесу на сотню километров не встретишь тропы. А на редких тропинках деревья в паре метров от земли помечены медвежьими когтями. Чтобы все знали, кто тут хозяин.',
  ],
 },
 'coverTitle' : 'До Байкала «на собаках»',
 'coverSubtitle' : 'По мотивам учебной темы о Транссибе\n' +
  'и iframes — путешествие от столицы\n' +
  'до Байкала на электричках.',
 'footerItem' : ['Карты', 'Погода', 'Расписание', 'Календарь', 'Путешествия'],
 'footerCopyright' : '© 2021. Коротееев К.'
}

const engDict = {
 'documentTitle' : 'Travel to Russia',
 'leadTitle' : 'Traveling\n' +
  'in Russia',
 'leadSubtitle' : 'The real country is not on the news, but here.' ,
 'leadCaption' : 'your shelf is top',
 'introTitle' : 'What didn\'t we see there?',
 'introText': 'According to VCIOM polls, 95% of Russians dream of going somewhere, but only 36% plan to spend their holidays in their home country. Like, what have we not seen here at home? In fact, Russia is a whole universe with the gentle sea of ​​the south, the dense forests of the Sayan Mountains and the harsh ice of the Putorana plateau. And you can also see all these beauties without millions in your account, a passport and many hours of flights. Like, for example, Vera Bashmakova - a brave young mother who took three children in her arms, put them in her "Lada" and drove 20 thousand kilometers through her native country. We have selected and described some interesting places worthy of your vacation. ',
 'introFact': ['Time Zones ', 'Unesco Natural Heritage Sites ', 'Unesco Cultural Heritage Sites ', 'Nature Reserves ', 'Airports '],
 'introNumber' : [11, 12, 16, 105, 241],
 'placeTitle' : ['Curonian Spit', 'Kola', 'Altai', 'Winter Baikal', 'Karelia'],
 'placeParagraph' : {
  0: [
   'Here, in the midst of forests and sand dunes, you can see two water horizons - the calm Curonian Lagoon on one side and rippled waves of the Baltic Sea on the other. A unique natural area on the edge of the Russian enclave.',
   'The Kaliningrad region does not end there. For the traveler and explorer, in the same neighborhood - the westernmost point of Russia, the Baltic Spit - and the German heritage of a placer of small coastal cities. The atmosphere of these places excludes the hustle and bustle, plunging into the tranquility of nature and the smell of the steel, cool sea.'
  ],
  1: [
   'Almost the entire peninsula is located beyond the Arctic Circle. Sami tundra, from which to the south - taiga, and to the north - the Arctic Ocean, pretending to be the Barents Sea.',
   'You may have watched Zvyagintsev and even heard the history of the Arctic festival in Teriberka. Perhaps the word "Khibiny" did not remain under the snow of school memories of geography lessons. Perhaps you were not interested in a super-deep well piercing the earth\'s crust, and apatites have long covered you with apathy. But your dream of seeing the Northern Lights begins to come true with a ticket to Murmansk.'
  ],
  2: [
   'Altai is one of the most beautiful places in Russia. Primarily because of the mountains: if you go along the ridge, you will see slopes covered with pine trees, mountain rivers and lakes. And if you open the windows in the car, you can get acquainted with the invisible miracle of these places - the mountain air.',
   'The climate in Altai is moderate, so it is best to go here in summer. This way you will see all the variety of local flora and fauna. Elk roam the forests of Altai, eagles fly over the ridges, and roe deer graze on the plains. And the famous Pallas\' cat are also inhabitants of the Altai Territory.'
  ],
  3: [
   'Everyone knows Baikal as the largest lake in the world. Many also know that this is the largest source of fresh water and one of the most beautiful places in Russia.',
   'Of course, this is all true. But Baikal is still an ideal place for skiing competitions. This is a sport where the skier ties himself to the motorcycle and the tandem tries to develop as fast as possible on the ice. In March 2019, a world record of 197.011 km / h was set at the Baikal Mile festival.'
  ],
  4: [
   'Siberia ends not in the Urals, but in Karelia: the Siberian larch that forms the taiga does not grow west of Vodlozero. But here it reaches 30 meters - the forests of the Karelian national parks have never known an ax because of the impenetrable swamps. Some pines are more than half a millennium old. Touch a living creature that has seen the sun before Ivan the Terrible saw it. In the virgin forest for a hundred kilometers you will not find a trail. And on rare paths, trees a couple of meters from the ground are marked with bear claws. So that everyone knows who is the boss here.',
   ''
  ],
 },
 'coverTitle' : 'To Lake Baikal\' on the dogs',
 'coverSubtitle': 'Based on the tutorial topic about Transsib\n' +
  'and iframes - travel from the capital\n' +
  'to Baikal by electric trains.',
 'footerItem' : ['Maps', 'Weather', 'Schedule', 'Calendar', 'Travel'],
 'footerCopyright' : '© 2021. Koroteev K.'
}


