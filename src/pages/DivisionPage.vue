<template>
    <div>
        <BaseHero :title="'Норильский дивизион. Природные сокровища южного Таймыра'" :descr="heroDescr" :img="'img/hero-3.png'"
            :imgMobile="'img/hero2-mobile.png'" />
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