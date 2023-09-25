<template>
    <div class="indicator">
        <BaseHero :title="'Загадочный ИПСЭ'" :descr="heroDescr" :img="'img/hero9.jpg'"
            :imgMobile="'img/hero6-mobile.jpg'" />
        <MainSection>
            <BaseTextBlock class="mb-40" :title="'Суть метода'">
                Начиная с&nbsp;2022 года на&nbsp;территориях вокруг промышленных площадок &laquo;Норникеля&raquo;
                специалисты собирают сведения о&nbsp;состоянии различных компонентов наземных и&nbsp;водных экосистем:
                флоры, фауны и&nbsp;почв.
            </BaseTextBlock>

            <section class="scroll mb-100">
                <div class="scroll-bg bg-1"></div>
                <div class="scroll-bg bg-2"></div>
                <div class="scroll-bg bg-3"></div>
                <div class="scroll-wrap">
                    <div class="scroll-card card-1 text-block__descr">
                        <BaseTextBlock :title="'Сбор данных в зонах воздействия'">
                            Для животных и&nbsp;растений это показатели видового разнообразия и&nbsp;обилия индикаторных
                            групп. Для рек, озёр и&nbsp;почв&nbsp;&mdash; содержание тех или иных химических элементов,
                            присутствие живых организмов и&nbsp;т.&nbsp;п.
                        </BaseTextBlock>
                    </div>
                    <div class="scroll-card card-2 text-block__descr">
                        <BaseTextBlock :title="'Сбор данных на фоновых территориях'">
                            Такая работа проводится не&nbsp;только в&nbsp;зонах промышленного воздействия,
                            но&nbsp;и&nbsp;на&nbsp;фоновых площадках&nbsp;&mdash; там, где экосистемы сохранились
                            в&nbsp;первозданном виде. Показатели фоновых площадок при этом принимаются
                            за&nbsp;&laquo;норму&raquo;.
                        </BaseTextBlock>
                    </div>
                    <div class="scroll-card card-3 text-block__descr">
                        <BaseTextBlock :title="'Сопоставление данных'">
                            <p class="mb-10">
                                Собранные в&nbsp;зонах воздействия данные сравниваются с&nbsp;фоновыми показателями. Так
                                удаётся получить информацию о&nbsp;состоянии экосистем на&nbsp;территориях вокруг
                                промышленных объектов &laquo;Норникеля&raquo; и&nbsp;узнать, есть&nbsp;ли отклонения
                                от&nbsp;&laquo;нормы&raquo;.
                            </p>
                            <p>
                                Поскольку реакция на&nbsp;антропогенное воздействие у&nbsp;разных организмов может
                                отличаться, для более точного результата при расчёте ИПСЭ учитываются показатели
                                по&nbsp;целому комплексу индикаторных групп и&nbsp;видов. Для фоновых территорий ИПСЭ
                                априори принимается за&nbsp;единицу.
                            </p>
                        </BaseTextBlock>
                    </div>
                </div>
            </section>

            <BaseTextBlock class="mb-40" :title="'Как считается ИПСЭ дивизиона'">
                <p class="mb-10">
                    Отклонение от&nbsp;фона просчитывается для каждого индикатора в&nbsp;отдельности по&nbsp;каждой зоне
                    воздействия:
                    Показатель зоны&nbsp;/ Показатель фона = Коэффициент индикатора в&nbsp;зоне.
                </p>
                <p>
                    Полученные результаты суммируются, а&nbsp;затем делятся на&nbsp;общее количество индикаторов. Получаем
                    ИПСЭ в&nbsp;зоне воздействия.
                </p>
            </BaseTextBlock>

            <!---->

            <BaseTextBlock class="mb-60">
                <p class="mb-10">
                    ИПСЭ дивизиона&nbsp;&mdash; это средневзвешенное значение ИПСЭ во&nbsp;всех зонах воздействия,
                    с&nbsp;учётом ширины каждой зоны.
                </p>
                <p class="mb-10">
                    Дело в&nbsp;том, что в&nbsp;разных дивизионах характер деятельности предприятий может отличаться,
                    соответственно, может отличаться и&nbsp;ширина зон воздействия объектов.Если не&nbsp;учитывать эту
                    особенность, то&nbsp;сравнивать ИПСЭ дивизионов между собой некорректно.
                </p>
                <p>
                    Поправка на&nbsp;ширину служит &laquo;усреднителем&raquo; в&nbsp;этих сложных математических
                    вычислениях.
                </p>
            </BaseTextBlock>

            <div class="indicator__block">
                <BaseTextQuotes>
                    <p class="mb-10">
                        Как правило, от&nbsp;промышленного воздействия заметно страдают те&nbsp;территории, которые
                        находятся в&nbsp;непосредственной близости от&nbsp;предприятий,&nbsp;&mdash; зонах интенсивного
                        воздействия. В&nbsp;зонах умеренного или незначительного воздействия ситуация может слабо отличаться
                        от&nbsp;фоновой, а&nbsp;временами быть даже лучше.
                    </p>
                    <p class="mb-10">
                        Так, например, локальное увеличение разнообразия может быть связано с&nbsp;новыми экологическими
                        нишами, которые появляются в&nbsp;результате деятельности человека (например, искусственные водоёмы
                        или изменение микроландшафта, замена деревьев кустарниками). Хорошо это или плохо для экосистемы,
                        ответ не&nbsp;всегда однозначен.
                    </p>
                    <p>
                        Например, в&nbsp;Забайкалье для расчистки территорий под промышленные нужды пришлось вырубать
                        деревья. В&nbsp;местах вырубки стали интенсивно расти молодые деревья и&nbsp;кустарники, что
                        привлекло много косуль. Парнокопытные были рады обилию корма, индекс биоразнообразия был высок.
                        Но&nbsp;учёные сказали, что так работает иммунитет природы: по&nbsp;аналогии с&nbsp;человеком,
                        в&nbsp;местах ран скапливаются кровяные тельца для их&nbsp;заживления.
                    </p>
                </BaseTextQuotes>
            </div>

            <BaseTextBlock class="mb-100" :title="'Наблюдения во времени'">
                <p class="mb-10">
                    Метод показывает свою эффективность как при оценке ситуации за&nbsp;конкретный год, так
                    и&nbsp;в&nbsp;динамике,&nbsp;&mdash; всё зависит от&nbsp;задач. В&nbsp;первом случае он&nbsp;позволяет
                    выявлять и&nbsp;уточнять границы поясов воздействия.
                </p>
                <p class="mb-10">
                    Во&nbsp;втором&nbsp;&mdash; изменение ИПСЭ во&nbsp;времени (∆ ИПСЭ) помогает определить условные потери
                    или прирост биоразнообразия из-за производственной деятельности от&nbsp;года к&nbsp;году.
                    А&nbsp;по&nbsp;прошествии нескольких лет ИПСЭ позволит сделать ретроспективный анализ.
                </p>
                <p>
                    Именно поэтому компания намерена регулярно проводить исследования по&nbsp;аналогичным параметрам
                    и&nbsp;по&nbsp;единым методикам. Это поможет отследить, насколько эффективной окажется её&nbsp;работа
                    по&nbsp;сохранению экосистем, и&nbsp;при необходимости принять меры.
                </p>
            </BaseTextBlock>

            <picture>
                <!-- <source media="(max-width: 768px)" type="image/webp" srcset="img/kola-radius-mobile.webp"> -->
                <source media="(max-width: 768px)" srcset="img/indicator-schedule-mobile.png">
                <source type="image/webp" srcset="img/indicator-schedule.webp">
                <img class="indicator__schedule mb-100" src="img/indicator-schedule.png">
            </picture>

            <BaseTextBlock class="mb-40" :title="'Природное или техногенное воздействие?'">
                Отличить сокращение численности индикаторных групп или вида по&nbsp;естественным причинам от&nbsp;тех, что
                связаны с&nbsp;промышленным воздействием, не&nbsp;всегда бывает просто. Чтобы сделать это, учёные проводят
                наблюдения на&nbsp;разных участках изучаемой территории.
            </BaseTextBlock>

            <BaseTextQuotes class="mb-100">
                <p>
                    Уровень воды в&nbsp;реке может заметно повысится относительно многолетних значений из-за аномально
                    снежной зимы. В&nbsp;результате паводка под водой окажутся те&nbsp;территории, которые обычно
                    не&nbsp;затапливает. На&nbsp;биоразнообразии это скажется негативно, однако причины у&nbsp;таких
                    изменений будут исключительно природными.
                </p>
            </BaseTextQuotes>

            <BaseTextBlock class="mb-60" :title="'Особенности ИПСЭ'">
                Уже первый год работы с&nbsp;ИПСЭ показал, что это действенный, но&nbsp;не&nbsp;универсальный метод.
                Например, он&nbsp;хорошо показывает изменения для массовых индикаторных видов, а&nbsp;вот для оценки
                ситуации с&nbsp;малочисленными видами практически не&nbsp;применим. Учёные нередко сравнивают ИПСЭ
                с&nbsp;градусником, который врачи используют для замера температуры у&nbsp;пришедшего к&nbsp;ним
                на&nbsp;приём человека. ИПСЭ показывает симптом, а&nbsp;не&nbsp;причину. Чтобы разобраться, почему
                изменяется биоразнообразие, нужно смотреть на&nbsp;детали.
            </BaseTextBlock>

            <div class="indicator__drop mb-60">
                <div class="indicator__drop-wrap">
                    <div class="indicator__drop-text">
                        Снижение ИПСЭ&nbsp;&mdash; повод рассмотреть ситуацию поближе, провести анализ и&nbsp;обосновать
                        выводы. А&nbsp;это всегда требует времени. Другими словами, негативная динамика (∆)
                        ИПСЭ&nbsp;&mdash; это не&nbsp;приговор, а&nbsp;сигнал к&nbsp;действию.
                    </div>
                </div>
            </div>

            <BaseTextQuotes class="mb-60">
                <p>
                    В&nbsp;Норильске в&nbsp;зоне интенсивного воздействия энтомологи обнаружили огромную по&nbsp;сравнению
                    с&nbsp;другими участками численность жужелиц. На&nbsp;первый взгляд&nbsp;&mdash; это хороший показатель.
                    Однако причиной оказалась вспышка массового размножения одного вида жуков. Такое событие часто связано
                    с&nbsp;тем, что почвенные насекомые осваивают новые места обитания. Это не&nbsp;всегда говорит
                    о&nbsp;благополучии экосистемы, поскольку может происходить, например, из-за нарушения естественного
                    микроландшафта при горных разработках. Подобные факторы вносят искажения в&nbsp;научные наблюдения,
                    и&nbsp;для анализа каждого такого случая нужны очень узкие экспертные знания. Обосновать такие выводы
                    могут только учёные.
                </p>
            </BaseTextQuotes>

            <BaseTextBlock class="mb-40">
                В&nbsp;&laquo;Норникеле&raquo; надеются, что ИПСЭ поможет выстроить рабочую систему управления воздействием
                на&nbsp;биоразнообразие и&nbsp;в&nbsp;перспективе добиться отсутствия нетто-потерь биоразнообразия,
                а&nbsp;в&nbsp;идеале&nbsp;&mdash; его чистого прироста.
            </BaseTextBlock>

            <BaseSidebar>
                <p class="mb-10">
                    &laquo;Норникель&raquo; стал первой компанией в&nbsp;России, которая &laquo;оцифровала&raquo; такое
                    многоликое биоразнообразие. ИПСЭ позволяет быстро и&nbsp;эффективно оценивать состояние экосистем,
                    улавливать как негативные, так и&nbsp;позитивные изменения.
                </p>
                <p>
                    Это поможет компании оперативно проводить мероприятия для снижения негативного воздействия
                    на&nbsp;окружающую среду и&nbsp;принимать наилучшие решения, которые способствуют восстановлению
                    биоразнообразия и&nbsp;оздоровлению экосистем.
                </p>
            </BaseSidebar>
        </MainSection>
    </div>
