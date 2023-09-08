<template>
    <div>
        <BaseHero :title="'Кольский дивизион. Природные обитатели Кольского Заполярья'" :descr="heroDescr"
            :img="'img/hero5.jpg'" :imgMobile="'img/hero5-mobile.jpg'" />
        <MainSection>
            <SectionWhite>
                <BaseTextBlock class="text mb-40" :title="'Особенности дивизиона'" :tooltip="true">
                    <p class="mb-10">
                        Кольский
                        <BaseTooltip :word="'дивизиона'">
                            Компании объединяют в&nbsp;дивизион предприятия одного региона или объекты с&nbsp;общей задачей,
                            например, перевозка сырья или энергоснабжение. Деление на&nbsp;дивизионы (от&nbsp;французского
                            слова division&nbsp;&mdash; &laquo;разделение&raquo;) упрощает управление крупной организацией.
                        </BaseTooltip>
                        &laquo;Норникеля&raquo; составляют объекты Кольской горно-металлургической
                        компании (ГМК), созданные на&nbsp;базе старейших предприятий по&nbsp;добыче и&nbsp;переработке
                        никеля&nbsp;&mdash; комбинатов &laquo;Североникель&raquo; и&nbsp;&laquo;Печенганикель&raquo;.
                        Подразделения ГМК территориально удалены друг от&nbsp;друга и&nbsp;образуют два
                        кластера&nbsp;&mdash; &laquo;Мончегорский&raquo; и&nbsp;&laquo;Никель&nbsp;&mdash;
                        Заполярный&raquo;.
                    </p>
                    <p>
                        Сегодня компания &laquo;Норникель&raquo; много внимания уделяет модернизации предприятий Кольского
                        дивизиона, стремясь сократить промышленный след и&nbsp;бережно относясь к&nbsp;окружающей среде.
                    </p>
                </BaseTextBlock>
                <!-- scroll -->

            </SectionWhite>
            <SectionOrange>
                <BaseTextBlock class="text mb-40">
                    Некоторые редкие виды могут проживать в&nbsp;зонах воздействия предприятий, несмотря на&nbsp;шум или
                    другие факторы воздействия. Ведь для их&nbsp;выживания главное&nbsp;&mdash; наличие корма
                    и&nbsp;отсутствие беспокойства со&nbsp;стороны человека.
                </BaseTextBlock>
                <BaseSidebar>
                    <p>
                        Минимизировать накопленный за&nbsp;многие десятилетия техногенный след, восстановить
                        и&nbsp;сохранить экосистемы Кольского Заполярья&nbsp;&mdash; важные пункты экологической программы
                        &laquo;Норникеля&raquo; в&nbsp;Кольском дивизионе
                    </p>
                </BaseSidebar>
            </SectionOrange>
        </MainSection>
    </div>
</template>

<script>
import BaseHero from '@/layout/BaseHero.vue'
import SectionOrange from '@/layout/SectionOrange.vue'
import SectionWhite from '@/layout/SectionWhite.vue'
import MainSection from '@/layout/MainSection'
import BaseTooltip from '@/components/ BaseTooltip.vue'
import BaseTextBlock from '@/components/BaseTextBlock.vue'
import BaseSidebar from '@/components/BaseSidebar'
export default {
    components: {
        BaseHero,
        SectionOrange,
        SectionWhite,
        // BigMap,
        BaseTextBlock,
        MainSection,
        BaseSidebar,
        BaseTooltip,
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
            ],
            heroDescr: 'Растительный и&nbsp;животный мир рядом с&nbsp;промышленными площадками &laquo;Норникеля&raquo; в&nbsp;Мурманской области'
        }
    }
}
</script>