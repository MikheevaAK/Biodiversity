<template>
    <div>
        <BaseHero :title="'Большая Норильская экспедиция'" :descr="heroDescr" :img="'img/hero2.png'"
            :imgMobile="'img/hero2-mobile.png'" />
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
            <section class="section-white">
                <div class="step-start">
                    <img class="step-start__img" src="img/step-1.png">
                    <div class="step-start__title">Первый этап</div>
                    <div class="step-start__period">июль – сентябрь 2020 года</div>
                    <div class="step-start__descr">На приглашение «Норникеля» откликнулись сразу 14 отраслевых институтов
                        Сибирского отделения Российской академии наук (СО РАН). Летом 2020 года на Таймыр приехали более 30
                        учёных — участников Большой Норильской экспедиции. Перед ними стояли сразу несколько масштабных
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
                            <div class="step-start__item-descr">Оперативное обнаружить возможные скрытые загрязнения после
                                очистки территорий от нефтепродуктов</div>
                        </div>
                        <div class="step-start__item">
                            <div class="step-start__item-number">3</div>
                            <div class="step-start__item-descr">Оценить реальный ущерб, нанесённый экосистемам аварией на
                                ТЭЦ-3</div>
                        </div>
                    </div>
                </div>

                <BigMap />

                <div class="team">
                    <BaseTextBlock class="text" :title="'Команда'">
                        <p>
                            Большая Норильская экспедиция объединила представителей разных наук. В состав команды вошли:
                        </p>
                    </BaseTextBlock>
                    <div class="team-container">
                        <div class="team-item hydrochemist">
                            <img class="team-item__img" src="img/hydrochemist.png" alt="">
                            <div class="team-item__text-block">
                                <div class="team-item__title">Гидрохимики</div>

                                <ul class="team-item__list">
                                    <li class="team-item__list-item">Определяли уровень загрязнения ручьев, рек и озер
                                        нефтепродуктами;</li>
                                    <li class="team-item__list-item">Вычисляли, сколько в воде содержится тяжелых металлов;
                                    </li>
                                    <li class="team-item__list-item">Исследовали воду на мутность, количество взвесей и
                                        кислорода.</li>
                                </ul>

                                <div class="team-item__color-bg">
                                    Производить замеры гидрохимикам помогает специальный прибор&nbsp;&mdash; зонд.
                                    Он&nbsp;буквально в&nbsp;считанные секунды может определить, сколько в&nbsp;воде
                                    присутствует сине-зеленых водорослей, рассчитать концентрацию кислорода
                                    и&nbsp;кислотность среды.
                                </div>
                            </div>
                        </div>
                        <div class="team-item geocryologists">
                            <img class="team-item__img" src="img/geocryologists.png" alt="">
                            <div class="team-item__text-block">
                                <div class="team-item__color-bg">
                                    Ученые не любят и не используют словосочетание «вечная мерзлота», ведь ничего вечного не
                                    бывает. Правильнее говорить «многолетнемёрзлые породы».
                                </div>

                                <div class="team-item__title">Геокриологи</div>

                                <ul class="team-item__list">
                                    <li class="team-item__list-item">Изучали строение и состояние зоны с многолетней
                                        мерзлотой;</li>
                                    <li class="team-item__list-item">Оценивали, на какую глубину ежегодно оттаивает и
                                        промерзает грунт;
                                    </li>
                                    <li class="team-item__list-item">
                                        Строили прогнозы, как в ближайшие годы изменятся геокриологические условия на
                                        Таймыре.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="team-item scientists">
                            <img class="team-item__img" src="img/soil-scientists.png" alt="">
                            <div class="team-item__text-block">
                                <div class="team-item__title">Почвоведы</div>

                                <ul class="team-item__list">
                                    <li class="team-item__list-item">
                                        Оценивали геохимическое состояние береговых почв и донных отложений;
                                    </li>
                                    <li class="team-item__list-item">
                                        Составляли карту территории, описывали и диагностировали почвы;
                                    </li>
                                    <li class="team-item__list-item">
                                        Собирали пробы почв и болотных отложений.
                                    </li>
                                </ul>
                                <div class="team-item__color-bg">
                                    Почвоведы в своей работе используют только пластиковые и деревянные инструменты. Железо
                                    под
                                    запретом — попадание даже мельчайших частиц металла в пробы внесет погрешности в
                                    химический
                                    анализ и исказит результаты.
                                </div>
                            </div>

                        </div>
                        <div class="team-item zoologist">
                            <img class="team-item__img" src="img/zoologist.png" alt="">

                            <div class="team-item__text-block">
                                <div class="team-item__color-bg">
                                    Чтобы понять, как разлившееся топливо повлияло на мелких млекопитающих, зоологи
                                    отлавливали
                                    грызунов с помощью специальных ловушек. Приманкой служили кедровые орешки в скорлупе,
                                    вымоченные в рыжиковом масле.
                                </div>
                                <div class="team-item__title">Ботаники и зоологи</div>

                                <ul class="team-item__list">
                                    <li class="team-item__list-item">Изучали загрязненные территории и определяли, какие
                                        виды растений на них растут, какие животные обитают;</li>
                                    <li class="team-item__list-item">Сравнивали это многообразие видов с видами на фоновых,
                                        незагрязненных ландшафтах;
                                    </li>
                                    <li class="team-item__list-item">Оценивали, какой реальный ущерб нанесла авария на ТЭЦ-3
                                        флоре и фауне Таймыра.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <BaseTextBlock class="mb-2-5">
                        <p class="text-block__descr">
                            Полевые работы на первом этапе Большой Норильской экспедиции продлились пять недель. Иной раз,
                            чтобы взять пробу, ученым приходилось бурить скважины глубиной до 15 метров или опускаться на
                            дно озера. Но завершить столь масштабную работу за один — очень короткий на Севере — сезон
                            невозможно. Вот почему «Норникель» и СО РАН договорились продлить Большую Норильскую экспедицию
                            еще на два года.
                        </p>
                    </BaseTextBlock>

                    <div class="number-blocks text-block__descr">
                        <BaseNumberBlock :textTop="'6 рек'" :textBottom="'посетили в ходе экспедиции'" />
                        <BaseNumberBlock :textTop="'> 1 000 км'" :textBottom="'преодолели по земле, воде и воздуху'" />
                        <BaseNumberBlock :textTop="'2 000 проб'" :textBottom="'собрали в процессе исследований'" />
                    </div>

                    <BaseTextBlock class="mb-2-5">
                        <p class="text-block__descr">
                            Авария на ТЭЦ-3 действительно негативно сказалась на флоре и фауне в окрестностях Норильска.
                            Особенно пострадали наземные растения — растущие по берегам рек ивы и заросли осоки, — на них
                            ученые обнаружили химические ожоги, причиной которых стало попадание дизельного топлива. Часть
                            видов животных и растений погибла. Зато водные растения и сообщества, которые находились под
                            водой, пострадали гораздо меньше или не пострадали совсем.
                        </p>
                    </BaseTextBlock>
                    <BaseSidebar>
                        <p>
                            Экосистемы вблизи Норильска, отмечают исследователи, пока еще продолжают восстанавливаться
                            от&nbsp;разлива топлива. Но&nbsp;чем дальше от&nbsp;места аварии&nbsp;&mdash; тем меньше
                            признаков и&nbsp;следов произошедшей аварии. Участок от&nbsp;устья реки Тарея до&nbsp;Карского
                            моря и&nbsp;вовсе не&nbsp;пострадал.
                        </p>
                    </BaseSidebar>
                </div>
            </section>
            <section class="section-orange step-two">
                <img class="line line-top" src="img/section-line-top.png" alt="">
                <div class="step-start">
                    <img class="step-start__img" src="img/step-2.png">
                    <div class="step-start__title">Второй этап</div>
                    <div class="step-start__period">июль – сентябрь 2021 года</div>
                    <div class="step-start__descr">
                        Второй этап Большой Норильской экспедиции стартовал летом 2021 года. В состав двух отрядов —
                        «Наземные экосистемы» и «Водные экосистемы» — вошли 29 ученых, представлявших 11 научных организаций
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
                                Оценить эффективность восстановления биоразнообразия
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
                <picture>
                    <source media="(max-width: 768px)" srcset="img/map-rivers-mobile.png">
                    <img class="step-two__img" src="img/map-rivers.png" alt="">
                </picture>

                <BaseTextBlock class="" :title="'Особенности второго этапа'">
                    <p class="text-block__descr">
                        Главным новшеством полевой программы 2021 года стали гидрологические измерения. Специалисты
                        определили ширину, глубину и скорость течения ручья Безымянный и реки Далдыкан, куда в мае 2020 года
                        попали нефтепродукты из аварийного резервуара. Полученные данные позволили ученым рассчитать
                        количество попавших в водные объекты загрязняющих веществ.
                    </p>
                </BaseTextBlock>
                <img class="step-two__img-measurements" src="img/measurements.png" alt="">
                <BaseSidebar>
                    <p>
                        Масштабы и последствия экологической катастрофы могли быть значительно серьезнее. Но оперативная
                        реакция на аварию и локализация разлива нефтепродуктов позволили избежать большой беды, а также
                        предотвратить потенциальные конфликты с местными жителями.
                    </p>
                </BaseSidebar>
                <img class="line line-bottom" src="img/section-line-bottom.png" alt="">
            </section>

            <section class="step-three">
                <div class="step-start">
                    <img class="step-start__img" src="img/step-3.png">
                    <div class="step-start__title">Третий этап</div>
                    <div class="step-start__period">июль – сентябрь 2022 года</div>
                    <div class="step-start__descr">
                        Участниками третьего сезона Большой Норильской экспедиции стали ученые из 14 научных организаций
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
                                проведенных «Норникелем»
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

                <BaseTextBlock class="mb-3-75" :title="'Восстановление экосистем'">
                    <p class="text-block__descr">
                        Рекультивацию земель специалисты «Норникеля» начали проводить в первые же недели после аварии
                        одновременно с очисткой водоёмов. На первом этапе они собирали остатки нефтепродуктов, вытекших из
                        поврежденного хранилища, и вывозили загрязненную почву.
                        <br />
                        <br />
                        В 2021 — 2022 годах компания начала восстанавливать хозяйственную и экологическую ценность земель и
                        водных объектов, пострадавших от разлива топлива.
                        <br />
                        <br />
                        Кроме того, в «Норникеле» разработали программы, которые позволят изучить состояние рек Далдыкан
                        и Амбарная и поддерживать в них популяцию редких видов рыб. Для этого компания продолжает рыбоводные
                        исследования, позволяющие понять какие участки наиболее благоприятны для нереста и нагула рыб, какие
                        в них условия. Всё это поможет понять, как повысить выживаемость мальков ценных пород рыб после их
                        искусственного выращивания и выпуска в водные объекты.
                        <br /><br />
                        Также учёные исследуют, как микроорганизмы, проживающие на дне арктических озёр, разлагают тяжелые
                        фракции нефтепродуктов. Результаты этой работы могут быть интересны мировой общественности, ведь
                        никто не станет специально загрязнять водные экосистемы ради таких исследований, да и редкие
                        компании станут афишировать загрязнение окружающей среды, произошедшее по их вине. Возможность
                        проследить подобные процессы в естественной среде — это большая редкость.
                    </p>
                </BaseTextBlock>
                <BaseSidebar>
                    <p>
                        Арктические экосистемы показали, что могут хорошо восстанавливаться, а микроорганизмы — эффективно
                        очищать воду от органического загрязнения. Чтобы это происходило, необходимо снизить техногенную
                        нагрузку. Для этого нужно модернизировать водоочистные установки и установки очистки выбросов, а
                        также сократить выбросы диоксида серы в атмосферу.
                    </p>
                </BaseSidebar>
                <div class="scena__wrap">
                    <picture>
                        <source media="(max-width: 768px)" srcset="img/step-3-scena-mobile.png">
                        <img class="scena" src="img/step-3-scena.png" alt="">
                    </picture>

                </div>
                <BaseSidebar>
                    <p>
                        Большая Норильская экспедиция продлилась три года, но научная работа, начатая СО РАН и «Норникелем»,
                        на этом не закончилась — в 2022 году сразу в трех регионах страны стартовала Большая научная
                        экспедиция.
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
import BigMap from '@/components/BigMap.vue'

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
    name: 'App',
    components: {
        BaseHero,
        BaseNumberBlock,
        MainSection,
        BaseTextBlock,
        BaseSidebar,
        BigMap
    },
    mounted() {
        // this.$nextTick(function () {
        this.scrollAnimation();
        // })
    },
    data() {
        return {
            heroDescr: 'Май 2020 года, Норильск. Из-за таяния вечной мерзлоты одна из цистерн ТЭЦ-3 с изельным топливом треснула у основания, и тысячи тонн нефтепродуктов разлились по территории предприятия, а затем попали в реки Далдыкан и Амбарная.'
        }
    },
    methods: {
        scrollAnimation() {

            if (window.innerWidth > 768) {
                const panels = gsap.utils.toArray(".team-container .team-item");
                gsap.to(panels, {
                    xPercent: -50 * (panels.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".team",
                        pin: true,
                        start: "top",
                        scrub: 1,
                        end: () => "+=" + (document.querySelector(".team-container").offsetWidth - window.innerWidth)
                    }
                });
            }

            const collageItems = Array.from(document.querySelectorAll(".text-block__wrap"));
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
                    });
            });

            const sidebarItems = Array.from(document.querySelectorAll(".sidebar"));
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
                    });
            });
        }
    }
}

