<template>
    <div class="block-info" :style="{ width: width }">
        <div class="block-info__img">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="7" :fill="color" />
            </svg>
        </div>
        <div class="block-info__text">
            <div class="block-info__title" v-if="title">{{ title }}</div>
            <p v-html="text"></p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            default: ''
        },
        width: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        }
        ,
        text: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss">
.block-info {
    position: absolute;
    display: flex;
    gap: 0.62rem;
    font-size: 0.9375rem;
    line-height: 130%;

    &__img {
        width: 0.875rem;
        height: 0.875rem;
        flex-shrink: 0;
    }

    &__title {
        margin-bottom: 0.5rem;
        font-weight: 600;
    }
}
</style>