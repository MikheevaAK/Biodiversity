<template>
    <div class="transbaikal">
        <BaseHero :title="'Забайкальский дивизион. Природа в окрестностях Быстринского комбината'" :descr="heroDescr"
            :img="'img/hero4.jpg'" :imgMobile="'img/hero4-mobile.jpg'" />
        <MainSection>
            <SectionWhite>
                <BaseTextBlock class="text mb-40" :title="'Особенности дивизиона'" :tooltip="true">
                    Забайкальский
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

                <BigMap :circales="circales" :img="'img/transbaikal-big-map.jpg'" class="mb-100"
                    :imgMobile="'img/division-big-map-mobile.webp'">
                    <div class="circales">
                        <div class="circale-block">
                            <svg class="circale-block__img" xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                viewBox="0 0 14 14" fill="none">
                                <circle cx="7" cy="7" r="7" fill="#654EA3" />
                            </svg>

                            <div class="circale-block__text">Промышленные объекты</div>
                        </div>
                        <div class="circale-block">
                            <svg class="circale-block__img" xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                viewBox="0 0 14 14" fill="none">
                                <circle cx="7" cy="7" r="7" fill="#009CA6" />
                            </svg>

                            <div class="circale-block__text">Особо охраняемые природные территории</div>
                        </div>
                    </div>
                </BigMap>
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

                <picture>
                        <!-- <source type="image/webp" srcset="img/area.webp"> -->
                        <img src="img/area.png">
                    </picture>

                <BaseTextBlock class="text mb-40" :title="'Зона воздействия предприятий Забайкальского дивизиона'"
                    :tooltip="true">
                    <p class="mb-10">
                        По&nbsp;данным Большой Научной экспедиции, зона воздействия объектов &laquo;Норникеля&raquo;
                        на&nbsp;экосистемы дивизиона ограничена радиусом 10&nbsp;км.
                    </p>
                    <p class="mb-10">
                        Пояс интенсивного воздействия проходит не&nbsp;далее 1&nbsp;км от&nbsp;границ комбината, где учёные
                        обнаружили изменения в&nbsp;составе некоторых видов.
                    </p>
                    <p class="mb-10">
                        Сдвиг экологического равновесия связан не&nbsp;только с&nbsp;техническим нарушением почвы
                        и&nbsp;растительности, но&nbsp;и&nbsp;с&nbsp;местной природной аномалией: земля в&nbsp;районе
                        Быстринского месторождения биологически малопродуктивна, так как содержит повышенное количество
                        полуметалла мышьяка, который является канцерогеном.
                    </p>
                    <p>
                        По&nbsp;мере удаления от&nbsp;объектов комбината признаки промышленного воздействия сходят
                        на&nbsp;нет, приближаясь к&nbsp;состоянию
                        <BaseTooltip :word="'фоновых'">
                            На&nbsp;фоновых участках исследователи не&nbsp;обнаружили следов воздействия предприятий,
                            экосистемы здесь сохранены в&nbsp;их&nbsp;исходном, первозданном виде. Состояние биоразнообразия
                            на&nbsp;фоновых территориях принимают за&nbsp;эталонное и&nbsp;используют эти данные для
                            наблюдения за&nbsp;природой в&nbsp;зонах воздействия.
                        </BaseTooltip> территорий.
                    </p>
                </BaseTextBlock>
                <div class="transbaikal-radius mb-60">
                    <picture>
                        <source media="(max-width: 768px)" srcset="img/transbaikal-radius-mobile.png">
                        <img src="img/transbaikal-radius.png" alt="">
                    </picture>
                </div>
                <BaseSidebar>
                    <p>
                        Состояние природного окружения дивизиона подтверждает эффективность экологических технологий,
                        которые были использованы при строительстве Быстринского ГОК. Воздействие комбината
                        на&nbsp;экосистемы не&nbsp;выходит за&nbsp;территорию промышленных объектов
                    </p>
                </BaseSidebar>
            </SectionWhite>
            <SectionOrange>
                <BaseTextBlock class="text mb-60" :tooltip="true">
                    <div class="section-orange__title">
                        Кто обитает на юге Таймыра
                    </div>
                    <div class="section-orange__descr">
                        <p>
                            В&nbsp;зоне, прилегающей к&nbsp;Быстринскому комбинату, участники Большой Научной экспедиции
                            обнаружили несколько охраняемых
                            <BaseTooltip :word="'охраняемых'">
                                Редкие и&nbsp;находящиеся под угрозой исчезновения виды, чья численность сокращается или уже
                                сократилась до&nbsp;опасного уровня. Им&nbsp;присваивают статус охраняемых и&nbsp;заносят
                                в&nbsp;Красные книги&nbsp;&mdash; общероссийскую или региональные. Охранный статус запрещает
                                охоту на&nbsp;животных, а&nbsp;в&nbsp;местах обитания краснокнижных растений и&nbsp;грибов
                                ограничено строительство и&nbsp;другая хозяйственная деятельность.
                            </BaseTooltip> видов растений и&nbsp;птиц, а&nbsp;также отобрали индикаторные
                            <BaseTooltip :word="'индикаторные'">
                                Исследователи выбирают виды-индикаторы из&nbsp;числа типичных для региона организмов,
                                наиболее чутко реагирующих на&nbsp;отклонения в&nbsp;состоянии природной среды. Если
                                в&nbsp;составе вида-индикатора происходят изменения, то&nbsp;возможно, что в&nbsp;экосистеме
                                что-то пошло не&nbsp;так.
                            </BaseTooltip>
                            виды для будущих наблюдений за&nbsp;местной экосистемой.
                        </p>
                    </div>
                </BaseTextBlock>
                <div class="flora-and-fauna">
                    <BaseTextBlock :title="'Флора'">
                        <p class="mb-10">
                            В&nbsp;районе дивизиона горные хребты чередуются с&nbsp;межгорными долинами. Такой рельеф
                            создаёт условия для высокого разнообразия местной растительности.

                        </p>
                        <p>
                            Преобладают леса с&nbsp;лиственницами, соснами, берёзами и&nbsp;осинами. Второе место
                            по&nbsp;площади занимают луга, на&nbsp;южных склонах хребтов формируются степи.
                            По&nbsp;межгорным долинам протекают реки, образуя болота, заболоченные и&nbsp;пойменные луга.
                        </p>
                    </BaseTextBlock>
                    <BaseTextBlock :title="'Фауна'">
                        <p class="mb-10">
                            Среди животных встречаются в&nbsp;основном таёжные виды и&nbsp;некоторые представители
                            лесостепной и&nbsp;приамурской природных зон. Типичные обитатели дивизиона&nbsp;&mdash; лоси,
                            сибирские косули, горностаи и&nbsp;соболи. В&nbsp;лесах водятся лисицы и&nbsp;волки.
                        </p>
                        <p>
                            Зимой в&nbsp;регионе обитают синицы, свиристели и&nbsp;снегири, из&nbsp;тетеревиных
                            распространены рябчик и&nbsp;глухарь. Разнообразие птиц становится гораздо богаче в&nbsp;тёплое
                            время года.
                        </p>
                        <!-- <BaseNumberBlock class="" :textTop="'56 видов'" :textBottom="'птиц'" /> -->
                    </BaseTextBlock>
                </div>
                <div class="collage">
                    <!-- <BaseDropdownInfo class="ground-beetles" :title="'Жужелицы'"
                        :text="'Такие виды, как Amara brunnea, Pterostichus fulvescens, Notiophilus fasciatus и Nebria gyllenhali, отрицательно реагируют на&nbsp;промышленное воздействие и&nbsp;помогают исследователям фиксировать изменения в&nbsp;окружающей среде'" />
                    <BaseDropdownInfo class="myxomycetes" :title="'Миксомицеты'"
                        :text="'Миксомицеты занимают промежуточное положение между растениями и&nbsp;животными: похожие внешне на&nbsp;грибы, они постоянно передвигаются и&nbsp;едят. На&nbsp;территории воздействия предприятий исследователи обнаружили 14&nbsp;видов этих существ'" />
                    <BaseDropdownInfo class="microalgae" :title="'Микроводоросли'"
                        :text="'В&nbsp;реках и&nbsp;озёрах дивизиона биологи обнаружили два вида микроводорослей, способных рассказать об&nbsp;экологической обстановке. Похожая на&nbsp;звезду Asterionella formosa живёт только в&nbsp;чистых водоёмах, в&nbsp;то&nbsp;время как её&nbsp;антогонист Dictyosphaerium pulchellum развивается в&nbsp;загрязнённой воде'" />

                    <BaseDropdownInfo class="zooplankton" :title="'Зоопланктон'"
                        :text="'Чтобы оценить состояние водоёмов, исследователи отобрали виды зоопланктона, сигнализирующие о&nbsp;качестве воды. Например, планктонный рачок Limnocalanus macrurus любит чистую воду, а&nbsp;если начинает доминировать планктонная коловратка Brachionus sericus&nbsp;&mdash; вода загрязнена'" />
                    <BaseDropdownInfo v-if="!isModile" class="char" :title="'Арктический голец (боганидская палия)'"
                        :text="'Считается самой полезной рыбой в&nbsp;мире: кусочек рыбы в&nbsp;30&nbsp;г. покрывает суточную потребность человека в&nbsp;полезных жирных кислотах. Встречается также в&nbsp;водоёмах Кольского дивизиона'" />

                    <BaseDropdownInfo v-if="isModile" class="merlin" :title="'Кречет'" :color="'#71464E'"
                        :text="'Самая крупная птица из&nbsp;отряда соколиных. За&nbsp;последние 20&nbsp;лет её&nbsp;популяция в&nbsp;России сократилась втрое. &laquo;Норникель&raquo; вложил 50&nbsp;млн рублей в&nbsp;поддержку и&nbsp;сохранение вида в&nbsp;2022&ndash;2023&nbsp;гг'" />

                    <BaseDropdownInfo v-if="isModile" class="deer" :title="'Дикий северный олень'" :color="'#71464E'"
                        :text="'Отличительная особенность этого вида&nbsp;&mdash; наличие рогов у&nbsp;самок. Наименее изученная и&nbsp;малочисленная популяция дикого северного оленя&nbsp;&mdash; гыданская, она занесена в&nbsp;Красную книгу ЯНАО. По&nbsp;данным исследований, олени почти не&nbsp;мигрируют на&nbsp;дальние расстояния и&nbsp;круглый год остаются в&nbsp;арктической тундре'" />
                    <BaseDropdownInfo v-if="isModile" class="lycosus-moss" :title="'Плаунок плаунковидный'"
                        :color="'#71464E'"
                        :text="'В&nbsp;районе Промышленного Норильска биологи обнаружили несколько участков, ценных для произрастания этого редкого вида растений. Чтобы сохранить популяции плаунка, вокруг этих участков необходимо создавать защитные зоны'" />
                    <BaseDropdownInfo v-if="isModile" class="hare" :title="'Заяц-беляк'"
                        :text="'Спасаясь от&nbsp;опасности, развивает скорость до&nbsp;60 км/ч'" /> -->
                </div>
                <div class="habitat-map">
                    <div class="habitat-map__legend">
                        <div class="habitat-map__legend-top">
                            <div class="habitat-map__legend-title">Зона воздействия предприятий</div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                    fill="none">
                                    <circle cx="7" cy="7" r="7" fill="#D38235" />
                                </svg>
                                <div>Интенсивная</div>
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                    fill="none">
                                    <circle cx="7" cy="7" r="7" fill="#FFEC42" />
                                </svg>
                                <div>Умеренная</div>
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                    fill="none">
                                    <circle cx="7" cy="7" r="7" fill="#009CA6" />
                                </svg>
                                <div>Незначительная</div>
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none">
                                    <circle cx="8" cy="8" r="7" fill="white" stroke="#333333" />
                                </svg>
                                <div>Фоновая</div>
                            </div>
                        </div>
                        <div class="habitat-map__legend-bottom">
                            <div class="habitat-map__legend-title">Виды</div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                1 – Кречет
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                2 – Сапсан
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                3 – Орлан-белохвост
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                4 – Гуменник
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                5 – Золотистая ржанка
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                6 – Лебедь-кликун
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                7 – Чернозобая гагара
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                8 – Плаунок плаунковидный
                            </div>
                            <div class="habitat-map__legend-top-item habitat-map__legend-text">
                                9 – Реликтовые тундростепи
                            </div>
                        </div>
                    </div>
                    <div class="habitat-map__wrap">
                        <div v-if="!isModile" class="habitat-map__title">Карта обитания охраняемых видов</div>
                        <div v-if="isModile" class="habitat-map__title">Зона воздействия предприятий и виды</div>
                        <div class="habitat-map__list">
                            <div class="habitat-map__list-item-wrap">
                                <div class="habitat-map__list-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                        fill="none">
                                        <circle cx="7" cy="7" r="7" fill="#D38235" />
                                    </svg>
                                    <div>Интенсивная</div>
                                </div>
                                <ul class="habitat-map__list-list">
                                    <li>Орлан-белохвост</li>
                                    <li>Золотистая ржанка</li>
                                    <li>Лебедь-кликун</li>
                                    <li>Чернозобая гагара</li>
                                    <li>Сапсан</li>
                                </ul>
                            </div>

                            <div class="habitat-map__list-item-wrap">
                                <div class="habitat-map__list-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                        fill="none">
                                        <circle cx="7" cy="7" r="7" fill="#FFEC42" />
                                    </svg>
                                    <div>Умеренная</div>
                                </div>
                                <ul class="habitat-map__list-list">
                                    <li>Гуменник</li>
                                    <li>Золотистая ржанка</li>
                                    <li>Лебедь-кликун</li>
                                    <li>Чернозобая гагара</li>
                                    <li>Плаунок</li>
                                </ul>
                            </div>

                            <div class="habitat-map__list-item-wrap">
                                <div class="habitat-map__list-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                        fill="none">
                                        <circle cx="7" cy="7" r="7" fill="#009CA6" />
                                    </svg>
                                    <div>Незначительная</div>
                                </div>
                                <ul class="habitat-map__list-list">
                                    <li>Золотистая ржанка</li>
                                    <li>Лебедь-кликун</li>
                                    <li>Чернозобая гагара</li>
                                    <li>Реликтовые&nbsp;тундростепи</li>
                                    <li>Кречет и Сапсан</li>
                                </ul>
                            </div>

                            <div class="habitat-map__list-item-wrap">
                                <div class="habitat-map__list-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                        fill="none">
                                        <circle cx="8" cy="8" r="7" fill="white" stroke="#333333" />
                                    </svg>
                                    <div>Фоновая</div>
                                </div>
                                <ul class="habitat-map__list-list">
                                    <li>Гуменник</li>
                                    <li>Золотистая ржанка</li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <picture>
                        <!-- <source media="(max-width: 768px)" srcset="img/habitat-map-1-mobile.png"> -->
                        <!-- <source type="image/webp" srcset="img/habitat-map-1.webp"> -->
                        <img src="img/habitat-map.jpg" alt="">
                    </picture>

                    <!-- <div>
                        <div class="habitat-map__name-lake">
                            оз. Пясино
                        </div>
                        <div class="habitat-map__city habitat-map__city-1">
                            <div class="habitat-map__city-circale"></div>
                            <span>Талнах</span>
                        </div>
                        <div class="habitat-map__city habitat-map__city-2">
                            <div class="habitat-map__city-circale"></div>
                            <span>Норильск</span>
                        </div>
                        <div class="habitat-map__city habitat-map__city-3">
                            <div class="habitat-map__city-circale"></div>
                            <span>Дудинка</span>
                        </div>
                    </div> -->
                </div>
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
import BigMap from '@/components/BigMap.vue'
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
        BigMap,
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
                    color: 'purple',
                    number: '2'
                }
            ],
            heroDescr: 'Кто обитает на&nbsp;территории одного из&nbsp;самых современных и&nbsp;технологичных дивизионов &laquo;Норникеля&raquo;'
        }
    }
}
</script>

