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
                    <a href="https://pasvik-reserve.ru/" target="_blank" class="treasures__link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <circle cx="10" cy="10" r="9.5" stroke="#D38235" />
                            <path
                                d="M14.5 10C14.5 12.7006 13.9516 15.1209 13.0883 16.8475C12.2101 18.604 11.0893 19.5 10 19.5C8.9107 19.5 7.78993 18.604 6.91168 16.8475C6.04839 15.1209 5.5 12.7006 5.5 10C5.5 7.29937 6.04839 4.87912 6.91168 3.15254C7.78993 1.39605 8.9107 0.5 10 0.5C11.0893 0.5 12.2101 1.39605 13.0883 3.15254C13.9516 4.87912 14.5 7.29937 14.5 10Z"
                                stroke="#D38235" />
                            <path d="M0.5 10H19.5" stroke="#D38235" />
                        </svg>
                        <div class="treasures__link-descr">
                            Перейти на&nbsp;сайт заповедника &laquo;Пасвик&raquo;
                        </div>
                    </a>
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

                <div class="treasures__map treasures__map-2">
                    <BaseNumberBlock class="number-block-1" :textTop="'январь 1930&nbsp;г.'"
                        :textBottom="'дата создания'" />
                    <BaseNumberBlock class="number-block-2" :textTop="'278 &thinsp;435&nbsp;га'" :textBottom="'площадь'" />
                    <BasePhoto class="treasures__photo-block" :img="'img/treasures-img-2.jpg'" />
                </div>

                <BaseTextBlock class="mb-60">
                    <p class="mb-10">
                        Лапландский заповедник сегодня&nbsp;&mdash; это одна из&nbsp;крупнейших охраняемых территорий
                        в&nbsp;Европе. Здесь представлены практически все характерные для Кольского полуострова ландшафты:
                        леса, горные тундры, болота, реки и&nbsp;озёра.
                    </p>
                    <p class="mb-10">
                        Кроме того, в&nbsp;заповеднике находятся Лапландская резиденция Деда Мороза и&nbsp;несколько музеев,
                        в&nbsp;том числе&nbsp;&mdash; квартира-музей знаменитого советского натуралиста Олега
                        Семёнова-Тян-Шанского.
                    </p>
                    <p>
                        С&nbsp;1985 года Лапландский заповедник включён во&nbsp;Всемирную сеть биосферных резерватов ЮНЕСКО.
                    </p>
                </BaseTextBlock>

                <BaseTextBlock class="mb-60" :title="'Флора и фауна'">
                    Примерно половину площади заповедника занимают старовозрастные леса естественного происхождения.
                    Появились они тут примерно 10&nbsp;тыс. лет назад, когда Кольский полуостров освободился
                    от&nbsp;последнего ледника.
                </BaseTextBlock>

                <div class="number-blocks text-block__wrap mb-60">
                    <BaseNumberBlock :textTop="'206&nbsp;видов'" :textBottom="'птиц'" />
                    <BaseNumberBlock :textTop="'31&nbsp;вид'" :textBottom="'млекопитающих'" />
                    <BaseNumberBlock :textTop="'2135&nbsp;видов'" :textBottom="'растений и&nbsp;грибов'" />
                </div>

                <BaseTextBlock class="mb-60">
                    <p class="mb-10">
                        Деревья в&nbsp;Лапландском заповеднике вырастают до&nbsp;30&nbsp;метров в&nbsp;высоту
                        и&nbsp;70&nbsp;см в&nbsp;диаметре. А&nbsp;ещё они очень старые&nbsp;&mdash; достигают возраста
                        500&ndash;600&nbsp;лет. Это уникальный случай для северных широт.
                    </p>
                    <p>
                        В&nbsp;заповеднике обитает единственная охраняемая популяция дикого северного оленя. Ранее эти
                        животные были широко распространены на&nbsp;севере Европы, а&nbsp;сейчас включены в&nbsp;Красные
                        книги Российской Федерации и&nbsp;Мурманской области. На&nbsp;территории заповедника можно встретить
                        и&nbsp;другие уникальные и&nbsp;охраняемые виды растений и&nbsp;животных.
                    </p>
                </BaseTextBlock>

                <!---->

                <BaseTextBlock class="treasures__help" :title="'Помощь «Норникеля»'">
                    <p class="mb-10">
                        История сотрудничества &laquo;Норникеля&raquo; и&nbsp;Лапландского заповедника насчитывает уже
                        20&nbsp;с лишним лет. Так, сотрудники заповедника разрабатывали для компании программу рекультивации
                        земель и&nbsp;высадки деревьев.
                    </p>
                    <p class="mb-10">
                        В&nbsp;2015 году &laquo;Норникель&raquo; профинансировал строительство гостевых домиков
                        на&nbsp;территории Чунозерской усадьбы. Теперь приезжающие в&nbsp;заповедник посетители могут
                        не&nbsp;только отдохнуть между экскурсиями, но&nbsp;и&nbsp;переночевать.
                    </p>
                    <p class="mb-10">
                        При финансовой поддержке &laquo;Норникеля&raquo; и&nbsp;его дочернего предприятия&nbsp;&mdash;
                        Кольской горно-металлургической компании (ГМК)&nbsp;&mdash; Лапландский заповедник издаёт книги
                        и&nbsp;экопросветительскую продукцию. Например, на&nbsp;выпуск двух книг: о&nbsp;жизни учёных
                        Германа Крепса и&nbsp;Олега Семёнова-Тян-Шанского&nbsp;&mdash; компания выделила около 1&nbsp;млн
                        рублей.
                    </p>
                    <p class="mb-10">
                        Благотворительная программа &laquo;Норникеля&raquo; &laquo;Мир новых возможностей&raquo; помогла
                        реализовать в&nbsp;заповеднике несколько проектов. Один из&nbsp;них&nbsp;&mdash; &laquo;Лесная
                        почта&raquo;, благодаря которому любой желающий может пообщаться с&nbsp;учёными и&nbsp;задать
                        им&nbsp;вопрос о&nbsp;флоре и&nbsp;фауне. Кроме того, в&nbsp;Лапландском заповеднике появились
                        экологические познавательные тропы, а&nbsp;сейчас строится самая большая из&nbsp;них&nbsp;&mdash;
                        14-километровая &laquo;Кругосветка&raquo;.
                    </p>
                    <p class="mb-10">
                        В&nbsp;2021 году Кольская ГМК помогла заповеднику приобрести пять снегоходов. Благодаря этому учёные
                        могут ежедневно посещать самые труднодоступные уголки охраняемой территории, чтобы следить там
                        за&nbsp;порядком, проводить научные наблюдения и&nbsp;исследовать флору и&nbsp;фауну.
                    </p>
                    <p class="mb-10">
                        Помогают снегоходы и&nbsp;в&nbsp;реализации проекта &laquo;Сохраним оленя вместе&raquo;, который
                        также стартовал в&nbsp;2021 году при поддержке &laquo;Норникеля&raquo;.
                    </p>
                    <p>
                        На&nbsp;мониторинг и&nbsp;восстановление популяции северных оленей &laquo;Норникелем&raquo;
                        дополнительно выделено 1,8&nbsp;млн. рублей. Сумма ежегодных мониторинговых контрактов составляет
                        5,253&nbsp;млн. рублей.
                    </p>
                    <a href="https://laplandzap.ru/" target="_blank" class="treasures__link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <circle cx="10" cy="10" r="9.5" stroke="#D38235" />
                            <path
                                d="M14.5 10C14.5 12.7006 13.9516 15.1209 13.0883 16.8475C12.2101 18.604 11.0893 19.5 10 19.5C8.9107 19.5 7.78993 18.604 6.91168 16.8475C6.04839 15.1209 5.5 12.7006 5.5 10C5.5 7.29937 6.04839 4.87912 6.91168 3.15254C7.78993 1.39605 8.9107 0.5 10 0.5C11.0893 0.5 12.2101 1.39605 13.0883 3.15254C13.9516 4.87912 14.5 7.29937 14.5 10Z"
                                stroke="#D38235" />
                            <path d="M0.5 10H19.5" stroke="#D38235" />
                        </svg>
                        <div class="treasures__link-descr">
                            Перейти на&nbsp;сайт Лапландского заповедника
                        </div>
                    </a>
                    <BaseNumberBlock class="number-block-1" :textTop="'3&nbsp;млн&nbsp;рублей'"
                        :textBottom="'&laquo;Норникель&raquo; выделил на&nbsp;строительство гостевых домиков'" />
                    <BaseNumberBlock class="number-block-2" :textTop="'7,5&nbsp;млн&nbsp;рублей'"
                        :textBottom="'общая стоимость купленных заповедником снегоходов'" />
                </BaseTextBlock>
            </SectionOrange>
            <SectionWhite>
                <BaseTextBlock class="treasures__start">
                    <picture>
                        <source type="image/webp" srcset="img/treasures-2.webp">
                        <img src="img/treasures-2.png" alt="">
                    </picture>
                    <div class="title">Заповедники Норильского&nbsp;дивизиона</div>
                </BaseTextBlock>

                <BaseTextBlock class="mb-60" :title="'Путоранский заповедник'" :undertitle="'Красноярский край'">
                    <p class="mb-10">
                        Путоранский заповедник расположен южнее полуострова Таймыр в&nbsp;пределах плато Путорана. Здесь
                        уникальным образом сочетаются природные ландшафты различных высотных поясов и&nbsp;природных зон:
                        северная лиственничная тайга и&nbsp;лесотундра, горная тундра и&nbsp;холодные каменистые пустыни.
                        Здесь самое большое количество водопадов в&nbsp;России.
                    </p>
                    <p class="mb-10">
                        Существует несколько версий происхождения топонима Путорана. Одни учёные полагают, что слово
                        заимствовано из&nbsp;эвенкийского языка: от&nbsp;&laquo;пэтэрэ&raquo;&nbsp;&mdash;
                        &laquo;надымить&raquo; или от&nbsp;&laquo;кута&raquo;&nbsp;&mdash; &laquo;болото&raquo;. Другие
                        считают, что топоним произошёл от&nbsp;слов из&nbsp;юкагирского языка, где &laquo;анаа&raquo;
                        означает &laquo;горы&raquo;, а&nbsp;&laquo;пуран&raquo;, &laquo;пурэн&raquo;&nbsp;&mdash;
                        &laquo;верх&raquo;, &laquo;высокий&raquo;.
                    </p>
                    <p class="mb-10">
                        Расстояние от&nbsp;границ заповедника до&nbsp;предприятий &laquo;Норникеля&raquo; превышает
                        50&nbsp;км, поэтому те&nbsp;не&nbsp;оказывают влияние на&nbsp;экосистемы особо охраняемой
                        территории.
                    </p>
                    <p>
                        С&nbsp;2010 года заповедник &laquo;Путоранский&raquo; является объектом всемирного наследия ЮНЕСКО.
                    </p>
                </BaseTextBlock>

                <div class="treasures__map treasures__map-3">
                    <BaseNumberBlock class="number-block-1" :textTop="'декабрь&nbsp;1988&nbsp;г.'"
                        :textBottom="'территория получила статус особо охраняемой'" />
                    <BaseNumberBlock class="number-block-2" :textTop="'1&nbsp;887&nbsp;251&nbsp;га'"
                        :textBottom="'площадь'" />
                    <BasePhoto class="treasures__photo-block" :img="'img/treasures-img-3.jpg'" />
                </div>

                <BaseTextBlock class="mb-100 treasures__supervolcano">
                    Извержение супервулкана, которое произошло 252 млн лет назад на&nbsp;этом месте, стало причиной Великого
                    пермского вымирания. Тогда, по&nbsp;оценкам учёных, исчезло около&nbsp;70% видов наземных позвоночных
                    и&nbsp;примерно&nbsp;90% морских видов. В&nbsp;наши дни плато Путорана&nbsp;&mdash; не&nbsp;только
                    уникальное по&nbsp;красоте место, но&nbsp;и&nbsp;прибежище для сотен редких видов животных
                    и&nbsp;растений.
                    <BaseNumberBlock :textTop="'1&nbsp;млн&nbsp;км&sup3;'"
                        :textBottom="'составил объём излившейся лавы, из&nbsp;которой сформировалось плато Путорана'" />
                </BaseTextBlock>

                <BaseTextBlock class="mb-60" :title="'Флора и фауна'">
                    Во&nbsp;все ледниковые периоды плато Путорана оказывалось покрыто льдами, которые уничтожали
                    растительность. Вот почему флора заповедника сравнительно молода. Тем не&nbsp;менее здесь можно увидеть
                    необычные для таких высоких широт леса и&nbsp;ковры лишайников.
                </BaseTextBlock>

                <div class="number-blocks text-block__wrap mb-60">
                    <BaseNumberBlock :textTop="'182&nbsp;вида'" :textBottom="'птиц'" />
                    <BaseNumberBlock :textTop="'37&nbsp;видов'" :textBottom="'млекопитающих'" />
                    <BaseNumberBlock :textTop="'1360&nbsp;видов'" :textBottom="'растений и&nbsp;грибов'" />
                </div>

                <BaseTextBlock class="mb-40">
                    Через территорию заповедника проходит один из&nbsp;важнейших путей миграции диких северных оленей. Кроме
                    того, эти животные зимуют в&nbsp;районе плато Путорана.
                </BaseTextBlock>

                <!---->

                <BaseTextBlock class="treasures__help" :title="'Помощь «Норникеля»'">
                    <p class="mb-10">
                        &laquo;Норникель&raquo; поддерживает проект по&nbsp;сохранению путоранского снежного барана.
                        В&nbsp;2017 году в&nbsp;рамках проекта &laquo;Сохраним толсторога вместе&raquo; компания выделила
                        4,99 млн рублей на&nbsp;обучение волонтёров в&nbsp;Школе наблюдателей, а&nbsp;также на&nbsp;наземные
                        исследования, которые позволили собрать сведения о&nbsp;состоянии популяции этого редкого животного.
                        В&nbsp;2022 году на&nbsp;выполнение программы &laquo;Норникель&raquo; перечислил ещё 30&nbsp;млн
                        рублей. Проект планируется реализовать до&nbsp;конца 2025&nbsp;года.
                    </p>
                    <p>
                        В&nbsp;2019 году &laquo;Норникель&raquo; выделил средства &laquo;Объединённой дирекции заповедников
                        Таймыра&raquo; на&nbsp;реализацию проекта &laquo;Друзья заповедников Таймыра: Чисто_Аян&raquo;.
                        Группа волонтёров в&nbsp;течение 24&nbsp;дней очищала побережье озера Аян в&nbsp;труднодоступном
                        регионе плато Путорана. За&nbsp;это время экоактивисты собрали 638 металлических бочек
                        и&nbsp;несколько сотен килограммов металлолома, которые находились на&nbsp;этой территории
                        с&nbsp;&laquo;дозаповедных&raquo; времён.
                    </p>
                    <a href="http://zapovedsever.ru/other/putoransky" target="_blank" class="treasures__link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <circle cx="10" cy="10" r="9.5" stroke="#D38235" />
                            <path
                                d="M14.5 10C14.5 12.7006 13.9516 15.1209 13.0883 16.8475C12.2101 18.604 11.0893 19.5 10 19.5C8.9107 19.5 7.78993 18.604 6.91168 16.8475C6.04839 15.1209 5.5 12.7006 5.5 10C5.5 7.29937 6.04839 4.87912 6.91168 3.15254C7.78993 1.39605 8.9107 0.5 10 0.5C11.0893 0.5 12.2101 1.39605 13.0883 3.15254C13.9516 4.87912 14.5 7.29937 14.5 10Z"
                                stroke="#D38235" />
                            <path d="M0.5 10H19.5" stroke="#D38235" />
                        </svg>
                        <div class="treasures__link-descr">
                            Перейти на&nbsp;сайт Путоранского заповедника
                        </div>
                    </a>
                    <BaseNumberBlock class="number-block-2" :textTop="'4,5&nbsp;млн&nbsp;рублей'"
                        :textBottom="'«Норникель» выделил на&nbsp;проект «Друзья заповедников Таймыра: Чисто_Аян»'" />
                </BaseTextBlock>

            </SectionWhite>
            <SectionOrange>
                <BaseTextBlock class="mb-60" :title="'Большой Арктический заповедник'" :undertitle="'Красноярский край'">
                    Крупнейший заповедник в&nbsp;Евразии&nbsp;&mdash; Большой Арктический&nbsp;&mdash; расположен
                    на&nbsp;самом севере полуострова Таймыр. Он&nbsp;включает в&nbsp;себя не&nbsp;только материковые
                    территории, но&nbsp;и&nbsp;почти три десятка островов в&nbsp;Карском море и&nbsp;море Лаптевых.
                    <br /><br />
                    Границы заповедника находятся в&nbsp;7&nbsp;км от&nbsp;предприятий &laquo;Норникеля&raquo;.
                </BaseTextBlock>

                <div class="treasures__map treasures__map-2">
                    <BaseNumberBlock class="number-block-1" :textTop="'январь 1930&nbsp;г.'"
                        :textBottom="'дата создания'" />
                    <BaseNumberBlock class="number-block-2" :textTop="'278 &thinsp;435&nbsp;га'" :textBottom="'площадь'" />
                    <BasePhoto class="treasures__photo-block" :img="'img/treasures-img-2.jpg'" />
                </div>

                <BaseTextBlock class="mb-60">
                    Это места с&nbsp;суровым климатом. Основная часть заповедника представляет собой арктическую
                    тундру&nbsp;&mdash; заболоченные пространства с&nbsp;крайне бедной растительностью. В&nbsp;самых
                    северных участках тундра сменяется арктической пустыней: бесплодная земля здесь покрыта ледниками,
                    камнями и&nbsp;щебнем.
                </BaseTextBlock>

                <BaseTextBlock class="mb-60" :title="'Флора и фауна'">
                    На&nbsp;территории Большого Арктического заповедника нет лесов. На&nbsp;бескрайних просторах растут лишь
                    травы, мхи, лишайники и&nbsp;кое‑где&nbsp;&mdash; карликовые ивы.
                </BaseTextBlock>

                <div class="number-blocks text-block__wrap mb-60">
                    <BaseNumberBlock :textTop="'124&nbsp;видa'" :textBottom="'птиц'" />
                    <BaseNumberBlock :textTop="'16&nbsp;видов'" :textBottom="'млекопитающих'" />
                    <BaseNumberBlock :textTop="'518&nbsp;видов'" :textBottom="'растений и&nbsp;грибов'" />
                </div>

                <BaseTextBlock class="mb-60">
                    Здесь можно встретить редкие и&nbsp;исчезающие виды млекопитающих и&nbsp;птиц: белого медведя,
                    атлантического и&nbsp;лаптевского моржей, беркута, исландского песочника, кроншнепа-малютку
                    и&nbsp;многих других. В&nbsp;водах морей, которые также находятся на&nbsp;территории заповедника,
                    водятся морские единороги&nbsp;&mdash; нарвалы.
                </BaseTextBlock>

                <BaseTextBlock class="treasures__help mb-100" :title="'Помощь «Норникеля»'">
                    <p class="mb-10">
                        На&nbsp;протяжении уже более десятка лет &laquo;Норникель&raquo; оказывает финансовую поддержку
                        государственному учреждению &laquo;Заповедники Таймыра&raquo;, в&nbsp;состав которого входят Большой
                        Арктический, Путоранский, Таймырский заповедники, федеральные заказники &laquo;Пуринский&raquo;
                        и&nbsp;&laquo;Североземельский&raquo;. За&nbsp;это время компания перечислила свыше 9,8 млн рублей
                        на&nbsp;покупку строительных материалов, оборудования и&nbsp;транспорта.
                    </p>
                    <p>
                        Помимо этого &laquo;Норникель&raquo; выделил &laquo;Заповедникам Таймыра&raquo; девять грантов.
                        Средства направили на&nbsp;создание туристической инфраструктуры, организацию молодёжных летних
                        полевых лагерей и&nbsp;привлечение волонтёров.
                    </p>
                    <a href="https://wikiway.com/russia/bolshoy-arkticheskiy-zapovednik/" target="_blank"
                        class="treasures__link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <circle cx="10" cy="10" r="9.5" stroke="#D38235" />
                            <path
                                d="M14.5 10C14.5 12.7006 13.9516 15.1209 13.0883 16.8475C12.2101 18.604 11.0893 19.5 10 19.5C8.9107 19.5 7.78993 18.604 6.91168 16.8475C6.04839 15.1209 5.5 12.7006 5.5 10C5.5 7.29937 6.04839 4.87912 6.91168 3.15254C7.78993 1.39605 8.9107 0.5 10 0.5C11.0893 0.5 12.2101 1.39605 13.0883 3.15254C13.9516 4.87912 14.5 7.29937 14.5 10Z"
                                stroke="#D38235" />
                            <path d="M0.5 10H19.5" stroke="#D38235" />
                        </svg>
                        <div class="treasures__link-descr">
                            Перейти на&nbsp;сайт Большого Арктического заповедника
                        </div>
                    </a>
                    <BaseNumberBlock class="number-block-2" :textTop="'26,45&nbsp;млн&nbsp;рублей'"
                        :textBottom="'общая сумма грантов, которые &laquo;Заповедники Таймыра&raquo; получили от&nbsp;&laquo;Норникеля&raquo;'" />
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

    &__link {
        position: relative;
        z-index: 2;
        display: flex;
        margin-top: 3.125rem;
        gap: 0.903rem;
        align-items: center;

        svg {
            width: 1.389rem;
            height: 1.389rem;

            @media (max-width: 768px) {
                width: 5.334rem;
                height: 5.334rem;
            }
        }

        &-descr {
            color: #D38235;
            font-size: 1.04167rem;
            font-weight: 300;
            line-height: 130%;

            @media (max-width: 768px) {
                width: 52rem;
                font-size: 4rem;
            }
        }
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
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100%;

        &-text {
            position: absolute;
            font-size: 1.25rem;
            font-weight: 300;
            line-height: 130%;
        }

        &-1 {
            background-image: url(../../public/img/treasures-map-1.png);

            @supports (background-image: url(../../public/img/treasures-map-1.webp)) {
                background-image: url(../../public/img/treasures-map-1.webp);
            }

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

        &-2 {
            background-image: url(../../public/img/treasures-map-2.png);
            mix-blend-mode: multiply;

            @supports (background-image: url(../../public/img/treasures-map-2.webp)) {
                background-image: url(../../public/img/treasures-map-2.webp);
            }

            .treasures__photo-block {
                position: absolute;
                top: 14rem;
                left: 46.5rem;
            }

            .number-block {
                border-left: none;
                width: 22rem;

                &-1 {
                    bottom: unset;
                    top: 17rem;
                    left: 72rem;
                }

                &-2 {
                    bottom: unset;
                    top: 17rem;
                    left: 12rem;
                }
            }
        }

        &-3 {
            height: 37.667rem;
            background-image: url(../../public/img/treasures-map-3.png);

            @supports (background-image: url(../../public/img/treasures-map-3.webp)) {
                background-image: url(../../public/img/treasures-map-3.webp);
            }

            .treasures__photo-block {
                position: absolute;
                top: 17.8rem;
                left: 47.5rem;
            }

            .number-block {
                border-left: none;
                width: 22rem;

                &-1 {
                    bottom: unset;
                    top: 17rem;
                    left: 72rem;
                }

                &-2 {
                    bottom: unset;
                    top: 17.5rem;
                    left: 11rem;
                }
            }
        }
    }

    &__help {
        .number-block-1 {
            bottom: unset;
            top: 10rem;
            left: -24rem;
        }

        .number-block-2 {
            bottom: 17rem;
            width: 19rem;
            left: 40rem;
        }
    }

    &__supervolcano {
        .number-block {
            width: 21.3rem;
            bottom: 2rem;
            left: 41rem;
        }
    }

}</style>