<template>
    <div class="main-page">
        <BaseHero :isButton="true"/>
        <main id="main">
            <section class="main-page__top">
                <div class="main-page__top-left">
                    <div class="main-page__top-descr">
                        <span v-if="lang === 'ru'">
                            &laquo;Норникель&raquo; известен во&nbsp;всём мире как крупнейший производитель палладия и&nbsp;никеля. Мы&nbsp;работаем в&nbsp;северных широтах нашей страны&nbsp;&mdash; там, где экосистема особенно хрупка и&nbsp;уязвима. Вот почему в&nbsp;последние
                        годы компания всё больше внимания уделяет экологическим проектам и&nbsp;заботится о&nbsp;биоразнообразии.
                        </span>
                        <span v-else>
                            Nornickel is&nbsp;known as&nbsp;the world&rsquo;s largest producer of&nbsp;high-grade nickel and palladium. We&nbsp;operate in&nbsp;the Russian North where the ecosystems are especially fragile and vulnerable. That is&nbsp;why in&nbsp;recent years, we&nbsp;have paid increasing attention to&nbsp;our environmental projects and efforts to&nbsp;conserve biodiversity.
                        </span>
                    </div>
                    <div class="main-page__top-text" id="map">
                        <span v-if="lang === 'ru'">
                            Изучая раздел за&nbsp;разделом, соберите карту проектов &laquo;Норникеля&raquo; по&nbsp;сохранению экосистем.
                        </span>
                        <span v-else>
                            By&nbsp;navigating from section to&nbsp;section, you will be&nbsp;able to&nbsp;compile a&nbsp;map of&nbsp;Nornickel&rsquo;s ecosystem conservation projects.
                        </span>
                    </div>
                </div>
                <div class="main-page__top-right">
                    <div class="main-page__top-info">
                        <span v-if="lang === 'ru'">
                            Собрав карту целиком, вы&nbsp;сможете скачать её&nbsp;в&nbsp;формате постера
                        </span>
                        <span v-else>
                            A completed map can be downloaded as a poster
                        </span>
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
                    <div class="main-page__map-item-time">{{lang === 'ru' ? item.time : item.timeEn}}</div>
                    <div class="main-page__map-item-title" v-html="lang === 'ru' ? item.title : item.titleEn"></div>
                    <picture>
                        <source media="(max-width: 768px)" :srcset="`img/main-map-${item.id}-mobile-active.jpg`">
                        <img :src="`img/main-map-${item.id}-active.jpg`" alt="">
                    </picture>
                    
                    <picture>
                        <source media="(max-width: 768px)" :srcset="`img/main-map-${item.id}-mobile.jpg`">
                        <img class="notActive" :src="`img/main-map-${item.id}.jpg`" alt="">
                    </picture>
                </a>
            </section>

            <section class="main-page__bottom">
                <a href="poster_Nornickel.pdf" download v-if="store.length >= 10 && lang === 'ru'" class="main-page__bottom-link">
                        Скачать карту в PDF
                </a>
                <a href="poster_Nornickel_.pdf" download v-if="store.length >= 10 && lang === 'en'" class="main-page__bottom-link">
                        Download map PDF
                </a>
                <div class="main-page__bottom-title">
                    <span v-if="lang === 'ru'">
                        Сохранение биоразнообразия
                    </span>
                    <span v-else>
                        Biodiversity conservation
                    </span>
                </div>
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
                    questionEn: 'Why is it important to conserve biodiversity?',
                    answer: "<p class=mb-10>Кропотливо созданные природой взаимосвязи между животными и&nbsp;растительными организмами обеспечивают условия, благодаря которым на&nbsp;планете формируется климат и&nbsp;продолжается жизнь.</p><p class=mb-10>Экосистемы — подвижные механизмы, способные адаптироваться ко&nbsp;внешним угрозам. В&nbsp;этом им помогает разнообразие включённых в&nbsp;них видов: каждый участник вносит свой вклад, порой не видимый глазу, но&nbsp;ощутимый для&nbsp;всей «сети жизни». Выпадение даже одного звена может привести к&nbsp;распаду всей системы.</p><p class=mb-10>Изменение человеком естественных природных экосистем наносит ощутимый удар по экологическому равновесию природных территорий. После того как человек преобразовал большую часть суши, природный баланс «пошатнулся» и&nbsp;начались процессы, связанные с&nbsp;изменением климата.</p><p>Стремясь сохранить первозданную природу и&nbsp;ответственно относясь к&nbsp;тому, какой след оставляем на&nbsp;планете, мы поддерживаем безопасное и&nbsp;щедрое природное окружение и&nbsp;обеспечиваем собственное выживание как биологического вида.</p>",
                    answerEn: "<p class=mb-10>Plant-animal relationship carefully designed by nature help maintain climate and preserve life on the Earth. </p><p class=mb-10>Ecosystems continuously evolve and adapt to external threats. Their resilience is rooted in their diversity, as each species makes a sizeable, albeit often inconspicuous contribution to the entire web of life. A single link missing may disrupt the whole chain.</p><p class=mb-10>Human activities impact natural ecosystems, causing significant damage to the environmental balance. Once humans have transformed most of lands, the balance was broken, giving rise to processes linked to climate change. </p><p>By aiming to preserve the pristine beauty of nature and assuming responsibility for the legacy we leave behind, we endeavour to safeguard a sustainable environment and abundant natural resources to make sure humans survive as a biological species.</p>",
                    isOpen: false,
                },
                {
                    question: "Какие угрозы для биоразнообразия существуют сегодня?",
                    questionEn: 'What are the current threats to biodiversity?',
                    answer: "<div class=fqa-flex><div class=fqa-num>01</div><div class=fqa-text>Места обитания животных и&nbsp;растений нарушаются из-за изменения ландшафтов, строительства и&nbsp;движения транспорта, вытаптывания, токсичных веществ, используемых в&nbsp;промышленности и&nbsp;сельском хозяйстве. Меняется состав видов, целые популяции оказываются в&nbsp;изоляции от&nbsp;жизненно важных ресурсов, и&nbsp;их численность сокращается.</div></div><div class=fqa-flex><div class=fqa-num>02</div><div class=fqa-text>Местные виды, не имеющие иммунитета к новым инфекциям, заражаются от&nbsp;мигрирующих животных — переносчиков заболеваний.</div></div><div class=fqa-flex><div class=fqa-num>03</div><div class=fqa-text>Глобальное изменение климата смещает зоны расселения видов. Некоторые растения и&nbsp;животные оказываются в&nbsp;нетипичной для&nbsp;них среде обитания, где проявляют свойства инвазивных видов (от&nbsp;латинского invasio — «нападение», «набег»): конкурируют с&nbsp;«местными» и&nbsp;даже могут подавлять численность их популяций.</div></div><div class=fqa-flex><div class=fqa-num>04</div><div class=fqa-text>Промышленная деятельность увеличивает риск техногенных аварий и&nbsp;пожаров. Огонь и&nbsp;загрязнение среды нефтепродуктами и&nbsp;другими техническими жидкостями наносят ущерб природным экосистемам на обширных территориях.</div></div><div class=fqa-flex><div class=fqa-num>05</div><div class=fqa-text>Безответственный туризм приводит к&nbsp;неконтролируемым пожарам и&nbsp;загрязнению природных территорий бытовыми отходами.</div></div>",
                    answerEn: "<div class=fqa-flex><div class=fqa-num>01</div><div class=fqa-text>Changing landscapes, construction, vehicle traffic, trampling and use of toxic agents both in industry and agriculture all destroy plant and animal habitats. Species composition changes, and the entire populations shrink in size as they get isolated from vital resources.</div></div><div class=fqa-flex><div class=fqa-num>02</div><div class=fqa-text>Local animal species with no immunity to new infections get infected by migrating disease carriers.</div></div><div class=fqa-flex><div class=fqa-num>03</div><div class=fqa-text>Global climate change causes shifts in the geographic distribution of species. Some animals and plants move into non-typical habitats where they behave as invasive species by competing with and even reducing native populations.</div></div><div class=fqa-flex><div class=fqa-num>04</div><div class=fqa-text>04 Industrial activities increase the risk of man-made disasters and fires. Fires and spills of fuel and other industrial fluids cause vast damage to natural ecosystems.</div></div><div class=fqa-flex><div class=fqa-num>05</div><div class=fqa-text>Irresponsible tourism leads to uncontrolled fires and pollution of the environment with household waste.</div></div>",
                    isOpen: false,
                },
                {
                    question: "Зачем определять зону воздействия предприятий?",
                    questionEn: 'Why do&nbsp;we&nbsp;need to&nbsp;define facilities&rsquo; impact areas?',
                    answer: "<p class=mb-10>Изучая, что происходит с&nbsp;экосистемой внутри зоны воздействия и&nbsp;за&nbsp;её пределами, учёные формируют базу для&nbsp;наблюдений.</p><p class=mb-10>Новые исследования позволят увидеть изменения и вовремя отреагировать на&nbsp;нарушение природного равновесия. Также, определив зоны воздействия, можно оценить степень влияния предприятия на&nbsp;природное окружение и&nbsp;скорректировать его, если&nbsp;нужно.</p><p class=mb-10>Границы зоны воздействия подвижны: во&nbsp;время исследований учёные получают новые данные о&nbsp;состоянии видов и&nbsp;их поведении — и&nbsp;смещают проведённую границу в&nbsp;ту или&nbsp;иную сторону. Это называется уточнением зоны воздействия.</p>",
                    answerEn: "<p class=mb-10>Scientists gather data for subsequent monitoring as they study ecosystems within and outside the area of impact. </p><p class=mb-10>New research is key to identifying changes and quickly responding to any disruptions in the natural balance. By defining impact areas, we can also assess the scope of the facilities' environmental footprint and take corrective action if needed.</p><p>Impact areas can change as researchers receive new data on the state and behaviour of species and shift the delineated boundaries. This is called updating impact boundaries.</p>",
                    isOpen: false,
                },
                {
                    question: "Как «Норникель» изучает состояние биоразнообразия в&nbsp;дивизионах?",
                    questionEn: 'How does Nornickel study biodiversity across its divisions?',
                    answer: "<p class=mb-10>В&nbsp;ходе научных экспедиций биологи изучают флору и&nbsp;фауну возле предприятий, а&nbsp;также на&nbsp;фоновых территориях за&nbsp;пределами зоны воздействия, где экосистемы сохранились в&nbsp;первозданном, или эталонном, виде. Данные о&nbsp;составе видов в&nbsp;обеих зонах становятся базой для&nbsp;дальнейших наблюдений.</p><p>Через год проводят новые исследования, сравнивают данные с&nbsp;прошлыми, отдельно анализируя зону воздействия и&nbsp;фон и&nbsp;сравнивая их. Такое сравнение необходимо, поскольку изменения в&nbsp;окружающей природной среде не&nbsp;всегда результат воздействия предприятий. Они могут быть вызваны также естественными природными циклами, о&nbsp;чём и&nbsp;расскажет эталонная зона. Если возле предприятий фиксируются нарушения, несвойственные фону, это сигнал — пора сокращать определённые виды негативного воздействия и&nbsp;восстанавливать экосистемы.</p>",
                    answerEn: "<p class=mb-10>During expeditions biologists research flora and fauna around the sites and on background territories outside the area of impact, where ecosystems remain pristine and can serve as a benchmark. Data on the composition of species in both areas form a basis for ongoing monitoring.</p><p>In a year, the Company conducts new research, compares results against historical data, and makes a separate benchmarking analysis for the area of impact and the background area. This benchmarking is needed as industrial operations are not always the cause of changes in the environment. Such changes may result from natural cycles, which can be tracked in the background area. Disturbances around industrial sites which are not typical of the background area are a signal to reduce certain negative impacts and start restoring ecosystems.</p>",
                    isOpen: false,
                },
                {
                    question: "Что делает «Норникель», чтобы сохранить биоразнообразие?",
                    questionEn: 'What does Nornickel do to conserve biodiversity?',
                    answer: "",
                    mainPageItem: true,
                    isOpen: false,
                },
            ],
            links: [
                {
                    id: 1,
                    title: 'Норильский <br/>дивизион',
                    titleEn: 'Norilsk <br/>Division',
                    timeEn: '8 minutes',
                    time: '8 минут',
                    link: '/norilsk-division',
                    big: true
                },
                {
                    id: 2,
                    title: 'Кольский <br/>дивизион',
                    titleEn: 'Kola <br/>Division',
                    timeEn: '9 minutes',
                    time: '9 минут',
                    link: '/kola-division'
                },
                {
                    id: 3,
                    title: 'Забайкальский <br/>дивизион ',
                    titleEn: 'Trans-Baikal <br/>Division',
                    timeEn: '8 minutes',
                    time: '8 минут',
                    link: '/transbaikal-division'
                },
                {
                    id: 4,
                    title: 'Норильская <br/>Экспедиция',
                    titleEn: 'Norilsk <br/>Expedition',
                    timeEn: '6 minutes',
                    time: '6 минут',
                    link: '/expedition'
                },
                {
                    id: 5,
                    title: 'Научная <br/>Экспедиция',
                    titleEn: 'Scientific <br/>Expedition',
                    timeEn: '12 minutes',
                    time: '12 минут',
                    link: '/big-expedition',
                    big: true
                },
                {
                    id: 6,
                    title: 'Вдохнуть жизнь <br/>в озеро',
                    titleEn: 'Revitalising <br/>Lake Pyasino',
                    timeEn: '5 minutes',
                    time: '5 минут',
                    link: '/pyasino'            
                },
                {
                    id: 7,
                    title: 'Спасение <br/>белых медведей',
                    titleEn: 'Protecting <br/>polar bears',
                    timeEn: '10 minutes',
                    time: '10 минут',
                    link: '/white-bears',
                    big: true
                },
                {
                    id: 8,
                    title: 'Загадочный <br/>ИПСЭ',
                    titleEn: 'Integral Indicator <br/>of Ecosystem <br/>Health',
                    timeEn: '9 minutes',
                    time: '9 минут',
                    link: '/indicator'
                },
                {
                    id: 9,
                    title: 'Сокровищницы <br/>биоразнообразия',
                    titleEn: 'Biodiversity <br/>havens',
                    timeEn: '15 minutes',
                    time: '15 минут',
                    link: '/treasures-of-biodiversity'
                },
            ],
            store: localStorage
        }
    },
    computed: {
        lang() {
            return this.$store.state.lang
        }
    },
    methods: {
        isBig(item) {
            return item ? 'main-page__map-item_big' : ''
        },
        isActive(item) {
            return this.store.getItem((item.link).slice(1)) ? `main-page__map-item-${item.id}_active` : ''
        }
    },
};
</script>

