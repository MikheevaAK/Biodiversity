<template>
    <div class="expedition">
        <BaseHero :title="'Большая Норильская экспедиция'" :descr="heroDescr" :img="'img/hero2.jpg'"
            :imgMobile="'img/hero2-mobile.jpg'" />
        <MainSection>
            <section>
                <BaseTextBlock class="mb-7-5">
                    <p>
                        Реакция &laquo;Норникеля&raquo; на&nbsp;инцидент была молниеносной. Первым делом нужно было
                        минимизировать последствия аварии и&nbsp;максимально быстро собрать топливо. Вторая
                        задача&nbsp;&mdash; пригласить учёных, чтобы те&nbsp;оценили состояние экосистем после инцидента
                        и&nbsp;помогли разработать план по&nbsp;их&nbsp;восстановлению.
                    </p>
                </BaseTextBlock>
            </section>
            <SectionWhite>
                <div class="step-start mb-100">
                    <img class="step-start__img" src="img/step-1.png">
                    <div class="step-start__title">Первый этап</div>
                    <div class="step-start__period">июль – сентябрь 2020 года</div>
                    <div class="step-start__descr">На приглашение «Норникеля» откликнулись сразу 14 отраслевых
                        институтов
                        Сибирского отделения Российской академии наук <br />(СО РАН). Летом 2020 года на Таймыр приехали
                        более 30
                        учёных&nbsp;— участников Большой Норильской экспедиции. Перед ними стояли сразу несколько масштабных
                        задач:
                    </div>
                    <svg class="step-start__lines" width="636" height="74" viewBox="0 0 636 74" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1319_9771)">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M312.704 69.7863C313.079 70.8229 312.553 71.9625 311.53 72.3315C310.508 72.7006 309.375 72.1594 309.001 71.1227C308.627 70.0861 309.153 68.9465 310.175 68.5775C310.276 68.5412 310.378 68.5137 310.479 68.4947L310.37 -0.00528968L311.11 -0.000243772L311.219 68.4997C311.878 68.632 312.457 69.1008 312.704 69.7863Z"
                                fill="#4F4F4F" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M13.2673 70.3718C13.7007 71.3955 13.1949 72.4892 12.1375 72.8145C11.0801 73.1398 9.87165 72.5736 9.43826 71.5498C9.00487 70.5261 9.5107 69.4324 10.5681 69.1071C10.7156 69.0618 10.866 69.0337 11.0169 69.0219C11.9683 52.599 25.8162 40.1902 43.6006 40.2258L266.825 40.6718C291.282 40.7207 310.117 22.9991 310.044 0.00796085L310.82 0.0650491C310.894 23.4363 291.748 41.4509 266.887 41.4012L43.662 40.9552C26.2744 40.9204 12.734 53.047 11.7929 69.1C12.4348 69.2805 12.9993 69.7386 13.2673 70.3718Z"
                                fill="#4F4F4F" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M607.911 70.3718C607.478 71.3955 607.984 72.4892 609.041 72.8145C610.099 73.1398 611.307 72.5736 611.74 71.5498C612.174 70.5261 611.668 69.4324 610.611 69.1071C610.463 69.0618 610.313 69.0337 610.162 69.0219C609.21 52.599 595.363 40.1902 577.578 40.2258L354.353 40.6718C329.897 40.7207 311.062 22.9991 311.134 0.00796085L310.359 0.0650491C310.285 23.4363 329.431 41.4509 354.292 41.4012L577.517 40.9552C594.904 40.9204 608.445 53.047 609.386 69.1C608.744 69.2805 608.179 69.7386 607.911 70.3718Z"
                                fill="#4F4F4F" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1319_9771">
                                <rect width="635" height="74" fill="white" transform="translate(0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <div class="step-start__items">
                        <div class="step-start__item">
                            <div class="step-start__item-number">1</div>
                            <div class="step-start__item-descr">Отследить состояние экосистем после аварии</div>
                        </div>
                        <div class="step-start__item">
                            <div class="step-start__item-number">2</div>
                            <div class="step-start__item-descr">
                                Оперативно обнаружить возможные скрытые загрязнения после очистки территорий
                                от&nbsp;нефтепродуктов
                            </div>
                        </div>
                        <div class="step-start__item">
                            <div class="step-start__item-number">3</div>
                            <div class="step-start__item-descr">
                                Оценить реальный ущерб, нанесённый экосистемам, и&nbsp;определить меры
                                по&nbsp;их&nbsp;восстановлению
                            </div>
                        </div>
                    </div>
                </div>

                <BigMap :circales="circales" :img="'img/expedition-big-map'" :imgMobile="'img/expedition-big-map-mobile'">
                    <BaseTextBlock class="text" :title="'Карта исследований'">
                        <p class="text-block__descr mb-40">
                            Исследования проводились по нескольким направлениям: поверхностные воды и&nbsp;донные
                            отложения,
                            почва и&nbsp;многолетнемёрзлый грунт, флора и&nbsp;фауна Арктики. Учёные обследовали десятки
                            природных
                            точек: окрестности Норильска, поймы шести таймырских рек, а&nbsp;также побережье Карского
                            моря.
                        </p>
                        <div class="circales">
                            <div class="circale-block">

                                <svg class="circale-block__img" xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                    viewBox="0 0 14 14" fill="none">
                                    <circle cx="7" cy="7" r="7" fill="#009CA6" />
                                </svg>

                                <div class="circale-block__text">Пешком</div>
                            </div>
                            <div class="circale-block">

                                <svg class="circale-block__img" xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                    viewBox="0 0 14 14" fill="none">
                                    <circle cx="7" cy="7" r="7" fill="#654EA3" />
                                </svg>

                                <div class="circale-block__text">На лодках</div>
                            </div>
                            <div class="circale-block">

                                <svg class="circale-block__img" xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                    viewBox="0 0 14 14" fill="none">
                                    <circle cx="7" cy="7" r="7" fill="#0077C8" />
                                </svg>

                                <div class="circale-block__text">По воздуху</div>
                            </div>
                        </div>
                    </BaseTextBlock>
                </BigMap>

                <div class="team">
                    <BaseTextBlock class="text" :title="'Команда'">
                        <p>
                            Большая Норильская экспедиция объединила представителей разных наук. В состав команды вошли:
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
                    <ScrollSwiper />

                    <BaseTextBlock class="mb-40">
                        <p class="text-block__descr">
                            Полевые работы на&nbsp;первом этапе Большой Норильской экспедиции продлились пять недель.
                            Иной
                            раз,
                            чтобы взять пробу, учёным приходилось бурить скважины глубиной до&nbsp;15&nbsp;метров или
                            опускаться на
                            дно озера. Но&nbsp;завершить столь масштабную работу за&nbsp;один&nbsp;&mdash; очень
                            короткий
                            на&nbsp;Севере&nbsp;&mdash; сезон
                            невозможно. Вот почему &laquo;Норникель&raquo; и&nbsp;СО&nbsp;РАН договорились продлить
                            Большую
                            Норильскую экспедицию
                            ещё на&nbsp;два года.
                        </p>
                    </BaseTextBlock>

                    <div class="number-blocks text-block__wrap">
                        <BaseNumberBlock :textTop="'6 рек'" :textBottom="'посетили в ходе экспедиции'" />
                        <BaseNumberBlock :textTop="'> 1 000 км'" :textBottom="'преодолели по земле, воде и воздуху'" />
                        <BaseNumberBlock :textTop="'2&nbsp;000&nbsp;проб'"
                            :textBottom="'собрали в процессе исследований'" />
                    </div>

                    <BaseTextBlock class="mb-40">
                        <p>
                            Авария на&nbsp;ТЭЦ-3 действительно негативно сказалась на&nbsp;флоре и&nbsp;фауне тех
                            территорий, которые были покрыты нефтепродуктами. Особенно пострадали наземные растения:
                            растущие по&nbsp;берегам рек ивы и&nbsp;заросли осоки,&nbsp;&mdash; на&nbsp;них учёные
                            обнаружили химические ожоги, причиной которых стало попадание на&nbsp;организмы дизельного
                            топлива. Часть видов животных и&nbsp;растений погибла. Зато водные растения и&nbsp;сообщества,
                            которые находились под водой, пострадали гораздо меньше или не&nbsp;пострадали совсем.
                        </p>
                    </BaseTextBlock>
                    <BaseSidebar class="padding-hide">
                        <p>
                            Экосистемы вблизи Норильска, отмечают исследователи, пока ещё продолжают восстанавливаться
                            от&nbsp;разлива топлива. Но&nbsp;чем дальше от&nbsp;места аварии&nbsp;&mdash; тем меньше
                            признаков и&nbsp;следов произошедшей аварии. Участок от&nbsp;устья реки Тарея
                            до&nbsp;Карского
                            моря и&nbsp;вовсе не&nbsp;пострадал.
                        </p>
                    </BaseSidebar>
                </div>
            </SectionWhite>

            <SectionOrange class="step-two">
                <div class="step-start mb-100">
                    <img class="step-start__img" src="img/step-2.png">
                    <div class="step-start__title">Второй этап</div>
                    <div class="step-start__period">июль – сентябрь 2021 года</div>
                    <div class="step-start__descr">
                        Второй этап Большой Норильской экспедиции стартовал летом 2021 года. В состав двух отрядов:
                        «Наземные экосистемы» и «Водные экосистемы» — вошли 29 учёных, представлявших 11&nbsp;научных
                        организаций
                        СО РАН. Специалисты должны были:
                    </div>
                    <svg class="step-start__lines" width="458" height="65" viewBox="0 0 458 65" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.133333 62.4631C0.133333 63.494 0.969069 64.3298 2 64.3298C3.03093 64.3298 3.86667 63.494 3.86667 62.4631C3.86667 61.4322 3.03093 60.5964 2 60.5964C0.969069 60.5964 0.133333 61.4322 0.133333 62.4631ZM197.194 31.4564H32.6567V32.1564H197.194V31.4564ZM32.6567 31.4564C15.5322 31.4564 1.65 45.3385 1.65 62.4631H2.35C2.35 45.7251 15.9188 32.1564 32.6567 32.1564V31.4564ZM228.65 0C228.65 17.3729 214.567 31.4564 197.194 31.4564V32.1564C214.953 32.1564 229.35 17.7595 229.35 0H228.65Z"
                            fill="black" />
                        <path
                            d="M457.867 62.4631C457.867 63.4941 457.031 64.3298 456 64.3298C454.969 64.3298 454.133 63.4941 454.133 62.4631C454.133 61.4322 454.969 60.5965 456 60.5965C457.031 60.5965 457.867 61.4322 457.867 62.4631ZM260.806 31.4564H425.343V32.1564H260.806V31.4564ZM425.343 31.4564C442.468 31.4564 456.35 45.3386 456.35 62.4631H455.65C455.65 45.7252 442.081 32.1564 425.343 32.1564V31.4564ZM229.35 3.05176e-05C229.35 17.3729 243.433 31.4564 260.806 31.4564V32.1564C243.047 32.1564 228.65 17.7595 228.65 3.05176e-05H229.35Z"
                            fill="black" />
                    </svg>
                    <div class="step-start__items">
                        <div class="step-start__item">
                            <div class="step-start__item-number">1</div>
                            <div class="step-start__item-descr">
                                Оценить динамику загрязнений в окрестностях пострадавшей ТЭЦ
                            </div>
                        </div>
                        <div class="step-start__item">
                            <div class="step-start__item-number">2</div>
                            <div class="step-start__item-descr">
                                Оценить эффективность восстановления экосистем
                            </div>
                        </div>
                    </div>
                </div>
                <BaseTextBlock class="" :title="'Маршрут'">
                    <p class="text-block__descr">
                        Участники второго этапа экспедиции прошли тем же маршрутом, что и их предшественники: от реки
                        Далдыкан до слияния рек Пясина и Дудыпта.
                    </p>
                </BaseTextBlock>
                <div class="step-two__map">
                    <ul class="step-two__map-list">
                        <li class="step-two__map-item">
                            <span class="step-two__item-number">1</span>
                            <span class="step-two__item-text">Русло р. Далдыкан</span>
                        </li>
                        <li class="step-two__map-item">
                            <span class="step-two__item-number">2</span>
                            <span class="step-two__item-text">Слияние рек Далдыкан и Амбарная</span>
                        </li>
                        <li class="step-two__map-item">
                            <span class="step-two__item-number">3</span>
                            <span class="step-two__item-text">Слияние р. Амбарная и оз. Пясино</span>
                        </li>
                        <li class="step-two__map-item">
                            <span class="step-two__item-number">4</span>
                            <span class="step-two__item-text">Начало р. Пясина</span>
                        </li>
                        <li class="step-two__map-item">
                            <span class="step-two__item-number">5</span>
                            <span class="step-two__item-text">Слияние рек Пясина и Дудыпта</span>
                        </li>
                    </ul>
                    <picture>
                        <source media="(max-width: 768px)" type="image/webp" srcset="img/map-rivers-mobile.webp">
                        <source media="(max-width: 768px)" srcset="img/map-rivers-mobile.png">
                        <source type="image/webp" srcset="img/map-rivers.webp">
                        <img class="step-two__img" src="img/map-rivers.png" alt="">
                    </picture>
                    <BaseNumberBlock class="step-two__number" :textTop="'1 400 км'"
                        :textBottom="'общая протяжённость маршрутов второго этапа экспедиции'" />
                </div>
                <BaseTextBlock class="" :title="'Особенности второго этапа'">
                    <p class="text-block__descr">
                        Главным новшеством полевой программы 2021 года стали гидрологические измерения. Специалисты
                        определили ширину, глубину и&nbsp;скорость течения ручья Безымянный и&nbsp;реки Далдыкан, куда
                        в&nbsp;мае
                        2020 года попали нефтепродукты из&nbsp;аварийного резервуара. Полученные данные позволили учёным
                        рассчитать количество загрязняющих веществ в&nbsp;исследованных водоёмах.
                    </p>
                </BaseTextBlock>
                <picture>
                    <source type="image/webp" srcset="img/measurements-mobile.webp">
                    <img class="step-two__img-measurements" src="img/measurements.png" alt="">
                </picture>

                <BaseSidebar class="padding-hide">
                    <p>
                        Масштабы и&nbsp;последствия экологической катастрофы могли быть значительно серьёзнее.
                        Но&nbsp;оперативная
                        реакция на&nbsp;аварию и&nbsp;локализация разлива нефтепродуктов позволили избежать большой
                        беды, а&nbsp;также
                        предотвратить потенциальные конфликты с&nbsp;местными жителями.
                    </p>
                </BaseSidebar>
            </SectionOrange>

            <section class="step-three">
                <div class="step-start mb-100">
                    <img class="step-start__img" src="img/step-3.png">
                    <div class="step-start__title">Третий этап</div>
                    <div class="step-start__period">июль – сентябрь 2022 года</div>
                    <div class="step-start__descr">
                        Участниками третьего сезона Большой Норильской экспедиции стали учёные из 14 научных организаций
                        Новосибирска, Тюмени, Томска, Красноярска и Якутска. <br /> Они поставили перед собой задачи:
                    </div>
                    <svg class="step-start__lines" width="458" height="65" viewBox="0 0 458 65" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.133333 62.4631C0.133333 63.494 0.969069 64.3298 2 64.3298C3.03093 64.3298 3.86667 63.494 3.86667 62.4631C3.86667 61.4322 3.03093 60.5964 2 60.5964C0.969069 60.5964 0.133333 61.4322 0.133333 62.4631ZM197.194 31.4564H32.6567V32.1564H197.194V31.4564ZM32.6567 31.4564C15.5322 31.4564 1.65 45.3385 1.65 62.4631H2.35C2.35 45.7251 15.9188 32.1564 32.6567 32.1564V31.4564ZM228.65 0C228.65 17.3729 214.567 31.4564 197.194 31.4564V32.1564C214.953 32.1564 229.35 17.7595 229.35 0H228.65Z"
                            fill="black" />
                        <path
                            d="M457.867 62.4631C457.867 63.4941 457.031 64.3298 456 64.3298C454.969 64.3298 454.133 63.4941 454.133 62.4631C454.133 61.4322 454.969 60.5965 456 60.5965C457.031 60.5965 457.867 61.4322 457.867 62.4631ZM260.806 31.4564H425.343V32.1564H260.806V31.4564ZM425.343 31.4564C442.468 31.4564 456.35 45.3386 456.35 62.4631H455.65C455.65 45.7252 442.081 32.1564 425.343 32.1564V31.4564ZM229.35 3.05176e-05C229.35 17.3729 243.433 31.4564 260.806 31.4564V32.1564C243.047 32.1564 228.65 17.7595 228.65 3.05176e-05H229.35Z"
                            fill="black" />
                    </svg>
                    <div class="step-start__items">
                        <div class="step-start__item">
                            <div class="step-start__item-number">1</div>
                            <div class="step-start__item-descr">
                                Оценить эффективность рекультивационных мероприятий,
                                проведённых «Норникелем»
                            </div>
                        </div>
                        <div class="step-start__item">
                            <div class="step-start__item-number">2</div>
                            <div class="step-start__item-descr">
                                Определить количество оставшихся после аварии нефтепродуктов
                            </div>
                        </div>
                    </div>
                </div>

                <BaseTextBlock class="mb-40" :title="'Восстановление экосистем'">
                    <div>
                        <p class="mb-10">
                            Рекультивацию земель специалисты &laquo;Норникеля&raquo; начали проводить в&nbsp;первые&nbsp;же
                            недели после аварии одновременно с&nbsp;очисткой водоёмов. На&nbsp;первом этапе они собирали
                            остатки нефтепродуктов, вытекших из&nbsp;повреждённого хранилища, и&nbsp;вывозили
                            загрязнённую
                            почву.
                        </p>
                        <p class="mb-10">
                            В&nbsp;2021-2022 годах компания начала восстанавливать хозяйственную
                            и&nbsp;экологическую ценность
                            земель и
                            водных объектов, пострадавших от&nbsp;разлива топлива.
                        </p>
                        <p class="mb-10">
                            Кроме того, в&nbsp;&laquo;Норникеле&raquo; разработали программы, которые позволят изучить
                            состояние рек Далдыкан
                            и&nbsp;Амбарная и&nbsp;поддерживать в&nbsp;них популяцию редких видов рыб.
                            Для&nbsp;этого&nbsp;компания
                            продолжает
                            рыбоводные
                            исследования, позволяющие понять, какие участки наиболее благоприятны для нереста и&nbsp;нагула
                            рыб,
                            какие
                            в&nbsp;них условия. Всё это поможет понять, как повысить выживаемость мальков ценных пород
                            рыб
                            после
                            их
                            искусственного выращивания и&nbsp;выпуска в&nbsp;водные объекты.
                        </p>
                        <p>
                            Также учёные исследуют, как микроорганизмы, проживающие на&nbsp;дне арктических озёр,
                            разлагают
                            тяжёлые
                            фракции нефтепродуктов. Результаты этой работы могут быть интересны мировой общественности,
                            ведь
                            никто не&nbsp;станет специально загрязнять водные экосистемы ради таких исследований,
                            да&nbsp;и&nbsp;редкие
                            компании станут афишировать загрязнение окружающей среды, произошедшее по&nbsp;их&nbsp;вине.
                            Возможность
                            проследить подобные процессы в&nbsp;естественной среде&nbsp;&mdash; это большая редкость.
                        </p>
                    </div>
                </BaseTextBlock>
                <BaseSidebar class="padding-hide">
                    <p>
                        Арктические экосистемы показали, что могут хорошо восстанавливаться,
                        а&nbsp;микроорганизмы&nbsp;&mdash;
                        эффективно очищать воду от&nbsp;органического загрязнения. Чтобы это происходило, необходимо
                        снизить техногенную нагрузку на&nbsp;близлежащие к&nbsp;производству территории. Для этого нужно
                        модернизировать водоочистные установки и&nbsp;установки очистки производственных выбросов,
                        реализовать серный проект. Иными словами, в&nbsp;полном объёме реализовать Экологическую
                        стратегию &laquo;Норникеля&raquo;.
                    </p>
                </BaseSidebar>
                <div class="scena__wrap">
                    <picture>
                        <source media="(max-width: 768px)" type="image/webp" srcset="img/step-3-scena-mobile.webp">
                        <source media="(max-width: 768px)" srcset="img/step-3-scena-mobile.png">
                        <source type="image/webp" srcset="img/step-3-scena.webp">
                        <img class="scena" src="img/step-3-scena.png" alt="">
                    </picture>

                </div>
                <BaseSidebar>
                    <p>
                        Большая Норильская экспедиция продлилась три года, но&nbsp;научная работа, начатая СО&nbsp;РАН
                        и&nbsp;&laquo;Норникелем&raquo;, на&nbsp;этом не&nbsp;закончилась&nbsp;&mdash; в&nbsp;2022 году
                        сразу в&nbsp;трёх регионах страны стартовала Большая научная экспедиция.
                    </p>
                </BaseSidebar>
            </section>
        </MainSection>
    </div>
