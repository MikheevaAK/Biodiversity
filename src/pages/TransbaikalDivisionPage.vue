<template>
    <div>
        <BaseHero :title="'Забайкальский дивизион. Природа в окрестностях Быстринского комбината'" :descr="heroDescr"
            :img="'img/hero4.jpg'" :imgMobile="'img/hero4-mobile.jpg'" />
        <MainSection>
            <SectionWhite>
                <BaseTextBlock class="text mb-40" :title="'Особенности дивизиона'" :tooltip="true">
                    Забайкальский дивизион
                    <BaseTooltip :word="'дивизиона'">
                        Компании объединяют в&nbsp;дивизион предприятия одного региона или объекты с&nbsp;общей задачей,
                        например, перевозка сырья или энергоснабжение. Деление на&nbsp;дивизионы (от&nbsp;французского слова
                        division&nbsp;&mdash; &laquo;разделение&raquo;) упрощает управление крупной организацией.
                    </BaseTooltip>
                    «Норникеля» отвечает за разработку золото-железо-медных руд Быстринского
                    месторождения. Сегодня это крупнейший проект в отрасли, начатый с нуля, на неосвоенных территориях.
                    Это позволило компании уже на старте внедрить передовые практики добычи и переработки руды, в том
                    числе сокращающие воздействие на окружающую среду.
                </BaseTextBlock>
                <!-- scroll -->

                <BaseTextBlock class="text mb-40" :title="'Быстринский горно-обогатительный комбинат'">
                    <p>
                        Комбинат расположился в&nbsp;труднодоступной местности Газимуро-Заводского района Забайкальского
                        края. Здесь перерабатывают руду Быстринского месторождения и&nbsp;получают медный, магнетитовый
                        и&nbsp;золотосодержащий концентраты.
                    </p>
                </BaseTextBlock>

                <BaseTextBlock class="text mb-40" :title="'Урюмканский заказник'">
                    <p>
                        Созданный в&nbsp;80-х природный заказник сохраняет экосистемы Забайкалья и&nbsp;поддерживает
                        экологический баланс. Промышленные объекты дивизиона расположены на&nbsp;расстоянии 22&nbsp;км
                        от&nbsp;границ заказника, и&nbsp;по&nbsp;мнению исследователей, не&nbsp;влияют на&nbsp;его природных
                        обитателей.
                    </p>
                </BaseTextBlock>
            </SectionWhite>
            <SectionOrange>
                <BaseTextBlock class="text mb-40">
                    <p class="mb-10">
                        Некоторые редкие виды могут присутствовать в&nbsp;зонах промышленного воздействия, несмотря
                        на&nbsp;шум, загрязнение и&nbsp;изъятие почв.
                    </p>
                    <p>
                        Для них приоритетным фактором выживания оказывается доступ к&nbsp;кормовой базе, которая обильнее
                        в&nbsp;местах обитания человека.
                    </p>
                </BaseTextBlock>
                <BaseSidebar>
                    <p>
                        Усиление промышленного воздействия природными факторами требует от&nbsp;&laquo;Норникеля&raquo;
                        внимательного отношения к&nbsp;состоянию экосистем дивизиона. Компания совместно с&nbsp;учёными
                        продолжит исследования в&nbsp;районе месторождения, чтобы сделать эти места максимально безопасными
                        для их&nbsp;обитателей
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