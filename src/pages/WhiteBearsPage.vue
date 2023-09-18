<template>
    <div class="white-bears">
        <BaseHero :title="'Как «Норникель» помогает сохранить популяцию белого медведя'" :descr="heroDescr"
            :img="'img/hero6.jpg'" :imgMobile="'img/hero6-mobile.jpg'" />
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
            heroDescr: 'Когда‑то вся Арктика принадлежала белым медведям: на&nbsp;Севере не&nbsp;было зверей, которые могли&nbsp;бы на&nbsp;равных соперничать с&nbsp;ними. Но&nbsp;глобальное изменение климата и&nbsp;соседство с&nbsp;людьми привело полярных хищников на&nbsp;грань вымирания: сейчас, по&nbsp;оценкам учёных, в&nbsp;мире осталось не&nbsp;более 25&nbsp;тыс. особей, из&nbsp;них 5&ndash;6&nbsp;тыс. живут на&nbsp;территории нашей страны.'
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