<style lang="scss">
.main-page {
    .hero {
        background-position: bottom;
        background-image: url(../../public/img/hero-main.png);

        @supports (background-image: url(../../public/img/hero-main.webp)) {
            background-image: url(../../public/img/hero-main.webp);
        }

        @media (max-width: 768px) {
            background-image: url(../../public/img/hero-main-mobile.png);

            @supports (background-image: url(../../public/img/hero-main-mobile.webp)) {
                background-image: url(../../public/img/hero-main-mobile.webp);
            }
        }

        @media (max-height: 53vw) and (min-width: 769px) {
            background-position: top;
            min-height: 130vh;
            // background-image: url(../../public/img/hero-main-size.png);

            // @supports (background-image: url(../../public/img/hero-main-size.webp)) {
            //     background-image: url(../../public/img/hero-main-size.webp);
            // }
        }
        &_en {
            background-image: url(../../public/img/hero-main-en.png);

            @supports (background-image: url(../../public/img/hero-main-en.webp)) {
                background-image: url(../../public/img/hero-main-en.webp);
            }

            @media (max-height: 53vw) and (min-width: 769px) {
                background-position: top;
                min-height: 130vh;
            }

            @media (max-width: 768px) {
            background-image: url(../../public/img/hero-main-en-mobile.png);

            @supports (background-image: url(../../public/img/hero-main-en-mobile.webp)) {
                background-image: url(../../public/img/hero-main-en-mobile.webp);
            }
        }
        }
        &-strip {
            display: none;
        }
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100%;
            min-height: 100vh;
        }
        &__wrap {
            width: unset;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

    }
    &__top {
        padding: 2.36rem 13.2rem 2.639rem 5.2086rem;
        display: flex;
        justify-content: space-between;
        @media (max-width: 768px) {
            padding: 4.845rem 9.5rem 7.83rem 9.5rem;
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
                margin-bottom: 8.2rem;
                width: unset;
                font-size: 4.53334rem;
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
                padding-left: 2.6666rem;
                font-size: 4.8rem;
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
            width: 25vw;
            height: 34.7223rem;
            background-position: center;
            background-repeat: no-repeat;
            background-size: 100%; 
            transition: all .3s ease;
            font-size: 1.527777rem;
            font-weight: 400;
            line-height: 110%;
            padding: 0 0 4rem 2rem;
            align-items: flex-end;
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
                width: 50vw;
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

            img {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: -1;
                transition: all .3s ease;
            }
            
            &-1,
            &-2,
            &-3,
            &-4,
            &-5,
            &-6,
            &-7,
            &-8,
            &-9 {
                &_active .notActive {
                        opacity: 0;
                }

                @media(min-width: 769px) {
                    &:hover .notActive {
                        opacity: 0;
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
                width: 74rem;
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