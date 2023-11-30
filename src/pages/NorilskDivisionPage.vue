<template>
    <div class="division">
        <BaseHero :title="lang === 'ru' ? 'Норильский дивизион. Природные сокровища Южного Таймыра' : 'Norilsk Division. The nature havens of southern Taimyr'" :descr="lang === 'ru' ? heroDescr : heroDescrEn" :img="'img/hero-3.jpg'" :imgMobile="'img/hero3-mobile.jpg'"
        />
        <MainSection>
            <SectionWhite>
                <BaseTextBlock class="text mb-60" :title="lang === 'ru' ? 'Особенности дивизиона' : 'Division profile'" :tooltip="true">
                    <p class="mb-10">
                        <span v-if="lang === 'ru'">Горнодобывающие, металлургические и&nbsp;энергетические объекты Норильского </span>
                        <span v-else>The mining, metals, and energy assets of The Norilsk </span>
                        <BaseTooltip :word="lang === 'ru' ? 'дивизиона' : 'Division'">
                            <span v-if="lang === 'ru'">
                                                            Компании объединяют в&nbsp;дивизион предприятия одного региона или&nbsp;объекты с&nbsp;общей задачей:
                                                            например, перевозкой сырья или&nbsp;энергоснабжением. Деление на&nbsp;дивизионы (от&nbsp;французского
                                                            слова division&nbsp;&mdash; &laquo;разделение&raquo;) упрощает управление крупной организацией.
                                                        </span>
                            <span v-else>Companies create divisions by grouping together enterprises or facilities in the same region or with shared tasks, such as feedstock transportation or energy supply. Divisions help streamline the management of large organisations.</span>
                        </BaseTooltip>
                        <span v-if="lang === 'ru'"> расположены в зоне,
                                                        где ещё сохранилась «вечная мерзлота», в&nbsp;гористой местности. Предприятия образуют плотную
                                                        промышленную сеть, поэтому состояние природного окружения на&nbsp;этих территориях требует большого
                                                        внимания со&nbsp;стороны компании.</span>
                        <span v-else> are located in a permafrost area, in mountainous terrain. The facilities are part of a dense industrial network, so the company needs to focus closely on the condition of the natural environment in these areas.</span>
                    </p>
                    <p>
                        <span v-if="lang === 'ru'">
                                                        «Норникель» понимает свою ответственность за&nbsp;состояние окружающей среды и&nbsp;много внимания уделяет
                                                        здоровью экосистем во&nbsp;всех дивизионах. Восстанавливать экологическое равновесие на &nbsp;евере
                                                        Красноярского края компания начала с&nbsp;исследования наземной и&nbsp;водной флоры и&nbsp;фауны и&nbsp;определения
                                                        границ промышленного воздействия.
                                                        </span>
                        <span v-else> Nornickel recognises its responsibility for the environment and pays meticulous attention to the health of ecosystems across its divisions. We started restoring the environmental balance in the north of the Krasnoyarsk Territory by exploring terrestrial and aquatic flora and fauna and identifying areas affected by industrial activity.</span>
                    </p>
                </BaseTextBlock>
    
                <div class="number-blocks text-block__wrap mb-60">
                    <BaseNumberBlock :textTop="lang === 'ru' ? 'до&nbsp;280&nbsp;дней' : 'up&nbsp;to&nbsp;280&nbsp;days'" :textBottom="lang === 'ru' ? 'устойчивых морозов' : 'of sustained frost'" />
                    <BaseNumberBlock :textTop="lang === 'ru' ? 'до&nbsp;500&nbsp;метров' : 'up&nbsp;to&nbsp;500&nbsp;m'" :textBottom="lang === 'ru' ? 'толщина многолетнемёрзлых пород' : 'permafrost depth'" />
                    <BaseNumberBlock :textTop="lang === 'ru' ? '-53&nbsp;˚С' : '–53 ˚С'" :textBottom="lang === 'ru' ? 'минимальная температура' : 'minimum temperature'" />
                </div>
    
                <BigMap :circales="circales" :img="lang === 'ru' ? 'img/division-big-map' : 'img/division-big-map-en'" :imgMobile="lang === 'ru' ? 'img/division-big-map-mobile' : 'img/division-big-map-en-mobile'">
                    <BaseNumberBlock :textTop="lang === 'ru' ? '44 объекта' : '44 facilities'" :textBottom="lang === 'ru' ? 'входит в Норильский дивизион' : 'part of Norilsk Division'" />
                    <div class="circales">
                        <div class="circale-block">
                            <svg class="circale-block__img" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                                <circle cx="7" cy="7" r="7" fill="#654EA3" />
                                                            </svg>
    
                            <div class="circale-block__text">
                                <span v-if="lang === 'ru'">
                                                                Промышленные объекты
                                                </span>
                                <span v-else>
                                                    Industrial facilities
                                                </span></div>
                        </div>
                        <div class="circale-block">
                            <svg class="circale-block__img" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                                <circle cx="7" cy="7" r="7" fill="#0077C8" />
                                                            </svg>
    
                            <div class="circale-block__text">
                                <span v-if="lang === 'ru'">
                                                                Энергетические объекты
                                                </span>
                                <span v-else>
                                                    Energy facilities
                                                </span></div>
                        </div>
                        <div class="circale-block">
                            <svg class="circale-block__img" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                                <circle cx="7" cy="7" r="7" fill="#009CA6" />
                                                            </svg>
    
                            <div class="circale-block__text">
                                <span v-if="lang === 'ru'">
                                                                Особо охраняемые природные территории
                                                </span>
                                <span v-else>
                                                    Specially protected natural areas
                                                </span></div>
                        </div>
                    </div>
                </BigMap>
    
                <section class="scroll">
                    <div class="scroll-bg bg-1">
                    </div>
                    <div class="scroll-bg bg-2">
                    </div>
                    <div class="scroll-bg bg-3">
                    </div>
                    <div class="scroll-wrap">
                        <div class="scroll-card card-1 text-block__descr">
                            <p>
                                <span v-if="lang === 'ru'">
                                                                    Большой Норильск
                                                </span>
                                <span v-else>
                                                    Greater Norilsk
                                                </span>
                            </p>
                            <p>
                                <span v-if="lang === 'ru'">
                                                                Норильский промышленный район, или&nbsp;Большой Норильск, образован местными предприятиями &laquo;Норникеля&raquo;. Также в&nbsp;район входят города Норильск, Дудинка и&nbsp;ещё несколько населённых пунктов. Здесь в&nbsp;условиях
                                                            многолетней мерзлоты компания добывает и&nbsp;перерабатывает медь, драгоценные металлы, теллур, серу и&nbsp;селен.
                                                        
                                            </span>
                                <span v-else>
                                                The Norilsk Industrial District, or&nbsp;Greater Norilsk, is&nbsp;an&nbsp;area made up&nbsp;of&nbsp;Nornickel&rsquo;s local facilities. The district also includes the cities of&nbsp;Norilsk, Dudinka, and several other settlements. In&nbsp;the permafrost environment, the company mines and processes copper, precious metals, tellurium, sulphur, and selenium.
                                            </span>
                            </p>
                            <BaseDropdownInfo :title="lang === 'ru' ?'Предприятия' : 'Facilities'" :color="'#D38235'" :text=" lang === 'ru' ? '<ul><li>Талнахский рудный узел: 5 рудников</li><li>Норильский рудный узел: 1 рудник</li><li>Талнахская обогатительная фабрика</li><li>Норильская обогатительная фабрика</li><li>Надеждинский металлургический завод</li><li>Медный завод</li></ul>' : '<ul><li>Talnakh Ore Cluster: 5 mines</li><li>Norilsk Ore Cluster: 1 mine</li><li>Talnakh Concentrator</li><li>Norilsk Concentrator</li><li>Nadezhda Metallurgical Plant</li><li>Copper Plant</li></ul>'"
                            />
                        </div>
                        <div class="scroll-card card-2 text-block__descr">
                            <p>
                                <span v-if="lang === 'ru'">
                                                            Энергетические объекты
                                        </span>
                                <span v-else>
                                            Energy facilities
                                        </span>
                            </p>
                            <p>
                                <span v-if="lang === 'ru'">
                                                            Теплом и&nbsp;светом Промышленный район обеспечивают теплоцентрали, ГЭС и&nbsp;газодобывающие предприятия &laquo;Норникеля&raquo;.
                                        </span>
                                <span v-else>
                                            Heat and electricity are supplied to&nbsp;the Industrial District by&nbsp;Nornickel&rsquo;s heat and power plants, HPPs and gas production facilities.
                                        </span>
    
                            </p>
                            <BaseDropdownInfo :title="lang === 'ru' ? 'Объекты' : 'Facilities'" :color="'#D38235'" :text="lang === 'ru' ? '<ul><li>Южно-Солёнинское газоконденсатное месторождение</li><li>Мессояхское газовое месторождение</li><li>Северо-Солёнинское газоконденсатное месторождение</li><li>Пеляткинское газоконденсатное месторождение</li><li>ТЭЦ-1 г. Норильск</li><li>ТЭЦ-2 г. Талнах</li><li>ТЭЦ-3 г. Кайеркан</li><li>Курейская ГЭС</li><li>Усть-Хантайская ГЭС</li></ul>' : '<ul><li>Yuzhno-Soleninskoye gas condensate field</li><li>Messoyakhskoye gas field</li><li>Severo-Soleninskoye gas condensate field</li><li>Pelyatkinskoye gas condensate field</li><li>HPP-1, Norilsk</li><li>HPP-2, Talnakh</li><li>HPP-3, Kayerkan</li><li>Kureyskaya Hydro Power Plant</li><li>Ust-Khantayskaya Hydro Power Plant</li></ul>'"
                            />
                        </div>
                        <div class="scroll-card card-3 text-block__descr">
                            <p>
                                <span v-if="lang === 'ru'">
                                                        Путоранский заповедник
                                    </span>
                                <span v-else>
                                        Putoransky Nature Reserve
                                    </span></p>
                            <p>
                                <span v-if="lang === 'ru'">
                                                        Природный объект, важный для&nbsp;поддержания и&nbsp;восстановления местного биоразнообразия. Расстояние от&nbsp;Промышленного района до&nbsp;границ заповедника&nbsp;&mdash; более 50&nbsp;км. По&nbsp;словам специалистов, этого
                                                    достаточно, чтобы сохранить местные экосистемы в&nbsp;неприкосновенности и&nbsp;исключить воздействие предприятий.
                                    </span>
                                <span v-else>
                                        A nature site crucial for the maintenance and restoration of local biodiversity. The reserve's boundaries are more than 50 km away from the Industrial District. According to experts, this is enough to keep local ecosystems intact and prevent the impact of the facilities.
                                    </span>
                            </p>
                        </div>
                    </div>
                </section>
    
                <BaseTextBlock class="text mb-40" :title="lang === 'ru' ? 'Зона воздействия предприятий Норильского&nbsp;дивизиона' : 'Impact zone the Norilsk Division&rsquo;s facilities'" :tooltip="true">
    
                    <span v-if="lang === 'ru'">
                                        <p class="mb-10">
                                        По&nbsp;данным Большой научной экспедиции 2022&nbsp;года, радиус воздействия Норильского промышленного района на&nbsp;растительный и&nbsp;животный мир Южного Таймыра&nbsp;&mdash; не&nbsp;больше 10&nbsp;км.
                                    </p>
                                    <p>
                                        Эффект от&nbsp;промышленной нагрузки наиболее выражен на&nbsp;расстоянии до&nbsp;1&nbsp;км, а&nbsp;местами до&nbsp;2&nbsp;км от&nbsp;предприятий. С&nbsp;удалением от&nbsp;промышленной и&nbsp;жилой зон признаки воздействия сходят на&nbsp;нет. Там, где
                                        влияние предприятий не&nbsp;обнаруживается, исследователи создают полигоны для&nbsp;изучения первозданного, или
                                        <BaseTooltip :word="'фонового'">
                                            На&nbsp;фоновых участках исследователи не&nbsp;обнаружили следов воздействия предприятий, экосистемы здесь сохранены в&nbsp;их&nbsp;исходном, первозданном виде. Состояние биоразнообразия на&nbsp;фоновых территориях принимают за&nbsp;эталонное и&nbsp;используют
                                            эти данные для&nbsp;наблюдения за&nbsp;природой в&nbsp;зонах воздействия.
                                        </BaseTooltip> состояния местных экосистем.
                                    </p>
                                </span>
                    <span v-else>
                                    <p class="mb-10">
                                        According to the 2022 Big Scientific Expedition, the radius of the Norilsk Industrial District&rsquo;s impact on the flora and fauna of southern Taimyr is no more than 10 km.
                                    </p>
                                    <p>
                                        The anthropogenic effects are most pronounced at a distance of up to 1 km, and in some localities up to 2 km from the facilities. The further we are from the industrial and residential areas, the less significant the impact is. Where industrial impact is not traceable, researchers set up designated research areas to study the pristine, or
                                        <BaseTooltip :word="'background'">
                                            In the background areas, researchers have found no traces of industrial impact, and the ecosystems there are in their original, pristine state. The state of the biodiversity in the background areas is taken as a reference and these data are used to monitor the nature in the affected territories.
                                        </BaseTooltip> state of local ecosystems.
                                    </p>
                                </span>
                </BaseTextBlock>
                <div class="division-radius mb-60">
                    <picture>
                        <source media="(max-width: 768px)" type="image/webp" :srcset="lang === 'ru' ? 'img/division-radius-mobile.webp' : 'img/division-radius-en-mobile.webp'">
                        <source media="(max-width: 768px)" :srcset="lang === 'ru' ? 'img/division-radius-mobile.png' : 'img/division-radius-en-mobile.png'">
                        <source type="image/webp" :srcset="lang === 'ru' ? 'img/division-radius.webp' : 'img/division-radius-en.webp'">
                        <img :src="lang === 'ru' ? 'img/division-radius.png' : 'img/division-radius-en.png'" alt="">
                    </picture>
                </div>
                <BaseSidebar>
                    <p v-if="lang === 'ru'">
                        Плотное расположение промышленных объектов и&nbsp;населённых пунктов суммирует их&nbsp;негативное воздействие, поэтому исследователи рассматривают Большой Норильск как&nbsp;единый источник воздействия на&nbsp;экосистемы дивизиона.
                    </p>
                    <p v-else>
                        Densely located industrial facilities and settlements combine their adverse impacts, so researchers view Greater Norilsk as a single source of impact on the division's ecosystems.
                    </p>
                </BaseSidebar>
            </SectionWhite>
            <SectionOrange>
                <BaseTextBlock class="text mb-60" :tooltip="true">
                    <div class="section-orange__title">
    
                        <span v-if="lang === 'ru'">
                                            Кто обитает на&nbsp;юге&nbsp;Таймыра
                                </span>
                        <span v-else>
                                    Inhabitants of southern Taimyr
                                </span>
                    </div>
                    <div class="section-orange__descr">
                        <span v-if="lang === 'ru'">
                                            <p class="mb-10">
                                            В&nbsp;зоне, прилегающей к&nbsp;Промышленному району, в&nbsp;условной зоне воздействия предприятий, участники Большой Научной экспедиции обнаружили
                                            <BaseTooltip :word="'охраняемые виды'">
                                                Редкие и&nbsp;находящиеся под угрозой исчезновения виды, чья численность сокращается или&nbsp;уже сократилась до&nbsp;опасного уровня. Им&nbsp;присваивают статус охраняемых и&nbsp;заносят в&nbsp;Красные книги&nbsp;&mdash; общероссийскую или&nbsp;региональные.
                                                Охранный статус запрещает охоту на&nbsp;животных, а&nbsp;в&nbsp;местах обитания краснокнижных растений и&nbsp;грибов ограничены строительство и&nbsp;другая хозяйственная деятельность.
                                            </BaseTooltip> животных и&nbsp;растений, а&nbsp;также несколько участков с&nbsp;уникальными экосистемами.
                                        </p>
                                        <p>
                                            Среди типичных представителей арктической флоры и&nbsp;фауны биологи отобрали и
                                            <BaseTooltip :word="'индикаторные виды'">
                                                Исследователи выбирают виды-индикаторы из&nbsp;числа типичных для&nbsp;региона организмов, наиболее чутко реагирующих на&nbsp;отклонения в&nbsp;состоянии природной среды. Если в&nbsp;составе вида-индикатора происходят изменения, то&nbsp;возможно, что
                                                в&nbsp;экосистеме что-то пошло не&nbsp;так.
                                            </BaseTooltip>. Наблюдение за&nbsp;их&nbsp;поведением сможет многое рассказать о&nbsp;состоянии природного окружения дивизиона.
                                        </p>
                                </span>
                        <span v-else>
                                    <p class="mb-10">
                                        In the exposed area adjacent to the Industrial District, the Big Science Expedition team discovered 
                                            <BaseTooltip :word="'protected species'">
                                                Rare or endangered species whose numbers are declining or have already declined to dangerous levels. They are given the status of protected species and included in national or regional Red Data Books. Their conservation status prohibits hunting, as well as restricting construction and other economic activities in the habitats of red-listed plants and mushrooms.
                                            </BaseTooltip> of animals and plants, as well as several areas featuring unique ecosystems.
                                        </p>
                                        <p>
                                            СBiologists selected
                                            <BaseTooltip :word="'indicator species'">
                                                Researchers select indicator species from the organisms that are typical of the region and most sensitive to deviations in the state of the natural environment. If there are changes in the composition of an indicator species, it is possible that something has gone wrong in the ecosystem.
                                            </BaseTooltip>. Among typical representatives of Arctic flora and fauna. Observing their behaviour can be very informative about the state of the division's natural environment.
                                        </p>
                                </span>
    
                    </div>
                </BaseTextBlock>
                <div class="flora-and-fauna">
                    <BaseTextBlock :title="lang === 'ru' ? 'Флора' : 'Flora'">
    
                        <span v-if="lang === 'ru'">
                                   <p class="mb-10">
                                            Растительный покров региона образуют мхи и&nbsp;лишайники, низкорослые травы и&nbsp;кустарники.
                                        </p>
                                        <p>
                                            Участки лиственничных лесов и&nbsp;зарослей ольховника стали домом для&nbsp;травянистых многолетников, редких или&nbsp;отсутствующих в&nbsp;других типах сообществ. Обилие здесь древесных растений помогает поддерживать разнообразие грибов.
                                        </p>
                                </span>
                        <span v-else>
                                   <p class="mb-10">
                                    The vegetation cover in the region is made up of mosses and lichens, low-growing grasses and shrubs.
                                        </p>
                                        <p>
                                            Areas of larch forests and alder thickets are home to herbaceous perennials that are rare or non-existent in other community types. The abundance of woody plants here helps support the diversity of fungi.
                                        </p>
                                </span>
                    </BaseTextBlock>
                    <BaseTextBlock :title="lang === 'ru' ? 'Фауна' : 'Fauna'">
    
                        <span v-if="lang === 'ru'">
                                   <p class="mb-10">
                                            Территория дивизиона не&nbsp;отличается большим разнообразием млекопитающих, что типично для&nbsp;южных тундр. Птиц гораздо больше, но&nbsp;многие обитают здесь сезонно, из&nbsp;зимующих видов&nbsp;&mdash; белая и&nbsp;тундряная куропатки, ворон.
                                        </p>
                                        <p>
                                            В&nbsp;местных озёрах водится ценная промысловая рыба: сибирский сиг и&nbsp;разные виды гольца.
                                        </p>
                                </span>
                        <span v-else>
                                   <p class="mb-10">
                                    The division’s area does not feature a great variety of mammals, which is typical of the southern tundra. Birds are much more numerous, but many of them are seasonal; wintering species include willow and rock ptarmigan and raven.
                                        </p>
                                        <p>
                                            In local lakes, there are valuable commercial fish species: Siberian whitefish and various species of char.
                                        </p>
                                </span>
                        <BaseNumberBlock class="" :textTop="lang === 'ru' ? '56 видов' : '56&nbsp;bird&nbsp;species'" :textBottom="lang === 'ru' ? 'птиц' : ''" />
                    </BaseTextBlock>
                </div>
                <div class="collage">
                    <div class="legend">
                        <BaseCollageInfo :text="lang === 'ru' ?'Охраняемые виды' : 'Protected species'" :color="'#71464E'" />
                        <BaseCollageInfo :text="lang === 'ru' ?'Индикаторные виды' : 'Indicator species'" />
                    </div>
    
                    <div class="collage__eagle"></div>
                    <div class="collage__merlin"></div>
                    <div class="collage__loach"></div>
                    <div class="collage__loon"></div>
                    <BaseCollageInfo class="eagle" :title="lang === 'ru' ? 'Орлан-белохвост' : 'White-tailed eagle'" :color="'#71464E'" :text="lang === 'ru' ? 'Размах его крыльев достигает 2,4&nbsp;м. Птица нередко питается падалью и&nbsp;считается природным санитаром' : 'The bird&rsquo;s wingspan reaches 2.4&nbsp;m. It&nbsp;often feeds on&nbsp;carrion and is&nbsp;considered a&nbsp;natural pest manager'"
                    />
    
                    <BaseCollageInfo class="falcon" :title="lang === 'ru' ? 'Сапсан' : 'Peregrine falcon'" :color="'#71464E'" :text="lang === 'ru' ? 'Самая быстрая птица на планете' : 'The fastest bird on Earth'" />
    
                    <BaseCollageInfo class="warbler" :title="lang === 'ru' ? 'Пеночка-таловка' : 'Arctic warbler'" :text="lang === 'ru' ? 'Встречается также в&nbsp;Забайкалье' : 'It also inhabits the Trans-Baikal Territory'" />
                    <BaseCollageInfo class="lentils" :title="lang === 'ru' ? 'Чечевица' : 'Common rosefinch'" :text="lang === 'ru' ? 'Издаёт ритмичные звуки, в&nbsp;которых слышится: <br/>&laquo;Че-че-ви-цу?&raquo;' : 'Makes a&nbsp;melodic short whistle often rendered as&nbsp;&laquo;pleased to&nbsp;meet you&raquo;.'"
                    />
    
                    <BaseCollageInfo class="willow-warbler" :title="lang === 'ru' ? 'Пеночка-весничка' : 'Willow warbler'" :text="lang === 'ru' ? 'Кроме Норильского обитает также в&nbsp;Кольском дивизионе' : 'Apart from the Norilsk Division, it is also found in the Kola Division’s&nbsp;area'"
                    />
    
                    <BaseDropdownInfo class="merlin" :title="lang === 'ru' ? 'Кречет' : 'Gyrfalcon'" :color="'#71464E'" :is-modal="true" :pulsation-color="'finn'" :text="lang === 'ru' ? 'Самая крупная птица из&nbsp;отряда соколиных. За&nbsp;последние 20&nbsp;лет её&nbsp;популяция в&nbsp;России сократилась втрое. &laquo;Норникель&raquo; вложил 50&nbsp;млн рублей в&nbsp;поддержку и&nbsp;сохранение вида в&nbsp;2022&ndash;2023&nbsp;гг' : 'The largest bird in&nbsp;the Falconidae family. Over the past 20&nbsp;years, its population in&nbsp;Russia has plummeted threefold. In&nbsp;2022&ndash;2023, Nornickel invested RUB 50&nbsp;mln to&nbsp;support and preserve the species'"
                    />
    
                    <BaseCollageInfo class="oatmeal" :title="lang === 'ru' ? 'Полярная овсянка' : 'Pallas&rsquo;s bunting'" />
                    <BaseCollageInfo class="larch" :title="lang === 'ru' ? 'Лиственница сибирская' : 'Siberian larch'" :color="'#71464E'" />
    
                    <BaseCollageInfo class="ptarmigan" :title="lang === 'ru' ? 'Белая куропатка' : 'Willow ptarmigan'" :text="lang === 'ru' ? 'Тело птицы сохраняет&nbsp;постоянную температуру 45&nbsp;ºC' : 'The bird&rsquo;s body maintains a&nbsp;constant temperature of&nbsp;45 &ordm;C'"
                    />
    
                    <BaseCollageInfo class="shrew" :title="lang === 'ru' ? 'Тундряная бурозубка' : 'Tundra shrew'" :text="lang === 'ru' ? 'За&nbsp;сутки может съесть в&nbsp;4&nbsp;раза больше, чем весит' : 'It&nbsp;can eat four times its body weight in&nbsp;a&nbsp;day'"
                    />
    
                    <BaseCollageInfo class="wolverine" :title="lang === 'ru' ? 'Росомаха' : 'Wolverine'" :color="'#71464E'" />
    
                    <BaseCollageInfo class="olkhovnik" :title="lang === 'ru' ? 'Ольховник кустарниковый' : 'Alnus alnobetula'" :text="lang === 'ru' ? 'Древесина срубленной ольхи окрашивается в&nbsp;красный цвет' : 'The wood of a felled alder tree turns red'" />
    
                    <BaseCollageInfo class="willow" :title="lang === 'ru' ? 'Ива мохнатая' : 'Woolly willow'" />
                    <BaseCollageInfo class="vole" :title="lang === 'ru' ? 'Полёвка-экономка' : 'Tundra vole'" />
    
                    <BaseCollageInfo class="hare" :title="lang === 'ru' ? 'Заяц-беляк' : 'Mountain hare'" :text="lang === 'ru' ? 'Спасаясь от&nbsp;опасности, развивает скорость до&nbsp;60&nbsp;км/ч. Обитает также в&nbsp;Забайкальском дивизионе' : 'It reaches speeds of up to 60 km/h whilst escaping predators. It also inhabits Trans-Baikal Division'"
                    />
    
                    <BaseDropdownInfo class="plover" :title="lang === 'ru' ? 'Золотистая ржанка': 'Golden plover'" :color="'#71464E'" :is-modal="true" :pulsation-color="'finn'" :text="lang === 'ru' ? 'В&nbsp;древности считалось, что один взгляд на&nbsp;эту пёструю птичку излечивает от&nbsp;желтухи' : 'In ancient times, it was believed that one look at this colourful bird cures jaundice'"
                    />
    
                    <BaseCollageInfo class="gooseberry" :title="lang === 'ru' ? 'Гуменник' : 'Bean goose'" :color="'#71464E'" :text="lang === 'ru' ? 'В&nbsp;полёте поднимается на&nbsp;высоту до&nbsp;10&nbsp;км' : 'Flies up to 10 km high'" />
    
                    <BaseCollageInfo class="loon" :title="lang === 'ru' ? 'Чернозобая гагара': 'Black-throated loon'" :color="'#71464E'" :text="lang === 'ru' ? 'Умеет нырять на&nbsp;глубину до&nbsp;20&nbsp;метров' : 'It can dive as deep as 20 m'" />
    
                    <BaseCollageInfo class="swan" :title="lang === 'ru' ? 'Лебедь-кликун' : 'Whooper swan'" :color="'#71464E'" :text="lang === 'ru' ? 'Мощными крыльями может отразить атаку мелких хищников. Встречается также в&nbsp;Кольском дивизионе' : 'It can fend off attacks from small predators with its powerful wings. The bird is also found in the Kola Division’s area'"
                    />
    
                    <BaseCollageInfo class="palia" :title="lang === 'ru' ? 'Боганидская палия' : 'Salvelinus boganidae'" />
                    <BaseDropdownInfo class="char" :title="lang === 'ru' ? 'Арктический голец' : 'Arctic char'" :is-modal="true" :pulsation-color="'Green-Mist'" :text="lang === 'ru' ? 'Считается самой полезной рыбой в&nbsp;мире: кусочек рыбы в&nbsp;30&nbsp;г покрывает суточную потребность человека в&nbsp;полезных жирных кислотах. Встречается также в&nbsp;водоёмах Кольского дивизиона' : 'It is considered the most nutritious fish in the world: a 30 g piece covers daily requirement of healthy fatty acids. It also inhabits Kola Division’s water bodies.'"
                    />
    
                    <BaseDropdownInfo class="ground-beetles" :title="lang === 'ru' ? 'Жужелицы' : 'Ground beetles'" :is-modal="true" :pulsation-color="'Green-Mist'" :text="lang === 'ru' ? 'Такие виды, как Amara brunnea, Pterostichus fulvescens, Notiophilus fasciatus и Nebria gyllenhali, отрицательно реагируют на&nbsp;промышленное воздействие и&nbsp;помогают исследователям фиксировать изменения в&nbsp;окружающей среде' : 'Species such as Amara brunnea, Pterostichus fulvescens, Notiophilus fasciatus, and Nebria gyllenhali respond negatively to industrial impacts and help researchers record changes in the environment'"
                    />
                    <BaseDropdownInfo class="myxomycetes" :title="lang === 'ru' ? 'Миксомицеты' : 'Myxogastria'" :is-modal="true" :pulsation-color="'Green-Mist'" :text="lang === 'ru' ? 'Миксомицеты занимают промежуточное положение между растениями и&nbsp;животными: похожие внешне на&nbsp;грибы, они постоянно передвигаются и&nbsp;едят. На&nbsp;территории воздействия предприятий исследователи обнаружили 14&nbsp;видов этих существ' : 'Myxogastria is an intermediate position between plants and animals: similar to mushrooms in appearance, they are constantly on the move and eating. Researchers have found 14 species of these creatures in the exposed area.'"
                    />
                    <BaseDropdownInfo class="microalgae" :title="lang === 'ru' ?'Микроводоросли': 'Microalgae'" :is-modal="true" :pulsation-color="'Green-Mist'" :text="lang === 'ru' ? 'В&nbsp;реках и&nbsp;озёрах дивизиона биологи обнаружили два вида микроводорослей, способных рассказать об&nbsp;экологической обстановке. Похожая на&nbsp;звезду Asterionella formosa живёт только в&nbsp;чистых водоёмах, в&nbsp;то&nbsp;время как её&nbsp;антагонист Dictyosphaerium pulchellum развивается в&nbsp;загрязнённой воде' : 'In the division’s rivers and lakes, biologists have found two species of microalgae that can tell us about the area’s ecology. The star-shaped Asterionella formosa inhabits only clean water bodies, whereas its antagonist, Dictyosphaerium pulchellum, develops in polluted water'"
                    />
    
                    <BaseDropdownInfo class="zooplankton" :title="lang === 'ru' ?'Зоопланктон': 'Zooplankton'" :is-modal="true" :pulsation-color="'Green-Mist'" :text="lang === 'ru' ? 'Чтобы оценить состояние водоёмов, исследователи отобрали виды зоопланктона, сигнализирующие о&nbsp;качестве воды. Например, планктонный рачок Limnocalanus macrurus любит чистую воду, а&nbsp;если начинает доминировать планктонная коловратка Brachionus sericus&nbsp;&mdash; вода загрязнена' : 'To assess the condition of bodies of water, researchers selected zooplankton species that signal water quality. For example, Limnocalanus macrurus, a planktonic crustacean, likes pure water, and if Brachionus sericus, a planktonic rotifer, begins to dominate, this means the water is polluted'"
                    />
    
                    <BaseDropdownInfo class="deer" :title="lang === 'ru' ?'Дикий северный олень' : 'Wild reindeer'" :color="'#71464E'" :pulsation-color="'finn'" :is-modal="true" :text="lang === 'ru' ? 'Отличительная особенность этого вида&nbsp;&mdash; наличие рогов у&nbsp;самок. Наименее изученная и&nbsp;малочисленная популяция дикого северного оленя&nbsp;&mdash; гыданская, она занесена в&nbsp;Красную книгу ЯНАО. По&nbsp;данным исследований, олени почти не&nbsp;мигрируют на&nbsp;дальние расстояния и&nbsp;круглый год остаются в&nbsp;арктической тундре' : 'A distinctive feature of this species is that females have antlers. The least studied and smallest population of wild reindeer is on the Gyda Peninsula. It is included in the Red Data Book of the Yamalo-Nenets Autonomous Area. According to research data, reindeer hardly ever migrate long distances and remain in the Arctic tundra all year round'"
                    />
                    <BaseDropdownInfo class="lycosus-moss" :title="lang === 'ru' ?'Плаунок плаунковидный' : 'Northern spikemoss'" :is-modal="true" :pulsation-color="'finn'" :color="'#71464E'" :text="lang === 'ru' ? 'В&nbsp;районе Промышленного Норильска биологи обнаружили несколько участков, ценных для&nbsp;произрастания этого редкого вида растений. Чтобы&nbsp;сохранить популяции плаунка, вокруг этих участков необходимо создавать защитные зоны' : 'In the vicinity of the Norilsk Industrial District, biologists have discovered several areas valuable for the growth of this rare plant species. To preserve Northern spikemoss populations, protective zones need to be created around these areas'"
                    />
                    <BaseDropdownInfo class="hare_mobile" :title="lang === 'ru' ? 'Заяц-беляк' : 'Mountain hare'" :is-modal="true" :pulsation-color="'Green-Mist'" :text="lang === 'ru' ? 'Спасаясь от&nbsp;опасности, развивает скорость до&nbsp;60&nbsp;км/ч' : 'It reaches speeds of up to 60 km/h whilst escaping predators. It also inhabits Trans-Baikal Division'"
                    />
                </div>
                <BaseTextBlock class="mb-100" :tooltip="true">
                    <span v-if="lang === 'ru'">
                                        <p class="mb-10">
                                        В&nbsp;месте расположения Норильского дивизиона, в&nbsp;долине Медвежьего ручья учёные обнаружили уникальную экосистему&nbsp;&mdash; выжившие тундростепи. Эти современники эпохи мамонтов и&nbsp;шерстистых носорогов сохранились благодаря уникальному сочетанию
                                        почвенных и&nbsp;климатических условий.
                                    </p>
                                    <p>
                                        <BaseTooltip :word="'Реликтовые'">
                                            Биологические реликты&nbsp;&mdash; дожившие до&nbsp;нашего времени без изменений представители прошлых эволюционных эпох. Реликтовыми могут быть организмы, виды или целые природные сообщества. Как правило, в&nbsp;прошлом реликты были широко распространены
                                            и&nbsp;играли ключевую роль в&nbsp;формировании условий жизни на&nbsp;определённой территории.
                                        </BaseTooltip>
                                        экосистемы&nbsp;&mdash; свидетели прошлых геологических эпох&nbsp;&mdash; могут поведать учёным о&nbsp;развитии планеты. Кроме того, это ценный ресурс видов, которые в&nbsp;условиях глобального изменения климата могут заселять новые места обитания.
                                    </p>
                                </span>
                    <span v-else>
                                    <p class="mb-10">
                                        In the Medvezhy Ruchey valley (Norilsk Division area), scientists have discovered a unique ecosystem – surviving steppe-tundra. A rare combination of soil and climatic conditions helped these contemporaries of mammoths and woolly rhinoceroses survive.
                                    </p>
                                    <p>
                                        <BaseTooltip :word="'Relict'">
                                            Relict species are representatives of past evolutionary eras that have survived to our time unchanged. Relicts can be organisms, species, or entire natural communities. Typically, relicts were widespread in the past and played a key role in shaping the living conditions in a particular area.
                                        </BaseTooltip>
                                         ecosystems that witnessed past geological eras can tell scientists a story about how the planet evolved. They are also a valuable resource for species that may be looking for new home in the face of global climate change.
                                    </p>
                                </span>
    
                </BaseTextBlock>
                <div class="habitat-map">
                    <div class="habitat-map__legend">
                        <div class="habitat-map__legend-top">
                            <div class="habitat-map__legend-title">
                                <span v-if="lang === 'ru'">
                                                    Зона воздействия предприятий
                                </span>
                                <span v-else>
                                    Protected species habitat map
                                </span>
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                                    <circle cx="7" cy="7" r="7" fill="#D38235" />
                                                                </svg>
                                <div v-if="lang === 'ru'">Интенсивная</div>
                                <div v-else>Severe exposure</div>
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                                    <circle cx="7" cy="7" r="7" fill="#FFEC42" />
                                                                </svg>
                                <div v-if="lang === 'ru'">Умеренная</div>
                                <div v-else>Moderate exposure</div>
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                                    <circle cx="7" cy="7" r="7" fill="#009CA6" />
                                                                </svg>
                                <div v-if="lang === 'ru'">Незначительная</div>
                                <div v-else>Insignificant exposure</div>
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                                    <circle cx="8" cy="8" r="7" fill="white" stroke="#333333" />
                                                                </svg>
                                <div v-if="lang === 'ru'">Фоновая</div>
                                <div v-else>Background exposure</div>
                            </div>
                        </div>
                        <div class="habitat-map__legend-bottom">
                            <div class="habitat-map__legend-title">
                                <span v-if="lang === 'ru'">
                                                Виды
                            </span>
                                <span v-else>
                                Species
                            </span>
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
    
                                <span v-if="lang === 'ru'">
                                            1 – Кречет
                        </span>
                                <span v-else>
                            1 – Gyrfalcon
                        </span>
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
    
                                <span v-if="lang === 'ru'">
                                            2 – Сапсан
                        </span>
                                <span v-else>
                            2 – Peregrine falcon
                        </span>
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
    
                                <span v-if="lang === 'ru'">
                                            3 – Орлан-белохвост
                        </span>
                                <span v-else>
                            3 – White-tailed eagle
                        </span>
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
    
                                <span v-if="lang === 'ru'">
                                            4 – Гуменник
                        </span>
                                <span v-else>
                            4 – Bean goose
                        </span>
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
    
                                <span v-if="lang === 'ru'">
                                            5 – Золотистая ржанка
                        </span>
                                <span v-else>
                            5 – Golden plover
                        </span>
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
    
                                <span v-if="lang === 'ru'">
                                            6 – Лебедь-кликун
                        </span>
                                <span v-else>
                            6 – Whooper swan
                        </span>
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
    
                                <span v-if="lang === 'ru'">
                                            7 – Чернозобая гагара
                        </span>
                                <span v-else>
                            7 – Black-throated loon
                        </span>
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
    
                                <span v-if="lang === 'ru'">
                                            8 – Плаунок плаунковидный
                        </span>
                                <span v-else>
                            8 – Northern spikemoss
                        </span>
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
    
                                <span v-if="lang === 'ru'">
                                            9 – Реликтовые тундростепи
                        </span>
                                <span v-else>
                            9 – Relict steppe-tundra
                        </span>
                            </div>
                        </div>
                    </div>
                    <div class="habitat-map__wrap">
                        <div v-if="!isMobile" class="habitat-map__title">
                            <span v-if="lang === 'ru'">
                                        Карта обитания охраняемых видов
                        </span>
                            <span v-else>
                            Protected species habitat map
                        </span></div>
                        <div v-if="isMobile" class="habitat-map__title">
                            <span v-if="lang === 'ru'">
                                        Зона воздействия предприятий и виды
                        </span>
                            <span v-else>
                            Protected species habitat map
                        </span></div>
                        <div class="habitat-map__list">
                            <div class="habitat-map__list-item-wrap">
                                <div class="habitat-map__list-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                                        <circle cx="7" cy="7" r="7" fill="#D38235" />
                                                                    </svg>
                                    <div v-if="lang === 'ru'">Интенсивная</div>
                                    <div v-else>Severe exposure</div>
                                </div>
                                <ul v-if="lang === 'ru'" class="habitat-map__list-list">
                                    <li>Орлан-белохвост</li>
                                    <li>Золотистая ржанка</li>
                                    <li>Лебедь-кликун</li>
                                    <li>Чернозобая гагара</li>
                                    <li>Сапсан</li>
                                </ul>
                                <ul v-else class="habitat-map__list-list">
                                    <li>White-tailed eagle</li>
                                    <li>Golden plover</li>
                                    <li>Whooper swan</li>
                                    <li>Black-throated loon</li>
                                    <li>Peregrine falcon</li>
                                </ul>
                            </div>
    
                            <div class="habitat-map__list-item-wrap">
                                <div class="habitat-map__list-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                                        <circle cx="7" cy="7" r="7" fill="#FFEC42" />
                                                                    </svg>
                                    <div v-if="lang === 'ru'">Умеренная</div>
                                    <div v-else>Moderate exposure</div>
                                </div>
                                <ul v-if="lang === 'ru'" class="habitat-map__list-list">
                                    <li>Гуменник</li>
                                    <li>Золотистая ржанка</li>
                                    <li>Лебедь-кликун</li>
                                    <li>Чернозобая гагара</li>
                                    <li>Плаунок</li>
                                </ul>
                                <ul v-else class="habitat-map__list-list">
                                    <li>Bean goose</li>
                                    <li>Golden plover</li>
                                    <li>Whooper swan</li>
                                    <li>Black-throated loon</li>
                                    <li>Northern spikemoss</li>
                                </ul>
                            </div>
    
                            <div class="habitat-map__list-item-wrap">
                                <div class="habitat-map__list-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                                        <circle cx="7" cy="7" r="7" fill="#009CA6" />
                                                                    </svg>
                                    <div v-if="lang === 'ru'">Незначительная</div>
                                    <div v-else>Insignificant exposure</div>
                                </div>
                                <ul v-if="lang === 'ru'" class="habitat-map__list-list">
                                    <li>Золотистая ржанка</li>
                                    <li>Лебедь-кликун</li>
                                    <li>Чернозобая гагара</li>
                                    <li>Реликтовые&nbsp;тундростепи</li>
                                    <li>Кречет и Сапсан</li>
                                </ul>
                                <ul v-else class="habitat-map__list-list">
                                    <li>Golden plover</li>
                                    <li>Whooper swan</li>
                                    <li>Black-throated loon</li>
                                    <li>Relict steppe-tundra</li>
                                    <li>Gyrfalcon and Peregrine falcon</li>
                                </ul>
                            </div>
    
                            <div class="habitat-map__list-item-wrap">
                                <div class="habitat-map__list-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                                        <circle cx="8" cy="8" r="7" fill="white" stroke="#333333" />
                                                                    </svg>
                                    <div v-if="lang === 'ru'">Фоновая</div>
                                    <div v-else>Background exposure</div>
                                </div>
                                <ul v-if="lang === 'ru'" class="habitat-map__list-list">
                                    <li>Гуменник</li>
                                    <li>Золотистая ржанка</li>
                                </ul>
                                <ul v-else class="habitat-map__list-list">
                                    <li>Bean goose</li>
                                    <li>Golden plover</li>
                                </ul>
                            </div>
    
                        </div>
                        <div class="habitat-map__buttons">
                            <div class="habitat-map__button" :class="{ 'habitat-map__button_active': idMap === map1 }" @click="idMap = 1">
                            
                            <span v-if="lang === 'ru'">
                                Большой Норильск / Дудинка
                </span>
                <span v-else>
                    Greater Norilsk / Dudinka
                </span>
                            </div>
                            <div class="habitat-map__button" :class="{ 'habitat-map__button_active': idMap === map2 }" @click="idMap = 2">
                            
                            <span v-if="lang === 'ru'">
                                Пеляткинское / Мессояха
                </span>
                <span v-else>
                    Pelyatkinskoe / Messoyakha
                </span>
                            </div>
                        </div>
                    </div>
    
                    <picture v-show="idMap === 1">
                        <source media="(max-width: 768px)" srcset="img/habitat-map-1-mobile.png">
                        <source type="image/webp" srcset="img/habitat-map-1.webp">
                        <img src="img/habitat-map-1.png" alt="">
                    </picture>
    
                    <picture v-show="idMap === 2">
                        <source media="(max-width: 768px)" srcset="img/habitat-map-2-mobile.png">
                        <source type="image/webp" srcset="img/habitat-map-2.webp">
                        <img src="img/habitat-map-2.png" alt="">
                    </picture>
    
                    <div v-show="idMap === 1">
                        <div class="habitat-map__name-lake">
    
                            <span v-if="lang === 'ru'">
                                        оз. Пясино
                        </span>
                            <span v-else>
                                    Lake Pyasino
                        </span>
                        </div>
                        <div class="habitat-map__city habitat-map__city-1">
                            <div class="habitat-map__city-circale"></div>
    
                            <span v-if="lang === 'ru'">
                                    Талнах
                        </span>
                            <span v-else>
                                    Talnakh
                        </span>
                        </div>
                        <div class="habitat-map__city habitat-map__city-2">
                            <div class="habitat-map__city-circale"></div>
                            <span v-if="lang === 'ru'">
                                    Норильск
                        </span>
                            <span v-else>
                                    Norilsk
                        </span>
                        </div>
                        <div class="habitat-map__city habitat-map__city-3">
                            <div class="habitat-map__city-circale"></div>
    
                            <span v-if="lang === 'ru'">
                                    Дудинка
                        </span>
                            <span v-else>
                                    Dudinka
                        </span>
                        </div>
                    </div>
                    <div v-show="idMap === 2">
                        <div class="habitat-map__river">
    
                            <span v-if="lang === 'ru'">
                                    р. Енисей
                        </span>
                            <span v-else>
                                    Yenisei River
                        </span>
                        </div>
                        <div class="habitat-map__city habitat-map__city-4">
                            <div class="habitat-map__city-circale"></div>
    
                            <span v-if="lang === 'ru'">
                                Пеляткинское газоконденсатное
                            месторождение
                        </span>
                            <span v-else>
                                Pelyatkinskoye gas condensate field
                        </span>
                        </div>
                        <div class="habitat-map__city habitat-map__city-5">
                            <div class="habitat-map__city-circale"></div>
                            
                            <span v-if="lang === 'ru'">
                                Мессояхское газоконденсатное месторождение
                        </span>
                            <span v-else>
                                Messoyakhskoye gas condensate field
                        </span>
                        </div>
                    </div>
                </div>
                <BaseTextBlock class="mb-100">
                    <p v-if="lang === 'ru'">
                        Некоторые редкие виды могут проживать в&nbsp;зонах воздействия предприятий, несмотря на&nbsp;шум или&nbsp;другие факторы воздействия. Ведь для&nbsp;их&nbsp;выживания главное&nbsp;&mdash; наличие корма и&nbsp;отсутствие беспокойства со&nbsp;стороны человека.
                    </p>
                    <p else>
                        Some rare species can live in the areas affected by facilities despite noise or other impacts. After all, their survival depends on the availability of food and an absence of human interference.
                    </p>
                </BaseTextBlock>
                <BaseSidebar>
                    <p v-if="lang === 'ru'">
                        Уникальные экосистемы, редкие и&nbsp;индикаторные виды и&nbsp;места их&nbsp;обитания&nbsp;&mdash; всё это элементы системы, с&nbsp;помощью которой компания контролирует уровень промышленного воздействия и&nbsp;сохраняет обилие и&nbsp;разнообразие природы
                        в&nbsp;дивизионе.
                    </p>
                    <p else>
                        Unique ecosystems, rare and indicator species and their habitats are all elements of the system that helps the company monitor its industrial impact and preserve the abundance and diversity of nature in the division’s area.
                    </p>
                </BaseSidebar>
            </SectionOrange>
        </MainSection>
    </div>
