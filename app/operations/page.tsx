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
                    <p>Сложение&nbsp;&mdash; это операция, результатом которой является сумма двух слагаемых.</p>
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
                    <h3 id="4">Умножение</h3>
                    <p>Умножение&nbsp;&mdash; операция, результатом которой является произведение двух множителей.</p>
                    <Latex>{`$$a \\cdot b = \\underbrace{a + a +\\ldots + a}_{\\text{b}} = \\sum\\limits_{i=1}^{b} a$$`}</Latex>
                    <Latex>{`$$1 \\cdot 2 = \\underbrace{1+1}_{\\text{2}} = 2$$`}</Latex>
                    <h3 id="5">Произведение</h3>
                    <p>Произведение обозначают <Latex>{`$\\Pi$`}</Latex>, под этим знаком записывается индекс, который определяет нижнюю границу для произведения <Latex>{`$i=m$`}</Latex>, выше верхняя граница <Latex>{`$n$`}</Latex>, а&nbsp;после знака произведения записывается переменная, обозначающая каждый член в&nbsp;серии <Latex>{`$a_i$`}</Latex>.</p>
                    <Latex>{`$$\\prod\\limits_{i=m}^n a_i = a_m \\cdot a_{m+1} \\cdot \\ldots \\cdot a_{n-1} \\cdot a_n$$`}</Latex>
                    <Latex>{`$$\\prod\\limits_{i=1}^2 i = 1 \\cdot 2 = 2$$`}</Latex>
                    <h3 id="6">Деление</h3>
                    <p>Деление&nbsp;&mdash; операция, результатом которой является частное делимого и&nbsp;делителя.</p>
                    <Latex>{`$$a : b = a \\underbrace{- b - b - \\ldots - b}_{\\text{c}} = c$$`}</Latex>
                    <Latex>{`$$2 : 1 = 2\\underbrace{-1-1}_{\\text{2}} = 2$$`}</Latex>
                    <h3 id="7">Возведение в степень</h3>
                    <p>Возведение в&nbsp;степень&nbsp;&mdash; это операция, результатом которой является произведение основания&nbsp;<Latex>{`$a$`}</Latex> на&nbsp;себя столько раз, сколько указано в&nbsp;показателе степени&nbsp;<Latex>{`$b$`}</Latex>.</p>
                    <Latex>{`$$a^b = \\underbrace{a \\cdot a \\cdot \\ldots \\cdot a}_{\\text{b}} = \\prod\\limits_{i=1}^b a$$`}</Latex>
                    <Latex>{`$$1^2 = \\underbrace{1\\cdot1}_{\\text{2}} = 1$$`}</Latex>
                    <h3 id="8">Извлечение корня</h3>
                    <p>Извлечение корня&nbsp;&mdash; это обратная возведению в&nbsp;степень операция, результатом которой является такое число&nbsp;<Latex>{`$a$`}</Latex>, которое, будучи возведено в&nbsp;заданную степень&nbsp;<Latex>{`$b$`}</Latex>, дает исходное число&nbsp;<Latex>{`$c$`}</Latex>.</p>
                    <Latex>{`$$\\sqrt[b]{c} = a, ~a^b = c$$`}</Latex>
                    <Latex>{`$$\\sqrt[2]{4} = 2, ~2^2 = 4$$`}</Latex>
                    <h3 id="9">Логарифмирование</h3>
                    <p>Логарифмирование&nbsp;&mdash; это обратная к&nbsp;возведению в&nbsp;степень операция, результатом которой является степень&nbsp;<Latex>{`$b$`}</Latex>, в&nbsp;которую нужно возвести число&nbsp;<Latex>{`$a$`}</Latex>, чтобы получить исходное число&nbsp;<Latex>{`$c$`}</Latex>.</p>
                    <Latex>{`$$\\log_a c = b, ~a^b = c$$`}</Latex>
                    <Latex>{`$$\\log_2 4 = 2, ~2^2 = 4$$`}</Latex>
                    <h3 id="10">Факториал</h3>
                    <p>Факториал&nbsp;&mdash; это произведение всех положительных целых чисел от&nbsp;1&nbsp;до&nbsp;<Latex>{`$n$`}</Latex>.</p>
                    <Latex>{`$$n! = 1\\cdot 2 \\cdot \\ldots \\cdot n = \\prod\\limits_{i=1}^n i$$`}</Latex>
                    <Latex>{`$$2! = 1 \\cdot 2 = 2$$`}</Latex>
                    <h3 id="11">Субфактариал</h3>
                    <p>Субфакториал&nbsp;&mdash; это количество перестановок <Latex>{`$n$`}</Latex>&nbsp;элементов, в&nbsp;которых ни&nbsp;один элемент не&nbsp;остается на&nbsp;своем месте</p>
                    <Latex>{`$$!n = n! \\cdot \\left(1- \\frac{1}{1!} + \\frac{1}{2!} - \\frac{1}{3!} + \\cdots + (-1)^n \\cdot \\frac{1}{n!}\\right) = n! \\cdot \\sum\\limits_{i=0}^n \\frac{(-1)^i}{i!}$$`}</Latex>
                    <Latex>{`$$!2 = 2! \\cdot \\left(1- \\frac{1}{1!} + \\frac{1}{2!} \\right) = 1$$`}</Latex>
                    <h2 id="12">Свойства</h2>
                    <p>Свойства&nbsp;&mdash; это характеристики, которые помогают понять, как операции ведут себя в&nbsp;различных ситуациях, и&nbsp;какие закономерности можно использовать для упрощения вычислений.</p>
                    <h3 id="12a">Коммутативность</h3>
                    <p>Операция коммутативна, если порядок чисел не&nbsp;влияет на&nbsp;результат.</p>
                    <Latex>{`$$a + b = b + a$$`}</Latex>
                    <Latex>{`$$1 + 2 = 2 + 1 = 3$$`}</Latex>
                    <Latex>{`$$a \\cdot b = b \\cdot a$$`}</Latex>
                    <Latex>{`$$1 \\cdot 2 = 2 \\cdot 1 = 2$$`}</Latex>
                    <h3 id="12b">Ассоциативность</h3>
                    <p>Операция ассоциативна, если при выполнении последовательности операций результат не&nbsp;зависит от&nbsp;расстановки скобок.</p>
                    <Latex>{`$$a + (b + c) = c + (a + b)$$`}</Latex>
                    <Latex>{`$$1 + (2 + 3) = 3 + (1 + 2) = 6$$`}</Latex>
                    <Latex>{`$$a \\cdot (b \\cdot c) = c \\cdot (a \\cdot b)$$`}</Latex>
                    <Latex>{`$$1 \\cdot (2 \\cdot 3) = 3 \\cdot (1 \\cdot 2) = 6$$`}</Latex>
                    <h3 id="12c">Дистрибутивность</h3>
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
