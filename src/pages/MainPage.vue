<template>
    <div class="main-page">
        <BaseHero :img="'img/hero-main.png'" :imgMobile="'img/hero-main-mobile.png'" :isButton="true"/>
        <main id="main">
            <section class="main-page__top">
                <div class="main-page__top-left">
                    <div class="main-page__top-descr">
                        &laquo;Норникель&raquo; известен во&nbsp;всём мире как крупнейший производитель палладия и&nbsp;никеля. Мы&nbsp;работаем в&nbsp;северных широтах нашей страны&nbsp;&mdash; там, где экосистема особенно хрупка и&nbsp;уязвима. Вот почему в&nbsp;последние
                        годы компания всё больше внимания уделяет экологическим проектам и&nbsp;заботится о&nbsp;биоразнообразии.
                    </div>
                    <div class="main-page__top-text">
                        Изучая раздел за&nbsp;разделом, соберите карту проектов &laquo;Норникеля&raquo; по&nbsp;сохранению экосистем.
                    </div>
                </div>
                <div class="main-page__top-right">
                    <div class="main-page__top-info">
                        Собрав карту целиком, вы&nbsp;сможете скачать её&nbsp;в&nbsp;формате постера
                    </div>
                    <img src="img/map-info.png" alt="" />
                </div>
            </section>
        
            <section class="main-page__map">
                <a v-for="item in links" 
                    :href="item.link" 
                    :key="item.id" 
                    class="main-page__map-item" 
                    :class="[`main-page__map-item-${item.id}`, isBig(item.big), isActive(item)]">
                    <div class="main-page__map-item-time">{{item.time}}</div>
                    <div class="main-page__map-item-title" v-html="item.title"></div>
                    </a>
            </section>
        
            <section class="main-page__bottom">
                <a href="file-test.pdf" download v-if="store.length === 10" class="main-page__bottom-link">Скачать карту в PDF</a>
                <div class="main-page__bottom-title">Сохранение биоразнообразия</div>
                <BaseAccordion class="main-page__result-faq" v-for="faq in faqs" :key="faq.id" :faq="faq" />
            </section>
        </main>
    </div>
</template>

