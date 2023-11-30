<template>
    <div class="kola">
        <BaseHero :title="lang === 'ru' ? 'Кольский дивизион. Природные обитатели Кольского Заполярья' : 'Kola Division. Natural inhabitants of the Kola Polar Region'" :descr="lang === 'ru' ? heroDescr : heroDescrEn"
            :img="'img/hero5.jpg'" :imgMobile="'img/hero5-mobile.jpg'" />
        <MainSection>
            <SectionWhite>
                <BaseTextBlock class="text mb-40" :title="lang === 'ru' ? 'Особенности дивизиона' : 'Division profile'" :tooltip="true">
                    
                    <span v-if="lang === 'ru'">
                        <p class="mb-10">
                        Кольский
                        <BaseTooltip :word="'дивизион'">
                            Компании объединяют в&nbsp;дивизион предприятия одного региона или&nbsp;объекты с&nbsp;общей задачей,
                            например, перевозкой сырья или&nbsp;энергоснабжением. Деление на&nbsp;дивизионы (от&nbsp;французского
                            слова division&nbsp;&mdash; &laquo;разделение&raquo;) упрощает управление крупной организацией.
                        </BaseTooltip>
                        &laquo;Норникеля&raquo; составляют объекты Кольской горно-металлургической
                        компании (ГМК), созданные на&nbsp;базе старейших предприятий по&nbsp;добыче и&nbsp;переработке
                        никеля&nbsp;&mdash; комбинатов &laquo;Североникель&raquo; и&nbsp;&laquo;Печенганикель&raquo;.
                        Подразделения ГМК территориально удалены друг от&nbsp;друга и&nbsp;образуют два
                        кластера&nbsp;&mdash; &laquo;Мончегорский&raquo; и&nbsp;&laquo;Никель&nbsp;&mdash;
                        Заполярный&raquo;.
                    </p>
                    <p>
                        Сегодня компания &laquo;Норникель&raquo; много внимания уделяет модернизации предприятий Кольского
                        дивизиона, стремясь сократить промышленный след и&nbsp;бережно относясь к&nbsp;окружающей среде.
                    </p>
                </span>
                <span v-else>
                    <p class="mb-10">
                        Nornickel's Kola
                        <BaseTooltip :word="'Division'">
                            Companies create divisions by grouping together enterprises or facilities in the same region or with shared tasks, such as feedstock transportation or energy supply. Divisions help streamline the management of large organisations.
                        </BaseTooltip>
                        comprises the facilities of Kola Mining and Metallurgical Company (MMC), which was established on the basis of the oldest nickel mining and processing enterprises, Severonickel and Pechenganickel. MMC's divisions are geographically remote from each other and form two clusters, Monchegorsk and Nickel – Zapolyarny.
                    </p>
                    <p>
                        Today, Nornickel is prioritising the upgrade of the Kola Division's facilities in an effort to reduce its industrial footprint and protect the environment.
                    </p>
                </span>
                </BaseTextBlock>

                <BigMap :circales="circales" :img="lang === 'ru' ? 'img/kola-big-map' : 'img/kola-big-map-en' " :imgMobile="lang === 'ru' ? 'img/kola-big-map-mobile' : 'img/kola-big-map-en-mobile'">
                    <div class="circales">
                        <div class="circale-block">
                            <svg class="circale-block__img" xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                viewBox="0 0 14 14" fill="none">
                                <circle cx="7" cy="7" r="7" fill="#654EA3" />
                            </svg>

                            <div v-if="lang === 'ru'" class="circale-block__text">Промышленные объекты</div>
                            <div v-else class="circale-block__text">Industrial facilities</div>
                        </div>
                        <div class="circale-block">
                            <svg class="circale-block__img" xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                viewBox="0 0 14 14" fill="none">
                                <circle cx="7" cy="7" r="7" fill="#009CA6" />
                            </svg>

                            <div v-if="lang === 'ru'" class="circale-block__text">Особо охраняемые природные территории</div>
                            <div v-else class="circale-block__text">Specially protected <br/>natural areas</div>
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
                    <div class="scroll-bg bg-4">
                    </div>
                    <div class="scroll-wrap">
                        <div class="scroll-card card-1 text-block__descr">
                            
                            <span v-if="lang === 'ru'">
                                <p>Промышленная площадка «Никель — Заполярный»</p>
                            <p>
                                Отвечает за&nbsp;разработку месторождений, расположенных между посёлком Никель
                                и&nbsp;городом Заполярный на&nbsp;западе Мурманской области. Здесь компания добывает руду,
                                содержащую никель, медь и&nbsp;другие полезные компоненты, а&nbsp;затем обогащает
                                её&nbsp;на&nbsp;фабрике Заполярного, получая медно-никелевый концентрат.
                            </p>
                </span>
                <span v-else>
                    <p>Nickel – Zapolyarny production site</p>
                            <p>
                                It develops deposits located between Nickel and Zapolyarny in the west of the Murmansk Region, where the сompany mines ore containing nickel, copper and other valuable components and then processes it at the zapolyarny Concentrator to obtain copper-nickel concentrate.
                            </p>
                </span>
                            <BaseDropdownInfo :title="lang === 'ru' ? 'Объекты' : 'Facilities'" :color="'#D38235'"
                                :text="lang === 'ru' ? '<ul><li>Рудник Северный</li><li>Рудник Каула-Котсельваара</li><li>Обогатительная фабрика г. Заполярный</li></ul>' : '<ul><li>Severny Mine</li><li>Kaula-Kotselvaara Mine</li><li>Zapolyarny Concentrator</li></ul>'" />
                        </div>
                        <div class="scroll-card card-2 text-block__descr">
                  

                            <span v-if="lang === 'ru'">
                                <p>Заповедник «Пасвик»</p>
                            <p>
                                Призван сохранить северные сосновые леса, обширные болотные угодья мирового значения
                                и&nbsp;фауны водоплавающих птиц Мурманской области. Территория заповедника находится
                                в&nbsp;юго-западном направлении от&nbsp;промышленной площадки &laquo;Никель&nbsp;&mdash;
                                Заполярный&raquo;.
                            </p>
                </span>
                <span v-else>
                    <p>Pasvik Nature Reserve</p>
                            <p>
                                It was established to preserve northern pine forests, extensive wetlands of global importance and water birds of the Murmansk Region. The nature reserve is located to the south-west of the Nickel – Zapolyarny production site.
                            </p>
                </span>
                        </div>
                        <div class="scroll-card card-3 text-block__descr">
                           
                            <span v-if="lang === 'ru'">
                                <p>Промышленная площадка «Мончегорск»</p>
                            <p>Расположена юго-западнее жилой застройки города Мончегорск, в&nbsp;центральной части региона.
                                Объединяет металлургические объекты Кольской ГМК, где производят катодные никель
                                и&nbsp;медь, карбонильный никель, электролитный кобальт, концентраты драгоценных металлов,
                                меди и&nbsp;никеля, а&nbsp;также серную кислоту.
                            </p>
                </span>
                <span v-else>
                    <p>Monchegorsk production site</p>
                            <p>The site is located to the south-west of the residential area of Monchegorsk, in the central part of the region. It includes the metallurigical facilities of Kola MMC, which produce copper and nickel cathodes, nickel carbonyl, electrolytic cobalt, concentrates of precious metals, copper and nickel, and sulphuric acid.
                            </p>
                </span>
                            <BaseDropdownInfo :title="lang === 'ru' ? 'Объекты' : 'Facilities'" :color="'#D38235'"
                                :text="lang === 'ru' ? '<ul><li>Рафинировочный цех</li><li>Химико-металлургический цех</li><li>Цеха электролиза никеля №1 и №2</li></ul>' : '<ul><li>Refining shop</li><li>Chemical and metallurgical shop</li><li>Nickel tankhouses No. 1 and No. 2</li></ul>'" />
                        </div>
                        <div class="scroll-card card-4 text-block__descr">
                            
                            <span v-if="lang === 'ru'">
                                <p>Лапландский заповедник</p>
                            <p>Ближайший и&nbsp;важнейший для&nbsp;восстановления и&nbsp;сохранения разнообразия видов
                                в&nbsp;районе воздействия промышленных объектов Мончегорской площадки. Заповедник был создан
                                для&nbsp;охраны западной популяции горно-тундровой формы дикого северного оленя и&nbsp;отдельных
                                уникальных для&nbsp;Кольского полуострова экосистем. Часть
                                <BaseTooltip :word="'буферной зоны'">
                                    Периметры безопасности, которые защищают и&nbsp;поддерживают жизнедеятельность
                                    охраняемых растений, растительной группы или&nbsp;целой природной территории. В&nbsp;буферных
                                    зонах нельзя вырубать деревья, охотиться и&nbsp;передвигаться на&nbsp;автомобиле.
                                </BaseTooltip> заповедника попадает
                                в&nbsp;пояса умеренного и&nbsp;незначительного воздействия предприятий
                                &laquo;Норникеля&raquo;.
                            </p>
                </span>
                <span v-else>
                    <p>Lapland Nature Reserve</p>
                            <p>The reserve is the nearest and most important for the restoration and conservation of species diversity in the area affected by the industrial facilities on the Monchegorsk site. It was established to protect the western population of the alpine-tundra wild reindeer, and some ecosystems unique to the Kola Peninsula. Part of the reserve's
                                <BaseTooltip :word="'buffer zone'">
                                    Safety zones that protect and maintain the viability of protected plants, a group of plants or an entire natural area. No tree felling, hunting, or motorised traffic are allowed in the buffer zones.
                                </BaseTooltip> is in the area of moderate and insignificant impact of Nornickel's operations.
                            </p>
                </span>
                        </div>
                    </div>
                </section>

                <BaseTextBlock class="text mb-40" :title="lang === 'ru' ? 'Модернизация производства' : 'Production upgrade'">
                    
                    <span v-if="lang === 'ru'">
                        <p class="mb-10">
                        Сегодня &laquo;Норникель&raquo; активно модернизирует действующие предприятия Кольской ГМК
                        и&nbsp;закрывает устаревшие, опираясь на&nbsp;современное видение экологичного производства.
                    </p>
                    <p class="mb-10">
                        <b>2020 год</b>&nbsp;&mdash; Компания закрыла одно из&nbsp;самых старых производств
                        в&nbsp;регионе&nbsp;&mdash; плавильный цех в&nbsp;посёлке Никель.
                    </p>
                    <p>
                        <b>2021 год</b>&nbsp;&mdash; В&nbsp;Мончегорске была остановлена рафинировочная медная площадка,
                        производящая медь по&nbsp;устаревшей технологии.
                    </p>
                </span>
                <span v-else>
                    <p class="mb-10">
                        At the moment Nornickel is actively upgrading Kola MMC's existing facilities and shutting down obsolete ones, based on the modern vision of eco-friendly production.
                    </p>
                    <p class="mb-10">
                        <b>2020</b>&nbsp;&mdash; the company shut down one of the region’s oldest production facilities, a smelting shop in Nickel. 
                    </p>
                    <p>
                        <b>2021</b>&nbsp;&mdash; Nornickel shut down a copper refining facility in Monchegorsk, which had been producing copper using outdated technology.
                    </p>
                </span>
                </BaseTextBlock>

                <div class="modernization">
                    <div class="modernization__item">
                        <div class="modernization__item-top">2015</div>
                        <div class="modernization__item-mid">
                            <div class="modernization__mid-text_1">
                                2020
                            </div>
                            <div class="modernization__mid-text_2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="28" viewBox="0 0 18 28"
                                    fill="none">
                                    <path
                                        d="M9 28L17.6603 13L0.339745 13L9 28ZM7.5 -6.55666e-08L7.5 14.5L10.5 14.5L10.5 6.55666e-08L7.5 -6.55666e-08Z"
                                        fill="#333333" />
                                </svg>
                                71<span>%</span>
                            </div>
                            <div class="modernization__mid-bg"></div>
                        </div>
                        <div class="modernization__item-bottom">
                            
                            <span v-if="lang === 'ru'">
                                Объём выбросов SO₂ в&nbsp;районе&nbsp;п.&nbsp;Никель&nbsp;и&nbsp;г.&nbsp;Заполярный
                </span>
                <span v-else>
                    SO₂ emissionsin the area of Nickel and Zapolyarny
                </span>
                        </div>
                    </div>
                    <div class="modernization__item">
                        <div class="modernization__item-top">2015</div>
                        <div class="modernization__item-mid">
                            <div class="modernization__mid-text_1">
                                2021
                            </div>
                            <div class="modernization__mid-text_2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="28" viewBox="0 0 18 28"
                                    fill="none">
                                    <path
                                        d="M9 28L17.6603 13L0.339745 13L9 28ZM7.5 -6.55666e-08L7.5 14.5L10.5 14.5L10.5 6.55666e-08L7.5 -6.55666e-08Z"
                                        fill="#333333" />
                                </svg>
                                90<span>%</span>
                            </div>
                            <div class="modernization__mid-bg"></div>
                        </div>
                        <div class="modernization__item-bottom">
                            
                            <span v-if="lang === 'ru'">
                                Общий объём выбросов SO₂ предприятиями Кольского&nbsp;дивизиона
                </span>
                <span v-else>
                    Total SO₂ emissions by Kola Division
                </span>
                        </div>
                    </div>
                </div>

                <BaseTextBlock class="text text-w mb-40" :title="lang === 'ru' ? 'Зона воздействия предприятий Кольского&nbsp;дивизиона' : 'Impact zone of Kola Division’s facilities'">
                    
                    <span v-if="lang === 'ru'">
                        <p class="mb-10">
                        Опираясь на&nbsp;состояние экосистем в&nbsp;регионе, участники Большой Научной экспедиции определили
                        предполагаемый радиус общего промышленного воздействия — 16 км от&nbsp;объектов промышленных
                        площадок
                        «Мончегорск» и&nbsp;«Никель — Заполярный». В&nbsp;исследованиях 2022 года оценивалась суммарная зона
                        воздействия промплощадок Кольской ГМК и&nbsp;других объектов, оказывающих антропогенное влияние.
                    </p>
                    <p class="mb-10">
                        Трансформация природных сообществ напрямую зависит от&nbsp;интенсивности воздействия. По&nbsp;данным
                        исследований, наибольшие изменения обнаруживаются в&nbsp;пределах 1&ndash;3&nbsp;км от&nbsp;комбинатов.
                    </p>
                    <p class="mb-10">
                        Зона умеренного и&nbsp;незначительного воздействия протянулась на&nbsp;расстоянии 3&ndash;16&nbsp;км
                        от&nbsp;промплощадок
                        и&nbsp;в&nbsp;период до&nbsp;2020&nbsp;года захватывала часть территории заповедника «Пасвик»
                        и&nbsp;«Лапландского
                        заповедника». Всего за&nbsp;три&nbsp;года в&nbsp;данных местах наблюдается активное восстановление,
                        связанное с&nbsp;сокращением негативного воздействия, длившегося 70&nbsp;лет.
                    </p>
                    <p class="mb-10">
                        Площадки исторического воздействия были включены во&nbsp;внимание при&nbsp;проведении исследований
                        в&nbsp;2022&nbsp;и&nbsp;2023&nbsp;годах, как&nbsp;площадки, на&nbsp;которых рекомендуется
                        организовать режим постоянного мониторинга.
                    </p>
                    <p>
                        Также в&nbsp;2020&nbsp;году был закрыт плавильный цех в&nbsp;Никеле, оказывающий негативное
                        воздействие на&nbsp;территории «Пасвика». За&nbsp;пределами 16&nbsp;км состояние среды исследователи
                        расценивают как&nbsp;фоновое.
                    </p>
                </span>
                <span v-else>
                    <p class="mb-10">
                        Based on&nbsp;the condition of&nbsp;the ecosystems in&nbsp;the region, the Big Scientific Expedition assessed the radius of&nbsp;the estimated general industrial impact as&nbsp;being 16&nbsp;km from the facilities of&nbsp;the Monchegorsk and Nickel&nbsp;&mdash; Zapolyarny operations. The 2022 studies assessed the total area affected by&nbsp;Kola MMC&rsquo;s industrial sites and other facilities with anthropogenic impact.
                    </p>
                    <p class="mb-10">
                        The transformation of&nbsp;natural communities is&nbsp;directly related to&nbsp;the intensity of&nbsp;this impact. The research shows that the most notable changes are found within 1&ndash;3&nbsp;km from the facilities.
                    </p>
                    <p class="mb-10">
                        The area of&nbsp;moderate and insignificant impact lies at&nbsp;a&nbsp;distance of&nbsp;3&ndash;16&nbsp;km from the production sites, and until 2020&nbsp;it covered a&nbsp;part of&nbsp;the Pasvik Nature Reserve and the Lapland Nature Reserve. In&nbsp;just three years, the areas in&nbsp;question have seen strong recovery due to&nbsp;the reduction of&nbsp;the negative impact of&nbsp;seven decades.
                    </p>
                    <p class="mb-10">
                        The areas of&nbsp;legacy impact were taken into consideration by&nbsp;studies in&nbsp;2022 and 2023&nbsp;as sites where an&nbsp;ongoing monitoring process is&nbsp;recommended.
