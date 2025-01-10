import Header from "./components/Header";
import Link from 'next/link';

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
                                    <li><Link aria-label="Сложение" href="https://qqqqbbpp.github.io/math/operations#1">Сложение</Link></li>
                                    <li><Link aria-label="Сумма" href="https://qqqqbbpp.github.io/math/operations#2">Сумма</Link></li>
                                    <li><Link aria-label="Вычитание" href="https://qqqqbbpp.github.io/math/operations#3">Вычитание</Link></li>
                                    <li><Link aria-label="Гипероперации" href="https://qqqqbbpp.github.io/math/operations#4">Гипероперации</Link>
                                        <ol className="lower-latin">
                                            <li><Link aria-label="Умножение" href="https://qqqqbbpp.github.io/math/operations#4a">Умножение</Link></li>
                                            <li><Link aria-label="Произведение" href="https://qqqqbbpp.github.io/math/operations#4b">Произведение</Link></li>
                                            <li><Link aria-label="Деление" href="https://qqqqbbpp.github.io/math/operations#4c">Деление</Link></li>
                                            <li><Link aria-label="Треугольное число" href="https://qqqqbbpp.github.io/math/operations#4d">Треугольное число</Link></li>
                                            <li><Link aria-label="Возведение в степень" href="https://qqqqbbpp.github.io/math/operations#4e">Возведение в степень</Link></li>
                                            <li><Link aria-label="Извлечение корня" href="https://qqqqbbpp.github.io/math/operations#4f">Извлечение корня</Link></li>
                                            <li><Link aria-label="Логарифмирование" href="https://qqqqbbpp.github.io/math/operations#4g">Логарифмирование</Link></li>
                                            <li><Link aria-label="Факториал" href="https://qqqqbbpp.github.io/math/operations#4h">Факториал</Link></li>
                                        </ol>
                                    </li>
                                    <li><Link aria-label="Опрерации математического анализа" href="https://qqqqbbpp.github.io/math/operations#5">Опрерации математического анализа</Link>
                                        <ol className="lower-latin">
                                            <li><Link aria-label="Производная" href="https://qqqqbbpp.github.io/math/operations#5a">Производная</Link></li>
                                            <li><Link aria-label="Интеграл" href="https://qqqqbbpp.github.io/math/operations#5b">Интеграл</Link></li>
                                        </ol>
                                    </li>
                                    <li><Link aria-label="Свойства" href="https://qqqqbbpp.github.io/math/operations#6">Свойства</Link>
                                        <ol className="lower-latin">
                                            <li><Link aria-label="Коммутативность" href="https://qqqqbbpp.github.io/math/operations#6a">Коммутативность</Link></li>
                                            <li><Link aria-label="Ассоциативность" href="https://qqqqbbpp.github.io/math/operations#6b">Ассоциативность</Link></li>
                                            <li><Link aria-label="Дистрибутивность" href="https://qqqqbbpp.github.io/math/operations#6c">Дистрибутивность</Link></li>
                                        </ol>
                                    </li>
                                </ol>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Числа</summary>
                                <ol>
                                    <li><Link aria-label="Комплексные" href="https://qqqqbbpp.github.io/math/numbers#1">Комплексные</Link>
                                        <ol className="lower-latin">
                                            <li><Link aria-label="Вещественные" href="https://qqqqbbpp.github.io/math/numbers#1a">Вещественные</Link>
                                                <ol>
                                                    <li><Link aria-label="Рациональные" href="https://qqqqbbpp.github.io/math/numbers#1a1">Рациональные</Link>
                                                        <ol className="lower-latin">
                                                            <li><Link aria-label="Целые" href="https://qqqqbbpp.github.io/math/numbers#1a1a">Целые</Link>
                                                                <ol>
                                                                    <li><Link aria-label="Целые положительные" href="https://qqqqbbpp.github.io/math/numbers#1a1a1">Целые положительные</Link></li>
                                                                    <li><Link aria-label="Целые отрицательные" href="https://qqqqbbpp.github.io/math/numbers#1a1a2">Целые отрицательные</Link></li>
                                                                    <li><Link aria-label="Ноль" href="https://qqqqbbpp.github.io/math/numbers#1a1a3">Ноль</Link></li>
                                                                </ol>
                                                            </li>
                                                            <li><Link aria-label="Дробные" href="https://qqqqbbpp.github.io/math/numbers#1a1b">Дробные</Link>
                                                                <ol>
                                                                    <li><Link aria-label="Дробные положительные" href="https://qqqqbbpp.github.io/math/numbers#1a1b1">Дробные положительные</Link></li>
                                                                    <li><Link aria-label="Дробные отрицательные" href="https://qqqqbbpp.github.io/math/numbers#1a1b2">Дробные отрицательные</Link></li>
                                                                </ol>
                                                            </li>
                                                        </ol>
                                                    </li>
                                                    <li><Link aria-label="Иррациональные" href="https://qqqqbbpp.github.io/math/numbers#1a2">Иррациональные</Link></li>
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
                                    <li><Link aria-label="Алгебраические" href="https://qqqqbbpp.github.io/math/equations#1">Алгебраические</Link>
                                        <ol className="lower-latin">
                                            <li><Link aria-label="Рациональные" href="https://qqqqbbpp.github.io/math/equations#1a">Рациональные</Link>
                                                <ol>
                                                    <li><Link aria-label="Целые" href="https://qqqqbbpp.github.io/math/equations#1a1">Целые</Link>
                                                        <ol className="lower-latin">
                                                            <li><Link aria-label="Линейные" href="https://qqqqbbpp.github.io/math/equations#1a1a">Линейные</Link></li>
                                                            <li><Link aria-label="Квадратные" href="https://qqqqbbpp.github.io/math/equations#1a1b">Квадратные</Link></li>
                                                            <li><Link aria-label="Высших степеней" href="https://qqqqbbpp.github.io/math/equations#1a1c">Высших степеней</Link></li>
                                                        </ol>
                                                    </li>
                                                    <li><Link aria-label="Дробные" href="https://qqqqbbpp.github.io/math/equations#1a2">Дробные</Link></li>
                                                </ol>
                                            </li>
                                            <li><Link aria-label="Иррациональные" href="https://qqqqbbpp.github.io/math/equations#1b">Иррациональные</Link></li>
                                        </ol>
                                    </li>
                                    <li><Link aria-label="Трансцендентные" href="https://qqqqbbpp.github.io/math/equations#2">Трансцендентные</Link>
                                        <ol className="lower-latin">
                                            <li><Link aria-label="Показательные" href="https://qqqqbbpp.github.io/math/equations#2a">Показательные</Link></li>
                                            <li><Link aria-label="Логарифмические" href="https://qqqqbbpp.github.io/math/equations#2b">Логарифмические</Link></li>
                                            <li><Link aria-label="Тригонометрические" href="https://qqqqbbpp.github.io/math/equations#2c">Тригонометрические</Link></li>
                                        </ol>
                                    </li>
                                </ol>
                            </details>
                        </li>
                        <li>
                            <details> 
                                <summary>Функции</summary>
                                <ol>
                                    <li><Link aria-label="Линейные" href="https://qqqqbbpp.github.io/math/functions#1">Линейные</Link></li>
                                    <li><Link aria-label="Квадратные" href="https://qqqqbbpp.github.io/math/functions#2">Квадратные</Link></li>
                                </ol>
                            </details>
                        </li>
                        <li>
                            <details> 
                                <summary>Вероятности</summary>
                                <ol>
                                    <li><Link aria-label="Основные понятия в теории вероятностей" href="https://qqqqbbpp.github.io/math/probabilities#1">Основные понятия</Link>
                                        <ol className="lower-latin">
                                            <li><Link aria-label="Классификация" href="https://qqqqbbpp.github.io/math/probabilities#1a">Классификация</Link></li>
                                            <li><Link aria-label="Операции" href="https://qqqqbbpp.github.io/math/probabilities#1b">Операции над событиями</Link></li>
                                            <li><Link aria-label="Вероятности" href="https://qqqqbbpp.github.io/math/probabilities#1c">Вероятности</Link></li>
                                        </ol>
                                    </li>
                                    <li><Link href="https://qqqqbbpp.github.io/math/probabilities#2">Комбинаторика</Link>
                                        <ol className="lower-latin">
                                            <li><Link aria-label="Формулы комбинаторики" href="https://qqqqbbpp.github.io/math/probabilities#2a">Формулы комбинаторики</Link></li>
                                        </ol>
                                    </li>
                                    <li><Link href="https://qqqqbbpp.github.io/math/probabilities#3">Теоремы</Link>
                                        <ol className="lower-latin">
                                            <li><Link aria-label="Теорема сложения" href="https://qqqqbbpp.github.io/math/probabilities#3a">Теорема сложения</Link></li>
                                            <li><Link aria-label="Теорема умножения" href="https://qqqqbbpp.github.io/math/probabilities#3b">Теорема умножения</Link></li>
                                            <li><Link aria-label="Теорема гипотез" href="https://qqqqbbpp.github.io/math/probabilities#3c">Теорема гипотез</Link></li>
                                        </ol>
                                    </li>
                                    <li><Link aria-label="Повторные независимые испытания" href="https://qqqqbbpp.github.io/math/probabilities#4">Повторные независимые испытания</Link>
                                        <ol className="lower-latin">
                                            <li><Link aria-label="Формула Бернулли" href="https://qqqqbbpp.github.io/math/probabilities#4a">Формула Бернулли</Link></li>
                                            <li><Link aria-label="Формула Пуассона" href="https://qqqqbbpp.github.io/math/probabilities#4b">Формула Пуассона</Link></li>
                                            <li><Link aria-label="Формула Лапласа" href="https://qqqqbbpp.github.io/math/probabilities#4c">Формула Лапласа</Link></li>
                                        </ol>
                                    </li>
                                    <li><Link aria-label="Случайные величины" href="https://qqqqbbpp.github.io/math/probabilities#5">Случайные величины</Link>
                                        <ol className="lower-latin">
                                            <li><Link aria-label="Классификация случайных величин" href="https://qqqqbbpp.github.io/math/probabilities#5a">Классификация</Link></li>
                                            <li><Link aria-label="Закон распределения случайной величины" href="https://qqqqbbpp.github.io/math/probabilities#5b">Закон распределения случайной величины</Link></li>
                                            <li><Link aria-label="Закон распределения случайной величины" href="https://qqqqbbpp.github.io/math/probabilities#5c">Операции над случайными величинами</Link></li>
                                        </ol>
                                    </li>
                                    <li><Link aria-label="Интегральная функция распределения" href="https://qqqqbbpp.github.io/math/probabilities#6">Интегральная функция распределения</Link>
                                                <ol className="lower-latin">
                                                    <li><Link aria-label="Cвойства" href="https://qqqqbbpp.github.io/math/probabilities#6a">Свойства</Link></li>
                                                </ol>
                                            </li>
                                    <li><Link aria-label="Дифферинциальная функция распределения" href="https://qqqqbbpp.github.io/math/probabilities#7">Дифферинциальная функция распределения</Link>
                                        <ol className="lower-latin">
                                            <li><Link aria-label="Свойства" href="https://qqqqbbpp.github.io/math/probabilities#7a">Свойства</Link></li>
                                        </ol>
                                    </li>
                                    <li><Link aria-label="Числовые характеристики случайной величины" href="https://qqqqbbpp.github.io/math/probabilities#8">Числовые характеристики случайной величины</Link>
                                        <ol className="lower-latin">
                                            <li><Link aria-label="Математическое ожидание" href="https://qqqqbbpp.github.io/math/probabilities#8a">Математическое ожидание</Link>
                                                <ol>
                                                    <li><Link aria-label="Дискретное математическое ожидание" href="https://qqqqbbpp.github.io/math/probabilities#8a1">Дискретное математическое ожидание</Link></li>
                                                    <li><Link aria-label="Непрерывное математическое ожидание" href="https://qqqqbbpp.github.io/math/probabilities#8a2">Непрерывное математическое ожидание</Link></li>
                                                    <li><Link aria-label="Свойства" href="https://qqqqbbpp.github.io/math/probabilities#8a3">Свойства</Link></li>
                                                </ol>
                                            </li>
                                            <li><Link aria-label="Дисперсия случайной величины" href="https://qqqqbbpp.github.io/math/probabilities#8b">Дисперсия</Link>
                                                <ol>
                                                    <li><Link aria-label="Дискретная дисперсия" href="https://qqqqbbpp.github.io/math/probabilities#8b1">Дискретная дисперсия</Link></li>
                                                    <li><Link aria-label="Непрерывная дисперсия" href="https://qqqqbbpp.github.io/math/probabilities#8b2">Непрерывная дисперсия</Link></li>
                                                    <li><Link aria-label="Свойства" href="https://qqqqbbpp.github.io/math/probabilities#8b3">Свойства</Link></li>
                                                </ol>
                                            </li>
                                            <li><Link aria-label="Среднеквадратическое отклонение" href="https://qqqqbbpp.github.io/math/probabilities#8c">Среднеквадратическое отклонение</Link></li>
                                        </ol>
                                    </li>
                                    <li><Link aria-label="Конкретные законы распределения" href="https://qqqqbbpp.github.io/math/probabilities#9">Конкретные законы распределения</Link>
                                        <ol className="lower-latin">
                                            <li><Link aria-label="Равномерный закон распределения" href="https://qqqqbbpp.github.io/math/probabilities#9a">Равномерный закон распределения</Link></li>
                                            <li><Link aria-label="Показательное распределение" href="https://qqqqbbpp.github.io/math/probabilities#9b">Показательное распределение</Link></li>
                                            <li><Link aria-label="Нормальное распределение" href="https://qqqqbbpp.github.io/math/probabilities#9c">Нормальное распределение</Link>
                                                <ol>
                                                    <li><Link aria-label="Свойства" href="https://qqqqbbpp.github.io/math/probabilities#9c1">Свойства</Link></li>
                                                </ol>
                                            </li>
                                            <li><Link aria-label="Функция Лапласа" href="https://qqqqbbpp.github.io/math/probabilities#9d">Функция Лапласа</Link>
                                                <ol>
                                                    <li><Link aria-label="Свойства" href="https://qqqqbbpp.github.io/math/probabilities#9d1">Свойства</Link></li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </li>
                                    <li><Link aria-label="Предельные теоремы теории вероятностей" href="https://qqqqbbpp.github.io/math/probabilities#10">Предельные теоремы теории вероятностей</Link>
                                        <ol className="lower-latin">
                                            <li><Link aria-label="Закон больших чисел" href="https://qqqqbbpp.github.io/math/probabilities#10a">Закон больших чисел</Link>
                                                <ol>
                                                    <li><Link aria-label="Неравенство Маркова" href="https://qqqqbbpp.github.io/math/probabilities#10a1">Неравенство Маркова</Link></li>
                                                    <li><Link aria-label="Неравенство Чебышева" href="https://qqqqbbpp.github.io/math/probabilities#10a2">Неравенство Чебышева</Link></li>
                                                    <li><Link aria-label="Теорема Чебышева" href="https://qqqqbbpp.github.io/math/probabilities#10a3">Теорема Чебышева</Link></li>
                                                    <li><Link aria-label="Теорема Бернулли" href="https://qqqqbbpp.github.io/math/probabilities#10a4">Теорема Бернулли</Link></li>
                                                    <li><Link aria-label="Теорема Пуассона" href="https://qqqqbbpp.github.io/math/probabilities#10a5">Теорема Пуассона</Link></li>
                                                </ol>
                                            </li>
                                            <li><Link aria-label="Центральная теорема" href="https://qqqqbbpp.github.io/math/probabilities#10b">Центральная предельная теорема</Link></li>
                                        </ol>
                                    </li>
                                </ol>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Статистика</summary>
                                <ol>
                                    <li><Link aria-label="Выборочный метод" href="https://qqqqbbpp.github.io/math/statistics#1">Выборочный метод</Link></li>
                                    <li><Link aria-label="Ряд распределений" href="https://qqqqbbpp.github.io/math/statistics#2">Ряд распределений</Link></li>
                                    <li><Link aria-label="Графическое представление" href="https://qqqqbbpp.github.io/math/statistics#3">Графическое представление</Link></li>
                                    <li><Link aria-label="Выборочные характеристики" href="https://qqqqbbpp.github.io/math/statistics#4">Выборочные характеристики</Link>
                                        <ol className="lower-latin">
                                            <li><Link aria-label="Выборочная средняя" href="https://qqqqbbpp.github.io/math/statistics#4a">Выборочная средняя</Link>
                                                <ol>
                                                    <li><Link aria-label="Несгруппированно" href="https://qqqqbbpp.github.io/math/statistics#4a1">Несгруппированно</Link></li>
                                                    <li><Link aria-label="Сгруппированно" href="https://qqqqbbpp.github.io/math/statistics#4a2">Сгруппированно</Link></li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </li>
                                    <li><Link aria-label="Структурные средние" href="https://qqqqbbpp.github.io/math/statistics#5">Структурные средние</Link>
                                        <ol className="lower-latin">
                                            <li><Link aria-label="Мода" href="https://qqqqbbpp.github.io/math/statistics#5a">Мода</Link></li>
                                            <li><Link aria-label="Медиана" href="https://qqqqbbpp.github.io/math/statistics#5b">Медиана</Link>
                                                <ol>
                                                    <li><Link aria-label="Мода" href="https://qqqqbbpp.github.io/math/statistics#5b1">n&nbsp;&mdash; четное</Link></li>
                                                    <li><Link aria-label="Мода" href="https://qqqqbbpp.github.io/math/statistics#5b2">n&nbsp;&mdash; нечетное</Link></li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </li>
                                    <li><Link aria-label="Показатели вариации" href="https://qqqqbbpp.github.io/math/statistics#6">Показатели вариации</Link>
                                        <ol className="lower-latin">
                                            <li><Link aria-label="Мода" href="https://qqqqbbpp.github.io/math/statistics#6a">Размах</Link></li>
                                            <li><Link aria-label="Дисперсия" href="https://qqqqbbpp.github.io/math/statistics#6b">Дисперсия</Link>
                                                <ol>
                                                    <li><Link aria-label="Несгруппированно" href="https://qqqqbbpp.github.io/math/statistics#6b1">Несгруппированно</Link></li>
                                                    <li><Link aria-label="Сгруппированно" href="https://qqqqbbpp.github.io/math/statistics#6b2">Сгруппированно</Link></li>
                                                    <li><Link aria-label="Общая формула" href="https://qqqqbbpp.github.io/math/statistics#6b3">Общая формула</Link></li>
                                                </ol>
                                            </li>
                                            <li><Link aria-label="Среднее квадротическое отклонение" href="https://qqqqbbpp.github.io/math/statistics#6c">Среднее квадротическое отклонение</Link></li>
                                            <li><Link aria-label="Коэфицент вариации" href="https://qqqqbbpp.github.io/math/statistics#6d">Коэфицент вариации</Link></li>
                                        </ol>
                                    </li>
                                    <li><Link aria-label="Статистическое оценивание" href="https://qqqqbbpp.github.io/math/statistics#7">Статистическое оценивание</Link>
                                        <ol className="lower-latin">
                                            <li><Link aria-label="Интервальная оценка математического ожидания нормального распределения при известном среднем квадратическом отклонении" href="https://qqqqbbpp.github.io/math/statistics#7a">Интервальная оценка математического ожидания нормального распределения при известном среднем квадратическом отклонении</Link></li>
                                        </ol>
                                    </li>
                                    <li><Link aria-label="Проверка статистических гипотез" href="https://qqqqbbpp.github.io/math/statistics#8">Проверка статистических гипотез</Link>
                                        <ol className="lower-latin">
                                            <li><Link aria-label="Виды критических областей" href="https://qqqqbbpp.github.io/math/statistics#8a">Виды критических областей</Link></li>
                                            <li><Link aria-label="Проверка гипотезы о нормальном законе распределения генеральной совокупности" href="https://qqqqbbpp.github.io/math/statistics#8b">Проверка гипотезы о нормальном законе распределения генеральной совокупности</Link></li>
                                            <li><Link aria-label="Проверка гипотезы о равенстве генеральных дисперсий" href="https://qqqqbbpp.github.io/math/statistics#8c">Проверка гипотезы о равенстве генеральных дисперсий</Link></li>
                                            <li><Link aria-label="Сравнение генеральных средних двух нормально распределённых генеральных совокупностей дисперсии которых неизвестны и одинаковы" href="https://qqqqbbpp.github.io/math/statistics#8d">Сравнение генеральных средних двух нормально распределённых генеральных совокупностей дисперсии которых неизвестны и одинаковы</Link></li>
                                            <li><Link aria-label="Проверка гипотезы о равенстве вероятностей" href="https://qqqqbbpp.github.io/math/statistics#8e">Проверка гипотезы о равенстве вероятностей</Link></li>
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
