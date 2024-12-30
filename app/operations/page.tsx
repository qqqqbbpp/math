"use client"
import Header from "@/app/components/Header";
import { useEffect } from "react";
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';
import Footer from "@/app/components/Footer";


export default function Operations() {

useEffect(() => {
    const element = document.querySelector('main');
    element?.focus();
}, []);

    return (
        <>
            <Header/>
            <main tabIndex={1}>
                <div className="main">
                    <h1 id="1">Сложение</h1>
                        <p>Сложение&nbsp;&mdash; это арифметическая операция, результатом которой является сумма двух слагаемых.</p>
                        <p><Latex>{`$a + b = c$`}</Latex></p>
                        <p><Latex>{`$1 + 1 = 2$`}</Latex></p>
                        <h2 id="2">Сумма</h2>
                            <p>Сумму обозначают <Latex>{`$\\Sigma$`}</Latex>, под этим знаком записывается индекс, который определяет нижнюю границу суммирования <Latex>{`$i=m$`}</Latex>, выше верхняя граница <Latex>{`$n$`}</Latex>, а&nbsp;после знака суммы записывается переменная, обозначающая каждый член в&nbsp;серии <Latex>{`$a_i$`}</Latex>.</p>
                            <p><Latex>{`$\\sum\\limits_{i=m}^n a_i = a_m + a_{m+1} + \\ldots + a_{n-1} + a_n$`}</Latex></p>
                            <p><Latex>{`$\\sum\\limits_{i=1}^2 1 = 1 + 1 = 2$`}</Latex></p>
                        <h2 id="3">Вычитание</h2>
                            <p>Вычитание&nbsp;&mdash; это обратная сложению операция, результатом которой является разность уменьшаемого и&nbsp;вычитаемого.</p>
                            <p><Latex>{`$a - b = c$`}</Latex></p>
                            <p><Latex>{`$2 - 1 = 1$`}</Latex></p>
                        <h2 id="4">Гипероперации</h2>
                            <p>Гипероперации&nbsp;&mdash; обобщения арифметических операций.</p>
                            <h3 id="4a">Умножение</h3>
                                <p>Умножение&nbsp;&mdash; гипероперация сложения, результатом которой является произведение двух множителей.</p>
                                <p><Latex>{`$a \\times b = \\underbrace{a + a +\\ldots + a}_{\\text{b}} = \\sum\\limits_{i=1}^{b} a$`}</Latex></p>
                                <p><Latex>{`$1 \\times 2 = \\underbrace{1+1}_{\\text{2}} = 2$`}</Latex></p>
                            <h3 id="4b">Произведение</h3>
                                <p>Произведение имеет такую&nbsp;же запись, как у&nbsp;суммы, за&nbsp;исключением знака. Оно обозначается &nbsp;<Latex>{`$\\Pi$`}</Latex>.</p>
                                <p><Latex>{`$\\prod\\limits_{i=m}^n a_i = a_m \\times a_{m+1} \\times \\ldots \\times a_{n-1} \\times a_n$`}</Latex></p>
                                <p><Latex>{`$\\prod\\limits_{i=1}^2 i = 1 \\times 2 = 2$`}</Latex></p>
                            <h3 id="4c">Деление</h3>
                                <p>Деление&nbsp;&mdash; гипероперация вычитания, результатом которой является частное делимого и&nbsp;делителя.</p>
                                <p><Latex>{`$a : b = a \\underbrace{- b - b - \\ldots - b}_{\\text{c}} = c$`}</Latex></p>
                                <p><Latex>{`$2 : 1 = 2\\underbrace{-1-1}_{\\text{2}} = 2$`}</Latex></p>
                            <h3 id="4d">Треугольное число</h3>
                                <p>Треугольное число&nbsp;&mdash; это гипероперация сложения всех положительных целых чисел от&nbsp;1&nbsp;до&nbsp;<Latex>{`$n$`}</Latex>.</p>
                                <p><Latex>{`$T_n = 1 + 2 \\ldots + n = \\sum\\limits_{i=1}^n i$`}</Latex></p>
                                <p><Latex>{`$T_2 = 1 + 2 = 3$`}</Latex></p>
                            <h3 id="4e">Возведение в степень</h3>
                                <p>Возведение в&nbsp;степень&nbsp;&mdash; это гипероперация умножения, результатом которой является произведение основания&nbsp;<Latex>{`$a$`}</Latex> на&nbsp;себя столько раз, сколько указано в&nbsp;показателе степени&nbsp;<Latex>{`$b$`}</Latex>.</p>
                                <p><Latex>{`$a^b = \\underbrace{a \\times a \\times \\ldots \\times a}_{\\text{b}} = \\prod\\limits_{i=1}^b a$`}</Latex></p>
                                <p><Latex>{`$1^2 = \\underbrace{1\\times1}_{\\text{2}} = 1$`}</Latex></p>
                            <h3 id="4f">Извлечение корня</h3>
                                <p>Извлечение корня&nbsp;&mdash; это обратная возведению в&nbsp;степень операция, результатом которой является такое число&nbsp;<Latex>{`$a$`}</Latex>, которое, будучи возведено в&nbsp;заданную степень&nbsp;<Latex>{`$b$`}</Latex>, дает исходное число&nbsp;<Latex>{`$c$`}</Latex>.</p>
                                <p><Latex>{`$\\sqrt[b]{c} = a, ~a^b = c$`}</Latex></p>
                                <p><Latex>{`$\\sqrt[2]{4} = 2, ~2^2 = 4$`}</Latex></p>
                            <h3 id="4g">Логарифмирование</h3>
                                <p>Логарифмирование&nbsp;&mdash; это обратная к&nbsp;возведению в&nbsp;степень операция, результатом которой является степень&nbsp;<Latex>{`$b$`}</Latex>, в&nbsp;которую нужно возвести число&nbsp;<Latex>{`$a$`}</Latex>, чтобы получить исходное число&nbsp;<Latex>{`$c$`}</Latex>.</p>
                                <p><Latex>{`$\\log_a c = b, ~a^b = c$`}</Latex></p>
                                <p><Latex>{`$\\log_2 4 = 2, ~2^2 = 4$`}</Latex></p>
                            <h3 id="4h">Факториал</h3>
                                <p>Факториал&nbsp;&mdash; это гипероперация умножения всех положительных целых чисел от&nbsp;1&nbsp;до&nbsp;<Latex>{`$n$`}</Latex>.</p>
                                <p><Latex>{`$n! = 1\\times 2 \\times \\ldots \\times n = \\prod\\limits_{i=1}^n i$`}</Latex></p>
                                <p><Latex>{`$2! = 1 \\times 2 = 2$`}</Latex></p>
                        <h2 id="5">Операции математического анализа</h2>
                            <p>Операции математического анализа&nbsp;&mdash; это действия, которые выполняются с&nbsp;функциями и&nbsp;переменными для изучения их&nbsp;свойств и&nbsp;поведения.</p>
                            <h3 id="5a">Производная</h3>
                                <p>Производная&nbsp;&mdash; это величина, характеризующая скорость изменения функции&nbsp;<Latex>{`$f(x)$`}</Latex> в&nbsp;точке&nbsp;<Latex>{`$x.$`}</Latex></p>
                                <p><Latex>{`$f'(x) = \\lim\\limits_{\\Delta x \\to 0} \\frac{f(x + \\Delta x) - f(x)}{\\Delta x}$`}</Latex></p>
                                <p><Latex>{`$(x^2)' = \\lim\\limits_{\\Delta x \\to 0} \\frac{(x + \\Delta x)^2 - x^2}{\\Delta x} = \\frac{x^2 + 2x \\Delta x + (\\Delta x)^2 - x^2}{\\Delta x} = \\frac{2x \\Delta x + (\\Delta x)^2}{\\Delta x} = \\frac{\\Delta x (2x + \\Delta x)}{\\Delta x} = 2x+\\Delta x =2x$`}</Latex></p>
                            <h3 id="5b">Интеграл</h3>
                                <p>Интеграл&nbsp;&mdash; это величина, представляющая собой сумму значений функции&nbsp;<Latex>{`$f(x)$`}</Latex> на&nbsp;интервале&nbsp;<Latex>{`$[a, b]$`}</Latex>, взятых с&nbsp;учетом бесконечно малых приращений аргумента. Он является обратной операцией к&nbsp;дифференцированию.</p>
                                <p><Latex>{`$\\int f(x), ~dx$`}</Latex>&nbsp;&mdash; неопределенный интеграл</p>
                                <p><Latex>{`$\\int\\limits_a^b f(x), ~dx$`}</Latex>&nbsp;&mdash; определенный интеграл</p>
                                <p><Latex>{`$\\int x^2, ~dx = \\frac{x^3}{3} + C$`}</Latex></p>
                        <h2 id="6">Свойства</h2>
                            <h3 id="6a">Коммутативность</h3>
                                <p>Операция коммутативна, если порядок чисел не&nbsp;влияет на&nbsp;результат.</p>
                                <p><Latex>{`$a + b = b + a, ~1 + 2 = 2 + 1 = 3$`}</Latex></p>
                                <p><Latex>{`$a \\times b = b \\times a, ~1 \\times 2 = 2 \\times 1 = 2$`}</Latex></p>
                            <h3 id="6b">Ассоциативность</h3>
                                <p>Операция ассоциативна, если при выполнении последовательности операций результат не&nbsp;зависит от&nbsp;расстановки скобок.</p>
                                <p><Latex>{`$a + (b + c) = c + (a + b), ~1 + (2 + 3) = 3 + (1 + 2) = 6$`}</Latex></p>
                                <p><Latex>{`$a \\times (b \\times c) = c \\times (a \\times b), ~1 \\times (2 \\times 3) = 3 \\times (1 \\times 2) = 6$`}</Latex></p>
                            <h3 id="6c">Дистрибутивность</h3>
                                <p>Дистрибутивность — это свойство, которое связывает две операции.</p>
                                <p><Latex>{`$a \\times (b + c) = (a \\times b) + (a \\times c)$`}</Latex></p>
                                <p><Latex>{`$1 \\times (2 + 3) = (1 \\times 2) + (1 \\times 3) = 5$`}</Latex></p>
                </div>
            </main>
            <Footer 
                prevPage="Оглавление" prevHref="https://qqqqbbpp.github.io/math" 
                nextPage="Числа" nextHref="https://qqqqbbpp.github.io/math/numbers" 
            />
        </>
    )
}
