<template>
    <div class="division">
        <BaseHero :title="'Норильский дивизион. Природные сокровища южного Таймыра'" :descr="heroDescr"
            :img="'img/hero-3.jpg'" :imgMobile="'img/hero3-mobile.jpg'" />
        <MainSection>
            <SectionWhite>
                <BaseTextBlock class="text mb-40" :title="'Особенности дивизиона'" :tooltip="true">
                    <p class="mb-10">
                        Горнодобывающие, металлургические и энергетические объекты Норильского
                        <BaseTooltip :word="'дивизиона'">
                            Компании объединяют в&nbsp;дивизион предприятия одного региона или объекты с&nbsp;общей задачей,
                            например, перевозка сырья или энергоснабжение. Деление на&nbsp;дивизионы (от&nbsp;французского
                            слова division&nbsp;&mdash; &laquo;разделение&raquo;) упрощает управление крупной организацией.
                        </BaseTooltip>
                        расположены в зоне,
                        где ещё сохранилась «вечная мерзлота», в гористой местности. Предприятия образуют плотную
                        промышленную сеть, поэтому состояние природного окружения на этих территориях требует большого
                        внимания со стороны компании.
                    </p>
                    <p>
                        «Норникель» понимает свою ответственность за состояние окружающей среды и много внимания уделяет
                        здоровью экосистем во всех дивизионах. Восстанавливать экологическое равновесие на севере
                        Красноярского края компания начала с исследования наземной и водной флоры и фауны и определения
                        границ промышленного воздействия.
                    </p>
                </BaseTextBlock>

                <BigMap :circales="circales" :img="'img/division-big-map.webp'"
                    :imgMobile="'img/division-big-map-mobile.webp'">
                    <BaseNumberBlock :textTop="'44 объекта'" :textBottom="'входит в Норильский дивизион'" />
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
                                <circle cx="7" cy="7" r="7" fill="#0077C8" />
                            </svg>

                            <div class="circale-block__text">Энергетические объекты</div>
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

                <!-- <BaseScrollBlock>
                    <div class="scroll-card card-1 text-block__descr">
                        <p>Большой Норильск</p>
                        Норильский промышленный район, или Большой Норильск образован местными предприятиями
                        &laquo;Норникеля&raquo;. Также в&nbsp;район входят города Норильск, Дудинка и&nbsp;ещё несколько
                        населённых пунктов. Здесь в&nbsp;условиях многолетней мерзлоты компания добывает
                        и&nbsp;перерабатывает медь, драгоценные металлы, теллур, серу и&nbsp;селен.
                    </div>
                    <div class="scroll-card card-2 text-block__descr">
                        <p>Энергетические объекты</p>
                        Теплом и&nbsp;светом Промышленный район обеспечивают теплоцентрали, ГЭС и&nbsp;газодобывающие
                        предприятия &laquo;Норникеля&raquo;.
                    </div>
                    <div class="scroll-card card-3 text-block__descr">
                        <p>Путоранский заповедник</p>
                        Природный объект, важный для поддержания и&nbsp;восстановления местного биоразнообразия. Расстояние
                        от&nbsp;Промышленного района до&nbsp;границ заповедника&nbsp;&mdash; более 50&nbsp;км.
                        По&nbsp;словам специалистов, этого достаточно, чтобы сохранить местные экосистемы
                        в&nbsp;неприкосновенности и&nbsp;исключить воздействие предприятий.
                    </div>
                </BaseScrollBlock> -->

                <div class="number-blocks text-block__wrap mb-100">
                    <BaseNumberBlock :textTop="'до&nbsp;280&nbsp;дней'" :textBottom="'устойчивых морозов'" />
                    <BaseNumberBlock :textTop="'до&nbsp;500&nbsp;метров'" :textBottom="'толщина многолетнемёрзлых пород'" />
                    <BaseNumberBlock :textTop="'-53&nbsp;˚С'" :textBottom="'минимальная температура'" />
                </div>

                <BaseTextBlock class="text mb-40" :title="'Зона воздействия предприятий Норильского дивизиона'"
                    :tooltip="true">
                    <p class="mb-10">
                        По&nbsp;данным Большой научной экспедиции 2022&nbsp;года, радиус воздействия Норильского
                        промышленного района
                        на&nbsp;растительный и&nbsp;животный мир южного Таймыра&nbsp;&mdash; не&nbsp;больше 10&nbsp;км.
                    </p>
                    <p>
                        Эффект от&nbsp;промышленной нагрузки наиболее выражен на&nbsp;расстоянии до&nbsp;1&nbsp;км,
                        а&nbsp;местами до&nbsp;2&nbsp;км от
                        предприятий. С&nbsp;удалением от&nbsp;промышленной и&nbsp;жилой зон признаки воздействия сходят
                        на&nbsp;нет. Там, где
                        влияние предприятий не&nbsp;обнаруживается, исследователи создают полигоны для изучения
                        первозданного,
                        или
                        <BaseTooltip :word="'фонового'">
                            На&nbsp;фоновых участках исследователи не&nbsp;обнаружили следов воздействия предприятий,
                            экосистемы здесь сохранены в&nbsp;их&nbsp;исходном, первозданном виде. Состояние биоразнообразия
                            на&nbsp;фоновых территориях принимают за&nbsp;эталонное и&nbsp;используют эти данные для
                            наблюдения за&nbsp;природой в&nbsp;зонах воздействия.
                        </BaseTooltip> состояния местных экосистем.
                    </p>
                </BaseTextBlock>
                <div class="division-radius mb-60">
                    <picture>
                        <source media="(max-width: 768px)" srcset="img/division-radius-mobile.png">
                        <img src="img/division-radius.png" alt="">
                    </picture>
                </div>
                <BaseSidebar>
                    <p>
                        Плотное расположение промышленных объектов и&nbsp;населённых пунктов суммирует их&nbsp;негативное
                        воздействие,
                        поэтому исследователи рассматривают Большой Норильск как единый источник воздействия
                        на&nbsp;экосистемы
                        дивизиона
                    </p>
                </BaseSidebar>
            </SectionWhite>
            <SectionOrange>
                <BaseTextBlock class="text mb-60" :tooltip="true">
                    <div class="section-orange__title">
                        Кто обитает на юге Таймыра
                    </div>
                    <div class="section-orange__descr">
                        <p class="mb-10">
                            В&nbsp;зоне, прилегающей к&nbsp;Промышленному району, в&nbsp;условной зоне воздействия
                            предприятий,
                            участники Большой Научной экспедиции обнаружили
                            <BaseTooltip :word="'охраняемые виды'">
                                Редкие и&nbsp;находящиеся под угрозой исчезновения виды, чья численность сокращается или уже
                                сократилась до&nbsp;опасного уровня. Им&nbsp;присваивают статус охраняемых и&nbsp;заносят
                                в&nbsp;Красные книги&nbsp;&mdash; общероссийскую или региональные. Охранный статус запрещает
                                охоту на&nbsp;животных, а&nbsp;в&nbsp;местах обитания краснокнижных растений и&nbsp;грибов
                                ограничено строительство и&nbsp;другая хозяйственная деятельность.
                            </BaseTooltip> животных и&nbsp;растений,
                            а&nbsp;также
                            несколько участков с&nbsp;уникальными экосистемами.
                        </p>
                        <p>
                            Среди типичных представителей арктической флоры и&nbsp;фауны биологи отобрали и
                            <BaseTooltip :word="'индикаторные виды'">
                                Исследователи выбирают виды-индикаторы из&nbsp;числа типичных для региона организмов,
                                наиболее
                                чутко реагирующих на&nbsp;отклонения в&nbsp;состоянии природной среды. Если в&nbsp;составе
                                вида-индикатора происходят изменения, то&nbsp;возможно, что в&nbsp;экосистеме что-то пошло
                                не&nbsp;так.
                            </BaseTooltip>.
                            Наблюдение за&nbsp;их&nbsp;поведением сможет многое рассказать о&nbsp;состоянии природного
                            окружения
                            дивизиона.
                        </p>
                    </div>
                </BaseTextBlock>
                <div class="flora-and-fauna">
                    <BaseTextBlock :title="'Флора'">
                        <p class="mb-10">
                            Растительный покров региона образуют мхи и&nbsp;лишайники, низкорослые травы
                            и&nbsp;кустарники.
                        </p>
                        <p>
                            Участки лиственничных лесов и&nbsp;зарослей ольховника стали домом для травянистых
                            многолетников, редких или отсутствующих в&nbsp;других типах сообществ. Обилие здесь древесных
                            растений помогает поддерживать разнообразие грибов.
                        </p>
                    </BaseTextBlock>
                    <BaseTextBlock :title="'Фауна'">
                        <p class="mb-10">
                            Территория дивизиона не&nbsp;отличается большим разнообразием млекопитающих, что типично для
                            южных тундр. Птиц гораздо больше, но&nbsp;многие обитают здесь сезонно, из&nbsp;зимующих
                            видов&nbsp;&mdash; белая и&nbsp;тундряная куропатки, ворон.
                        </p>
                        <p>
                            В&nbsp;местных озёрах водится ценная промысловая рыба: сибирский сиг и&nbsp;разные виды гольца.
                        </p>
                        <BaseNumberBlock class="" :textTop="'56 видов'" :textBottom="'птиц'" />
                    </BaseTextBlock>
                </div>
                <div class="collage">
                    <BaseCollageInfo class="protected-species" :text="'Охраняемые виды'" :width="'14rem'"
                        :color="'#71464E'" />
                    <BaseCollageInfo class="indicator-species" :text="'Индикаторные виды'" :width="'14rem'"
                        :color="'#C2C095'" />
                    <BaseCollageInfo class="eagle" :title="'Орлан-белохвост'" :width="'13.875rem'" :color="'#71464E'"
                        :text="'Размах его крыльев достигает 2,4 м. Птица нередко питается падалью и&nbsp;считается природным санитаром'" />
                    <BaseCollageInfo class="lentils" :title="'Чечевица'" :width="'11rem'" :color="'#C2C095'"
                        :text="'Издаёт ритмичные звуки, в которых слышится: <br/>«Че-че-ви-цу?»'" />
                    <BaseCollageInfo class="warbler-talovka" :title="'Пеночка-таловка'" :width="'12.5rem'"
                        :color="'#C2C095'" :text="'Встречается также в&nbsp;Забайкалье'" />
                    <BaseCollageInfo class="peregrine-falcon" :title="'Сапсан'" :width="'13.875rem'" :color="'#71464E'"
                        :text="'Самая быстрая птица на&nbsp;планете'" />
                    <BaseCollageInfo class="willow-warbler" :title="'Пеночка-весничка'" :width="'10.5rem'"
                        :color="'#C2C095'" :text="'Кроме Норильского обитает также в&nbsp;Кольском дивизионе'" />
                    <BaseCollageInfo class="merlin" :title="'Кречет'" :width="'17rem'" :color="'#71464E'"
                        :text="'Самая крупная птица из&nbsp;отряда соколиных. За&nbsp;последние 20&nbsp;лет её&nbsp;популяция в&nbsp;России сократилась втрое. &laquo;Норникель&raquo; вложил 50&nbsp;млн рублей в&nbsp;поддержку и&nbsp;сохранение вида в&nbsp;2022&ndash;2023&nbsp;гг.'" />
                    <BaseCollageInfo class="polar-bunting" :title="'Полярная овсянка'" :width="'5rem'" :color="'#C2C095'" />
                    <BaseCollageInfo class="deer" :title="'Дикий северный олень'" :width="'19.5rem'" :color="'#71464E'"
                        :text="'Отличительная особенность этого вида&nbsp;&mdash; наличие рогов у&nbsp;самок. Наименее изученная и&nbsp;малочисленная популяция дикого северного оленя&nbsp;&mdash; гыданская, она занесена в&nbsp;Красную книгу ЯНАО. По&nbsp;данным исследований, олени почти не&nbsp;мигрируют на&nbsp;дальние расстояния и&nbsp;круглый год остаются в&nbsp;арктической тундре'" />
                    <BaseCollageInfo class="willow" :title="'Ива мохнатая'" :width="'10rem'" :color="'#C2C095'" />
                    <BaseCollageInfo class="vole" :title="'Полёвка-экономка'" :width="'5rem'" :color="'#C2C095'" />
                    <BaseCollageInfo class="ptarmigan" :title="'Белая куропатка'" :width="'10.85rem'"
                        :text="'Тело птицы сохраняет постоянную температуру 45ºC'" :color="'#C2C095'" />
                    <BaseCollageInfo class="tundra-shrew" :title="'Тундряная бурозубка'" :width="'13.5rem'"
                        :text="'За&nbsp;сутки может съесть в&nbsp;4&nbsp;раза больше, чем весит'" :color="'#C2C095'" />
                    <BaseCollageInfo class="alder-bush" :title="'Ольховник кустарниковый'" :width="'13rem'"
                        :text="'Древесина срубленной ольхи окрашивается в&nbsp;красный цвет'" :color="'#C2C095'" />
                    <BaseCollageInfo class="hare" :title="'Заяц-беляк'" :width="'13.8rem'"
                        :text="'Спасаясь от&nbsp;опасности, развивает скорость до&nbsp;60&nbsp;км/ч. Обитает также в&nbsp;Забайкальском дивизионе'"
                        :color="'#C2C095'" />
                    <BaseCollageInfo class="golden-plover" :title="'Золотистая ржанка'" :width="'12rem'"
                        :text="'В&nbsp;древности считалось, что один взгляд на&nbsp;эту пёструю птичку излечивает от&nbsp;желтухи'"
                        :color="'#71464E'" />
                    <BaseCollageInfo class="lycosus-moss" :title="'Плаунок плаунковидный'" :width="'18rem'"
                        :text="'В районе Промышленного Норильска биологи обнаружили несколько участков, ценных для произрастания этого редкого вида растений. Чтобы сохранить популяции плаунка, вокруг этих участков необходимо создавать защитные зоны'"
                        :color="'#71464E'" />
                    <BaseCollageInfo class="goose" :title="'Гуменник'" :width="'12rem'"
                        :text="'В&nbsp;полёте поднимается на&nbsp;высоту до&nbsp;10&nbsp;км'" :color="'#71464E'" />
                    <BaseCollageInfo class="swan" :title="'Лебедь-кликун'" :width="'16.4rem'"
                        :text="'Мощными крыльями может отразить атаку мелких хищников. Встречается также в&nbsp;Кольском дивизионе'"
                        :color="'#71464E'" />
                    <BaseCollageInfo class="loon" :title="'Чернозобая гагара'" :width="'12.4rem'"
                        :text="'Умеет нырять на&nbsp;глубину до&nbsp;20 метров'" :color="'#71464E'" />

                    <BaseDropdownInfo class="ground-beetles" :title="'Жужелицы'"
                        :text="'Такие виды, как Amara brunnea, Pterostichus fulvescens, Notiophilus fasciatus и Nebria gyllenhali, отрицательно реагируют на&nbsp;промышленное воздействие и&nbsp;помогают исследователям фиксировать изменения в&nbsp;окружающей среде'" />
                    <BaseDropdownInfo class="myxomycetes" :title="'Миксомицеты'"
                        :text="'Миксомицеты занимают промежуточное положение между растениями и&nbsp;животными: похожие внешне на&nbsp;грибы, они постоянно передвигаются и&nbsp;едят. На&nbsp;территории воздействия предприятий исследователи обнаружили 14&nbsp;видов этих существ'" />
                    <BaseDropdownInfo class="microalgae" :title="'Микроводоросли'"
                        :text="'В&nbsp;реках и&nbsp;озёрах дивизиона биологи обнаружили два вида микроводорослей, способных рассказать об&nbsp;экологической обстановке. Похожая на&nbsp;звезду Asterionella formosa живёт только в&nbsp;чистых водоёмах, в&nbsp;то&nbsp;время как её&nbsp;антогонист Dictyosphaerium pulchellum развивается в&nbsp;загрязнённой воде'" />

                    <BaseDropdownInfo class="zooplankton" :title="'Зоопланктон'"
                        :text="'Чтобы оценить состояние водоёмов, исследователи отобрали виды зоопланктона, сигнализирующие о&nbsp;качестве воды. Например, планктонный рачок Limnocalanus macrurus любит чистую воду, а&nbsp;если начинает доминировать планктонная коловратка Brachionus sericus&nbsp;&mdash; вода загрязнена'" />
                    <BaseDropdownInfo class="char" :title="'Арктический голец (боганидская палия)'"
                        :text="'Считается самой полезной рыбой в&nbsp;мире: кусочек рыбы в&nbsp;30&nbsp;г. покрывает суточную потребность человека в&nbsp;полезных жирных кислотах. Встречается также в&nbsp;водоёмах Кольского дивизиона'" />
                </div>
                <BaseTextBlock class="mb-100" :tooltip="true">
                    <p class="mb-10">
                        В&nbsp;месте расположения Норильского дивизиона, в&nbsp;долине Медвежьего ручья учёные обнаружили
                        уникальную
                        экосистему&nbsp;&mdash; выжившие тундростепи. Эти современники эпохи мамонтов и&nbsp;шерстистых
                        носорогов
                        сохранились благодаря уникальному сочетанию почвенных и&nbsp;климатических условий.
                    </p>
                    <p>
                        <BaseTooltip :word="'Реликтовые'">
                            Биологические реликты&nbsp;&mdash; дожившие до&nbsp;нашего времени без изменений представители
                            прошлых эволюционных эпох. Реликтовыми могут быть организмы, виды или целые природные
                            сообщества. Как правило, в&nbsp;прошлом реликты были широко распространены и&nbsp;играли
                            ключевую роль в&nbsp;формировании условий жизни на&nbsp;определённой территории.
                        </BaseTooltip>
                        экосистемы&nbsp;&mdash; свидетели прошлых геологических эпох&nbsp;&mdash; могут поведать
                        учёным о&nbsp;развитии
                        планеты. Кроме того, это ценный ресурс видов, которые в&nbsp;условиях глобального изменения климата
                        могут
                        заселять новые места обитания.
                    </p>
                </BaseTextBlock>
                <div class="habitat-map">
                    <div class="habitat-map__wrap">
                        <div class="habitat-map__title">Карта обитания охраняемых видов</div>
                        <div class="habitat-map__buttons">
                            <div class="habitat-map__button" :class="{'habitat-map__button_active' : idMap === map1}" @click="idMap = 1" >Большой Норильск / Дудинка</div>
                            <div class="habitat-map__button" :class="{'habitat-map__button_active' : idMap === map2}" @click="idMap = 2">Пеляткинское / Мессояха</div>
                        </div>
                    </div>
                    <img v-if="idMap === 1" src="img/habitat-map-1.png" alt="">
                    <img v-if="idMap === 2" src="img/habitat-map-2.png" alt="">
                </div>
                <BaseTextBlock class="mb-100">
                    <p class="mb-10">
                        Некоторые редкие виды могут присутствовать в&nbsp;зонах промышленного воздействия, несмотря
                        на&nbsp;шум,
                        загрязнение и&nbsp;изъятие почв.
                    </p>
                    <p>
                        Для них приоритетным фактором выживания оказывается доступ к&nbsp;кормовой
                        базе, которая обильнее в&nbsp;местах обитания человека.
                    </p>
                </BaseTextBlock>
                <BaseSidebar>
                    <p>
                        Уникальные экосистемы, редкие и&nbsp;индикаторные виды и&nbsp;места их&nbsp;обитания&nbsp;&mdash;
                        всё это элементы системы, с
                        помощью которой компания контролирует уровень промышленного воздействия и&nbsp;сохраняет обилие и
                        разнообразие природы в&nbsp;дивизионе
                    </p>
                </BaseSidebar>
            </SectionOrange>
        </MainSection>
    </div>
