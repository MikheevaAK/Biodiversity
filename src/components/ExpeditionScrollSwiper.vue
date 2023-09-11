<template>
    <div class="team-container__wrap">
        <div class="team-container">
            <div class="team-item hydrochemist">
                <img class="team-item__img" src="img/hydrochemist.png" alt="">
                <div class="team-item__text-block">
                    <div class="team-item__title">Гидрохимики</div>

                    <ul class="team-item__list">
                        <li class="team-item__list-item">Определяли уровень загрязнения ручьёв, рек и озёр
                            нефтепродуктами;
                        </li>
                        <li class="team-item__list-item">Вычисляли, сколько в воде содержится нефтепродуктов и тяжёлых
                            металлов;
                        </li>
                        <li class="team-item__list-item">Исследовали воду на мутность, количество взвесей и
                            кислорода.
                        </li>
                    </ul>

                    <div class="team-item__color-bg">
                        Производить замеры гидрохимикам помогает специальный прибор&nbsp;&mdash; зонд.
                        Он&nbsp;буквально в&nbsp;считанные секунды может определить, сколько в&nbsp;воде
                        присутствует сине-зелёных водорослей, рассчитать концентрацию кислорода
                        и&nbsp;кислотность среды.
                    </div>
                </div>
                <img class="team-item__img-grass" src="img/grass.png" alt="">
            </div>
            <div class="team-item geocryologists">
                <img class="team-item__img" src="img/geocryologists.png" alt="">
                <div class="team-item__text-block">
                    <div class="team-item__color-bg">
                        Учёные не&nbsp;любят и&nbsp;не&nbsp;используют словосочетание &laquo;вечная мерзлота&raquo;,
                        ведь ничего вечного не&nbsp;бывает. Правильнее говорить &laquo;многолетняя мерзлота&raquo;.
                    </div>

                    <div class="team-item__title">Геокриологи</div>

                    <ul class="team-item__list">
                        <li class="team-item__list-item">Изучали строение и&nbsp;состояние зоны с&nbsp;многолетней
                            мерзлотой;
                        </li>
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
                        Почвоведы в&nbsp;своей работе используют только пластиковые и&nbsp;деревянные инструменты.
                        Железо под запретом: попадание в&nbsp;пробы даже мельчайших частиц металла добавит погрешность
                        при обработке собранных проб и&nbsp;результаты анализов будут искажены.
                    </div>
                </div>

            </div>
            <div class="team-item zoologist">
                <img class="team-item__img" src="img/zoologist.png" alt="">

                <div class="team-item__text-block">
                    <div class="team-item__color-bg">
                        Чтобы понять, как разлившееся топливо повлияло на&nbsp;мелких млекопитающих, зоологи отлавливали
                        грызунов с&nbsp;помощью специальных ловушек. Приманкой служили кедровые орешки в&nbsp;скорлупе,
                        вымоченные в&nbsp;рыжиковом масле.
                    </div>
                    <div class="team-item__title">Ботаники и зоологи</div>

                    <ul class="team-item__list">
                        <li class="team-item__list-item">Изучали загрязнённые территории и&nbsp;определяли, какие виды
                            растений на&nbsp;них растут, какие животные обитают;
                        </li>
                        <li class="team-item__list-item">Сравнивали это многообразие видов с&nbsp;видами на&nbsp;фоновых,
                            незагрязнённых ландшафтах;
                        </li>
                        <li class="team-item__list-item">Оценивали, какой реальный ущерб нанесла авария на&nbsp;ТЭЦ-3
                            флоре и&nbsp;фауне Таймыра.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default {
    mounted() {
        this.$nextTick(function () {
            this.scrollAnimation();
        })
    },
    methods: {
        scrollAnimation() {
            if (window.innerWidth > 768) {
                const panels = gsap.utils.toArray(".team-container .team-item");
                gsap.to(panels, {
                    xPercent: -55 * (panels.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".team",
                        pin: true,
                        start: "top -10%",
                        scrub: 1,
                        end: () => "+=" + (document.querySelector(".team-container").offsetWidth - window.innerWidth)
                    }
                });
            }
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
            margin-top: 19.332rem;
            margin-bottom: 4.26rem;
        }
    }

    .mobile-icon-scroll {
        display: none;
        position: absolute;
        width: 25.7rem;
        height: 14.2rem;
        top: 55rem;
        right: 7rem;

        @media (max-width: 768px) {
            display: block;
        }
    }

    .number-blocks {
        display: flex;
        margin: 0 auto;
        gap: 6.75rem;
        width: 54rem;
        margin-bottom: 6.25rem;

        @media (max-width: 768px) {
            flex-direction: column;
            width: 100%;
            padding: 0 9.5rem;
            gap: 7.467rem;
            margin-bottom: 10.6667rem;
        }

        .number-block {
            position: static;
            width: 15rem;

            @media (max-width: 768px) {
                margin-top: 0;
            }

            &:first-child {
                width: 11rem;
            }
        }
    }

    &-container {
        margin-bottom: 4.94rem;
        display: flex;
        width: 160.36rem;
        height: 51.1875rem;

        @media (max-width: 768px) {
            width: 524rem;
            height: 100%;

            &__wrap {
                margin-bottom: 16rem;
                width: unset;
                height: 139.467rem;
                overflow-x: scroll;
                overflow-y: hidden;
                scrollbar-width: none;

                &::-webkit-scrollbar {
                    width: 0;
                }
            }
        }
    }

    .team-item {
        position: relative;

        @media (max-width: 768px) {
            height: 139.467rem;
        }

        &__text-block {
            position: absolute;
            z-index: -1;
            border-radius: 0.25rem;

            @media (max-width: 768px) {
                font-size: 4rem;
                line-height: 130%;
            }
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

            @media (max-width: 768px) {
                font-size: 4rem;
                padding: 1.8716rem 2.6737rem;
                border-radius: 7.22rem;
                margin-bottom: 4.5456rem;
            }
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
            width: 125rem;
        }

        .team-item {
            &__img {
                position: absolute;
                left: 0;
                bottom: 0;
                width: 32.375rem;
                height: 46.1875rem;

                @media (max-width: 768px) {
                    left: -40px;
                    top: -2rem;
                    width: 92.534rem;
                    height: 139.467rem;
                }

                &-grass {
                    position: absolute;
                    right: -4rem;
                    bottom: 1.5rem;
                    width: 12.6875rem;
                    height: 7rem;

                    @media (max-width: 768px) {
                        display: none;
                    }
                }
            }

            &__text-block {
                right: -2rem;
                bottom: 7.44rem;

                @media (max-width: 768px) {
                    right: -1rem;
                    bottom: 17.3rem;
                }
            }

            &__color-bg {
                width: 25.0625rem;
                padding: 0.625rem 1rem 0.875rem 0.875rem;
                background: #FFEBCC;

                @media (max-width: 768px) {
                    width: 86.0625rem;
                    padding: 3rem 4rem 3.7rem 3.7rem;
                }
            }

            &__list {
                padding-left: 1rem;
                width: 18.875rem;

                @media (max-width: 768px) {
                    width: 72.875rem;
                }
            }
        }
    }

    .geocryologists {
        width: 38.315rem;

        @media (max-width: 768px) {
            width: 109rem;
        }

        .team-item {
            &__img {
                position: absolute;
                left: 0;
                bottom: 0.25rem;
                width: 16.1875rem;
                height: 30.1875rem;

                @media (max-width: 768px) {
                    bottom: 0;
                    width: 52.7rem;
                    height: 98.4rem;
                }
            }

            &__text-block {
                left: 11.88rem;
                bottom: 6.19rem;

                @media (max-width: 768px) {
                    left: unset;
                    right: -8rem;
                }
            }

            &__color-bg {
                margin-bottom: 1.94rem;
                width: 25.0625rem;
                padding: 0.625rem 1rem 0.875rem 0.875rem;
                background: #E8F4FA;

                @media (max-width: 768px) {
                    width: 74rem;
                    padding: 3rem 4rem 3.7rem 3.7rem;
                    margin-bottom: 5.338rem;
                }
            }

            &__title {
                margin-left: 5rem;
            }

            &__list {
                width: 22.875rem;
                padding-left: 5rem;

                @media (max-width: 768px) {
                    width: 72rem;
                }
            }
        }
    }

    .scientists {
        width: 39.06rem;

        @media (max-width: 768px) {
            width: 127.5rem;
        }

        .team-item {
            &__img {
                width: 20.5rem;
                height: 32.6875rem;
                position: absolute;
                left: 0;
                bottom: -0.94rem;

                @media (max-width: 768px) {
                    width: 77.67rem;
                    height: 114.51rem;
                    left: -2px;
                    bottom: -8rem;

                }
            }

            &__text-block {
                left: 13.44rem;
                bottom: 2.56rem;

                @media (max-width: 768px) {
                    left: unset;
                    right: -29px;
                    bottom: 12.56rem;
                }
            }

            &__color-bg {
                width: 26.75rem;
                padding: 0.625rem 1.75rem 0.875rem 2.8125rem;
                background: #FFEBCC;

                @media (max-width: 768px) {
                    width: 82.75rem;
                    padding: 3.737rem;
                }
            }

            &__title {
                margin-left: 5rem;
            }

            &__list {
                width: 22.875rem;
                padding-left: 5rem;

                @media (max-width: 768px) {
                    width: 79rem;
                    // padding-left: 5rem;
                }
            }
        }
    }

    .zoologist {
        width: 40.4975rem;

        @media (max-width: 768px) {
            width: 157.3rem;
        }

        .team-item {
            &__img {
                position: absolute;
                left: 0;
                bottom: -0.94rem;
                width: 19.9375rem;
                height: 28.9375rem;

                @media (max-width: 768px) {
                    width: 66.73rem;
                    height: 96.9rem;
                    bottom: 1rem;
                }
            }

            &__text-block {
                left: 17.44rem;
                bottom: 4.68rem;

                @media (max-width: 768px) {
                    left: unset;
                    right: 0;
                    bottom: 4.68rem;
                }
            }

            &__color-bg {
                margin-bottom: 1.88rem;
                width: 23.0625rem;
                padding: 0.625rem 1rem 0.875rem 0.875rem;
                background: #E8F4FA;

                @media (max-width: 768px) {
                    margin-bottom: 3.737rem;
                    width: 82.55rem;
                    padding: 3.737rem;
                }
            }

            &__list {
                padding-left: 3rem;
                width: 22rem;

                @media (max-width: 768px) {
                    width: 84.33rem;
                }
            }

            &__title {
                margin-left: 3rem;
            }
        }

    }

}

.swiper {
    display: none;

    @media (max-width: 768px) {
        display: block;
    }
}
</style>