</template>

<script>
import BaseHero from '@/layout/BaseHero.vue';
import MainSection from '@/layout/MainSection.vue';
import BaseTextBlock from '@/components/BaseTextBlock.vue'
import BaseNumberBlock from "@/components/BaseNumberBlock.vue";
import BaseSidebar from '@/components/BaseSidebar.vue'
import ScrollSwiper from '@/components/ExpeditionScrollSwiper.vue'
import SectionOrange from '@/layout/SectionOrange.vue'
import SectionWhite from '@/layout/SectionWhite.vue'
import BigMap from '@/components/BigMap.vue'

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
    components: {
        BaseHero,
        SectionOrange,
        SectionWhite,
        BaseNumberBlock,
        MainSection,
        BaseTextBlock,
        BaseSidebar,
        BigMap,
        ScrollSwiper
    },
    mounted() {
        this.$nextTick(function () {
            this.sidebarAnimation();
            this.textAnimation();
        })
    },
    data() {
        return {
            heroDescr: 'Май 2020&nbsp;года, Норильск. Из&#8209;за&nbsp;таяния вечной мерзлоты одна из&nbsp;цистерн ТЭЦ-3 с&nbsp;дизельным топливом треснула у&nbsp;основания, и&nbsp;тысячи кубометров нефтепродуктов просочились за&nbsp;пределы бетонного обвалования, а&nbsp;затем попали на&nbsp;территории за&nbsp;пределами промышленной площадки предприятия и&nbsp;в&nbsp;реки Далдыкан&nbsp;и&nbsp;Амбарная.',
            circales: [
                {
                    color: 'blue',
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
                    color: 'green',
                    number: '4'
                },
                {
                    color: 'green',
                    number: '5'
                },
                {
                    color: 'green',
                    number: '6'
                },
                {
                    color: 'purple',
                    number: '7'
                }
            ],
        }
    },
    methods: {
        textAnimation() {
            const collageItems = Array.from(document.querySelectorAll(".text-block__wrap"))
            collageItems.forEach((elem) => {
                gsap.fromTo(elem,
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
                    })
            })
        },
        sidebarAnimation() {
            const sidebarItems = Array.from(document.querySelectorAll(".sidebar"))
            sidebarItems.forEach((elem) => {
                gsap.fromTo(elem,
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
                    })
            })
        }
    }
}
</script>