</template>

<script>
import BaseHero from '@/layout/BaseHero.vue'
import SectionWhite from '@/layout/SectionWhite.vue'
import SectionOrange from '@/layout/SectionOrange.vue'
import BigMap from '@/components/BigMap.vue'
import BaseTextBlock from '@/components/BaseTextBlock.vue'
import MainSection from '@/layout/MainSection'
import BaseSidebar from '@/components/BaseSidebar'
import BaseTooltip from '@/components/ BaseTooltip.vue'
import BaseNumberBlock from "@/components/BaseNumberBlock.vue";
import BaseCollageInfo from '@/components/BaseCollageInfo.vue'
import BaseDropdownInfo from '@/components/BaseDropdownInfo.vue'

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
        BaseNumberBlock,
        BaseCollageInfo,
        BaseDropdownInfo
    },
    data() {
        return {
            map1: 1,
            map2: 2,
            idMap: 1,
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
            heroDescr: 'Какие виды животных и растений живут по соседству с промышленным гигантом Красноярского края — Большим Норильском'
        }
    }
}
</script>

<style lang="scss">
.division {
    .big-map {
        margin-bottom: 3.81rem;
        height: 40.19419rem;

        @media (max-width: 768px) {
            display: flex;
            margin-bottom: 21.3334rem;
            flex-direction: column-reverse;
            height: unset;
        }

        .map-circale {
            &__1 {
                top: 14.4rem;
                left: 57rem;
            }

            @media (max-width: 768px) {
                top: 56.4rem;
                left: 70rem;
            }

            &__2 {
                top: 10rem;
                left: 43.3rem;

                @media (max-width: 768px) {
                    top: 48.4rem;
                    left: 44.2rem;
                }
            }

            &__3 {
                top: 23.6rem;
                left: 39.7rem;

                @media (max-width: 768px) {
                    top: 73.4rem;
                    left: 38rem;
                }
            }

            &__4 {
                top: 32.8rem;
                left: 42rem;

                @media (max-width: 768px) {
                    top: 90.5rem;
                    left: 42rem;
                }
            }

            &__5 {
                top: 11.8rem;
                left: 41.6rem;

                @media (max-width: 768px) {
                    top: 51.6rem;
                    left: 40.9rem;
                }
            }

            &__6 {
                top: 11.8rem;
                left: 34.85rem;

                @media (max-width: 768px) {
                    top: 51.4rem;
                    left: 28rem;
                }
            }

            &__7 {
                top: 14.7rem;
                left: 23.55rem;

                @media (max-width: 768px) {
                    top: 57.4rem;
                    left: 7.7rem;
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

        .number-block {
            bottom: 5.63rem;
            left: unset;
            right: 7.81rem;

            @media (max-width: 768px) {
                margin-left: 9.5rem;
                width: unset;
            }
        }
    }

    .scroll {
        &-bg {
            &.bg-1 {
                background-image: url(../../public/img/map-1.png);
            }

            &.bg-2 {
                background-image: url(../../public/img/map-2.png);
            }

            &.bg-3 {
                background-image: url(../../public/img/map-3.png);
            }

            @media (max-width: 768px) {
                &.bg-1 {
                    background-image: url(../../public/img/fito-1-mobile.jpg);
                }

                &.bg-2 {
                    background-image: url(../../public/img/fito-2-mobile.jpg);
                }

                &.bg-3 {
                    background-image: url(../../public/img/fito-3-mobile.jpg);
                }
            }
        }
    }

    .number-blocks {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 6.75rem;
        width: 60.5rem;

        @media (max-width: 768px) {
            flex-direction: column;
            gap: 7.467rem;
            width: 100%;
            align-items: flex-start;
        }

        .number-block {
            position: static;
            width: max-content;

            @media (max-width: 768px) {
                margin-top: 0;
            }
        }
    }

    .flora-and-fauna {
        display: flex;
        gap: 5.44rem;
        width: 63.5rem;
        margin: 0 auto;

        @media (max-width: 768px) {
            flex-direction: column;
            width: unset;
            gap: 12.27rem;
            margin-bottom: 16rem;
        }

        .text-block__wrap {
            margin: 0;

            &:first-child {
                width: 29.375rem;
            }

            &:last-child {
                width: 28.625rem;

                .number-block {
                    margin-top: 2.88rem;

                    @media (max-width: 768px) {
                        margin-top: 7.4rem;
                    }
                }
            }

            @media (max-width: 768px) {

                &:first-child,
                &:last-child {
                    width: 100%;
                }
            }
        }
    }

    .collage {
        position: relative;
        margin-bottom: 1.25rem;
        height: 349rem;
        width: 100%;
        background-image: url(../../public/img/collage.png);
        background-repeat: no-repeat;
        background-size: contain;
        z-index: 1;

        @supports (background-image: url(../../public/img/collage.webp)) {
            background-image: url(../../public/img/collage.webp);
        }

        .eagle {
            top: 23.5rem;
            left: 41.75rem;
        }

        .protected-species {
            top: 8.81rem;
            left: 36rem;

            .block-info__img {
                width: 0.875rem;
            }
        }

        .indicator-species {
            top: 8.81rem;
            left: 48.5rem;

            .block-info__img {
                width: 0.875rem;
            }
        }

        .lentils {
            top: 50.4rem;
            left: 17.44rem;
        }

        .warbler-talovka {
            top: 48.4rem;
            right: 29rem;
        }

        .peregrine-falcon {
            top: 59rem;
            right: 45rem;
        }

        .willow-warbler {
            top: 76rem;
            right: 36rem;
        }

        .merlin {
            top: 95rem;
            right: 40rem;
        }

        .polar-bunting {
            top: 117rem;
            right: 32rem;
        }

        .deer {
            top: 133rem;
            left: 45rem;
        }

        .willow {
            bottom: 113rem;
            right: 16rem;
        }

        .vole {
            bottom: 108rem;
            right: 11rem;
        }

        .ptarmigan {
            top: 172rem;
            left: 19rem;
        }

        .tundra-shrew {
            top: 190rem;
            left: 30rem;
        }

        .alder-bush {
            top: 205rem;
            left: 47rem;
        }

        .hare {
            bottom: 110rem;
            left: 26rem;
        }

        .golden-plover {
            bottom: 104rem;
            left: 50rem;
        }

        .lycosus-moss {
            bottom: 85rem;
            left: 20rem;
        }

        .goose {
            bottom: 84rem;
            right: 25rem;
        }

        .swan {
            bottom: 58rem;
            left: 38rem;
        }

        .loon {
            bottom: 57rem;
            right: 14rem;
        }

        .ground-beetles {
            position: absolute;
            bottom: 80rem;
            right: 17rem;
        }

        .myxomycetes {
            position: absolute;
            top: 225rem;
            right: 18rem;
        }

        .microalgae {
            position: absolute;
            bottom: 43rem;
            left: 21rem;
        }

        .zooplankton {
            position: absolute;
            bottom: 38rem;
            right: 39rem;
        }

        .char {
            position: absolute;
            bottom: 27rem;
            left: 43rem;

            .dropdown-info__text {
                padding: 3.56rem 0.62rem 0.88rem 3.13rem;
            }
        }
    }

    .section-orange {
        &__title {
            color: var(--copper, #D38235);
            margin-bottom: 2.19rem;
            font-size: 2.125rem;
            font-weight: 600;
            line-height: 130%;

            @media (max-width: 768px) {
                font-size: 7.4667rem;
                margin-bottom: 6.4rem;
            }
        }

        .text {
            width: 38.25rem;
            text-align: center;

            @media (max-width: 768px) {
                width: unset;
                text-align: start;
            }
        }

        .number-block {
            position: static;
        }
    }
}

.habitat-map {
    position: relative;
    // height: 40rem;
    margin-bottom: 2.5rem;

    &__wrap {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    }

    &__title {
        margin-bottom: 1.63rem;
        font-size: 1.375rem;
        font-weight: 600;
        line-height: 130%;
        text-align: center;
    }

    &__buttons {
        display: flex;
        gap: 1rem;
    }

    &__button {
        cursor: pointer;
        padding: 0.8125rem 1.25rem;
        border-radius: 3.125rem;
        border: 1px solid var(--sea, #21285C);
        font-size: 1.125rem;
        color: #21285C;
        line-height: 130%;
        opacity: 0.4;
        transition: .2s;

        &_active {
            opacity: 1;
        }

        &:hover {
            color: var(--copper, #D38235);
            border-color: #D38235;
            opacity: 1;
        }
    }
}
</style>