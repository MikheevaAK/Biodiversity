<template>
    <footer class="footer">
        <div class="footer__top">
            <div class="footer__map">
                <div class="footer__block footer__block-big footer__block_active"></div>
                <div class="footer__block footer__block-small"></div>
                <div class="footer__block footer__block-small"></div>
                <div class="footer__block footer__block-small"></div>
                <div class="footer__block footer__block-big"></div>
                <div class="footer__block footer__block-small"></div>
                <div class="footer__block footer__block-small"></div>
                <div class="footer__block footer__block-small"></div>
                <div class="footer__block footer__block-small"></div>
                <div class="footer__block footer__block-small"></div>
            </div>
            <div class="footer__top-descr">
                Вы&nbsp;собрали первую часть карты биоразнообразия Норникель.
            </div>
            <a href="#" class="footer__top-link">
                Вернуться на&nbsp;карту
            </a>
        </div>
        <div class="footer__bottom">
            <div class="footer__bottom-descr">Читать ещё</div>
            <ul class="footer__bottom-list">
                <li v-for="(item, index) in menu" :key="index" class="footer__item">
                    <img :src="item.img" class="footer__item-img">
                    <div class="footer__item-title"> {{ item.title }}</div>
                    <ul class="footer__item-links">
                        <li class="footer__item-link" v-for="(link, index) in item.links" :key="index">
                            <a :href="link.link">{{ link.text }}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            menu: [
                {
                    title: 'Дивизионы',
                    img: './img/footer.png',
                    links: [
                        {
                            link: '',
                            text: 'Норильский дивизион'
                        },
                        {
                            link: '',
                            text: 'Кольский дивизион'
                        },
                        {
                            link: '',
                            text: 'Забайкальский дивизион'
                        }
                    ]
                },
                {
                    title: 'Экспедиции',
                    img: './img/footer.png',
                    links: [
                        {
                            link: '',
                            text: 'Ликвидация последствий ТЭЦ'
                        },
                        {
                            link: '',
                            text: 'Научная экспедиция'
                        },
                        {
                            link: '',
                            text: 'Арктические водоёмы'
                        }
                    ]
                },
                {
                    title: 'Мероприятия',
                    img: './img/footer.png',
                    links: [
                        {
                            link: '',
                            text: 'Первое мероприятие'
                        },
                        {
                            link: '',
                            text: 'Второе мероприятие'
                        },
                        {
                            link: '',
                            text: 'Третье мероприятие'
                        },
                        {
                            link: '',
                            text: 'Четвёртое мероприятие'
                        }
                    ]
                },
            ]
        }
    }
}
</script>

<style lang="scss">
.footer {
    padding: 6.44rem 16.44rem 11.06rem 16.44rem;

    @media (max-width: 768px) {
        padding: 21.3334rem 14.1334rem 11.06rem 14.1334rem;
    }

    &__top {
        margin-bottom: 4.79rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        @media (max-width: 768px) {
            padding: 0 1rem;
        }

        &-link {
            display: inline-block;
            padding: 1.125rem 3.375rem;
            color: var(--white, #FFF);
            text-align: center;
            font-size: 1.125rem;
            font-weight: 400;
            line-height: 130%;
            border-radius: 0.5rem;
            background: var(--copper, #D38235);
            transition: all .25s ease-out;

            &:hover {
                background: #A46A32;
            }
        }

        &-descr {
            margin-bottom: 2.75rem;
            width: 20.3125rem;
            text-align: center;
        }
    }

    &__map {
        margin-bottom: 1rem;
        width: 5.15rem;
        display: flex;
        flex-wrap: wrap;
        gap: 0.13rem;

        @media (max-width: 768px) {
            width: 21.6rem;
            gap: 0.56rem;
        }
    }

    &__block {
        height: 1.75781rem;
        border-radius: 0.05625rem;
        background: var(--gray-5, #E0E0E0);

        @media (max-width: 768px) {
            height: 7.47rem;
        }

        &_active {
            background: var(--gray-4, #BDBDBD);
        }

        &-big {
            width: 2.51013rem;

            @media (max-width: 768px) {
                width: 10.5rem;
            }
        }

        &-small {
            width: 1.17rem;

            @media (max-width: 768px) {
                width: 4.91rem;
            }
        }
    }

    &__bottom {
        &-descr {
            margin-bottom: 1.62rem;
            font-size: 1.125rem;
            font-weight: 600;
            line-height: 130%;
            color: #000;
        }

        &-list {
            display: flex;
            justify-content: space-between;

            @media (max-width: 768px) {
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 20rem;
            }
        }
    }

    &__item {
        &-img {
            width: 16.8125rem;
            height: 11.875rem;
            mix-blend-mode: darken;

            @media (max-width: 768px) {
                width: 100%;
                height: 50.667rem;
            }
        }

        &-title {
            margin-bottom: 1.88rem;
            color: var(--coppre-text, #A46A32);
            font-size: 1.125rem;
            font-weight: 600;
            line-height: 130%;
        }

        &-links {
            display: flex;
            flex-direction: column;
            gap: 1.38rem;
        }

        &-link {
            color: #000;
            font-size: 1.125rem;
            font-weight: 300;
            line-height: 130%;
            transition: all .25s ease-out;

            &:hover {
                color: #004C97;
            }
        }
    }
}
</style>