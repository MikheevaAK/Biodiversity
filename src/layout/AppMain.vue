<template>
    <main>
        <section class="lake">
            <div class="lake__introduction">
                <img class="lake__introduction-img" src="img/introduction.png">
                <BaseTextBlock :textTop="'> 50 озёр'" :textBottom="'находится на территории Северного Таймыра'" :top="true">
                    <p>
                        В&nbsp;Арктике очень много озёр, особенно тех, которые наполняют подземные родники. В&nbsp;них рыба
                        не&nbsp;водится из-за очень скудной питательной базы. В&nbsp;других&nbsp;же озёрах рыбы настолько
                        много,
                        что её&nbsp;можно вылавливать в&nbsp;производственных масштабах. Но&nbsp;бывает и&nbsp;так, что
                        озеро
                        в&nbsp;какой‑то момент пустеет, в&nbsp;этом случае вылов запрещают до&nbsp;полного восстановления
                        рыбопродуктивности водоёма.
                        <br />
                        Этот процесс может занимать десятилетия, но&nbsp;учёные придумали как его ускорить оригинальным
                        и&nbsp;экологичным способом. Эксперимент по&nbsp;повышению рыбопродуктивности сейчас проходит
                        на&nbsp;озере Пясино.
                    </p>
                </BaseTextBlock>
            </div>

            <div class="lake__map">
                <BaseTextBlock :title="'Озеро Пясино'">
                    <p>
                        Находится в&nbsp;20&nbsp;километрах от&nbsp;Норильска. Говорят, что сто лет назад в&nbsp;нём
                        водилась
                        рыба, и&nbsp;озеро даже использовалось местными жителями для рыболовного промысла. Но&nbsp;затем
                        водоём
                        начал пустеть. Произошло это из-за промышленного освоения территорий или избыточного
                        вылова&nbsp;&mdash;
                        не&nbsp;ясно.
                    </p>
                </BaseTextBlock>
                <img class="lake__map-img" src="img/map.png">
            </div>

            <BaseTextBlock :title="'Что делает озеро рыбопродуктивным?'">
                <p>
                    Озеро&nbsp;&mdash; это дом для множества живых организмов: от&nbsp;неразличимых невооруженным взглядом
                    бактерий до&nbsp;крупных рыб и&nbsp;водных млекопитающих. В&nbsp;арктических водоемах фауна уникальна
                    по&nbsp;видовому составу, но&nbsp;ее&nbsp;численность и&nbsp;биомасса невысока. Фауна тоже достаточно
                    бедная: в&nbsp;северных водоемах нет крупных водорослей, а&nbsp;только микроскопические&nbsp;&mdash;
                    фитопланктон.
                </p>
            </BaseTextBlock>

        </section>
        <section class="scroll">
            <div class="scroll-bg">
                <div class="scroll-wrap">
                    <div class="scroll-card">
                        С&nbsp;помощью солнечного света фитопланктон перерабатывает углекислый газ в&nbsp;кислород,
                        а&nbsp;значит дает возможность другим организмам жить и&nbsp;дышать.
                        При этом микроводоросли&nbsp;&mdash; не&nbsp;только лёгкие водоёма, но&nbsp;и&nbsp;пища для
                        зоопланктона&nbsp;&mdash; мелких рачков, моллюсков и&nbsp;личинок водных животных.
                    </div>
                    <div class="scroll-card">
                        Зоопланктоном питаются мальки и&nbsp;некоторые виды рыб, а&nbsp;ими, в&nbsp;свою
                        очередь,&nbsp;&mdash;
                        хищные рыбы.
                    </div>
                    <div class="scroll-card">
                        На&nbsp;вершине этой пищевой или, как её&nbsp;называют учёные, трофической цепи&nbsp;&mdash;
                        водоплавающие птицы. Они поедают рыбу, а&nbsp;помёт&nbsp;&mdash; продукт
                        их&nbsp;жизнедеятельности,&nbsp;&mdash; попадает в&nbsp;воду и&nbsp;становится питательной средой
                        для фитопланктона. Круг замыкается.
                    </div>
                    <div class="scroll-card">
                        Если&nbsp;же из&nbsp;трофической цепи исключить хотя&nbsp;бы одно звено или изменить состав
                        и&nbsp;соотношение обитателей озера, система начинает разрушаться. Сброс недоочищенных бытовых
                        и&nbsp;производственных сточных вод, аварийные разливы нефтепродуктов, или чересчур интенсивный
                        вылов рыбы могут привести к&nbsp;нарушению баланса экосистемы.
                    </div>
                </div>

            </div>
        </section>

        <section class="work-on-mistakes">
            <BaseTextBlock :title="'Работа над ошибками'">
                <p>
                    По&nbsp;словам учёных, ситуацию можно исправить. Для этого нужно повысить эффективность очистки
                    хозяйственно-бытовых сточных вод, сбрасываемых в&nbsp;окрестные водоемы, и&nbsp;восстановить популяции
                    обитающих в&nbsp;них организмов, начав с&nbsp;основ пищевой цепи&nbsp;&mdash; фитопланктона.
                    <br />
                    Один из&nbsp;способов решить проблему&nbsp;&mdash; внести в&nbsp;озеро минеральные удобрения.
                    В&nbsp;насыщенной питательными веществами воде ускорится рост микроводорослей, которые станут кормом для
                    зоопланктона и&nbsp;рыб.
                    <br />
                    Метод действенный, но, к&nbsp;сожалению, не&nbsp;без недостатков. Если ошибиться с&nbsp;составом
                    удобрений или внести их&nbsp;слишком много, в&nbsp;озере начнут бурно размножаться сине-зеленые
                    водоросли&nbsp;&mdash; цианобактерии. Учёные называют это явление &laquo;цветением&raquo; воды.
                </p>
            </BaseTextBlock>

            <img class="work-on-mistakes__img" src="img/scheme.png">

            <BaseTextBlock class="mb-3-75">
                <p>
                    Массовая гибель живых организмов из-за цветения воды приведёт к&nbsp;гниению их&nbsp;останков
                    и&nbsp;загрязнению воды. Разумеется, в&nbsp;здоровой экосистеме цианобактерии также присутствуют,
                    но&nbsp;здесь важен баланс. А&nbsp;преобладание какого‑то одного вида его нарушает.
                </p>
            </BaseTextBlock>

            <BaseSidebar>
                <p>
                    &laquo;Цветение&raquo; воды цианобактериями может продолжаться десятилетиями после того, как
                    в&nbsp;озеро внесли удобрения. Так попытка решить одну проблему, может привести к&nbsp;другой,
                    не&nbsp;менее серьёзной.
                </p>
            </BaseSidebar>
        </section>

        <section class="in-search">
            <BaseTextBlock :title="'В поиске альтернатив'" :textTop="'21 озеро'"
                :textBottom="'обследовали учёные в ходе экспедиции'">
                <p>
                    Пытаясь найти замену минеральным удобрениям, учёные обратили внимание на&nbsp;удобрение
                    природное&nbsp;&mdash; помёт водоплавающих птиц. В&nbsp;естественных условиях именно
                    он&nbsp;обеспечивает баланс питательных веществ в&nbsp;озёрах. Если&nbsp;же птицы по&nbsp;каким‑то
                    причинам перестали гнездиться рядом с&nbsp;озером, помёт в&nbsp;воду можно добавить искусственно. Эту
                    экологичную технологию назвали гуанотрофикацией.
                    <br />
                    По&nbsp;мнению специалистов, в&nbsp;удобренном помётом водоёме вместо цианобактерий появятся другие виды
                    фитопланктона&nbsp;&mdash; диатомовые и&nbsp;зеленые водоросли. Они лежат в&nbsp;основе пищевой цепочки
                    ценных пород рыб, а&nbsp;их&nbsp;размножение не&nbsp;вызывает вредоносное &laquo;цветение&raquo; воды.
                    <br />
                    Чтобы проверить гипотезу, летом 2022 года учёные отправились в&nbsp;экспедицию по&nbsp;Таймыру.
                    За&nbsp;несколько недель они облетели на&nbsp;специальном гидросамолёте местные озера.
                </p>
            </BaseTextBlock>
            <BaseTextBlock :textTop="'на 16 п.п.'" :textBottom="'ниже доля цианобактерий в озёрах, где есть птицы'">
                <p>
                    На&nbsp;одних водоёмах птиц не&nbsp;было вовсе, рядом с&nbsp;другими гнездились большие колонии
                    из&nbsp;десятков и&nbsp;даже сотен особей. Из&nbsp;каждого озера биологи взяли образцы воды, которые
                    позднее направили на&nbsp;анализ.
                    <br />
                    Результаты лабораторных исследований подтвердили правильность догадки учёных. В&nbsp;озёрах, рядом
                    с&nbsp;которыми гнездятся птицы (то&nbsp;есть там, где помёт попадает в&nbsp;воду), баланс растворённых
                    в&nbsp;воде питательных веществ действительно оказался лучше. В&nbsp;то&nbsp;же время в&nbsp;планктоне
                    преобладали полезные диатомовые и&nbsp;зеленые водоросли, а&nbsp;доля цианобактерий оказалась заметно
                    меньше, чем в&nbsp;озёрах без птиц.
                    <br />
                    Иными словами, в&nbsp;таких озёрах было сбалансированное сообщество фитопланктона. Благодаря этому
                    в&nbsp;водоёмах водились ценные кормовые организмы, необходимые для питания уникальных арктических видов
                    рыб.
                </p>
            </BaseTextBlock>
        </section>

        <section class="shares">
            <h3 class="shares__title">
                Доля различных видов фитопланктона в&nbsp;озёрах
            </h3>
            <div class="shares__wrap">
                <div class="shares__images">
                    <div class="shares__images-wrap">
                        <div class="shares__img-wrap">
                            <img class="shares__img" src="">
                        </div>
                        <div class="shares__img-text">без птиц</div>
                    </div>
                    <div class="shares__images-wrap">
                        <div class="shares__img-wrap">
                            <img class="shares__img" src="">
                        </div>
                        <div class="shares__img-text">с птицами</div>
                    </div>
                </div>
            </div>

            <BaseTextBlock class="mb-3-75">
                <p>
                    Поможет&nbsp;ли гуанотрофикация вернуть жизнь в&nbsp;арктические озера&nbsp;&mdash; вопрос пока
                    открытый, и&nbsp;быстро ответить на&nbsp;него не&nbsp;получится. И&nbsp;все&nbsp;же итоги первого года
                    внушают сдержанный оптимизм, а&nbsp;учёные продолжают свои исследования, которые активно поддерживаются
                    компанией &laquo;Норникель&raquo;.
                </p>
            </BaseTextBlock>

            <BaseSidebar>
                <p>
                    Учёные надеются разработать и&nbsp;внедрить технологию гуанотрофикации, которая повысит качество воды
                    и&nbsp;продуктивность арктических озёр, начиная с&nbsp;озера Пясино.
                </p>
            </BaseSidebar>
        </section>
    </main>
