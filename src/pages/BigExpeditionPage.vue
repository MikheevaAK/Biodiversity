<template>
    <div class="big-wexpedition">
        <BaseHero :title="'Большая научная экспедиция'" :descr="heroDescr" :img="'img/hero7.jpg'"
            :imgMobile="'img/hero6-mobile.jpg'" />
        <MainSection>
            <BaseTextBlock class="mb-100">
                <p class="mb-10">
                    Авария 2020 года на&nbsp;норильской ТЭЦ-3 привела к&nbsp;значительным изменениям в&nbsp;экологической
                    политике &laquo;Норникеля&raquo; и&nbsp;в&nbsp;сознании работников. В&nbsp;компании решили
                    не&nbsp;просто снизить воздействие производств на&nbsp;окружающую среду до&nbsp;минимальных значений,
                    а&nbsp;добиться нулевых нетто-потерь биоразнообразия и&nbsp;постепенного восстановления нарушенных
                    экосистем. Но&nbsp;без достоверной научной информации понять, что для этого требуется, невозможно.
                    Первым шагом в&nbsp;правильном направлении стала Большая Норильская экспедиция, которая прошла
                    с&nbsp;2020 по&nbsp;2022&nbsp;годы.
                </p>
                <p class="mb-28">
                    &laquo;Норникель&raquo; и&nbsp;Сибирское отделение Российской академии наук решили продолжить
                    сотрудничество. Так родилась идея Большой научной экспедиции. Она стартовала одновременно
                    с&nbsp;завершением Большой Норильской экспедиции. Компании было важно оценить воздействие всех своих
                    производств не&nbsp;только на&nbsp;Таймыре, но&nbsp;и&nbsp;в&nbsp;других регионах деятельности Компании:
                    на&nbsp;Кольском полуострове, в&nbsp;Забайкалье и&nbsp;в&nbsp;Ямало-Ненецком автономном округе,
                    а&nbsp;также вдоль Северного морского пути.
                </p>

                <a class="link" href="/expedition">
                    <div>Читать про Норильскую экспедицию</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="8" viewBox="0 0 20 8" fill="none">
                        <path
                            d="M19.8536 4.35355C20.0488 4.15829 20.0488 3.84171 19.8536 3.64645L16.6716 0.464466C16.4763 0.269204 16.1597 0.269204 15.9645 0.464466C15.7692 0.659728 15.7692 0.976311 15.9645 1.17157L18.7929 4L15.9645 6.82843C15.7692 7.02369 15.7692 7.34027 15.9645 7.53553C16.1597 7.7308 16.4763 7.7308 16.6716 7.53553L19.8536 4.35355ZM0 4.5H19.5V3.5H0V4.5Z"
                            fill="black" />
                    </svg>
                </a>
            </BaseTextBlock>
            <div class="big-wexpedition__tasks">
                <div class="big-wexpedition__tasks-title title">
                    Задачи Большой научной экспедиции
                </div>

                <div class="big-wexpedition__tasks-wrap">
                    <div class="big-wexpedition__tasks-img-block">
                        <img src="img/tasks-block.png" alt="">
                        <div>Определить мероприятия <br />для сохранения биоразнообразия <br />животных и&nbsp;растений
                        </div>
                    </div>
                    <div class="big-wexpedition__tasks-item big-wexpedition__tasks-item_1">
                        <div class="big-wexpedition__tasks-number">
                            1
                        </div>
                        <div class="big-wexpedition__tasks-text">
                            Изучить, какое воздействие на&nbsp;биоразнообразие экосистем оказывает деятельность предприятий
                            «Норникеля»
                        </div>
                    </div>
                    <div class="big-wexpedition__tasks-item big-wexpedition__tasks-item_2">
                        <div class="big-wexpedition__tasks-number">
                            2
                        </div>
                        <div class="big-wexpedition__tasks-text">
                            Опробовать на&nbsp;практике методы, которые позволяют отследить изменения в&nbsp;состоянии
                            экосистем на&nbsp;ранних этапах, когда они&nbsp;ещё&nbsp;незаметны&nbsp;глазу
                        </div>
                    </div>
                    <div class="big-wexpedition__tasks-item big-wexpedition__tasks-item_3">
                        <div class="big-wexpedition__tasks-number">
                            3
                        </div>
                        <div class="big-wexpedition__tasks-text">
                            Определить степень негативного воздействия (уровень условных потерь биоразнообразия)
                        </div>
                    </div>
                    <div class="big-wexpedition__tasks-item big-wexpedition__tasks-item_4">
                        <div class="big-wexpedition__tasks-number">
                            4
                        </div>
                        <div class="big-wexpedition__tasks-text">
                            Изучить и&nbsp;оценить текущее состояние экосистем, разнообразие растений и&nbsp;животных
                        </div>
                    </div>
                </div>
            </div>
            <BaseTextBlock class="mb-60 text-center">
                Кроме того, в&nbsp;ходе экспедиции учёные разрабатывали и&nbsp;апробировали методы, которые позволяют
                провести чёткую границу между естественными причинами изменения экосистем и&nbsp;изменениями из-за
                промышленного воздействия.
            </BaseTextBlock>
            <BaseSidebar class="mb-100">
                <p>
                    &laquo;Норникель&raquo; работает над сохранением 14&nbsp;морских экосистем и&nbsp;15&nbsp;экосистем
                    суши. Сотрудничество с&nbsp;научными организациями&nbsp;&mdash; одно из&nbsp;обязательств, взятых
                    компанией в&nbsp;рамках экологической стратегии.
                </p>
            </BaseSidebar>
            <BaseTextBlock class="mb-40" :title="'Старт экспедиции'">
                Полевой этап работ Большой научной экспедиции начался весной 2022&nbsp;года. Несколько групп учёных
                отправились в&nbsp;локации производственной активности &laquo;Норникеля&raquo;, чтобы обследовать территории
                в&nbsp;радиусе примерно 15&nbsp;км вокруг промышленных площадок.
            </BaseTextBlock>
            <div class="big-wexpedition__tasks-map mb-100">
                <img src="img/tasks-block-map.svg" alt="">
                <BaseNumberBlock :textTop="'в&nbsp;5&nbsp;регионах'"
                    :textBottom="'провели полевые работы всего&nbsp;за&nbsp;восемь месяцев'" />
            </div>

            <ScrollSwiper class="mb-100" />


            <BaseTextBlock class="mb-100">
                <p class="mb-10">
                    Необъятность сибирских и&nbsp;арктических просторов&nbsp;&mdash; не&nbsp;единственная сложность,
                    с&nbsp;которой столкнулись учёные. Немало проблем доставили сложный ландшафт, суровый климат
                    и&nbsp;трудности с&nbsp;логистикой: в&nbsp;некоторые районы можно было добраться только
                    на&nbsp;вертолёте. Вот почему каждый полевой выезд становился комплексной мини-экспедицией.
                </p>
                <p>
                    В&nbsp;поле зрения учёных попали не&nbsp;только хорошо изученные районы (например, Таймыр),
                    но&nbsp;и&nbsp;те, где исследовательская работа прежде никогда не&nbsp;проводилась. Среди
                    последних&nbsp;&mdash; газовые месторождения на&nbsp;Гыданском полуострове Ямало-Ненецкого автономного
                    округа.
                </p>
                <BaseNumberBlock :textTop="'71&nbsp;300&nbsp;км&sup2;'"
                    :textBottom="'общая площадь территории, в&nbsp;пределах которой проводился сбор научных проб'" />
            </BaseTextBlock>
            <BaseTextBlock class="mb-40" :title="'Участники экспедиции'">
                Большая научная экспедиция объединила представителей 13&nbsp;научно-исследовательских институтов, вузов
                и&nbsp;заповедников.
            </BaseTextBlock>

            <img class="big-wexpedition-team mb-100" src="img/big-wexpedition-team.webp" alt="">

            <div class="big-wexpedition__plants mb-100">
                <div class="big-wexpedition__plants-title title mb-40">
                    Предварительные результаты
                </div>
                <BaseTextBlock class="mb-80">
                    Во&nbsp;время полевых работ участники экспедиции изучили различные группы организмов, растений,
                    а&nbsp;также почвы. Полученные данные позволили им&nbsp;понять, как промышленные объекты
                    &laquo;Норникеля&raquo; влияют на&nbsp;экосистемы. Так, удалось выделить зоны интенсивного, умеренного
                    и&nbsp;незначительного воздействия. Каждая из&nbsp;них характеризуется своими условиями обитания, что
                    сказывается на&nbsp;видовом разнообразии.
                </BaseTextBlock>
                <BaseTextBlock class="mb-100" :title="'Почвы, растительность и грибы'">
                    <p class="mb-10">
                        Во&nbsp;время изучения почв во&nbsp;всех трёх промышленных дивизионах учёные обнаружили несколько
                        природных геохимических аномалий. Так, в&nbsp;Забайкалье они выявили участки с&nbsp;высоким
                        присутствием в&nbsp;почве соединений мышьяка, а&nbsp;в&nbsp;Норильском и&nbsp;Кольском
                        дивизионах&nbsp;&mdash; никеля, меди и&nbsp;хрома.
                    </p>
                    <p>
                        Важно отметить, что речь идёт не&nbsp;просто о&nbsp;локальных загрязнениях на&nbsp;относительно
                        небольшой территории, но&nbsp;и&nbsp;о&nbsp;природных особенностях&nbsp;&mdash; промышленные
                        предприятия по&nbsp;добыче и&nbsp;переработке полезных ископаемых расположены как раз в&nbsp;тех
                        местах, где богатые металлами руды близко подходят к&nbsp;поверхности земной коры, и&nbsp;металлы
                        из&nbsp;рудных тел легко мигрируют в&nbsp;почву. Это явление учёные называют геохимической
                        аномалией.
                    </p>
                </BaseTextBlock>
                <BaseSidebar class="mb-100">
                    <p>
                        По&nbsp;мнению исследователей, высокие концентрации химических элементов на&nbsp;этих участках
                        угрожают разнообразию растений и&nbsp;животных, а&nbsp;потому необходимо при помощи различных
                        мероприятий привести показатели почв к&nbsp;благоприятным значениям там, где это возможно.
                        К&nbsp;сожалению, в&nbsp;местах геохимических аномалий это невозможно.
                    </p>
                </BaseSidebar>
            </div>

            <div class="big-wexpedition__insects mb-100">
                <BaseTextBlock class="mb-40" :title="'Насекомые и пауки'">
                    <p class="mb-10">
                        Работа предприятий &laquo;Норникеля&raquo;, по&nbsp;мнению участников Большой научной экспедиции,
                        не&nbsp;оказывает серьёзного влияния на&nbsp;жизнь насекомых. Например, в&nbsp;Норильском дивизионе
                        большинство видов жужелиц одинаково хорошо чувствуют себя как в&nbsp;непосредственной близости
                        от&nbsp;промышленных площадок, так и&nbsp;на&nbsp;значительном от&nbsp;них удалении. Заметную
                        отрицательную реакцию на&nbsp;выбросы демонстрируют только четыре вида жуков.
                    </p>
                    <p>
                        Разнообразие пауков на&nbsp;территории Кольского дивизиона напрямую зависит от&nbsp;количества
                        растений на&nbsp;изученных участках: чем меньше растительности, тем меньше арахнид там проживает.
                        Но&nbsp;в&nbsp;скудности флоры, по&nbsp;мнению биологов, повинны не&nbsp;только промышленные
                        выбросы, но&nbsp;и&nbsp;пожары, которые возникают вблизи городов и&nbsp;посёлков из-за человека.
                        Кроме того, северные широты сами по&nbsp;себе не&nbsp;отличаются богатым разнообразием.
                    </p>
                </BaseTextBlock>
                <BaseSidebar class="mb-100">
                    <p>
                        Концентрация загрязняющих веществ на&nbsp;исследовательских полигонах всех четырёх дивизионов
                        &laquo;Норникеля&raquo; не&nbsp;достигает значений, способных существенно повлиять на&nbsp;свойства
                        экологических сообществ жужелиц.
                    </p>
                </BaseSidebar>
            </div>

            <div class="big-wexpedition__birds mb-100">
                <BaseTextBlock class="mb-40" :title="'Птицы'">
                    <p class="mb-10">
                        На&nbsp;орнитофауну Норильского дивизиона значительно влияют изменения ландшафта и&nbsp;отторжение
                        территорий под строительство новых промышленных объектов. Вмешательство человека&nbsp;&mdash;
                        например, изъятие территорий под карьеры&nbsp;&mdash; вынуждает птиц покидать привычные места
                        гнездований и&nbsp;искать новые.
                    </p>
                    <p class="mb-10">
                        В&nbsp;непосредственной близости от&nbsp;промышленных площадок птиц очень мало,
                        но&nbsp;на&nbsp;расстоянии уже нескольких километров ситуация значительно улучшается.
                    </p>
                    <p class="mb-10">
                        В&nbsp;холодное и&nbsp;тёплое время года видовое разнообразие птиц всех трёх дивизионов заметно
                        отличается: многие птицы предпочитают зимовать в&nbsp;южных регионах.
                    </p>
                    <p class="mb-10">
                        Наблюдали за&nbsp;птицами учёные и&nbsp;во&nbsp;время плавания по&nbsp;Северному морскому пути.
                        В&nbsp;основном это были морские виды (большой и&nbsp;хохлатый баклан, северная олуша, большой
                        поморник, гага-гребенушка и&nbsp;другие), однако на&nbsp;глаза орнитологам попались также охраняемые
                        виды, такие как сапсан и&nbsp;рогатый жаворонок.
                    </p>
                    <p>
                        Видовое разнообразие птиц, встреченных летом и&nbsp;осенью над акваториями Баренцева и&nbsp;Карского
                        морей, отличалось незначительно&nbsp;&mdash; 29&nbsp;и&nbsp;24&nbsp;вида соответственно.
                    </p>
                </BaseTextBlock>
                <BaseSidebar class="mb-100">
                    <p>
                        Наиболее значительное воздействие на&nbsp;сообщества птиц предприятия &laquo;Норникеля&raquo;
                        оказывают в&nbsp;Норильском промышленном районе.
                        А&nbsp;в&nbsp;соседнем Ямало-Ненецком районе, напротив, влияние настолько незначительно, что учёные
                        затруднились даже выделить зоны воздействия.
                    </p>
                </BaseSidebar>
            </div>
            <div class="big-wexpedition__animals mb-100">
                <BaseTextBlock class="mb-40" :title="'Млекопитающие'">
                    <p class="mb-10">
                        Как&nbsp;и&nbsp;в&nbsp;случае с&nbsp;птицами, на&nbsp;видовое разнообразие млекопитающих влияют
                        не&nbsp;только изменение ландшафта и&nbsp;промышленное воздействие на&nbsp;воздух, воду
                        и&nbsp;почву, но&nbsp;и&nbsp;простое изъятие территорий.
                    </p>
                    <p>
                        Впрочем, экспедиция показала, что&nbsp;сразу за&nbsp;границами промышленной зоны некоторые
                        экосистемы практически не&nbsp;изменились, а&nbsp;в&nbsp;некоторых случаях даже&nbsp;улучшили свои
                        показатели. Так, в&nbsp;Забайкалье обочины дорог, ведущие к&nbsp;предприятиям «Норникеля», заросли
                        кустарником и&nbsp;стали убежищем и&nbsp;кормовой базой для&nbsp;косуль и&nbsp;зайцев.
                        Шум&nbsp;грузовиков животных не&nbsp;пугает, зато на&nbsp;этих территориях нет&nbsp;самых опасных
                        их&nbsp;врагов&nbsp;— охотников.
                    </p>
                </BaseTextBlock>
                <BaseSidebar class="mb-100">
                    <p>
                        Учёные пришли к&nbsp;выводу, что&nbsp;наличие убежища, воды и&nbsp;пищи для&nbsp;животных гораздо
                        важнее помех от&nbsp;предприятий.
                    </p>
                </BaseSidebar>
            </div>
            <div class="big-wexpedition__water-animals mb-100">
                <BaseTextBlock class="mb-40" :title="'Морские млекопитающие'">
                    <p class="mb-10">
                        На&nbsp;жизнь морских обитателей влияют шум, издаваемый судами, а&nbsp;также возможные разливы
                        нефтепродуктов. Второй фактор наиболее опасен: попадая на&nbsp;кожу, топливо оставляет химические
                        ожоги, изменяет воздухо- и&nbsp;теплообмен в&nbsp;организмах морских млекопитающих. Это&nbsp;может
                        стать причиной гибели животных.
                    </p>
                    <p>
                        Исследования в&nbsp;рамках Большой научной экспедиции проводилось с&nbsp;борта судна «Норникеля».
                        На&nbsp;нём&nbsp;учёные отправились по&nbsp;тому&nbsp;же&nbsp;маршруту, по&nbsp;которому регулярно
                        перемещаются суда компании. Все&nbsp;встречи с&nbsp;морскими млекопитающими фиксировались
                        в&nbsp;судовом дневнике исследований.
                    </p>
                </BaseTextBlock>
                <BaseSidebar class="mb-100">
                    <p>
                        За&nbsp;время работ на&nbsp;судах «Норникеля» при&nbsp;переходе по&nbsp;Северному морскому пути
                        не&nbsp;происходило разлива нефтепродуктов. Не&nbsp;отмечался он&nbsp;и&nbsp;во&nbsp;время стоянок
                        судов в&nbsp;портах Дудинки и&nbsp;Мурманска.
                        Разливов и&nbsp;не&nbsp;могло произойти, ведь&nbsp;«Норникель» принимает превентивные меры
                        для&nbsp;предотвращения потенциальных разливов нефтепродуктов и&nbsp;следует всем правилам обращения
                        с&nbsp;судовыми сточными водами.
                    </p>
                </BaseSidebar>
            </div>
        </MainSection>
    </div>
