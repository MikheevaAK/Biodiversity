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
                    <picture>
                        <source media="(max-width: 768px)" type="image/webp" srcset="img/kola-radius-mobile.webp">
                        <source media="(max-width: 768px)" srcset="img/kola-radius-mobile.png">
                        <!-- <source type="image/webp" srcset="img/kola-radius.webp"> -->
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
                <BaseTextBlock class="text mb-40">
                    Некоторые редкие виды могут проживать в&nbsp;зонах воздействия предприятий, несмотря на&nbsp;шум или
                    другие факторы воздействия. Ведь для их&nbsp;выживания главное&nbsp;&mdash; наличие корма
                    и&nbsp;отсутствие беспокойства со&nbsp;стороны человека.
                </BaseTextBlock>
                <BaseSidebar>
                    <p>
                        Минимизировать накопленный за&nbsp;многие десятилетия техногенный след, восстановить
                        и&nbsp;сохранить экосистемы Кольского Заполярья&nbsp;&mdash; важные пункты экологической программы
                        &laquo;Норникеля&raquo; в&nbsp;Кольском дивизионе.
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
        BaseDropdownInfo
        // BaseScrollBlock,
        // BaseNumberBlock
    },
    data() {
        return {
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
}</style>