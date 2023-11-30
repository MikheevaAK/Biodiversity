<template>
    <div class="treasures-2-container__wrap">
        <div  v-if="lang === 'ru'" class="treasures-2-container">

            <div class="treasures-2-item treasures-2-item_1">
                <div class="treasures-2-item__title">Росянка</div>
                <div class="treasures-2-item__descr">
                    <p>
                        Листья этого растения покрыты капельками клейкого сока. Садящиеся на&nbsp;них насекомые оказываются
                        в&nbsp;ловушке: они прилипают и&nbsp;уже не&nbsp;могут улететь. После этого росянка закручивает
                        лист, полностью обволакивая свою жертву, и&nbsp;в&nbsp;течение нескольких дней переваривает добычу.
                    </p>
                </div>
            </div>

            <div class="treasures-2-item treasures-2-item_2">
                <div class="treasures-2-item__title">Живородящая ящерица</div>
                <div class="treasures-2-item__descr">
                    Благодаря своей устойчивости к&nbsp;низким температурам этот вид ящерицы может обитать даже
                    в&nbsp;районе Полярного круга. Зимуют эти рептилии под землёй, забираясь в&nbsp;укрытия на&nbsp;глубину
                    до&nbsp;40&nbsp;см.
                </div>
            </div>

            <div class="treasures-2-item treasures-2-item_3">
                <div class="treasures-2-item__title">Калипсо луковичная</div>
                <div class="treasures-2-item__descr">
                    Один из&nbsp;10&nbsp;видов орхидей, произрастающих на&nbsp;территории заповедника. Своё название
                    растение получило в&nbsp;честь нимфы из&nbsp;древнегреческой мифологии&nbsp;&mdash; Калипсо.
                </div>
            </div>

            <div class="treasures-2-item treasures-2-item_4">
                <div class="treasures-2-item__title">Лебедь-кликун</div>
                <div class="treasures-2-item__descr">
                    В&nbsp;Лапландский заповедник эти птицы прилетают с&nbsp;мест зимовки в&nbsp;марте&nbsp;&mdash; начале
                    апреля. Холода им&nbsp;не&nbsp;страшны&nbsp;&mdash; главное, чтобы была открытая вода, где лебеди могут
                    кормиться. Эти птицы моногамны и&nbsp;образуют пару на&nbsp;всю жизнь.
                </div>
            </div>

            <div class="treasures-2-item treasures-2-item_5">
                <div class="treasures-2-item__title">Обыкновенный серый сорокопут</div>
                <div class="treasures-2-item__descr">
                    Эта крупная певчая птица&nbsp;&mdash; безжалостный охотник. Основу её&nbsp;рациона составляют мышевидные
                    грызуны, ящерицы и&nbsp;крупные насекомые. Пойманную добычу сорокопут может запасать впрок, нанизывая
                    жертв на&nbsp;острые сучки и&nbsp;шипы.
                </div>
            </div>

            <div class="treasures-2-item treasures-2-item_6">
                <div class="treasures-2-item__title">Дикий северный олень</div>
                <div class="treasures-2-item__descr">
                    Единственный вид оленей, у&nbsp;которого рога имеют как самцы, так и&nbsp;самки. В&nbsp;Лапландском
                    заповеднике обитает примерно 1000 этих животных. Чтобы пережить суровые зимы, олени на&nbsp;время
                    сбиваются в&nbsp;стада по&nbsp;100 и&nbsp;более особей.
                </div>
            </div>
        </div>
        <div v-else class="treasures-2-container treasures-2-container_en">

<div class="treasures-2-item treasures-2-item_1">
    <div class="treasures-2-item__title">Sundews</div>
    <div class="treasures-2-item__descr">
        <p>
            The leaves of this plant are topped with sticky secretions, which attract insects and entrap them with the mucilage, preventing their escape. After that, the leaves roll in to envelop and clog the prey, with the digestion process taking several days.
        </p>
    </div>
</div>

<div class="treasures-2-item treasures-2-item_2">
    <div class="treasures-2-item__title">Viviparous lizard</div>
    <div class="treasures-2-item__descr">
        Thanks to its exceptional hardiness to the cold, this species of lizard can survive even near the Arctic Circle. They spend winters underground, hibernating in soil layers up to 40 cm deep.
    </div>
</div>

