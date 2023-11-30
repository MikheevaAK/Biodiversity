<template>
    <div class="faq">
        <div class="header" @click="handleClick(faq)">
            <div class="question" v-html="lang === 'ru' ? faq.question : faq.questionEn"></div>
            <div class="faq_svg">
                <svg class="faq_svg__minus" xmlns="http://www.w3.org/2000/svg" width="29" height="2" viewBox="0 0 29 2"
                    fill="none">
                    <path d="M0 1.0802H29" stroke="black" />
                </svg>
                <svg class="faq_svg__minus" :class="{ 'faq_svg__minus_close': faq.isOpen }"
                    xmlns="http://www.w3.org/2000/svg" width="29" height="2" viewBox="0 0 29 2" fill="none">
                    <path d="M0 1.0802H29" stroke="black" />
                </svg>
            </div>
        </div>
        <div v-if="faq.mainPageItem" class="answer" :class="{ 'open': faq.isOpen }">
            <div class=fqa-flex>
                <div class=fqa-num>01</div>
                <div class=fqa-text>
                    <span v-if="lang === 'ru'">
                        Организует ежегодные научные экспедиции совместно с&nbsp;сотрудниками РАН, где изучает экосистемы
                    дивизионов и&nbsp;наблюдает за&nbsp;состоянием биоразнообразия.
                    </span>
                    <span v-else>
                        We organise annual research expeditions together with the Russian Academy of Sciences to study ecosystems across our divisions and monitor biodiversity.
                    </span>
                </div>
            </div>

            <div class=fqa-flex>
                <div class=fqa-num>02</div>
                <div class=fqa-text>
                    
                    <span v-if="lang === 'ru'">
                        Проводит исследования и&nbsp;эксперименты по&nbsp;стимулированию естественного восстановления природных
                    сред.
                </span>
                <span v-else>
                    We perform tests and experiments to contribute to natural restoration of habitats.
                </span>
                </div>
            </div>

            <div class=fqa-flex>
                <div class=fqa-num>03</div>
                <div class=fqa-text>
                    <span v-if="lang === 'ru'">Поддерживает работу </span>
                    <span v-else>We support </span>
                    <BaseTooltip :word="lang === 'ru' ? 'ООПТ' : 'specially protected natural areas'">
                        <span v-if="lang === 'ru'">
                        Особо охраняемые природные территории&nbsp;&mdash; участки земли или воды, где природа
                        и&nbsp;её&nbsp;биоразнообразие защищены государством. Создаются для сохранения редких
                        и&nbsp;уязвимых видов растений, животных и&nbsp;экосистем, а&nbsp;также для поддержания природных
                        процессов и&nbsp;культурных ценностей. К&nbsp;ООПТ относятся заповедники, национальные парки,
                        природные заказники или другие участки с&nbsp;особыми правилами и&nbsp;ограничениями, направленными
                        на&nbsp;долгосрочную защиту природы. <br />Всего в&nbsp;России 13&nbsp;тысяч ООПТ, они
                        занимают&nbsp;12% площади страны.
                    </span>
                    <span v-else>Specially protected natural areas (SPNA) are portions of land and water where the nature and biodiversity are protected by the government. They are created to preserve rare and vulnerable animals, plants and ecosystems, and support natural processes and cultural values. SPNAs are nature reserves, national parks, natural protected areas and other sites with special rules and restrictions established to protect nature in the long run. In Russia, there are 13,000 SPNAs spreading over 12% of its territory.</span>
                    </BaseTooltip>
                    <span v-if="lang === 'ru'"> и&nbsp;их&nbsp;отдельные научно-исследовательские программы.</span>
                    <span v-else> and select research programmes.</span>
                     
                </div>
            </div>

            <div class=fqa-flex>
                <div class=fqa-num>04</div>
                <div class=fqa-text>
                    <span v-if="lang === 'ru'">
                        Спонсирует программы по&nbsp;изучению и&nbsp;охране редких и&nbsp;исчезающих видов животных и&nbsp;растений.
                </span>
                <span v-else>
                    We sponsor programmes to study and protect rare and extinct species of plants and animals.
                </span>
                    
                </div>
            </div>

            <div class=fqa-flex>
                <div class=fqa-num>05</div>
                <div class=fqa-text>
                    <span v-if="lang === 'ru'">
                        Восстанавливает нарушенные земельные участки, приводит их&nbsp;к&nbsp;исходному или более благоприятному состоянию.
                </span>
                <span v-else>
                    We rehabilitate disturbed lands to bring them to their initial or a better state.
                </span>
                    
                </div>
            </div>

            <div class=fqa-flex>
                <div class=fqa-num>06</div>
                <div class=fqa-text>
                    <span v-if="lang === 'ru'">
                        Снижает уровень загрязнённости воздуха SO₂ с&nbsp;помощью систем улавливания на&nbsp;действующих и&nbsp;проектируемых предприятиях (&laquo;Серная программа&raquo;).
                </span>
                <span v-else>
                    We utilise SO₂ capture solutions across operating and designed facilities to reduce air emissions (Sulphur Programme).
                </span>
                    
                </div>
            </div>

            <div class=fqa-flex>
                <div class=fqa-num>07</div>
                <div class=fqa-text>
                    <span v-if="lang === 'ru'">
                        Строит и&nbsp;модернизирует локальные очистные сооружения на&nbsp;предприятиях, чтобы уменьшить количество загрязняющих веществ, поступающих в&nbsp;водоёмы вместе со&nbsp;сбросами сточных вод.
                </span>
                <span v-else>
                    We build and upgrade local treatment facilities to reduce the polluting impact of wastewater discharges.
                </span>
                    
                </div>
            </div>

            <div class=fqa-flex>
                <div class=fqa-num>08</div>
                <div class=fqa-text>
                    <span v-if="lang === 'ru'">
                        Организует выпуск мальков ценных пород рыбы в&nbsp;водные бассейны российских рек.
                </span>
                <span v-else>
                    We arrange for juveniles of valuable fish species to be released into Russian rivers.
                </span>
                    
                </div>
            </div>

            <div class=fqa-flex>
                <div class=fqa-num>09</div>
                <div class=fqa-text>
                    <span v-if="lang === 'ru'">
                        Отслеживает состояние мест, где размещаются отходы, и&nbsp;здоровье экосистем вокруг таких объектов.
                </span>
                <span v-else>
                    We monitor landfill sites and the health of surrounding ecosystems.
                </span>
                   
                </div>
            </div>

            <div class=fqa-flex>
                <div class=fqa-num>10</div>
                <div class=fqa-text>
                    <span v-if="lang === 'ru'">
                        Соблюдает шумовой режим при взрывных и&nbsp;других работах.
                    </span>
                    <span v-else>
                        We observe noise requirements during blasting and other activities.
                    </span>
                   
                </div>
            </div>

            <div class=fqa-flex>
                <div class=fqa-num>11</div>
                <div class=fqa-text>
                    <span v-if="lang === 'ru'">
                        Отслеживает уровень загрязнённости природных сред с&nbsp;помощью экологического мониторинга.
                    </span>
                    <span v-else>
                        We use environmental monitoring techniques to keep track of pollution.
                    </span>
                    
                </div>
            </div>

            <div class=fqa-flex>
                <div class=fqa-num>12</div>
                <div class=fqa-text>
                    <span v-if="lang === 'ru'">
                        Повышает готовность к&nbsp;аварийным ситуациям, которые могут повлиять на&nbsp;окружающую природную среду.
                    </span>
                    <span v-else>
                        We make our facilities better prepared for emergencies that can affect the environment.
                    </span>
                </div>
            </div>

            <div class=fqa-flex>
                <div class=fqa-num>13</div>
                <div class=fqa-text>
                    <span v-if="lang === 'ru'">
                        Ограничивает некоторые виды работ там, где были обнаружены наиболее значимые ценности биоразнообразия: охраняемые виды и&nbsp;уникальные природные экосистемы.
                    </span>
                    <span v-else>
                        We limit certain activities in areas with the greatest biodiversity value, which feature protected species and unique natural ecosystems.
                    </span>
                </div>
            </div>
        </div>
        <div v-else class="answer" :class="{ 'open': faq.isOpen }" v-html="lang === 'ru' ? faq.answer : faq.answerEn">
        </div>
    </div>