<style lang="scss">
.transbaikal {
    .big-map {
        @media (max-width: 768px) {
            display: flex;

            flex-direction: column-reverse;
            height: unset;
        }

        .map-circale {
            &__1 {
                top: 19rem;
                right: 29rem;
            }

            @media (max-width: 768px) {
                top: 56.4rem;
                left: 70rem;
            }

            &__2 {
                top: 26.3rem;
                right: 39.3rem;

                @media (max-width: 768px) {
                    top: 48.4rem;
                    left: 44.2rem;
                }
            }
        }

        .circales {
            position: absolute;
            top: 8.31rem;
            left: 8.63rem;
            width: 11.94rem;
            display: flex;
            flex-direction: column;
            gap: 1.12rem;

            @media (max-width: 768px) {
                top: 0;
                flex-direction: row;
                flex-wrap: wrap;
                width: 81.4rem;
                gap: 3.3rem;
            }

            .circale-block {
                display: flex;
                align-items: flex-start;
                gap: 1.06rem;

                @media (max-width: 768px) {
                    width: 39rem;

                    &:last-child {
                        width: 51rem;
                    }
                }

                &__img {
                    width: 0.875rem;
                    height: 0.875rem;
                    flex-shrink: 0;

                    @media (max-width: 768px) {
                        width: 1.87rem;
                        height: 1.87rem;
                    }
                }

                &__text {
                    font-size: 0.9375rem;
                    font-weight: 300;
                    line-height: 130%;

                    @media (max-width: 768px) {
                        font-size: 3.46667rem;
                    }
                }
            }
        }
    }

    .collage {
        position: relative;
        margin-bottom: 1.25rem;
        height: 388rem;
        width: 100%;
        background-image: url(../../public/img/collage2.webp);
        background-repeat: no-repeat;
        background-size: contain;
        z-index: 1;

        // @supports (background-image: url(../../public/img/collage.webp)) {
        //     background-image: url(../../public/img/collage.webp);
        // }
    }

    .habitat-map {
        position: relative;
        margin-bottom: 4.5rem;
        // height: 40rem;

        @media (max-width: 768px) {
            height: unset;
        }

        &__wrap {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);

            @media (max-width: 768px) {
                position: static;
                transform: translateX(0);
                margin-bottom: 5.867rem;
                padding: 0 5rem;
            }
        }

        &__title {
            margin-bottom: 1.63rem;
            font-size: 1.375rem;
            font-weight: 600;
            line-height: 130%;
            text-align: center;

            @media (max-width: 768px) {
                text-align: start;
                width: 52.5rem;
                margin-bottom: 7.75rem;
                font-size: 4.8rem
            }
        }

        &__legend {
            position: absolute;
            left: 7.37rem;
            top: 10.19rem;
            width: 12.4rem;

            @media (max-width: 768px) {
                display: none;
            }

            &-title {
                margin-bottom: 1rem;
                font-size: 0.9375rem;
                font-weight: 700;
                line-height: 130%;
            }

            &-text {
                font-size: 0.9375rem;
                font-weight: 300;
                line-height: 130%;
            }

            &-top {
                margin-bottom: 2.81rem;

                &-item {
                    display: flex;
                    gap: 0.56rem;
                    align-items: center;

                    &:not(:last-child) {
                        margin-bottom: 0.62rem;
                    }

                    svg {
                        width: 0.875rem;
                        height: 0.875rem;
                    }
                }
            }

            &-bottom {
                &-item {
                    &:not(:last-child) {
                        margin-bottom: 0.69rem;
                    }
                }
            }
        }

        &__list {
            display: none;
            flex-wrap: wrap;
            row-gap: 6rem;
            margin-bottom: 3rem;

            @media (max-width: 768px) {
                display: flex;
            }

            &-item {
                display: flex;
                margin-bottom: 2rem;
                align-items: center;
                gap: 1rem;
                font-size: 4.2042rem;
                line-height: 130%;

                &-wrap {
                    width: 50%;
                }

                svg {
                    width: 3.7333rem;
                    height: 3.7333rem;
                }
            }

            &-list {
                margin-left: 4rem;
                padding-left: 4rem;
                font-size: 3.6036rem;
                font-weight: 300;
                line-height: 130%;

                li {
                    list-style-type: disc;

                    &:not(:last-child) {
                        margin-bottom: 2.66rem;
                    }
                }
            }
        }
    }
}</style>