<style lang="scss">
.expedition .big-map {
    img {
        width: 97rem;
        margin-top: 1.75rem;
        margin-left: 2.75rem;

        @media (max-width: 768px) {
            width: 100%;
            margin-top: -3.25rem;
            margin-left: 0;
        }
    }

    .text {
        top: -1.44rem;
    }

    .circales {
        display: flex;
        gap: 1.5rem;

        @media (max-width: 768px) {
            gap: 3.2rem;
        }
    }

    .circale-block {
        display: flex;
        gap: 0.5rem;
        align-items: center;

        @media (max-width: 768px) {
            gap: 2.134rem;
        }

        &__img {
            width: 0.9724rem;
            height: 0.9724rem;

            @media (max-width: 768px) {
                width: 1.87rem;
                height: 1.87rem;
            }
        }

        &__text {
            font-size: 1.04167rem;
            font-weight: 300;
            line-height: 130%;

            @media (max-width: 768px) {
                font-size: 3.46667rem;
            }
        }
    }

    .map-circale {
        &__1 {
            top: 21.2rem;
            left: 62.4rem;

            @media (max-width: 768px) {
                top: 102.5rem;
                left: 68rem;
            }
        }

        &__2 {
            top: 24.8rem;
            left: 68.4rem;

            @media (max-width: 768px) {
                top: 108.4rem;
                left: 77.9rem;
            }
        }

        &__3 {
            top: 36.6rem;
            left: 67.2rem;


            @media (max-width: 768px) {
                top: 128.2rem;
                left: 75.8rem;
            }
        }

        &__4 {
            top: 50.5rem;
            left: 34.4rem;

            @media (max-width: 768px) {
                top: 151.1rem;
                left: 21.9rem;
            }
        }

        &__5 {
            top: 47.7rem;
            left: 31.3rem;

            @media (max-width: 768px) {
                top: 146.4rem;
                left: 16.6rem;
            }
        }

        &__6 {
            top: 42.4rem;
            left: 29.4rem;

            @media (max-width: 768px) {
                top: 137.5rem;
                left: 13.5rem;
            }
        }

        &__7 {
            top: 37.2rem;
            left: 34.15rem;

            @media (max-width: 768px) {
                top: 129.1rem;
                left: 21.1rem;
            }
        }
    }
}

