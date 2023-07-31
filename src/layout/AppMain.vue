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
            <div class="scroll-bg bg-1">
                <!-- <div class="scroll-seaweed"></div> -->
            </div>
            <div class="scroll-bg bg-2">
            </div>
            <div class="scroll-bg bg-3">
            </div>
            <div class="scroll-bg bg-4">
            </div>
            <div class="scroll-wrap">
                <div class="scroll-card card-1">
                    С&nbsp;помощью солнечного света фитопланктон перерабатывает углекислый газ в&nbsp;кислород,
                    а&nbsp;значит дает возможность другим организмам жить и&nbsp;дышать.
                    При этом микроводоросли&nbsp;&mdash; не&nbsp;только лёгкие водоёма, но&nbsp;и&nbsp;пища для
                    зоопланктона&nbsp;&mdash; мелких рачков, моллюсков и&nbsp;личинок водных животных.
                </div>
                <div class="scroll-card card-2">
                    Зоопланктоном питаются мальки и&nbsp;некоторые виды рыб, а&nbsp;ими, в&nbsp;свою
                    очередь,&nbsp;&mdash;
                    хищные рыбы.
                </div>
                <div class="scroll-card card-3">
                    На&nbsp;вершине этой пищевой или, как её&nbsp;называют учёные, трофической цепи&nbsp;&mdash;
                    водоплавающие птицы. Они поедают рыбу, а&nbsp;помёт&nbsp;&mdash; продукт
                    их&nbsp;жизнедеятельности,&nbsp;&mdash; попадает в&nbsp;воду и&nbsp;становится питательной средой
                    для фитопланктона. Круг замыкается.
                </div>
                <div class="scroll-card card-4">
                    Если&nbsp;же из&nbsp;трофической цепи исключить хотя&nbsp;бы одно звено или изменить состав
                    и&nbsp;соотношение обитателей озера, система начинает разрушаться. Сброс недоочищенных бытовых
                    и&nbsp;производственных сточных вод, аварийные разливы нефтепродуктов, или чересчур интенсивный
                    вылов рыбы могут привести к&nbsp;нарушению баланса экосистемы.
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
            <div class="in-search__block-w-1"></div>
            <div class="in-search__block-w-2"></div>
            <div class="in-search__eagle"></div>
            <div class="in-search__bird-2"></div>
            <div class="in-search__fish-1">Чир</div>
            <div class="in-search__fish-2">Голец</div>
            <div class="in-search__text-1">Окольцовывание птиц для изучения путей миграции</div>
            <div class="in-search__text-2">Сбор проб воды из водоёмов</div>
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
                            <div class="shares__img_text">ПРОДАЁТСЯ</div>
                        </div>
                        <div class="shares__img-text">без птиц</div>
                    </div>
                    <div class="shares__images-wrap">
                        <div class="shares__img-wrap">
                            <img class="shares__img-img" src="img/bird.png">
                        </div>
                        <div class="shares__img-text">с птицами</div>
                    </div>
                </div>
            </div>

            <div class="scales__wrap mb-3-75">
                <div class="scales__row">
                    <div class="scales__text">Цианобактерии</div>
                    <BaseScale :percent="'32,6%'" class="mr-4-31" :hasClass="'scale-1'" />
                    <BaseScale :percent="'16,2%'" :hasClass="'scale-2'" />
                </div>
                <div class="scales__row">
                    <div class="scales__text">Диатомеи</div>
                    <BaseScale :percent="'27,9%'" class="mr-4-31" :hasClass="'scale-3'" />
                    <BaseScale :percent="'39,9%'" :hasClass="'scale-4'" />
                </div>
                <div class="scales__row">
                    <div class="scales__text">Зеленые водоросли</div>
                    <BaseScale :percent="'10,2%'" class="mr-4-31" :hasClass="'scale-6'" />
                    <BaseScale :percent="'20,2%'" :hasClass="'scale-6'" />
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
import BaseScale from '@/components/BaseScale.vue'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
    components: {
        BaseTextBlock,
        BaseSidebar,
        BaseScale
    },
    mounted: function () {
        this.scrollAnimation();
    },
    methods: {
        scrollAnimation() {
            const collageItems = Array.from(document.querySelectorAll(".text-block__wrap"));
            collageItems.forEach((elem) => {

                gsap.fromTo(elem,
                    {
                        y: 70,
                    },
                    {
                        y: 0,
                        duration: 1,
                        scrollTrigger: {
                            start: '0% 100%',
                            // end: 'bottom 100%',
                            trigger: elem,
                            scrub: true,
                        },
                    });
            });

            const sidebarItems = Array.from(document.querySelectorAll(".sidebar"));
            sidebarItems.forEach((elem) => {
                gsap.fromTo(elem,
                    {
                        y: 70,
                    },
                    {
                        y: 0,
                        duration: 1,
                        scrollTrigger: {
                            start: '0% 100%',
                            // end: 'bottom 100%',
                            trigger: elem,
                            // markers: true,
                            scrub: true,
                        },
                    });
            });


            gsap.to(".scroll-bg", {
                scrollTrigger: {
                    trigger: ".scroll",
                    start: '0%',
                    // end: "+=400vh",
                    // end: '100% 100%',
                    // markers: true,

                    scrub: true,
                    toggleClass: { className: "active", targets: ".scroll-bg" }
                },
            });

            gsap.fromTo(".bg-1",
                { opacity: '1' },
                {
                    opacity: '0',
                    scrollTrigger: {
                        trigger: ".card-1",
                        start: 'top 0%',
                        end: 'bottom 50%',
                        endTrigger: '.card-2',
                        // markers: true,
                        scrub: true,
                    },

                });

            gsap.fromTo(".bg-2",
                { opacity: '1' },
                {
                    opacity: '0',
                    scrollTrigger: {
                        trigger: ".card-2",
                        start: 'top 0%',
                        end: 'bottom 50%',
                        endTrigger: '.card-3',
                        // markers: true,
                        scrub: true,
                    },

                });

            gsap.fromTo(".bg-3",
                { opacity: '1' },
                {
                    opacity: '0',
                    scrollTrigger: {
                        trigger: ".card-3",
                        start: 'top 0%',
                        end: 'bottom 50%',
                        endTrigger: '.card-4',
                        // markers: true,
                        scrub: true,
                    },

                });

            gsap.fromTo(".scale-1",
                { width: '0' },
                {
                    width: '5.75rem',
                    duration: 1,
                    scrollTrigger: {
                        trigger: ".scales__wrap",
                        start: 'top 75%',
                        end: 'bottom 60%',
                        // markers: true,
                        scrub: true,
                    },
                });

            gsap.fromTo(".scale-2",
                { width: '0' },
                {
                    width: '2.875rem',
                    duration: 4,
                    scrollTrigger: {
                        trigger: ".scales__wrap",
                        start: 'top 75%',
                        end: 'bottom 60%',
                        // markers: true,
                        scrub: true,
                    },
                });

            gsap.fromTo(".scale-3",
                { width: '0' },
                {
                    width: '4.94rem',
                    duration: 4,
                    scrollTrigger: {
                        trigger: ".scales__wrap",
                        start: 'top 75%',
                        end: 'bottom 60%',
                        // markers: true,
                        scrub: true,
                    },
                });

            gsap.fromTo(".scale-4",
                { width: '0' },
                {
                    width: '7rem',
                    duration: 4,
                    scrollTrigger: {
                        trigger: ".scales__wrap",
                        start: 'top 75%',
                        end: 'bottom 60%',
                        // markers: true,
                        scrub: true,
                    },
                });
            gsap.fromTo(".scale-5",
                { width: '0' },
                {
                    width: '1.94rem',
                    duration: 4,
                    scrollTrigger: {
                        trigger: ".scales__wrap",
                        start: 'top 75%',
                        end: 'bottom 60%',
                        // markers: true,
                        scrub: true,
                    },
                });
            gsap.fromTo(".scale-6",
                { width: '0' },
                {
                    width: '3.6rem',
                    duration: 4,
                    scrollTrigger: {
                        trigger: ".scales__wrap",
                        start: 'top 75%',
                        end: 'bottom 60%',
                        // markers: true,
                        scrub: true,
                    },
                });
        }
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
    position: relative;
    width: 100%;
    height: 500vh;

    &-bg {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
        height: 100vh;
        width: 100%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        &.active {
            background-attachment: fixed;
            height: 100%;
        }

        &.bg-1 {
            z-index: 4;
            background-image: url(../../public/img/fito-1.png);
        }

        &.bg-2 {
            z-index: 3;
            background-image: url(../../public/img/fito-2.png);
        }

        &.bg-3 {
            z-index: 2;
            background-image: url(../../public/img/fito-3.png);
        }

        &.bg-4 {
            z-index: 1;
            background-image: url(../../public/img/fito-4.png);
        }
    }

    // &-seaweed {
    //     position: absolute;
    //     top: 0;
    //     width: 12rem;
    //     height: 10.25rem;
    //     background-image: url(../../public/img/seaweed.png);
    //     background-position: center;
    //     background-size: cover;
    //     background-repeat: no-repeat;
    // }

    &-wrap {
        position: relative;
        z-index: 10;
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
    position: relative;
    margin-bottom: 3.87rem;
    height: 155.125rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background-image: url(../../public/img/in-search.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    &__block-w-1 {
        position: absolute;
        bottom: 21.2rem;
        left: 34rem;
        width: 10.3125rem;
        height: 12.34788rem;
        background: #fff;
    }

    &__block-w-2 {
        position: absolute;
        bottom: 21.2rem;
        left: 67rem;
        width: 10.3125rem;
        height: 16rem;
        background: #fff;
    }

    &__eagle {
        position: absolute;
        top: 35rem;
        right: 16rem;
        width: 12.625rem;
        height: 12.28456rem;
        background-image: url(../../public/img/eagle.png);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    &__bird-2 {
        position: absolute;
        top: 0;
        left: 16.69rem;
        width: 5.53125rem;
        height: 6.40625rem;
        background-image: url(../../public/img/bird-2.png);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    &__text-1,
    &__text-2 {
        position: absolute;
        width: 9.125rem;
        color: var(--gray-1, #333);
        font-size: 0.9375rem;
        font-weight: 400;
    }

    &__text-1 {
        top: 42.5rem;
        right: 52.87rem;
    }

    &__text-2 {
        top: 41rem;
        right: 32rem;
    }

    &__fish-1,
    &__fish-2 {
        position: absolute;
        width: 8.25rem;
        text-align: right;
        color: var(--gray-1, #333);
        font-size: 0.9375rem;
        font-weight: 400;
        background-image: url(../../public/img/fish.png);
        background-position: left;
        background-size: contain;
        background-repeat: no-repeat;
        height: 2.40625rem;

    }

    &__fish-1 {
        top: 100rem;
        right: 54.5rem;
    }

    &__fish-2 {
        top: 106rem;
        right: 36rem;
    }

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
        align-items: flex-end;
    }

    &__img-img {
        position: absolute;
        right: 1rem;
        top: -3.12rem;
        width: 5.8125rem;
        height: 6.25rem;
    }

    &__img-wrap {
        position: relative;
        display: flex;
        width: 9.6875rem;
        height: 5.75rem;
        background-image: url(../../public/img/nest.png);
        background-position: center;
        background-size: 9.6875rem 5.75rem;
        background-repeat: no-repeat;
    }

    &__img_text {
        position: absolute;
        top: -2rem;
        left: 21%;
        border: 0.412px solid var(--gray-1, #333);
        padding: 0.51rem;
        color: var(--gray-1, #333);
        font-size: 0.82469rem;
        font-weight: 300;
        line-height: 130%;

        &::after {
            content: '';
            position: absolute;
            top: 100%;
            left: 50%;
            width: 0.5px;
            background: #333;
            height: 3rem;
        }
    }

    &__img-text {
        width: 11.5rem;
        color: #000;
        font-size: 1rem;
        font-weight: 300;
        line-height: 130%;
    }

}

.scales {
    &__wrap {
        display: flex;
        flex-direction: column;
        gap: 2rem
    }

    &__row {
        display: flex;
    }

    &__text {
        width: 9.75rem;
        margin-right: 0.69rem;
        color: #000;
        font-size: 1rem;
        font-weight: 300;
    }
}
</style>