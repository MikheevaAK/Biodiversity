<template>
    <div class="big-map">
        <img src="img/big-map.png" alt="">
        <div class="map-circale map-circale__blue map-circale__1"></div>
        <div class="map-circale map-circale__blue map-circale__2"></div>
        <div class="map-circale map-circale__blue map-circale__3"></div>
        <div class="map-circale map-circale__green map-circale__4"></div>
        <div class="map-circale map-circale__green map-circale__5"></div>
        <div class="map-circale map-circale__green map-circale__6"></div>
        <div class="map-circale map-circale__purple map-circale__7"></div>
        <BaseTextBlock class="mb-2-5 text" :title="'Карта исследований'">
            <p class="text-block__descr">
                Исследования проводились по нескольким направлениям: поверхностные воды и донные отложения,
                почва и многолетнемерзлый грунт, флора и фауна Арктики. Ученые обследовали десятки природных
                точек: окрестности Норильска, поймы шести таймырских рек, а также побережье Карского моря.
            </p>
        </BaseTextBlock>
    </div>
</template>
<script>
import BaseTextBlock from '@/components/BaseTextBlock.vue'
export default {
    components: {
        BaseTextBlock
    }
}
</script>

<style lang="scss">
// Variables
$blue: #0077C8;
$green: #009CA6;
$purple: #654EA3;

.big-map {
    position: relative;
    width: 100%;
    height: 52.125rem;

    .text {
        position: absolute;
        top: -1.44rem;
        left: 50%;
        transform: translateX(-50%);
    }
}

.map-circale {
    position: absolute;
    width: 0.88rem;
    height: 0.88rem;
    border-radius: 100%;
    animation: ripple 1.5s linear;
    transition-timing-function: ease-in;
    transition-duration: 0.7s;
    transition: all 2.3s;
    z-index: 2;

    &__blue {
        background-color: rgba($blue, 1);
        animation: ripple-blue 1.5s infinite;
    }

    &__green {
        background-color: rgba($green, 1);
        animation: ripple-green 1.5s infinite;
    }

    &__purple {
        background-color: rgba($purple, 1);
        animation: ripple-purple 1.5s infinite;
    }

    &__1 {
        top: 20.1rem;
        left: 61.5rem;
    }

    &__2 {
        top: 23.9rem;
        left: 67.67rem;
    }

    &__3 {
        top: 36rem;
        left: 66.5rem;
    }

    &__4 {
        top: 50.4rem;
        left: 32.7rem;
    }

    &__5 {
        top: 47.5rem;
        left: 29.4rem;
    }

    &__6 {
        top: 42rem;
        left: 27.5rem;
    }

    &__7 {
        top: 36.6rem;
        left: 32.35rem;
    }
}

@keyframes ripple-blue {
    0% {
        box-shadow: 0 0 0 0 rgba($blue, 0.5), 0 0 0 0.1rem rgba($blue, 0.3),
            0 0 0 0.3rem rgba($blue, 0.3), 0 0 0 0.5rem rgba($blue, 0.3);
    }

    90% {
        box-shadow: 0 0 0 0.1rem rgba($blue, 0), 0 0 0 0.3rem rgba($blue, 0),
            0 0 0 0.5rem rgba($blue, 0), 0 0 0 2rem rgba($blue, 0);
    }
}

@keyframes ripple-green {
    0% {
        box-shadow: 0 0 0 0 rgba($green, 0.5), 0 0 0 0.1rem rgba($green, 0.3),
            0 0 0 0.3rem rgba($green, 0.3), 0 0 0 0.5rem rgba($green, 0.3);
    }

    90% {
        box-shadow: 0 0 0 0.1rem rgba($green, 0), 0 0 0 0.3rem rgba($green, 0),
            0 0 0 0.5rem rgba($green, 0), 0 0 0 2rem rgba($green, 0);
    }
}

@keyframes ripple-purple {
    0% {
        box-shadow: 0 0 0 0 rgba($purple, 0.5), 0 0 0 0.1rem rgba($purple, 0.3),
            0 0 0 0.3rem rgba($purple, 0.3), 0 0 0 0.5rem rgba($purple, 0.3);
    }

    90% {
        box-shadow: 0 0 0 0.1rem rgba($purple, 0), 0 0 0 0.3rem rgba($purple, 0),
            0 0 0 0.5rem rgba($purple, 0), 0 0 0 2rem rgba($purple, 0);
    }
}
</style>