</template>

<script>
import BaseHero from '@/layout/BaseHero.vue'
import SectionWhite from '@/layout/SectionWhite.vue'
import SectionOrange from '@/layout/SectionOrange.vue'
import BigMap from '@/components/BigMap.vue'
import BaseTextBlock from '@/components/BaseTextBlock.vue'
import MainSection from '@/layout/MainSection'
import BaseSidebar from '@/components/BaseSidebar'
import BaseTooltip from '@/components/BaseTooltip.vue'
import BaseNumberBlock from "@/components/BaseNumberBlock.vue";
import BaseCollageInfo from '@/components/BaseCollageInfo.vue'
import BaseDropdownInfo from '@/components/BaseDropdownInfo.vue'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
    components: {
        BaseHero,
        SectionOrange,
        SectionWhite,
        BigMap,
        BaseTextBlock,
        MainSection,
        BaseSidebar,
        BaseTooltip,
        BaseNumberBlock,
        BaseCollageInfo,
        BaseDropdownInfo
    },
    data() {
        return {
            map1: 1,
            map2: 2,
            idMap: 1,
            circales: [{
                    color: 'green',
                    number: '1'
                },
                {
                    color: 'blue',
                    number: '2'
                },
                {
                    color: 'blue',
                    number: '3'
                },
                {
                    color: 'blue',
                    number: '4'
                },
                {
                    color: 'purple',
                    number: '5'
                },
                {
                    color: 'purple',
                    number: '6'
                },
                {
                    color: 'purple',
                    number: '7'
                }
            ],
            isMobile: (window.innerWidth <= 768),
            heroDescrEn: 'Animal and plant species living in&nbsp;the vicinity of&nbsp;the industrial giant of&nbsp;the Krasnoyarsk Territory&nbsp;&mdash; the Greater Norilsk',
            heroDescr: 'Какие виды животных и&nbsp;растений живут по&nbsp;соседству с&nbsp;промышленным гигантом&nbsp;Красноярского края&nbsp;&mdash; Большим Норильском'
        }
    },
    mounted() {
        this.$nextTick(function() {
            this.scrollAnimation()
            this.parallax()
        })
    },
    computed: {
        lang() {
            return this.$store.state.lang
        }
    },
    methods: {
        onResize() {
            this.isMobile = (window.innerWidth <= 768);
        },
        scrollMobile() {
            const collageItems = Array.from(document.querySelectorAll(".scroll-bg.active"))

            collageItems.forEach((elem) => {
                elem.css('background-position', '0px ' + document.scrollTop() + 'px')
            })
        },
        scrollAnimation() {
            const collageItems = Array.from(document.querySelectorAll(".text-block__wrap"));
            collageItems.forEach((elem) => {

                this.oneScrollTrigger = gsap.fromTo(elem, {
                    y: 50,
                }, {
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        start: '0% 100%',
                        end: 'bottom 75%',
                        trigger: elem,
                        scrub: true,
                        // markers: true,
                    },
                });
            });

            const sidebarItems = Array.from(document.querySelectorAll(".sidebar"));
            sidebarItems.forEach((elem) => {
                this.twoScrollTrigger = gsap.fromTo(elem, {
                    y: 50,
                }, {
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        start: '0% 100%',
                        end: 'bottom 75%',
                        trigger: elem,
                        // markers: true,
                        scrub: true,
                    },
                });
            });

            this.ScrollTrigger = gsap.to(".scroll-bg", {
                scrollTrigger: {
                    trigger: ".scroll",
                    start: '0%',
                    scrub: true,
                    toggleClass: { className: "active", targets: ".scroll-bg" }
                },
            })
            if (window.innerWidth <= 768) {
                this.scrollMobile()
            }

            gsap.fromTo(".bg-1", { opacity: '1' }, {
                opacity: '0',
                scrollTrigger: {
                    trigger: ".card-1",
                    start: 'top 0%',
                    end: 'bottom 50%',
                    endTrigger: '.card-2',
                    // markers: true,
                    scrub: true
                },

            });

            gsap.fromTo(".bg-2", { opacity: '1' }, {
                opacity: '0',
                scrollTrigger: {
                    trigger: ".card-2",
                    start: 'top 0%',
                    end: 'bottom 50%',
                    endTrigger: '.card-3',
                    // markers: true,
                    scrub: true,
                },

            });

            gsap.to(".scroll-bg", {
                scrollTrigger: {
                    trigger: ".card-3",
                    start: () => "+=120%",
                    end: () => "+=" + (document.querySelector(".scroll-wrap").offsetHeight),
                    // markers: true,
                    scrub: true,
                    toggleClass: { className: "remove-active", targets: ".scroll-bg" }
                },
            });
        },
        parallax() {
            if (window.innerWidth > 768) {
                gsap.fromTo(".collage__eagle", { y: 105 }, {
                    y: -20,
                    scrollTrigger: {
                        trigger: ".collage",
                        start: 'top 100%',
                        end: '13%',
                        // markers: true,
                        scrub: true
                    },

                });

                gsap.fromTo(".collage__merlin", { y: 55 }, {
                    y: -15,
                    scrollTrigger: {
                        trigger: ".collage",
                        start: '25% 100%',
                        end: '33%',
                        // markers: true,
                        scrub: true
                    },

                });

                gsap.fromTo(".collage__loach", { y: 50 }, {
                    y: -0,
                    scrollTrigger: {
                        trigger: ".collage",
                        start: '90% 100%',
                        end: 'bottom',
                        // markers: true,
                        scrub: true
                    },

                });

                gsap.fromTo(".collage__loon", { y: 35 }, {
                    y: -10,
                    scrollTrigger: {
                        trigger: ".collage",
                        start: '80% 100%',
                        end: '100%',
                        // markers: true,
                        scrub: true
                    },

                });
            }
        }
    }
}
</script>