</script>

<style lang="scss">
.team {
    position: relative;
    overflow: hidden;

    .text {
        position: absolute;
        top: 6.25rem;
        left: 29.41rem;

        @media (max-width: 768px) {
            position: static;
            transform: unset;
        }
    }

    .number-blocks {
        display: flex;
        margin: 0 auto;
        gap: 6.75rem;
        width: 60.5rem;
        margin-bottom: 6.25rem;

        @media (max-width: 768px) {
            flex-direction: column;
            width: 100%;
            padding: 0 9.5rem;
            gap: 7.467rem;
        }

        .number-block {
            position: static;
        }
    }

    &-container {
        margin-bottom: 4.94rem;
        display: flex;
        width: 160.36rem;
        height: 46.1875rem;

        @media (max-width: 768px) {
            height: 139.467rem;
            width: 530rem;
        }
    }

    .team-item {
        position: relative;

        &__text-block {
            position: absolute;
            z-index: -1;
            border-radius: 0.25rem;
        }

        &__title {
            padding: 0.4375rem 0.625rem;
            margin-bottom: 1.06rem;
            width: max-content;
            font-size: 0.9375rem;
            font-weight: 300;
            line-height: 130%;
            color: #fff;
            border-radius: 1.6875rem;
            background: var(--grey, #626261);
        }

        &__list {
            width: 17.875rem;
            display: flex;
            flex-direction: column;
            gap: 0.94rem;
            margin-bottom: 1.25rem;
            list-style-type: disc;
        }
    }

    .hydrochemist {
        width: 41.125rem;

        @media (max-width: 768px) {
            width: 133.4rem;
        }

        .team-item {
            &__img {
                position: absolute;
                left: 0;
                bottom: 0;
                width: 32.375rem;
                height: 46.1875rem;

                @media (max-width: 768px) {
                    width: 92.534rem;
                    height: 139.467rem;
                }
            }

            &__text-block {
                right: -2rem;
                bottom: 7.44rem;
            }

            &__color-bg {
                width: 25.0625rem;
                padding: 0.625rem 1rem 0.875rem 0.875rem;
                background: #FFEBCC;
            }

            &__list {
                padding-left: 1rem;
                width: 18.875rem;
            }
        }
    }

    .geocryologists {
        width: 38.315rem;

        .team-item {
            &__img {
                position: absolute;
                left: 0;
                bottom: 0.25rem;
                width: 16.1875rem;
                height: 30.1875rem;
            }

            &__text-block {
                left: 11.88rem;
                bottom: 6.19rem;
            }

            &__color-bg {
                margin-bottom: 1.94rem;
                width: 25.0625rem;
                padding: 0.625rem 1rem 0.875rem 0.875rem;
                background: #E8F4FA;
            }

            &__title {
                margin-left: 5rem;
            }

            &__list {
                width: 22.875rem;
                padding-left: 5rem;
            }
        }
    }

    .scientists {
        width: 39.06rem;

        .team-item {
            &__img {
                width: 20.5rem;
                height: 32.6875rem;
                position: absolute;
                left: 0;
                bottom: -0.94rem;
            }

            &__text-block {
                left: 13.44rem;
                bottom: 2.56rem;
            }

            &__color-bg {
                width: 26.75rem;
                padding: 0.625rem 1.75rem 0.875rem 2.8125rem;
                background: #FFEBCC;
            }

            &__title {
                margin-left: 5rem;
            }

            &__list {
                width: 22.875rem;
                padding-left: 5rem;
            }
        }
    }

    .zoologist {
        width: 40.4975rem;

        .team-item {
            &__img {
                position: absolute;
                left: 0;
                bottom: -0.94rem;
                width: 19.9375rem;
                height: 28.9375rem;
            }

            &__text-block {
                left: 17.44rem;
                bottom: 4.68rem;
            }

            &__color-bg {
                margin-bottom: 1.88rem;
                width: 23.0625rem;
                padding: 0.625rem 1rem 0.875rem 0.875rem;
                background: #E8F4FA;
            }

            &__list {
                padding-left: 3rem;
                width: 20.875rem;
            }

            &__title {
                margin-left: 3rem;
            }
        }

    }

}


.step-start {
    margin-bottom: 7rem;
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
        font-size: 1.125rem;
        font-weight: 300;
        line-height: 130%;

        @media (max-width: 768px) {
            margin-bottom: 5.8666rem;
            font-size: 4.53334rem;
        }
    }

    &__descr {
        margin-bottom: 1.25rem;
        width: 34.8125rem;
        text-align: center;
        font-size: 1.125rem;
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
            width: 1.875rem;
            height: 1.875rem;
            padding: 0.3rem 0.63rem;
            border-radius: 100%;
            background-color: #D38235;
            color: #fff;
            font-size: 1.125rem;
            font-weight: 500;
            line-height: 130%;

            @media (max-width: 768px) {
                width: 9.7937rem;
                height: 9.7937rem;
                font-size: 4.8rem;
                padding: 2rem 3.7rem;
            }
        }

        &-descr {
            text-align: center;

            @media (max-width: 768px) {
                font-size: 4.53334rem;
                line-height: 130%;
            }
        }
    }
}

.step-two {
    position: relative;
    background: #F7F6F2;
    margin-bottom: 9.5rem;
    padding-bottom: 3.72rem;

    .line {
        position: absolute;
        width: 100%;
        height: 9.5rem;

        &-top {
            top: -9.5rem;
        }

        &-bottom {
            bottom: -9.5rem;
        }
    }

    .step-start__img {
        width: 22.5625rem;
        height: 6.8125rem;

        @media (max-width: 768px) {
            width: 73.07rem;
            height: 22.134rem;
        }
    }

    &__img {
        margin: 6.25rem 0;
        width: 100%;
        // height: 29.4rem;

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

    .step-start__lines {
        width: 28.4rem;
        height: 3.9rem;
    }

    .step-start__items {
        width: 44.375rem;
        gap: 12.44rem;

        @media (max-width: 768px) {
            gap: 5.3332rem;
            width: 100%;
        }
    }

    .step-start__item {
        &:first-child {
            width: 15.625rem;
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
}

.section-white {
    margin-bottom: 9.5rem;
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
        width: 46.5rem;
        gap: 11.62rem;

        @media (max-width: 768px) {
            width: 100%;
        }
    }

    .step-start__item {
        &:first-child {
            width: 17.5625rem;
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
}</style>