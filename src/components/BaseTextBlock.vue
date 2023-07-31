<template>
    <div class="text-block__wrap" >
        <h3 v-if="title" class="text-block__title">
            {{ title }}
        </h3>
        <div class="text-block__descr">
            <slot></slot>
        </div>

        <BaseNumberBlock v-if="textTop || textBottom" 
                        :textTop="textTop" 
                        :textBottom="textBottom"
                        :top="top" />
    </div>
</template>

<script>
import BaseNumberBlock from "@/components/BaseNumberBlock.vue";

export default {
    components: { BaseNumberBlock },
    props: {
        title: {
            type: String,
            default: ''
        },
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
.text-block {
    &__wrap {
        position: relative;
        margin: 0 auto;
        width: 32.68rem;
        z-index: 10;
    }

    &__title {
        margin-bottom: 1.75rem;
        color: var(--gray-1, #333);
        font-size: 1.375rem;
        font-weight: 600;
        line-height: 130%;
    }

    &__descr {
        color: var(--gray-1, #333);
        font-size: 1.125rem;
        font-weight: 300;
        line-height: 130%;
    }
}
</style>