import Header from "./components/Header";

export default function Home() {
  return (
    <>
        <Header />
        <main>
            <div className="main">
                <div className="table-of-contents">
                    <ul>
                        <li>
                            <details>
                                <summary>Операции</summary>
                                <ol>
                                    <li><a aria-label="Сложение" href="/math/operations#1">Сложение</a></li>
                                    <li><a aria-label="Сумма" href="/math/operations#2">Сумма</a></li>
                                    <li><a aria-label="Вычитание" href="/math/operations#3">Вычитание</a></li>
                                    <li><a aria-label="Гипероперации" href="/math/operations#4">Гипероперации</a>
                                        <ol className="lower-latin">
                                            <li><a aria-label="Умножение" href="/math/operations#4a">Умножение</a></li>
                                            <li><a aria-label="Произведение" href="/math/operations#4b">Произведение</a></li>
                                            <li><a aria-label="Деление" href="/math/operations#4c">Деление</a></li>
                                            <li><a aria-label="Треугольное число" href="/math/operations#4d">Треугольное число</a></li>
                                            <li><a aria-label="Возведение в степень" href="/math/operations#4e">Возведение в степень</a></li>
                                            <li><a aria-label="Извлечение корня" href="/math/operations#4f">Извлечение корня</a></li>
                                            <li><a aria-label="Логарифмирование" href="/math/operations#4g">Логарифмирование</a></li>
                                            <li><a aria-label="Факториал" href="/math/operations#4h">Факториал</a></li>
                                        </ol>
                                    </li>
                                    <li><a aria-label="Опрерации математического анализа" href="/math/operations#5">Опрерации математического анализа</a>
                                        <ol className="lower-latin">
                                            <li><a aria-label="Производная" href="/math/operations#5a">Производная</a></li>
                                            <li><a aria-label="Интеграл" href="/math/operations#5b">Интеграл</a></li>
                                        </ol>
                                    </li>
                                    <li><a aria-label="Свойства" href="/operations#6">Свойства операций</a>
                                        <ol className="lower-latin">
                                            <li><a aria-label="Коммутативность" href="/math/operations#6a">Коммутативность</a></li>
                                            <li><a aria-label="Ассоциативность" href="/math/operations#6b">Ассоциативность</a></li>
                                            <li><a aria-label="Дистрибутивность" href="/math/operations#6c">Дистрибутивность</a></li>
                                        </ol>
                                    </li>
                                </ol>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Числа</summary>
                                <ol>
                                    <li><a aria-label="Комплексные" href="/math/numbers#1">Комплексные</a>
                                        <ol className="lower-latin">
                                            <li><a aria-label="Вещественные" href="/math/numbers#1a">Вещественные</a>
                                                <ol>
                                                    <li><a aria-label="Рациональные" href="/math/numbers#1a1">Рациональные</a>
                                                        <ol className="lower-latin">
                                                            <li><a aria-label="Целые" href="/math/numbers#1a1a">Целые</a>
                                                                <ol>
                                                                    <li><a aria-label="Целые положительные" href="/math/numbers#1a1a1">Целые положительные</a></li>
                                                                    <li><a aria-label="Целые отрицательные" href="/math/numbers#1a1a2">Целые отрицательные</a></li>
                                                                    <li><a aria-label="Ноль" href="/math/numbers#1a1a3">Ноль</a></li>
                                                                </ol>
                                                            </li>
                                                            <li><a aria-label="Дробные" href="/math/numbers#1a1b">Дробные</a>
                                                                <ol>
                                                                    <li><a aria-label="Дробные положительные" href="/math/numbers#1a1b1">Дробные положительные</a></li>
                                                                    <li><a aria-label="Дробные отрицательные" href="/math/numbers#1a1b2">Дробные отрицательные</a></li>
                                                                </ol>
                                                            </li>
                                                        </ol>
                                                    </li>
                                                    <li><a aria-label="Иррациональные" href="/math/numbers#1a2">Иррациональные</a></li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                            </details>
                        </li>
                        <li>
                            <details> 
                                <summary>Уравнения</summary>
                                <ol>
                                    <li><a aria-label="Алгебраические" href="/math/equations#1">Алгебраические</a>
                                        <ol className="lower-latin">
                                            <li><a aria-label="Рациональные" href="/math/equations#1a">Рациональные</a>
                                                <ol>
                                                    <li><a aria-label="Целые" href="/math/equations#1a1">Целые</a>
                                                        <ol className="lower-latin">
                                                            <li><a aria-label="Линейные" href="/math/equations#1a1a">Линейные</a></li>
                                                            <li><a aria-label="Квадратные" href="/math/equations#1a1b">Квадратные</a></li>
                                                            <li><a aria-label="Высших степеней" href="/math/equations#1a1c">Высших степеней</a></li>
                                                        </ol>
                                                    </li>
                                                    <li><a aria-label="Дробные" href="/math/equations#1a2">Дробные</a></li>
                                                </ol>
                                            </li>
                                            <li><a aria-label="Иррациональные" href="/math/equations#1b">Иррациональные</a></li>
                                        </ol>
                                    </li>
                                    <li><a aria-label="Трансцендентные" href="/math/equations#2">Трансцендентные</a>
                                        <ol className="lower-latin">
                                            <li><a aria-label="Показательные" href="/math/equations#2a">Показательные</a></li>
                                            <li><a aria-label="Логарифмические" href="/math/equations#2b">Логарифмические</a></li>
                                            <li><a aria-label="Тригонометрические" href="/math/equations#2c">Тригонометрические</a></li>
                                        </ol>
                                    </li>
                                </ol>
                            </details>
                        </li>
                        <li>
                            <details> 
                                <summary>Функции</summary>
                                <ol>
                                    <li><a aria-label="Линейные" href="/math/functions#1">Линейные</a></li>
                                    <li><a aria-label="Квадратные" href="/math/functions#2">Квадратные</a></li>
                                </ol>
                            </details>
                        </li>
                        <li>
                            <details> 
                                <summary>Вероятности</summary>
                                <ol>
                                    <li><a aria-label="Основные понятия в теории вероятностей" href="/math/probabilities#1">Основные понятия</a>
                                        <ol className="lower-latin">
                                            <li><a aria-label="Классификация" href="/math/probabilities#1a">Классификация</a></li>
                                            <li><a aria-label="Операции" href="/math/probabilities#1b">Операции над событиями</a></li>
                                            <li><a aria-label="Вероятности" href="/math/probabilities#1c">Вероятности</a></li>
                                        </ol>
                                    </li>
                                    <li><a href="/math/probabilities#2">Комбинаторика</a>
                                        <ol className="lower-latin">
                                            <li><a aria-label="Формулы комбинаторики" href="/math/probabilities#2a">Формулы комбинаторики</a></li>
                                        </ol>
                                    </li>
                                    <li><a href="/math/probabilities#3">Теоремы</a>
                                        <ol className="lower-latin">
                                            <li><a aria-label="Теорема сложения" href="/math/probabilities#3a">Теорема сложения</a></li>
                                            <li><a aria-label="Теорема умножения" href="/math/probabilities#3b">Теорема умножения</a></li>
                                            <li><a aria-label="Теорема гипотез" href="/math/probabilities#3c">Теорема гипотез</a></li>
                                        </ol>
                                    </li>
                                    <li><a aria-label="Повторные независимые испытания" href="/math/probabilities#4">Повторные независимые испытания</a>
                                        <ol className="lower-latin">
                                            <li><a aria-label="Формула Бернулли" href="/math/probabilities#4a">Формула Бернулли</a></li>
                                            <li><a aria-label="Формула Пуассона" href="/math/probabilities#4b">Формула Пуассона</a></li>
                                            <li><a aria-label="Формула Лапласа" href="/math/probabilities#4c">Формула Лапласа</a></li>
                                        </ol>
                                    </li>
                                    <li><a aria-label="Случайные величины" href="/math/probabilities#5">Случайные величины</a>
                                        <ol className="lower-latin">
                                            <li><a aria-label="Классификация случайных величин" href="/math/probabilities#5a">Классификация случайных величин</a></li>
                                            <li><a aria-label="Закон распределения случайной величины" href="/math/probabilities#5b">Закон распределения случайной величины</a></li>
                                            <li><a aria-label="Закон распределения случайной величины" href="/math/probabilities#5c">Операции над случайными величинами</a></li>
                                        </ol>
                                    </li>
                                    <li><a aria-label="Интегральная функция распределения" href="/math/probabilities#6">Интегральная функция распределения</a>
                                                <ol className="lower-latin">
                                                    <li><a aria-label="Cвойства" href="/math/probabilities#6a">Свойства</a></li>
                                                </ol>
                                            </li>
                                    <li><a aria-label="Дифферинциальная функция распределения" href="/math/probabilities#7">Дифферинциальная функция распределения</a>
                                        <ol className="lower-latin">
                                            <li><a aria-label="Свойства" href="/math/probabilities#7a">Свойства</a></li>
                                        </ol>
                                    </li>
                                    <li><a aria-label="Числовые характеристики случайной величины" href="/math/probabilities#8">Числовые характеристики случайной величины</a>
                                        <ol className="lower-latin">
                                            <li><a aria-label="Математическое ожидание" href="/math/probabilities#8a">Математическое ожидание</a>
                                                <ol>
                                                    <li><a aria-label="Дискретное математическое ожидание" href="/math/probabilities#8a1">Дискретное математическое ожидание</a></li>
                                                    <li><a aria-label="Непрерывное математическое ожидание" href="/math/probabilities#8a2">Непрерывное математическое ожидание</a></li>
                                                    <li><a aria-label="Свойства" href="/math/probabilities#8a3">Свойства</a></li>
                                                </ol>
                                            </li>
                                            <li><a aria-label="Дисперсия случайной величины" href="/math/probabilities#8b">Дисперсия</a>
                                                <ol>
                                                    <li><a aria-label="Дискретная дисперсия" href="/math/probabilities#8b1">Дискретная дисперсия</a></li>
                                                    <li><a aria-label="Непрерывная дисперсия" href="/math/probabilities#8b2">Непрерывная дисперсия</a></li>
                                                    <li><a aria-label="Свойства" href="/math/probabilities#8b3">Свойства</a></li>
                                                </ol>
                                            </li>
                                            <li><a aria-label="Среднеквадратическое отклонение" href="/math/probabilities#8c">Среднеквадратическое отклонение</a></li>
                                        </ol>
                                    </li>
                                    <li><a aria-label="Конкретные законы распределения" href="/math/probabilities#9">Конкретные законы распределения</a>
                                        <ol className="lower-latin">
                                            <li><a aria-label="Равномерный закон распределения" href="/math/probabilities#9a">Равномерный закон распределения</a></li>
                                            <li><a aria-label="Показательное распределение" href="/math/probabilities#9b">Показательное распределение</a></li>
                                            <li><a aria-label="Нормальное распределение" href="/math/probabilities#9c">Нормальное распределение</a>
                                                <ol>
                                                    <li><a aria-label="Свойства" href="/math/probabilities#9c1">Свойства</a></li>
                                                </ol>
                                            </li>
                                            <li><a aria-label="Функция Лапласа" href="/math/probabilities#9d">Функция Лапласа</a>
                                                <ol>
                                                    <li><a aria-label="Свойства" href="/math/probabilities#9d1">Свойства</a></li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </li>
                                    <li><a aria-label="Предельные теоремы теории вероятностей" href="/math/probabilities#10">Предельные теоремы теории вероятностей</a>
                                        <ol className="lower-latin">
                                            <li><a aria-label="Классификация" href="/math/probabilities#10a">Классификация</a></li>
                                            <li><a aria-label="Неравенство Маркова" href="/math/probabilities#10b">Неравенство Маркова</a></li>
                                            <li><a aria-label="Неравенство Чебышева" href="/math/probabilities#10c">Неравенство Чебышева</a></li>
                                            <li><a aria-label="Теорема Чебышева" href="/math/probabilities#10d">Теорема Чебышева</a></li>
                                            <li><a aria-label="Теорема Бернулли" href="/math/probabilities#10e">Теорема Бернулли</a></li>
                                            <li><a aria-label="Теорема Пуассона" href="/math/probabilities#10f">Теорема Пуассона</a></li>
                                            <li><a aria-label="Центральная теорема" href="/math/probabilities#10g">Центральная теорема</a></li>
                                        </ol>
                                    </li>
                                </ol>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Статистика</summary>
                                <ol>
                                    <li><a aria-label="Выборочный метод" href="/math/statistics#1">Выборочный метод</a></li>
                                    <li><a aria-label="Ряд распределений" href="/math/statistics#2">Ряд распределений</a></li>
                                    <li><a aria-label="Графическое представление" href="/math/statistics#3">Графическое представление</a></li>
                                    <li><a aria-label="Выборочные характеристики" href="/math/statistics#4">Выборочные характеристики</a>
                                        <ol className="lower-latin">
                                            <li><a aria-label="Выборочная средняя" href="/math/statistics#4a">Выборочная средняя</a>
                                                <ol>
                                                    <li><a aria-label="Несгруппированно" href="/math/statistics#4a1">Несгруппированно</a></li>
                                                    <li><a aria-label="Сгруппированно" href="/math/statistics#4a2">Сгруппированно</a></li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </li>
                                    <li><a aria-label="Структурные средние" href="/math/statistics#5">Структурные средние</a>
                                        <ol className="lower-latin">
                                            <li><a aria-label="Мода" href="/math/statistics#5a">Мода</a></li>
                                            <li><a aria-label="Медиана" href="/math/statistics#5b">Медиана</a>
                                                <ol>
                                                    <li><a aria-label="Мода" href="/math/statistics#5b1">n&nbsp;&mdash; четное</a></li>
                                                    <li><a aria-label="Мода" href="/math/statistics#5b2">n&nbsp;&mdash; нечетное</a></li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </li>
                                    <li><a aria-label="Показатели вариации" href="/math/statistics#6">Показатели вариации</a>
                                        <ol className="lower-latin">
                                            <li><a aria-label="Мода" href="/math/statistics#6a">Размах</a></li>
                                            <li><a aria-label="Дисперсия" href="/math/statistics#6b">Дисперсия</a>
                                                <ol>
                                                    <li><a aria-label="Несгруппированно" href="/math/statistics#6b1">Несгруппированно</a></li>
                                                    <li><a aria-label="Сгруппированно" href="/math/statistics#6b2">Сгруппированно</a></li>
                                                    <li><a aria-label="Общая формула" href="/math/statistics#6b3">Общая формула</a></li>
                                                </ol>
                                            </li>
                                            <li><a aria-label="Среднее квадротическое отклонение" href="/math/statistics#6c">Среднее квадротическое отклонение</a></li>
                                            <li><a aria-label="Коэфицент вариации" href="/math/statistics#6d">Коэфицент вариации</a></li>
                                        </ol>
                                    </li>
                                    <li><a aria-label="Статистическое оценивание" href="/math/statistics#7">Статистическое оценивание</a>
                                        <ol className="lower-latin">
                                            <li><a aria-label="Интервальная оценка математического ожидания нормального распределения при известном среднем квадратическом отклонении" href="/math/statistics#7a">Интервальная оценка математического ожидания нормального распределения при известном среднем квадратическом отклонении</a></li>
                                        </ol>
                                    </li>
                                    <li><a aria-label="Проверка статистических гипотез" href="/math/statistics#8">Проверка статистических гипотез</a>
                                        <ol className="lower-latin">
                                            <li><a aria-label="Виды критических областей" href="/math/statistics#8a">Виды критических областей</a></li>
                                            <li><a aria-label="Проверка гипотезы о нормальном законе распределения генеральной совокупности" href="/math/statistics#8b">Проверка гипотезы о нормальном законе распределения генеральной совокупности</a></li>
                                            <li><a aria-label="Проверка гипотезы о равенстве генеральных дисперсий" href="/math/statistics#8c">Проверка гипотезы о равенстве генеральных дисперсий</a></li>
                                            <li><a aria-label="Сравнение генеральных средних двух нормально распределённых генеральных совокупностей дисперсии которых неизвестны и одинаковы" href="/math/statistics#8d">Сравнение генеральных средних двух нормально распределённых генеральных совокупностей дисперсии которых неизвестны и одинаковы</a></li>
                                            <li><a aria-label="Проверка гипотезы о равенстве вероятностей" href="/math/statistics#8e">Проверка гипотезы о равенстве вероятностей</a></li>
                                        </ol>
                                    </li>
                                </ol>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </main>	
        <footer>
        </footer>
    </>
  );
}
