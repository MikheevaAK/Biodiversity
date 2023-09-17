<template>
    <div class="kola">
        <BaseHero :title="'Кольский дивизион. Природные обитатели Кольского Заполярья'" :descr="heroDescr"
            :img="'img/hero5.jpg'" :imgMobile="'img/hero5-mobile.jpg'" />
        <MainSection>
            <SectionWhite>
                <BaseTextBlock class="text mb-40" :title="'Особенности дивизиона'" :tooltip="true">
                    <p class="mb-10">
                        Кольский
                        <BaseTooltip :word="'дивизиона'">
                            Компании объединяют в&nbsp;дивизион предприятия одного региона или объекты с&nbsp;общей задачей,
                            например, перевозкой сырья или энергоснабжением. Деление на&nbsp;дивизионы (от&nbsp;французского
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
                </BaseTextBlock>

                <BigMap :circales="circales" :img="'img/kola-big-map'" :imgMobile="'img/kola-big-map-mobile'">
                    <div class="circales">
                        <div class="circale-block">
                            <svg class="circale-block__img" xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                viewBox="0 0 14 14" fill="none">
                                <circle cx="7" cy="7" r="7" fill="#654EA3" />
                            </svg>

                            <div class="circale-block__text">Промышленные объекты</div>
                        </div>
                        <div class="circale-block">
                            <svg class="circale-block__img" xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                viewBox="0 0 14 14" fill="none">
                                <circle cx="7" cy="7" r="7" fill="#009CA6" />
                            </svg>

                            <div class="circale-block__text">Особо охраняемые природные территории</div>
                        </div>
                    </div>
                </BigMap>
                <section class="scroll mb-100">
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
                            <p>Промышленная площадка «Никель — Заполярный»</p>
                            <p>
                                Отвечает за&nbsp;разработку месторождений, расположенных между посёлком Никель
                                и&nbsp;городом Заполярный на&nbsp;западе Мурманской области. Здесь компания добывает руду,
                                содержащую никель, медь и&nbsp;другие полезные компоненты, а&nbsp;затем обогащает
                                её&nbsp;на&nbsp;фабрике Заполярного, получая медно-никелевый концентрат.
                            </p>
                            <BaseDropdownInfo :title="'Объекты'" :color="'#D38235'"
                                :text="'<ul><li>Рудник Северный</li><li>Рудник Каула-Котсельваара</li><li>Обогатительная фабрика г. Заполярный</li></ul>'" />
                        </div>
                        <div class="scroll-card card-2 text-block__descr">
                            <p>Заповедник «Пасвик»</p>
                            <p>
                                Призван сохранить северные сосновые леса, обширные болотные угодья мирового значения
                                и&nbsp;фауны водоплавающих птиц Мурманской области. Части площадей заповедника оказались
                                в&nbsp;пределах пояса умеренного воздействия объектов Кольского дивизиона.
                            </p>
                        </div>
                        <div class="scroll-card card-3 text-block__descr">
                            <p>Промышленная площадка «Мончегорск»</p>
                            <p>Расположена юго-западнее жилой застройки города Мончегорск, в&nbsp;центральной части региона.
                                Объединяет металлургические объекты Кольской ГМК, где производят катодные никель
                                и&nbsp;медь, карбонильный никель, электролитный кобальт, концентраты драгоценных металлов,
                                меди и&nbsp;никеля, а&nbsp;также серную кислоту.
                            </p>
                            <BaseDropdownInfo :title="'Объекты'" :color="'#D38235'"
                                :text="'<ul><li>Рафинировочный цех</li><li>Химико-металлургический цех</li><li>Цеха электролиза никеля №1 и №2</li></ul>'" />
                        </div>
                        <div class="scroll-card card-4 text-block__descr">
                            <p>Лапландский заповедник</p>
                            <p>Ближайший и&nbsp;важнейший для восстановления и&nbsp;сохранения разнообразия видов
                                в&nbsp;районе воздействия промышленных объектов Мончегорской площадки. Заповедник был создан
                                для охраны западной популяции горно-тундровой формы дикого северного оленя и&nbsp;отдельных
                                уникальных для Кольского полуострова экосистем. Часть
                                <BaseTooltip :word="'буферной зоны'">
                                    Периметры безопасности, которые защищают и&nbsp;поддерживают жизнедеятельность
                                    охраняемых растений, растительной группы или целой природной территории. В&nbsp;буферных
                                    зонах нельзя вырубать деревья, охотиться и&nbsp;передвигаться на&nbsp;автомобиле.
                                </BaseTooltip> заповедника попадает
                                в&nbsp;пояса умеренного и&nbsp;незначительного воздействия предприятий
                                &laquo;Норникеля&raquo;.
                            </p>
                        </div>
                    </div>
                </section>

                <BaseTextBlock class="text mb-40" :title="'Модернизация производства'">
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
                            Объём выбросов SO₂ в&nbsp;районе&nbsp;п.&nbsp;Никель&nbsp;и&nbsp;г.&nbsp;Заполярный
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
                            Общий объём выбросов SO₂ предприятиями Кольского&nbsp;дивизиона
                        </div>
                    </div>
                </div>

                <BaseTextBlock class="text mb-40" :title="'Зона воздействия предприятий Кольского дивизиона'">
                    <p class="mb-10">
                        Опираясь на&nbsp;состояние экосистем в&nbsp;регионе, участники Большой Научной экспедиции определили
                        предполагаемый радиус общего промышленного воздействия&nbsp;&mdash; 16&nbsp;км от&nbsp;объектов
                        промышленных площадок &laquo;Мончегорск&raquo; и&nbsp;&laquo;Никель&nbsp;&mdash; Заполярный&raquo;.
                    </p>
                    <p class="mb-10">
                        Трансформация природных сообществ напрямую зависит от&nbsp;интенсивности воздействия. По&nbsp;данным
                        исследований, наибольшие изменения обнаруживаются в&nbsp;пределах 1&ndash;3&nbsp;км
                        от&nbsp;комбинатов.
                    </p>
                    <p class="mb-10">
                        Зона умеренного и&nbsp;незначительного воздействия протянулась на&nbsp;расстоянии 3&ndash;16&nbsp;км
                        от&nbsp;промплощадок, захватывая часть территории заповедника &laquo;Пасвик&raquo; и&nbsp;буферную
                        зону Лапландского заповедника. Сотрудники РАН предлагают ввести для этих полигонов постоянный режим
                        мониторинга. Также в&nbsp;2020 году был закрыт плавильный цех в&nbsp;Никеле, оказывающий негативное
                        воздействие на&nbsp;территории &laquo;Пасвика&raquo;.
                    </p>
                    <p>
                        За&nbsp;пределами 16&nbsp;км состояние среды исследователи расценивают как фоновое.
                    </p>
                </BaseTextBlock>
                <div class="transbaikal-radius mb-60">
                    <div class="transbaikal-radius__wrap">
                        <div class="transbaikal-radius__wrap-top mb-10">> 16 км</div>
                        <div class="transbaikal-radius__wrap-mid mb-10">Фоновая зона</div>
                        <div class="transbaikal-radius__wrap-bottom">
                            За пределами этого радиуса показатели биоразнообразия приняты за
                            <BaseTooltip :word="'фоновые'">
                                На&nbsp;фоновых участках исследователи не&nbsp;обнаружили следов воздействия предприятий,
                                экосистемы здесь сохранены в&nbsp;их&nbsp;исходном, первозданном виде. Состояние
                                биоразнообразия на&nbsp;фоновых территориях принимают за&nbsp;эталонное и&nbsp;используют
                                эти данные для наблюдения за&nbsp;природой в&nbsp;зонах воздействия.
                            </BaseTooltip>
                        </div>
                    </div>
                    <picture>
                        <source media="(max-width: 768px)" type="image/webp" srcset="img/kola-radius-mobile.webp">
                        <source media="(max-width: 768px)" srcset="img/kola-radius-mobile.png">
                        <source type="image/webp" srcset="img/kola-radius.webp">
                        <img src="img/kola-radius.png" alt="">
                    </picture>
                </div>
                <BaseSidebar>
                    <p>
                        На&nbsp;состоянии природных сообществ дивизиона особенно сказывается изъятие территорий
                        и&nbsp;аномально высокое содержание металлов в&nbsp;почве, связанной с&nbsp;природной аномалией. Эти
                        факторы снижают видовое разнообразие и&nbsp;продуктивность местных экосистем.
                    </p>
                </BaseSidebar>
            </SectionWhite>
            <SectionOrange>
                <BaseTextBlock class="text mb-60 mb-60-m" :tooltip="true">
                    <div class="section-orange__title">
                        Кто обитает в Кольском Заполярье
                    </div>
                    <div class="section-orange__descr">
                        <p>
                            В&nbsp;зоне, прилегающей к&nbsp;промышленным площадкам &laquo;Мончегорск&raquo;
                            и&nbsp;&laquo;Никель&nbsp;&mdash; Заполярный&raquo;, участники Большой Научной экспедиции
                            обнаружили несколько
                            <BaseTooltip :word="'охраняемых видов'">
                                Редкие и&nbsp;находящиеся под угрозой исчезновения виды, чья численность сокращается или уже
                                сократилась до&nbsp;опасного уровня. Им&nbsp;присваивают статус охраняемых и&nbsp;заносят
                                в&nbsp;Красные книги&nbsp;&mdash; общероссийскую или региональные. Охранный статус запрещает
                                охоту на&nbsp;животных, а&nbsp;в&nbsp;местах обитания краснокнижных растений и&nbsp;грибов
                                ограничены строительство и&nbsp;другая хозяйственная деятельность.
                            </BaseTooltip>
                            растений и&nbsp;птиц и&nbsp;выделили участки, критически
                            важные для жизни и&nbsp;благополучия местных обитателей. Для дальнейших наблюдений
                            за&nbsp;состоянием биоразнообразия также отобрали
                            <BaseTooltip :word="'индикаторные виды'">
                                Исследователи выбирают виды-индикаторы из&nbsp;числа типичных для региона организмов,
                                наиболее чутко реагирующих на&nbsp;отклонения в&nbsp;состоянии природной среды. Если
                                в&nbsp;составе вида-индикатора происходят изменения, то&nbsp;возможно, что в&nbsp;экосистеме
                                что-то пошло не&nbsp;так.
                            </BaseTooltip> растений и&nbsp;животных.
                        </p>
                    </div>
                </BaseTextBlock>
                <div class="flora-and-fauna">
                    <BaseTextBlock :title="'Флора'">
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
                        <BaseNumberBlock class="" :textTop="'54 вида'" :textBottom="'сосудистых растений'" />
                    </BaseTextBlock>
                    <BaseTextBlock :title="'Фауна'">
                        <p class="mb-10">
                            Животный мир в&nbsp;окрестностях промплощадок &laquo;Мончегорск&raquo;
                            и&nbsp;&laquo;Никель&mdash;Заполярный&raquo;, как и&nbsp;на&nbsp;всей территории Крайнего
                            Севера, не&nbsp;слишком разнообразен. Видовым богатством отличаются лишь птицы, причём
                            в&nbsp;зоне интенсивного воздействия, рядом с&nbsp;постройками, этот показатель выше из-за
                            <BaseTooltip :word="'синантропных'">
                                Синантропные виды насекомых, птиц, животных и&nbsp;растений научились жить рядом
                                с&nbsp;людьми. Они используют жилые постройки в&nbsp;качестве мест обитания и&nbsp;могут
                                питаться пищевыми запасами людей или отходами.
                            </BaseTooltip>
                            и&nbsp;водоплавающих видов. Близость лесов привлекает сюда белую куропатку
                            и&nbsp;глухаря.
                        </p>
                        <p>
                            Озёра и&nbsp;реки дивизиона богаты разными видами рыб: сиг, хариус, радужная форель, голец,
                            в&nbsp;больших количествах водятся окунь и&nbsp;щука.
                        </p>
                        <div class="wrap-numbers">
                            <BaseNumberBlock class="" :textTop="'44&nbsp;вида'"
                                :textBottom="'птиц в&nbsp;районе Мончегорска'" />
                            <BaseNumberBlock class="" :textTop="'48&nbsp;видов'"
                                :textBottom="'птиц&nbsp;в&nbsp;окрестностях&nbsp;площадки «Никель&nbsp;—&nbsp;Заполярный»'" />
                        </div>
                    </BaseTextBlock>
                </div>

                <div class="legend">
                    <BaseCollageInfo :text="'Охраняемые виды'" :color="'#71464E'" />
                    <BaseCollageInfo :text="'Индикаторные виды'" />
                </div>
                <div class="collage mb-100">
                    <BaseCollageInfo class="golden-eagle" :title="'Беркут'" :color="'#71464E'"
                        :text="'Самый крупный из&nbsp;орлов: размах крыльев достигает 230&nbsp;см при длине тела до&nbsp;93&nbsp;см. Беркуты чувствительны к&nbsp;беспокойству со&nbsp;стороны человека, чаще обитают в&nbsp;горах и&nbsp;реже на&nbsp;равнинных ландшафтах. За&nbsp;последние столетия вид исчез из&nbsp;многих районов из-за массового истребления, пестицидов, увеличения числа городов и&nbsp;изъятия земель под&nbsp;хозяйственные нужды'" />
                    <BaseDropdownInfo class="golden-eagle_mobile" :title="'Беркут'" :is-modal="true" :color="'#71464E'"
                        :text="'Самый крупный из&nbsp;орлов: размах крыльев достигает 230&nbsp;см при длине тела до&nbsp;93&nbsp;см. Беркуты чувствительны к&nbsp;беспокойству со&nbsp;стороны человека, чаще обитают в&nbsp;горах и&nbsp;реже на&nbsp;равнинных ландшафтах. За&nbsp;последние столетия вид исчез из&nbsp;многих районов из-за массового истребления, пестицидов, увеличения числа городов и&nbsp;изъятия земель под&nbsp;хозяйственные нужды'" />

                    <BaseCollageInfo class="belobrovik" :title="'Белобровик'"
                        :text="'Меняет пение в&nbsp;разных ситуациях: оповещает при&nbsp;опасности и&nbsp;подзывает, если найдена пища'" />
                    <BaseDropdownInfo class="belobrovik_mobile" :title="'Белобровик'" :is-modal="true"
                        :text="'Меняет пение в&nbsp;разных ситуациях: оповещает при&nbsp;опасности и&nbsp;подзывает, если найдена пища'" />

                    <BaseCollageInfo class="tap-dancing" :title="'Чечётка'"
                        :text="'Песня чечётки напоминает перестук каблуков в&nbsp;танце'" />

                    <BaseCollageInfo class="bluethroat" :title="'Варакушка'"
                        :text="'Прекрасный имитатор: в&nbsp;пении заимствует звуки у&nbsp;других птиц'" />

                    <BaseCollageInfo class="redstart-coot" :title="'Горихвостка-лысушка'"
                        :text="'Красный хвост самцов, слегка подергиваясь, напоминает горящее пламя&nbsp;&mdash; &laquo;горихвост&raquo;'" />

                    <BaseCollageInfo class="yurok" :title="'Юрок'" />
                    <BaseCollageInfo class="warbler" :title="'Пеночка-весничка'" />

                    <BaseDropdownInfo class="ground-beetles" :title="'Жужелицы'" :is-modal="true"
                        :text="'В&nbsp;Кольском дивизионе исследователи обнаружили 14&nbsp;видов жужелиц, из&nbsp;них два были назначены индикаторами: Carabus glabratus и&nbsp;Amara brunnea. Carabus glabratus отрицательно реагирует на&nbsp;промышленное воздействие: чем оно интенсивнее, тем меньше плотность вида на&nbsp;территории. Amara brunnea, в&nbsp;свою очередь, увеличивает численность в&nbsp;районах с&nbsp;интенсивным воздействием и&nbsp;постепенно снижает ближе к&nbsp;фоновым территориям'" />

                    <BaseDropdownInfo class="spiders" :title="'Пауки'" :is-modal="true"
                        :text="'Наименьшее видовое разнообразие пауков учёные отметили в&nbsp;зонах интенсивного воздействия дивизиона. Индикаторами среди обнаруженных видов стали три бродячих паука-охотника: Паук-волк, Паук-гназофида и&nbsp;Паук-мешкопряд. Пауки-волки составляют основу населения, они не&nbsp;строят ловчих сетей, быстро передвигаются и&nbsp;активно заселяют новые участки'" />

                    <BaseDropdownInfo class="ants" :title="'Муравьи'" :is-modal="true"
                        :text="'Из&nbsp;12&nbsp;видов муравьёв, обнаруженных участниками Экспедиции в&nbsp;Кольском дивизионе, четыре представителя рода Formica стали индикаторами: Северный чёрный муравей, Красноголовый муравей, Волосистый лесной муравей и&nbsp;Кровавый муравей-рабовладелец. Распределение и&nbsp;численность этих муравьёв помогли учёным подтвердить предположения о&nbsp;поясах воздействия промышленных объектов на&nbsp;природу дивизиона'" />

                    <BaseCollageInfo class="shrew" :title="'Бурозубка'" />
                    <BaseCollageInfo class="vole" :title="'Красно-серая полёвка'" />

                    <BaseCollageInfo class="kokushnik" :title="'Кокушник комарниковый'" :width="'10rem'"
                        :color="'#71464E'" />

                    <BaseDropdownInfo class="fingerroot" :title="'Пальчатокоренник пятнистый'" :is-modal="true"
                        :width="'10rem'" :color="'#71464E'"
                        :text="'Пятнышки на&nbsp;листьях этого северного представителя орхидей в&nbsp;народе считались следами слёз, которые обронила кукушка от&nbsp;одиночества, поэтому ещё одно название этого вида&nbsp;&mdash; &laquo;кукушкины слёзки&raquo;. Развитие семян пальчатокоренника возможно в&nbsp;симбиозе с&nbsp;определёнными видами грибов, а&nbsp;зацветает растение на&nbsp;6&ndash;8 год после прорастания'" />

                    <BaseCollageInfo class="ledum" :title="'Багульник болотный'" :width="'10rem'" />

                    <div class="background background-1"></div>
                    <BaseCollageInfo class="swan" :title="'Лебедь-кликун'" :color="'#71464E'"
                        :text="'Получил название за&nbsp;громкие, трубные крики, которые часто издает в&nbsp;полёте. Способен развить скорость до&nbsp;80&nbsp;км/ч. Является Национальным символом Финляндии'" />

                    <BaseDropdownInfo class="broody" :title="'Клуша'" :is-modal="true" :color="'#71464E'"
                        :text="'Представители этого вида чаек были встречены участниками Большой Научной экспедиции в&nbsp;зонах интенсивного воздействия предприятий Мончегорска и&nbsp;Мурманска. Кроме крупных водоёмов, птиц привлекают сюда пищевые отходы на&nbsp;свалках. На&nbsp;численность вида негативно влияет заселение мест обитания людьми и&nbsp;загрязнение воздуха промышленными выбросами'" />

                    <div class="background background-2"></div>

                    <BaseDropdownInfo class="zooplankton" :title="'Зоопланктон'" :is-modal="true"
                        :text="'В&nbsp;водоёмах пояса интенсивного воздействия размножается коловратка Asplanchna priodonta, а&nbsp;в&nbsp;пробах из&nbsp;зоны незначительного воздействия и&nbsp;на&nbsp;фоновых территориях исследователи обнаружили ветвистоусого рачка Holopedium gibberum'" />

                    <div class="background background-3"></div>
                    <BaseDropdownInfo class="phytoplankton" :title="'Фитопланктон'" :is-modal="true"
                        :text="'Зелёные водоросли Scenedesmus quadricauda встречаются только в&nbsp;пробах из&nbsp;зоны интенсивного воздействия Кольского дивизиона, а&nbsp;цианобактерия Oscillatoria amoena обитает исключительно на&nbsp;территории фона'" />

                    <div class="background background-4"></div>
                    <BaseCollageInfo class="tubifex" :title="'Трубочник обыкновенный'"
                        :text="'Общеизвестный индикатор органического загрязнения водоёмов'" />

                    <div class="background background-5"></div>
                    <BaseCollageInfo class="loach" :title="'Арктический голец'"
                        :text="'Считается самой полезной рыбой в&nbsp;мире: кусочек рыбы в&nbsp;30&nbsp;г покрывает суточную потребность человека в&nbsp;полезных жирных кислотах. Встречается также в&nbsp;водоёмах Кольского дивизиона'" />
                    <BaseDropdownInfo class="loach_mobile" :title="'Арктический голец'" :is-modal="true"
                        :text="'Считается самой полезной рыбой в&nbsp;мире: кусочек рыбы в&nbsp;30&nbsp;г покрывает суточную потребность человека в&nbsp;полезных жирных кислотах. Встречается также в&nbsp;водоёмах Кольского дивизиона'" />

                    <div class="background background-6"></div>
                    <BaseCollageInfo class="grayling" :title="'Европейский хариус'" :color="'#71464E'"
                        :text="'Вес рыбы может достигать 6,7&nbsp;кг'" />

                </div>
                <BaseTextBlock class="mb-100">
                    <p class="mb-10">
                        Заповедники Лапландский и&nbsp;&laquo;Пасвик&raquo;, по&nbsp;мнению специалистов РАН, являются
                        местами обитания, критически важными для природных сообществ дивизиона. На&nbsp;заповедных
                        территориях обнаружены охраняемые и&nbsp;
                        <BaseTooltip :word="'эндемичные виды'">
                            Вид животного или растения, который встречается на&nbsp;какой-либо территории и&nbsp;больше
                            нигде. Из-за
                            того, что их&nbsp;ареал обитания ограничен, эндемиков нередко заносят в&nbsp;Красные книги как
                            редкие или
                            исчезающие виды.
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
                </BaseTextBlock>

                <div class="habitat-map">
                    <div class="habitat-map__legend">
                        <div class="habitat-map__legend-top">
                            <div class="habitat-map__legend-title">Зона воздействия предприятий</div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                    fill="none">
                                    <circle cx="7" cy="7" r="7" fill="#D38235" />
                                </svg>
                                <div>Интенсивная</div>
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                    fill="none">
                                    <circle cx="7" cy="7" r="7" fill="#FFEC42" />
                                </svg>
                                <div>Умеренная</div>
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                    fill="none">
                                    <circle cx="7" cy="7" r="7" fill="#009CA6" />
                                </svg>
                                <div>Незначительная</div>
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none">
                                    <circle cx="8" cy="8" r="7" fill="white" stroke="#333333" />
                                </svg>
                                <div>Фоновая</div>
                            </div>
                        </div>
                        <div class="habitat-map__legend-bottom">
                            <div class="habitat-map__legend-title">Виды</div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                1 – Клуша
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                2 – Беркут
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                3 – Лебедь-кликун
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                4 – Европейский хариус
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                5 – Пальчатокоренник пятнистый
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                6 – Кокушник комарниковый
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
                                    <div>Интенсивная</div>
                                </div>
                                <ul class="habitat-map__list-list">
                                    <li>Клуша</li>
                                    <li>Беркут</li>
                                </ul>
                            </div>

                            <div class="habitat-map__list-item-wrap">
                                <div class="habitat-map__list-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                        fill="none">
                                        <circle cx="7" cy="7" r="7" fill="#FFEC42" />
                                    </svg>
                                    <div>Умеренная</div>
                                </div>
                                <ul class="habitat-map__list-list">
                                    <li>Европейский хариус</li>
                                    <li>Кокушник комарниковый</li>
                                </ul>
                            </div>

                            <div class="habitat-map__list-item-wrap">
                                <div class="habitat-map__list-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                        fill="none">
                                        <circle cx="7" cy="7" r="7" fill="#009CA6" />
                                    </svg>
                                    <div>Незначительная</div>
                                </div>
                                <ul class="habitat-map__list-list">
                                    <li>Беркут</li>
                                    <li>Лебедь-кликун</li>
                                    <li>Европейский хариус</li>
                                    <li>Пальчатокоренник пятнистый</li>
                                </ul>
                            </div>

                            <div class="habitat-map__list-item-wrap">
                                <div class="habitat-map__list-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                        fill="none">
                                        <circle cx="8" cy="8" r="7" fill="white" stroke="#333333" />
                                    </svg>
                                    <div>Фоновая</div>
                                </div>
                                <ul class="habitat-map__list-list">
                                    <li>Лебедь-кликун</li>
                                    <li>Европейский хариус</li>
                                    <li>Кокушник комарниковый</li>
                                </ul>
                            </div>

                        </div>
                        <div class="habitat-map__buttons">
                            <div class="habitat-map__button" :class="{ 'habitat-map__button_active': idMap === map1 }"
                                @click="idMap = 1">Мончегорск</div>
                            <div class="habitat-map__button" :class="{ 'habitat-map__button_active': idMap === map2 }"
                                @click="idMap = 2">Никель — Заполярный</div>
                        </div>
                    </div>

                    <picture v-if="idMap === 1">
                        <source media="(max-width: 768px)" type="image/webp" srcset="img/habitat-map-kola-1-mobile.webp">
                        <source media="(max-width: 768px)" srcset="img/habitat-map-kola-1-mobile.png">
                        <source type="image/webp" srcset="img/habitat-map-kola-1.webp">
                        <img src="img/habitat-map-kola-1.png" alt="">
                    </picture>

                    <picture v-if="idMap === 2">
                        <source media="(max-width: 768px)" type="image/webp" srcset="img/habitat-map-kola-2-mobile.webp">
                        <source media="(max-width: 768px)" srcset="img/habitat-map-kola-2-mobile.png">
                        <source type="image/webp" srcset="img/habitat-map-kola-2.webp">
                        <img src="img/habitat-map-kola-2.png" alt="">
                    </picture>

                    <div v-if="idMap === 1">
                        <div class="habitat-map__city habitat-map__city-1">
                            <div class="habitat-map__city-circale"></div>
                            <span>Мончегорск</span>
                        </div>
                        <div class="habitat-map__river">
                            Имандра
                        </div>
                    </div>
                    <div v-if="idMap === 2">
                        <div class="habitat-map__city habitat-map__city-2">
                            <div class="habitat-map__city-circale"></div>
                            <span>Никель</span>
                        </div>
                        <div class="habitat-map__city habitat-map__city-3">
                            <div class="habitat-map__city-circale"></div>
                            <span>Заполярный</span>
                        </div>
                        <div class="habitat-map__city habitat-map__city-4">
                            <div class="habitat-map__city-circale"></div>
                            <span>Мурманск</span>
                        </div>
                        <div class="habitat-map__name-sea">
                            Баренцево <br />море
                        </div>
                    </div>
                </div>

                <BaseTextBlock class="mb-40">
                    Некоторые редкие виды могут проживать в&nbsp;зонах воздействия предприятий, несмотря на&nbsp;шум или
                    другие факторы воздействия. Ведь для их&nbsp;выживания главное&nbsp;&mdash; наличие корма
                    и&nbsp;отсутствие беспокойства со&nbsp;стороны человека.
                </BaseTextBlock>
                <BaseSidebar>
                    <p>
                        Минимизировать накопленный за&nbsp;многие десятилетия техногенный след, восстановить
                        и&nbsp;сохранить экосистемы Кольского Заполярья&nbsp;&mdash; важные пункты экологической программы
                        &laquo;Норникеля&raquo; в&nbsp;Кольском&nbsp;дивизионе.
                    </p>
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
import BaseTooltip from '@/components/ BaseTooltip.vue'
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
            heroDescr: 'Растительный и&nbsp;животный мир рядом с&nbsp;промышленными площадками &laquo;Норникеля&raquo; в&nbsp;Мурманской области'
        }
    },
    mounted() {
        this.$nextTick(function () {
            this.scrollAnimation();
        })
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
        }
    }
}
</script>

