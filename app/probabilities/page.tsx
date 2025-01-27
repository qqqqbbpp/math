"use client"
import Header from "@/app/components/Header";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { Mafs, Coordinates, Line, Plot, LaTeX } from "mafs"
import Footer from "@/app/components/Footer";

export default function Probabilities() {
    return (
        <>
            <Header/>
            <main>
                <div className="main">
                    <h1 id="1">Основные понятия</h1>
                        <p>Событие&nbsp;&mdash; это явление, которое происходит в результате осуществления какого-либо события.</p>
                        <h2 id="1a">Классификация</h2>
                            <ol>
                                <li><p>Случайное&nbsp;&mdash; может произойти или не произойти в результате испытания <Latex>{`$A,B,\\ldots,Z.$`}</Latex></p></li>
                                <li><p>Достоверное&nbsp;&mdash; обязательно произойдет в результате испытания.</p></li>
                                <li><p>Невозможное&nbsp;&mdash; никогда не произойдет в результате испытания.</p></li>
                                <li><p>Совместное&nbsp;&mdash; появление одного не исключает появление другого.</p></li>
                                <li><p>Несовместное&nbsp;&mdash; появление одного исключает появление другого.</p></li>
                                <li><p>Противоположное&nbsp;&mdash; появление одного в результате опыта влечет появление другого <Latex>{`$\\overline A, \\overline  B, \\ldots, \\overline Z.$`}</Latex></p></li>
                                <li><p>Благоприятствующее&nbsp;&mdash; появление одного влечет появление другого.</p></li>
                            </ol>
                            <p>Полная группа событий&nbsp;&mdash; это группа событий, в которой в результате испытания происходит только одно из них и любые два из них несовместны.</p>
                            <p>Противоположные события образуют полную группу событий.</p>
                        <h2 id="1b">Операции над событиями</h2>
                            <p>Сумма событий&nbsp;&mdash; события, состоящие в наступлении хотя бы одного из них в результате испытания.</p>
                            <p>Произведение событий&nbsp;&mdash; сложное событие, состоящее в наступлении всех этих событий.</p>
                        <h2 id="1c">Вероятности</h2>
                            <p>Классическое определение&nbsp;&mdash; численная мера объективной возможности наступления событий. <Latex>{`$P(A)=\\frac{M_A}{N}$`}</Latex>, где <Latex>{`$M_A$`}</Latex>&nbsp;&mdash; общее число исходов испытания, благоприятствующих событию <Latex>{`$A.$`}</Latex></p>
                            <Latex>{`$$A \\in \\emptyset, ~P(A)=0$$`}</Latex>
                            <Latex>{`$$A \\in \\Omega, ~P(A)=1$$`}</Latex>
                            <Latex>{`$$P(A) \\in (0,1)$$`}</Latex>
                            <p>Статистическое определение предполагает, что число испытаний бесконечно. На практике такой подход не работает, как правило количество испытаний определено. При этом их количество должно быть не мало. В этом случае возникает статистическая устойчивость результатов <Latex>{`$P=\\frac{m}{n}.$`}</Latex></p>
                    <h2 id="2">Комбинаторика</h2>
                        <p>Комбинаторика&nbsp;&mdash; это раздел математики, изучающий методы решения задач, на подсчет числа различных комбинаций.</p>
                        <h3 id="2a">Перестановки</h3>
                            <p>Перестановка&nbsp;&mdash; это способ последовательного расположения элементов с учетом порядка.</p>
                            <Latex>{`$$P_n=n!=1\\cdot2\\cdot\\ldots\\cdot n$$`}</Latex>
                            <p>Сколько трехзначных чисел можно составить из чисел 1, 2, 3 без повторений?</p>
                            <Latex>{`$$***=3!=1\\cdot 2\\cdot 3=6$$`}</Latex>
                        <h3 id="2b">Размещения</h3>
                            <p>Размещение из n элементов по m элементов <Latex>{`$A_n^m$`}</Latex>&nbsp;&mdash; это упорядоченный набор из m различных элементов, взятых из некоторого множества с мощностью n, где <Latex>{`$m\\leq n.$`}</Latex> То есть некая перестановка некоторых m выбранных элементов n.</p>
                            <Latex>{`$$A_n^m=\\frac{n!}{(n-m)!}$$`}</Latex>
                            <p>Сколько трехзначных чисел можно составить из чисел 1, 2, 3, 4, 5 без повторений?</p>
                            <Latex>{`$$A_5^3=\\frac{3!}{2!}=3$$`}</Latex>
                        <h3 id="2c">Сочетания</h3>
                            <p>Сочетание из n элементов по m элементов <Latex>{`$C_n^m$`}</Latex>&nbsp;&mdash; это неупорядоченный набор из m различных элементов, взятых из некоторого множества с мощностью n, где <Latex>{`$m\\leq n.$`}</Latex> То есть набор для которого порядок не имеет значения.</p>
                            <Latex>{`$$C_n^m=\\frac{n!}{m!\\cdot(n-m)!}$$`}</Latex>
                            <p>Сколькими способами можно извлечь любые 3 карты из колоды в 36 карт?</p>
                            <Latex>{`$$n=36, ~m=3, ~C_{36}^3=\\frac{36!}{3!\\cdot33!}=7140$$`}</Latex>
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
                            <Latex>{`$$N=C_{12}^4=\\frac{12!}{4!\\cdot 8!}=495$$`}</Latex>
                            <Latex>{`$$M_A=C_7^3 \\cdot C_5^1 = 175$$`}</Latex>
                            <Latex>{`$$P(A)=\\frac{M_A}{N}=\\frac{175}{495}=0.3535$$`}</Latex>
                    <h2 id="3">Теоремы</h2>
                        <h3 id="3a">Теорема сложения</h3>
                            <p>Вероятность суммы двух несовместных событий равняется сумме их вероятностей.</p>
                            <Latex>{`$$P(B) + P(A)= P(A+B)$$`}</Latex>
                            <p>При определении вероятностей часто сложные события представляются в виде комбинаций более простых, при этом применяются операции сложения и умножения. Если события образуют полную группу событий, то их вероятность = 1.</p>
                            <Latex>{`$$\\sum\\limits_{i=1}^n P(A_i)=1$$`}</Latex>
                            <p>Так как <Latex>{`$A_1, A_2, \\ldots, A_n$`}</Latex> образуют полную группу событий, то появление хотя бы одного из них&nbsp;&mdash; достоверное событие.</p>
                            <p>Для совместных событий вероятность того, что произойдет хотя бы одно из двух событий <Latex>{`$A$`}</Latex> или <Latex>{`$B$`}</Latex>, равна сумме вероятностей каждого из этих событий, за вычетом вероятности того, что оба события произойдут одновременно.</p>
                            <Latex>{`$$P(A+B)=P(A)+P(B)-P(A\\cdot B)$$`}</Latex>
                            <p>Событие <Latex>{`$A$`}</Latex> называется независимым от события <Latex>{`$B$`}</Latex> если вероятность события <Latex>{`$A$`}</Latex> не зависит от того наступило <Latex>{`$B$`}</Latex> или нет.</p>
                            <Latex>{`$$P(A) \\neq P_B(A)$$`}</Latex>
                            <Latex>{`$$P(A) = P_B(A)$$`}</Latex>
                        <h3 id="3b">Теорема умножения</h3>
                            <p>Вероятность произведения двух событий равна произведению одного из них на условную вероятность другого, вычисленную при условии, что первое наступило.</p>
                            <Latex>{`$$P(A \\cdot B) = P(A)\\cdot P_A(B)$$`}</Latex>
                            <p>Вероятность совместного наступления событий <Latex>{`$A$`}</Latex> и <Latex>{`$B$`}</Latex> равна произведению вероятностей каждого из этих событий, при условии, что они независимы.</p>
                            <Latex>{`$$P(A\\cdot B)=P(A)\\cdot P(B)$$`}</Latex>
                            <p>Методами математической индукции теорему можно обособить для любого конечного числа событий.</p>
                            <Latex>{`$$P \\prod\\limits_{i=1}^n (A_i)=\\prod\\limits_{i=1}^n (P(A_i))$$`}</Latex>
                            <p>Пусть требуется определить вероятность некоторого события <Latex>{`$A$`}</Latex>, которое может произойти вместе с одним из событий <Latex>{`$H_1, H_2, \\ldots, H_n$`}</Latex>&nbsp;&mdash; называемыми гипотезами. При этом событие <Latex>{`$H_i$`}</Latex> образует полную группу событий.</p>
                            <Latex>{`$$P(A)=\\sum\\limits_{i=1}^n P(H_i)\\cdot P_{H_i}(A)$$`}</Latex>
                        <h3 id="3c">Теорема гипотез</h3>
                            <p><Latex>{`$H_1, H_2, \\ldots, H_i$`}</Latex>&nbsp;&mdash; гипотезы, их вероятности до опыта известны <Latex>{`$P(H_1), P(H_2),\\ldots P(H_i).$`}</Latex></p>
                            <p>Произведён опыт, в результате которого событие <Latex>{`$A$`}</Latex> произошло. Как следует изменить вероятности гипотез в связи с появлением события <Latex>{`$A?$`}</Latex> Необходимо найти вероятность гипотезы при условии, что событие <Latex>{`$A$`}</Latex> наступило.</p>
                            <Latex>{`$$P_A(H_i)=\\frac{P(H_i) \\cdot P_{H_i}(A)}{P(A)}$$`}</Latex>
                            <p>В больницу в среднем поступают 50% пациентов с заболеванием&nbsp;&mdash; <Latex>{`$x$`}</Latex>, 20% &nbsp;&mdash; <Latex>{`$y$`}</Latex>, 30%&nbsp;&mdash; <Latex>{`$z$`}</Latex>. Вероятность полного излечения болезни <Latex>{`$x$`}</Latex>&nbsp;&mdash; 0.7, <Latex>{`$y$`}</Latex>&nbsp;&mdash; 0.9, <Latex>{`$z$`}</Latex>&nbsp;&mdash; 0.8. Пациент, поступивший в больницу был выписан здоровым. Найти вероятность, что он страдал болезнью <Latex>{`$x.$`}</Latex></p>
                            <Latex>{`$$P(H_1)=0.5, ~P(H_2)=0.2, ~P(H_3)=0.3$$`}</Latex>
                            <Latex>{`$$P_{H_1}(A)=0.7, ~P_{H_2}(A)=0.9, ~P_{H_3}(A)=0.8$$`}</Latex>
                            <Latex>{`$$P_A(H_1)=\\frac{P(H_1) \\cdot P_{H_1}(A)}{P(H_1) \\cdot P_{H_1}(A) + P(H_2) \\cdot P_{H_2}(A) + P(H_3) \\cdot P_{H_3}(A)}=\\frac{0.5\\cdot0.7}{0.5\\cdot0.7+0.2\\cdot0.9+0.3\\cdot0.8}=0.45$$`}</Latex>
                    <h2 id="4">Повторные независимые испытания</h2>
                        <p>При решении вероятностных задач часты ситуации в которых одно и то же событие повторяется многократно (стрелок с места несколько раз стреляет в мишень), вопрос нахождения вероятности в отдельном испытании рассмотрен ранее. Представляет интерес нахождение вероятности появления конкретного события определенного числа в n-испытаниях.</p>
                        <p>Несколько событий называют независимыми относительно события <Latex>{`$A$`}</Latex> если вероятность события <Latex>{`$A$`}</Latex> в каждом из них не зависит от исхода других испытаний.</p>
                        <Latex>{`$$P(A)=p=const$$`}</Latex>
                        <Latex>{`$$P(\\overline A)=1-p=q=const$$`}</Latex>
                        <Latex>{`$$P_{m,n}(A) - ? ~(m\\leq n)$$`}</Latex>
                        <p>При этом важно, что не требуется определенная последовательность появления события <Latex>{`$A.$`}</Latex></p>
                        <Latex>{`$$\\underbrace{A,A,A}_m, \\ldots, \\underbrace{\\overline A, \\overline A, \\overline A}_{n-m} = p^m \\cdot q^{n-m}$$`}</Latex>
                        <h3 id="4a">Формула Бернулли</h3>
                            <p>Число различных комбинаций, в которых событий <Latex>{`$A$`}</Latex> наступает <Latex>{`$m$`}</Latex> раз из <Latex>{`$n$`}</Latex> возможных определяется формулой сочетания комбинаторики.</p>
                            <Latex>{`$$P_{m,n}(A)=C_n^m \\cdot p^m \\cdot q^{n-m}$$`}</Latex>
                            <p>30% изделий предприятия высшего сорта. Какова вероятность того, что из 6 изделий предприятия 4&nbsp;&mdash; высшего сорта?</p>
                            <Latex>{`$$n=6, ~m=4$$`}</Latex>
                            <Latex>{`$$P(A)=0.3=p$$`}</Latex>
                            <Latex>{`$$P(\\overline A)=1-0.3=0.7=q$$`}</Latex>
                            <Latex>{`$$P_{4,6}=C_6^4\\cdot0.3^4\\cdot0.7^2=0.198$$`}</Latex>
                        <h3 id="4b">Формула Пуассона</h3>
                            <p>Применяется если вероятность наступления события <Latex>{`$A$`}</Latex> в каждом испытании постоянна, но близка к нулю, а число повторных независимых испытаний достаточно велико.</p>
                            <Latex>{`$$n \\to \\infty$$`}</Latex>
                            <Latex>{`$$P(A)=p\\to0$$`}</Latex>
                            <Latex>{`$$P_{m,n}(A)=\\frac{a^m \\cdot e^{-a}}{m!}, ~a=n\\cdot p, ~e=2.72$$`}</Latex>
                            <p>Вероятность появления на ферме ондатры альбиноса&nbsp;&mdash; 0.001. Найти вероятность того, что из 1000 выращенных животных {'<'}&nbsp;2&nbsp;&mdash; альбиносы.</p>
                            <Latex>{`$$n=1000, ~m<2$$`}</Latex>
                            <Latex>{`$$P(A)=0.001$$`}</Latex>
                            <Latex>{`$$a=n\\cdot p=1$$`}</Latex>
                            <Latex>{`$$P_{m<2,~1000}(A)=P_{0,~1000}(A)+P_{1,~1000}(A)=0.3679+0.3679=0.7578$$`}</Latex>
                        <h3 id="4c">Формула Лапласа</h3>
                            <p>Применяется если вероятность наступления события <Latex>{`$A$`}</Latex> в каждом из <Latex>{`$n$`}</Latex> независимых испытаний&nbsp;&mdash; постоянно, событие не является маловероятным, а число испытаний велико.</p>
                            <Latex>{`$$P_{m,n}=\\frac{f(x)}{\\sqrt{npx}}$$`}</Latex>
                            <Latex>{`$$f(x)=\\frac{1}{\\sqrt{2\\pi}}\\cdot e, ~x=\\frac{m-np}{\\sqrt{npq}}$$`}</Latex>
                            <p>При определенном технологическом процессе происходит 10 обрывов нити на 100 веретён в час. Определить вероятность того, что в течение часа на 80 веретенах произойдет 7 надрывов нити.</p>
                            <Latex>{`$$n=80, ~m=7$$`}</Latex>
                            <Latex>{`$$P(A)=\\frac{10}{100}=0.1=p$$`}</Latex>
                            <Latex>{`$$P(\\overline A)=1-0.1=0.9=q$$`}</Latex>
                            <Latex>{`$$x=0.3731, ~P_{7,80}=\\frac{0.3726}{2.68}=0.139$$`}</Latex>
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
                            <p>Пусть дискретная величина <Latex>{`$X$`}</Latex> имеет значения: <Latex>{`$x_1,x_2,\\ldots,x_n.$`}</Latex> В результате опыта случайная величина принимает одно и только одно значение.</p>
                            <Latex>{`$$
                                \\left.
                                    \\begin{aligned}
                                        X=x_1\\newline
                                        X=x_2\\newline
                                        X=x_n
                                    \\end{aligned}
                                \\right\\} \\Rightarrow \\sum\\limits_{i=1}^n P(X=x_i)=1
                            $$`}</Latex>
                            <p>Определив все возможные значения случайной величины и правило нахождения соответствующих вероятностей, можно получить полное представление о случайной величине.</p>
                            <p>Всякое соотношение, устанавливающее связь между возможными значениями случайной величины и соответствующими вероятностями, называется законом распределения случайной величины.</p>
                            <p>Рассмотрим табличный способ задания закона распределения.</p>
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
                            <p>Также ряд распределения случайной величины может быть представлен графически.</p>
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
                                        <td><Latex>{`$x_i, ~y_j$`}</Latex></td>
                                        <td><Latex>{`$x_1, ~y_1$`}</Latex></td>
                                        <td><Latex>{`$x_2, ~y_2$`}</Latex></td>
                                        <td><Latex>{`$\\ldots$`}</Latex></td>
                                        <td><Latex>{`$x_n, ~y_m$`}</Latex></td>
                                    </tr>
                                    <tr>
                                        <td><Latex>{`$P_{x_i}, ~P_{y_j}$`}</Latex></td>
                                        <td><Latex>{`$P_{x_1}, ~P_{y_1}$`}</Latex></td>
                                        <td><Latex>{`$P_{x_2}, ~P_{y_2}$`}</Latex></td>
                                        <td><Latex>{`$\\ldots$`}</Latex></td>
                                        <td><Latex>{`$P_{x_n}, ~P_{y_m}$`}</Latex></td>
                                    </tr>
                                </tbody>
                            </table>
                            <Latex>{`$$\\sum\\limits_{i=1}^n P_{x_i}=1, ~n\\neq m$$`}</Latex>
                            <Latex>{`$$\\sum\\limits_{j=1}^n P_{y_j}=1, ~j= \\overline{1,m}$$`}</Latex>
                            <p>Произведение случайной величины <Latex>{`$X$`}</Latex> на постоянный множитель <Latex>{`$C$`}</Latex>&nbsp;&mdash; это новая случайная величина <Latex>{`$Z$`}</Latex>, которая с теми же вероятностями что и <Latex>{`$X$`}</Latex> принимает значения равные произведению константы на постоянный множитель <Latex>{`$C.$`}</Latex></p>
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
                            <p><Latex>{`$k$`}</Latex>-ая степень&nbsp;&mdash; это новая случайная величина <Latex>{`$W$`}</Latex>, которая с теми же вероятностями что и <Latex>{`$X$`}</Latex> принимает значения равные <Latex>{`$k$`}</Latex>-ой степени её значений.</p>
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
                            <p>Сумма случайных величин <Latex>{`$X, Y$`}</Latex>&nbsp;&mdash; это новая случайная величина <Latex>{`$Q$`}</Latex>, которая принимает все значения вида: <Latex>{`$(x_i + y_j)(i=\\overline{1,n}, ~j=\\overline{1,m})$`}</Latex> с вероятностями <Latex>{`$P_{i,j}=P(X=x_i, ~Y=y_j)=P_{x_i}\\cdot P_{y_j}.$`}</Latex></p>
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
                    <h2 id="6">Способы задания распределения случайной величины</h2>
                        <h3 id="6a">Функция распределения</h3>
                            <p>Для характеристики появления случайных величин целесообразно использовать вместо события <Latex>{`$P(X = x_i), ~P(X<x).$`}</Latex></p>
                            <p>Если число <Latex>{`$x$`}</Latex> будет меняться произвольно то и вероятности выполнения неравенства <Latex>{`$X<x$`}</Latex> тоже будет меняться, следовательно вероятность есть функция аргумента. Эту функцию будем обозначать <Latex>{`$F(x) = P(X<x).$`}</Latex></p>
                            <p>Геометрически это вероятность того, что случайная точка на числовой оси будет расположена левее заданной точки <Latex>{`$x.$`}</Latex> Функция распределения применима как к непрерывным, так и к дискретным случайным величинам.</p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><Latex>{`$x_i$`}</Latex></td>
                                        <td><Latex>{`$0$`}</Latex></td>
                                        <td><Latex>{`$1$`}</Latex></td>
                                        <td><Latex>{`$2$`}</Latex></td>
                                        <td><Latex>{`$3$`}</Latex></td>
                                    </tr>
                                    <tr>
                                        <td><Latex>{`$P_i$`}</Latex></td>
                                        <td><Latex>{`$0.2$`}</Latex></td>
                                        <td><Latex>{`$0.1$`}</Latex></td>
                                        <td><Latex>{`$0.4$`}</Latex></td>
                                        <td><Latex>{`$0.3$`}</Latex></td>
                                    </tr>
                                </tbody>
                            </table>
                            <Latex>{`$$
                            F(x)=\\begin{cases} 
                                0; & x \\leq 0 \\newline
                                0.2; & 0 \\leq x \\leq 1\\newline
                                0.2 + 0.1 = 0.3; & 1 \\leq x \\leq 2\\newline
                                0.2 + 0.1 + 0.4 = 0.7; & 2 \\leq x \\leq 3\\newline
                                0.2 + 0.1 + 0.4 + 0.3 = 1; & x > 3
                            \\end{cases}
                            $$`}</Latex>
                            <p>Графически является разрывной линией, не ограниченной слева, совершающей скачки в точках возможных значений случайной величины.</p>
                            <Mafs preserveAspectRatio={false} height={300} viewBox={{x:[0,4], y:[0,1]}}>
                                <Coordinates.Cartesian/>
                                <Plot.OfX
                                    y={(x) => {
                                        if (x < 0) return 0;
                                        else if (x >= 0 && x < 1) return 0.2;
                                        else if (x >= 1 && x < 2) return 0.3;
                                        else if (x >= 2 && x < 3) return 0.7;
                                        else return 1;
                                    }}
                                />
                            </Mafs>
                            <Latex>{`$$
                            F(x)=\\begin{cases} 
                                0; &x<0 \\newline
                                \\frac{x^2}{36}; &0\\leq x \\leq 6\\newline
                                1; &x>6
                            \\end{cases}
                            $$`}</Latex>
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
                            <Latex>{`$$F(x) \\in [0;1], \\forall x$$`}</Latex>
                            <Latex>{`$$P(\\alpha \\leq X \\leq \\beta) = F(\\beta) - F(\\alpha)$$`}</Latex>
                            <Latex>{`$$x_2 > x_1 \\Rightarrow F(x_2) \\geq F(x_1)$$`}</Latex>
                            <Latex>{`$$P(X = x_i) = 0$$`}</Latex>
                            <Latex>{`$$X \\in (\\alpha;\\beta) \\Rightarrow F(x)=0, ~x\\leq\\alpha; ~F(x)=1, ~x\\leq\\beta \\Rightarrow \\lim\\limits_{x\\to-\\infty}F(x)=0, \\lim\\limits_{x\\to+\\infty}F(x)=1$$`}</Latex>
                        <h3 id="6b">Плотность распределения</h3>
                            <p>Плотность вероятности используется только для непрерывных случайных величин.</p>
                            <Latex>{`$$f(x)=F'(x) = \\lim\\limits_{\\Delta x\\to 0} \\frac{D(x+ \\Delta x)-F(\\Delta x)}{\\Delta x} = \\lim\\limits_{\\Delta x\\to 0} \\frac{P(x<X<x+\\Delta x)}{\\Delta x}$$`}</Latex>
                            <Latex>{`$$f(x) \\geq 0$$`}</Latex>
                            <Latex>{`$$P(\\alpha < X < \\beta) = \\int\\limits_\\alpha^\\beta f(x)dx$$`}</Latex>
                            <p>Геометрически интерпретация этой формулы вытекает из геометрического смысла определенного интеграла.</p>
                            <p>Вероятность попадания случайной величины <Latex>{`$(\\alpha; \\beta)$`}</Latex>&nbsp;&mdash; численно равна площади формулы, ограниченной кривой распределения, осью <Latex>{`$ox$`}</Latex> и прямыми <Latex>{`$x=\\alpha, ~x=\\beta.$`}</Latex></p>
                            <Latex>{`$$
                            f(x)=\\begin{cases}
                                0; &x<0 \\newline
                                \\frac{x}{18}; &0 \\leq x \\leq 6 \\newline
                                0; &x>6
                            \\end{cases}
                            $$`}</Latex>
                            <Latex>{`$$P(2<X<4)=\\int\\limits_2^4 \\frac{x}{18} dx = \\frac{1}{18} \\cdot \\int\\limits_2^4 xdx = \\frac{1}{18} \\cdot \\frac{x^2}{2} \\Bigg\\vert_2^4 = \\frac{1}{18} \\cdot 6 = \\frac{1}{3}$$`}</Latex>
                            <Mafs preserveAspectRatio={false} height={300} viewBox={{x:[0,6], y:[0,1]}}>
                                <Coordinates.Cartesian/>
                                <Plot.OfX 
                                    y={(x) => {
                                        if (x < 0) return 0;
                                        else if (x >= 0 && x <= 6) return (1/18) * x;
                                        else return 0;
                                    }}
                                />
                                <Plot.Inequality
                                    y={{'<=': (x) => {return x >= 2 && x <= 4 ? (1 / 18) * x : 0},
                                    '>=': () => 0}}
                                    minSamplingDepth={13}
                                />
                            </Mafs>
                            <Latex>{`$$\\int\\limits_{-\\infty}^\\infty f(x)dx=1$$`}</Latex>
                            <p><Latex>{`$f(x), F(x)$`}</Latex>&nbsp;&mdash; взаимно определены, то есть зная одну, можно выразить другую.</p>
                            <Latex>{`$$F(x)=P(X<x)=P(-\\infty < X < x)=\\int\\limits_{-\\infty}^x f(x)dx$$`}</Latex>
                    <h2 id="7">Числовые характеристики случайной величины</h2>
                        <p>Для решения многих практических задач совсем не обязательно знать все возможные значения случайной величины и соответствующие вероятности. Достаточно указать отдельные числовые характеристики, отражающие важные черты закона распределения.</p>
                        <h3 id="7a">Математическое ожидание</h3>
                            <p>Возможные задания случайной величины могут быть сосредоточены вокруг некоторого центра&nbsp;&mdash; среднего значения.</p>
                            <p>Математическое ожидание&nbsp;&mdash; это среднее значение случайной величины, взвешенное по вероятности.</p>
                            <Latex>{`$$M(X)=\\sum\\limits_{i=1}^n x_i P_i = 1$$`}</Latex>
                            <Latex>{`$$M(X)=\\int\\limits_{-\\infty}^{\\infty} xf(x)dx$$`}</Latex>
                            <Latex>{`$$M(X\\pm Y)=M(X)\\pm M(Y)$$`}</Latex>
                            <Latex>{`$$M(X \\cdot Y)= M(X) \\cdot M(Y)$$`}</Latex>
                            <Latex>{`$$M(const)=const$$`}</Latex>
                            <Latex>{`$$M(const \\cdot X)=const \\cdot M(X)$$`}</Latex>
                            <Latex>{`$$M(X-M(X))=0$$`}</Latex>
                        <h3 id="7b">Дисперсия</h3>
                            <p>Целесообразно находить меру рассеивания значений случайной величины вокруг её математического ожидания.</p>
                            <Latex>{`$$D(X)=M(X-M(X))^2$$`}</Latex>
                            <p>То есть математическое ожидание квадрата отклонения случайной величины от её математического ожидания.</p>
                            <Latex>{`$$D(X)=\\sum\\limits_{i=1}^n (x_i - M(X))^2 P_i$$`}</Latex>
                            <Latex>{`$$D(X)=\\int\\limits_{-\\infty}^{\\infty}(x- M(X))^2 f(x)dx$$`}</Latex>
                            <Latex>{`$$D(X\\pm Y)=D(X)+D(Y)$$`}</Latex>
                            <Latex>{`$$D(const)=0$$`}</Latex>
                            <Latex>{`$$D(const \\cdot X)=const^2 \\cdot D(X)$$`}</Latex>
                            <Latex>{`$$D(X)=M(X^2)-M^2(X)$$`}</Latex>
                        <h3 id="7c">Среднеквадратическое отклонение</h3>
                            <p>Показывает вариацию значения случайной величины вокруг среднего.</p>
                            <Latex>{`$$\\sigma(X) = \\sqrt{D(X)}$$`}</Latex>
                    <h2 id="8">Конкретные законы распределения</h2>
                        <p>Конкретным называется закон дифференциальная функция, которого исследована и найдены формулы для вычисления числовых характеристик.</p>
                        <h3 id="8a">Равномерный закон распределения</h3>
                            <Latex>{`$$X \\sim R \\in [a, b]$$`}</Latex>
                            <Latex>{`$$
                            f(x)=\\begin{cases}
                                0; &x<a \\newline
                                \\frac{1}{b-a}; &a \\leq x \\leq b \\newline
                                0; &x>b
                            \\end{cases}
                            $$`}</Latex>
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
                            <Latex>{`$$
                            F(x)=\\begin{cases}
                                0; &x<a \\newline
                                \\frac{x-a}{b-a}; &a \\leq x \\leq b \\newline
                                1; &x>b
                            \\end{cases}
                            $$`}</Latex>
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
                            <Latex>{`$$M(X)=\\frac{b+a}{2}, ~D(X)=\\frac{(b-a)^2}{12}, ~\\sigma(X) = \\frac{b-a}{2\\sqrt{3}}$$`}</Latex>
                            <Latex>{`$$P(\\alpha<X<\\beta) = \\frac{\\beta - \\alpha}{b - a}$$`}</Latex>
                        <h3 id="8b">Показательное распределение</h3>
                            <Latex>{`$$X \\sim Exp(\\lambda)$$`}</Latex>
                            <Latex>{`$$
                            f(x)=\\begin{cases}
                                0; &x<0 \\newline
                                \\lambda e^{-\\lambda x}; &x \\geq 0
                            \\end{cases}
                            $$`}</Latex>
                            <Mafs preserveAspectRatio={false} height={300} viewBox={{x:[0,6], y:[0,1]}}>
                                <Coordinates.Cartesian/>
                                <Plot.OfX
                                    y={(x) => {
                                        if (x < 0) return 0;
                                        else return 1*Math.exp(-1*x);
                                    }}
                                />
                            </Mafs>
                            <Latex>{`$$
                            F(x)=\\begin{cases}
                                0; &x<0 \\newline
                                1-e^{-\\lambda x}; &x \\geq 0
                            \\end{cases}
                            $$`}</Latex>
                            <Mafs preserveAspectRatio={false} height={300} viewBox={{x:[0,6], y:[0,1]}}>
                                <Coordinates.Cartesian/>
                                <Plot.OfX
                                    y={(x) => {
                                        if (x < 0) return 0;
                                        else return 1-Math.exp(-1*x);
                                    }}
                                />
                            </Mafs>
                            <Latex>{`$$M(X)=\\sigma(X) = \\frac{1}{\\lambda}, ~D(X)=\\frac{1}{\\lambda^2}$$`}</Latex>
                            <Latex>{`$$P(\\alpha < X < \\beta) = e^{-\\lambda \\alpha} - e^{-\\lambda \\beta}$$`}</Latex>
                        <h3 id="8c">Нормальное распределение</h3>
                            <p>Распределение наиболее часто встречается, является предельным законом к которому стремятся другие законы распределения при часто встречающихся аналогичных условиях.</p>
                            <Latex>{`$$X \\sim N (a, ~\\sigma)$$`}</Latex>
                            <Latex>{`$$f(x)=\\frac{1}{\\sigma \\sqrt{2 \\pi}} \\cdot e^{-\\frac{(x-a)^2}{2 \\sigma^2}}$$`}</Latex>
                            <Mafs preserveAspectRatio={false} height={300} viewBox={{x:[-3,3], y:[0,1]}}>
                                <Coordinates.Cartesian/>
                                <Plot.OfX y={(x) => (1 / (1 * Math.sqrt(2 * Math.PI))) * Math.exp(-((x - 0) ** 2) / (2 * 1 ** 2))}/>
                            </Mafs>
                            <Latex>{`$$F(x)=\\frac{1}{\\sigma \\sqrt{2\\pi}} \\int\\limits_{-\\infty}^\\infty e^{-\\frac{(x-a)^2}{2 \\sigma^2}}$$`}</Latex>
                            <Mafs preserveAspectRatio={false} height={300} viewBox={{x:[-3,3], y:[0,1]}}>
                                <Coordinates.Cartesian />
                                <Plot.OfX
                                    y={(x) => {
                                        const step = 0.01;
                                        let sum = 0;

                                        for (let t = -10; t <= x; t += step) {
                                            const gauss = Math.exp(-((t - 0) ** 2) / (2 * 1 ** 2));
                                            sum += gauss * step;
                                        }

                                        return (1 / (1 * Math.sqrt(2 * Math.PI))) * sum;
                                    }}
                                />
                            </Mafs>
                            <Latex>{`$$M(X)=a, ~D(X)=\\sigma^2, ~\\sigma(X)=\\sigma$$`}</Latex>
                            <Latex>{`$$\\Phi(x)=\\frac{1}{\\sqrt{2 \\pi}} \\int\\limits_{-\\infty}^x ~e^{-\\frac{x^2}{2}} dx$$`}</Latex>
                            <Latex>{`$$P(\\alpha < X < \\beta) = \\Phi\\left(\\frac{\\beta - a}{\\sigma}\\right) - \\Phi\\left(\\frac{\\alpha - a}{\\sigma} \\right)$$`}</Latex>
                            <Latex>{`$$P(|X-a|\\leq \\xi)=2\\Phi \\left(\\frac{\\xi}{\\sigma}\\right)$$`}</Latex>
                    <h2 id="9">Предельные теоремы теории вероятности</h2>
                        <p>Результаты отдельных наблюдений при относительно равенстве условий их проведения всё же отличаются друг от друга, хотя средний результат обнаруживает значительную устойчивость. Условия при которых проявляется такая закономерность рассматриваются в предельных теоремах.</p>
                        <h3 id="9a">Закон больших чисел</h3>
                            <p>Среднее значение конечной выборки из фиксированного распределения близко к математическому ожиданию этого распределения.</p>
                            <h4 id="9a1">Неравенство Маркова</h4>
                                <p>Применяется если <Latex>{`$X$`}</Latex> принимает только не отрицательные значения и имеет конечное математическое ожидание.</p>
                                <Latex>{`$$P(X\\leq\\xi)> 1 - \\frac{M(X)}{\\xi}$$`}</Latex>
                                <Latex>{`$$P(X>\\xi)<\\frac{M(X)}{\\xi}$$`}</Latex>
                            <h4 id="9a2">Неравенство Чебышева</h4>
                                <p>В основном случайная величина <Latex>{`$X$`}</Latex> принимает значения, близкие к своему среднему.</p>
                                <Latex>{`$$P(|X-M(X)|\\leq\\xi)>1 - \\frac{D(X)}{\\xi^2}$$`}</Latex>
                            <h4 id="9a3">Теорема Чебышева</h4>
                                <p>Если <Latex>{`$X_1, X_2, \\ldots, X_n$`}</Latex>&nbsp;&mdash; независимые случайные величины, имеющие определенные математические ожидания <Latex>{`$M(X_i)=a_i, ~i=\\overline{1, n}$`}</Latex> и ограниченные дисперсии <Latex>{`$D(X_i) \\geq const,$`}</Latex> то при <Latex>{`$n\\to \\infty$`}</Latex>, среднее значение <Latex>{`$P \\to 1.$`}</Latex></p>
                                <Latex>{`$$\\lim\\limits_{n\\to\\infty}(P(|\\overline X - \\overline{M(X)}|)\\leq \\xi)=1$$`}</Latex>
                            <h4 id="9a4">Теорема Бернулли</h4>
                                <p>При многократном повторении независимого эксперимента с двумя возможными исходами относительная частота успешных исходов стремится к вероятности успеха, если количество испытаний стремится к бесконечности.</p>
                                <Latex>{`$$\\lim\\limits_{n\\to\\infty}P(|\\frac{m}{n}-p|\\leq\\xi)=1$$`}</Latex>
                            <h4 id="9a5">Теорема Пуассона</h4>
                                <p>Теорема Пуассона описывает распределение вероятностей для количества событий, происходящих в фиксированный промежуток времени или пространства, при условии, что эти события происходят с постоянной средней частотой и независимо друг от друга. </p>
                                <Latex>{`$$P_n(k)=\\frac{\\lambda^k}{k!} \\cdot e^{-\\lambda}$$`}</Latex>
                        <h3 id="9b">Центральная предельная теорема</h3>
                            <p>Имеет смысл если <Latex>{`$M(X), ~D(X)$`}</Latex>&nbsp;&mdash; конечные и ни одна из случайных величин по своим значениям резко не отличается от остальных.</p>
                            <Latex>{`$$\\sum\\limits_{i=1}^n X_i (X=\\overline{1,n} \\sim N), ~n\\to \\infty$$`}</Latex>
                            <Latex>{`$$P(|\\overline X - a|\\leq\\xi)=2\\Phi(\\frac{\\xi\\sqrt{2n}}{\\sigma})$$`}</Latex>
                </div>	
            </main>
            <Footer 
                prevPage="Функции" prevHref="https://qqqqbbpp.github.io/math/functions" 
                nextPage="Статистика" nextHref="https://qqqqbbpp.github.io/math/statistics" 
            />
        </>
    )
}
