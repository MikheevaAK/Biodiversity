<template>
    <div class="treasures-4-container__wrap">
        <div v-if="lang === 'ru'" class="treasures-4-container">

            <div class="treasures-4-item treasures-4-item_1">
                <div class="treasures-3-item__title">Красавка</div>
                <div class="treasures-3-item__descr">
                    Вид занесён в&nbsp;Красную книгу, а&nbsp;во&nbsp;всём мире, по&nbsp;подсчётам орнитологов, осталось
                    не&nbsp;более 240&nbsp;тыс. этих птиц.
                </div>
            </div>

            <div class="treasures-4-item treasures-4-item_2">
                <div class="treasures-3-item__title">Мандаринка</div>
                <div class="treasures-3-item__descr">
                    Брачный наряд самца этой утки необычайно ярок и&nbsp;красочен: перья окрашены в&nbsp;жёлтый,
                    оранжевый, синий, зелёный, чёрный и&nbsp;белый цвета. Однако в&nbsp;остальное время самцы выглядят
                    гораздо скромнее и&nbsp;почти не&nbsp;отличаются от&nbsp;серо-коричневых самок. Не&nbsp;так давно
                    мандаринки находились под угрозой исчезновения, но&nbsp;сейчас их&nbsp;численность постепенно
                    восстанавливается. Занесена в&nbsp;Красную книгу.
                </div>
            </div>

            <div class="treasures-4-item treasures-4-item_3">
                <div class="treasures-3-item__title">Колонок</div>
                <div class="treasures-3-item__descr">
                    Зверёк средних размеров, ведёт преимущественно ночной образ жизни. Колонки нередко поселяются
                    поблизости от&nbsp;населённых пунктов, где охотятся на&nbsp;крыс и&nbsp;мышей, но&nbsp;также могут
                    напасть на&nbsp;домашнюю птицу и&nbsp;кошек. Занесён в&nbsp;Красную книгу.
                </div>
            </div>

            <div class="treasures-4-item treasures-4-item_4">
                <div class="treasures-3-item__title">Корсак</div>
                <div class="treasures-3-item__descr">
                    Корсаки похожи на&nbsp;обыкновенных лис, но&nbsp;заметно мельче их&nbsp;и&nbsp;более социальны&nbsp;&mdash;
                    нередко несколько животных селятся вместе. Во&nbsp;время опасности животное притворяется мёртвым, но&nbsp;при
                    первой&nbsp;же возможности убегает. Корсак занесён в&nbsp;Красную книгу в&nbsp;статусе &laquo;вызывающий
                    наименьшие опасения&raquo;.
                </div>
            </div>

            <div class="treasures-4-item treasures-4-item_5">
                <div class="treasures-3-item__title">Кабарга</div>
                <div class="treasures-3-item__descr">
                    У&nbsp;этого небольшого оленя нет рогов, зато у&nbsp;самцов из-под верхней губы выступают длинные
                    саблевидные клыки. Их&nbsp;животные используют в&nbsp;качестве турнирного оружия в&nbsp;битвах за&nbsp;самку.
                    Известны случаи, когда во&nbsp;время таких поединков один из&nbsp;самцов кабарги смертельно ранил
                    соперника. Животное занесено в&nbsp;Красную книгу как уязвимый вид.
                </div>
            </div>

            <div class="treasures-4-item treasures-4-item_6">
                <div class="treasures-3-item__title">Росомаха</div>
                <div class="treasures-3-item__descr">
                    Этот представитель вида куньих достигает размеров средней собаки. Росомаха известна своей
                    свирепостью и&nbsp;бесстрашием: она может дать отпор даже животным, значительно превосходящим её&nbsp;по&nbsp;размерам.
                    Загнанная в&nbsp;угол способна напасть и&nbsp;на&nbsp;человека. Занесена в&nbsp;Красную книгу.
                </div>
            </div>

        </div>
        <div v-else class="treasures-4-container treasures-4-container_en">

<div class="treasures-4-item treasures-4-item_1">
    <div class="treasures-3-item__title">Demoiselle crane</div>
    <div class="treasures-3-item__descr">
        This species is listed in the Red Data Book, and ornithologists estimate that no more than 240,000 demoiselle cranes are currently in existence globally.
    </div>
</div>

<div class="treasures-4-item treasures-4-item_2">
    <div class="treasures-3-item__title">Mandarin duck</div>
    <div class="treasures-3-item__descr">
        Male mandarin ducks change to their colourful plumage during the mating season, with their feathers coloured yellow, orange, blue, green, and black and white. However, the rest of the time males keep a much lower profile and look almost identical to the grey and brown females. Not so long ago, mandarin ducks were endangered, but right now their populations are gradually recovering. It is listed in the Red Data Book.
    </div>
