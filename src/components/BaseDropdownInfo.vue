<template>
    <div class="dropdown-info">
        <div @click="toggleInfo" class="dropdown-info__wrap">
            <div class="dropdown-info__svg" :style="{ background: color }">
                <svg class="dropdown-info__minus" xmlns="http://www.w3.org/2000/svg" width="12" height="2"
                    viewBox="0 0 12 2" fill="none">
                    <path d="M11 0.999996L1 1" stroke="white" stroke-width="2" stroke-linecap="round" />
                    <path d="M1 1L11 1" stroke="white" stroke-width="2" stroke-linecap="round" />
                </svg>
                <svg class="dropdown-info__minus" :class="{ 'dropdown-info__minus_close': show }"
                    xmlns="http://www.w3.org/2000/svg" width="12" height="2" viewBox="0 0 12 2" fill="none">
                    <path d="M11 0.999996L1 1" stroke="white" stroke-width="2" stroke-linecap="round" />
                    <path d="M1 1L11 1" stroke="white" stroke-width="2" stroke-linecap="round" />
                </svg>
            </div>
            <div class="dropdown-info__title">
                {{ title }}
            </div>
        </div>
        <Transition name="dropdown-info">
            <div v-if="show" class="dropdown-info__text" v-html="text"></div>
        </Transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: '#C2C095'
        }
    },
    methods: {
        toggleInfo() {
            this.show = !this.show
        }
    }
}
</script>

<style lang="scss">
.dropdown-info {
    position: relative;
    font-size: 0.9375rem;
    line-height: 130%;

    @media (max-width: 768px) {
        font-size: 3.73334rem;
    }

    &__wrap {
        display: flex;
        align-items: center;
        gap: 0.88rem;
        position: relative;
        z-index: 2;
        cursor: pointer;

        @media (max-width: 768px) {
            gap: 2rem;
        }
    }

    &__svg {
        position: relative;
        display: flex;
        padding: 0.5rem;
        width: 1.625rem;
        height: 1.625rem;
        flex-shrink: 0;
        border-radius: 50%;

        @media (max-width: 768px) {
            padding: 2.6rem;
            width: 8.467rem;
            height: 8.467rem;
        }
    }

    &__minus {
        position: absolute;
        width: 0.625rem;
        height: 0.625rem;
        transition: .5s;

        @media (max-width: 768px) {
            width: 3.2rem;
            height: 3.2rem;
        }

        &:last-child {
            transform: rotateZ(90deg);
        }

        &_close {
            transform: rotateZ(0deg) !important;
        }
    }

    &__title {
        font-weight: 600;
        max-width: 14rem;
    }

    &__text {
        position: absolute;
        width: 18.6rem;
        padding: 2.56rem 0.62rem 0.88rem 3.13rem;
        border-radius: 0.25rem;
        background: #FFF;
        z-index: 1;
        top: -0.62rem;
        left: -0.62rem;
        transform-origin: top left;
    }

    &-enter-active {
        animation: bounce-in .5s;
    }

    &-leave-active {
        animation: bounce-in .5s reverse;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0.6);
            opacity: 0;
        }

        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
}</style>