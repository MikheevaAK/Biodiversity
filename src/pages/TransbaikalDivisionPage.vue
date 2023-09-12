<template>
    <div class="transbaikal">
        <BaseHero :title="'Забайкальский дивизион. Природа в&nbsp;окрестностях Быстринского комбината'" :descr="heroDescr"
            :img="'img/hero4.jpg'" :imgMobile="'img/hero4-mobile.jpg'" />
        <MainSection>
            <SectionWhite>
                <BaseTextBlock class="text mb-40" :title="'Особенности дивизиона'" :tooltip="true">
                    Забайкальский
                    <BaseTooltip :word="'дивизиона'">
                        Компании объединяют в&nbsp;дивизион предприятия одного региона или объекты с&nbsp;общей задачей,
                        например, перевозкой сырья или энергоснабжением. Деление на&nbsp;дивизионы (от&nbsp;французского
                        слова
                        division&nbsp;&mdash; &laquo;разделение&raquo;) упрощает управление крупной организацией.
                    </BaseTooltip>
                    «Норникеля» отвечает за разработку золото-железо-медных руд Быстринского
                    месторождения. Сегодня это крупнейший проект в отрасли, начатый с нуля, на неосвоенных территориях.
                    Это позволило компании уже на старте внедрить передовые практики добычи и переработки руды, в том
                    числе сокращающие воздействие на окружающую среду.
                </BaseTextBlock>

                <BigMap :circales="circales" :img="'img/transbaikal-big-map'" class="mb-100"
                    :imgMobile="'img/transbaikal-big-map-mobile'">
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
                <!-- scroll -->

                <BaseTextBlock class="text mb-40 max-width" :title="'Быстринский горно-обогатительный комбинат'">
                    <p>
                        Комбинат расположился в&nbsp;труднодоступной местности Газимуро-Заводского района Забайкальского
                        края. Здесь перерабатывают руду Быстринского месторождения и&nbsp;получают медный, магнетитовый
                        и&nbsp;золотосодержащий концентраты.
                    </p>
                </BaseTextBlock>

                <BaseTextBlock class="text mb-40" :title="'Урюмканский заказник'">
                    <p>
                        Созданный в&nbsp;80-х природный заказник сохраняет экосистемы Забайкалья и&nbsp;поддерживает
                        экологический баланс. Промышленные объекты дивизиона расположены на&nbsp;расстоянии 22&nbsp;км
                        от&nbsp;границ заказника и,&nbsp;по&nbsp;мнению исследователей, не&nbsp;влияют на&nbsp;его природных
                        обитателей.
                    </p>
                </BaseTextBlock>

                <picture>
                    <source media="(max-width: 768px)" type="image/webp" srcset="img/area-mobile.webp">
                    <source media="(max-width: 768px)" srcset="img/area-mobile.png">
                    <source type="image/webp" srcset="img/area.webp">
                    <img class="mb-100" src="img/area.png" alt="">
                </picture>

                <div class="transbaikal-scroll mb-100">
                    <BaseTextBlock class="text" :title="'Экотехнологии Быстринского ГОК'">
                        <p>
                            При создании &laquo;Быстры&raquo; и&nbsp;её&nbsp;инфраструктуры использовались передовые
                            технологии, сокращающие экологический след предприятия.
                        </p>
                    </BaseTextBlock>
                    <svg class="mobile-icon-scroll" width="96" height="54" viewBox="0 0 96 54" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M83.6023 17.4167L77.934 11.7325L80.1665 9.5L89.6665 19L80.1665 28.5L77.934 26.2675L83.6023 20.5833H64.3332V17.4167H83.6023Z"
                            fill="#DEDEDE" />
                        <path
                            d="M12.3977 17.4167L18.066 11.7325L15.8335 9.5L6.3335 19L15.8335 28.5L18.066 26.2675L12.3977 20.5833H31.6668V17.4167H12.3977Z"
                            fill="#DEDEDE" />
                        <circle cx="48.5" cy="18.5" r="18.5" fill="#DEDEDE" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M40.35 28.4855C39.9499 27.8918 39.5705 26.1688 39.2545 25.0944C38.9395 24.0217 38.6892 23.5984 38.3004 23.3184C37.912 23.0376 37.386 22.9021 36.9063 22.8755C36.4258 22.8492 35.9928 22.9325 35.6618 23.0766C35.3324 23.2208 35.1051 23.4235 34.9103 23.9518C34.714 24.48 34.5514 25.3325 34.4674 26.9558C34.3833 28.5791 34.377 30.9702 34.531 33.3717C34.6853 35.7724 34.9991 38.1823 35.1574 39.5283C35.3156 40.8725 35.3191 41.1534 35.0153 41.8695C34.7122 42.5854 34.1016 43.7378 33.7124 44.4612C33.3231 45.1828 33.1545 45.4749 34.9587 46.6846C36.7635 47.8938 40.5421 50.0189 42.496 51.0641C44.4504 52.1085 44.5815 52.0722 44.8609 51.7324C45.1397 51.3919 45.567 50.7478 45.9377 50.1532C46.308 49.5593 46.6215 49.0162 46.9986 48.6489C47.3758 48.2814 47.8164 48.0898 48.2327 47.9417L49.4905 47.5249C49.9396 47.366 50.4458 47.1569 51.0549 46.6731C51.6641 46.1895 52.3767 45.4302 53.3443 43.8995C54.3099 42.3677 55.5312 40.0643 56.2654 38.6492C56.9996 37.2351 57.2479 36.7089 57.3446 36.2082C57.441 35.7062 57.3864 35.2298 57.1153 34.7944C56.8437 34.3588 56.3554 33.9653 55.907 33.7903C55.4588 33.6147 55.0494 33.6562 54.6466 33.9257C54.2436 34.1945 53.8471 34.6903 53.589 35.0424C53.3298 35.3948 53.2091 35.6039 53.0439 35.7024C52.8769 35.8009 52.6629 35.789 52.7343 35.5237C52.8049 35.2579 53.1599 34.7391 53.5216 34.1126C53.8838 33.4853 54.2522 32.7506 54.442 32.1365C54.6321 31.5215 54.6431 31.0257 54.5075 30.642C54.3717 30.257 54.0899 29.9826 53.7837 29.7504C53.4783 29.5186 53.1481 29.3279 52.8197 29.2777C52.4907 29.2272 52.1645 29.3166 51.8807 29.5699C51.5964 29.824 51.3549 30.2422 51.0959 30.5941C50.8377 30.9465 50.5617 31.2337 50.371 31.373C50.1809 31.5143 50.0742 31.5082 50.2741 31.0676C50.4737 30.6253 50.9806 29.7473 51.305 29.0437C51.629 28.3389 51.7707 27.8076 51.7607 27.3008C51.7512 26.7931 51.5893 26.3109 51.3233 25.9618C51.0577 25.6135 50.6859 25.3989 50.2713 25.3544C49.8563 25.3107 49.3998 25.4356 48.9604 25.7672C48.5211 26.0989 48.1005 26.6364 47.8262 26.9236C47.5508 27.2095 47.4198 27.2455 47.6608 26.8281C47.9018 26.4107 48.5159 25.538 49.5339 23.8696C50.5527 22.2017 51.9763 19.7359 52.7013 18.2887C53.4269 16.841 53.4551 16.4114 53.3889 15.955C53.3217 15.498 53.1601 15.0159 52.886 14.6333C52.6114 14.2532 52.2228 13.9727 51.8117 13.8747C51.4003 13.7756 50.9672 13.8598 50.5274 14.0518C50.0851 14.2434 49.6381 14.5419 48.1481 16.8861C46.6581 19.2284 44.1247 23.6165 42.6471 26.0791C41.1709 28.541 40.7504 29.0785 40.35 28.4853L40.35 28.4855Z"
                            fill="#626261" />
                    </svg>

                    <TransbaikalScrollSwiper />
                </div>

                <BaseTextBlock class="text mb-40" :title="'Зона воздействия предприятий Забайкальского дивизиона'"
                    :tooltip="true">
                    <p class="mb-10">
                        По&nbsp;данным Большой Научной экспедиции, зона воздействия объектов &laquo;Норникеля&raquo;
                        на&nbsp;экосистемы дивизиона ограничена радиусом 10&nbsp;км.
                    </p>
                    <p class="mb-10">
                        Пояс интенсивного воздействия проходит не&nbsp;далее 1&nbsp;км от&nbsp;границ комбината, где учёные
                        обнаружили изменения в&nbsp;составе некоторых видов.
                    </p>
                    <p class="mb-10">
                        Сдвиг экологического равновесия связан не&nbsp;только с&nbsp;техническим нарушением почвы
                        и&nbsp;растительности, но&nbsp;и&nbsp;с&nbsp;местной природной аномалией: земля в&nbsp;районе
                        Быстринского месторождения биологически малопродуктивна, так как содержит повышенное количество
                        полуметалла мышьяка, который является канцерогеном.
                    </p>
                    <p>
                        По&nbsp;мере удаления от&nbsp;объектов комбината признаки промышленного воздействия сходят
                        на&nbsp;нет, приближаясь к&nbsp;состоянию
                        <BaseTooltip :word="'фоновых'">
                            На&nbsp;фоновых участках исследователи не&nbsp;обнаружили следов воздействия предприятий,
                            экосистемы здесь сохранены в&nbsp;их&nbsp;исходном, первозданном виде. Состояние биоразнообразия
                            на&nbsp;фоновых территориях принимают за&nbsp;эталонное и&nbsp;используют эти данные для
                            наблюдения за&nbsp;природой в&nbsp;зонах воздействия.
                        </BaseTooltip> территорий.
                    </p>
                </BaseTextBlock>
                <div class="transbaikal-radius mb-60">
                    <picture>
                        <source media="(max-width: 768px)" type="image/webp" srcset="img/transbaikal-radius-mobile.webp">
                        <source media="(max-width: 768px)" srcset="img/transbaikal-radius-mobile.png">
                        <!-- <source type="image/webp" srcset="img/transbaikal-radius.webp"> -->
                        <img src="img/transbaikal-radius.png" alt="">
                    </picture>
                </div>
                <BaseSidebar>
                    <p>
                        Состояние природного окружения дивизиона подтверждает эффективность экологических технологий,
                        которые были использованы при строительстве Быстринского ГОК. Воздействие комбината
                        на&nbsp;экосистемы не&nbsp;выходит за&nbsp;территорию промышленных объектов.
                    </p>
                </BaseSidebar>
            </SectionWhite>
            <SectionOrange>
                <BaseTextBlock class="text mb-60" :tooltip="true">
                    <div class="section-orange__title">
                        Кто обитает на юге Таймыра
                    </div>
                    <div class="section-orange__descr">
                        <p>
                            В&nbsp;зоне, прилегающей к&nbsp;Быстринскому комбинату, участники Большой Научной экспедиции
                            обнаружили несколько
                            <BaseTooltip :word="'охраняемых'">
                                Редкие и&nbsp;находящиеся под угрозой исчезновения виды, чья численность сокращается или уже
                                сократилась до&nbsp;опасного уровня. Им&nbsp;присваивают статус охраняемых и&nbsp;заносят
                                в&nbsp;Красные книги&nbsp;&mdash; общероссийскую или региональные. Охранный статус запрещает
                                охоту на&nbsp;животных, а&nbsp;в&nbsp;местах обитания краснокнижных растений и&nbsp;грибов
                                ограничены строительство и&nbsp;другая хозяйственная деятельность.
                            </BaseTooltip> видов растений и&nbsp;птиц, а&nbsp;также отобрали
                            <BaseTooltip :word="'индикаторные'">
                                Исследователи выбирают виды-индикаторы из&nbsp;числа типичных для региона организмов,
                                наиболее чутко реагирующих на&nbsp;отклонения в&nbsp;состоянии природной среды. Если
                                в&nbsp;составе вида-индикатора происходят изменения, то&nbsp;возможно, что в&nbsp;экосистеме
                                что-то пошло не&nbsp;так.
                            </BaseTooltip>
                            виды для будущих наблюдений за&nbsp;местной экосистемой.
                        </p>
                    </div>
                </BaseTextBlock>
                <div class="flora-and-fauna">
                    <BaseTextBlock :title="'Флора'">
                        <p class="mb-10">
                            В&nbsp;районе дивизиона горные хребты чередуются с&nbsp;межгорными долинами. Такой рельеф
                            создаёт условия для высокого разнообразия местной растительности.

                        </p>
                        <p>
                            Преобладают леса с&nbsp;лиственницами, соснами, берёзами и&nbsp;осинами. Второе место
                            по&nbsp;площади занимают луга, на&nbsp;южных склонах хребтов формируются степи.
                            По&nbsp;межгорным долинам протекают реки, образуя болота, заболоченные и&nbsp;пойменные луга.
                        </p>
                        <BaseNumberBlock class="" :textTop="'245 видов'" :textBottom="'сосудистых растений'" />
                    </BaseTextBlock>
                    <BaseTextBlock :title="'Фауна'">
                        <p class="mb-10">
                            Среди животных встречаются в&nbsp;основном таёжные виды и&nbsp;некоторые представители
                            лесостепной и&nbsp;приамурской природных зон. Типичные обитатели дивизиона&nbsp;&mdash; лоси,
                            сибирские косули, горностаи и&nbsp;соболи. В&nbsp;лесах водятся лисицы и&nbsp;волки.
                        </p>
                        <p>
                            Зимой в&nbsp;регионе обитают синицы, свиристели и&nbsp;снегири, из&nbsp;тетеревиных
                            распространены рябчик и&nbsp;глухарь. Разнообразие птиц становится гораздо богаче в&nbsp;тёплое
                            время года.
                        </p>
                        <div class="wrap-numbers">
                            <BaseNumberBlock class="" :textTop="'56&nbsp;видов'" :textBottom="'птиц'" />
                            <BaseNumberBlock class="" :textTop="'21&nbsp;вид'" :textBottom="'млекопитающих'" />
                        </div>
                    </BaseTextBlock>
                </div>
                <div class="collage mb-100">
                    <BaseDropdownInfo :isModal="true" class="dubrovnik" :title="'Дубровник'" :color="'#71464E'"
                        :text="'Имеет китайское происхождение. В&nbsp;19&nbsp;веке вид проник в&nbsp;Европу и&nbsp;очень быстро освоил её: в&nbsp;1920-х годах птичек с&nbsp;яркой внешностью можно было встретить уже в&nbsp;Финляндии. За&nbsp;последнее время популяция дубровника в&nbsp;мире сократилась на&nbsp;90%, вид занесён в&nbsp;Красную книгу России'" />
                    <BaseDropdownInfo :isModal="true" class="moskovka" :title="'Московка'"
                        :text="'Во&nbsp;время когда московка возбуждена, она приподнимает перья на&nbsp;лбу в&nbsp;виде небольшого хохолка.'" />
                    <BaseDropdownInfo :isModal="true" class="siberian-deer" :title="'Сибирская косуля'"
                        :text="'Как показали исследования, численность сибирских косуль рядом с&nbsp;Быстринским ГОК и&nbsp;на&nbsp;территории за&nbsp;пределами радиуса промышленного воздействия одинаковая. Вид встречается настолько часто, что учёные РАН выбрали его индикатором состояния экосистем дивизиона'" />

                    <BaseDropdownInfo :isModal="true" class="ants" :title="'Муравьи'"
                        :text="'В&nbsp;Забайкальском дивизионе исследователи обнаружили 29&nbsp;видов муравьев, из&nbsp;них три были выбраны индикаторами состояния экосистем: Чёрный болотный муравей, Черноголовый муравей и&nbsp;Бледноногий садовый муравей'" />

                    <BaseDropdownInfo :isModal="true" class="hare" :title="'Заяц-беляк'"
                        :text="'Широко расставленные глаза помогают быстрее заметить опасность и&nbsp;убежать. Спасаясь, развивает скорость до&nbsp;60&nbsp;км/ч. Обитает также в&nbsp;Норильском дивизионе'" />

                    <BaseDropdownInfo :isModal="true" class="shrew" :title="'Бурозубка'"
                        :text="'Быстро стареет из-за необычайно интенсивного обмена веществ'" />


                    <BaseDropdownInfo :isModal="true" class="maksimovichs-vole" :title="'Полёвка Максимовича'"
                        :text="'Доминирует среди других 10&nbsp;видов грызунов на&nbsp;территории всех зон воздействия Забайкальского дивизиона. Рядом с&nbsp;Быстринским комбинатом исследователи отметили особенно высокий уровень доминирования, поэтому выбрали полёвку Максимовича видом-индикатором'" />
                    <BaseDropdownInfo :isModal="true" class="killer-whale" :title="'Касатка'" :color="'#71464E'"
                        :text="'Охота&nbsp;&mdash; одна из&nbsp;причин сокращения численности этого вида уток. В&nbsp;брачный период самцы касаток приобретают выразительный элегантный окрас, из-за чего становятся желанным трофеем'" />
                    <BaseDropdownInfo :isModal="true" class="zooplankton-2" :title="'Зоопланктон'"
                        :text="'В&nbsp;водоёмах Забайкалья учёные использовали три вида как индикаторы степени воздействия: планктонная коловратка Lophocharis oxysternon присутствовала только в&nbsp;реках фоновых территорий, личинки подёнок Ephoron nigridorsum не&nbsp;обнаруживались в&nbsp;зоне интенсивного воздействия, а&nbsp;отделить пояса интенсивного и&nbsp;умеренного воздействия помогли личинки веснянок Agnetina extremа'" />


                </div>
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
                                1 – Касатка
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                2 – Большой подорлик
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                3 – Полевой лунь
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                4 – Большой кроншнеп
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                5 – Журавль-красавка
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                6 – Дубровник
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                7 – Сибирская пестрогрудка
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                8 – Рябина сибирская
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                9 – Лилия карликовая
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                10 – Красоднев малый
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                11 – Клопогон даурский
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                12 – Венерин башмачок
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
                                    <li>Касатка</li>
                                    <li>Венерин башмачок</li>
                                    <li>Клопогон даурский</li>
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
                                    <li>Большой кроншнеп</li>
                                    <li>Журавль-красавка</li>
                                    <li>Рябина сибирская</li>
                                    <li>Клопогон даурский</li>
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
                                    <li>Полевой лунь</li>
                                    <li>Сибирская&nbsp;пестрогрудка</li>
                                    <li>Лилия карликовая</li>
                                    <li>Красоднев малый</li>
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
                                    <li>Большой подорлик</li>
                                    <li>Венерин башмачок</li>
                                    <li>Дубровник</li>
                                    <li>Красоднев малый</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div class="habitat-map__city habitat-map__city-1">
                        <div class="habitat-map__city-circale"></div>
                        <span>Быстринский ГОК</span>
                    </div>
                    <div class="habitat-map__city habitat-map__city-2">
                        <div class="habitat-map__city-circale"></div>
                        <span>село Газимурский Завод</span>
                    </div>
                    <picture>
                        <source media="(max-width: 768px)" srcset="img/habitat-map-mobile.png">
                        <source media="(max-width: 768px)" type="image/webp" srcset="img/habitat-map-mobile.webp">
                        <img src="img/habitat-map.jpg" alt="">
                    </picture>

                </div>
                <BaseTextBlock class="mb-40">
                    <p class="mb-10">
                        Некоторые редкие виды могут присутствовать в&nbsp;зонах промышленного воздействия, несмотря
                        на&nbsp;шум, загрязнение и&nbsp;изъятие почв.
                    </p>
                    <p>
                        Для них приоритетным фактором выживания оказывается доступ к&nbsp;кормовой базе, которая обильнее
                        в&nbsp;местах обитания человека.
                    </p>
                </BaseTextBlock>
                <BaseSidebar>
                    <p>
                        Усиление промышленного воздействия природными факторами требует от&nbsp;&laquo;Норникеля&raquo;
                        внимательного отношения к&nbsp;состоянию экосистем дивизиона. Компания совместно с&nbsp;учёными
                        продолжит исследования в&nbsp;районе месторождения, чтобы сделать эти места максимально безопасными
                        для их&nbsp;обитателей.
                    </p>
                </BaseSidebar>
            </SectionOrange>
        </MainSection>
    </div>
