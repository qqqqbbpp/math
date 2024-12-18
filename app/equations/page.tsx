"use client"
import { useEffect } from "react";
import Header from "@/app/components/Header";
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';
import Footer from "@/app/components/Footer";

export default function Equations() {

useEffect(() => {
    const element = document.querySelector('main');
    element?.focus();
}, []);

    return (
        <>
            <Header/>
            <main tabIndex={1}>
                <div className="main">
                    <h1 id="1">Алгебраические</h1>
                        <p>Алгебраические уравнения&nbsp;&mdash; это уравнения, в&nbsp;которых неизвестная величина содержится в&nbsp;алгебраических выражениях, таких как многочлены и&nbsp;дробные выражения.</p>
                        <p><Latex>{`$P(x) = 0$`}</Latex></p>
                        <h2 id="1a">Рациональные</h2>
                            <p>Рациональные уравнения&nbsp;&mdash; это уравнения, в&nbsp;которых неизвестная величина содержится в&nbsp;рациональных выражениях, т.е.&nbsp;в&nbsp;дробях, где числитель и&nbsp;знаменатель являются многочленами.</p>
                            <p><Latex>{`$\\cfrac{P(x)}{Q(x)} = 0$`}</Latex></p>
                            <h3 id="1a1">Целые</h3>
                                <p>Целые уравнения&nbsp;&mdash; это уравнения, в&nbsp;которых все члены выражены целыми числами или многочленами.</p>
                                <h4 id="1a1a">Линейные</h4>
                                    <p>Линейные уравнения&nbsp;&mdash; это уравнения которые имеют в&nbsp;себе степень <Latex>{`$=1,$`}</Latex> но не более.</p>
                                    <p><Latex>{`$ax + b = 0$`}</Latex></p>
                                    <p><Latex>{`$x = -\\cfrac{b}{a}$`}</Latex></p>
                                <h4 id="1a1b">Квадратные</h4>
                                    <p>Квадратные уравнения&nbsp;&mdash; это уравнения которые имеют в&nbsp;себе степень <Latex>{`$=2,$`}</Latex> но не более.</p>
                                    <p><Latex>{`$ax^2 + bx + c = 0$`}</Latex></p>
                                    <p><Latex>{`$x_{1,2} = \\cfrac{-b\\pm\\sqrt{b^2-4ac}}{a}$`}</Latex></p>
                                <h4 id="1a1b">Высших степеней</h4>
                                    <p>Уравнения высших степеней&nbsp;&mdash; это уравнения которые имеют в&nbsp;себе степень <Latex>{`$>2$`}</Latex>.</p>
                                    <p><Latex>{`$P(x)=a_n x^n + a_{n-1} x^{n-1}+\\ldots+a_1 x + a_0 = 0$`}</Latex></p>
                                    <p>По&nbsp;теореме о&nbsp;рациональных корнях возможные корни: <Latex>{`$x = \\frac{p}{q}$`}</Latex>, где <Latex>{`$p$`}</Latex>&nbsp;&mdash; делитель свободного члена <Latex>{`$a_0$`}</Latex>, <Latex>{`$q$`}</Latex>&nbsp;&mdash; делитель старшего коэффициента&nbsp;<Latex>{`$a_n$`}</Latex>. Проверяем найденный корень <Latex>{`$x=r$`}</Latex>&nbsp;методом подстановки <Latex>{`$P(r) = 0$`}</Latex> и&nbsp;делим многочлен <Latex>{`$P(x)$`}</Latex> на&nbsp;<Latex>{`$(x - r)$`}</Latex> пока не&nbsp;получим квадратное уравнение. </p>
                            <h3 id="1a2">Дробные</h3>
                                <p>Дробными называются уравнения, содержащие неизвестное под знаком дроби.</p>
                                <p><Latex>{`$\\cfrac{f(x)}{g(x)} = 0 ~\\Rightarrow ~ g(x) \\neq 0, ~f(x) = 0$`}</Latex></p>
                        <h2 id="1b">Иррациональные</h2>
                            <p>Иррациональными называются уравнения, содержащие неизвестное под знаком корня.</p>
                        <p><Latex>{`$\\sqrt[n]{f(x)} = g(x) ~\\Rightarrow ~f(x) = g(x)^n, ~f(x) \\geq 0$`}</Latex></p>
                    <h2 id="2">Трансцендентные</h2>
                        <p>Трансцендентные уравнения&nbsp;&mdash; это уравнение, не являющееся алгебраическим.</p>
                        <h3 id="2a">Показательные</h3>
                            <p>Показательными называются уравнения, содержащие неизвестное в&nbsp;показателе степени.</p>
                            <p><Latex>{`$a^{f(x)} = a^{g(x)} ~\\Rightarrow ~f(x) = g(x)$`}</Latex></p>
                            <p><Latex>{`$a^{f(x)} = g(x) ~\\Rightarrow ~ f(x) \\ln a = \\ln g(x)$`}</Latex></p>
                        <h3 id="2b">Логарифмические</h3>
                            <p>Логарифмические уравнения содержат неизвестную переменную под знаком логарифма.</p>
                            <p><Latex>{`$\\log_a f(x) = \\log_a g(x) ~\\Rightarrow ~f(x) = g(x), ~f(x) > 0, ~g(x) > 0$`}</Latex></p>
                            <p><Latex>{`$\\log_a f(x) = g(x) ~\\Rightarrow ~f(x) = a^{g(x)}, ~f(x) > 0$`}</Latex></p>
                        <h3 id="2c">Тригонометрические</h3>
                            <p>Тригонометрические уравнения содержат тригонометрические функции, такие как <Latex>{`$\\sin, \\cos$`}</Latex> и их производные.</p>
                            <p><Latex>{`$\\sin x = c, ~x = (-1)^n \\arcsin (c) + \\pi n, ~n\\in \\mathbb{Z}$`}</Latex></p>
                            <p><Latex>{`$\\cos x = c, ~x = 2 \\pi n \\pm \\arccos(c), ~n \\in \\mathbb{Z}$`}</Latex></p>
                            <p><Latex>{`$\\tan x = c, ~x = \\arctan (c) + \\pi n, ~n \\in \\mathbb{Z}$`}</Latex></p>
                </div>
            </main>
            <Footer 
                prevPage="Числа" prevHref="https://qqqqbbpp.github.io/math/numbers" 
                nextPage="Функции" nextHref="https://qqqqbbpp.github.io/math/functions" 
            />
        </>
    )
}