In&nbsp;2020, the smelting shop that had a&nbsp;negative impact on&nbsp;the Pasvik area was closed in&nbsp;Nickel.
                    </p>
                    <p>
                        At&nbsp;a&nbsp;distance beyond 16&nbsp;km, the researchers regard the state of&nbsp;the environment as&nbsp;background.
                    </p>
                </span>
                </BaseTextBlock>
                <div class="transbaikal-radius mb-60">
                    <div class="transbaikal-radius__wrap">
                        
                        <span v-if="lang === 'ru'">
                            <div class="transbaikal-radius__wrap-top mb-10">> 16 км</div>
                        <div class="transbaikal-radius__wrap-mid mb-10">Фоновая зона</div>
                        <div class="transbaikal-radius__wrap-bottom">
                            За пределами этого радиуса показатели биоразнообразия приняты за
                            <BaseTooltip :word="'фоновые'">
                                На&nbsp;фоновых участках исследователи не&nbsp;обнаружили следов воздействия предприятий,
                                экосистемы здесь сохранены в&nbsp;их&nbsp;исходном, первозданном виде. Состояние
                                биоразнообразия на&nbsp;фоновых территориях принимают за&nbsp;эталонное и&nbsp;используют
                                эти данные для&nbsp;наблюдения за&nbsp;природой в&nbsp;зонах воздействия.
                            </BaseTooltip>
                        </div>
                </span>
                <span v-else>
                    <div class="transbaikal-radius__wrap-top mb-10">> 16 km</div>
                        <div class="transbaikal-radius__wrap-mid mb-10">Background area</div>
                        <div class="transbaikal-radius__wrap-bottom">
                            Outside this radius, biodiversity indicators are taken as 
                            <BaseTooltip :word="'background'">
                                In the background areas, researchers found no traces of industrial impact, and the ecosystems there are in their original, pristine state. The state of the biodiversity in the background areas is taken as a reference point, and these data are used to monitor the nature in the affected territories.
                            </BaseTooltip> values.
                        </div>
                </span>
                    </div>
                    <picture>
                        <source media="(max-width: 768px)" type="image/webp" :srcset="lang === 'ru' ? 'img/kola-radius-mobile.webp' :'img/kola-radius-en-mobile.webp' ">
                        <source media="(max-width: 768px)" :srcset="lang === 'ru' ? 'img/kola-radius-mobile.png' : 'img/kola-radius-en-mobile.png'">
                        <source type="image/webp" :srcset="lang === 'ru' ? 'img/kola-radius.webp' : 'img/kola-radius-en.webp'">
                        <img :src="lang === 'ru' ? 'img/kola-radius.png' : 'img/kola-radius-en.png'" alt="">
                    </picture>
                </div>
                <BaseSidebar>
                    <p v-if="lang === 'ru'">
                        На&nbsp;состоянии природных сообществ дивизиона особенно сказывается изъятие территорий
                        и&nbsp;крайне высокое
                        содержание металлов в&nbsp;почве, связанной с&nbsp;природной аномалией. Эти факторы снижают видовое
                        разнообразие и&nbsp;продуктивность местных экосистем.
                    </p>
                    <p v-else>
                        The Division's natural animal populations are particularly affected by the appropriation of habitats and extremely high levels of metals in the soil associated with a natural anomaly. These factors reduce the diversity of species diversity and productivity of local ecosystems.
                    </p>
                </BaseSidebar>
            </SectionWhite>
            <SectionOrange>
                <BaseTextBlock class="text mb-60 mb-60-m" :tooltip="true">
                    <div class="section-orange__title">
                        
                        <span v-if="lang === 'ru'">
                            Кто обитает в&nbsp;Кольском&nbsp;Заполярье
                </span>
                <span v-else>
                    Which species inhabit the&nbsp;Polar&nbsp;Region?
                </span>
                    </div>
                    <div class="section-orange__descr">
                        <p v-if="lang === 'ru'">
                            В&nbsp;зоне, прилегающей к&nbsp;промышленным площадкам &laquo;Мончегорск&raquo;
                            и&nbsp;&laquo;Никель&nbsp;&mdash; Заполярный&raquo;, участники Большой Научной экспедиции
                            обнаружили несколько
                            <BaseTooltip :word="'охраняемых видов'">
                                Редкие и&nbsp;находящиеся под угрозой исчезновения виды, чья численность сокращается или&nbsp;уже
                                сократилась до&nbsp;опасного уровня. Им&nbsp;присваивают статус охраняемых и&nbsp;заносят
                                в&nbsp;Красные книги&nbsp;&mdash; общероссийскую или&nbsp;региональные. Охранный статус запрещает
                                охоту на&nbsp;животных, а&nbsp;в&nbsp;местах обитания краснокнижных растений и&nbsp;грибов
                                ограничены строительство и&nbsp;другая хозяйственная деятельность.
                            </BaseTooltip>
                            растений и&nbsp;птиц и&nbsp;выделили участки, критически
                            важные для&nbsp;жизни и&nbsp;благополучия местных обитателей. Для&nbsp;дальнейших наблюдений
                            за&nbsp;состоянием биоразнообразия также отобрали
                            <BaseTooltip :word="'индикаторные виды'">
                                Исследователи выбирают виды-индикаторы из&nbsp;числа типичных для&nbsp;региона организмов,
                                наиболее чутко реагирующих на&nbsp;отклонения в&nbsp;состоянии природной среды. Если
                                в&nbsp;составе вида-индикатора происходят изменения, то&nbsp;возможно, что в&nbsp;экосистеме
                                что-то пошло не&nbsp;так.
                            </BaseTooltip> растений и&nbsp;животных.
                        </p>
                        <p v-else>
                            In the area adjacent to the Monchegorsk and Nickel – Zapolyarny production sites, the Big Scientific Expedition discovered several 
                            <BaseTooltip :word="'protected plant and bird species'">
                                Rare or endangered species whose numbers are declining or have already declined to dangerous levels. They are given the status of protected species and included in national or regional Red Data Books. Their conservation status prohibits hunting, as well as restricting construction and other economic activities in the habitats of red-listed plants and mushrooms.
                            </BaseTooltip>
                             and identified spots critical for the life and wellbeing of local animal populations. 
                            <BaseTooltip :word="'Indicator species'">
                                Researchers select indicator species from the organisms that are typical of the region and most sensitive to deviations in the state of the natural environment. If there are changes in the composition of an indicator species, it is possible that something has gone wrong in the ecosystem.
                            </BaseTooltip> were also selected for further biodiversity monitoring.
                        </p>
                    </div>
                </BaseTextBlock>
                <div class="flora-and-fauna">
                    <BaseTextBlock :title=" lang === 'ru' ? 'Флора' : 'Flora'">
                       
                        <span v-if="lang === 'ru'">
                            <p class="mb-10">
                            В&nbsp;районе Заполярного и&nbsp;посёлка Никель преобладают лесотундровые невысокие древесные
                            растения и&nbsp;кустарники, участки
                            <BaseTooltip :word="'криволесья'">
                                В&nbsp;криволесьях растут деревья и&nbsp;кустарники с&nbsp;изогнутыми стволами
                                и&nbsp;ветвями. Причудливые формы им&nbsp;придают сильные ветры, снег и&nbsp;сила тяжести.
                            </BaseTooltip> чередуются с&nbsp;заболоченными территориями.
                            Повсюду встречаются мхи и&nbsp;лишайники, а&nbsp;также северные ягоды: черника, морошка,
                            брусника и&nbsp;клюква.
                        </p>
                        <p>
                            Предприятия вблизи Мончегорска расположены в&nbsp;зоне северной тайги, леса здесь
                            в&nbsp;основном редкостойные, разделённые озёрами и&nbsp;болотами. Гористые участки добавляют
                            к&nbsp;местной растительности тундровые виды кустарников и&nbsp;трав.
                        </p>
                </span>
                <span v-else>
                    <p class="mb-10">
                        In the vicinity of Zapolyarny and Nickel, forest-tundra low woody plants and shrubs prevail with
                            <BaseTooltip :word="'krummholz'">
                                The facilities near Monchegorsk are located in the northern taiga zone mostly, with woodlands separated by lakes and bogs. Upland areas add tundra species of shrubs and grasses to the native vegetation.
                            </BaseTooltip> areas alternating with wetlands. Mosses and lichens are ubiquitous as well as northern berries such as blueberry, cloudberry, lingonberry and cranberry.
                        </p>
                        <p>
                            The facilities near Monchegorsk are located in the northern taiga zone mostly, with woodlands separated by lakes and bogs. Upland areas add tundra species of shrubs and grasses to the native vegetation.
                        </p>
                </span>
                        <BaseNumberBlock class="" :textTop=" lang === 'ru' ? '54 вида' : '54 species'" :textBottom="lang === 'ru' ?'сосудистых растений' : 'of vascular plants'" />
                    </BaseTextBlock>
                    <BaseTextBlock :title="lang === 'ru' ?'Фауна': 'Fauna'">
                     
                        <span v-if="lang === 'ru'">
                            <p class="mb-10">
                            Животный мир в&nbsp;окрестностях промплощадок &laquo;Мончегорск&raquo;
                            и&nbsp;&laquo;Никель&nbsp;&mdash;&nbsp;Заполярный&raquo;, как и&nbsp;на&nbsp;всей территории Крайнего
                            Севера, не&nbsp;слишком разнообразен. Видовым богатством отличаются лишь птицы, причём
                            в&nbsp;зоне интенсивного воздействия, рядом с&nbsp;постройками, этот показатель выше из-за
                            <BaseTooltip :word="'синантропных'">
                                Синантропные виды насекомых, птиц, животных и&nbsp;растений научились жить рядом
                                с&nbsp;людьми. Они используют жилые постройки в&nbsp;качестве мест обитания и&nbsp;могут
                                питаться пищевыми запасами людей или&nbsp;отходами.
                            </BaseTooltip>
                            и&nbsp;водоплавающих видов. Близость лесов привлекает сюда белую куропатку
                            и&nbsp;глухаря.
                        </p>
                        <p>
                            Озёра и&nbsp;реки дивизиона богаты разными видами рыб: сиг, хариус, радужная форель, голец,
                            в&nbsp;больших количествах водятся окунь и&nbsp;щука.
                        </p>
                </span>
                <span v-else>
                    <p class="mb-10">
                        The fauna in the vicinity of the Monchegorsk and Nickel – Zapolyarny production sites can hardly be called diverse, just like everywhere across the Far North. Only birds boast a rich variety of species, which is higher in the severely exposed area near buildings, due to 
                            <BaseTooltip :word="'synanthropic'">
                                Synanthropic insects, birds, animals, and plants have learnt to live alongside humans. They use residential structures as habitats and can feed on human food stocks or waste.
                            </BaseTooltip>
                            and water birds. The proximity of forests attracts willow ptarmigan and grouse. 
                        </p>
                        <p>
                            The lakes and rivers of the division are rich in various fish species, including whitefish, grayling, rainbow trout, and char, as well as abundant numbers of perch and pike.
                        </p>
                </span>
                        <div class="wrap-numbers">
                            <BaseNumberBlock class="" :textTop="lang === 'ru' ? '44&nbsp;вида' : '44&nbsp;species'"
                                :textBottom="lang === 'ru' ? 'птиц в&nbsp;районе Мончегорска' : 'bird in the Monchegorsk neighbourhood'" />
                            <BaseNumberBlock class="" :textTop="lang === 'ru' ? '48&nbsp;видов' : '48&nbsp;species'"
                                :textBottom="lang === 'ru' ? 'птиц&nbsp;в&nbsp;окрестностях&nbsp;площадки «Никель&nbsp;—&nbsp;Заполярный»' : 'bird in the area of Nickel – Zapolyarny'" />
                        </div>
                    </BaseTextBlock>
                </div>

                <div class="legend">
                    <BaseCollageInfo :text="lang === 'ru' ?'Охраняемые виды' : 'Protected species'" :color="'#71464E'" />
                        <BaseCollageInfo :text="lang === 'ru' ?'Индикаторные виды' : 'Indicator species'" />
                </div>
                <div class="collage mb-100" :class="{'collage_en' : lang === 'en'}">
                    <div class="collage__golden-eagle"></div>
                    <div class="collage__bluethroat"></div>
                    <BaseDropdownInfo class="golden-eagle" :title="lang === 'ru' ? 'Беркут' : 'Golden eagle'" :is-modal="true" :color="'#71464E'" :pulsation-color="'finn'"
                        :text="lang === 'ru' ? 'Самый крупный из&nbsp;орлов: размах крыльев достигает 230&nbsp;см при длине тела до&nbsp;93&nbsp;см. Беркуты чувствительны к&nbsp;беспокойству со&nbsp;стороны человека, чаще обитают в&nbsp;горах и&nbsp;реже на&nbsp;равнинных ландшафтах. За&nbsp;последние столетия вид исчез из&nbsp;многих районов из-за массового истребления, пестицидов, увеличения числа городов и&nbsp;изъятия земель под&nbsp;хозяйственные нужды' : 'The largest eagle with a wingspan reaching 230&nbsp;cm and a body length of up to 93&nbsp;cm. Golden eagles are sensitive to human activity, more often inhabiting mountains than flat landscapes. The species has disappeared from many areas over the past few centuries due to mass extermination, pesticides, the growing number of cities, and development of land by humans..'" />

                    <BaseCollageInfo class="belobrovik" :title=" lang === 'ru' ? 'Белобровик' : 'Redwing'"
                        :text="lang === 'ru' ? 'Меняет пение в&nbsp;разных ситуациях: оповещает при&nbsp;опасности и&nbsp;подзывает, если найдена пища' : 'Changes its song in different situations: alerts in case of danger and calls when food is found'" />
                    <BaseDropdownInfo class="belobrovik_mobile" :title="lang === 'ru' ? 'Белобровик' : 'Redwing'" :is-modal="true" :pulsation-color="'Green-Mist'"
                        :text="lang === 'ru' ? 'Меняет пение в&nbsp;разных ситуациях: оповещает при&nbsp;опасности и&nbsp;подзывает, если найдена пища' : 'Changes its song in different situations: alerts in case of danger and calls when food is found'" />

                    <BaseCollageInfo class="tap-dancing" :title="lang === 'ru' ? 'Чечётка' : 'Common redpoll'"
                        :text="lang === 'ru' ? 'Песня чечётки напоминает перестук каблуков в&nbsp;танце' : 'The common redpoll’s song sounds like a tapdance'" />

                    <BaseCollageInfo class="bluethroat" :title="lang === 'ru' ? 'Варакушка' : 'Bluethroat'"
                        :text=" lang === 'ru' ?'Прекрасный имитатор: в&nbsp;пении заимствует звуки у&nbsp;других птиц' : 'Excellent imitator of other birds’ sounds and songs'" />

                    <BaseCollageInfo class="redstart-coot" :title="lang === 'ru' ? 'Горихвостка-лысушка' : 'Redstart'"
                        :text="lang === 'ru' ? 'Красный хвост самцов, слегка подёргиваясь, напоминает горящее пламя&nbsp;&mdash; &laquo;горихвост&raquo;' : 'The red tail of the males, when slightly twitching, resembles a burning flame'" />

                    <BaseCollageInfo class="yurok" :title="lang === 'ru' ?'Юрок' : 'Brambling'" />
                    <BaseCollageInfo class="warbler" :title="lang === 'ru' ? 'Пеночка-весничка' : 'Willow warbler'" />

                    <BaseDropdownInfo class="ground-beetles" :title="lang === 'ru' ?'Жужелицы' : 'Ground beetles'" :is-modal="true" :pulsation-color="'Green-Mist'"
                        :text="lang === 'ru' ?'В&nbsp;Кольском дивизионе исследователи обнаружили 14&nbsp;видов жужелиц, из&nbsp;них два были назначены индикаторами: Carabus glabratus и&nbsp;Amara brunnea. Carabus glabratus отрицательно реагирует на&nbsp;промышленное воздействие: чем оно интенсивнее, тем меньше плотность вида на&nbsp;территории. Amara brunnea, в&nbsp;свою очередь, увеличивает численность в&nbsp;районах с&nbsp;интенсивным воздействием и&nbsp;постепенно снижает ближе к&nbsp;фоновым территориям' : 'In the Kola Division, the researchers detected 14 ground beetle species, of which two were designated as indicators: Carabus glabratus and Amara brunnea. Carabus glabratus reacts negatively to industrial impact: the more intense it is, the lower the density of the species in the area. The abundance of Amara brunnea, in turn, increases in severely exposed areas and gradually decreases closer to background areas.'" />

                    <BaseDropdownInfo class="spiders" :title="lang === 'ru' ? 'Пауки' : 'Spiders'" :is-modal="true" :pulsation-color="'Green-Mist'"
                        :text="lang === 'ru' ? 'Наименьшее видовое разнообразие пауков учёные отметили в&nbsp;зонах интенсивного воздействия дивизиона. Индикаторами среди обнаруженных видов стали три бродячих паука-охотника: Паук-волк, Паук-гназофида и&nbsp;Паук-мешкопряд. Пауки-волки составляют основу населения, они не&nbsp;строят ловчих сетей, быстро передвигаются и&nbsp;активно заселяют новые участки' : 'Researchers noted the lowest species diversity of spiders in the severely exposed areas of the division. Indicators among the species detected were three wandering huntsman spiders: the wolf spider, the ground spider, and the sac spider. Wolf spiders form the core of the population. They do not weave webs; they move quickly and actively inhabit new areas.'" />

                    <BaseDropdownInfo class="ants" :title="lang === 'ru' ? 'Муравьи' : 'Ants'" :is-modal="true" :pulsation-color="'Green-Mist'"
                        :text="lang === 'ru' ? 'Из&nbsp;12&nbsp;видов муравьёв, обнаруженных участниками Экспедиции в&nbsp;Кольском дивизионе, четыре представителя рода Formica стали индикаторами: Северный чёрный муравей, Красноголовый муравей, Волосистый лесной муравей и&nbsp;Кровавый муравей-рабовладелец. Распределение и&nbsp;численность этих муравьёв помогли учёным подтвердить предположения о&nbsp;поясах воздействия промышленных объектов на&nbsp;природу дивизиона' : 'Out of the 12 ant species found by the Expedition in the Kola Division, four representatives of the genus Formica were designated as indicators: the palaearctic carpenter ant, wood ant, hairy wood ant, and blood-red ant. The distribution and abundance of these ant species helped scientists to confirm their assumptions about belts of industrial facilities’ impact on the nature of the division.'" />

                    <BaseCollageInfo class="shrew" :title="lang === 'ru' ?'Бурозубка' : 'Shrew'" />
                    <BaseCollageInfo class="vole" :title="lang === 'ru' ?'Красно-серая полёвка' : 'Grey red-backed vole'" />

                    <BaseCollageInfo class="kokushnik" :title="lang === 'ru' ? 'Кокушник комарниковый' : 'Fragrant orchid'" :width="'10rem'"
                        :color="'#71464E'" />

                    <BaseDropdownInfo class="fingerroot" :title="lang === 'ru' ? 'Пальчатокоренник пятнистый' : 'Heath spotted-orchid'" :is-modal="true"
                        :width="'10rem'" :color="'#71464E'" :pulsation-color="'finn'"
                        :text="lang === 'ru' ? 'Пятнышки на&nbsp;листьях этого северного представителя орхидей в&nbsp;народе считались следами слёз, которые обронила кукушка от&nbsp;одиночества, поэтому ещё одно название этого вида&nbsp;&mdash; &laquo;кукушкины слёзки&raquo;. Развитие семян пальчатокоренника возможно в&nbsp;симбиозе с&nbsp;определёнными видами грибов, а&nbsp;зацветает растение на&nbsp;6&ndash;8 год после прорастания' : 'In&nbsp;Russia, spots on&nbsp;the leaves of&nbsp;this northern orchid were popularly believed to&nbsp;be&nbsp;traces of&nbsp;tears dropped by&nbsp;the cuckoo because of&nbsp;its loneliness, so&nbsp;another name for this species is&nbsp;&laquo;cuckoo tears&raquo;. Heath spotted-orchid seeds develop in&nbsp;symbiosis with certain fungi species, and the plant blooms 6&ndash;8 years after germination.'" />

                    <BaseCollageInfo class="ledum" :title="lang === 'ru' ?'Багульник болотный' : 'Marsh Labrador tea'" :width="'10rem'" />

                    <div class="background background-1"></div>
                    <BaseCollageInfo class="swan" :title="lang === 'ru' ?'Лебедь-кликун' : 'Whooper swan'" :color="'#71464E'"
                        :text="lang === 'ru' ?'Получил название за&nbsp;громкие, трубные крики, которые часто издает в&nbsp;полёте. Способен развить скорость до&nbsp;80&nbsp;км/ч. Является Национальным символом Финляндии' : 'The bird received its name because of the deep honking call it often emits in flight. It can reach a speed of up to 80 km/h. The whooper swan is the national bird of Finland'" />

                    <BaseDropdownInfo class="broody" :title="lang === 'ru' ?'Клуша' : 'Lesser black-backed gull'" :is-modal="true" :color="'#71464E'" :pulsation-color="'finn'"
                        :text="lang === 'ru' ?'Представители этого вида чаек были встречены участниками Большой Научной экспедиции в&nbsp;зонах интенсивного воздействия предприятий Мончегорска и&nbsp;Мурманска. Кроме крупных водоёмов, птиц привлекают сюда пищевые отходы на&nbsp;свалках. На&nbsp;численность вида негативно влияет заселение мест обитания людьми и&nbsp;загрязнение воздуха промышленными выбросами' : 'The Big Scientific Expedition found this gull species in severely exposed areas of the Monchegorsk and Murmansk facilities. As well as large bodies of water, the birds are attracted by food waste in rubbish dumps. The abundance of the species is negatively affected by human settlements in its habitats and air pollution from industrial emissions.'" />

                    <div class="background background-2"></div>

                    <BaseDropdownInfo class="zooplankton" :title="lang === 'ru' ?'Зоопланктон': 'Zooplankton'" :is-modal="true" :pulsation-color="'Green-Mist'"
                        :text="lang === 'ru' ?'В&nbsp;водоёмах пояса интенсивного воздействия размножается коловратка Asplanchna priodonta, а&nbsp;в&nbsp;пробах из&nbsp;зоны незначительного воздействия и&nbsp;на&nbsp;фоновых территориях исследователи обнаружили ветвистоусого рачка Holopedium gibberum' : 'The rotifer Asplanchna priodonta reproduces itself in the bodies of water of the severely exposed area. The researchers also found the water flea Holopedium gibberum in samples from the insignificantly exposed area and in background areas.'" />

                    <div class="background background-3"></div>
                    <BaseDropdownInfo class="phytoplankton" :title="lang === 'ru' ?'Фитопланктон' : 'Phytoplankton'" :is-modal="true" :pulsation-color="'Green-Mist'"
                        :text="lang === 'ru' ?'Зелёные водоросли Scenedesmus quadricauda встречаются только в&nbsp;пробах из&nbsp;зоны интенсивного воздействия Кольского дивизиона, а&nbsp;цианобактерия Oscillatoria amoena обитает исключительно на&nbsp;территории фона' : 'The green algae Scenedesmus quadricauda are found only in samples from the severely exposed area of the Kola Division, and the cyanobacteria Oscillatoria amoena live exclusively in the background area.'" />

                    <div class="background background-4"></div>
                    <BaseCollageInfo class="tubifex" :title="lang === 'ru' ?'Трубочник обыкновенный' : 'Sludge worm'"
                        :text="lang === 'ru' ?'Общеизвестный индикатор органического загрязнения водоёмов' : 'A well-known indicator of organic pollution in bodies of water'" />

                    <div class="background background-5"></div>
                    <BaseDropdownInfo class="loach" :title="lang === 'ru' ? 'Арктический голец' : 'Arctic char'" :is-modal="true" :pulsation-color="'Green-Mist'"
                        :text="lang === 'ru' ?'Считается самой полезной рыбой в&nbsp;мире: кусочек рыбы в&nbsp;30&nbsp;г покрывает суточную потребность человека в&nbsp;полезных жирных кислотах. Встречается также в&nbsp;водоёмах Кольского дивизиона' : 'It is considered the most nutritious fish in the world: a 30 g piece covers the daily requirement of healthy fatty acids. It also inhabits Norilsk Division’s bodies of water.'" />

                    <div class="background background-6"></div>
                    <BaseCollageInfo class="grayling" :title="lang === 'ru' ?'Европейский хариус' : 'European grayling'" :color="'#71464E'"
                        :text="lang === 'ru' ?'Вес рыбы может достигать 6,7&nbsp;кг' : 'The fish can reach a&nbsp;weight of&nbsp;6.7&nbsp;kg'" />

                    <div class="collage__swan"></div>
                    <div class="collage__grayling"></div>
                </div>
                <BaseTextBlock class="mb-100">
                    
                    <span v-if="lang === 'ru'">
                        <p class="mb-10">
                        Заповедники Лапландский и&nbsp;&laquo;Пасвик&raquo;, по&nbsp;мнению специалистов РАН, являются
                        местами обитания, критически важными для&nbsp;природных сообществ дивизиона. На&nbsp;заповедных
                        территориях обнаружены охраняемые и&nbsp;
                        <BaseTooltip :word="'эндемичные виды'">
                            Вид животного или&nbsp;растения, который встречается на&nbsp;какой-либо территории и&nbsp;больше
                            нигде. Из-за
                            того, что их&nbsp;ареал обитания ограничен, эндемиков нередко заносят в&nbsp;Красные книги как
                            редкие или&nbsp;исчезающие виды.
                        </BaseTooltip>, найдены уникальные экологические системы.
                    </p>
                    <p class="mb-10">
                        Участки заповедников, оказавшиеся в&nbsp;поясе промышленного воздействия, нуждаются
                        в&nbsp;постоянном мониторинге. Особое внимание компания уже уделяет местам, попавшим в&nbsp;зону
                        воздействия закрытого плавильного цеха в&nbsp;посёлке Никель.
                    </p>
                    <p>
                        &laquo;Норникель&raquo; регулярно оказывает финансовую помощь заповедникам и&nbsp;спонсирует
                        программы по&nbsp;изучению и&nbsp;восстановлению видов.
                    </p>
                </span>
                <span v-else>
                    <p class="mb-10">
                        Experts from the Russian Academy of Sciences believe that the Lapland and Pasvik Nature Reserves are habitats critical for the division's natural communities. Protected and 
                        <BaseTooltip :word="'endemic species'">
                            A species of animal or plant that is found in a single geographic location and nowhere else. Because of their limited habitat, endemics are often listed in Red Data Books as rare or endangered species.
                        </BaseTooltip>, as well as unique ecological systems, have been discovered in protected areas.
                    </p>
                    <p class="mb-10">
                        The areas of the reserves which are exposed to industrial impact need constant monitoring. The сompany is already paying special attention to the areas affected by the now disused smelting shop in Nickel.
                    </p>
                    <p>
                        Nornickel provides regular financial assistance to nature reserves and sponsors programmes to study and restore species.
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
                    Affected area
                </span>
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                    fill="none">
                                    <circle cx="7" cy="7" r="7" fill="#D38235" />
                                </svg>
                                <div v-if="lang === 'ru'">Интенсивная</div>
                                <div v-else>Severe exposure</div>
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                    fill="none">
                                    <circle cx="7" cy="7" r="7" fill="#FFEC42" />
                                </svg>
                                <div v-if="lang === 'ru'">Умеренная</div>
                                <div v-else>Moderate exposure</div>
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                    fill="none">
                                    <circle cx="7" cy="7" r="7" fill="#009CA6" />
                                </svg>
                                <div v-if="lang === 'ru'">Незначительная</div>
                                <div v-else>Insignificant exposure</div>
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none">
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
                                    1 – Клуша
                </span>
                <span v-else>
                    1 – Lesser black-backed gull
                </span>
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                
                                <span v-if="lang === 'ru'">
                   2 – Беркут
                </span>
                <span v-else>
                    2 – Golden eagle
                </span>
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                               
                                <span v-if="lang === 'ru'">
                    3 – Лебедь-кликун
                </span>
                <span v-else>
                    3 – Whooper swan
                </span>
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                               
                                <span v-if="lang === 'ru'">
                                    4 – Европейский хариус
                </span>
                <span v-else>
                    4 – European grayling
                </span>
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                               
                                <span v-if="lang === 'ru'">
                                    5 – Пальчатокоренник пятнистый
                </span>
                <span v-else>
                    5 – Heath spotted-orchid
                </span>
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                              
                                <span v-if="lang === 'ru'">
                                    6 – Кокушник комарниковый
                </span>
                <span v-else>
                    6 – Fragrant orchid
                </span>
                            </div>
                        </div>
                    </div>
                    <div class="habitat-map__wrap">
                        <div v-if="!isMobile" class="habitat-map__title">Карта обитания охраняемых видов</div>
                        <div v-if="isMobile" class="habitat-map__title">Зона воздействия предприятий и виды</div>
                        <div class="habitat-map__list">
                            <div class="habitat-map__list-item-wrap">
                                <div class="habitat-map__list-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                        fill="none">
                                        <circle cx="7" cy="7" r="7" fill="#D38235" />
                                    </svg>
                                   <div v-if="lang === 'ru'">Интенсивная</div>
                                    <div v-else>Severe exposure</div>
                                </div>
                                <ul v-if="lang === 'ru'" class="habitat-map__list-list">
                                    <li>Клуша</li>
                                    <li>Беркут</li>
                                </ul>
                                <ul v-else class="habitat-map__list-list">
                                    <li>Lesser black-backed gull</li>
                                    <li>Golden eagle</li>
                                </ul>
                            </div>

                            <div class="habitat-map__list-item-wrap">
                                <div class="habitat-map__list-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                        fill="none">
                                        <circle cx="7" cy="7" r="7" fill="#FFEC42" />
                                    </svg>
                                   <div v-if="lang === 'ru'">Умеренная</div>
                                    <div v-else>Moderate exposure</div>
                                </div>
                                <ul v-if="lang === 'ru'" class="habitat-map__list-list">
                                    <li>Европейский хариус</li>
                                    <li>Кокушник комарниковый</li>
                                </ul>
                                 <ul v-else class="habitat-map__list-list">
                                    <li>European grayling</li>
                                    <li>Fragrant orchid</li>
                                </ul>
                            </div>

                            <div class="habitat-map__list-item-wrap">
                                <div class="habitat-map__list-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                        fill="none">
                                        <circle cx="7" cy="7" r="7" fill="#009CA6" />
                                    </svg>
                                    <div v-if="lang === 'ru'">Незначительная</div>
                                    <div v-else>Insignificant exposure</div>
                                </div>
                                <ul v-if="lang === 'ru'" class="habitat-map__list-list">
                                    <li>Беркут</li>
                                    <li>Лебедь-кликун</li>
                                    <li>Европейский хариус</li>
                                    <li>Пальчатокоренник пятнистый</li>
                                </ul>
                                <ul v-else class="habitat-map__list-list">
                                    <li>Golden eagle</li>
                                    <li>Whooper swan</li>
                                    <li>European grayling</li>
                                    <li>Heath spotted-orchid</li>
                                </ul>
                            </div>

                            <div class="habitat-map__list-item-wrap">
                                <div class="habitat-map__list-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                        fill="none">
                                        <circle cx="8" cy="8" r="7" fill="white" stroke="#333333" />
                                    </svg>
                                    <div v-if="lang === 'ru'">Фоновая</div>
                                    <div v-else>Background exposure</div>
                                </div>
                                <ul v-if="lang === 'ru'" class="habitat-map__list-list">
                                    <li>Лебедь-кликун</li>
                                    <li>Европейский хариус</li>
                                    <li>Кокушник комарниковый</li>
                                </ul>
                                <ul v-else class="habitat-map__list-list">
                                    <li>Whooper swan</li>
                                    <li>European grayling</li>
                                    <li>Fragrant orchid</li>
                                </ul>
                            </div>

                        </div>
                        <div class="habitat-map__buttons">
                            <div class="habitat-map__button" :class="{ 'habitat-map__button_active': idMap === map1 }"
                                @click="idMap = 1">
                                <span v-if="lang === 'ru'">
                                    Мончегорск
                </span>
                <span v-else>
                    Monchegorsk
                </span></div>
                            <div class="habitat-map__button" :class="{ 'habitat-map__button_active': idMap === map2 }"
                                @click="idMap = 2">
                                <span v-if="lang === 'ru'">
                                    Никель — Заполярный
                </span>
                <span v-else>
                    Nickel – Zapolyarny
                </span></div>
                        </div>
                    </div>

                    <picture v-show="idMap === 1">
                        <source media="(max-width: 768px)" type="image/webp" srcset="img/habitat-map-kola-1-mobile.webp">
                        <source media="(max-width: 768px)" srcset="img/habitat-map-kola-1-mobile.png">
                        <source type="image/webp" srcset="img/habitat-map-kola-1.webp">
                        <img src="img/habitat-map-kola-1.png" alt="">
                    </picture>

                    <picture v-show="idMap === 2">
                        <source media="(max-width: 768px)" type="image/webp" srcset="img/habitat-map-kola-2-mobile.webp">
                        <source media="(max-width: 768px)" srcset="img/habitat-map-kola-2-mobile.png">
                        <source type="image/webp" srcset="img/habitat-map-kola-2.webp">
                        <img src="img/habitat-map-kola-2.png" alt="">
                    </picture>

                    <div v-show="idMap === 1">
                        <div class="habitat-map__city habitat-map__city-1">
                            <div class="habitat-map__city-circale"></div>
                            <span v-if="lang === 'ru'">Мончегорск</span>
                            <span v-else>Monchegorsk</span>
                        </div>
                        <div class="habitat-map__river">
                            
                            <span v-if="lang === 'ru'">
                                Имандра
                </span>
                <span v-else>
                    Imandra
                </span>
                        </div>
                    </div>
                    <div v-show="idMap === 2">
                        <div class="habitat-map__city habitat-map__city-2">
                            <div class="habitat-map__city-circale"></div>
                            <span v-if="lang === 'ru'">Никель</span>
                            <span v-else>Nickel</span>
                        </div>
                        <div class="habitat-map__city habitat-map__city-3">
                            <div class="habitat-map__city-circale"></div>
                            <span v-if="lang === 'ru'">Заполярный</span>
                            <span v-else>Zapolyarny</span>
                        </div>
                        <div class="habitat-map__city habitat-map__city-4">
                            <div class="habitat-map__city-circale"></div>
                            <span v-if="lang === 'ru'">Мурманск</span>
                            <span v-else>Murmansk</span>
                        </div>
                        <div class="habitat-map__name-sea">
                           
                            <span v-if="lang === 'ru'">
                                Баренцево <br />море
                </span>
                <span v-else>
                    Barents Sea
                </span>
                        </div>
                    </div>
                </div>

                <BaseTextBlock class="mb-40">
                    <span v-if="lang === 'ru'">
                        Некоторые редкие виды могут проживать в&nbsp;зонах воздействия предприятий, несмотря на&nbsp;шум или&nbsp;другие факторы воздействия. Ведь для&nbsp;их&nbsp;выживания главное&nbsp;&mdash; наличие корма
                    и&nbsp;отсутствие беспокойства со&nbsp;стороны человека.
                </span>
                <span v-else>
                    Some rare species can live in the areas affected by the facilities despite the noise or other impacts. After all, their survival depends on the availability of food and absence of human disturbance.
                </span>
                    
                </BaseTextBlock>
                <BaseSidebar>
                    <p v-if="lang === 'ru'">
                        Минимизировать накопленный за&nbsp;многие десятилетия техногенный след, восстановить
                        и&nbsp;сохранить экосистемы Кольского Заполярья&nbsp;&mdash; важные пункты экологической программы
                        &laquo;Норникеля&raquo; в&nbsp;Кольском&nbsp;дивизионе.
                    </p>
                    <p v-else>Minimising the legacy anthropogenic footprint of many decades, restoring and preserving the Kola Peninsula's ecosystems are important parts of Nornickel's environmental programme at Kola Division.</p>
                </BaseSidebar>
            </SectionOrange>
        </MainSection>
    </div>