.expedition {
    .hero {
        @media (max-width: 768px) {
            min-height: unset;
            height: 216rem;
        }
    }

    .hero__descr {
        width: 50rem;

        @media (max-width: 768px) {
            width: unset;
        }
    }

    .padding-hide .sidebar__text {
        padding: 0;
    }
}

.step-start {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__img {
        margin-bottom: 0.63rem;
        width: 22.5625rem;
        height: 8rem;

        @media (max-width: 768px) {
            margin-bottom: 4.2666rem;
            width: 76rem;
            height: 27.2rem;
        }
    }

    &__title {
        margin-bottom: 0.94rem;
        font-size: 2.125rem;
        font-weight: 600;
        line-height: 130%;
        color: var(--copper, #D38235);

        @media (max-width: 768px) {
            margin-bottom: 5.3332rem;
            font-size: 7.46666rem;
        }
    }

    &__period {
        margin-bottom: 1.75rem;
        color: var(--copper, #D38235);
        font-size: 1.25rem;
        font-weight: 300;
        line-height: 130%;

        @media (max-width: 768px) {
            margin-bottom: 5.8666rem;
            font-size: 4.53334rem;
        }
    }

    &__descr {
        margin-bottom: 1.25rem;
        width: 38.8125rem;
        text-align: center;
        font-size: 1.25rem;
        font-weight: 300;
        line-height: 130%;

        @media (max-width: 768px) {
            margin-bottom: 5.3332rem;
            font-size: 4.53334rem;
            width: 80rem;
        }
    }

    &__lines {
        width: 39.68rem;
        height: 4.6rem;
        margin-bottom: 0.75rem;

        @media (max-width: 768px) {
            display: none;
        }
    }

    &__items {
        display: flex;
        width: 53.3125rem;

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
            padding: 0 11.5rem;
            gap: 5.3332rem;
            width: 100%;
        }
    }

    &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 1.53rem;
        gap: 0.88rem;
        width: 18.0625rem;

        @media (max-width: 768px) {
            margin-right: 0;
            width: 100%;
            gap: 3.734rem;
        }

        &:first-child {
            width: 14.4375rem;
            margin-right: 2.63rem;

            @media (max-width: 768px) {
                margin-right: 0;
                width: 100%;
            }
        }

        &:last-child {
            margin-right: 0;
            width: 16.3125rem;

            @media (max-width: 768px) {
                margin-right: 0;
                width: 100%;
            }
        }

        &-number {
            position: relative;
            width: 2.2223rem;
            height: 2.2223rem;
            padding: 0.45rem 0.75rem;
            border-radius: 100%;
            font-family: 'MuseoSansCyrl';
            background-color: #D38235;
            color: #fff;
            font-size: 1.25rem;
            font-weight: 500;
            line-height: 130%;

            &::after {
                content: '';
                position: absolute;
                top: -0.1rem;
                left: -0.1rem;
                right: -0.1rem;
                bottom: -0.1rem;
                background-image: url(../../public/img/svg/circle-bg.svg);
                background-repeat: no-repeat;
                background-position: center;
                background-size: 100%;

                @media (max-width: 768px) {
                    top: -0.5rem;
                    left: -0.5rem;
                    right: -0.5rem;
                    bottom: -0.5rem;
                }
            }

            @media (max-width: 768px) {
                width: 9.7937rem;
                height: 9.7937rem;
                font-size: 4.8rem;
                padding: 2rem 3.7rem;
            }
        }

        &-descr {
            text-align: center;
            font-size: 1.25rem;
            line-height: 130%;

            @media (max-width: 768px) {
                font-size: 4.53334rem;
                line-height: 130%;
            }
        }
    }
}

