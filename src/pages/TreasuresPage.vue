<template>
    <div class="treasures">
        <BaseHero :title="'Сокровищницы биоразнообразия'" :descr="heroDescr" :img="'img/hero8.jpg'"
            :imgMobile="'img/hero6-mobile.jpg'" />
        <MainSection>
            <SectionWhite>
                <BaseTextBlock class="treasures__start">
                    <picture>
                        <source type="image/webp" srcset="img/treasures-1.webp">
                        <img src="img/treasures-1.png" alt="">
                    </picture>
                    <div class="title">Заповедники Кольского&nbsp;дивизиона</div>
                </BaseTextBlock>

                <BaseTextBlock class="mb-60" :title="'Заповедник «Пасвик»'" :undertitle="'Мурманская область'">
                    Заповедник &laquo;Пасвик&raquo; узкой полосой вытянулся вдоль государственной границы России
                    и&nbsp;Норвегии. В&nbsp;переводе с&nbsp;языка саамов &laquo;Пасвик&raquo; означает &laquo;святая
                    река&raquo;&nbsp;&mdash; так местные жители называли реку Паз, которая протекает по&nbsp;особо
                    охраняемой природной территории. <br /><br />Это первый заповедник в&nbsp;нашей стране, созданный после
                    распада
                    СССР, и&nbsp;самый молодой заповедник Мурманской области. &laquo;Пасвик&raquo; первым из&nbsp;российских
                    заповедников стал членом Федерации Европарк и&nbsp;получил её&nbsp;сертификат.
                </BaseTextBlock>

                <!---->

                <BaseTextBlock class="mb-60" :title="'Флора и фауна'">
                    Больше половины территории &laquo;Пасвика&raquo; покрыто сосновым лесом, а&nbsp;оставшаяся
                    часть&nbsp;&mdash; рекой и&nbsp;болотами. Заповедник создавался ради сохранения и&nbsp;изучения этих
                    природных зон и&nbsp;их&nbsp;обитателей.
                </BaseTextBlock>

                <div class="number-blocks text-block__wrap mb-60">
                    <BaseNumberBlock :textTop="'242&nbsp;вида'" :textBottom="'птиц'" />
                    <BaseNumberBlock :textTop="'32&nbsp;вида'" :textBottom="'млекопитающих'" />
                    <BaseNumberBlock :textTop="'1814&nbsp;видов'" :textBottom="'растений и&nbsp;грибов'" />
                </div>

                <BaseTextBlock class="mb-60">
                    Но&nbsp;&laquo;Пасвик&raquo; впечатляет не&nbsp;только своей природой&nbsp;&mdash; немало интересного
                    здесь найдут этнографы и&nbsp;антропологи. В&nbsp;разное время на&nbsp;территории, занятой в&nbsp;наши
                    дни заповедником, жили саамы, финны, русские и&nbsp;норвежцы, а&nbsp;на&nbsp;некоторых участках
                    обнаружены стоянки охотников эпохи раннего неолита.<br /><br />На&nbsp;территории заповедника
                    зарегистрировано
                    несколько десятков видов редких животных и&nbsp;растений, занесённых в&nbsp;Красную книгу. Вот лишь
                    некоторые из&nbsp;них:
                </BaseTextBlock>

                <!---->
                <BaseTextBlock class="mb-60" :title="'Помощь «Норникеля»'">
                    <p class="mb-10">
                        В&nbsp;2017 году компания &laquo;Норникель&raquo; выделила более 70&nbsp;млн рублей
                        на&nbsp;проектирование и&nbsp;строительство визит-центра заповедника &laquo;Пасвик&raquo;
                        в&nbsp;посёлке Никель. Здесь проводятся научные форумы, читают лекции об&nbsp;окружающей среде,
                        работают временные и&nbsp;постоянные выставки.
                    </p>
                    <p class="mb-10">
                        В&nbsp;2019 году &laquo;Норникель&raquo; приобрёл для &laquo;Пасвика&raquo; уникальную передвижную
                        эколабораторию. Этот автомобиль приспособлен к&nbsp;суровым условиям Арктики и&nbsp;может
                        преодолевать реки, бездорожье и&nbsp;скалистую тундру.
                    </p>
                    <p>
                        В&nbsp;лаборатории есть всё, что необходимо учёным для повседневной работы. Однако этот
                        автомобиль&nbsp;&mdash; не&nbsp;просто рабочее место для учёных, но&nbsp;и&nbsp;настоящий дом:
                        в&nbsp;нём можно спать, готовить пищу. И&nbsp;что важнее всего&nbsp;&mdash; жить в&nbsp;нём гораздо
                        безопаснее, чем в&nbsp;палатках.
                    </p>
                </BaseTextBlock>
                <BaseTextBlock class="mb-60">
                    <p class="mb-10">
                        Кроме того, в&nbsp;рамках благотворительной программы &laquo;Мир новых возможностей&raquo; компания
                        &laquo;Норникель&raquo; неоднократно поддерживала &laquo;Пасвик&raquo;, выделяя средства
                        на&nbsp;открытие новых экологических троп и&nbsp;проведение мониторинга природных комплексов, флоры
                        и&nbsp;фауны заповедника.
                    </p>
                    <p class="mb-10">
                        Сумма ежегодных мониторинговых контрактов составляет 5,385&nbsp;млн. рублей. Дополнительно
                        &laquo;Норникелем&raquo; выделено 2&nbsp;млн. рублей на&nbsp;помощь в&nbsp;восстановлении популяции
                        европейской жемчужницы.
                    </p>
                    <p>
                        На&nbsp;выделяемые &laquo;Норникелем&raquo; средства сотрудники заповедника проводят научные
                        исследования, реализуют программы восстановления популяций редких видов и&nbsp;ведут мониторинг
                        крупных млекопитающих. Волонтёры &laquo;Норникеля&raquo; застроили экотропами пешеходные маршруты
                        заповедника и&nbsp;каждый год их&nbsp;обновляют.
                    </p>
                </BaseTextBlock>
            </SectionWhite>
            <SectionWhite>
                <BaseSidebar>
                    <p>
                        Сотрудничество с&nbsp;заповедниками&nbsp;&mdash; один из&nbsp;инструментов &laquo;Норникеля&raquo;
                        по&nbsp;сохранению и&nbsp;восстановлению биоразнообразия. Оказываемая компанией ежегодная шефская
                        помощь исчисляется десятками миллионов рублей. Средства идут на&nbsp;покупку новой техники для
                        сотрудников особо охраняемых территорий, а&nbsp;также на&nbsp;научную и&nbsp;просветительскую
                        работу.
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
import BaseNumberBlock from "@/components/BaseNumberBlock.vue";

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
            BaseNumberBlock
    },
    data() {
        return {
            heroDescr: '&laquo;Норникель&raquo; на&nbsp;протяжении более чем десяти лет сотрудничает с&nbsp;заповедниками и&nbsp;заказниками Таймыра, Забайкалья и&nbsp;Кольского полуострова. При поддержке компании на&nbsp;особо охраняемых территориях появляются новые экологические маршруты и&nbsp;реализуются программы по&nbsp;изучению и&nbsp;сохранению редких видов животных и&nbsp;растений.'
        }
    }
}
</script>

<style lang="scss">
.treasures {
    .hero__descr {
        width: 47rem;

        @media (max-width: 768px) {
            width: unset;
        }
    }

    .text-block__wrap {
        width: 36.25rem;

        @media (max-width: 768px) {
            width: unset;
        }
    }

    .title {
        font-size: 2.36111rem;
        font-weight: 600;
        line-height: 130%;
        color: #D38235;

        @media (max-width: 768px) {
            font-size: 28px;
        }
    }

    .text-center {
        text-align: center;
    }

    &__start {
        text-align: center;
        margin-bottom: 4.16667rem;

        img {
            width: 26.528rem;
            height: 8.542rem;
            margin-bottom: 1.875rem;
        }
    }

    .number-blocks {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 2.778rem;
        width: 51.7rem;

        @media (max-width: 768px) {
            flex-direction: column;
            gap: 7.467rem;
            width: 100%;
            align-items: flex-start;
        }

        .number-block {
            position: static;
            width: 15.278rem;

            @media (max-width: 768px) {
                margin-top: 0;
            }
        }
    }
}
</style>