</template>

<script>
import BaseTooltip from '@/components/BaseTooltip.vue'
export default {
    components: {
        BaseTooltip
    },
    props: {
        faq: {
            type: Object,
            default: null
        }
    },

    methods: {
        handleClick(faq) {
            faq.isOpen = !faq.isOpen
        }
    },
    computed: {
        lang() {
            return this.$store.state.lang
        }
    },
}
</script>

<style lang="scss">
.faq {
    flex-grow: 1;

    @media (max-width: 768px) {
        margin: 0 5.3334rem;
    }

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2.09rem 0.7rem;
        cursor: pointer;

        @media (max-width: 768px) {
            padding: 6.4rem 0;
        }

        .question {
            font-size: 1.5278rem;
            font-weight: 600;
            line-height: 130%;

            @media (max-width: 768px) {
                font-size: 4.8rem;
            }
        }

        .faq_svg {
            position: relative;
            display: flex;
            margin-right: 0.695rem;
            width: 2.014rem;
            height: 2.014rem;
            flex-shrink: 0;

            @media (max-width: 768px) {
                width: 7.734rem;
                height: 7.734rem;
            }
        }

        .faq_svg__minus {
            position: absolute;
            width: 2.014rem;
            height: 2.014rem;
            transition: all .5s ease-out;

            @media (max-width: 768px) {
                width: 7.734rem;
                height: 7.734rem;
            }

            &:last-child {
                transform: rotateZ(90deg);
            }

            &_close {
                transform: rotateZ(0deg) !important;
            }

        }
    }

    .answer {
        height: 0;
        overflow-y: hidden;
        font-weight: 300;
        font-size: 1.25rem;
        line-height: 130%;
        transition: all .5s ease-out;

        @media (max-width: 768px) {
            font-size: 4.8rem;
        }

        &.open {
            padding-bottom: 2.09rem;
            height: auto;

            @media (max-width: 768px) {
                padding-bottom: 8rem;
            }
        }
    }
}
</style>