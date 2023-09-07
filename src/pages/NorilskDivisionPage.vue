<template>
    <div class="division">
        <BaseHero :title="'Норильский дивизион. Природные сокровища южного Таймыра'" :descr="heroDescr"
            :img="'img/hero-3.jpg'" :imgMobile="'img/hero3-mobile.jpg'" />
        <MainSection>
            <SectionWhite>
                <BaseTextBlock class="text mb-40" :title="'Особенности дивизиона'" :tooltip="true">
                    <p class="mb-10">
                        Горнодобывающие, металлургические и энергетические объекты Норильского
                        <BaseTooltip :word="'дивизиона'">
                            Компании объединяют в&nbsp;дивизион предприятия одного региона или объекты с&nbsp;общей задачей,
                            например, перевозка сырья или энергоснабжение. Деление на&nbsp;дивизионы (от&nbsp;французского
                            слова division&nbsp;&mdash; &laquo;разделение&raquo;) упрощает управление крупной организацией.
                        </BaseTooltip>
                        расположены в зоне,
                        где ещё сохранилась «вечная мерзлота», в гористой местности. Предприятия образуют плотную
                        промышленную сеть, поэтому состояние природного окружения на этих территориях требует большого
                        внимания со стороны компании.
                    </p>
                    <p>
                        «Норникель» понимает свою ответственность за состояние окружающей среды и много внимания уделяет
                        здоровью экосистем во всех дивизионах. Восстанавливать экологическое равновесие на севере
                        Красноярского края компания начала с исследования наземной и водной флоры и фауны и определения
                        границ промышленного воздействия.
                    </p>
                </BaseTextBlock>

                <BigMap :circales="circales" :img="'img/division-big-map.webp'"
                    :imgMobile="'img/division-big-map-mobile.webp'">
                    <BaseNumberBlock :textTop="'44 объекта'" :textBottom="'входит в Норильский дивизион'" />
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
                                <circle cx="7" cy="7" r="7" fill="#0077C8" />
                            </svg>

                            <div class="circale-block__text">Энергетические объекты</div>
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

                <section class="scroll">
                    <div class="scroll-bg bg-1">
                    </div>
                    <div class="scroll-bg bg-2">
                    </div>
                    <div class="scroll-bg bg-3">
                    </div>
                    <div class="scroll-wrap">
                        <div class="scroll-card card-1 text-block__descr">
                            <p>Большой Норильск</p>
                            Норильский промышленный район, или Большой Норильск образован местными предприятиями
                            &laquo;Норникеля&raquo;. Также в&nbsp;район входят города Норильск, Дудинка и&nbsp;ещё несколько
                            населённых пунктов. Здесь в&nbsp;условиях многолетней мерзлоты компания добывает
                            и&nbsp;перерабатывает медь, драгоценные металлы, теллур, серу и&nbsp;селен.
                        </div>
                        <div class="scroll-card card-2 text-block__descr">
                            <p>Энергетические объекты</p>
                            Теплом и&nbsp;светом Промышленный район обеспечивают теплоцентрали, ГЭС и&nbsp;газодобывающие
                            предприятия &laquo;Норникеля&raquo;.
                        </div>
                        <div class="scroll-card card-3 text-block__descr">
                            <p>Путоранский заповедник</p>
                            Природный объект, важный для поддержания и&nbsp;восстановления местного биоразнообразия.
                            Расстояние
                            от&nbsp;Промышленного района до&nbsp;границ заповедника&nbsp;&mdash; более 50&nbsp;км.
                            По&nbsp;словам специалистов, этого достаточно, чтобы сохранить местные экосистемы
                            в&nbsp;неприкосновенности и&nbsp;исключить воздействие предприятий.
                        </div>
                    </div>
                </section>

                <div class="number-blocks text-block__wrap mb-100">
                    <BaseNumberBlock :textTop="'до&nbsp;280&nbsp;дней'" :textBottom="'устойчивых морозов'" />
                    <BaseNumberBlock :textTop="'до&nbsp;500&nbsp;метров'" :textBottom="'толщина многолетнемёрзлых пород'" />
                    <BaseNumberBlock :textTop="'-53&nbsp;˚С'" :textBottom="'минимальная температура'" />
                </div>

                <BaseTextBlock class="text mb-40" :title="'Зона воздействия предприятий Норильского дивизиона'"
                    :tooltip="true">
                    <p class="mb-10">
                        По&nbsp;данным Большой научной экспедиции 2022&nbsp;года, радиус воздействия Норильского
                        промышленного района
                        на&nbsp;растительный и&nbsp;животный мир южного Таймыра&nbsp;&mdash; не&nbsp;больше 10&nbsp;км.
                    </p>
                    <p>
                        Эффект от&nbsp;промышленной нагрузки наиболее выражен на&nbsp;расстоянии до&nbsp;1&nbsp;км,
                        а&nbsp;местами до&nbsp;2&nbsp;км от
                        предприятий. С&nbsp;удалением от&nbsp;промышленной и&nbsp;жилой зон признаки воздействия сходят
                        на&nbsp;нет. Там, где
                        влияние предприятий не&nbsp;обнаруживается, исследователи создают полигоны для изучения
                        первозданного,
                        или
                        <BaseTooltip :word="'фонового'">
                            На&nbsp;фоновых участках исследователи не&nbsp;обнаружили следов воздействия предприятий,
                            экосистемы здесь сохранены в&nbsp;их&nbsp;исходном, первозданном виде. Состояние биоразнообразия
                            на&nbsp;фоновых территориях принимают за&nbsp;эталонное и&nbsp;используют эти данные для
                            наблюдения за&nbsp;природой в&nbsp;зонах воздействия.
                        </BaseTooltip> состояния местных экосистем.
                    </p>
                </BaseTextBlock>
                <div class="division-radius mb-60">
                    <picture>
                        <source media="(max-width: 768px)" srcset="img/division-radius-mobile.png">
                        <img src="img/division-radius.png" alt="">
                    </picture>
                </div>
                <BaseSidebar>
                    <p>
                        Плотное расположение промышленных объектов и&nbsp;населённых пунктов суммирует их&nbsp;негативное
                        воздействие,
                        поэтому исследователи рассматривают Большой Норильск как единый источник воздействия
                        на&nbsp;экосистемы
                        дивизиона
                    </p>
                </BaseSidebar>
            </SectionWhite>
            <SectionOrange>
                <BaseTextBlock class="text mb-60" :tooltip="true">
                    <div class="section-orange__title">
                        Кто обитает на юге Таймыра
                    </div>
                    <div class="section-orange__descr">
                        <p class="mb-10">
                            В&nbsp;зоне, прилегающей к&nbsp;Промышленному району, в&nbsp;условной зоне воздействия
                            предприятий,
                            участники Большой Научной экспедиции обнаружили
                            <BaseTooltip :word="'охраняемые виды'">
                                Редкие и&nbsp;находящиеся под угрозой исчезновения виды, чья численность сокращается или уже
                                сократилась до&nbsp;опасного уровня. Им&nbsp;присваивают статус охраняемых и&nbsp;заносят
                                в&nbsp;Красные книги&nbsp;&mdash; общероссийскую или региональные. Охранный статус запрещает
                                охоту на&nbsp;животных, а&nbsp;в&nbsp;местах обитания краснокнижных растений и&nbsp;грибов
                                ограничено строительство и&nbsp;другая хозяйственная деятельность.
                            </BaseTooltip> животных и&nbsp;растений,
                            а&nbsp;также
                            несколько участков с&nbsp;уникальными экосистемами.
                        </p>
                        <p>
                            Среди типичных представителей арктической флоры и&nbsp;фауны биологи отобрали и
                            <BaseTooltip :word="'индикаторные виды'">
                                Исследователи выбирают виды-индикаторы из&nbsp;числа типичных для региона организмов,
                                наиболее
                                чутко реагирующих на&nbsp;отклонения в&nbsp;состоянии природной среды. Если в&nbsp;составе
                                вида-индикатора происходят изменения, то&nbsp;возможно, что в&nbsp;экосистеме что-то пошло
                                не&nbsp;так.
                            </BaseTooltip>.
                            Наблюдение за&nbsp;их&nbsp;поведением сможет многое рассказать о&nbsp;состоянии природного
                            окружения
                            дивизиона.
                        </p>
                    </div>
                </BaseTextBlock>
                <div class="flora-and-fauna">
                    <BaseTextBlock :title="'Флора'">
                        <p class="mb-10">
                            Растительный покров региона образуют мхи и&nbsp;лишайники, низкорослые травы
                            и&nbsp;кустарники.
                        </p>
                        <p>
                            Участки лиственничных лесов и&nbsp;зарослей ольховника стали домом для травянистых
                            многолетников, редких или отсутствующих в&nbsp;других типах сообществ. Обилие здесь древесных
                            растений помогает поддерживать разнообразие грибов.
                        </p>
                    </BaseTextBlock>
                    <BaseTextBlock :title="'Фауна'">
                        <p class="mb-10">
                            Территория дивизиона не&nbsp;отличается большим разнообразием млекопитающих, что типично для
                            южных тундр. Птиц гораздо больше, но&nbsp;многие обитают здесь сезонно, из&nbsp;зимующих
                            видов&nbsp;&mdash; белая и&nbsp;тундряная куропатки, ворон.
                        </p>
                        <p>
                            В&nbsp;местных озёрах водится ценная промысловая рыба: сибирский сиг и&nbsp;разные виды гольца.
                        </p>
                        <BaseNumberBlock class="" :textTop="'56 видов'" :textBottom="'птиц'" />
                    </BaseTextBlock>
                </div>
                <div class="collage">
                    <BaseDropdownInfo class="ground-beetles" :title="'Жужелицы'"
                        :text="'Такие виды, как Amara brunnea, Pterostichus fulvescens, Notiophilus fasciatus и Nebria gyllenhali, отрицательно реагируют на&nbsp;промышленное воздействие и&nbsp;помогают исследователям фиксировать изменения в&nbsp;окружающей среде'" />
                    <BaseDropdownInfo class="myxomycetes" :title="'Миксомицеты'"
                        :text="'Миксомицеты занимают промежуточное положение между растениями и&nbsp;животными: похожие внешне на&nbsp;грибы, они постоянно передвигаются и&nbsp;едят. На&nbsp;территории воздействия предприятий исследователи обнаружили 14&nbsp;видов этих существ'" />
                    <BaseDropdownInfo class="microalgae" :title="'Микроводоросли'"
                        :text="'В&nbsp;реках и&nbsp;озёрах дивизиона биологи обнаружили два вида микроводорослей, способных рассказать об&nbsp;экологической обстановке. Похожая на&nbsp;звезду Asterionella formosa живёт только в&nbsp;чистых водоёмах, в&nbsp;то&nbsp;время как её&nbsp;антогонист Dictyosphaerium pulchellum развивается в&nbsp;загрязнённой воде'" />

                    <BaseDropdownInfo class="zooplankton" :title="'Зоопланктон'"
                        :text="'Чтобы оценить состояние водоёмов, исследователи отобрали виды зоопланктона, сигнализирующие о&nbsp;качестве воды. Например, планктонный рачок Limnocalanus macrurus любит чистую воду, а&nbsp;если начинает доминировать планктонная коловратка Brachionus sericus&nbsp;&mdash; вода загрязнена'" />
                    <BaseDropdownInfo v-if="!isModile" class="char" :title="'Арктический голец (боганидская палия)'"
                        :text="'Считается самой полезной рыбой в&nbsp;мире: кусочек рыбы в&nbsp;30&nbsp;г. покрывает суточную потребность человека в&nbsp;полезных жирных кислотах. Встречается также в&nbsp;водоёмах Кольского дивизиона'" />

                    <BaseDropdownInfo v-if="isModile" class="merlin" :title="'Кречет'" :color="'#71464E'"
                        :text="'Самая крупная птица из&nbsp;отряда соколиных. За&nbsp;последние 20&nbsp;лет её&nbsp;популяция в&nbsp;России сократилась втрое. &laquo;Норникель&raquo; вложил 50&nbsp;млн рублей в&nbsp;поддержку и&nbsp;сохранение вида в&nbsp;2022&ndash;2023&nbsp;гг'" />

                    <BaseDropdownInfo v-if="isModile" class="deer" :title="'Дикий северный олень'" :color="'#71464E'"
                        :text="'Отличительная особенность этого вида&nbsp;&mdash; наличие рогов у&nbsp;самок. Наименее изученная и&nbsp;малочисленная популяция дикого северного оленя&nbsp;&mdash; гыданская, она занесена в&nbsp;Красную книгу ЯНАО. По&nbsp;данным исследований, олени почти не&nbsp;мигрируют на&nbsp;дальние расстояния и&nbsp;круглый год остаются в&nbsp;арктической тундре'" />
                    <BaseDropdownInfo v-if="isModile" class="lycosus-moss" :title="'Плаунок плаунковидный'"
                        :color="'#71464E'"
                        :text="'В&nbsp;районе Промышленного Норильска биологи обнаружили несколько участков, ценных для произрастания этого редкого вида растений. Чтобы сохранить популяции плаунка, вокруг этих участков необходимо создавать защитные зоны'" />
                    <BaseDropdownInfo v-if="isModile" class="hare" :title="'Заяц-беляк'"
                        :text="'Спасаясь от&nbsp;опасности, развивает скорость до&nbsp;60 км/ч'" />
                </div>
                <BaseTextBlock class="mb-100" :tooltip="true">
                    <p class="mb-10">
                        В&nbsp;месте расположения Норильского дивизиона, в&nbsp;долине Медвежьего ручья учёные обнаружили
                        уникальную
                        экосистему&nbsp;&mdash; выжившие тундростепи. Эти современники эпохи мамонтов и&nbsp;шерстистых
                        носорогов
                        сохранились благодаря уникальному сочетанию почвенных и&nbsp;климатических условий.
                    </p>
                    <p>
                        <BaseTooltip :word="'Реликтовые'">
                            Биологические реликты&nbsp;&mdash; дожившие до&nbsp;нашего времени без изменений представители
                            прошлых эволюционных эпох. Реликтовыми могут быть организмы, виды или целые природные
                            сообщества. Как правило, в&nbsp;прошлом реликты были широко распространены и&nbsp;играли
                            ключевую роль в&nbsp;формировании условий жизни на&nbsp;определённой территории.
                        </BaseTooltip>
                        экосистемы&nbsp;&mdash; свидетели прошлых геологических эпох&nbsp;&mdash; могут поведать
                        учёным о&nbsp;развитии
                        планеты. Кроме того, это ценный ресурс видов, которые в&nbsp;условиях глобального изменения климата
                        могут
                        заселять новые места обитания.
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
                                1 – Кречет
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                2 – Сапсан
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                3 – Орлан-белохвост
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                4 – Гуменник
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                5 – Золотистая ржанка
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                6 – Лебедь-кликун
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                7 – Чернозобая гагара
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                8 – Плаунок плаунковидный
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                9 – Реликтовые тундростепи
                            </div>
                        </div>
                    </div>
                    <div class="habitat-map__wrap">
                        <div v-if="!isModile" class="habitat-map__title">Карта обитания охраняемых видов</div>
                        <div v-if="isModile" class="habitat-map__title">Зона воздействия предприятий и виды</div>
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
                                    <li>Орлан-белохвост</li>
                                    <li>Золотистая ржанка</li>
                                    <li>Лебедь-кликун</li>
                                    <li>Чернозобая гагара</li>
                                    <li>Сапсан</li>
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
                                    <li>Гуменник</li>
                                    <li>Золотистая ржанка</li>
                                    <li>Лебедь-кликун</li>
                                    <li>Чернозобая гагара</li>
                                    <li>Плаунок</li>
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
                                    <li>Золотистая ржанка</li>
                                    <li>Лебедь-кликун</li>
                                    <li>Чернозобая гагара</li>
                                    <li>Реликтовые&nbsp;тундростепи</li>
                                    <li>Кречет и Сапсан</li>
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
                                    <li>Гуменник</li>
                                    <li>Золотистая ржанка</li>
                                </ul>
                            </div>

                        </div>
                        <div class="habitat-map__buttons">
                            <div class="habitat-map__button" :class="{ 'habitat-map__button_active': idMap === map1 }"
                                @click="idMap = 1">Большой Норильск / Дудинка</div>
                            <div class="habitat-map__button" :class="{ 'habitat-map__button_active': idMap === map2 }"
                                @click="idMap = 2">Пеляткинское / Мессояха</div>
                        </div>
                    </div>

                    <picture v-if="idMap === 1">
                        <source media="(max-width: 768px)" srcset="img/habitat-map-1-mobile.png">
                        <source type="image/webp" srcset="img/habitat-map-1.webp">
                        <img src="img/habitat-map-1.png" alt="">
                    </picture>

                    <picture v-if="idMap === 2">
                        <source media="(max-width: 768px)" srcset="img/habitat-map-2-mobile.png">
                        <source type="image/webp" srcset="img/habitat-map-2.webp">
                        <img src="img/habitat-map-2.png" alt="">
                    </picture>

                    <div v-if="idMap === 1">
                        <div class="habitat-map__name-lake">
                            оз. Пясино
                        </div>
                        <div class="habitat-map__city habitat-map__city-1">
                            <div class="habitat-map__city-circale"></div>
                            <span>Талнах</span>
                        </div>
                        <div class="habitat-map__city habitat-map__city-2">
                            <div class="habitat-map__city-circale"></div>
                            <span>Норильск</span>
                        </div>
                        <div class="habitat-map__city habitat-map__city-3">
                            <div class="habitat-map__city-circale"></div>
                            <span>Дудинка</span>
                        </div>
                    </div>
                    <div v-if="idMap === 2">
                        <div class="habitat-map__river">
                            р. Енисей
                        </div>
                        <div class="habitat-map__city habitat-map__city-4">
                            <div class="habitat-map__city-circale"></div>
                            <span>Пеляткинское газоконденсатное
                                месторождение</span>
                        </div>
                        <div class="habitat-map__city habitat-map__city-5">
                            <div class="habitat-map__city-circale"></div>
                            <span>Мессояхское газоконденсатное месторождение</span>
                        </div>
                    </div>
                </div>
                <BaseTextBlock class="mb-100">
                    <p>
                        Некоторые редкие виды могут проживать в&nbsp;зонах воздействия предприятий, несмотря на&nbsp;шум или
                        другие факторы воздействия. Ведь для их&nbsp;выживания главное&nbsp;&mdash; наличие корма
                        и&nbsp;отсутствие беспокойства со&nbsp;стороны человека.
                    </p>
                </BaseTextBlock>
                <BaseSidebar>
                    <p>
                        Уникальные экосистемы, редкие и&nbsp;индикаторные виды и&nbsp;места их&nbsp;обитания&nbsp;&mdash;
                        всё это элементы системы, с
                        помощью которой компания контролирует уровень промышленного воздействия и&nbsp;сохраняет обилие и
                        разнообразие природы в&nbsp;дивизионе
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
import BaseTooltip from '@/components/ BaseTooltip.vue'
import BaseNumberBlock from "@/components/BaseNumberBlock.vue";
// import BaseCollageInfo from '@/components/BaseCollageInfo.vue'
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
        // BaseCollageInfo,
        BaseDropdownInfo
    },
    data() {
        return {
            map1: 1,
            map2: 2,
            idMap: 1,
            circales: [
                {
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
            isModile: (window.innerWidth <= 768),
            heroDescr: 'Какие виды животных и растений живут по соседству с промышленным гигантом Красноярского края — Большим Норильском'
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
            // margin: 0 6.75rem;
            // width: calc(100% - 13.5rem);
            background-position: bottom;
            background-size: calc(100% - 13.5rem) 49rem;
            background-repeat: no-repeat;

            &.active {
                background-attachment: fixed;
                height: 100%;

                @media (max-width: 768px) {
                    height: 100%;
                    background-size: contain;
                    position: fixed;
                    background-attachment: unset;
                }

                &.remove-active {
                    background-attachment: unset;
                    background-position: 6.75rem 310vh;
                    background-size: calc(100% - 13.5rem) 49rem;
                    // margin: 0 6.75rem;
                    // width: calc(100% - 13.5rem);

                    @media (max-width: 768px) {
                        background-position: bottom;
                        position: absolute;
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
                    background-image: url(../../public/img/fito-1-mobile.jpg);
                }

                &.bg-2 {
                    background-image: url(../../public/img/fito-2-mobile.jpg);
                }

                &.bg-3 {
                    background-image: url(../../public/img/fito-3-mobile.jpg);
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
        height: 349rem;
        width: 100%;
        background-image: url(../../public/img/collage.png);
        background-repeat: no-repeat;
        background-size: contain;
        z-index: 1;

        @supports (background-image: url(../../public/img/collage.webp)) {
            background-image: url(../../public/img/collage.webp);
        }

        @media (max-width: 768px) {
            height: 792rem;
            background-image: url(../../public/img/collage-mobile.png);
            // @supports (background-image: url(../../public/img/collage-mobile.webp)) {
            // background-image: url(../../public/img/collage-mobile.webp);
            // } 
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
                top: 433rem;
                right: 30rem;
            }
        }

        .microalgae {
            position: absolute;
            bottom: 43rem;
            left: 21rem;

            @media (max-width: 768px) {
                bottom: 86rem;
                left: 8rem;
            }
        }

        .zooplankton {
            position: absolute;
            bottom: 38rem;
            right: 39rem;

            @media (max-width: 768px) {
                bottom: 74rem;
                right: 29rem;
            }
        }

        .char {
            position: absolute;
            bottom: 27rem;
            left: 43rem;

            .dropdown-info__text {
                padding: 3.56rem 0.62rem 0.88rem 3.13rem;
            }
        }

        .merlin {
            position: absolute;
            top: 115rem;
            left: 12rem;
        }

        .deer {
            position: absolute;
            top: 278rem;
            left: 5rem;
        }

        .lycosus-moss {
            position: absolute;
            bottom: 193rem;
            left: 2rem;
        }

        .hare {
            position: absolute;
            bottom: 260rem;
            left: 7rem;
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
        font-size: 1.125rem;
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

@keyframes ripple-black {
    0% {
        box-shadow: 0 0 0 0 rgba(51, 51, 51, 0.5), 0 0 0 0.1rem rgba(51, 51, 51, 0.3), 0 0 0 0.3rem rgba(51, 51, 51, 0.3), 0 0 0 0.3rem rgba(51, 51, 51, 0.3);
    }

    90% {
        box-shadow: 0 0 0 0.1rem rgba(51, 51, 51, 0), 0 0 0 0.2rem rgba(51, 51, 51, 0), 0 0 0 0.3rem rgba(51, 51, 51, 0), 0 0 0 0.4rem rgba(51, 51, 51, 0);
    }
}
</style>