</template>

<script>
import BaseHero from '@/layout/BaseHero.vue'
import MainSection from '@/layout/MainSection'
// import SectionWhite from '@/layout/SectionWhite.vue'
import BaseTextBlock from '@/components/BaseTextBlock.vue'
import BaseSidebar from '@/components/BaseSidebar'
import BaseTextQuotes from '@/components/BaseTextQuotes.vue'

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
    components: {
        BaseHero,
        BaseTextQuotes,
        // SectionWhite,
        BaseTextBlock,
        MainSection,
        BaseSidebar,
        //     BaseTooltip,
        //     BaseDropdownInfo,
        //     BaseCollageInfo,
        //     BaseNumberBlock
    },
    data() {
        return {
            heroDescr: 'Как оценить состояние экосистемы? Как отличить естественные процессы в&nbsp;сообществе живых организмов от&nbsp;изменений, которые происходят под влиянием антропогенных и&nbsp;техногенных факторов? &laquo;Норникель&raquo; уделяет большое внимание сохранению биоразнообразия, и&nbsp;для него это важные вопросы. Чтобы получить на&nbsp;них ответ и&nbsp;эффективно отслеживать изменения, компания поручила учёным разработать показатель для оценки состояния экосистем. И&nbsp;учёные разработали для компании Интегральный показатель состояния экосистем, сокращённо&nbsp;&mdash; ИПСЭ.'
        }
    },
    mounted() {
        this.$nextTick(function () {
            this.scrollAnimation();
        })
    },
    methods: {
        scrollMobile() {
            const collageItems = Array.from(document.querySelectorAll(".scroll-bg.active"))

            collageItems.forEach((elem) => {
                elem.css('background-position', '0px ' + document.scrollTop() + 'px')
            })
        },
        scrollAnimation() {
            // const collageItems = Array.from(document.querySelectorAll(".text-block__wrap"));
            // collageItems.forEach((elem) => {

            //     this.oneScrollTrigger = gsap.fromTo(elem,
            //         {
            //             y: 50,
            //         },
            //         {
            //             y: 0,
            //             duration: 1,
            //             scrollTrigger: {
            //                 start: '0% 100%',
            //                 end: 'bottom 75%',
            //                 trigger: elem,
            //                 scrub: true,
            //                 // markers: true,
            //             },
            //         });
            // });

            // const sidebarItems = Array.from(document.querySelectorAll(".sidebar"));
            // sidebarItems.forEach((elem) => {
            //     this.twoScrollTrigger = gsap.fromTo(elem,
            //         {
            //             y: 50,
            //         },
            //         {
            //             y: 0,
            //             duration: 1,
            //             scrollTrigger: {
            //                 start: '0% 100%',
            //                 end: 'bottom 75%',
            //                 trigger: elem,
            //                 // markers: true,
            //                 scrub: true,
            //             },
            //         });
            // });

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
                    start: () => "+=100%",
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
.indicator {
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
            background-size: contain;
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
                    background-position: bottom;
                    background-size: contain;

                    @media (max-width: 768px) {
                        background-position: bottom;
                        position: absolute;
                        background-size: 100%;
                    }
                }
            }

            &.bg-1 {
                z-index: 3;
                background-image: url(../../public/img/indicator-1.jpg);
            }

            &.bg-2 {
                z-index: 2;
                background-image: url(../../public/img/indicator-2.jpg);
            }

            &.bg-3 {
                z-index: 1;
                background-image: url(../../public/img/indicator-3.jpg);
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

            .text-block__wrap {
                width: 100%;
            }
        }
    }

    &__block {
        padding-bottom: 31rem;
        background-position: bottom;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(../../public/img/indicator-deer.png);

        @supports (background-image: url(../../public/img/indicator-deer.webp)) {
            background-image: url(../../public/img/indicator-deer.webp);
        }
    }

    &__schedule {
        display: block;
        margin: 0 auto;
        width: 68.34rem;
        height: 36.53rem;

        @media (max-width: 768px) {
            width: 100%;
            height: auto;
        }
    }

    &__drop {
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 68.34rem;
        height: 23.473rem;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(../../public/img/indicator-drop.png);

        @supports (background-image: url(../../public/img/indicator-drop.webp)) {
            background-image: url(../../public/img/indicator-drop.webp);
        }

        @media (max-width: 768px) {
            width: 90.134rem;
            height: 220rem;
            background-image: url(../../public/img/indicator-drop-mobile.png);
        }

        &-wrap {
            width: 34.1rem;

            @media (max-width: 768px) {
                width: 100%;
            }
        }

        &-text {
            width: 24.792rem;
            color: var(--coppre-text, #A46A32);
            font-size: 1.25rem;
            font-weight: 600;
            line-height: 130%;

            @media (max-width: 768px) {
                width: 53%;
                margin: 0 auto;
                font-size: 4.26667rem;
                text-align: center;
                position: relative;
                top: -26rem;
            }
        }
    }
}
</style>