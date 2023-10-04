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
                <div class="treasures__map treasures__map-1">
                    <BaseNumberBlock class="number-block-1" :textTop="'16&nbsp;июля 1992&nbsp;г.'"
                        :textBottom="'дата создания'" />
                    <BaseNumberBlock class="number-block-2" :textTop="'14&nbsp;687&nbsp;га'"
                        :textBottom="'площадь заповедника'" />
                    <BasePhoto class="treasures__photo-block" :img="'img/treasures-img-1.jpg'" />
                    <div class="treasures__map-text treasures__map-text-1">
                        Вместе с&nbsp;норвежским национальным парком &laquo;Эвре-Пасвик&raquo; и&nbsp;финским
                        &laquo;Вятсяри&raquo; образует трёхсторонний трансграничный парк &laquo;Пасвик-Инари&raquo;
                    </div>
                    <div class="treasures__map-text treasures__map-text-2">
                        Границы заповедника находятся в&nbsp;15&nbsp;км от&nbsp;предприятий &laquo;Норникеля&raquo;
                    </div>
                </div>

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
            <SectionOrange>
                <BaseTextBlock class="mb-60" :title="'Лапландский заповедник'" :undertitle="'Мурманская область'">
                    <p class="mb-10">
                        Один из&nbsp;старейших заповедников России. Его основали в&nbsp;январе 1930 года для сохранения
                        популяции дикого северного оленя и&nbsp;защиты природы в&nbsp;нетронутом первозданном состоянии.
                    </p>
                    <p>
                        Границы заповедника находятся в&nbsp;7&nbsp;км от&nbsp;предприятий &laquo;Норникеля&raquo;.
                    </p>
                </BaseTextBlock>
            </SectionOrange>
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
import SectionOrange from '@/layout/SectionOrange.vue'
import BaseTextBlock from '@/components/BaseTextBlock.vue'
import BaseSidebar from '@/components/BaseSidebar'
import BaseNumberBlock from "@/components/BaseNumberBlock.vue";
import BasePhoto from "@/components/BasePhoto.vue";

export default {
    components: {
        BaseHero,
        SectionOrange,
        SectionWhite,
        BaseTextBlock,
        MainSection,
        BaseSidebar,
        //     BaseTooltip,
        //     BaseDropdownInfo,
        //     BaseCollageInfo,
        BasePhoto,
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

    &__map {
        position: relative;
        height: 36.667rem;
        margin-bottom: 3.95833rem;
        background-image: url(../../public/img/treasures-map-1.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100%;

        @supports (background-image: url(../../public/img/treasures-map-1.webp)) {
            background-image: url(../../public/img/treasures-map-1.webp);
        }

        &-text {
            position: absolute;
            font-size: 1.25rem;
            font-weight: 300;
            line-height: 130%;
        }

        &-1 {
            .treasures__photo-block {
                position: absolute;
                top: 14.4rem;
                left: 55rem;
            }

            .treasures__map-text-1 {
                width: 23rem;
                top: 28.4rem;
                left: 8.4rem;
            }

            .treasures__map-text-2 {
                width: 20rem;
                top: 28.4rem;
                left: 69.4rem;
            }

            .number-block {
                border-left: none;
                width: 22rem;

                &-1 {
                    bottom: unset;
                    top: 2.4rem;
                    left: 69.4rem;
                }

                &-2 {
                    bottom: unset;
                    top: 2.3rem;
                    left: 10.4rem;
                }
            }
        }
    }

}
</style>