</template>

<script>
import BaseHero from '@/layout/BaseHero.vue'
import SectionOrange from '@/layout/SectionOrange.vue'
import BigMap from '@/components/BigMap.vue'
import SectionWhite from '@/layout/SectionWhite.vue'
import MainSection from '@/layout/MainSection'
import BaseTooltip from '@/components/ BaseTooltip.vue'
import BaseTextBlock from '@/components/BaseTextBlock.vue'
import BaseSidebar from '@/components/BaseSidebar'
import BaseNumberBlock from '@/components/BaseNumberBlock'
import BaseDropdownInfo from '@/components/BaseDropdownInfo.vue'
import TransbaikalScrollSwiper from '@/components/TransbaikalScrollSwiper.vue'
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
        TransbaikalScrollSwiper,
        BaseDropdownInfo,
        BaseNumberBlock
    },
    data() {
        return {
            circales: [
                {
                    color: 'green',
                    number: '1'
                },
                {
                    color: 'purple',
                    number: '2'
                }
            ],
            heroDescr: 'Кто обитает на&nbsp;территории одного из&nbsp;самых современных и&nbsp;технологичных дивизионов &laquo;Норникеля&raquo;'
        }
    },
    mounted() {
        this.$nextTick(function () {
            this.scrollAnimation();
        })
    },
    methods: {
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
        }
    }
}
</script>