<script>
import BaseHero from "@/layout/BaseHero.vue";
import BaseAccordion from "@/components/BaseAccordion.vue";
export default {
    components: {
        BaseHero,
        BaseAccordion,
    },
    data() {
        return {
            heroDescr: "Узнайте, какие подходы использует &laquo;Норникель&raquo; для сохранения природных экосистем, какая экотехнология восстановления водоёмов оказалась наиболее перспективной, где найти биологические реликты и&nbsp;как &laquo;Норникель&raquo; спасает жизни королей Арктики.",
            faqs: [{
                    question: "Почему важно сохранять биологическое разнообразие?",
                    answer: "<p class=mb-10>Кропотливо созданные природой взаимосвязи между животными и растительными организмами обеспечивают условия, благодаря которым на планете формируется климат и продолжается жизнь.</p><p class=mb-10>Экосистемы — подвижные механизмы, способные адаптироваться ко внешним угрозам. В этом им помогает разнообразие включённых в них видов: каждый участник вносит свой вклад, порой не видимый глазу, но ощутимый для всей «сети жизни». Выпадение даже одного звена может привести к распаду всей системы.</p><p class=mb-10>Изменения человеком естественных природных экосистем наносит ощутимый удар по экологическому равновесию природных территорий. После того как человек преобразовал большую часть суши, природный баланс «пошатнулся» и начались процессы, связанные с изменением климата.</p><p>Стремясь сохранить первозданную природу и ответственно относясь к тому, какой след оставляем на планете, мы поддерживаем безопасное и щедрое природное окружение и обеспечиваем собственное выживание как биологического вида.</p>",
                    isOpen: false,
                },
                {
                    question: "Какие угрозы для биоразнообразия существуют сегодня?",
                    answer: "<div class=fqa-flex><div class=fqa-num>01</div><div class=fqa-text>Места обитания животных и растений нарушаются из-за изменения ландшафтов, строительства и движения транспорта, вытаптывания, токсичных веществ, используемых в промышленности и сельском хозяйстве. Меняется состав видов, целые популяции оказываются в изоляции от жизненно важных ресурсов, и их численность сокращается.</div></div><div class=fqa-flex><div class=fqa-num>02</div><div class=fqa-text>Местные виды, не имеющие иммунитета к новым инфекциям, заражаются от мигрирующих животных — переносчиков заболеваний.</div></div><div class=fqa-flex><div class=fqa-num>03</div><div class=fqa-text>Глобальное изменение климата смещает зоны расселения видов. Некоторые растения и животные оказываются в нетипичной для них среде обитания, где проявляют свойства инвазивных видов (от латинского invasio — «нападение», «набег»): конкурируют с «местными» и даже могут подавлять численность их популяций.</div></div><div class=fqa-flex><div class=fqa-num>04</div><div class=fqa-text>Промышленная деятельность увеличивает риск техногенных аварий и пожаров. Огонь и загрязнение среды нефтепродуктами и другими техническими жидкостями наносят ущерб природным экосистемам на обширных территориях.</div></div><div class=fqa-flex><div class=fqa-num>05</div><div class=fqa-text>Безответственный туризм приводит к неконтролируемым пожарам и загрязнению природных территорий бытовыми отходами.</div></div>",
                    isOpen: false,
                },
                {
                    question: "Зачем определять зону воздействия предприятий?",
                    answer: "<p class=mb-10>Изучая, что происходит с экосистемой внутри зоны воздействия и за её пределами, учёные формируют базу для наблюдений.</p><p class=mb-10>Новые исследования позволят увидеть изменения и вовремя отреагировать на нарушение природного равновесия. Также, определив зоны воздействия, можно оценить степень влияния предприятия на природное окружение и скорректировать его, если нужно.</p><p class=mb-10>Границы зоны воздействия подвижны: во время исследований учёные получают новые данные о состоянии видов и их поведении — и смещают проведённую границу в ту или иную сторону. Это называется уточнением зоны воздействия.</p>",
                    isOpen: false,
                },
                {
                    question: "Как «Норникель» изучает состояние биоразнообразия в дивизионах?",
                    answer: "<p class=mb-10>В ходе научных экспедиций биологи изучают флору и фауну возле предприятий, а также на фоновых территориях за пределами зоны воздействия, где экосистемы сохранились в первозданном, или эталонном, виде. Данные о составе видов в обеих зонах становятся базой для дальнейших наблюдений.</p><p>Через год проводят новые исследования, сравнивают данные с прошлыми, отдельно анализируя зону воздействия и фон и сравнивая их. Такое сравнение необходимо, поскольку изменения в окружающей природной среде не всегда результат воздействия предприятий. Они могут быть вызваны также естественными природными циклами, о чём и расскажет эталонная зона. Если возле предприятий фиксируются нарушения, несвойственные фону, это сигнал — пора сокращать определённые виды негативного воздействия и восстанавливать экосистемы.</p>",
                    isOpen: false,
                },
                {
                    question: "Что делает «Норникель», чтобы сохранить биоразнообразие?",
                    answer: "",
                    mainPageItem: true,
                    isOpen: false,
                },
            ],
            links: [
                {
                    id: 1,
                    title: 'Норильский <br/>дивизион',
                    time: '8 минут',
                    link: '/norilsk-division',
                    big: true
                },
                {
                    id: 2,
                    title: 'Кольский <br/>дивизион',
                    time: '9 минут',
                    link: '/kola-division',
                },
                {
                    id: 3,
                    title: 'Забайкальский <br/>дивизион ',
                    time: '8 минут',
                    link: '/transbaikal-division',
                },
                {
                    id: 4,
                    title: 'Норильская <br/>Экспедиция',
                    time: '6 минут',
                    link: '/expedition',
                },
                {
                    id: 5,
                    title: 'Научная <br/>Экспедиция',
                    time: '12 минут',
                    link: '/big-expedition',
                    big: true
                },
                {
                    id: 6,
                    title: 'Вдохнуть жизнь <br/>в озеро',
                    time: '5 минут',
                    link: '/pyasino',                
                },
                {
                    id: 7,
                    title: 'Спасение <br/>белых медведей',
                    time: '10 минут',
                    link: '/white-bears',
                    big: true
                },
                {
                    id: 8,
                    title: 'Загадочный <br/>ИПСЭ',
                    time: '9 минут',
                    link: '/indicator',
                },
                {
                    id: 9,
                    title: 'Сокровищницы <br/>биоразнообразия',
                    time: '15 минут',
                    link: '/treasures-of-biodiversity',
                },
            ],
            store: sessionStorage
        }
    },
    watch: {
        store: {
            handler() {},
            deep: true
        }
    },
    methods: {
        isBig(item) {
            return item ? 'main-page__map-item_big' : ''
        },
        isActive(item) {
            return this.store.getItem(item.link) ? `main-page__map-item-${item.id}_active` : ''
        }
    },
};
</script>