</template>

<script>
import BaseHero from '@/layout/BaseHero.vue'
import MainSection from '@/layout/MainSection'
// import SectionWhite from '@/layout/SectionWhite.vue'
import BaseTextBlock from '@/components/BaseTextBlock.vue'
import BaseSidebar from '@/components/BaseSidebar'
import BaseNumberBlock from "@/components/BaseNumberBlock.vue";
import ScrollSwiper from '@/components/BigExpeditionScrollSwiper.vue'
export default {
    components: {
        BaseHero,
        //     SectionOrange,
        // SectionWhite,
        BaseNumberBlock,
        BaseTextBlock,
        MainSection,
        BaseSidebar,
        ScrollSwiper,
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

<style lang="scss">
.big-wexpedition {
    .link {
        display: flex;
        align-items: center;
        gap: 0.625rem;
        padding: 0.764rem 1.39rem;
        border-radius: 32px;
        background: #F7F6F2;
        font-size: 1.25rem;
        font-weight: 300;
        color: var(--Gray-1, #333);
        line-height: 130%;
        transition: .3s;
        width: max-content;

        @media (max-width: 768px) {
            padding: 3.2rem;
            font-size: 4.8rem;
            text-align: center;
            width: unset;
            border-radius: 34px
        }

        svg {
            width: 20px;
            height: 8px;

            @media (max-width: 768px) {
                display: none;
            }
        }

        &:hover {
            color: #fff;
            background: var(--copper, #D38235);

            svg path {
                fill: #FFF;
            }
        }
    }

    .title {
        margin: 0 auto;
        color: var(--copper, #D38235);
        text-align: center;
        font-size: 2.36111rem;
        font-weight: 600;
        line-height: 130%;
        width: 29rem;
    }

    .text-center {
        text-align: center;
    }

    &__tasks {
        margin: 0 auto;
        // width: 69.1875rem;

        &-title.title {
            margin-bottom: 4.722rem;
        }

        &-wrap {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0px 19.87rem 5.55556rem 18.81rem;
            width: 55.6875rem;
            height: 35.5rem;
            background-image: url(../../public/img/circle-group.svg);
            background-size: contain;
            background-repeat: no-repeat;
        }

        &-img-block {
            display: flex;
            flex-direction: column;
            margin-left: 7rem;
            text-align: center;
            justify-content: center;
            gap: 1.06rem;
            width: 25rem;

            img {
                width: 100%;
            }

            div {
                text-align: center;
                font-size: 1.52778rem;
                font-weight: 600;
                line-height: 130%;
            }
        }

        &-map {
            margin: 0 auto;
            width: 34.5rem;
            height: 18rem;
            position: relative;

            img {
                height: 100%;
            }

            .number-block {
                background-color: #fff;
                left: -15rem;
                border-right: 1px solid #333333;
                border-left: none;
                width: 20rem;
                left: -14rem;
                bottom: 2rem;
            }
        }

        &-item {
            position: absolute;
            display: flex;
            flex-direction: column;
            gap: 0.88rem;
            width: 17rem;

            &_1 {
                top: 2.5rem;
                left: -3rem;
            }

            &_2 {
                top: 2.5rem;
                right: -15rem;
            }

            &_3 {
                bottom: -1.5rem;
                left: -3rem;
            }

            &_4 {
                bottom: -1.5rem;
                right: -17rem;
            }
        }

        &-number {
            position: relative;
            width: 2.2223rem;
            height: 2.2223rem;
            padding: 0.45rem 0.75rem;
            border-radius: 100%;
            font-family: 'MuseoSansCyrl';
            background-color: #D38235;
            color: #fff;
            font-size: 1.25rem;
            font-weight: 500;
            line-height: 130%;

            &::after {
                content: '';
                position: absolute;
                top: -0.1rem;
                left: -0.1rem;
                right: -0.1rem;
                bottom: -0.1rem;
                background-image: url(../../public/img/svg/circle-bg.svg);
                background-repeat: no-repeat;
                background-position: center;
                background-size: 100%;

                @media (max-width: 768px) {
                    top: -0.5rem;
                    left: -0.5rem;
                    right: -0.5rem;
                    bottom: -0.5rem;
                }
            }

            @media (max-width: 768px) {
                width: 9.7937rem;
                height: 9.7937rem;
                font-size: 4.8rem;
                padding: 2rem 3.7rem;
            }
        }

        &-text {
            font-size: 1.25rem;
            font-weight: 300;
            line-height: 130%;
        }
    }


    &-team {
        width: 69.1875rem;
        height: 23.6875rem;
        margin: 0 auto;
        display: block;
    }

    &__plants {
        padding-bottom: 11rem;
        background-image: url(../../public/img/big-wexpedition-plants.webp);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: bottom;
    }

    &__insects {
        padding-bottom: 24rem;
        background-image: url(../../public/img/big-wexpedition-insects.webp);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: bottom;
    }

    &__birds {
        padding-bottom: 29rem;
        background-image: url(../../public/img/big-wexpedition-birds.webp);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: bottom;
    }

    &__animals {
        padding-bottom: 28rem;
        background-image: url(../../public/img/big-wexpedition-animals.webp);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: bottom;
    }

    &__water-animals {
        padding-bottom: 21.44rem;
        background-image: url(../../public/img/big-wexpedition-water-animals.webp);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: bottom;
    }
}
</style>