<template>
    <div class="main-page">
        <BaseHero :img="'img/hero-main.png'"
            :imgMobile="'img/hero6-mobile.jpg'" />
    </div>
</template>

<script>
import BaseHero from '@/layout/BaseHero.vue'
export default {
    components: {
        BaseHero,
        //     SectionOrange,
        // SectionWhite,
        // BaseTextBlock,
        // MainSection,
        // BaseSidebar,
        //     BaseTooltip,
        //     BaseDropdownInfo,
        //     BaseCollageInfo,
        //     BaseNumberBlock
    },
    data() {
        return {
            heroDescr: '&laquo;Норникель&raquo; на&nbsp;протяжении более чем десяти лет сотрудничает с&nbsp;заповедниками и&nbsp;заказниками Таймыра, Забайкалья и&nbsp;Кольского полуострова. При поддержке компании на&nbsp;особо охраняемых территориях появляются новые экологические маршруты и&nbsp;реализуются программы по&nbsp;изучению и&nbsp;сохранению редких видов животных и&nbsp;растений.'
        }
    }
}
</script>

<style lang="scss">
.main-page {
    .hero {
        background-position: center;
    }

    .hero-strip {
        display: none;
    }
}
</style>