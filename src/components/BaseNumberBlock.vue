<template>
    <div class="number-block" :class="{ 'number-block-bottom': top }">
        <div class="number-block__top">
            {{ textTop }}
        </div>
        <div class="number-block__bottom">
            {{ textBottom }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        textTop: {
            type: String,
            default: ''
        },
        textBottom: {
            type: String,
            default: ''
        },
        top: {
            type: Boolean,
            default: false
        },
    }
}
</script>

<style lang="scss">
.number-block {
    padding-left: 1.25rem;
    width: 17rem;
    border-left: 1px solid #333333;
    color: var(--gray-1, #333);
    position: absolute;
    bottom: 0;
    left: 37rem;

    &-bottom {
        top: 0;
        bottom: unset;
    }

    &__top {
        margin-bottom: 0.81rem;
        font-size: 2.5rem;
        font-weight: 600;
        line-height: 130%;
    }

    &__bottom {
        font-size: 1.125rem;
        font-weight: 300;
        line-height: 130%;
    }
}
</style>