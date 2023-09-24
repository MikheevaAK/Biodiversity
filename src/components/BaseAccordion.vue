<template>
    <div class="faq">
        <div class="header" @click="handleClick(faq)">
            <div class="question" v-html="faq.question"></div>
            <div class="faq_svg" :style="{ background: color }">
                <svg class="faq_svg__minus" xmlns="http://www.w3.org/2000/svg" width="29" height="2" viewBox="0 0 29 2"
                    fill="none">
                    <path d="M0 1.0802H29" stroke="black" />
                </svg>
                <svg class="faq_svg__minus" :class="{ 'faq_svg__minus_close': faq.isOpen }"
                    xmlns="http://www.w3.org/2000/svg" width="29" height="2" viewBox="0 0 29 2" fill="none">
                    <path d="M0 1.0802H29" stroke="black" />
                </svg>
            </div>
        </div>
        <div class="answer" :class="{ 'open': faq.isOpen }" v-html="faq.answer">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        faq: {
            type: Object,
            default: null
        }
    },

    methods: {
        handleClick(faq) {
            faq.isOpen = !faq.isOpen
        }
    }
}
</script>

<style lang="scss">
.faq {
    flex-grow: 1;

    @media (max-width: 768px) {
        margin: 0 5.3334rem;
    }

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2.09rem 0.7rem;
        cursor: pointer;

        @media (max-width: 768px) {
            padding: 6.4rem 0;
        }

        .question {
            font-size: 1.5278rem;
            font-weight: 600;
            line-height: 130%;

            @media (max-width: 768px) {
                font-size: 4.8rem;
            }
        }

        .faq_svg {
            position: relative;
            display: flex;
            margin-right: 10px;
            width: 29px;
            height: 29px;
            flex-shrink: 0;

            @media (max-width: 768px) {
                width: 29px;
                height: 29px;
            }
        }

        .faq_svg__minus {
            position: absolute;
            width: 29px;
            height: 29px;
            transition: .5s;

            @media (max-width: 768px) {
                width: 29px;
                height: 29px;
            }

            &:last-child {
                transform: rotateZ(90deg);
            }

            &_close {
                transform: rotateZ(0deg) !important;
            }

        }
    }

    .answer {
        height: 0;
        overflow-y: scroll;
        font-weight: 300;
        font-size: 1.25rem;
        line-height: 130%;
        transition: overflow .5s;

        @media (max-width: 768px) {
            font-size: 4.8rem;
        }

        &.open {
            padding-bottom: 2.09rem;
            height: max-content;
            // overflow: visible;

            @media (max-width: 768px) {
                padding-bottom: 8rem;
            }
        }
    }
}
</style>