<style lang="scss">
.kola {
    .big-map {
        margin-bottom: 2.7778rem;
        // height: 40.19419rem;

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
                    background-position: 0 515vh;
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
                    background-image: url(../../public/img/map-1-mobile.jpg);
                }

                &.bg-2 {
                    background-image: url(../../public/img/map-2-mobile.jpg);
                }

                &.bg-3 {
                    background-image: url(../../public/img/map-3-mobile.jpg);
                }

                &.bg-4 {
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
        margin-bottom: 5.25rem;
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
                bottom: 40rem;
                right: 34rem;
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
                bottom: 24rem;
                left: 44rem;
                width: 20rem;
                height: 10rem;

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

        .golden-eagle {
            width: 20.5rem;
            top: 2rem;
            right: 24rem;

            @media (max-width: 768px) {
                display: none;
            }

            &_mobile {
                display: none;
                position: absolute;
                top: 69rem;
                left: 7.5rem;

                @media (max-width: 768px) {
                    display: block;
                }
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
            bottom: 42rem;
            right: 35rem;

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
            bottom: 23.5rem;
            left: 45rem;
            width: 19rem;

            @media (max-width: 768px) {
                display: none;
            }

            &_mobile {
                display: none;
                position: absolute;
                bottom: 53rem;
                left: 13rem;

                @media (max-width: 768px) {
                    display: block;
                }
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
}
</style>