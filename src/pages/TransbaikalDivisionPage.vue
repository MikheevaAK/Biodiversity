<template>
    <div>
        <BaseHero :title="'Забайкальский дивизион. Природа в окрестностях Быстринского комбината'" :descr="heroDescr"
            :img="'img/hero-3.jpg'" :imgMobile="'img/hero3-mobile.jpg'" />
    </div>
</template>

<script>
import BaseHero from '@/layout/BaseHero.vue'
export default {
    components: {
        BaseHero,
        // SectionOrange,
        // SectionWhite,
        // BigMap,
        // BaseTextBlock,
        // MainSection,
        // BaseSidebar,
        // BaseTooltip,
        // BaseScrollBlock,
        // BaseNumberBlock
    },
    data() {
        return {
            circales: [
                {
                    color: 'green',
                    number: '1'
                },
                {
                    color: 'blue',
                    number: '2'
                },
                {
                    color: 'blue',
                    number: '3'
                },
                {
                    color: 'blue',
                    number: '4'
                },
                {
                    color: 'purple',
                    number: '5'
                },
                {
                    color: 'purple',
                    number: '6'
                },
                {
                    color: 'purple',
                    number: '7'
                }
            ],
            heroDescr: 'Кто обитает на&nbsp;территории одного из&nbsp;самых современных и&nbsp;технологичных дивизионов &laquo;Норникеля&raquo;'
        }
    }
}
</script>