<style lang="scss">
.main-page {
    .hero {
        background-position: top center;
        &-strip {
            display: none;
        }
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100%;
            min-height: 100vh;
            padding: 30vh 0 0 0;

            @media(min-width: 1441px) {
                padding: 17vw 0 0 0;
            }
        }
        &__wrap {
            width: unset;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        // &__descr {
        //     text-align: center;
        //     width: 411px;
        //     font-size: 18px;
        //     @media(min-width: 1441px) {
        //         font-size: 1.250vw;
        //         width: 29vw;
        //     }
        // }
        // &__title {
        //     color: #d38235;
        //     font-weight: 600;
        //     line-height: 120%;
        //     text-transform: uppercase;
        //     text-align: center;
        //     font-size: 36px;
        //     margin-bottom: 25px;
        // }
    }
    &__top {
        padding: 2.36rem 13.2rem 2.639rem 5.2086rem;
        display: flex;
        justify-content: space-between;

        @media (max-width: 768px) {
            padding: 26px 9.5rem 42px 9.5rem;
        }
        &-descr {
            padding: 0.56rem 0 0 1.945rem;
            width: 45rem;
            margin-bottom: 5rem;
            font-size: 1.25rem;
            font-weight: 300;
            line-height: 130%;

            @media (max-width: 768px) {
                padding: 0;
                margin-bottom: 44px;
                width: unset;
                font-size: 17px;
            }
        }
        &-text {
            padding-left: 1.95rem;
            border-left: 1px solid var(--Gray-1, #333);
            color: var(--copper, #d38235);
            font-size: 1.528rem;
            font-weight: 300;
            line-height: 130%;
            width: 40rem;

            @media (max-width: 768px) {
                padding-left: 10px;
                font-size: 18px;
                width: unset;
            }
        }
        &-info {
            font-size: 1.042rem;
            font-weight: 300;
            line-height: 130%;
            width: 11.54rem;
            margin-bottom: 0.903rem;
        }
        img {
            width: 11.46rem;
            height: 7.014rem;
        }

        &-right {
            @media (max-width: 768px) {
                display: none;
            }
        }
    }
    &__map {
        display: flex;
        flex-wrap: wrap;
        &-item {
            position: relative;
            display: flex;
            width: 25rem;
            height: 34.7223rem;
            background-position: center;
            background-repeat: no-repeat;
            background-size: 100%; 
            transition: all .3s ease;
            font-size: 1.527777rem;
            font-weight: 400;
            line-height: 110%;
            padding: 0 0 4rem 2rem;
            align-items: end;

            @media(max-width: 768px) {
                width: 100%;
                height: 138.667rem;
                padding: 0 0 5.34rem 5.34rem;
                font-size: 4.8rem;
            }

            &:hover {
                color: #D38235;

                &::after {
                    opacity: 1;
                }
            }

            &::after {
                opacity: 0;
                position: absolute;
                transition: all .3s ease;
                content: '';
                width: 1.667rem;
                height: 1.667rem;
                right: 2.4rem;
                bottom: 2.4rem;
                background-size: contain;
                background-repeat: no-repeat;
                background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3e%3cpath d='M3.20312 20.4563L21.9461 1.71338' stroke='%23333333' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath d='M22 22.6357L22 1.63574L1 1.63574' stroke='%23333333' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e");
            
                @media(max-width: 768px) {
                    display: none;
                }
            }

            
            &_big {
                width: 50rem;
                @media(max-width: 768px) {
                    width: 100%;
                }
            }

            &-time {
                position: absolute;
                top: 2.9rem;
                right: 2.45rem;
                font-size: 1.319445rem;
                font-weight: 300;

                @media(max-width: 768px) {
                    top: 6.6666rem;
                    right: 5.07rem;
                    font-size: 5.06667rem;
                }
            }

            
            &-1 {
                background-image: url(../../public/img/main-map-1-mobile.png);
                &_active {
                    background-image: url(../../public/img/main-map-1-mobile-active.png);
                }

                @media(min-width: 769px) {
                    background-image: url(../../public/img/main-map-1.png);

                    &:hover,
                    &_active {
                        background-image: url(../../public/img/main-map-1-active.png);
                    }
                }
            }

            &-2 {
                background-image: url(../../public/img/main-map-2-mobile.png);

                &_active {
                    background-image: url(../../public/img/main-map-2-mobile-active.png);
                }
                @media(min-width: 769px) {
                    background-image: url(../../public/img/main-map-2.png);

                    &:hover,
                    &_active {
                        background-image: url(../../public/img/main-map-2-active.png);
                    }
                }
            }

            &-3 {
                background-image: url(../../public/img/main-map-3-mobile.png);
                &_active {
                    background-image: url(../../public/img/main-map-3-mobile-active.png);
                }
                @media(min-width: 769px) {
                    background-image: url(../../public/img/main-map-3.png);

                    &:hover,
                    &_active {
                        background-image: url(../../public/img/main-map-3-active.png);
                    }
                }
            }

            &-4 {
                background-image: url(../../public/img/main-map-4-mobile.png);
                &_active {
                    background-image: url(../../public/img/main-map-4-mobile-active.png);
                }
                @media(min-width: 769px) {
                    background-image: url(../../public/img/main-map-4.png);

                    &:hover,
                    &_active {
                        background-image: url(../../public/img/main-map-4-active.png);
                    }
                }
            }

            &-5{
                background-image: url(../../public/img/main-map-5-mobile.png);
                &_active {
                    background-image: url(../../public/img/main-map-5-mobile-active.png);
                }
                @media(min-width: 769px) {
                    background-image: url(../../public/img/main-map-5.png);

                    &:hover,
                    &_active  {
                        background-image: url(../../public/img/main-map-5-active.png);
                    }
                }
            }

            &-6 {
                background-image: url(../../public/img/main-map-6-mobile.png);
                &_active {
                    background-image: url(../../public/img/main-map-6-mobile-active.png);
                }
                @media(min-width: 769px) {
                    background-image: url(../../public/img/main-map-6.png);

                    &:hover,
                    &_active {
                        background-image: url(../../public/img/main-map-6-active.png);
                    }
                }
            }

            &-7 {
                background-image: url(../../public/img/main-map-7-mobile.png);
                &_active {
                    background-image: url(../../public/img/main-map-7-mobile-active.png);
                }
                @media(min-width: 769px) {
                    background-image: url(../../public/img/main-map-7.png);

                    &:hover,
                    &_active {
                        background-image: url(../../public/img/main-map-7-active.png);
                    }
                }
            }

            &-8 {
                background-image: url(../../public/img/main-map-8-mobile.png);
                &_active {
                    background-image: url(../../public/img/main-map-8-mobile-active.png);
                }
                @media(min-width: 769px) {
                    background-image: url(../../public/img/main-map-8.png);

                    &:hover,
                    &_active {
                        background-image: url(../../public/img/main-map-8-active.png);
                    }
                }
            }

            &-9 {
                background-image: url(../../public/img/main-map-9-mobile.png);
                &_active {
                    background-image: url(../../public/img/main-map-9-mobile-active.png);
                }
                @media(min-width: 769px) {
                    background-image: url(../../public/img/main-map-9.png);

                    &:hover,
                    &_active {
                        background-image: url(../../public/img/main-map-9-active.png);
                    }
                }
            }
        }
    }
    &__bottom {
        padding: 3.4722rem 8.19445rem 5.20834rem 8.19445rem;
        background: #f7f6f2;
        @media (max-width: 768px) {
            padding: 11.7334rem 5.3334rem 0 5.3334rem;
        }
        &-link {
            display: block;
            margin: 0 auto;
            width: 19.2366rem;
            border: 1px solid #000000;
            padding: 0.8rem 3.4722rem;
            border-radius: 50px;
            font-size: 1.25rem;
            color: #626261;
            font-weight: 400;
            line-height: 130%;

            @media (max-width: 768px) {
                font-size: 4.8rem;
                width: 73.88rem;
                padding: 3rem 14rem;
            }
        }

        &-title {
            margin-top: 8.3333rem;
            margin-bottom: 4.16666rem;
            font-size: 2.36111rem;
            font-weight: 600;
            line-height: 130%;

            @media (max-width: 768px) {
                margin-bottom: 8.5334rem;
                margin-top: 24rem;
                font-size: 7.46667rem;
            }
        }
        .faq {
            @media (max-width: 768px) {
                margin: 0;
            }
        }
    }
    &__result-faq {
        border-top: 0.5px solid var(--grey, #626261);
        .answer {
            padding-left: 0.83334rem;
            padding-right: 9.0278rem;
            @media (max-width: 768px) {
                padding-left: 0;
                padding-right: 0;
            }
        }
    }
    .fqa-flex {
        display: flex;
        gap: 2.2223rem;
        margin-bottom: 1.389rem;
        .clue__hidden {
            @media (min-width: 769px) {
                width: 34.7rem;
                left: 21%;
            }
        }
    }
    .fqa-num {
        font-size: 1.5278rem;
        font-weight: 600;
        line-height: 130%;
        @media (max-width: 769px) {
            font-size: 5.86667rem;
        }
    }
    .fqa-text {
        font-size: 1.25rem;
        font-weight: 300;
        line-height: 130%;
        @media (max-width: 769px) {
            font-size: 4.8rem;
        }
    }
}
</style>
