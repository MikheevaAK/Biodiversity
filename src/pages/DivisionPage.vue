<template>
    <div class="division">
        <BaseHero :title="'Норильский дивизион. Природные сокровища южного Таймыра'" :descr="heroDescr"
            :img="'img/hero-3.jpg'" :imgMobile="'img/hero3-mobile.jpg'" />
        <MainSection>
            <SectionWhite>
                <BaseTextBlock class="text mb-40" :title="'Особенности дивизиона'">
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

                <BigMap :circales="circales" :img="'img/division-big-map.svg'"
                    :imgMobile="'img/division-big-map-mobile.svg'">
                </BigMap>

                <BaseScrollBlock>
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
                        Природный объект, важный для поддержания и&nbsp;восстановления местного биоразнообразия. Расстояние
                        от&nbsp;Промышленного района до&nbsp;границ заповедника&nbsp;&mdash; более 50&nbsp;км.
                        По&nbsp;словам специалистов, этого достаточно, чтобы сохранить местные экосистемы
                        в&nbsp;неприкосновенности и&nbsp;исключить воздействие предприятий.
                    </div>
                </BaseScrollBlock>

                <div class="number-blocks text-block__wrap mb-100">
                    <BaseNumberBlock :textTop="'до 280 дней'" :textBottom="'устойчивых морозов'" />
                    <BaseNumberBlock :textTop="'до 500 метров'" :textBottom="'толщина многолетнемёрзлых пород'" />
                    <BaseNumberBlock :textTop="'-53 0С'" :textBottom="'минимальная температура'" />
                </div>

                <BaseTextBlock class="text mb-40" :title="'Зона воздействия предприятий Норильского дивизиона'">
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
                <BaseTextBlock class="text mb-60">
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
                <div class="flex">
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
                    <div class="underwater"></div>
                    <div class="bottom"></div>
                    <div class="middle"></div>
                    <div class="spruce"></div>
                    <div class="eagle"></div>
                    <div class="bird-1"></div>
                </div>
                <BaseTextBlock class="mb-100">
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
                <BaseTextBlock class="mb-100">
                    <p class="mb-10">
                        Некоторые редкие виды могут присутствовать в&nbsp;зонах промышленного воздействия, несмотря
                        на&nbsp;шум,
                        загрязнение и&nbsp;изъятие почв.
                    </p>
                    <p>
                        Для них приоритетным фактором выживания оказывается доступ к&nbsp;кормовой
                        базе, которая обильнее в&nbsp;местах обитания человека.
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
import BaseScrollBlock from '@/components/BaseScrollBlock.vue'
import BaseNumberBlock from "@/components/BaseNumberBlock.vue";

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
        BaseScrollBlock,
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
            heroDescr: 'Какие виды животных и растений живут по соседству с промышленным гигантом Красноярского края — Большим Норильском'
        }
    }
}
</script>

<style lang="scss">
.division {
    .big-map {
        .map-circale {
            &__1 {
                top: 14.4rem;
                left: 57rem;
            }

            @media (max-width: 768px) {
                top: 102.5rem;
                left: 68rem;
            }

            &__2 {
                top: 10rem;
                left: 43.3rem;

                @media (max-width: 768px) {
                    top: 108.4rem;
                    left: 77.9rem;
                }
            }

            &__3 {
                top: 23.6rem;
                left: 39.7rem;

                @media (max-width: 768px) {
                    top: 128.2rem;
                    left: 75.8rem;
                }
            }

            &__4 {
                top: 32.8rem;
                left: 42rem;

                @media (max-width: 768px) {
                    top: 151.1rem;
                    left: 21.9rem;
                }
            }

            &__5 {
                top: 11.8rem;
                left: 41.6rem;

                @media (max-width: 768px) {
                    top: 146.4rem;
                    left: 16.6rem;
                }
            }

            &__6 {
                top: 11.8rem;
                left: 34.85rem;

                @media (max-width: 768px) {
                    top: 137.5rem;
                    left: 13.5rem;
                }
            }

            &__7 {
                top: 14.7rem;
                left: 23.55rem;

                @media (max-width: 768px) {
                    top: 129.1rem;
                    left: 21.1rem;
                }
            }
        }
    }

    .scroll {
        &-bg {
            &.bg-1 {
                background-image: url(../../public/img/map-1.png);
            }

            &.bg-2 {
                background-image: url(../../public/img/map-2.png);
            }

            &.bg-3 {
                background-image: url(../../public/img/map-3.png);
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
    }

    .number-blocks {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 6.75rem;
        width: 60.5rem;

        .number-block {
            position: static;
        }
    }

    .collage {
        position: relative;
        margin-bottom: 1.25rem;
        height: 334.75rem;
        width: 100%;
        background-image: url(../../public/img/top.png);
        background-repeat: no-repeat;
        background-size: contain;
        z-index: 1;

        .spruce {
            position: absolute;
            top: 35.9722rem;
            left: 0;
            width: 48.889rem;
            height: 133.0625rem;
            background-image: url(../../public/img/spruce.png);
            background-repeat: no-repeat;
            background-size: contain;
            z-index: 1;
        }

        .bird-1 {
            position: absolute;
            top: 699px;
            left: 0;
            width: 169px;
            height: 140px;
            background-image: url(../../public/img/bird-1.png);
            background-repeat: no-repeat;
            background-size: contain;
            z-index: 1;
        }

        .eagle {
            position: absolute;
            top: -25rem;
            left: 7.25rem;
            width: 52.2223rem;
            height: 47.5rem;
            background-image: url(../../public/img/eagle.png);
            background-repeat: no-repeat;
            background-size: contain;
            z-index: 1;
        }

        .underwater {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 57.8125rem;
            background-image: url(../../public/img/underwater.png);
            background-repeat: no-repeat;
            background-size: contain;
            z-index: 2;
        }

        .bottom {
            position: absolute;
            bottom: 43.8125rem;
            left: 0;
            right: 0;
            height: 51.25rem;
            background-image: url(../../public/img/bottom.png);
            background-repeat: no-repeat;
            background-size: contain;
            z-index: 1;
        }

        .middle {
            position: absolute;
            bottom: 67.8125rem;
            left: 0;
            right: 0;
            height: 39.5625rem;
            background-image: url(../../public/img/middle.png);
            background-repeat: no-repeat;
            background-size: contain;
            z-index: 2;
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

        @media (max-width: 768px) {}
    }

    .text {
        width: 38.25rem;
        text-align: center;
    }

    .number-block {
        position: static;
    }
}
</style>