<div class="treasures-2-item treasures-2-item_3">
    <div class="treasures-2-item__title">Calypso orchid</div>
    <div class="treasures-2-item__descr">
        It is one of the ten species of orchid growing in the reserve. The plant takes its name from the nymph Calypso in Greek mythology.
    </div>
</div>

<div class="treasures-2-item treasures-2-item_4">
    <div class="treasures-2-item__title">Whooper swan</div>
    <div class="treasures-2-item__descr">
        These birds arrive in the Lapland Nature Reserve in March and early April from their wintering sites. Not afraid of the cold, they need open water to feed. Whooper swans form monogamous pairs and mate for life.
    </div>
</div>

<div class="treasures-2-item treasures-2-item_5">
    <div class="treasures-2-item__title">Wild reindeer</div>
    <div class="treasures-2-item__descr">
        This large songbird species is a ruthless hunter. Small rodents, lizards, and large insects are the bulk of its prey. Sometimes great grey shrikes can store their prey by impaling it upon sharp branches and thorns.
    </div>
</div>

<div class="treasures-2-item treasures-2-item_6">
    <div class="treasures-2-item__title">Great grey shrike</div>
    <div class="treasures-2-item__descr">
        This is the only species of reindeer in which both males and females grow antlers. The Lapland Nature Reserve is home to around 1,000 of these animals. To survive the harsh winters, reindeer form temporary herds of 100 or more animals.
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
    computed: {
        lang() {
            return this.$store.state.lang
        }
    },
    methods: {
        scrollAnimation() {
            if (window.innerWidth > 768) {
                const panels = gsap.utils.toArray(".treasures-2-container .treasures-2-item");
                gsap.to(".treasures-2-container", {
                    xPercent: -9.2 * (panels.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".treasures-2",
                        pin: true,
                        start: "top 10%",
                        scrub: 1,
                        end: () => "+=" + (document.querySelector(".treasures-2-container").offsetWidth - window.innerWidth)
                    }
                });
            }
        }
    }
}
</script>


<style lang="scss">
.treasures-2 {
    position: relative;
    overflow: hidden;
    background-color: #F7F6F2;

    &-container {
        display: flex;
        width: 184rem;
        height: 38.12rem;
        background-image: url(../../public/img/treasures-scroll-2.png);
        background-repeat: no-repeat;
        background-size: 100%;

        @media (max-width: 768px) {
            width: 652rem;
            height: 100%;
            background-image: url(../../public/img/treasures-scroll-2-mobile.png);

            &__wrap {
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

        &_en {
            background-image: url(../../public/img/treasures-scroll-2-en.png);
            @supports (background-image: url(../../public/img/treasures-scroll-2-en.webp)) {
                background-image: url(../../public/img/treasures-scroll-2-en.webp);
            }
        }
    }

    &-item {
        @media (max-width: 768px) {
            height: 139.467rem;
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

        &__descr {
            font-size: 1.0417rem;
            font-weight: 300;
            line-height: 130%;

            @media (max-width: 768px) {
                font-size: 4rem;
            }
        }

        &_1 {
            width: 27.889rem;
            padding: 4.1rem 3.795rem 0 3.5rem;

            @media (max-width: 768px) {
                width: 105rem;
                padding: 12rem 11.46rem 0 16rem;
            }
        }

        &_2 {
            width: 20.487rem;
            padding: 13.403rem 4.1rem 0 0;

            @media (max-width: 768px) {
                width: 67rem;
                padding: 34rem 11rem 0 0;
            }
        }

        &_3 {
            width: 23.4866rem;
            padding: 4rem 5.3472rem 0 0;

            @media (max-width: 768px) {
                width: 78rem;
                padding: 4rem 14rem 0 0;
            }
        }

        &_4 {
            width: 58.778rem;
            padding: 9.97rem 38rem 0 0;

            @media (max-width: 768px) {
                width: 199rem;
                padding: 20.97rem 131rem 0 0;
            }
        }

        &_5 {
            width: 38.23rem;
            padding: 10.458rem 19.4rem 0 0;

            @media (max-width: 768px) {
                width: 125rem;
                padding: 36rem 60rem 0 0;
            }
        }

        &_6 {
            width: 26.32rem;
            padding: 3.2rem 1rem 0 0;

            @media (max-width: 768px) {
                width: 98rem;
                padding: 13rem 15.4rem 0 0;
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