.step-two {
    .step-start__img {
        width: 22.5625rem;
        height: 6.8125rem;

        @media (max-width: 768px) {
            width: 73.07rem;
            height: 22.134rem;
        }
    }

    &__map {
        position: relative;
        width: 34.3125rem;
        margin: 0 auto;

        @media (max-width: 768px) {
            width: 100%;
        }

        &-list {
            position: absolute;
            top: 5.4rem;
            left: -14.75rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            @media (max-width: 768px) {
                position: static;
                margin-top: 10.6667rem;
                padding: 0 8rem;
                gap: 1.6rem;
            }
        }

        &-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            height: 1.25rem;

            @media (max-width: 768px) {
                gap: 2.134rem;
                height: 5.334rem;
            }
        }
    }

    &__item {
        &-number {
            width: 1.25rem;
            height: 1.25rem;
            padding: 0.18rem 0.43rem 0.38rem 0.42rem;
            font-size: 0.875rem;
            font-family: 'MuseoSansCyrl';
            font-weight: 500;
            line-height: 130%;
            color: var(--copper, #D38235);

            @media (max-width: 768px) {
                width: 6.185rem;
                height: 6.185rem;
                padding: 1.1rem 2rem 1rem 2rem;
                font-size: 3.73334rem;
            }
        }

        &-text {
            font-size: 0.9375rem;
            font-weight: 300;
            line-height: 130%;

            @media (max-width: 768px) {
                font-size: 3.73334rem;
            }
        }
    }

    &__img {
        margin: 2.06rem 0 4.15rem 0;
        width: 28.43rem;
        height: 35.56rem;
        mix-blend-mode: darken;

        @media (max-width: 768px) {
            margin: 0 0 14.4rem 0;
            width: 86.4rem;
            height: 108.27rem;
        }

        &-measurements {
            display: block;
            margin: 1.35rem auto 2.5rem auto;
            width: 51.125rem;
            height: 23.0625rem;

            @media (max-width: 768px) {
                margin: 2.4rem auto 10.5rem auto;
                width: 100%;
                height: 53.0625rem;
            }
        }
    }

    &__number {
        background-color: #F7F6F2;
        border-left: 0;
        bottom: 8rem;
        left: 21rem;

        @media (max-width: 768px) {
            position: absolute;
            width: 52rem;
            bottom: 42rem;
            left: 39rem;
        }
    }

    .step-start__lines {
        width: 28.4rem;
        height: 3.9rem;
    }

    .step-start__items {
        width: 44.375rem;
        gap: 11.6rem;

        @media (max-width: 768px) {
            gap: 5.3332rem;
            width: 100%;
        }
    }

    .step-start__item {
        &:first-child {
            width: 16.625rem;
            margin-right: 0;

            @media (max-width: 768px) {
                width: 100%;
            }
        }

        &:last-child {
            width: 15.3125rem;

            @media (max-width: 768px) {
                width: 100%;
            }
        }
    }
}

.step-three {
    .scena {
        width: 100%;
        height: 46.1875rem;

        @media (max-width: 768px) {
            height: 279.2rem;
        }

        &__wrap {
            margin: 3.75rem 0 2.5rem 0;

            @media (max-width: 768px) {
                margin: 13.3334rem 0 10.6666rem 0;
            }
        }
    }

    .step-start__img {
        width: 20.125rem;
        height: 7.6875rem;

        @media (max-width: 768px) {
            width: 60.27rem;
            height: 25.334rem;
        }
    }

    .step-start__items {
        width: 49.5rem;
        gap: 10.62rem;

        @media (max-width: 768px) {
            width: 100%;
        }
    }

    .step-start__item {
        &:first-child {
            width: 20.5625rem;
            margin-right: 0;

            @media (max-width: 768px) {
                width: 100%;
            }
        }

        &:last-child {
            width: 16.3125rem;

            @media (max-width: 768px) {
                width: 100%;
            }
        }
    }

    .step-start__lines {
        width: 28.4rem;
    }
}
</style>