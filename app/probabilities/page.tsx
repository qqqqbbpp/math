"use client"
import Header from "@/app/components/Header";
import { useEffect } from "react";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { Mafs, Coordinates, Line, Plot, LaTeX } from "mafs"
import Footer from "@/app/components/Footer";

export default function Probabilities() {

useEffect(() => {
    const element = document.querySelector('main');
    element?.focus();
}, []);

    return (
        <>
            <Header/>
            <main tabIndex={1}>
                <div className="main">
                    <h1 id="1">Основные понятия</h1>
                        <p>Событие&nbsp;&mdash; это явление, которое происходит в результате осуществления какого-либо события.</p>
                    <h2 id="1a">Классификация</h2>
                        <ol>
                            <li><p>Случайное&nbsp;&mdash; может произойти или не произойти в результате испытания <Latex>{`$A,B,\\ldots,Z$`}</Latex></p></li>
                            <li><p>Достоверные&nbsp;&mdash; обязательно произойдет в результате испытания</p></li>
                            <li><p>Невозможные&nbsp;&mdash; никогда не произойдет в результате испытания</p></li>
                            <li><p>Совместные&nbsp;&mdash; появление одного не исключает появление другого</p></li>
                            <li><p>Несовместные&nbsp;&mdash; появление одного исключает появление другого</p></li>
                            <li><p>Противоположные&nbsp;&mdash; появление одного в результате опыта влечет появление другого <Latex>{`$\\overline A, \\overline  B, \\ldots, \\overline Z$`}</Latex></p></li>
                            <li><p>Благоприятствующие&nbsp;&mdash; появление одного влечет появление другого</p></li>
                        </ol>
                        <p>Полная группа событий&nbsp;&mdash; это группа событий, в которой в результате испытания происходит только одно из них и любые два из них.</p>
                        <p>Противоположные события образуют полную группу событий.</p>
                    <h2 id="1b">Операции над событиями</h2>
                        <ol>
                            <li><p>Сумма событий&nbsp;&mdash; события, состоящие в наступлении хотя бы одного из них в результате испытания.</p></li>
                            <li><p>Произведение событий&nbsp;&mdash; сложное событие, состоящее в наступлении всех этих событий.</p></li>
                        </ol>
                    <h2 id="1c">Вероятности</h2>
                        <p>Классическое определение&nbsp;&mdash; численная мера объективной возможности наступления событий. <Latex>{`$P(A)=\\frac{M_A}{N}$`}</Latex>, где <Latex>{`$M_A$`}</Latex>&nbsp;&mdash; общее число исходов испытания, благоприятствующих событию <Latex>{`$A.$`}</Latex></p>
                        <ol>
                            <li><p><Latex>{`$A \\in \\emptyset, ~P(A)=0$`}</Latex></p></li>
                            <li><p><Latex>{`$A \\in \\Omega, ~P(A)=1$`}</Latex></p></li>
                            <li><p><Latex>{`$P(A) \\in (0,1)$`}</Latex></p></li>
                        </ol>
                        <p>Статистическое определение предполагает, что число испытаний бесконечно. На практике такой подход не работает, как правило количество испытаний определено. При этом их количество должно быть не мало. В этом случае возникает статистическая устойчивость результатов <Latex>{`$P=\\frac{m}{n}.$`}</Latex></p>
                    <h2 id="2">Комбинаторика</h2>
                        <p>Комбинаторика&nbsp;&mdash; это раздел математики, изучающий методы решения задач, на подсчет числа различных комбинаций.</p>
                        <h3 id="2a">Формулы комбинаторики</h3>
                            <ol>
                                <li>
                                    <p>Перестановка&nbsp;&mdash; это способ последовательного расположения элементов с учетом порядка</p>
                                    <p><Latex>{`$P_n=n!=1\\times2\\times\\ldots\\times n$`}</Latex></p>
                                    <p>Сколько трехзначных чисел можно составить из чисел 1, 2, 3 без повторений?</p>
                                    <p><Latex>{`$***=3!=1\\times 2\\times 3=6$`}</Latex></p>
                                </li>
                                <li>
                                    <p>Размещение из n элементов по m элементов <Latex>{`$A_n^m$`}</Latex>&nbsp;&mdash; это упорядоченный набор из m различных элементов, взятых из некоторого множества с мощностью n, где <Latex>{`$m\\leq n.$`}</Latex> То есть некая перестановка некоторых m выбранных элементов n</p>
                                    <p><Latex>{`$A_n^m=\\frac{n!}{(n-m)!}$`}</Latex></p>
                                    <p>Сколько трехзначных чисел можно составить из чисел 1, 2, 3, 4, 5 без повторений?</p>
                                    <p><Latex>{`$A_5^3=\\frac{3!}{2!}=3$`}</Latex></p>
                                </li>
                                <li>
                                    <p>Сочетание из n элементов по m элементов <Latex>{`$C_n^m$`}</Latex>&nbsp;&mdash; это неупорядоченный набор из m различных элементов, взятых из некоторого множества с мощностью n, где <Latex>{`$m\\leq n.$`}</Latex> То есть набор для которого порядок не имеет значения</p>
                                    <p><Latex>{`$C_n^m=\\frac{n!}{m!\\times(n-m)!}$`}</Latex></p>
                                    <p><Latex>{`$C_n^1=n$`}</Latex></p>
                                    <p><Latex>{`$C_n^0=1$`}</Latex></p>
                                    <p><Latex>{`$C_n^n=1$`}</Latex></p>
                                    <p>Сколькими способами можно извлечь любые 3 карты из колоды в 36 карт?</p>
                                    <p><Latex>{`$n=36, ~m=3, ~C_{36}^3=\\frac{36!}{3!\\times33!}=7140$`}</Latex></p>
                                </li>
                            </ol>
                            <p>В ящике 12 писем из них 7 иногородних и 5 городских, какова вероятность, что из взятых на удачу 4 писем, окажется 1 городское?</p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>12 писем <Latex>{`$\\to$`}</Latex></td>
                                        <td>7 иногородних</td>
                                        <td>5 городских</td>
                                    </tr>
                                    <tr>
                                        <td><Latex>{`$\\downarrow$`}</Latex></td>
                                        <td><Latex>{`$\\downarrow$`}</Latex></td>
                                        <td><Latex>{`$\\downarrow$`}</Latex></td>
                                    </tr>
                                    <tr>
                                        <td>4 письма <Latex>{`$\\to$`}</Latex></td>
                                        <td>3 иногородних</td>
                                        <td>1 городское</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p><Latex>{`$N=C_{12}^4=\\frac{12!}{4!\\times 8!}=495, ~M_A=C_7^3 \\times C_5^1 = 175, ~P(A)=\\frac{M_A}{N}=\\frac{175}{495}=0.3535$`}</Latex></p>
                            <p>Какова вероятность, что из взятых на удачу 4 писем, окажется 4 городских?</p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>12 писем <Latex>{`$\\to$`}</Latex></td>
                                        <td>7 иногородних</td>
                                        <td>5 городских</td>
                                    </tr>
                                    <tr>
                                        <td><Latex>{`$\\downarrow$`}</Latex></td>
                                        <td><Latex>{`$\\downarrow$`}</Latex></td>
                                        <td><Latex>{`$\\downarrow$`}</Latex></td>
                                    </tr>
                                    <tr>
                                        <td>4 письма <Latex>{`$\\to$`}</Latex></td>
                                        <td>0 иногородних</td>
                                        <td>4 городских</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p><Latex>{`$M_B=C_7^0 \\times C_5^4=5, ~P(B)=\\frac{5}{495}=0.0101$`}</Latex></p>
                    <h2 id="3">Теоремы</h2>
                        <h3 id="3a">Теорема сложения</h3>
                            <p>Вероятность суммы двух несовместных событий равняется сумме их вероятностей.</p>
                            <p><Latex>{`$P(B) + P(A)= P(A+B)$`}</Latex></p>
                            <p>При определении вероятностей часто сложные события представляются в виде комбинаций более простых, при этом применяются операции сложения и умножения.</p>
                            <p><Latex>{`$A_i$`}</Latex>&nbsp;&mdash; попадание выстрелом <Latex>{`$i,$`}</Latex> где <Latex>{`$i= \\overline{1,3}.$`}</Latex> <Latex>{`$B$`}</Latex>&nbsp;&mdash; ровно одно попадание. <Latex>{`$B = A_1 \\times \\overline{A_2} \\times \\overline{A_3} + \\overline{A_1} \\times A_2 \\times \\overline{A_3} + \\overline{A_1} \\times \\overline{A_2} \\times A_3.$`}</Latex></p>
                            <p>Следствие: если события образуют полную группу событий, то их вероятность = 1.</p>
                            <p><Latex>{`$\\sum\\limits_{i=1}^n P(A_i)=1$`}</Latex></p>
                            <p>Так как <Latex>{`$A_1, A_2, \\ldots, A_n$`}</Latex> образуют полную группу событий, то появление хотя бы одного из них&nbsp;&mdash; достоверное событие.</p>
                            <p>Для совместных событий: <Latex>{`$P(A+B)=P(A)+P(B)-P(A\\times B).$`}</Latex></p>
                            <p>Событие <Latex>{`$A$`}</Latex> называется независимым от события <Latex>{`$B$`}</Latex> если вероятность события <Latex>{`$A$`}</Latex> не зависит от того наступило <Latex>{`$B$`}</Latex> или нет.</p>
                            <p>Зависимые: <Latex>{`$P(A)\\neq P_B(A).$`}</Latex></p>
                            <p>Независимые: <Latex>{`$P(A) = P_B(A).$`}</Latex></p>
                        <h3 id="3b">Теорема умножения</h3>
                            <p>Вероятность произведения двух событий равна произведению одного из них на условную вероятность другого, вычисленную при условии, что первое наступило.</p>
                            <p><Latex>{`$P(A \\times B) = P(A)\\times P_A(B)$`}</Latex></p>
                            <p>Следствие: если <Latex>{`$A$`}</Latex> и <Latex>{`$B$`}</Latex>&nbsp;&mdash; независимые, теорема имеет вид: <Latex>{`$P(A\\times B)=P(A)\\times P(B).$`}</Latex></p>
                            <p>Методами математической индукции теорему можно обособить для любого конечного числа событий:</p>
                            <p><Latex>{`$P \\prod\\limits_{i=1}^n (A_i)=\\prod\\limits_{i=1}^n (P(A_i))$`}</Latex></p>
                            <p>Пусть требуется определить вероятность некоторого события <Latex>{`$A$`}</Latex>, которое может произойти вместе с одним из событий <Latex>{`$H_1, H_2, \\ldots, H_n$`}</Latex>&nbsp;&mdash; называемыми гипотезами.</p>
                            <p>При этом событие <Latex>{`$H_i$`}</Latex> образует полную группу событий.</p>
                            <p><Latex>{`$P(A)=\\sum\\limits_{i=1}^n P(H_i)\\times P_{H_i}(A)$`}</Latex></p>
                            <p>В группе 20 лыжников, 6 велосипедистов, 4 бегуна. Вероятность сдать норматив лыжнику&nbsp;&mdash; 0.9, велосипедисту&nbsp;&mdash; 0.8, бегуну&nbsp;&mdash; 0.75. Найти вероятность что случайный спортсмен не выполнит норматив.</p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td>Сдал <Latex>{`$A$`}</Latex></td>
                                        <td>Лыжник&nbsp;&mdash; <Latex>{`$H_1$`}</Latex></td>
                                    </tr>
                                    <tr>
                                        <td>Спортсмен</td>
                                        <td></td>
                                        <td>Велосипедист&nbsp;&mdash; <Latex>{`$H_2$`}</Latex></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>Не сдал <Latex>{`$\\overline A$`}</Latex></td>
                                        <td>Бегун&nbsp;&mdash; <Latex>{`$H_3$`}</Latex></td>
                                    </tr>
                                </tbody>
                            </table>
                            <p><Latex>{`$P(H_1) = \\frac{20}{30}, ~P(H_2)=\\frac{6}{30}, ~P(H_3)=\\frac{4}{30}$`}</Latex></p>
                            <p><Latex>{`$P(H_1)\\times P_{H_1}(A) + P(H_2)\\times P_{H_2}(A) + P(H_3)\\times P_{H_3}(A)=\\frac{20}{30}\\times0.9+\\frac{6}{30}\\times0.8+\\frac{4}{30}\\times0.75=0.86$`}</Latex></p>
                        <h3 id="3c">Теорема гипотез</h3>
                            <p><Latex>{`$H_1, H_2, \\ldots, H_i$`}</Latex>&nbsp;&mdash; гипотезы, их вероятности до опыта известны <Latex>{`$P(H_1), P(H_2),\\ldots P(H_i).$`}</Latex></p>
                            <p>Произведён опыт, в результате которого событие <Latex>{`$A$`}</Latex> произошло. Как следует изменить вероятности гипотез в связи с появлением события <Latex>{`$A?$`}</Latex> Необходимо найти вероятность гипотезы при условии, что событие <Latex>{`$A$`}</Latex> наступило.</p>
                            <p><Latex>{`$P_A(H_i)$`}</Latex>&nbsp;&mdash; ?</p>
                            <p>Формула Байеса имеет следующий вид:</p>
                            <p><Latex>{`$P_A(H_i)=\\frac{P(H_i)P_{H_i}(A)}{P(A)}$`}</Latex></p>
                            <p>В больницу в среднем поступают 50% пациентов с заболеванием&nbsp;&mdash; <Latex>{`$x$`}</Latex>, 20% &nbsp;&mdash; <Latex>{`$y$`}</Latex>, 30%&nbsp;&mdash; <Latex>{`$z$`}</Latex>. Вероятность полного излечения болезни <Latex>{`$x$`}</Latex>&nbsp;&mdash; 0.7, <Latex>{`$y$`}</Latex>&nbsp;&mdash; 0.9, <Latex>{`$z$`}</Latex>&nbsp;&mdash; 0.8. Пациент, поступивший в больницу был выписан здоровым. Найти вероятность, что он страдал болезнью <Latex>{`$x.$`}</Latex></p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td>Выздоровел <Latex>{`$A$`}</Latex></td>
                                        <td>Болезнь <Latex>{`$x$`}</Latex>&nbsp;&mdash; <Latex>{`$H_1$`}</Latex></td>
                                    </tr>
                                    <tr>
                                        <td>Пациент</td>
                                        <td></td>
                                        <td>Болезнь <Latex>{`$y$`}</Latex>&nbsp;&mdash; <Latex>{`$H_2$`}</Latex></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>Не выздоровел <Latex>{`$\\overline A$`}</Latex></td>
                                        <td>Болезнь <Latex>{`$z$`}</Latex>&nbsp;&mdash; <Latex>{`$H_3$`}</Latex></td>
                                    </tr>
                                </tbody>
                            </table>
                            <p><Latex>{`$P(H_1)=0.5, P(H_2)=0.2, P(H_3)=0.3$`}</Latex></p>
                            <p><Latex>{`$P_{H_1}(A)=0.7, P_{H_2}(A)=0.9, P_{H_3}(A)=0.8$`}</Latex></p>
                            <p><Latex>{`$P_A(H_1)=\\frac{P(H_1)P_{H_1}(A)}{P(H_1)P_{H_1}(A) + P(H_2)P_{H_2}(A) + P(H_3)P_{H_3}(A)}=\\frac{0.5\\times0.7}{0.5\\times0.7+0.2\\times0.9+0.3\\times0.8}=0.45$`}</Latex></p>
                    <h2 id="4">Повторные независимые испытания</h2>
                        <p>При решении вероятностных задач часты ситуации в которых одно и то же событие повторяется многократно (стрелок с места несколько раз стреляет в мишень), вопрос нахождения вероятности в отдельном испытании рассмотрен ранее. Представляет интерес нахождение вероятности появления конкретного события определенного числа в n-испытаниях.</p>
                        <p><Latex>{`$P_{m,n}(A)$`}</Latex>&nbsp;&mdash; ?</p>
                        <p>Несколько событий называют независимыми относительно события <Latex>{`$A$`}</Latex> если вероятность события <Latex>{`$A$`}</Latex> в каждом из них не зависит от исхода других испытаний.</p>
                        <p><Latex>{`$P(A)=p=const, ~P(\\overline A)=1-p=q=const$`}</Latex></p>
                        <p><Latex>{`$P_{m,n}(A) - ? ~(m\\leq n)$`}</Latex></p>
                        <p>При этом важно, что не требуется определенная последовательность появления события <Latex>{`$A.$`}</Latex></p>
                        <p><Latex>{`$\\underbrace{A,A,A}_m, \\ldots, \\underbrace{\\overline A, \\overline A, \\overline A}_{n-m} = p^m \\times q^{n-m}$`}</Latex></p>
                        <h3 id="4a">Формула Бернулли</h3>
                            <p>Число различных комбинаций, в которых событий <Latex>{`$A$`}</Latex> наступает <Latex>{`$m$`}</Latex> раз из <Latex>{`$n$`}</Latex> возможных определяется формулой сочетания комбинаторики (формула Бернулли).</p>
                            <p><Latex>{`$P_{m,n}(A)=C_n^m\\times p^m \\times q^{n-m}$`}</Latex></p>
                            <p>30% изделий предприятия&nbsp;&mdash; высшего сорта, какова вероятность того, что из 6 изделий предприятия 4&nbsp;&mdash; высшего сорта?</p>
                            <p><Latex>{`$n=6, m=4$`}</Latex></p>
                            <p><Latex>{`$P(A)=0.3=p$`}</Latex></p>
                            <p><Latex>{`$P(\\overline A)=1-0.3=0.7=q$`}</Latex></p>
                            <p><Latex>{`$P_{4,6}=C_6^4\\times0.3^4\\times0.7^2=0.198$`}</Latex></p>
                        <h3 id="4b">Формула Пуассона</h3>
                            <p>Если вероятность наступления события <Latex>{`$A$`}</Latex> в каждом испытании постоянна, но близка к нулю, а число повторных независимых испытаний достаточно велико&nbsp;&mdash; применяется формула Пуассона.</p>
                            <p><Latex>{`$n \\to \\infty$`}</Latex></p>
                            <p><Latex>{`$P(A)=p\\to0$`}</Latex></p>
                            <p><Latex>{`$P_{m,n}(A)=\\frac{a^m e^{-a}}{m!}, ~a=n\\times p, ~e=2.72$`}</Latex></p>
                            <p>Вероятность появления на ферме ондатры альбиноса&nbsp;&mdash; 0.001. Найти вероятность того, что из 1000 выращенных животных <Latex>{`$<2$`}</Latex>&nbsp;&mdash; альбиносы.</p>
                            <p><Latex>{`$n=1000$`}</Latex></p>
                            <p><Latex>{`$P(A)=0.001$`}</Latex></p>
                            <p><Latex>{`$m<2$`}</Latex></p>
                            <p><Latex>{`$a=n\\times p=1$`}</Latex></p>
                            <p><Latex>{`$P_{m<2,~1000}(A)=P_{0,~1000}(A)+P_{1,~1000}(A)=0.3679+0.3679=0.7578$`}</Latex></p>
                        <h3 id="4c">Формула Лапласа</h3>
                            <p>Если вероятность наступления события <Latex>{`$A$`}</Latex> в каждом из <Latex>{`$n$`}</Latex> независимых испытаний&nbsp;&mdash; постоянно, событие не является маловероятным, а число испытаний велико используется формула Лапласа.</p>
                            <p><Latex>{`$P_{m,n}=\\frac{f(x)}{\\sqrt{npx}}$`}</Latex></p>
                            <p><Latex>{`$p=P(A), ~q=P(\\overline A), ~f(x)=\\frac{1}{\\sqrt{2\\pi}}\\times e, ~x=\\frac{m-np}{\\sqrt{npq}}$`}</Latex></p>
                            <p>При определенном технологическом процессе происходит 10 обрывов нити на 100 веретён в час, определить вероятность того, что в течение часа на 80 веретенах произойдет 7 надрывов нити.</p>
                            <p><Latex>{`$n=80, ~m=7$`}</Latex></p>
                            <p><Latex>{`$P(A)=\\frac{10}{100}=0.1=p$`}</Latex></p>
                            <p><Latex>{`$P(\\overline A)=1-0.1=0.9=q$`}</Latex></p>
                            <p><Latex>{`$x=0.3731, ~P_{7,80}=\\frac{0.3726}{2.68}=0.139$`}</Latex></p>
                    <h2 id="5">Случайные величины</h2>
                        <p>На практике приходится сталкиваться с величинами, которые в результате опыта могут принимать различные заранее неизвестные значения (число солнечных дней, количество положительных оценок в сессии, число пассажиров в маршрутке).</p>
                        <p>Случайной называется величина, которая в результате опыта может принять то или иное значение неизвестное заранее, но обязательно одно.</p>
                        <h3 id="5a">Классификация</h3>
                            <ol>
                                <li><p>Дискретные&nbsp;&mdash; принимают целые значения.</p></li>
                                <li><p>Непрерывные&nbsp;&mdash; принимают значения из некоторого конечного или бесконечного интервала.</p></li>
                            </ol>
                        <h3 id="5b">Закон распределения случайной величины</h3>
                            <p>Появление тех или иных значений случайной величины можно рассматривать как события, а им соответствуют различные вероятности.</p>
                            <p>Пусть дискретная величина <Latex>{`$X$`}</Latex> имеет значения: <Latex>{`$x_1,x_2,\\ldots,x_3.$`}</Latex></p>
                            <p>В результате опыта случайная величина принимает одно и только одно значение.</p>
                            <p><Latex>{`$
                                \\left.
                                    \\begin{aligned}
                                        X=x_1\\newline
                                        X=x_2\\newline
                                        X=x_3
                                    \\end{aligned}
                                \\right\\} \\Rightarrow \\sum\\limits_{i=1}^n P(X=x_i)=1
                            $`}</Latex></p>
                            <p>Определив все возможные значения случайной величины и правило нахождения соответствующих вероятностей, можно получить полное представление о случайной величине.</p>
                            <p>Всякое соотношение, устанавливающее связь между возможными значениями случайной величины и соответствующими вероятностями, называется законом распределения случайной величины.</p>
                            <p>Рассмотрим табличный способ задания закона распределения:</p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><Latex>{`$x_i$`}</Latex></td>
                                        <td><Latex>{`$x_1$`}</Latex></td>
                                        <td><Latex>{`$x_2$`}</Latex></td>
                                        <td><Latex>{`$\\ldots$`}</Latex></td>
                                        <td><Latex>{`$x_n$`}</Latex></td>
                                    </tr>
                                    <tr>
                                        <td><Latex>{`$P_i$`}</Latex></td>
                                        <td><Latex>{`$P_1$`}</Latex></td>
                                        <td><Latex>{`$P_2$`}</Latex></td>
                                        <td><Latex>{`$\\ldots$`}</Latex></td>
                                        <td><Latex>{`$P_n$`}</Latex></td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>Также ряд распределения случайной величины может быть представлен графически:</p>
                            <Mafs preserveAspectRatio={false} height={300} viewBox={{x:[0,6], y:[0,3]}}>
                                <Coordinates.Cartesian
                                    xAxis={{ labels: false }}
                                    yAxis={{ labels: false }}
                                />
                                <Line.Segment
                                    point1={[1, 1]}
                                    point2={[2, 3]}
                                />
                                <Line.Segment
                                    point1={[2, 3]}
                                    point2={[6, 2]}
                                />
                                <LaTeX at={[1, -0.25]} tex={String.raw`x_1`}/>
                                <LaTeX at={[2, -0.25]} tex={String.raw`x_2`}/>
                                <LaTeX at={[6, -0.25]} tex={String.raw`x_n`}/>
                                <LaTeX at={[0.25, 1]} tex={String.raw`P_1`}/>
                                <LaTeX at={[0.25, 2]} tex={String.raw`P_2`}/>
                                <LaTeX at={[0.25, 3]} tex={String.raw`P_n`}/>
                            </Mafs>
                        <h3 id="5c">Операции над случайными величинами</h3>
                                <p>Случайные величины <Latex>{`$X, Y$`}</Latex>&nbsp;&mdash; называются независимыми, если закон распределения одной не зависит от того, какие возможные значения принимает другая величина. Иначе они называются зависимыми.</p>
                                <p>Случайные величины <Latex>{`$X, Y$`}</Latex>&nbsp;&mdash; называются одинаково распределенными, если их законы распределения одинаковы.</p>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><Latex>{`$x_i, y_j$`}</Latex></td>
                                            <td><Latex>{`$x_1, y_1$`}</Latex></td>
                                            <td><Latex>{`$x_2, y_2$`}</Latex></td>
                                            <td><Latex>{`$\\ldots$`}</Latex></td>
                                            <td><Latex>{`$x_n, y_m$`}</Latex></td>
                                        </tr>
                                        <tr>
                                            <td><Latex>{`$P_{x_i},P_{y_j}$`}</Latex></td>
                                            <td><Latex>{`$P_{x_1},P_{y_1}$`}</Latex></td>
                                            <td><Latex>{`$P_{x_2},P_{y_2}$`}</Latex></td>
                                            <td><Latex>{`$\\ldots$`}</Latex></td>
                                            <td><Latex>{`$P_{x_n},P_{y_m}$`}</Latex></td>
                                        </tr>
                                </tbody>
                            </table>
                            <p><Latex>{`$\\sum\\limits_{i=1}^n P_{x_i}=1, ~n\\neq m$`}</Latex></p>
                            <p><Latex>{`$\\sum\\limits_{j=1}^n P_{y_j}=1, ~j= \\overline{1,m}$`}</Latex></p>
                            <ol>
                                <li>
                                    <p>Произведение случайной величины <Latex>{`$X$`}</Latex> на постоянный множитель <Latex>{`$C$`}</Latex>&nbsp;&mdash; это новая случайная величина <Latex>{`$Z$`}</Latex>, которая с теми же вероятностями что и <Latex>{`$X$`}</Latex> принимает значения равные произведению константы на постоянный множитель <Latex>{`$C$`}</Latex></p>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><Latex>{`$Cx_i$`}</Latex></td>
                                                <td><Latex>{`$Cx_1$`}</Latex></td>
                                                <td><Latex>{`$Cx_2$`}</Latex></td>
                                                <td><Latex>{`$\\ldots$`}</Latex></td>
                                                <td><Latex>{`$Cx_n$`}</Latex></td>
                                            </tr>
                                            <tr>
                                                <td><Latex>{`$P_{x_i}$`}</Latex></td>
                                                <td><Latex>{`$P_{x_1}$`}</Latex></td>
                                                <td><Latex>{`$P_{x_2}$`}</Latex></td>
                                                <td><Latex>{`$\\ldots$`}</Latex></td>
                                                <td><Latex>{`$P_{x_n}$`}</Latex></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </li>
                                <li>
                                    <p><Latex>{`$k$`}</Latex>-ая степень&nbsp;&mdash; это новая случайная величина <Latex>{`$W$`}</Latex>, которая с теми же вероятностями что и <Latex>{`$X$`}</Latex> принимает значения равные <Latex>{`$k$`}</Latex>-ой степени её значений</p>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><Latex>{`$x_i^k$`}</Latex></td>
                                                <td><Latex>{`$x_1^k$`}</Latex></td>
                                                <td><Latex>{`$x_2^k$`}</Latex></td>
                                                <td><Latex>{`$\\ldots$`}</Latex></td>
                                                <td><Latex>{`$x_n^k$`}</Latex></td>
                                            </tr>
                                            <tr>
                                                <td><Latex>{`$P_{x_i}$`}</Latex></td>
                                                <td><Latex>{`$P_{x_1}$`}</Latex></td>
                                                <td><Latex>{`$P_{x_2}$`}</Latex></td>
                                                <td><Latex>{`$\\ldots$`}</Latex></td>
                                                <td><Latex>{`$P_{x_n}$`}</Latex></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </li>
                                <li>
                                    <p>Сумма случайных величин <Latex>{`$X, Y$`}</Latex>&nbsp;&mdash; это новая случайная величина <Latex>{`$Q$`}</Latex>, которая принимает все значения вида: <Latex>{`$(x_i + y_j)(i=\\overline{1,n}, ~j=\\overline{1,m})$`}</Latex> с вероятностями <Latex>{`$P_{i,j}=P(X=x_i, ~Y=y_j)=P_{x_i}\\times P_{y_j}$`}</Latex></p>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><Latex>{`$x_i+y_j$`}</Latex></td>
                                                <td><Latex>{`$x_1+y_1$`}</Latex></td>
                                                <td><Latex>{`$x_2+y_2$`}</Latex></td>
                                                <td><Latex>{`$\\ldots$`}</Latex></td>
                                                <td><Latex>{`$x_n+y_n$`}</Latex></td>
                                            </tr>
                                            <tr>
                                                <td><Latex>{`$P_{i,j}$`}</Latex></td>
                                                <td><Latex>{`$P_{x_1}P_{y_1}$`}</Latex></td>
                                                <td><Latex>{`$P_{x_2}P_{y_2}$`}</Latex></td>
                                                <td><Latex>{`$\\ldots$`}</Latex></td>
                                                <td><Latex>{`$P_{x_n}P_{y_n}$`}</Latex></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </li>
                            </ol>
                            <p>Даны законы распределения двух случайных величин <Latex>{`$X, Y$`}</Latex> составить дискретную случайную величину <Latex>{`$Z = 3x - y^2.$`}</Latex></p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><Latex>{`$x_i$`}</Latex></td>
                                        <td><Latex>{`$-1$`}</Latex></td>
                                        <td><Latex>{`$0$`}</Latex></td>
                                        <td><Latex>{`$2$`}</Latex></td>
                                        <td><Latex>{`$3$`}</Latex></td>
                                    </tr>
                                    <tr>
                                        <td><Latex>{`$P_i$`}</Latex></td>
                                        <td><Latex>{`$0.1$`}</Latex></td>
                                        <td><Latex>{`$0.3$`}</Latex></td>
                                        <td><Latex>{`$0.4$`}</Latex></td>
                                        <td><Latex>{`$0.2$`}</Latex></td>
                                    </tr>
                                </tbody>
                            </table>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><Latex>{`$y_i$`}</Latex></td>
                                        <td><Latex>{`$1$`}</Latex></td>
                                        <td><Latex>{`$2$`}</Latex></td>
                                        <td><Latex>{`$4$`}</Latex></td>

                                    </tr>
                                    <tr>
                                        <td><Latex>{`$P_j$`}</Latex></td>
                                        <td><Latex>{`$0.4$`}</Latex></td>
                                        <td><Latex>{`$0.1$`}</Latex></td>
                                        <td><Latex>{`$0.5$`}</Latex></td>
                                    </tr>
                                </tbody>
                            </table>
                            <table>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td><Latex>{`$y^2$`}</Latex></td>
                                        <td><Latex>{`$1$`}</Latex></td>
                                        <td><Latex>{`$4$`}</Latex></td>
                                        <td><Latex>{`$16$`}</Latex></td>
                                    </tr>
                                    <tr>
                                        <td><Latex>{`$3x$`}</Latex></td>
                                        <td><Latex>{`$P_i\\backslash P_j$`}</Latex></td>
                                        <td><Latex>{`$0.4$`}</Latex></td>
                                        <td><Latex>{`$0.1$`}</Latex></td>
                                        <td><Latex>{`$0.5$`}</Latex></td>
                                    </tr>
                                    <tr>
                                        <td><Latex>{`$-3$`}</Latex></td>
                                        <td><Latex>{`$0.1$`}</Latex></td>
                                        <td><Latex>{`$-4/0.09$`}</Latex></td>
                                        <td><Latex>{`$-7/0.01$`}</Latex></td>
                                        <td><Latex>{`$-19/0.05$`}</Latex></td>
                                    </tr>
                                    <tr>
                                        <td><Latex>{`$0$`}</Latex></td>
                                        <td><Latex>{`$0.03$`}</Latex></td>
                                        <td><Latex>{`$-1/0.12$`}</Latex></td>
                                        <td><Latex>{`$-4/0.03$`}</Latex></td>
                                        <td><Latex>{`$-16/0.15$`}</Latex></td>
                                    </tr>
                                    <tr>
                                        <td><Latex>{`$6$`}</Latex></td>
                                        <td><Latex>{`$0.4$`}</Latex></td>
                                        <td><Latex>{`$5/0.16$`}</Latex></td>
                                        <td><Latex>{`$2/0.04$`}</Latex></td>
                                        <td><Latex>{`$-10/0.2$`}</Latex></td>
                                    </tr>
                                    <tr>
                                        <td><Latex>{`$9$`}</Latex></td>
                                        <td><Latex>{`$0.2$`}</Latex></td>
                                        <td><Latex>{`$8/0.08$`}</Latex></td>
                                        <td><Latex>{`$5/0.02$`}</Latex></td>
                                        <td><Latex>{`$-7/0.1$`}</Latex></td>
                                    </tr>
                                </tbody>
                            </table>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><Latex>{`$3x-y^2$`}</Latex></td>
                                        <td><Latex>{`$-19$`}</Latex></td>
                                        <td><Latex>{`$-16$`}</Latex></td>
                                        <td><Latex>{`$-10$`}</Latex></td>
                                        <td><Latex>{`$-7$`}</Latex></td>
                                        <td><Latex>{`$-4$`}</Latex></td>
                                        <td><Latex>{`$-1$`}</Latex></td>
                                        <td><Latex>{`$2$`}</Latex></td>
                                        <td><Latex>{`$5$`}</Latex></td>
                                        <td><Latex>{`$8$`}</Latex></td>
                                    </tr>
                                    <tr>
                                        <td><Latex>{`$P_{ij}$`}</Latex></td>
                                        <td><Latex>{`$0.05$`}</Latex></td>
                                        <td><Latex>{`$0.15$`}</Latex></td>
                                        <td><Latex>{`$0.2$`}</Latex></td>
                                        <td><Latex>{`$0.11$`}</Latex></td>
                                        <td><Latex>{`$0.07$`}</Latex></td>
                                        <td><Latex>{`$0.12$`}</Latex></td>
                                        <td><Latex>{`$0.04$`}</Latex></td>
                                        <td><Latex>{`$0.18$`}</Latex></td>
                                        <td><Latex>{`$0.08$`}</Latex></td>
                                    </tr>
                                </tbody>
                            </table>
                            <p><Latex>{`$\\sum\\limits_{i=1}^n \\sum\\limits_{j=1}^n P_{i,j} = 1$`}</Latex></p>
                        <h3 id="6">Интегральная функция распределения</h3>
                            <p>Для характеристики появления случайных величин целесообразно использовать вместо события <Latex>{`$P(X = x_i), ~P(X<x).$`}</Latex></p>
                            <p>Если число <Latex>{`$x$`}</Latex> будет меняться произвольно то и вероятности выполнения неравенства <Latex>{`$X<x$`}</Latex> тоже будет меняться, следовательно вероятность есть функция аргумента. Эту функцию будем обозначать <Latex>{`$F(x) = P(X<x).$`}</Latex></p>
                            <p>Геометрически это вероятность того, что случайная точка на числовой оси будет расположена левее заданной точки <Latex>{`$x.$`}</Latex> Данная формула при исследовании вероятностей позволяет использовать аппарат математического анализа.</p>
                            <h4 id="6a">Свойства</h4>
                                <ol>
                                    <li><p><Latex>{`$F(x) \\in [0;1], \\forall x$`}</Latex></p></li>
                                    <li><p>Вероятность того, что случайная величина <Latex>{`$x$`}</Latex> принимает какое-либо значение, удовлетворяющей значению <Latex>{`$x$`}</Latex> равна приращению данной Функции на данном интервале</p></li>
                                    <li><p>Если <Latex>{`$x_2 > x_1,$`}</Latex> то <Latex>{`$F(x_2) \\geq F(x_1)$`}</Latex></p></li>
                                    <li><p>Вероятность того, что непрерывная случайная величина <Latex>{`$x$`}</Latex> принимает определенное число = 0</p></li>
                                    <li><p>Если возможное значение случайной величины принадлежит <Latex>{`$(\\alpha;\\beta),$`}</Latex> то <Latex>{`$F(x)=0, ~x\\leq\\alpha, ~F(x)=1, ~x\\leq\\beta \\Rightarrow \\lim\\limits_{x\\to-\\infty}F(x)=0, \\lim\\limits_{x\\to+\\infty}F(x)=1$`}</Latex></p></li>
                                </ol>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><Latex>{`$x_i$`}</Latex></td>
                                            <td><Latex>{`$-2$`}</Latex></td>
                                            <td><Latex>{`$0$`}</Latex></td>
                                            <td><Latex>{`$1$`}</Latex></td>
                                            <td><Latex>{`$3$`}</Latex></td>
                                        </tr>
                                        <tr>
                                            <td><Latex>{`$P_i$`}</Latex></td>
                                            <td><Latex>{`$0.1$`}</Latex></td>
                                            <td><Latex>{`$0.6$`}</Latex></td>
                                            <td><Latex>{`$0.3$`}</Latex></td>
                                            <td><Latex>{`$0.1$`}</Latex></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <ol>
                                    <li><p><Latex>{`$x\\in(\\infty;-2], ~F(x)=P(x<-2)=0$`}</Latex></p></li>
                                    <li><p><Latex>{`$x\\in(-2;0], ~F(x)=P(x<0)=P(x=-2)=0.1$`}</Latex></p></li>
                                    <li><p><Latex>{`$x\\in(0,1], ~F(x)=P(x<1)=P(x=-2)+P(x-0)=0.6$`}</Latex></p></li>
                                    <li><p><Latex>{`$x\\in(1,3], ~F(x)=P(x<3)=P(x=-2)+P(x-0)+P(x-1)=0.9$`}</Latex></p></li>
                                    <li><p><Latex>{`$x\\in(3;\\infty), ~F(x)=P(x<4)=1$`}</Latex></p></li>
                                </ol>
                                <p><Latex>{`$
                                F(x)=\\begin{cases} 
                                    0; &x\\in-2 \\newline
                                    0.1; &-2\\leq x \\leq 0\\newline
                                    0.6; &0\\leq x \\leq 0\\newline
                                    0.9; &1\\leq x \\leq 3\\newline
                                    1; &x>3
                                \\end{cases}
                                $`}</Latex></p>
                                <p>Графически является разрывной линией, не ограниченной слева, совершающей скачки в точках возможных значений случайной величины.</p>
                                <Mafs preserveAspectRatio={false} height={300} viewBox={{x:[-2,4], y:[0,1]}}>
                                    <Coordinates.Cartesian/>
                                    <Plot.OfX
                                        y={(x) => {
                                            if (x < -2) return 0;
                                            else if (x >= -2 && x < 0) return 0.1;
                                            else if (x >= 0 && x < 1) return 0.6;
                                            else if (x >= 1 && x < 3) return 0.9;
                                            else return 1;
                                        }}
                                    />
                                </Mafs>
                                <p><Latex>{`$
                                F(x)=\\begin{cases} 
                                    0; &x<0 \\newline
                                    \\frac{x^2}{36}; &0\\leq x \\leq 6\\newline
                                    1; &x>6
                                \\end{cases}
                                $`}</Latex></p>
                                <Mafs preserveAspectRatio={false} height={300} viewBox={{x:[0,6], y:[0,1]}}>
                                    <Coordinates.Cartesian/>
                                    <Plot.OfX 
                                        y={(x) => {
                                            if (x < 0) return 0;
                                            else if (x >= 0 && x <= 6) return x ** 2 / 36;
                                            else return 1;
                                        }}
                                    />
                                </Mafs>
                        <h3 id="7">Дифференциальная функция распределения</h3>
                            <p>Дифференциальная функция даёт полную характеристику как дискретной так и непрерывной случайной величины. В случае непрерывной случайной величины&nbsp;&mdash; это не единственный способ задания закона.</p>					
                            <p>Согласно свойству интегральной функции имеем:</p>
                            <p><Latex>{`$f(x)=F'(x) = \\lim\\limits_{\\Delta x\\to 0} \\frac{D(x+ \\Delta x)-F(\\Delta x)}{\\Delta x} = \\lim\\limits_{\\Delta x\\to 0} \\frac{P(x<X<x+\\Delta x)}{\\Delta x }\\Rightarrow f(x)$`}</Latex>&nbsp;&mdash; плотность распределения вероятностей.</p>
                            <h4 id="7a">Свойства</h4>
                                <ol>
                                    <li><p><Latex>{`$f(x) \\geq 0$`}</Latex></p></li>
                                    <li>
                                        <p><Latex>{`$P(\\alpha < X < \\beta) = \\int\\limits_\\alpha^\\beta f(x)dx$`}</Latex></p>
                                        <p>Геометрически интерпретация этой формулы вытекает из геометрического смысла определенного интеграла.</p>
                                        <p>Вероятность попадания случайной величины <Latex>{`$(\\alpha; \\beta)$`}</Latex>&nbsp;&mdash; численно равна площади формулы, ограниченной кривой распределения, осью <Latex>{`$ox$`}</Latex> и прямыми <Latex>{`$x=\\alpha, ~x=\\beta.$`}</Latex></p>
                                        <p><Latex>{`$P(2<X<4)=\\int\\limits_2^4 f(x)dx = \\int\\limits_2^4 \\frac{x}{18}dx = \\frac{1}{18} \\int\\limits_2^4 xdx = \\frac{x^2}{36} |_2^4 = \\frac{16}{36} - \\frac{4}{36} = \\frac{1}{3}$`}</Latex></p>
                                        <Mafs preserveAspectRatio={false} height={300} viewBox={{x:[0,6], y:[0,1]}}>
                                            <Coordinates.Cartesian/>
                                            <Plot.OfX y={(x) => (1 / 6) * x}/>
                                            <Plot.Inequality
                                                y={{'<=': (x) => {return x >= 2 && x <= 4 ? (1 / 6) * x : 0},
                                                '>=': () => 0}}
                                                minSamplingDepth={13}
                                            />
                                        </Mafs>
                                    </li>
                                    <li><p><Latex>{`$\\int\\limits_{-\\infty}^\\infty f(x)dx=1$`}</Latex></p></li>
                                </ol>
                                <p>Выражение интегральной функции через дифференциальную <Latex>{`$f(x), F(x)$`}</Latex>&nbsp;&mdash; взаимно определены, то есть знаю одну можно выразить другую.</p>
                                <p><Latex>{`$F(x)=P(X<x)=P(-\\infty < X < x)=\\int\\limits_{-\\infty}^x f(x)dx$`}</Latex></p>
                        <h3 id="8">Числовые характеристики случайной величины</h3>
                            <p>Для решения многих практических задач совсем не обязательно знать все возможные значения случайной величины и соответствующие вероятности. Достаточно указать отдельные числовые характеристики, отражающие важные черты закона распределения.</p>
                        <h3 id="8a">Математическое ожидание <Latex>{`$M(X)$`}</Latex></h3>
                            <p>Возможные задания случайной величины могут быть сосредоточены вокруг некоторого центра&nbsp;&mdash; среднего значения.</p>
                            <p>Математическое ожидание&nbsp;&mdash; это среднее значение случайной величины, взвешенное по вероятности.</p>
                            <h4 id="8a1">Дискретное математическое ожидание</h4>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><Latex>{`$x_i$`}</Latex></td>
                                            <td><Latex>{`$x_1$`}</Latex></td>
                                            <td><Latex>{`$x_2$`}</Latex></td>
                                            <td><Latex>{`$\\ldots$`}</Latex></td>
                                            <td><Latex>{`$x_n$`}</Latex></td>
                                        </tr>
                                        <tr>
                                            <td><Latex>{`$P_i$`}</Latex></td>
                                            <td><Latex>{`$P_1$`}</Latex></td>
                                            <td><Latex>{`$P_2$`}</Latex></td>
                                            <td><Latex>{`$\\ldots$`}</Latex></td>
                                            <td><Latex>{`$P_n$`}</Latex></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p><Latex>{`$\\sum\\limits_{i=1}^n P_i = 1$`}</Latex></p>
                                <p><Latex>{`$M(X)=\\sum\\limits_{i=1}^n x_i P_i = 1$`}</Latex></p>
                            <h4 id="8a2">Непрерывное математическое ожидание</h4>
                                <p><Latex>{`$M(X)=\\int\\limits_{-\\infty}^{\\infty} xf(x)dx$`}</Latex></p>
                                <p><Latex>{`$M(X)=\\int\\limits_0^6 x\\times\\frac{x}{18}\\times dx = \\frac{1}{18}\\times\\frac{x^3}{3}|_0^6 = \\frac{1}{54}\\times(6^3 - 0)=\\frac{36\\times 6}{54}=4$`}</Latex></p>
                            <h4 id="8a3">Свойства</h4>
                                <ol>
                                    <li><p><Latex>{`$M(X\\pm Y)=M(X)\\pm M(Y)$`}</Latex></p></li>
                                    <li><p><Latex>{`$M(X \\times Y)= M(X) \\times M(Y)$`}</Latex></p></li>
                                    <li><p><Latex>{`$M(const)=const$`}</Latex></p></li>
                                    <li><p><Latex>{`$M(const ~X)=const ~M(X)$`}</Latex></p></li>
                                    <li><p><Latex>{`$M(X-M(X))=0$`}</Latex>, то есть математическое ожидание отклонения случайной величины <Latex>{`$x$`}</Latex> от его математического ожидания = 0.</p></li>
                                </ol>
                        <h3 id="8b">Дисперсия <Latex>{`$D(X)$`}</Latex></h3>
                            <p>Целесообразно находить меру рассеивания значений случайной величины вокруг её математического ожидания.</p>
                            <p><Latex>{`$D(X)=M(X-M(X))^2$`}</Latex>, то есть математическое ожидание квадрата отклонения случайной величины от её математического ожидания.</p>
                            <h4 id="8b1">Дискретная дисперсия</h4>
                                <p><Latex>{`$D(X)=\\sum\\limits_{i=1}^n (x_i - M(X))^2 P_i$`}</Latex></p>
                            <h4 id="8b2">Непрерывная дисперсия</h4>
                                <p><Latex>{`$D(X)=\\int\\limits_{-\\infty}^{\\infty}(x- M(X))^2 f(x)dx$`}</Latex></p>
                            <h4 id="8b3">Свойства</h4>
                                <ol>
                                    <li><p><Latex>{`$D(X\\pm Y)=D(X)+D(Y)$`}</Latex></p></li>
                                    <li><p><Latex>{`$D(const)=0$`}</Latex></p></li>
                                    <li><p><Latex>{`$D(const ~X)=const^2 ~D(X)$`}</Latex></p></li>
                                    <li><p><Latex>{`$D(X)=M(X^2)-M^2(X)$`}</Latex></p></li>
                                </ol>
                        <h3 id="8c">Среднеквадратическое отклонение <Latex>{`$\\sigma(X)$`}</Latex></h3>
                            <p><Latex>{`$\\sqrt{D(X)}=\\sigma(X)$`}</Latex> показывает вариацию значения случайной величины вокруг среднего.</p>
                    <h2 id="9">Конкретные законы распределения</h2>
                        <p>Конкретным называется закон дифференциальная функция, которого исследована и найдены формулы для вычисления числовых характеристик.</p>
                        <h3 id="9a">Равномерный закон распределения</h3>
                            <p><Latex>{`$X \\sim R \\in [a, b]$`}</Latex></p>
                            <p><Latex>{`$
                            f(x)=\\begin{cases}
                                0; &x<a \\newline
                                \\frac{1}{b-a}; &a \\leq x \\leq b \\newline
                                0; &x>b
                            \\end{cases}
                            $`}</Latex></p>
                            <Mafs preserveAspectRatio={false} height={300} viewBox={{x:[0,5], y:[0,3]}}>
                                <Coordinates.Cartesian
                                    xAxis={{ labels: false }}
                                    yAxis={{ labels: false }}
                                />
                                <Plot.Inequality
                                    y={{'<=': (x) => {return x >= 2 && x <= 3 ? 3 : 0},
                                    '>=': () => 0}}
                                />
                                <LaTeX at={[2, -0.25]} tex={String.raw`\alpha`}/>
                                <LaTeX at={[3, -0.25]} tex={String.raw`\beta`}/>
                                <LaTeX at={[1, -0.25]} tex={String.raw`a`}/>
                                <LaTeX at={[4, -0.25]} tex={String.raw`b`}/>
                                <LaTeX at={[-0.25, 3]} tex={String.raw`\frac{1}{b-a}`}/>
                                <Line.Segment style="dashed"
                                    point1={[1, 0]}
                                    point2={[1, 3]}
                                />
                                <Line.Segment style="dashed"
                                    point1={[4, 0]}
                                    point2={[4, 3]}
                                />
                                <Line.Segment style="dashed"
                                    point1={[0, 3]}
                                    point2={[4, 3]}
                                />
                            </Mafs>
                            <p><Latex>{`$
                            F(x)=\\begin{cases}
                                0; &x<a \\newline
                                \\frac{x-a}{b-a}; &a \\leq x \\leq b \\newline
                                1; &x>b
                            \\end{cases}
                            $`}</Latex></p>
                            <Mafs preserveAspectRatio={false} height={300} viewBox={{x:[0,6], y:[0,1]}}>
                                <Coordinates.Cartesian
                                    xAxis={{ labels: false }}
                                    yAxis={{ labels: false }}
                                />
                                <Plot.OfX
                                    y={(x) => {
                                        if (x < 1) return 0;
                                        else if (x >= 1 && x <= 6) return (x - 1) / (6 - 1);
                                        else return 1;
                                    }}
                                />
                                <LaTeX at={[1, -0.25]} tex={String.raw`a`}/>
                                <LaTeX at={[6, -0.25]} tex={String.raw`b`}/>
                                <LaTeX at={[-0.25, 1]} tex={String.raw`1`}/>
                                <Line.Segment style="dashed"
                                    point1={[6, 1]}
                                    point2={[0, 1]}
                                />
                                <Line.Segment style="dashed"
                                    point1={[6, 1]}
                                    point2={[6, 0]}
                                />
                            </Mafs>
                            <p><Latex>{`$M(X)=\\frac{b+a}{2}$`}</Latex></p>
                            <p><Latex>{`$D(X)=\\frac{(b-a)^2}{12}$`}</Latex></p>
                            <p><Latex>{`$\\sigma(X) = \\frac{b-a}{2\\sqrt{3}}$`}</Latex></p>
                        <h3 id="9b">Показательное распределение</h3>
                            <p>Непрерывная случайная величина <Latex>{`$X$`}</Latex> имеет показательное распределение, если её плотность распределения такова:</p>
                            <p><Latex>{`$
                            f(x)=\\begin{cases}
                                0; &x<0 \\newline
                                \\lambda e^{-\\lambda x}; &x \\geq 0
                            \\end{cases}
                            $`}</Latex></p>
                            <Mafs preserveAspectRatio={false} height={300} viewBox={{x:[0,6], y:[0,1]}}>
                                <Coordinates.Cartesian/>
                                <Plot.OfX
                                    y={(x) => {
                                        if (x < 0) return 0;
                                        else return 1*Math.exp(-1*x);
                                    }}
                                />
                            </Mafs>
                            <p>Интегральная функция распределения имеет вид:</p>
                            <p><Latex>{`$
                            F(x)=\\begin{cases}
                                0; &x<0 \\newline
                                1-e^{-\\lambda x}; &x \\geq 0
                            \\end{cases}
                            $`}</Latex></p>
                            <Mafs preserveAspectRatio={false} height={300} viewBox={{x:[0,6], y:[0,1]}}>
                                <Coordinates.Cartesian/>
                                <Plot.OfX
                                    y={(x) => {
                                        if (x < 0) return 0;
                                        else return 1-Math.exp(-1*x);
                                    }}
                                />
                            </Mafs>
                            <p><Latex>{`$M(X)=\\sigma(X) = \\frac{1}{\\lambda}$`}</Latex></p>
                            <p><Latex>{`$D(X)=\\frac{1}{\\lambda^2}$`}</Latex></p>
                            <p>Вероятность попадания случайной величины в интервал <Latex>{`$(\\alpha; \\beta)$`}</Latex> рассчитывается по формуле <Latex>{`$P(\\alpha < X < \\beta) = e^{-\\lambda \\alpha} - e^{-\\lambda \\beta}.$`}</Latex> (значения функции <Latex>{`$e^{-x}$`}</Latex> приведены в приложении №7).</p>
                        <h3 id="9c">Нормальное распределение</h3>
                            <p>Распределение наиболее часто встречается, является предельным законом к которому стремятся другие законы распределения при часто встречающихся аналогичных условиях.</p>
                            <p><Latex>{`$X \\sim N (a, \\sigma)$`}</Latex></p>
                            <p><Latex>{`$f(x)=\\frac{1}{\\sigma \\sqrt{2 \\pi}} ~ e^{-\\frac{(x-a)^2}{2 \\sigma^2}}$`}</Latex></p>
                            <p>Где <Latex>{`$\\sigma, a$`}</Latex>&nbsp;&mdash; параметры называемые параметрами распределения</p>
                            <Mafs preserveAspectRatio={false} height={300} viewBox={{x:[-3,3], y:[0,1]}}>
                                <Coordinates.Cartesian/>
                                <Plot.OfX y={(x) => (1 / (1 * Math.sqrt(2 * Math.PI))) * Math.exp(-((x - 0) ** 2) / (2 * 1 ** 2))}/>
                            </Mafs>
                            <h4 id="9c1">Свойства</h4>
                            <ol>
                                <li><p><Latex>{`$X \\in (-\\infty ; \\infty)$`}</Latex></p></li>
                                <li><p><Latex>{`$f(x)>0$`}</Latex> т.к. <Latex>{`$\\sigma > 0$`}</Latex></p></li>
                                <li><p><Latex>{`$\\lim\\limits_{X\\to \\infty} f(x) = 0, ox$`}</Latex>&nbsp;&mdash; горизонтальная асимптота</p></li>
                                <li><p><Latex>{`$max (X=a; ~f(x)=\\frac{1}{\\sigma \\sqrt{2 \\pi}})$`}</Latex></p></li>
                                <li><p><Latex>{`$(X=a)$`}</Latex>&nbsp;&mdash; ось симметрии</p></li>
                                <li><p><Latex>{`$(X=a\\pm \\sigma)$`}</Latex>&nbsp;&mdash; точки перегиба</p></li>	
                            </ol>
                            <p><Latex>{`$F(x)=\\frac{1}{\\sigma \\sqrt{2\\pi}} \\int\\limits_{-\\infty}^\\infty e^{-\\frac{(x-a)^2}{2 \\sigma^2}}$`}</Latex></p>
                            <p><Latex>{`$M(X)=a$`}</Latex></p>
                            <p><Latex>{`$D(X)=\\sigma^2$`}</Latex></p>
                            <p><Latex>{`$\\sigma(X)=\\sigma$`}</Latex></p>
                            <p>На практике использование формул <Latex>{`$f(x), F(x)$`}</Latex>&nbsp;&mdash; затруднительно, поэтому для решения практических задач полагают <Latex>{`$a=0, ~\\sigma = 1$`}</Latex></p>
                            <p><Latex>{`$X \\sim N(a = 0, ~\\sigma=1)$`}</Latex></p>
                            <p><Latex>{`$f(x)=\\frac{1}{\\sqrt{2 \\pi}} ~ e^{-\\frac{x^2}{2}}$`}</Latex></p>
                        <h3 id="9d">Функция Лапласа</h3>
                            <p><Latex>{`$\\Phi(x)=\\frac{1}{\\sqrt{2 \\pi}} \\int\\limits_{-\\infty}^x ~e^{-\\frac{x^2}{2}} dx$`}</Latex></p>
                            <h4 id="9d1">Свойства</h4>
                                    <ol>
                                        <li><p><Latex>{`$\\Phi(0)=0$`}</Latex></p></li>
                                        <li><p><Latex>{`$\\Phi(\\infty)=\\frac{1}{2}~(x>4)$`}</Latex></p></li>
                                        <li><p><Latex>{`$\\Phi(-x)=-\\Phi(x)$`}</Latex></p></li>
                                    </ol>
                            <p><Latex>{`$P(\\alpha < X < \\beta) = \\Phi(\\frac{\\beta - a}{\\sigma}) - \\Phi(\\frac{\\alpha - a}{\\sigma})$`}</Latex></p>
                            <p><Latex>{`$P(|X-a|\\leq \\xi)=2\\Phi (\\frac{\\xi}{\\sigma})$`}</Latex></p>
                            <p><Latex>{`$X \\sim N(a=4.8; ~\\sigma=0.9)$`}</Latex></p>
                            <p><Latex>{`$P(6.7<X<7.5)=\\Phi(\\frac{7.5-4.8}{0.9})-\\Phi(\\frac{5.7-4.8}{0.9})=\\Phi(3)-\\Phi(1)=0.49863 - 0.3413 = 0.15735$`}</Latex></p>
                            <p><Latex>{`$P(a-\\xi < X < a+\\xi)=0.9545=2\\Phi(\\frac{\\xi}{\\sigma}), ~\\Phi(\\frac{\\xi}{\\sigma})=0.47725, ~\\frac{\\xi}{\\sigma}=2, ~\\xi=2\\times0.9 = 1.8$`}</Latex></p>
                    <h2 id="10">Предельные теоремы теории вероятности</h2>
                        <p>Результаты отдельных наблюдений при относительно равенстве условий их проведения всё же отличаются друг от друга, хотя средний результат обнаруживает значительную устойчивость. Условия при которых проявляется такая закономерность рассматриваются в предельных теоремах.</p>
                        <h3 id="10a">Закон больших чисел</h3>
                            <p>Среднее значение конечной выборки из фиксированного распределения близко к математическому ожиданию этого распределения.</p>
                            <h4 id="10a1">Неравенство Маркова</h4>
                                <p>Если <Latex>{`$X$`}</Latex> принимает только не отрицательные значения и имеет конечное математическое ожидание, то имеет место неравенство:</p>
                                <p><Latex>{`$P(X\\leq\\xi)> 1 - \\frac{M(X)}{\\xi}$`}</Latex></p>
                                <p><Latex>{`$P(X>\\xi)<\\frac{M(X)}{\\xi}$`}</Latex></p>
                            <h4 id="10a2">Неравенство Чебышева</h4>
                                <p><Latex>{`$P(|X-M(X)|\\leq\\xi)>1 - \\frac{D(X)}{\\xi^2}$`}</Latex></p>
                            <h4 id="10a3">Теорема Чебышева</h4>
                                <p>Если <Latex>{`$X_1, X_2, \\ldots, X_n$`}</Latex>&nbsp;&mdash; независимые случайные величины, имеющие определенные математические ожидания <Latex>{`$M(X_i)=a_i, ~i=\\overline{1, n}$`}</Latex> и ограниченные дисперсии <Latex>{`$D(X_i) \\geq const$`}</Latex> то при <Latex>{`$n\\to \\infty$`}</Latex>, среднее значение <Latex>{`$P \\to 1.$`}</Latex></p>
                                <p><Latex>{`$\\lim\\limits_{n\\to\\infty}(P(|\\overline X - \\overline{M(X)}|)\\leq \\xi)=1$`}</Latex></p>
                            <h4 id="10a4">Теорема Бернулли</h4>
                                <p><Latex>{`$\\lim\\limits_{n\\to\\infty}P(|\\frac{m}{n}-p|\\leq\\xi)=1$`}</Latex></p>
                            <h4 id="10a5">Теорема Пуассона</h4>
                                <p><Latex>{`$P_n(k)=\\frac{\\lambda^k}{k!}~e^{-\\lambda}$`}</Latex></p>
                        <h3 id="10b">Центральная предельная теорема</h3>
                            <p>Если <Latex>{`$M(X), ~D(X)$`}</Latex>&nbsp;&mdash; конечные и ни одна из случайных величин по своим значениям резко не отличается от остальных, то имеет смысл теорема:</p>
                            <p><Latex>{`$\\sum X_i (X=\\overline{1,n} \\sim N), ~n\\to \\infty$`}</Latex></p>
                            <p>Следствие: <Latex>{`$P(|\\overline X - a|\\leq\\xi)=2\\Phi(\\frac{\\xi\\sqrt{2n}}{\\sigma})$`}</Latex></p>
                </div>	
            </main>
            <Footer 
                prevPage="Функции" prevHref="https://qqqqbbpp.github.io/math/functions" 
                nextPage="Статистика" nextHref="https://qqqqbbpp.github.io/math/statistics" 
            />
        </>
    )
}