</template>

<script>
import BaseTextBlock from '@/components/BaseTextBlock.vue'
import BaseSidebar from '@/components/BaseSidebar.vue'

export default {
    components: {
        BaseTextBlock,
        BaseSidebar
    }
}
</script>

<style lang="scss">
main {
    padding: 3.75rem 0 2.5rem 0;
}

.lake {
    &__introduction {
        margin-bottom: 7.25rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        &-img {
            margin-bottom: 1.87rem;
            width: 16.375rem;
            height: 8.625rem;
        }
    }

    &__map {
        margin-bottom: 6.25rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        &-img {
            margin-top: 1.88rem;
            width: 21.1875rem;
            height: 32.08944rem;
        }
    }
}

.scroll {
    width: 100%;
    height: 500vh;

    &-bg {
        height: 100%;
        background-image: url(../../public/img/fito-1.png);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }

    &-wrap {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding-right: 1.25rem;
    }

    &-card {
        padding: 1.5rem;
        margin-bottom: 100vh;
        width: 34.2rem;
        border-radius: 0.25rem;
        background: #FFF;

        &:first-child {
            margin-top: 50vh;
        }
    }
}

.work-on-mistakes {
    padding-top: 6.25rem;
    margin-bottom: 9.75rem;

    &__img {
        margin-top: 5.19rem;
        margin-bottom: 3.6rem;
    }
}

.in-search {
    margin-bottom: 3.87rem;
    height: 155.125rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background-image: url(../../public/img/in-search.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.shares {
    padding: 0 13.25rem;

    &__title {
        margin-bottom: 4.75rem;
        width: 16.3125rem;
        color: #000;
        font-size: 1.125rem;
        font-weight: 600;
        line-height: 130%;
    }

    &__wrap {
        margin-bottom: 3.75rem;
    }

    &__images {
        margin-bottom: 1.81rem;
        padding-left: 8.88rem;
        display: flex;
        gap: 3.94rem;
    }

    &__images-wrap {
        display: flex;
    }

    &__img {
        background-image: url(../../public/img/nest.png);
        background-position: center;
        background-size: 9.6875rem 5.75rem;
        background-repeat: no-repeat;
    }

    &__img-wrap {
        display: flex;
        width: 9.6875rem;
        height: 5.75rem;
    }

    &__img-text {
        width: 11.5rem;
        color: #000;
        font-size: 1rem;
        font-weight: 300;
        line-height: 130%;
    }
}
</style>