<style lang="scss">
.division {
    .big-map {
        margin-bottom: 3.81rem;
        height: 40.19419rem;
        @media (max-width: 768px) {
            display: flex;
            margin-bottom: 21.3334rem;
            flex-direction: column-reverse;
            height: unset;
        }
        .map-circale {
            &__1 {
                top: 14.4rem;
                left: 57rem;
            }
            @media (max-width: 768px) {
                top: 56.4rem;
                left: 70rem;
            }
            &__2 {
                top: 10rem;
                left: 43.3rem;
                @media (max-width: 768px) {
                    top: 48.4rem;
                    left: 44.2rem;
                }
            }
            &__3 {
                top: 23.6rem;
                left: 39.7rem;
                @media (max-width: 768px) {
                    top: 73.4rem;
                    left: 38rem;
                }
            }
            &__4 {
                top: 32.8rem;
                left: 42rem;
                @media (max-width: 768px) {
                    top: 90.5rem;
                    left: 42rem;
                }
            }
            &__5 {
                top: 11.8rem;
                left: 41.6rem;
                @media (max-width: 768px) {
                    top: 51.6rem;
                    left: 40.9rem;
                }
            }
            &__6 {
                top: 11.8rem;
                left: 34.85rem;
                @media (max-width: 768px) {
                    top: 51.4rem;
                    left: 28rem;
                }
            }
            &__7 {
                top: 14.7rem;
                left: 23.55rem;
                @media (max-width: 768px) {
                    top: 57.4rem;
                    left: 7.7rem;
                }
            }
        }
        .circales {
            position: absolute;
            top: 8.31rem;
            left: 8.63rem;
            width: 11.94rem;
            display: flex;
            flex-direction: column;
            gap: 1.12rem;
            @media (max-width: 768px) {
                top: 0;
                flex-direction: row;
                flex-wrap: wrap;
                width: 81.4rem;
                gap: 3.3rem;
            }
            .circale-block {
                display: flex;
                align-items: flex-start;
                gap: 1.06rem;
                @media (max-width: 768px) {
                    width: 39rem;
                    &:last-child {
                        width: 51rem;
                    }
                }
                &__img {
                    width: 0.875rem;
                    height: 0.875rem;
                    flex-shrink: 0;
                    @media (max-width: 768px) {
                        width: 1.87rem;
                        height: 1.87rem;
                    }
                }
                &__text {
                    font-size: 0.9375rem;
                    font-weight: 300;
                    line-height: 130%;
                    @media (max-width: 768px) {
                        font-size: 3.46667rem;
                    }
                }
            }
        }
        .number-block {
            bottom: 5.63rem;
            left: unset;
            right: 7.81rem;
            @media (max-width: 768px) {
                margin-left: 9.5rem;
                width: unset;
            }
        }
    }
    .scroll {
        position: relative;
        width: 100%;
        &-bg {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1;
            height: 100vh;
            background-position: bottom;
            background-size: calc(100% - 13.5rem) 49rem;
            background-repeat: no-repeat;
            @media (max-width: 768px) {
                background-position: center;
                background-size: 100%;
            }
            &.active {
                background-attachment: fixed;
                height: 100%;
                @media (max-width: 768px) {
                    height: 100%;
                    background-size: 100%;
                    position: fixed;
                    background-attachment: unset;
                }
                &.remove-active {
                    background-attachment: unset;
                    background-position: 6.75rem 352vh;
                    background-size: calc(100% - 13.5rem) 49rem;
                    @media (max-width: 768px) {
                        background-position: bottom;
                        position: absolute;
                        background-size: 100%;
                    }
                }
            }
            &.bg-1 {
                z-index: 3;
                background-image: url(../../public/img/map-1.jpg);
            }
            &.bg-2 {
                z-index: 2;
                background-image: url(../../public/img/map-2.jpg);
            }
            &.bg-3 {
                z-index: 1;
                background-image: url(../../public/img/map-3.jpg);
            }
            @media (max-width: 768px) {
                &.bg-1 {
                    background-image: url(../../public/img/map-1-mobile.jpg);
                }
                &.bg-2 {
                    background-image: url(../../public/img/map-2-mobile.jpg);
                }
                &.bg-3 {
                    background-image: url(../../public/img/map-3-mobile.jpg);
                }
            }
        }
        &-wrap {
            position: relative;
            z-index: 10;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            padding-right: 1.25rem;
        }
        &-card {
            padding: 1.5rem;
            margin-bottom: 100vh;
            width: 34.2rem;
            border-radius: 0.25rem;
            background: #FFF;
            &:first-child {
                margin-top: 50vh;
            }
            @media (max-width: 768px) {
                padding: 4.2666rem;
                margin: 0 auto 100vh auto;
                width: 93%;
                &:first-child {
                    margin-top: 100vh;
                }
            }
            p {
                font-size: 1.25rem;
                font-weight: 300;
                line-height: 130%;
                @media (max-width: 768px) {
                    font-size: 4.53334rem;
                }
                &:first-child {
                    margin-bottom: 1.56rem;
                    font-size: 1.25rem;
                    font-weight: 600;
                    @media (max-width: 768px) {
                        margin-bottom: 6.6667rem;
                        font-size: 4.8rem;
                    }
                }
            }
            .dropdown-info {
                margin-top: 1.88rem;
                @media (max-width: 768px) {
                    margin-top: 7.4666rem;
                }
                &__title {
                    font-size: 1.25rem;
                    @media (max-width: 768px) {
                        font-size: 4.8rem;
                    }
                }
                &__text {
                    background: #F7F6F2;
                    width: 27rem;
                    font-size: 1.04167rem;
                    padding: 3.5rem 1.4375rem 1.5625rem 3.375rem;
                    @media (max-width: 768px) {
                        left: -4.3rem;
                        top: -4.3rem;
                        width: 91.734rem;
                        font-size: 3.73334rem;
                        padding: 14.9334rem 6.1333rem 6.6666rem 13.8666rem;
                    }
                }
                ul {
                    list-style-type: disc;
                    li {
                        padding-left: 0.94rem;
                    }
                    li:not(:last-child) {
                        margin-bottom: 0.8rem;
                        @media (max-width: 768px) {
                            margin-bottom: 3.2rem;
                        }
                    }
                }
            }
        }
    }
    .number-blocks {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 6.75rem;
        width: 60.5rem;
        @media (max-width: 768px) {
            flex-direction: column;
            gap: 7.467rem;
            width: 100%;
            align-items: flex-start;
        }
        .number-block {
            position: static;
            width: max-content;
            @media (max-width: 768px) {
                margin-top: 0;
            }
        }
    }
    .flora-and-fauna {
        display: flex;
        gap: 5.44rem;
        width: 63.5rem;
        margin: 0 auto;
        @media (max-width: 768px) {
            flex-direction: column;
            width: unset;
            gap: 12.27rem;
            margin-bottom: 16rem;
        }
        .text-block__wrap {
            margin: 0;
            &:first-child {
                width: 29.375rem;
            }
            &:last-child {
                width: 28.625rem;
                .number-block {
                    margin-top: 2.88rem;
                    @media (max-width: 768px) {
                        margin-top: 7.4rem;
                    }
                }
            }
            @media (max-width: 768px) {
                &:first-child,
                &:last-child {
                    width: 100%;
                }
            }
        }
    }
    .collage {
        position: relative;
        margin-bottom: 1.25rem;
        height: 347rem;
        width: 100%;
        background-image: url(../../public/img/collage.png);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: bottom;
        z-index: 11;
        @supports (background-image: url(../../public/img/collage.webp)) {
            background-image: url(../../public/img/collage.webp);
        }
        @media (max-width: 768px) {
            height: 810rem;
            background-position: left 18rem;
            background-image: url(../../public/img/collage-mobile.png);
            @supports (background-image: url(../../public/img/collage-mobile.webp)) {
                background-image: url(../../public/img/collage-mobile.webp);
            }
        }
        .dropdown-info__text {
            @media (max-width: 768px) {
                width: 93.34rem;
                padding: 10.6667rem 5.3333rem 3.7333rem 12.2666rem;
            }
        }
        .legend {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2.5rem;
            top: 9.5rem;
            .block-info {
                position: static;
                font-size: 1.25rem;
                @media (max-width: 768px) {
                    font-size: 4.53334rem;
                }
            }
            @media (max-width: 768px) {
                flex-direction: column;
                align-items: flex-start;
                gap: 1rem;
                top: -1rem;
                padding-left: 10rem;
                .block-info__text {
                    font-size: 4.53334rem;
                    line-height: 130%;
                }
            }
        }
        &__eagle {
            position: absolute;
            top: 0rem;
            left: 8rem;
            width: 52.2223rem;
            height: 47.5rem;
            background-image: url(../../public/img/collage-eagle.png);
            background-repeat: no-repeat;
            background-size: contain;
            @supports (background-image: url(../../public/img/collage-eagle.webp)) {
                background-image: url(../../public/img/collage-eagle.webp);
            }
            @media (max-width: 768px) {
                display: none;
            }
        }
        &__merlin {
            position: absolute;
            top: 87.7rem;
            left: 12.3rem;
            width: 38rem;
            height: 27rem;
            background-image: url(../../public/img/merlin.png);
            background-repeat: no-repeat;
            background-size: contain;
            @supports (background-image: url(../../public/img/merlin.webp)) {
                background-image: url(../../public/img/merlin.webp);
            }
            @media (max-width: 768px) {
                display: none;
            }
        }
        &__loach {
            position: absolute;
            top: 316rem;
            left: 6.3rem;
            width: 29.167rem;
            height: 11.528rem;
            background-image: url(../../public/img/collage-loach.png);
            background-repeat: no-repeat;
            background-size: contain;
            @supports (background-image: url(../../public/img/collage-loach.webp)) {
                background-image: url(../../public/img/collage-loach.webp);
            }
            @media (max-width: 768px) {
                display: none;
            }
        }
        &__loon {
            position: absolute;
            top: 281rem;
            left: 47.3rem;
            width: 30.903rem;
            height: 23.75rem;
            background-image: url(../../public/img/collage-loon.png);
            background-repeat: no-repeat;
            background-size: contain;
            @supports (background-image: url(../../public/img/collage-loon.webp)) {
                background-image: url(../../public/img/collage-loon.webp);
            }
            @media (max-width: 768px) {
                display: none;
            }
        }
        .eagle {
            width: 15rem;
            top: 25.7rem;
            right: 42.3rem;
            @media (max-width: 768px) {
                width: 42rem;
                top: 34rem;
                right: 8rem;
            }
        }
        .falcon {
            width: 12rem;
            top: 58.45rem;
            right: 46.2rem;
            @media (max-width: 768px) {
                width: 33rem;
                top: 94rem;
                right: 53rem;
            }
        }
        .warbler {
            width: 11rem;
            top: 48.4rem;
            right: 28.5rem;
            @media (max-width: 768px) {
                top: 193rem;
                right: 41rem;
                .block-info__text p {
                    display: none;
                }
            }
        }
        .lentils {
            width: 11rem;
            top: 50.4rem;
            left: 17.5rem;
            @media (max-width: 768px) {
                top: 256.4rem;
                left: 29.5rem;
                width: 41rem;
            }
        }
        .willow-warbler {
            width: 12rem;
            top: 76rem;
            right: 36rem;
            @media (max-width: 768px) {
                top: 205.5rem;
                right: 72.5rem;
                .block-info__text p {
                    display: none;
                }
            }
        }
        .merlin {
            position: absolute;
            top: 94rem;
            left: 44rem;
            @media (max-width: 768px) {
                top: 135rem;
                left: 12rem;
            }
        }
        .oatmeal {
            width: 7rem;
            top: 116.5rem;
            right: 30.5rem;
            @media (max-width: 768px) {
                top: 223rem;
                right: 42.5rem;
            }
        }
        .larch {
            width: 7rem;
            top: 137rem;
            right: 15.5rem;
            @media (max-width: 768px) {
                top: 154rem;
                right: 30rem;
            }
        }
        .deer {
            position: absolute;
            top: 143rem;
            left: 42rem;
            @media (max-width: 768px) {
                top: 301rem;
                left: 5rem;
                .dropdown-info__title {
                    max-width: unset;
                }
            }
        }
        .ptarmigan {
            width: 13rem;
            top: 172.2rem;
            left: 18.8rem;
            @media (max-width: 768px) {
                top: 371.2rem;
                left: 25.8rem;
            }
        }
        .shrew {
            width: 15rem;
            top: 189.8rem;
            left: 30.2rem;
            @media (max-width: 768px) {
                width: 31rem;
                top: 553rem;
                left: 37.2rem;
            }
        }
        .wolverine {
            width: 7rem;
            top: 195.9rem;
            right: 40.7rem;
            @media (max-width: 768px) {
                top: 399rem;
                right: 20.7rem;
            }
        }
        .olkhovnik {
            width: 14rem;
            top: 205rem;
            left: 46.7rem;
            @media (max-width: 768px) {
                top: 412rem;
                width: 50rem;
                left: 4rem;
            }
        }
        .willow {
            width: 9rem;
            top: 234rem;
            right: 17rem;
            @media (max-width: 768px) {
                top: 561rem;
                right: 19rem;
            }
        }
        .vole {
            width: 7rem;
            top: 237.3rem;
            right: 8.7rem;
            @media (max-width: 768px) {
                top: 364rem;
                right: 18.7rem;
            }
        }
        .hare {
            width: 15rem;
            top: 233.5rem;
            left: 27rem;
            @media (max-width: 768px) {
                display: none;
            }
            &_mobile {
                display: none;
                position: absolute;
                bottom: 260rem;
                left: 7rem;
                @media (max-width: 768px) {
                    display: block;
                    .dropdown-info__title {
                        max-width: unset;
                    }
                }
            }
        }
        .plover {
            position: absolute;
            top: 241rem;
            left: 49rem;
            @media (max-width: 768px) {
                top: 513rem;
                left: 13rem;
                .dropdown-info__title {
                    max-width: unset;
                }
            }
        }
        .gooseberry {
            width: 14rem;
            top: 259.7rem;
            right: 23.9rem;
            @media (max-width: 768px) {
                width: 48rem;
                top: 627rem;
                right: 23.9rem;
            }
        }
        .loon {
            width: 14rem;
            top: 287.2rem;
            right: 12.9rem;
            @media (max-width: 768px) {
                width: 38rem;
                top: 681rem;
                right: 1.9rem;
            }
        }
        .swan {
            width: 18rem;
            top: 284.69rem;
            left: 38.9rem;
            @media (max-width: 768px) {
                width: 43rem;
                top: 677rem;
                left: 2.9rem;
            }
        }
        .lycosus-moss {
            position: absolute;
            top: 255rem;
            left: 18rem;
            .dropdown-info__title {
                max-width: 12rem;
            }
            .dropdown-info__text {
                padding-top: 3.56rem;
            }
            .dropdown-info__wrap {
                align-items: flex-start;
            }
            @media (max-width: 768px) {
                top: unset;
                bottom: 193rem;
                left: 4rem;
                .dropdown-info__wrap {
                    align-items: center;
                }
                .dropdown-info__title {
                    max-width: unset;
                }
            }
        }
        .char {
            position: absolute;
            top: 316.8rem;
            left: 24rem;
            @media (max-width: 768px) {
                top: 772rem;
                left: 52rem;
                .dropdown-info__title {
                    font-size: 3.2rem;
                    max-width: 33rem;
                }
            }
        }
        .palia {
            bottom: 21.4rem;
            left: 46rem;
            @media (max-width: 768px) {
                bottom: 44.4rem;
                left: 10rem;
                .block-info__title {
                    font-size: 3.2rem;
                }
            }
        }
        .ground-beetles {
            position: absolute;
            bottom: 80rem;
            right: 17rem;
            @media (max-width: 768px) {
                bottom: 311rem;
                right: 40rem;
            }
        }
        .myxomycetes {
            position: absolute;
            top: 225rem;
            right: 18rem;
            @media (max-width: 768px) {
                top: 453rem;
                right: 31rem;
            }
        }
        .microalgae {
            position: absolute;
            bottom: 41rem;
            left: 20rem;
            @media (max-width: 768px) {
                bottom: 86rem;
                left: 11rem;
                .dropdown-info__title {
                    font-size: 3.2rem;
                }
            }
        }
        .zooplankton {
            position: absolute;
            bottom: 37rem;
            right: 39rem;
            @media (max-width: 768px) {
                bottom: 74rem;
                right: 22rem;
                .dropdown-info__title {
                    font-size: 3.2rem;
                }
            }
        }
    }
    .section-orange {
        &__title {
            color: var(--copper, #D38235);
            margin-bottom: 2.19rem;
            font-size: 2.125rem;
            font-weight: 600;
            line-height: 130%;
            @media (max-width: 768px) {
                font-size: 7.4667rem;
                margin-bottom: 6.4rem;
            }
        }
        .text {
            width: 38.25rem;
            text-align: center;
            @media (max-width: 768px) {
                width: unset;
                text-align: start;
            }
        }
        .number-block {
            position: static;
        }
    }
    .habitat-map {
        position: relative;
        margin-bottom: 4.5rem;
        height: 40rem;
        @media (max-width: 768px) {
            height: unset;
        }
        &__wrap {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            @media (max-width: 768px) {
                position: static;
                transform: translateX(0);
                margin-bottom: 5.867rem;
                padding: 0 5rem;
            }
        }
        &__title {
            margin-bottom: 1.63rem;
            font-size: 1.375rem;
            font-weight: 600;
            line-height: 130%;
            text-align: center;
            @media (max-width: 768px) {
                text-align: start;
                width: 52.5rem;
                margin-bottom: 7.75rem;
                font-size: 4.8rem
            }
        }
        &__buttons {
            display: flex;
            gap: 1rem;
            @media (max-width: 768px) {
                flex-direction: column;
                gap: 2rem;
            }
        }
        &__button {
            cursor: pointer;
            padding: 0.8125rem 1.25rem;
            border-radius: 3.125rem;
            border: 1px solid var(--sea, #21285C);
            font-size: 1.25rem;
            color: #21285C;
            line-height: 130%;
            opacity: 0.4;
            transition: .2s;
            @media (max-width: 768px) {
                padding: 4rem 6rem;
                border-radius: 8.125rem;
                font-size: 4.53334rem;
                text-align: center;
            }
            &_active {
                opacity: 1;
            }
            &:hover {
                color: var(--copper, #D38235);
                border-color: #D38235;
                opacity: 1;
            }
        }
        &__legend {
            position: absolute;
            left: 7.37rem;
            top: 10.19rem;
            width: 12.4rem;
            @media (max-width: 768px) {
                display: none;
            }
            &-title {
                margin-bottom: 1rem;
                font-size: 0.9375rem;
                font-weight: 700;
                line-height: 130%;
            }
            &-text {
                font-size: 0.9375rem;
                font-weight: 300;
                line-height: 130%;
            }
            &-top {
                margin-bottom: 2.81rem;
                &-item {
                    display: flex;
                    gap: 0.56rem;
                    align-items: center;
                    &:not(:last-child) {
                        margin-bottom: 0.62rem;
                    }
                    svg {
                        width: 0.875rem;
                        height: 0.875rem;
                    }
                }
            }
            &-bottom {
                &-item {
                    &:not(:last-child) {
                        margin-bottom: 0.69rem;
                    }
                }
            }
        }
        &__list {
            display: none;
            flex-wrap: wrap;
            row-gap: 6rem;
            margin-bottom: 3rem;
            @media (max-width: 768px) {
                display: flex;
            }
            &-item {
                display: flex;
                margin-bottom: 2rem;
                align-items: center;
                gap: 1rem;
                font-size: 4.2042rem;
                line-height: 130%;
                &-wrap {
                    width: 50%;
                }
                svg {
                    width: 3.7333rem;
                    height: 3.7333rem;
                }
            }
            &-list {
                margin-left: 4rem;
                padding-left: 4rem;
                font-size: 3.6036rem;
                font-weight: 300;
                line-height: 130%;
                li {
                    list-style-type: disc;
                    &:not(:last-child) {
                        margin-bottom: 2.66rem;
                    }
                }
            }
        }
        &__river,
        &__name-lake {
            position: absolute;
            color: var(--blue-deep, #004C97);
            font-size: 0.5625rem;
            font-weight: 300;
            line-height: 130%;
            @media (max-width: 768px) {
                font-size: 2.4rem;
            }
        }
        &__name-lake {
            top: 14rem;
            right: 28rem;
            @media (max-width: 768px) {
                top: unset;
                right: 25rem;
                bottom: 57rem;
            }
        }
        &__river {
            top: 16rem;
            transform: rotate(49deg);
            right: 24.7rem;
            @media (max-width: 768px) {
                display: none;
            }
        }
        &__city {
            position: absolute;
            width: max-content;
            display: flex;
            align-items: center;
            font-size: 0.9375rem;
            font-weight: 400;
            line-height: 130%;
            gap: 0.31rem;
            @media (max-width: 768px) {
                font-size: 3.2rem;
                gap: 1rem;
            }
            &-circale {
                width: 1.6rem;
                height: 1.6rem;
                border-radius: 100%;
                transition-timing-function: ease-in;
                transition-duration: 0.7s;
                transition: all 2.3s;
                z-index: 2;
                background-color: rgba(#333, 1);
                flex-shrink: 0;
                @media (min-width: 769px) {
                    width: 0.375rem;
                    height: 0.375rem;
                    animation: ripple-black 0.9s infinite;
                }
            }
            &-1 {
                top: 16rem;
                right: 10.5rem;
                @media (max-width: 768px) {
                    top: unset;
                    bottom: 48rem;
                    right: 6.5rem;
                }
            }
            &-2 {
                top: 26.5rem;
                right: 15rem;
                @media (max-width: 768px) {
                    top: unset;
                    bottom: 36rem;
                    right: 9rem;
                    left: unset;
                }
            }
            &-3 {
                top: 22.5rem;
                left: 28.5rem;
                @media (max-width: 768px) {
                    top: unset;
                    bottom: 40rem;
                    left: 10.5rem;
                }
            }
            &-4 {
                width: 8rem;
                flex-direction: column;
                align-items: flex-start;
                gap: 3.34rem;
                top: 17.5rem;
                left: 34rem;
                &::after {
                    position: absolute;
                    content: '';
                    top: 0.1rem;
                    left: 0.15rem;
                    height: 3.34375rem;
                    width: 1px;
                    background-color: #000;
                }
                @media (max-width: 768px) {
                    flex-direction: row;
                    top: unset;
                    bottom: 36rem;
                    right: unset;
                    left: 11.5rem;
                    gap: 1.34rem;
                    &::after {
                        display: none;
                    }
                }
            }
            &-5 {
                width: 8rem;
                flex-direction: column-reverse;
                align-items: flex-start;
                gap: 3.34rem;
                top: 29.2rem;
                left: 57.2rem;
                &::after {
                    position: absolute;
                    bottom: 0.1rem;
                    left: 0.15rem;
                    content: '';
                    height: 3.34375rem;
                    width: 1px;
                    background-color: #000;
                }
                @media (max-width: 768px) {
                    flex-direction: row;
                    top: unset;
                    bottom: 8rem;
                    left: 39rem;
                    gap: 1.34rem;
                    &::after {
                        display: none;
                    }
                }
            }
        }
    }
}
</style>