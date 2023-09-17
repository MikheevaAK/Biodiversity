<template>
    <div class="white-bears">
        <BaseHero :title="'Как «Норникель» помогает сохранить популяцию белого медведя'" :descr="heroDescr"
            :img="'img/hero5.jpg'" :imgMobile="'img/hero5-mobile.jpg'" />
    </div>
</template>

<script>
import BaseHero from '@/layout/BaseHero.vue'

export default {
    components: {
        BaseHero,
    //     SectionOrange,
    //     SectionWhite,
    //     BigMap,
    //     BaseTextBlock,
    //     MainSection,
    //     BaseSidebar,
    //     BaseTooltip,
    //     BaseDropdownInfo,
    //     BaseCollageInfo,
    //     BaseNumberBlock
    },
    data() {
        return {
            heroDescr: 'Когда‑то вся Арктика принадлежала белым медведям: на&nbsp;Севере не&nbsp;было зверей, которые могли&nbsp;бы на&nbsp;равных соперничать с&nbsp;ними. Но&nbsp;глобальное изменение климата и&nbsp;соседство с&nbsp;людьми привело полярных хищников на&nbsp;грань вымирания: сейчас, по&nbsp;оценкам учёных, в&nbsp;мире осталось не&nbsp;более 25&nbsp;тыс. особей, из&nbsp;них 5&ndash;6&nbsp;тыс. живут на&nbsp;территории нашей страны.'
        }
    }
}
</script>