<template>
    <div class="white-bears">
        <BaseHero :title="'Загадочный ИПСЭ'" :descr="heroDescr"
            :img="'img/hero9.jpg'" :imgMobile="'img/hero6-mobile.jpg'" />
        <MainSection>
            <SectionWhite>
                <BaseTextBlock class="mb-40">
                    В&nbsp;России действуют сразу несколько программ по&nbsp;сохранению этого вида, и&nbsp;активное участие
                    в&nbsp;них на&nbsp;протяжении многих лет принимает &laquo;Норникель&raquo;. В&nbsp;компании отмечают,
                    что эта работа по&nbsp;сохранению биоразнообразия в&nbsp;целом и&nbsp;локальные программы
                    по&nbsp;сохранению отдельных видов необходимы для поддержания жизни на&nbsp;планете.
                </BaseTextBlock>
            </SectionWhite>
            <SectionWhite>
                <BaseTextBlock class="mb-40" :title="'После спасения'">
                    <p class="mb-10">
                        За&nbsp;спасение Монеточки и&nbsp;Диксона глава Росприроднадзора Светлана Радионова вручила
                        сотрудникам
                        Московского зоопарка и&nbsp;представителям &laquo;Норникеля&raquo; благодарственные письма
                        и&nbsp;награды.
                    </p>
                    <p>
                        По&nbsp;прогнозам врачей, восстановление Диксона в&nbsp;зоопарке займёт по&nbsp;меньшей мере полтора
                        года, и&nbsp;ветеринары пока крайне осторожны в&nbsp;своих прогнозах.
                    </p>
                </BaseTextBlock>
                <BaseSidebar>
                    <p>
                        Уже более десяти лет &laquo;Норникель&raquo; участвует в&nbsp;спасении белых медведей.
                        В&nbsp;последние годы компания расширяет количество своих программ в&nbsp;области изучения
                        и&nbsp;сохранения биоразнообразия, в&nbsp;том числе редких видов.
                    </p>
                </BaseSidebar>
            </SectionWhite>
        </MainSection>
    </div>
</template>

<script>
import BaseHero from '@/layout/BaseHero.vue'
import MainSection from '@/layout/MainSection'
import SectionWhite from '@/layout/SectionWhite.vue'
import BaseTextBlock from '@/components/BaseTextBlock.vue'
import BaseSidebar from '@/components/BaseSidebar'

export default {
    components: {
        BaseHero,
        //     SectionOrange,
        SectionWhite,
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
            heroDescr: 'Как оценить состояние экосистемы? Как отличить естественные процессы в&nbsp;сообществе живых организмов от&nbsp;изменений, которые происходят под влиянием антропогенных и&nbsp;техногенных факторов? &laquo;Норникель&raquo; уделяет большое внимание сохранению биоразнообразия, и&nbsp;для него это важные вопросы. Чтобы получить на&nbsp;них ответ и&nbsp;эффективно отслеживать изменения, компания поручила учёным разработать показатель для оценки состояния экосистем. И&nbsp;учёные разработали для компании Интегральный показатель состояния экосистем, сокращённо&nbsp;&mdash; ИПСЭ.'
        }
    }
}
</script>

<style lang="scss">
.white-bears {
    .title {
        margin-bottom: 28px;
        font-size: 34px;
        font-weight: 600;
        line-height: 130%;
        color: #004C97;

        @media (max-width: 768px) {
            margin-bottom: 24px;
            font-size: 28px;
        }
    }
}
</style>