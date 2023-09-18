<template>
    <div class="big-wexpedition">
        <BaseHero :title="'Большая научная экспедиция'" :descr="heroDescr" :img="'img/hero7.jpg'"
            :imgMobile="'img/hero6-mobile.jpg'" />
        <MainSection>
            <BaseTextBlock class="mb-40">
                <p class="mb-10">
                    Авария 2020 года на&nbsp;норильской ТЭЦ-3 привела к&nbsp;значительным изменениям в&nbsp;экологической
                    политике &laquo;Норникеля&raquo; и&nbsp;в&nbsp;сознании работников. В&nbsp;компании решили
                    не&nbsp;просто снизить воздействие производств на&nbsp;окружающую среду до&nbsp;минимальных значений,
                    а&nbsp;добиться нулевых нетто-потерь биоразнообразия и&nbsp;постепенного восстановления нарушенных
                    экосистем. Но&nbsp;без достоверной научной информации понять, что для этого требуется, невозможно.
                    Первым шагом в&nbsp;правильном направлении стала Большая Норильская экспедиция, которая прошла
                    с&nbsp;2020 по&nbsp;2022&nbsp;годы.
                </p>
                <p>
                    &laquo;Норникель&raquo; и&nbsp;Сибирское отделение Российской академии наук решили продолжить
                    сотрудничество. Так родилась идея Большой научной экспедиции. Она стартовала одновременно
                    с&nbsp;завершением Большой Норильской экспедиции. Компании было важно оценить воздействие всех своих
                    производств не&nbsp;только на&nbsp;Таймыре, но&nbsp;и&nbsp;в&nbsp;других регионах деятельности Компании:
                    на&nbsp;Кольском полуострове, в&nbsp;Забайкалье и&nbsp;в&nbsp;Ямало-Ненецком автономном округе,
                    а&nbsp;также вдоль Северного морского пути.
                </p>
            </BaseTextBlock>
            <BaseSidebar>
                <p>
                    &laquo;Норникель&raquo; работает над сохранением 14&nbsp;морских экосистем и&nbsp;15&nbsp;экосистем
                    суши. Сотрудничество с&nbsp;научными организациями&nbsp;&mdash; одно из&nbsp;обязательств, взятых
                    компанией в&nbsp;рамках экологической стратегии.
                </p>
            </BaseSidebar>
        </MainSection>
    </div>
</template>

<script>
import BaseHero from '@/layout/BaseHero.vue'
import MainSection from '@/layout/MainSection'
// import SectionWhite from '@/layout/SectionWhite.vue'
import BaseTextBlock from '@/components/BaseTextBlock.vue'
import BaseSidebar from '@/components/BaseSidebar'

export default {
    components: {
        BaseHero,
        //     SectionOrange,
        // SectionWhite,
        BaseTextBlock,
        MainSection,
        BaseSidebar,
        //     BaseTooltip,
        //     BaseDropdownInfo,
        //     BaseCollageInfo,
        //     BaseNumberBlock
    },
    data() {
        return {
            heroDescr: 'Три региона страны, десятки учёных, сотни взятых на&nbsp;анализ проб, тысячи километров пути&nbsp;&mdash; в&nbsp;2022 году по&nbsp;инициативе &laquo;Норникеля&raquo; стартовал первый этап Большой научной экспедиции. Работы по&nbsp;изучению экосистем проводились одновременно в&nbsp;Красноярском крае, на&nbsp;Кольском полуострове и&nbsp;в&nbsp;Забайкалье, а&nbsp;также на&nbsp;отрезке Северного морского пути и&nbsp;вокруг территорий речных портов компании на&nbsp;Енисее. Ничего сопоставимого по&nbsp;масштабу в&nbsp;нашей стране не&nbsp;было за&nbsp;весь постсоветский период.'
        }
    }
}
</script>