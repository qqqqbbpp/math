import Header from "@/app/components/Header";
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';
import Footer from "@/app/components/Footer";

export default function Operations() {
    return (
        <>
            <Header />
            <main>
                <div className="main">
                    <h1 id="1">Сложение</h1>
                    <p>Сложение&nbsp;&mdash; это арифметическая операция, результатом которой является сумма двух слагаемых.</p>
                    <Latex>{`$$a + b = c$$`}</Latex>
                    <Latex>{`$$1 + 1 = 2$$`}</Latex>
                    <h2 id="2">Сумма</h2>
                    <p>Сумму обозначают <Latex>{`$\\Sigma$`}</Latex>, под этим знаком записывается индекс, который определяет нижнюю границу суммирования <Latex>{`$i=m$`}</Latex>, выше верхняя граница <Latex>{`$n$`}</Latex>, а&nbsp;после знака суммы записывается переменная, обозначающая каждый член в&nbsp;серии <Latex>{`$a_i$`}</Latex>.</p>
                    <Latex>{`$$\\sum\\limits_{i=m}^n a_i = a_m + a_{m+1} + \\ldots + a_{n-1} + a_n$$`}</Latex>
                    <Latex>{`$$\\sum\\limits_{i=1}^2 1 = 1 + 1 = 2$$`}</Latex>
                    <h2 id="3">Вычитание</h2>
                    <p>Вычитание&nbsp;&mdash; это обратная сложению операция, результатом которой является разность уменьшаемого и&nbsp;вычитаемого.</p>
                    <Latex>{`$$a - b = c$$`}</Latex>
                    <Latex>{`$$2 - 1 = 1$$`}</Latex>
                    <h2 id="4">Гипероперации</h2>
                    <p>Гипероперации&nbsp;&mdash; обобщения арифметических операций.</p>
                    <h3 id="4a">Умножение</h3>
                    <p>Умножение&nbsp;&mdash; гипероперация сложения, результатом которой является произведение двух множителей.</p>
                    <Latex>{`$$a \\cdot b = \\underbrace{a + a +\\ldots + a}_{\\text{b}} = \\sum\\limits_{i=1}^{b} a$$`}</Latex>
                    <Latex>{`$$1 \\cdot 2 = \\underbrace{1+1}_{\\text{2}} = 2$$`}</Latex>
                    <h3 id="4b">Произведение</h3>
                    <p>Произведение имеет такую&nbsp;же запись, как у&nbsp;суммы, за&nbsp;исключением знака. Оно обозначается &nbsp;<Latex>{`$\\Pi$`}</Latex>.</p>
                    <Latex>{`$$\\prod\\limits_{i=m}^n a_i = a_m \\cdot a_{m+1} \\cdot \\ldots \\cdot a_{n-1} \\cdot a_n$$`}</Latex>
                    <Latex>{`$$\\prod\\limits_{i=1}^2 i = 1 \\cdot 2 = 2$$`}</Latex>
                    <h3 id="4c">Деление</h3>
                    <p>Деление&nbsp;&mdash; гипероперация вычитания, результатом которой является частное делимого и&nbsp;делителя.</p>
                    <Latex>{`$$a : b = a \\underbrace{- b - b - \\ldots - b}_{\\text{c}} = c$$`}</Latex>
                    <Latex>{`$$2 : 1 = 2\\underbrace{-1-1}_{\\text{2}} = 2$$`}</Latex>
                    <h3 id="4d">Треугольное число</h3>
                    <p>Треугольное число&nbsp;&mdash; это гипероперация сложения всех положительных целых чисел от&nbsp;1&nbsp;до&nbsp;<Latex>{`$n$`}</Latex>.</p>
                    <Latex>{`$$T_n = 1 + 2 \\ldots + n = \\sum\\limits_{i=1}^n i$$`}</Latex>
                    <Latex>{`$$T_2 = 1 + 2 = 3$$`}</Latex>
                    <h3 id="4e">Возведение в степень</h3>
                    <p>Возведение в&nbsp;степень&nbsp;&mdash; это гипероперация умножения, результатом которой является произведение основания&nbsp;<Latex>{`$a$`}</Latex> на&nbsp;себя столько раз, сколько указано в&nbsp;показателе степени&nbsp;<Latex>{`$b$`}</Latex>.</p>
                    <Latex>{`$$a^b = \\underbrace{a \\cdot a \\cdot \\ldots \\cdot a}_{\\text{b}} = \\prod\\limits_{i=1}^b a$$`}</Latex>
                    <Latex>{`$$1^2 = \\underbrace{1\\cdot1}_{\\text{2}} = 1$$`}</Latex>
                    <h3 id="4f">Извлечение корня</h3>
                    <p>Извлечение корня&nbsp;&mdash; это обратная возведению в&nbsp;степень операция, результатом которой является такое число&nbsp;<Latex>{`$a$`}</Latex>, которое, будучи возведено в&nbsp;заданную степень&nbsp;<Latex>{`$b$`}</Latex>, дает исходное число&nbsp;<Latex>{`$c$`}</Latex>.</p>
                    <Latex>{`$$\\sqrt[b]{c} = a, ~a^b = c$$`}</Latex>
                    <Latex>{`$$\\sqrt[2]{4} = 2, ~2^2 = 4$$`}</Latex>
                    <h3 id="4g">Логарифмирование</h3>
                    <p>Логарифмирование&nbsp;&mdash; это обратная к&nbsp;возведению в&nbsp;степень операция, результатом которой является степень&nbsp;<Latex>{`$b$`}</Latex>, в&nbsp;которую нужно возвести число&nbsp;<Latex>{`$a$`}</Latex>, чтобы получить исходное число&nbsp;<Latex>{`$c$`}</Latex>.</p>
                    <Latex>{`$$\\log_a c = b, ~a^b = c$$`}</Latex>
                    <Latex>{`$$\\log_2 4 = 2, ~2^2 = 4$$`}</Latex>
                    <h3 id="4h">Факториал</h3>
                    <p>Факториал&nbsp;&mdash; это гипероперация умножения всех положительных целых чисел от&nbsp;1&nbsp;до&nbsp;<Latex>{`$n$`}</Latex>.</p>
                    <Latex>{`$$n! = 1\\cdot 2 \\cdot \\ldots \\cdot n = \\prod\\limits_{i=1}^n i$$`}</Latex>
                    <Latex>{`$$2! = 1 \\cdot 2 = 2$$`}</Latex>
                    <h2 id="5">Свойства</h2>
                    <p>Свойства&nbsp;&mdash; это характеристики, которые помогают понять, как операции ведут себя в&nbsp;различных ситуациях, и&nbsp;какие закономерности можно использовать для упрощения вычислений.</p>
                    <h3 id="5a">Коммутативность</h3>
                    <p>Операция коммутативна, если порядок чисел не&nbsp;влияет на&nbsp;результат.</p>
                    <Latex>{`$$a + b = b + a$$`}</Latex>
                    <Latex>{`$$1 + 2 = 2 + 1 = 3$$`}</Latex>
                    <Latex>{`$$a \\cdot b = b \\cdot a$$`}</Latex>
                    <Latex>{`$$1 \\cdot 2 = 2 \\cdot 1 = 2$$`}</Latex>
                    <h3 id="5b">Ассоциативность</h3>
                    <p>Операция ассоциативна, если при выполнении последовательности операций результат не&nbsp;зависит от&nbsp;расстановки скобок.</p>
                    <Latex>{`$$a + (b + c) = c + (a + b)$$`}</Latex>
                    <Latex>{`$$1 + (2 + 3) = 3 + (1 + 2) = 6$$`}</Latex>
                    <Latex>{`$$a \\cdot (b \\cdot c) = c \\cdot (a \\cdot b)$$`}</Latex>
                    <Latex>{`$$1 \\cdot (2 \\cdot 3) = 3 \\cdot (1 \\cdot 2) = 6$$`}</Latex>
                    <h3 id="5c">Дистрибутивность</h3>
                    <p>Дистрибутивность — это свойство, которое связывает две операции.</p>
                    <Latex>{`$$a \\cdot (b + c) = (a \\cdot b) + (a \\cdot c)$$`}</Latex>
                    <Latex>{`$$1 \\cdot (2 + 3) = (1 \\cdot 2) + (1 \\cdot 3) = 5$$`}</Latex>
                </div>
            </main>
            <Footer
                prevPage="Оглавление" prevHref="https://qqqqbbpp.github.io/math"
                nextPage="Числа" nextHref="https://qqqqbbpp.github.io/math/numbers"
            />
        </>
    )
}