</template>

<script>
import BaseHero from '@/layout/BaseHero.vue'
import BigMap from '@/components/BigMap.vue'
import SectionOrange from '@/layout/SectionOrange.vue'
import SectionWhite from '@/layout/SectionWhite.vue'
import MainSection from '@/layout/MainSection'
import BaseTooltip from '@/components/BaseTooltip.vue'
import BaseTextBlock from '@/components/BaseTextBlock.vue'
import BaseSidebar from '@/components/BaseSidebar'
import BaseCollageInfo from '@/components/BaseCollageInfo.vue'
import BaseDropdownInfo from '@/components/BaseDropdownInfo.vue'
import BaseNumberBlock from '@/components/BaseNumberBlock'

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
        BaseDropdownInfo,
        BaseCollageInfo,
        BaseNumberBlock
    },
    data() {
        return {
            map1: 1,
            map2: 2,
            idMap: 1,
            isMobile: (window.innerWidth <= 768),
            circales: [
                {
                    color: 'green',
                    number: '1'
                },
                {
                    color: 'green',
                    number: '2'
                },
                {
                    color: 'purple',
                    number: '3'
                },
                {
                    color: 'purple',
                    number: '4'
                },
            ],
            heroDescrEn: 'Flora and fauna near Nornickel’s industrial assets in the Murmansk Region',
            heroDescr: 'Растительный и&nbsp;животный мир рядом с&nbsp;промышленными площадками &laquo;Норникеля&raquo; в&nbsp;Мурманской области'
        }
    },
    mounted() {
        this.$nextTick(function () {
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

                this.oneScrollTrigger = gsap.fromTo(elem,
                    {
                        y: 50,
                    },
                    {
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
                this.twoScrollTrigger = gsap.fromTo(elem,
                    {
                        y: 50,
                    },
                    {
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

            gsap.fromTo(".bg-1",
                { opacity: '1' },
                {
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

            gsap.fromTo(".bg-2",
                { opacity: '1' },
                {
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

            gsap.fromTo(".bg-3",
                { opacity: '1' },
                {
                    opacity: '0',
                    scrollTrigger: {
                        trigger: ".card-3",
                        start: 'top 0%',
                        end: 'bottom 50%',
                        endTrigger: '.card-4',
                        // markers: true,
                        scrub: true,
                    },

                });

            gsap.to(".scroll-bg", {
                scrollTrigger: {
                    trigger: ".card-4",
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
                gsap.fromTo(".collage__golden-eagle",
                {y: 115},
                {
                    y: -15,
                    scrollTrigger: {
                        trigger: ".collage",
                        start: 'top 100%',
                        end: '10%',
                        // markers: true,
                        scrub: true
                    },

                });

                gsap.fromTo(".collage__bluethroat",
                {y: 55},
                {
                    y: -15,
                    scrollTrigger: {
                        trigger: ".collage",
                        start: '24% 100%',
                        end: '29%',
                        // markers: true,
                        scrub: true
                    },

                });

                gsap.fromTo(".collage__swan",
                {y: 30},
                {
                    y: -10,
                    scrollTrigger: {
                        trigger: ".collage",
                        start: '75% 100%',
                        end: 'bottom',
                        // markers: true,
                        scrub: true
                    },

                });

                gsap.fromTo(".collage__grayling",
                {y: 40},
                {
                    y: -10,
                    scrollTrigger: {
                        trigger: ".collage",
                        start: '90% 100%',
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
.kola {
    .text-w {
        width: 34.3rem;

        @media (max-width: 768px) {
            width: unset;
        }
    }

    .big-map {
        margin-bottom: 2.7778rem;

        @media (max-width: 768px) {
            display: flex;
            margin-bottom: 21.3334rem;
            flex-direction: column-reverse;
            height: unset;
        }

        .map-circale {
            &__1 {
                top: 25.5rem;
                left: 46.5rem;
            }

            @media (max-width: 768px) {
                top: 78.5rem;
                left: 39rem;
            }

            &__2 {
                top: 14.2rem;
                left: 35.7rem;

                @media (max-width: 768px) {
                    top: 48.5rem;
                    left: 10.5rem;
                }
            }

            &__3 {
                top: 9rem;
                left: 39.7rem;

                @media (max-width: 768px) {
                    top: 31.5rem;
                    left: 23.5rem;
                }
            }

            &__4 {
                top: 28rem;
                left: 50.3rem;

                @media (max-width: 768px) {
                    top: 94.7rem;
                    left: 62rem;
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
    }

    .scroll {
        position: relative;
        width: 100%;

        .card-4 {
            position: relative;
        }

        &-bg {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1;
            height: 100vh;
            background-position: bottom;
            background-size: 100%;
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
                    background-position: 0 500vh;
                    background-size: 100%;

                    @media (max-width: 768px) {
                        background-position: bottom;
                        position: absolute;
                        background-size: 100%;
                    }
                }
            }

            &.bg-1 {
                z-index: 4;
                background-image: url(../../public/img/pasvik-1.jpg);
            }

            &.bg-2 {
                z-index: 3;
                background-image: url(../../public/img/pasvik-2.jpg);
            }

            &.bg-3 {
                z-index: 2;
                background-image: url(../../public/img/pasvik-3.jpg);
            }

            &.bg-4 {
                z-index: 1;
                background-image: url(../../public/img/pasvik-4.jpg);
            }

            @media (max-width: 768px) {
                &.bg-1 {
                    background-image: url(../../public/img/pasvik-1-mobile.jpg);
                }

                &.bg-2 {
                    background-image: url(../../public/img/pasvik-2-mobile.jpg);
                }

                &.bg-3 {
                    background-image: url(../../public/img/pasvik-3-mobile.jpg);
                }

                &.bg-4 {
                    background-image: url(../../public/img/pasvik-4-mobile.jpg);
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
            width: 38rem;
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

    .transbaikal-radius {
        position: relative;

        &__wrap {
            position: absolute;
            top: 3.54166rem;
            right: 10.2083rem;
            padding: 0.69445rem;
            width: 16rem;
            font-size: 1.04167rem;
            line-height: 130%;
            display: flex;
            flex-direction: column;

            @media (max-width: 768px) {
                font-size: 4rem;
                padding: 0;
                width: 56rem;
                align-items: center;
                text-align: center;
                right: 22rem;
            }

            &-top {
                font-weight: 600;
            }

            &-mid {
                font-weight: 400;
            }
        }

        .clue__hidden {
            left: -13rem;
            width: 38rem;

            @media (max-width: 768px) {
                left: 0;
                width: unset;
            }
        }
    }

    .section-orange {
        margin-bottom: 0;

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

        .mb-60-m.mb-60 {
            @media (max-width: 768px) {
                margin-bottom: 10.6667rem;
            }
        }

        .number-block {
            position: static;
        }

        .sidebar__text {
            padding: 0;
        }
    }

    .flora-and-fauna {
        display: flex;
        gap: 5.44rem;
        width: 63.5rem;
        margin: 0 auto;
        margin-bottom: 8.69rem;

        @media (max-width: 768px) {
            flex-direction: column;
            width: unset;
            gap: 10.6667rem;
            margin-bottom: 16rem;
        }

        .text-block__wrap {
            margin: 0;

            &:first-child {
                width: 29.375rem;

                .number-block {
                    margin-top: 2.88rem;

                    @media (max-width: 768px) {
                        margin-top: 7.4rem;
                    }
                }
            }

            &:last-child {
                width: 28.625rem;

                .wrap-numbers {
                    display: flex;
                    gap: 2.88rem;
                    margin-top: 2.88rem;

                    @media (max-width: 768px) {
                        margin-top: 0;
                        gap: 0;
                        flex-direction: column;
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

    .legend {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2.28rem;

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: flex-start;
            padding-left: 9.6rem;
            gap: 2rem;
            margin-bottom: 8.8rem
        }

        .block-info {
            position: static;
        }
    }

    .collage {
        position: relative;
        height: 339rem;
        width: 100%;
        background-image: url(../../public/img/kola-collage.png);
        background-repeat: no-repeat;
        background-size: contain;
        z-index: 11;

        @supports (background-image: url(../../public/img/kola-collage.webp)) {
            background-image: url(../../public/img/kola-collage.webp);
        }

        @media (max-width: 768px) {
            height: 797rem;
            background-image: url(../../public/img/kola-collage-mobile.png);

            @supports (background-image: url(../../public/img/kola-collage-mobile.webp)) {
                background-image: url(../../public/img/kola-collage-mobile.webp);
            }
        }


        .dropdown-info__text {
            @media (max-width: 768px) {
                width: 93.34rem;
                padding: 10.6667rem 5.3333rem 3.7333rem 12.2666rem;
            }
        }

        .background {
            position: absolute;
            background-color: #fff;
            opacity: 0.8;
            mix-blend-mode: hard-light;
            filter: blur(30px);

            @media (max-width: 768px) {
                filter: blur(11px);
            }

            &-1 {
                bottom: 64rem;
                left: 8.5rem;
                width: 19.25rem;
                height: 8.417rem;
                transform: rotate(13.682deg);

                @media (max-width: 768px) {
                    display: none;
                }
            }

            &-2 {
                bottom: 37rem;
                left: 31rem;
                width: 9rem;
                height: 5rem;

                @media (max-width: 768px) {
                    bottom: 101rem;
                    left: 8rem;
                    width: 45rem;
                    height: 14rem;
                }
            }

            &-3 {
                bottom: 33rem;
                right: 45rem;
                width: 10rem;
                height: 5rem;

                @media (max-width: 768px) {
                    bottom: 89rem;
                    right: 8rem;
                    width: 35rem;
                    height: 5rem;
                }
            }

            &-4 {
                bottom: 21rem;
                left: 18rem;
                width: 13rem;
                height: 7rem;

                @media (max-width: 768px) {
                    bottom: 74rem;
                    left: 33rem;
                    width: 30rem;
                    height: 6rem;
                }
            }

            &-5 {
                bottom: 12rem;
                left: 45rem;
                width: 13rem;
                height: 1rem;

                @media (max-width: 768px) {
                    bottom: 54rem;
                    left: 18rem;
                    width: 25rem;
                    height: 9rem;
                }
            }

            &-6 {
                bottom: 34rem;
                right: 15rem;
                width: 12rem;
                height: 4rem;

                @media (max-width: 768px) {
                    bottom: 52rem;
                    right: 10rem;
                    width: 31rem;
                    height: 14rem;
                }
            }
        }

        &__golden-eagle {
            position: absolute;
            width: 54rem;
            height: 44.66rem;
            top: 1rem;
            left: 45rem;
            background-image: url(../../public/img/collage-kola-golden-eagle.png);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: bottom;

            @supports (background-image: url(../../public/img/collage-kola-golden-eagle.webp)) {
                background-image: url(../../public/img/collage-kola-golden-eagle.webp);
            }

            @media (max-width: 768px) {
                display: none;
            }
        }

        &__bluethroat {
            position: absolute;
            width: 23.9rem;
            height: 20.7rem;
            top: 80.5rem;
            left: 62.5rem;
            background-image: url(../../public/img/collage-kola-bluethroat.png);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: bottom;

            @supports (background-image: url(../../public/img/collage-kola-bluethroat.webp)) {
                background-image: url(../../public/img/collage-kola-bluethroat.webp);
            }

            @media (max-width: 768px) {
                display: none;
            }
        }

        &__swan {
            position: absolute;
            width: 41.32rem;
            height: 30.2088rem;
            top: 261.5rem;
            left: 3.6rem;
            background-image: url(../../public/img/collage-kola-swan.png);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: bottom;

            @supports (background-image: url(../../public/img/collage-kola-swan.webp)) {
                background-image: url(../../public/img/collage-kola-swan.webp);
            }

            @media (max-width: 768px) {
                display: none;
            }
        }

        &__grayling {
            position: absolute;
            width: 34.7223rem;
            height: 25.4866rem;
            top: 299.7rem;
            left: 63.7rem;
            background-image: url(../../public/img/collage-kola-grayling.png);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: bottom;

            @supports (background-image: url(../../public/img/collage-kola-grayling.webp)) {
                background-image: url(../../public/img/collage-kola-grayling.webp);
            }

            @media (max-width: 768px) {
                display: none;
            }
        }

        .golden-eagle {
            position: absolute;
            top: 23rem;
            right: 35rem;

            @media (max-width: 768px) {
                top: 69rem;
                left: 7.5rem;
                right: 0;
            }
        }

        .belobrovik {
            width: 15rem;
            top: 47rem;
            right: 5.07rem;

            @media (max-width: 768px) {
                display: none;
            }

            &_mobile {
                display: none;
                position: absolute;
                top: 111rem;
                right: 17rem;

                @media (max-width: 768px) {
                    display: block;
                }
            }
        }

        .tap-dancing {
            width: 13rem;
            top: 64.7rem;
            left: 52.8rem;

            @media (max-width: 768px) {
                width: 35rem;
                top: 135rem;
                left: 55rem;
            }
        }

        .bluethroat {
            width: 13rem;
            top: 82rem;
            left: 57rem;

            @media (max-width: 768px) {
                width: 42rem;
                top: 0rem;
                left: unset;
                right: 2rem;
            }
        }

        .redstart-coot {
            width: 13rem;
            top: 103.7rem;
            left: 46rem;

            @media (max-width: 768px) {
                width: 45rem;
                top: 185.2rem;
                left: 25rem;
            }
        }

        .yurok {
            width: 10rem;
            top: 117rem;
            right: 23.7rem;

            @media (max-width: 768px) {
                top: 231rem;
                right: 23.7rem;
            }
        }

        .warbler {
            width: 10rem;
            top: 115.5rem;
            left: 5.5rem;

            @media (max-width: 768px) {
                top: 94rem;
                left: 32rem;
            }
        }

        .ground-beetles {
            position: absolute;
            top: 135rem;
            left: 7.5rem;

            @media (max-width: 768px) {
                top: 220rem;
                left: 12rem;
            }
        }

        .spiders {
            position: absolute;
            top: 121.5rem;
            left: 33rem;

            @media (max-width: 768px) {
                top: unset;
                bottom: 237rem;
                left: unset;
                right: 26rem;
            }
        }

        .ants {
            position: absolute;
            top: 180rem;
            right: 28rem;

            @media (max-width: 768px) {
                top: unset;
                bottom: 206rem;
                right: 16rem;
            }
        }

        .shrew {
            bottom: 145rem;
            right: 11.5rem;

            @media (max-width: 768px) {
                bottom: 329rem;
                right: unset;
                left: 12rem;
            }
        }

        .kokushnik {
            bottom: 138rem;
            left: 17rem;

            @media (max-width: 768px) {
                bottom: 402rem;
                left: 3rem;
            }
        }

        .fingerroot {
            position: absolute;
            bottom: 134rem;
            right: 8rem;

            .dropdown-info__text {
                padding: 3.56rem 0.62rem 0.88rem 3.13rem;
            }

            @media (max-width: 768px) {
                bottom: 387rem;
                right: 26rem;
            }
        }

        .ledum {
            bottom: 91rem;
            left: 25rem;

            @media (max-width: 768px) {
                bottom: 235rem;
                left: 8rem;
            }
        }

        .vole {
            width: 10rem;
            bottom: 87rem;
            left: 5rem;

            @media (max-width: 768px) {
                width: 28rem;
                bottom: 285rem;
                left: 4rem;
            }
        }

        .swan {
            width: 17rem;
            bottom: 62rem;
            left: 10.5rem;

            @media (max-width: 768px) {
                width: 56rem;
                bottom: 167rem;
                left: 6rem;
            }
        }

        .broody {
            position: absolute;
            bottom: 62.7rem;
            right: 31.5rem;

            @media (max-width: 768px) {
                bottom: 133rem;
                right: 13rem;
            }
        }

        .zooplankton {
            position: absolute;
            bottom: 39rem;
            left: 30rem;

            @media (max-width: 768px) {
                bottom: 74rem;
                left: 32rem;
            }
        }

        .phytoplankton {
            position: absolute;
            bottom: 34rem;
            right: 45rem;

            @media (max-width: 768px) {
                bottom: 90rem;
                right: 21rem;
            }
        }

        .tubifex {
            bottom: 21.5rem;
            left: 17rem;
            width: 14.5rem;

            @media (max-width: 768px) {
                bottom: 96rem;
                left: 5rem;
                width: 52rem;
            }
        }

        .loach {
            bottom: 12.5rem;
            left: 46rem;
            position: absolute;

            @media (max-width: 768px) {
                bottom: 53rem;
                left: 13rem;
            }
            
        }

        .grayling {
            bottom: 33rem;
            right: 15rem;
            width: 12rem;

            @media (max-width: 768px) {
                bottom: 50rem;
                right: 6rem;
                width: 40rem;
            }
        }
    
        &_en {
            background-image: url(../../public/img/kola-collage-en.png);
            @supports (background-image: url(../../public/img/kola-collage-en.webp)) {
                background-image: url(../../public/img/kola-collage-en.webp);
            }

            @media (max-width: 768px) {
            background-image: url(../../public/img/kola-collage-en-mobile.png);

            @supports (background-image: url(../../public/img/kola-collage-en-mobile.webp)) {
                background-image: url(../../public/img/kola-collage-en-mobile.webp);
            }
        }

            .ground-beetles {
                width: 9rem;
                left: 9.5rem;
                
                .dropdown-info__text {
                    padding: 3.56rem 0.62rem 0.88rem 3.13rem;
                }

                @media (max-width: 768px) {
                    left: 11.5rem;
                }
            }

            .broody {
                width: 11rem;
                bottom: 68.7rem;
                right: 34.5rem;

                .dropdown-info__text {
                    padding: 3.56rem 0.62rem 0.88rem 3.13rem;
                }

                @media (max-width: 768px) {
                    width: unset;
                    bottom: 128.7rem;
                    right: 7.5rem;

                    .dropdown-info__title {
                        max-width: 23rem;
                    }
                }
            }
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
        &__name-sea {
            position: absolute;
            color: var(--blue-deep, #004C97);
            font-size: 0.57rem;
            font-weight: 300;
            line-height: 130%;

            @media (max-width: 768px) {
                font-size: 2.4rem;
            }
        }

        &__name-sea {
            text-align: center;
            top: 14rem;
            right: 35rem;

            @media (max-width: 768px) {
                top: unset;
                right: 9rem;
                bottom: 53rem;
            }
        }

        &__river {
            bottom: 24rem;
            right: 49.5rem;

            @media (max-width: 768px) {
                bottom: 29.5rem;
                right: 44.5rem;
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
                top: 12.5rem;
                left: 43rem;

                @media (max-width: 768px) {
                    top: unset;
                    bottom: 58rem;
                    left: 40rem;
                }
            }

            &-2 {
                display: flex;
                top: 16rem;
                left: 32rem;
                flex-direction: row-reverse;

                @media (max-width: 768px) {
                    top: unset;
                    bottom: 53rem;
                    left: 9rem;
                }
            }

            &-3 {
                top: 16.4rem;
                left: 37.5rem;

                @media (max-width: 768px) {
                    top: unset;
                    bottom: 53rem;
                    left: 26rem;

                }
            }

            &-4 {
                top: 25rem;
                right: 36.5rem;

                @media (max-width: 768px) {
                    top: unset;
                    right: 8rem;
                    bottom: 28rem;
                }
            }
        }
    }

    .modernization {
        width: 83.4rem;
        margin: 0 auto;
        margin-bottom: 6.25rem;

        @media (max-width: 768px) {
            width: unset;
            padding: 0 9.5rem;
            margin-bottom: 6.25rem;
        }

        &__item {
            &:not(:last-child) {
                margin-bottom: 2.09rem;

                @media (max-width: 768px) {
                    margin-bottom: 7.4667rem;
                }
            }

            &-top {
                margin-bottom: 1.31945rem;
                font-size: 1.52778rem;
                font-weight: 600;
                line-height: 130%;

                @media (max-width: 768px) {
                    margin-bottom: 4.2667rem;
                    font-size: 3.2rem;
                }
            }

            &-mid {
                margin-bottom: 1.3rem;
                position: relative;
                height: 1px;
                width: 100%;
                background-color: #333;

                @media (max-width: 768px) {
                    margin-bottom: 3.7334rem;
                }
            }

            &-bottom {
                width: 19rem;
                font-size: 1.25rem;
                font-weight: 300;
                line-height: 130%;

                @media (max-width: 768px) {
                    width: 42rem;
                    font-size: 3.2rem;
                }
            }

            &:last-child {
                .modernization__mid-bg {
                    width: 8.34rem;
                }

                .modernization__mid-text_1 {
                    right: 5rem;
                }

                .modernization__mid-text_2 {
                    right: 1rem;

                    @media (max-width: 768px) {
                        right: 0;
                    }
                }

                .modernization__item-bottom {
                    width: 22rem;

                    @media (max-width: 768px) {
                        width: 37rem;
                    }
                }
            }
        }

        &__mid-text_1 {
            position: absolute;
            top: -3rem;
            right: 21rem;
            font-size: 1.52778rem;
            font-weight: 600;
            line-height: 130%;

            @media (max-width: 768px) {
                top: -8rem;
                right: 20rem;
                font-size: 3.2rem;
            }
        }

        &__mid-text_2 {
            position: absolute;
            top: 1rem;
            right: 18.5rem;
            font-size: 2.77778rem;
            font-weight: 600;
            line-height: 130%;

            @media (max-width: 768px) {
                font-size: 10.66667rem;
                top: 3rem;
                right: 0;

                span {
                    font-size: 4.8rem;
                }
            }

            svg {
                width: 1.25rem;
                height: 1.9445rem;

                @media (max-width: 768px) {
                    width: 4.8rem;
                    height: 7.467rem;
                }
            }
        }

        &__mid-bg {
            position: absolute;
            top: -0.5rem;
            right: 0;
            height: 1.1112rem;
            width: 25rem;
            background-color: #CEEDFF;

            @media (max-width: 768px) {
                height: 4.267rem;
                top: -2rem;
            }
        }
    }
}</style>