</div>

<div class="treasures-4-item treasures-4-item_3">
    <div class="treasures-3-item__title">Siberian weasel</div>
    <div class="treasures-3-item__descr">
        A medium-sized and a predominantly nocturnal creature. Siberian weasels often live not far from human settlements, where they hunt rats and mice and sometimes can also attack poultry and cats. The species is listed in the Red Data Book.
    </div>
</div>

<div class="treasures-4-item treasures-4-item_4">
    <div class="treasures-3-item__title">Corsac fox</div>
    <div class="treasures-3-item__descr">
        Corsac foxes look like typical foxes but are noticeably smaller and more social, with several animals often living together. In times of danger, corsacs feign death – only to escape at their first chance. Corsacs are listed in the Red Data Book as a species of least-concern.
    </div>
</div>

<div class="treasures-4-item treasures-4-item_5">
    <div class="treasures-3-item__title">Siberian musk deer</div>
    <div class="treasures-3-item__descr">
        These medium-sized deer have no antlers but have long tusks that project downward from their mouth, which they use to compete with other males for females. There are known cases of male dusk deer fatally wounding their opponents this way. The animal is included in the Red Data Book as a vulnerable species.
    </div>
</div>

<div class="treasures-4-item treasures-4-item_6">
    <div class="treasures-3-item__title">Wolverine</div>
    <div class="treasures-3-item__descr">
        This member of the marten species reaches the size of an average dog. Wolverines are known for their great ferocity and strength out of proportion to their size, with relative attack even humans when desperate. The wolverine is red-listed.
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
                const panels = gsap.utils.toArray(".treasures-4-container .treasures-4-item");
                gsap.to(".treasures-4-container", {
                    xPercent: -9.6 * (panels.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".treasures-4",
                        pin: true,
                        start: "top 10%",
                        scrub: 1,
                        end: () => "+=" + (document.querySelector(".treasures-4-container").offsetWidth - window.innerWidth)
                    }
                });
            }
        }
    }
}
</script>


<style lang="scss">
.treasures-4 {
    position: relative;
    overflow: hidden;

    &-container {
        position: relative;
        display: flex;
        width: 188rem;
        height: 38.12rem;
        background-image: url(../../public/img/treasures-scroll-4.png);
        background-repeat: no-repeat;
        background-size: 100%;

        @media (max-width: 768px) {
            width: 689rem;
            height: 100%;
            background-image: url(../../public/img/treasures-scroll-4-mobile.png);

            &__wrap {
                width: unset;
                height: 144.467rem;
                overflow-x: scroll;
                overflow-y: hidden;
                scrollbar-width: none;

                &::-webkit-scrollbar {
                    width: 0;
                }
            }
        }

        &_en {
            background-image: url(../../public/img/treasures-scroll-4-en.png);
            @supports (background-image: url(../../public/img/treasures-scroll-4-en.webp)) {
                background-image: url(../../public/img/treasures-scroll-4-en.webp);
            }

            @media (max-width: 768px) {
                background-image: url(../../public/img/treasures-scroll-4-en-mobile.png);
            @supports (background-image: url(../../public/img/treasures-scroll-4-en-mobile.webp)) {
                background-image: url(../../public/img/treasures-scroll-4-en-mobile.webp);
            }
            }
        }
    }

    &-item {
        position: absolute;

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
            width: 14.7rem;
            top: 4rem;
            left: 6rem;

            @media (max-width: 768px) {
                width: 59.2rem;
                top: 13rem;
                left: 14rem;
            }
        }

        &_2 {
            width: 23.4rem;
            top: 1rem;
            left: 33rem;

            @media (max-width: 768px) {
                width: 82rem;
                top: 5rem;
                left: 118rem;
            }
        }

        &_3 {
            width: 18rem;
            top: 10rem;
            left: 64rem;

            @media (max-width: 768px) {
                width: 69rem;
                top: 31rem;
                left: 233rem;
            }
        }

        &_4 {
            width: 22.778rem;
            top: 7rem;
            left: 97rem;

            @media (max-width: 768px) {
                width: 80.778rem;
                top: 20rem;
                left: 355rem;
            }
        }

        &_5 {
            width: 24.23rem;
            top: 0;
            left: 131rem;

            @media (max-width: 768px) {
                width: 93rem;
                top: 0;
                left: 479rem;
            }
        }

        &_6 {
            width: 19.32rem;
            top: 2rem;
            left: 164rem;

            @media (max-width: 768px) {
                width: 73.32rem;
                top: 8rem;
                left: 600rem;
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