<style lang="scss">
.transbaikal {
    .big-map {
        @media (max-width: 768px) {
            display: flex;

            flex-direction: column-reverse;
            height: unset;
        }

        .map-circale {
            &__1 {
                top: 19rem;
                right: 29rem;
            }

            @media (max-width: 768px) {
                top: 43rem;
                left: 73rem;
            }

            &__2 {
                top: 26.3rem;
                right: 39.3rem;

                @media (max-width: 768px) {
                    top: 58rem;
                    left: 54rem;
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

    .hero__wrap {
        width: 51rem;

        @media (max-width: 768px) {
            width: unset;
        }
    }

    .hero__descr {
        width: 43rem;

        @media (max-width: 768px) {
            width: unset;
        }
    }

    .max-width {
        .text-block__title {
            width: 20rem;

            @media (max-width: 768px) {
                width: unset;
            }
        }
    }

    .collage {
        position: relative;
        height: 388rem;
        width: 100%;
        background-image: url(../../public/img/collage-2.png);
        background-repeat: no-repeat;
        background-size: contain;
        z-index: 1;

        @supports (background-image: url(../../public/img/collage-2.webp)) {
            background-image: url(../../public/img/collage-2.webp);
        }

        @media (max-width: 768px) {
            height: 1416rem;
            background-image: url(../../public/img/collage-2-mobile.png);

            @supports (background-image: url(../../public/img/collage-2-mobile.webp)) {
                background-image: url(../../public/img/collage-2-mobile.webp);
            }
        }

        .dubrovnik {
            position: absolute;
            top: 59.5rem;
            right: 18.5rem;

            @media (max-width: 768px) {
                top: 161rem;
                right: 43rem;
            }
        }

        .moskovka {
            display: none;
            position: absolute;

            @media (max-width: 768px) {
                display: block;
                top: 192rem;
                right: 12rem;
            }
        }

        .siberian-deer {
            position: absolute;
            top: 122rem;
            left: 14rem;

            @media (max-width: 768px) {
                top: 419rem;
                left: 35rem;

                .dropdown-info__title {
                    max-width: unset;
                }
            }
        }

        .ants {
            position: absolute;
            bottom: 177rem;
            left: 44rem;

            @media (max-width: 768px) {
                bottom: 650rem;
                left: 61rem;
            }
        }

        .maksimovichs-vole {
            position: absolute;
            bottom: 81rem;
            left: 3rem;

            @media (max-width: 768px) {
                bottom: 865rem;
                left: 4rem;

                .dropdown-info__title {
                    max-width: unset;
                }
            }
        }

        .hare {
            display: none;
            position: absolute;

            @media (max-width: 768px) {
                display: block;
                bottom: 881rem;
                right: 35rem;

                .dropdown-info__title {
                    max-width: unset;
                }
            }
        }

        .shrew {
            display: none;
            position: absolute;

            @media (max-width: 768px) {
                display: block;
                bottom: 540rem;
                right: 10rem;
            }
        }

        .killer-whale {
            position: absolute;
            bottom: 35.5rem;
            right: 22rem;

            @media (max-width: 768px) {
                bottom: 86rem;
                left: 61rem;
            }
        }

        .zooplankton-2 {
            position: absolute;
            bottom: 22.5rem;
            right: 48rem;

            @media (max-width: 768px) {
                bottom: 65.5rem;
                left: 24rem;
            }
        }
    }

    .habitat-map {
        position: relative;
        margin-bottom: 4.5rem;
        // height: 40rem;

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

        &__city {
            position: absolute;
            width: 5rem;
            display: flex;
            flex-direction: column;
            font-size: 0.9375rem;
            font-weight: 400;
            line-height: 130%;
            gap: 0.37rem;

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
                top: 32.5rem;
                left: 50.5rem;

                @media (max-width: 768px) {
                    top: unset;
                    bottom: 36rem;
                    left: 56rem;
                }
            }

            &-2 {
                display: none;

                @media (max-width: 768px) {
                    display: flex;
                    bottom: 36rem;
                    left: 23rem;
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
}
</style>