<template>
    <div>
        <BaseHero :title="'Большая Норильская экспедиция'" :descr="heroDescr" :img="'img/hero2.png'"
            :imgMobile="'img/hero2-mobile.png'" />
        <MainSection>
            <section>
                <BaseTextBlock class="mb-7-5">
                    <p class="text-block__descr">
                        Реакция &laquo;Норникеля&raquo; на&nbsp;инцидент была молниеносной. Первым делом нужно было
                        минимизировать последствия аварии и&nbsp;максимально быстро собрать топливо. Вторая
                        задача&nbsp;&mdash; пригласить учёных, чтобы те&nbsp;оценили состояние экосистем после инцидента
                        и&nbsp;помогли разработать план по&nbsp;их&nbsp;восстановлению.
                    </p>
                </BaseTextBlock>
            </section>
            <section>
                <div class="step-start">
                    <img class="step-start__img" src="img/step-1.png">
                    <div class="step-start__title">Первый этап</div>
                    <div class="step-start__period">Пиюль – сентябрь 2020 года</div>
                    <div class="step-start__descr">На приглашение «Норникеля» откликнулись сразу 14 отраслевых институтов
                        Сибирского отделения Российской академии наук (СО РАН). Летом 2020 года на Таймыр приехали более 30
                        учёных — участников Большой Норильской экспедиции. Перед ними стояли сразу несколько масштабных
                        задач:
                    </div>
                    <svg class="step-start__lines" width="636" height="74" viewBox="0 0 636 74" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1319_9771)">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M312.704 69.7863C313.079 70.8229 312.553 71.9625 311.53 72.3315C310.508 72.7006 309.375 72.1594 309.001 71.1227C308.627 70.0861 309.153 68.9465 310.175 68.5775C310.276 68.5412 310.378 68.5137 310.479 68.4947L310.37 -0.00528968L311.11 -0.000243772L311.219 68.4997C311.878 68.632 312.457 69.1008 312.704 69.7863Z"
                                fill="#4F4F4F" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M13.2673 70.3718C13.7007 71.3955 13.1949 72.4892 12.1375 72.8145C11.0801 73.1398 9.87165 72.5736 9.43826 71.5498C9.00487 70.5261 9.5107 69.4324 10.5681 69.1071C10.7156 69.0618 10.866 69.0337 11.0169 69.0219C11.9683 52.599 25.8162 40.1902 43.6006 40.2258L266.825 40.6718C291.282 40.7207 310.117 22.9991 310.044 0.00796085L310.82 0.0650491C310.894 23.4363 291.748 41.4509 266.887 41.4012L43.662 40.9552C26.2744 40.9204 12.734 53.047 11.7929 69.1C12.4348 69.2805 12.9993 69.7386 13.2673 70.3718Z"
                                fill="#4F4F4F" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M607.911 70.3718C607.478 71.3955 607.984 72.4892 609.041 72.8145C610.099 73.1398 611.307 72.5736 611.74 71.5498C612.174 70.5261 611.668 69.4324 610.611 69.1071C610.463 69.0618 610.313 69.0337 610.162 69.0219C609.21 52.599 595.363 40.1902 577.578 40.2258L354.353 40.6718C329.897 40.7207 311.062 22.9991 311.134 0.00796085L310.359 0.0650491C310.285 23.4363 329.431 41.4509 354.292 41.4012L577.517 40.9552C594.904 40.9204 608.445 53.047 609.386 69.1C608.744 69.2805 608.179 69.7386 607.911 70.3718Z"
                                fill="#4F4F4F" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1319_9771">
                                <rect width="635" height="74" fill="white" transform="translate(0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <div class="step-start__items">
                        <div class="step-start__item">
                            <div class="step-start__item-number">1</div>
                            <div class="step-start__item-descr">Отследить состояние экосистем после аварии</div>
                        </div>
                        <div class="step-start__item">
                            <div class="step-start__item-number">2</div>
                            <div class="step-start__item-descr">Оперативное обнаружить возможные скрытые загрязнения после
                                очистки территорий от нефтепродуктов</div>

                        </div>
                        <div class="step-start__item">
                            <div class="step-start__item-number">3</div>
                            <div class="step-start__item-descr">Оценить реальный ущерб, нанесённый экосистемам аварией на
                                ТЭЦ-3</div>
                        </div>
                    </div>
                </div>
                <div >
                    <BigMap/>
                </div>
            </section>
        </MainSection>
    </div>
</template>

<script>
import BaseHero from '@/layout/BaseHero.vue';
import MainSection from '@/layout/MainSection.vue';
import BaseTextBlock from '@/components/BaseTextBlock.vue'
import BigMap from '@/components/BigMap.vue'

// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

export default {
    name: 'App',
    components: {
        BaseHero,
        MainSection,
        BaseTextBlock,
        BigMap
    },
    data() {
        return {
            heroDescr: 'Май 2020 года, Норильск. Из-за таяния вечной мерзлоты одна из цистерн ТЭЦ-3 с изельным топливом треснула у основания, и тысячи тонн нефтепродуктов разлились по территории предприятия, а затем попали в реки Далдыкан и Амбарная.'
        }
    },
}

</script>

<style lang="scss">
.step-start {
    margin-bottom: 6.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__img {
        margin-bottom: 0.63rem;
        width: 22.5625rem;
        height: 8rem;
    }

    &__title {
        margin-bottom: 0.94rem;
        font-size: 2.125rem;
        font-weight: 600;
        line-height: 130%;
        color: var(--copper, #D38235);
    }

    &__period {
        margin-bottom: 1.75rem;
        color: var(--copper, #D38235);
        font-size: 1.125rem;
        font-weight: 300;
        line-height: 130%;
    }

    &__descr {
        margin-bottom: 1.25rem;
        width: 34.8125rem;
        text-align: center;
        font-size: 1.125rem;
        font-weight: 300;
        line-height: 130%;
    }

    &__lines {
        width: 39.68rem;
        height: 4.6rem;
    }

    &__items {
        margin-bottom: 6.12rem;
        display: flex;
        width: 53.3125rem;
        justify-content: space-between;
    }

    &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.87rem;

        &-number {
            width: 1.875rem;
            height: 1.875rem;
            border-radius: 100%;
            background-color: #D38235;
            color: #fff;
            font-size: 1.125rem;
            font-weight: 500;
            line-height: 130%;
        }
    }
}</style>