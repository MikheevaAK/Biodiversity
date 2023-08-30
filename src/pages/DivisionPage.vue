<template>
    <div>
        <BaseHero :title="'Норильский дивизион. Природные сокровища южного Таймыра'" :descr="heroDescr" :img="'img/hero-3.jpg'"
            :imgMobile="'img/hero3-mobile.jpg'" />
    </div>
</template>

<script>
import BaseHero from '@/layout/BaseHero.vue';
export default {
    components: {
        BaseHero,
    },
    data() {
        return {
            heroDescr: 'Какие виды животных и растений живут по соседству с промышленным гигантом Красноярского края — Большим Норильском'
        }
    },
}
</script>