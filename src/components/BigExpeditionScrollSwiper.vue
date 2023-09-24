<template>
    <!-- <div class="map-big-expidition"> -->
        <div class="map-container__wrap">
            <div class="map-container">
                <div class="map-item">
                    <picture>
                       <source type="image/webp" srcset="img/map-big-expedition-1.webp">
                        <img src="img/map-big-expedition-1.png" alt="">
                    </picture>
                    <div class="map-item__text">
                        <div class="map-item__title">Норильский дивизион</div>
                        <div class="map-item__descr">Группа объектов в&nbsp;районе Норильска и&nbsp;Талнаха</div>
                    </div>
                    <a class="link" href="/norilsk-division">
                        <div>Перейти в&nbsp;раздел дивизиона</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="8" viewBox="0 0 20 8" fill="none">
                            <path
                                d="M19.8536 4.35355C20.0488 4.15829 20.0488 3.84171 19.8536 3.64645L16.6716 0.464466C16.4763 0.269204 16.1597 0.269204 15.9645 0.464466C15.7692 0.659728 15.7692 0.976311 15.9645 1.17157L18.7929 4L15.9645 6.82843C15.7692 7.02369 15.7692 7.34027 15.9645 7.53553C16.1597 7.7308 16.4763 7.7308 16.6716 7.53553L19.8536 4.35355ZM0 4.5H19.5V3.5H0V4.5Z"
                                fill="black" />
                        </svg>
                    </a>
                </div>

                <div class="map-item">
                    <picture>
                       <source type="image/webp" srcset="img/map-big-expedition-2.webp">
                        <img src="img/map-big-expedition-2.png" alt="">
                    </picture>
                    <div class="map-item__text">
                        <div class="map-item__title">Забайкальский дивизион</div>
                        <div class="map-item__descr">Быстринский ГОК</div>
                    </div>
                    <a class="link" href="/transbaikal-division">
                        <div>Перейти в&nbsp;раздел дивизиона</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="8" viewBox="0 0 20 8" fill="none">
                            <path
                                d="M19.8536 4.35355C20.0488 4.15829 20.0488 3.84171 19.8536 3.64645L16.6716 0.464466C16.4763 0.269204 16.1597 0.269204 15.9645 0.464466C15.7692 0.659728 15.7692 0.976311 15.9645 1.17157L18.7929 4L15.9645 6.82843C15.7692 7.02369 15.7692 7.34027 15.9645 7.53553C16.1597 7.7308 16.4763 7.7308 16.6716 7.53553L19.8536 4.35355ZM0 4.5H19.5V3.5H0V4.5Z"
                                fill="black" />
                        </svg>
                    </a>
                </div>

                <div class="map-item">
                    <picture>
                       <source type="image/webp" srcset="img/map-big-expedition-3.webp">
                        <img src="img/map-big-expedition-3.png" alt="">
                    </picture>
                    <div class="map-item__text">
                        <div class="map-item__title">Кольский дивизион</div>
                        <div class="map-item__descr">Мончегорск, Никель, Заполярный</div>
                    </div>
                    <a class="link" href="/kola-division">
                        <div>Перейти в&nbsp;раздел дивизиона</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="8" viewBox="0 0 20 8" fill="none">
                            <path
                                d="M19.8536 4.35355C20.0488 4.15829 20.0488 3.84171 19.8536 3.64645L16.6716 0.464466C16.4763 0.269204 16.1597 0.269204 15.9645 0.464466C15.7692 0.659728 15.7692 0.976311 15.9645 1.17157L18.7929 4L15.9645 6.82843C15.7692 7.02369 15.7692 7.34027 15.9645 7.53553C16.1597 7.7308 16.4763 7.7308 16.6716 7.53553L19.8536 4.35355ZM0 4.5H19.5V3.5H0V4.5Z"
                                fill="black" />
                        </svg>
                    </a>
                </div>

                <div class="map-item">
                    <picture>
                       <source type="image/webp" srcset="img/map-big-expedition-4.webp">
                        <img src="img/map-big-expedition-4.png" alt="">
                    </picture>
                    <div class="map-item__text">
                        <div class="map-item__title">Речные порты</div>
                        <div class="map-item__descr">Красноярский речной порт, Лесосибирский порт</div>
                    </div>
                </div>

                <div class="map-item">
                    <picture>
                       <source type="image/webp" srcset="img/map-big-expedition-5.webp">
                        <img src="img/map-big-expedition-5.png" alt="">
                    </picture>
                    <div class="map-item__text">
                        <div class="map-item__title">Северный морской путь</div>
                        <div class="map-item__descr">Дудинка — Мурманск, Мурманский транспортный филиал</div>
                    </div>
                </div>
            </div>
        </div>
    <!-- </div> -->
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
                const panels = gsap.utils.toArray(".map-container .map-item");
                gsap.to(panels, {
                    xPercent: -50 * (panels.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".map-container__wrap",
                        pin: true,
                        start: "top 10%",
                        scrub: 1,
                        end: () => "+=" + (document.querySelector(".map-container").offsetWidth - window.innerWidth)
                    }
                });
            }
        }
    }
}
</script>

<style lang="scss">
// .map-big-expidition {
    
//     overflow: hidden;
// }

.map {
    position: relative;
    overflow: hidden;

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

    &-container {
        margin-left: 10rem;
        margin-bottom: 4.94rem;
        display: flex;
        gap: 22px;
        width: 122.2223rem;
        height: 30.139rem;

        @media (max-width: 768px) {
            width: 524rem;
            height: 100%;

            &__wrap {
                margin-bottom: 16rem;
                // margin-left: 20rem;
                width: unset;
                // height: 139.467rem;
                overflow-x: scroll;
                overflow-y: hidden;
                scrollbar-width: none;

                &::-webkit-scrollbar {
                    width: 0;
                }
            }
        }
    }

}

.map-item {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 33px;
    width: 343px;

    img {
        width: 237px;
        height: 237px;
    }

    &__title {
        margin-bottom: 1.25rem;
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 130%;
    }

    &__descr {
        font-size: 1.25rem;
        font-weight: 300;
        line-height: 130%;
    }
}
</style>