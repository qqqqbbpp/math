"use client"
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';
import { Mafs, Coordinates, Plot, LaTeX } from "mafs"
import Footer from "@/app/components/Footer";


export default function Discrete() {
    const blue = "#0099ff"
    const purple = "#ff66ff"
    
    return (
        <>
            <main>
                <div className="main">
                    <h1 id="1">Основные понятия</h1>
                    <h2 id="1a">Элементы теории множеств</h2>
                    <p>Теория множеств изучает свойства и операции над множествами — совокупностями элементов, обладающих определёнными свойствами. Основные понятия включают в себя подмножества, пересечения, объединения, дополнения и разности множеств.</p>
                    <Latex>{`$$A \\sub B \\Leftrightarrow x \\in A \\Rightarrow x \\in B$$`}</Latex>
                    <Latex>{`$$x \\in A \\cap B \\Leftrightarrow x \\in A \\wedge x \\in B$$`}</Latex>
                    <Latex>{`$$x \\in A \\cup B \\Leftrightarrow x \\in A \\vee x \\in B$$`}</Latex>
                    <Latex>{`$$x \\in A \\subset A \\Leftrightarrow x \\in E \\wedge x \\notin A$$`}</Latex>
                    <Latex>{`$$X \\subset A \\setminus B \\Leftrightarrow x \\in a \\wedge x \\notin B$$`}</Latex>
                    <h2 id="1b">Свойства операций</h2>
                    <p>Операции пересечения и объединения множеств обладают различными свойствами, которые позволяют переставлять и группировать множества в выражениях, а также раскрывать сложные комбинации операций.</p>
                    <Latex>{`$$A \\cap B = B \\cap A, ~A \\cup B = B \\cup A$$`}</Latex>
                    <Latex>{`$$A \\cap (B \\cap C) = (A \\cap B) \\cap C, ~A \\cup (B \\cup C) = (A \\cup B) \\cup C$$`}</Latex>
                    <Latex>{`$$A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C), ~A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$$`}</Latex>
                    <p>Также существуют более сложные свойства, описывающие взаимодействия с универсальным и пустым множествами.</p>
                    <Latex>{`$$A \\cap A = A, ~A \\cup A = A$$`}</Latex>
                    <Latex>{`$$A \\cap E = A, ~A\\cup E = E$$`}</Latex>
                    <Latex>{`$$A \\cap \\emptyset = \\emptyset, ~A \\cup \\emptyset = A$$`}</Latex>
                    <Latex>{`$$A \\cap \\subset A = \\emptyset, ~A \\cup \\subset A = E$$`}</Latex>
                    <h2 id="1c">Элементы математической логики</h2>
                    <p>Предложение в формальной логике о котором можно сказать истинно оно или ложно называется высказыванием. Если <Latex>{`$A \\vee B$`}</Latex>&nbsp;&mdash;  некоторое высказывание, то <Latex>{`$\\neg A, ~A \\cap B, ~A \\cup B, A \\Rightarrow B, ~A\\Leftrightarrow B$`}</Latex> тоже являются высказываниями.</p>
                    <h2 id="1d">Таблица истинности</h2>
                    <Latex>{`$$\\neg A$$`}</Latex>
                    <table>
                        <tbody>
                            <tr>
                                <td><Latex>{`$A$`}</Latex></td>
                                <td>1</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td><Latex>{`$\\neg A$`}</Latex></td>
                                <td>0</td>
                                <td>1</td>
                            </tr>
                        </tbody>
                    </table>
                    <Latex>{`$$A \\wedge B$$`}</Latex>
                    <table>
                        <tbody>
                            <tr>
                                <td><Latex>{`$A\\backslash B$`}</Latex></td>
                                <td>1</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </table>
                    <Latex>{`$$A \\vee B$$`}</Latex>
                    <table>
                        <tbody>
                            <tr>
                                <td><Latex>{`$A \\backslash B$`}</Latex></td>
                                <td>1</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>0</td>
                                <td>1</td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </table>
                    <Latex>{`$$A \\Rightarrow B$$`}</Latex>
                    <table>
                        <tbody>
                            <tr>
                                <td><Latex>{`$A \\backslash B$`}</Latex></td>
                                <td>1</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>0</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                        </tbody>
                    </table>
                    <Latex>{`$$A \\Leftrightarrow B$$`}</Latex>
                    <table>
                        <tbody>
                            <tr>
                                <td><Latex>{`$A \\backslash B$`}</Latex></td>
                                <td>1</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>0</td>
                                <td>0</td>
                                <td>1</td>
                            </tr>
                        </tbody>
                    </table>
                    <h2 id="1e">Свойства логических операций</h2>
                    <p>Также существуют свойства для логических операций, которые отражают основные законы булевой алгебры.</p>
                    <Latex>{`$$A \\wedge 1 = A, ~A \\vee 1 = 1$$`}</Latex>
                    <Latex>{`$$A \\wedge \\neg A = 0, ~A \\vee \\neg A = 1$$`}</Latex>
                    <Latex>{`$$\\neg (A \\wedge B) = \\neg A \\vee \\neg B, ~\\neg (A \\vee B) = \\neg A \\cap \\neg B$$`}</Latex>
                    <p>Если несколько высказываний связаны между собой различными знаками логических операций, то полученные выражения называют логической формулой.</p>
                    <p>Значение истинности логической формулы определяется логическими значениями входящих в неё высказываний. Установить истинность логической формулы можно с помощью таблицы истинности или с помощью равносильных преобразований.</p>
                    <Latex>{`$$\\neg A \\cap B \\Rightarrow A \\cup \\neg B$$`}</Latex>
                    <table>
                        <tbody>
                            <tr>
                                <td><Latex>{`$A$`}</Latex></td>
                                <td><Latex>{`$B$`}</Latex></td>
                                <td><Latex>{`$\\neg A$`}</Latex></td>
                                <td><Latex>{`$\\neg B$`}</Latex></td>
                                <td><Latex>{`$\\neg A \\cap B$`}</Latex></td>
                                <td><Latex>{`$A \\cup \\neg B$`}</Latex></td>
                                <td><Latex>{`$F$`}</Latex></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>0</td>
                                <td>0</td>
                                <td>1</td>
                                <td>0</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>0</td>
                                <td>1</td>
                                <td>1</td>
                                <td>0</td>
                                <td>1</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>0</td>
                                <td>0</td>
                                <td>1</td>
                                <td>1</td>
                                <td>0</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Формула выполнима при <Latex>{`$A=(1, 1, 0); ~B=(1, 0, 0).$`}</Latex></p>
                    <h2 id="2">Равносильности</h2>
                    <p>Две формулы называются равносильными если их значения истинности совпадают при любых значениях входящих в них высказываний.</p>
                    <Latex>{`$$A \\equiv B$$`}</Latex>
                    <h3 id="2a">Основные равносильности</h3>
                    <p>Существуют важные равносильности, которые позволяют упрощать логические выражения и доказывать эквивалентность формул.</p>
                    <Latex>{`$$\\neg (\\neg A) \\equiv A$$`}</Latex>
                    <Latex>{`$$A \\wedge A \\equiv A, ~A \\vee A \\equiv A$$`}</Latex>
                    <Latex>{`$$A \\wedge 1 \\equiv A, ~A \\vee 1 \\equiv 1$$`}</Latex>
                    <Latex>{`$$A \\wedge 0 \\equiv 0, ~A \\vee 0 \\equiv A$$`}</Latex>
                    <Latex>{`$$A \\wedge \\neg A \\equiv 0, ~A \\vee \\neg A = 1$$`}</Latex>
                    <h3 id="2b">Равносильности при раскрытии логических операций</h3>
                    <p>Для упрощения выражений используются эти три равносильности, с помощью которых можно преобразовать исходное выражение.</p>
                    <Latex>{`$$A \\Leftrightarrow B \\equiv (A \\Rightarrow B) \\cap (B \\Rightarrow A)$$`}</Latex>
                    <Latex>{`$$A \\Rightarrow B \\equiv \\neg A \\vee B$$`}</Latex>
                    <Latex>{`$$\\neg(A \\vee B) \\equiv \\neg A \\wedge \\neg B$$`}</Latex>
                    <h3 id="2c">Алгоритм доказательства равносильности логических формул</h3>
                    <ol>
                        <li><p>Из формулы удаляются все операции-стрелки.</p></li>
                        <li><p>Раскрываются все скобки перед которыми знак отрицания.</p></li>
                        <li><p>Используем основные свойства логических операций и основные равносильности первого типа. Порядок раскрытия скобок по приоритетностям.</p></li>
                    </ol>
                    <p>Логическая формула, которая принимает значения единицы при любых значениях входящих в неё высказываний называется тождественно истиной или тавтологией.</p>
                    <Latex>{`$$(x \\Rightarrow y) \\Rightarrow x$$`}</Latex>
                    <p>Логическая формула принимающая значение ноль при любых значениях входящих в неё элементарных высказываний называется тождественно ложной.</p>
                    <h3 id="2d">Построение отрицания к логической формуле</h3>
                    <ol>
                        <li>
                            <p>Все входящии в нее элементарные высказывания меняются их отрицаниями.</p>
                            <Latex>{`$$A \\to \\neg A$$`}</Latex>
                        </li>
                        <li>
                            <p>Все кванторы меняются на смежные.</p>
                            <Latex>{`$$\\forall \\to \\exists, ~\\exists \\to \\forall$$`}</Latex>
                        </li>
                        <li>
                            <p>Все «и» меняются на «или» и наоборот.</p>
                            <Latex>{`$$\\wedge \\to \\vee, ~\\vee \\to \\wedge$$`}</Latex>
                        </li>
                    </ol>
                    <h2 id="3">Булева алгебра</h2>
                    <p>Булевой переменной называется переменная, которая принимает значения на двухэлементном множестве. Булевой функцией называется функция от булевой переменной, принимающей значения на том же двухэлементном множестве.</p>
                    <p>Булевой алгеброй называется не пустое множество, содержащее наименьший элемент 0 и наибольший элемент 1, на котором заданы три операции: <Latex>{`$\\vee, \\wedge, \\neg,$`}</Latex> удовлетворяющие всем аксиомам.</p>
                    <h3 id="3a">Применение булевой алгебры в теории множеств</h3>
                    <p>Характеристической функцией множества <Latex>{`$A$`}</Latex> (функцией принадлежности) можно задать любое подмножество <Latex>{`$E.$`}</Latex></p>
                    <Latex>{`$$
                    \\mu_A(x)=\\begin{cases}
                    0; &x \\not\\in A \\newline
                    1; &x\\in A 
                    \\end{cases}
                    $$`}</Latex>
                    <h3 id="3b">Теоретико-множественные операции</h3>
                    <p>В операциях с нечёткими множествами основные операции над множествами выражаются через функцию принадлежности. Эти операции позволяют формализовать логические соотношения между нечёткими множествами.</p>
                    <Latex>{`$$A=B \\Leftrightarrow \\mu_A = \\mu_B$$`}</Latex>
                    <Latex>{`$$A \\subset B \\Leftrightarrow \\mu_B \\geq \\mu_A$$`}</Latex>
                    <Latex>{`$$\\subset A \\quad \\mu_{\\subset A} = 1 - \\mu_A$$`}</Latex>
                    <Latex>{`$$A \\cap B \\quad \\mu_{A\\cap B} = \\mu_A \\odot \\mu_B$$`}</Latex>
                    <table>
                        <tbody>
                            <tr>
                                <td><Latex>{`$\\odot$`}</Latex></td>
                                <td>0</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>0</td>
                                <td>1</td>
                            </tr>
                        </tbody>
                    </table>
                    <Latex>{`$$A \\cup B \\quad \\mu_{A\\cup B} = \\mu_A \\oplus \\mu_B$$`}</Latex>
                    <table>
                        <tbody>
                            <tr>
                                <td><Latex>{`$\\oplus$`}</Latex></td>
                                <td>0</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>0</td>
                                <td>0</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Если на множестве <Latex>{`$2^E$`}</Latex> задана булева алгебра с операциями <Latex>{`$\\odot, \\oplus, \\subset,$`}</Latex> то булеву сумма и произведение можно заменить на операции взятия максимума и минимума.</p>
                    <h2 id="4">Нечеткие множества</h2>
                    <p>Нечетким подмножеством <Latex>{`$\\tilde A$`}</Latex> называется множество всех элементов <Latex>{`$E$`}</Latex> снабженных функцией принадлежности <Latex>{`$\\mu_{\\tilde A} (x)$`}</Latex>, которая принимает значения на отрезке [0, 1].</p>
                    <h3 id="4a">Операции над нечеткими подмножествами</h3>
                    <p>Для нечетких подмножеств также используются операции позволяющие выполнять сравнение, отрицание и другие логические операции.</p>
                    <Latex>{`$$\\tilde A = \\tilde B \\Leftrightarrow \\mu_{\\tilde A} = \\mu_{\\tilde B}$$`}</Latex>
                    <Latex>{`$$\\tilde A \\subset \\tilde B \\Leftrightarrow \\mu_{\\tilde B} \\geq \\mu_{\\tilde A}$$`}</Latex>
                    <Latex>{`$$\\subset \\tilde A \\quad \\mu_{\\subset \\tilde A} = 1 - \\mu_{\\tilde A}$$`}</Latex>
                    <p>А более сложные операции для пересечения, объединения и разности нечётких множеств.</p>
                    <Latex>{`$$\\tilde A \\cap \\tilde B \\quad \\mu_{\\tilde A \\cap \\tilde B} = min(\\mu_{\\tilde A}, \\mu_{\\tilde B})$$`}</Latex>
                    <Latex>{`$$\\tilde A \\cup \\tilde B \\quad \\mu_{\\tilde A \\cup \\tilde B} = max(\\mu_{\\tilde A}, \\mu_{\\tilde B})$$`}</Latex>
                    <Latex>{`$$\\mu_{\\tilde A \\backslash \\tilde B} = min(\\mu_{\\tilde A}, (1 - \\mu_{\\tilde B}))$$`}</Latex>
                    <h3 id="4b">Свойства операций над нечеткими подмножествами</h3>
                    <p>Свойства операций для нечетких множеств повторяют свойства обычных множеств, за исключением двух, которые не выполняются.</p>
                    <Latex>{`$$\\tilde A \\cap \\subset \\tilde A \\neq \\emptyset$$`}</Latex>
                    <Latex>{`$$\\tilde A \\cup \\subset \\tilde A \\neq E$$`}</Latex>
                    <h3 id="4c">Геометрическая интерпретация нечетких множеств</h3>
                    <Mafs preserveAspectRatio={false} height={300} viewBox={{x:[0,5], y:[0,1]}}>
                        <Coordinates.Cartesian/>
                        <Plot.OfX
                            y={(x) => {
                                if (x < 0) return 0;
                                else if (x >= 0 && x <= 1) return x;
                                else if (x >= 1 && x <= 2) return 1;
                                else if (x >= 2 && x <= 3) return -x+3;
                                else return 0;
                            }}
                            color="#3399ff"
                        />
                        <Plot.OfX
                            y={(x) => {
                                if (x < 0) return 0;
                                else if (x >= 2 && x <= 3) return x-2;
                                else if (x >= 3 && x <= 4) return 1;
                                else if (x >= 4 && x <= 5) return -x+5;
                                else return 0;
                            }}
                            color={blue}
                        />
                        <Plot.OfX
                            y={(x) => {
                                if (x < 0) return 0;
                                else if (x >= 2 && x <= 3) return -Math.abs(x - 2.5) + 0.5;
                                else return 0;
                            }}
                            color={purple}
                        />
                        <LaTeX at={[1, -0.25]} tex={String.raw`\tilde A \cup \tilde B`} color={purple}/>
                        <LaTeX at={[1, 1.25]} tex={String.raw`\tilde A \cap \tilde B`} color={blue}/>
                    </Mafs>
                    <Mafs preserveAspectRatio={false} height={300} viewBox={{x:[0,5], y:[0,1]}}>
                        <Coordinates.Cartesian/>
                        <Plot.OfX
                            y={(x) => {
                                if (x < 1) return 0;
                                else if (x >= 1 && x <= 2) return x-1;
                                else if (x >= 2 && x <= 3) return 1;
                                else if (x >= 3 && x <= 4) return -x+4;
                                else return 0;
                            }}
                        />
                        <Plot.OfX
                            y={(x) => {
                                if (x < 0) return 1;
                                else if (x >= 1 && x <= 2) return -x+2;
                                else if (x >= 2 && x <= 3) return 0;
                                else if (x >= 3 && x <= 4) return x-3;
                                else return 1;
                            }}
                            color={blue}
                        />
                        <LaTeX at={[1, 1.25]} tex={String.raw`\subset \tilde A`} color={blue}/>
                    </Mafs>
                    <h3 id="4d">Элементы нечеткой логики</h3>
                    <p>Любое высказывание в бинарной логике можно сопроводить функцией истинности <Latex>{`$(A, \\mu_{\\tilde A}).$`}</Latex> В нечеткой логике каждому высказыванию соответствует функция истинности, принимающая значения на отрезке <Latex>{`$[0, 1].$`}</Latex></p>
                    <h3 id="4e">Свойства операций над нечеткими высказываниями</h3>
                    <Latex>{`$$\\mu_{\\tilde A \\wedge \\tilde B} = min(\\mu_{\\tilde A}, \\mu_{\\tilde B})$$`}</Latex>
                    <Latex>{`$$\\mu_{\\tilde A \\vee \\tilde B} = max(\\mu_{\\tilde A}, \\mu_{\\tilde B})$$`}</Latex>
                    <Latex>{`$$\\mu_{\\neg \\tilde A} = 1 - \\mu_{\\tilde A}$$`}</Latex>
                    <Latex>{`$$\\tilde A \\Rightarrow \\tilde B \\quad \\mu_{\\tilde B} > \\mu_{\\tilde A}$$`}</Latex>
                    <p>Для нечетких высказываний справедливы все свойства логических операций, которе справедливы для обычных высказываний за исключением двух, которые не выполняются.</p>
                    <Latex>{`$$\\mu_{\\tilde A} \\wedge \\tilde A \\neq 0$$`}</Latex>
                    <Latex>{`$$\\mu_{\\tilde A} \\vee \\neg \\tilde A \\neq 1$$`}</Latex>
                    <h2 id="5">Теория множеств</h2>
                    <h3 id="5a">Мощность множества</h3>
                    <p>Мощностью множества называется «количество» элементов этого множества.</p>
                    <Latex>{`$$|A|$$`}</Latex>
                    <p>Неконечное множество называется счетным если его члены можно занумеровать (построить взаимно-однозначное соответствие между элементами множества и множеством натуральных чисел).</p>
                    <p>Объединение и пересечение счетных множеств является счетным множеством. Подмножество счетных множеств является либо конечным либо счетным.</p>
                    <p>Мощность множества <Latex>{`$\\mathbb R$`}</Latex> называется континуум и обозначается <Latex>{`$c.$`}</Latex> Не существует множества больше счетного, но меньше континуума.</p>
                    <h3 id="5b">Декартово произведение множеств</h3>
                    <p><Latex>{`$A \\times B$`}</Latex>&nbsp;&mdash; декартово произведение множеств, где <Latex>{`$a \\in A, ~b \\in B.$`}</Latex></p>
                    <Latex>{`$$A = \\{1, 2\\}, ~B = \\{a, b\\}$$`}</Latex>
                    <Latex>{`$$A \\times B = \\{1, a\\}, \\{1, b\\}, \\{2, a\\}, \\{2, b\\}$$`}</Latex>
                    <Latex>{`$$B \\times A = \\{a, 1\\}, \\{a, 2\\}, \\{b, 1\\}, \\{b, 2\\}$$`}</Latex>
                    <Latex>{`$$A \\times B \\neq B \\times A$$`}</Latex>
                    <p>Декартово произведение множества на себя называется декартовым квадратом.</p>
                    <Latex>{`$$A \\times A = A^2$$`}</Latex>
                    <p><Latex>{`$n$`}</Latex>-я декартова степень множества <Latex>{`$A$`}</Latex> определяется для целых неотрицательных <Latex>{`$n,$`}</Latex> как <Latex>{`$n$`}</Latex>-кратное декартово произведение <Latex>{`$A$`}</Latex> на себя.</p>
                    <Latex>{`$$\\underbrace{A \\times A \\times \\ldots \\times A}_n$$`}</Latex>
                    <h3 id="5c">Формула включений и исключений</h3>
                    <Latex>{`$$|A| = n, ~|B| = m$$`}</Latex>
                    <Latex>{`$$|A \\cup B| = |A| + |B| - |A \\cap B|$$`}</Latex>
                    <Latex>{`$$|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|$$`}</Latex>
                    <Latex>{`$$|A \\backslash B| = |A| - |A \\cap B|$$`}</Latex>
                    <h2 id='6'>Теория графов</h2>
                    <p>Дано множество точек <Latex>{`$X$`}</Latex> и множество отношений <Latex>{`$T$`}</Latex> между этими отношениями, каждая точка <Latex>{`$x_i \\in X$`}</Latex> имеет отношение с некоторым подмножеством множества <Latex>{`$X.$`}</Latex> Каждое отношение назовется ребром.</p>
                    <p>Графом называется множество точек <Latex>{`$X$`}</Latex> с введенной на нем системой отношений <Latex>{`$T.$`}</Latex> Обозначается <Latex>{`$G(X,~T).$`}</Latex> Точки называются вершинами графа, а отношения называются ребрами и обозначаются <Latex>{`$(x_i, ~x_j).$`}</Latex></p>
                    <p>Вершина <Latex>{`$x_1,$`}</Latex> которая не имеет отношений ни с одной другой называется изолированной. Ребро графа, соединяющее вершину с ней самой, называется петлей. Граф у которого некоторые пары вершин соединены более чем одним ребром называются мультиграфом. Два ребра графа называются смежными если они имеют общую вершину, две вершины графа называются смежными если они принадлежат одному ребру. Вершина графа и некоторое ребро называются инцидентными если вершина принадлежит данному ребру.</p>
                    <p>Любой граф можно зажать при помощи матриц смежности и инцидентности. Пусть граф имеет <Latex>{`$n$`}</Latex> вершин и <Latex>{`$m$`}</Latex> ребер. Матрица <Latex>{`$A_{n\\times m}$`}</Latex> каждый элемент которой <Latex>{`$a_{i,j}$`}</Latex> равен количеству ребер, соединяющий вершины <Latex>{`$x_i, x_j$`}</Latex> называется матрицей смежности графа. Матрица <Latex>{`$B_{m\\times n}$`}</Latex> каждый элемент которой <Latex>{`$b_{i, j}$`}</Latex> называется матрицей инцидентности. Любой граф имеет матрицу инцидентности и по матрицам смежности или инцидентности можно восстановить граф.</p>
                    <h3 id='6a'>Характеристики графа</h3>
                    <p>Граф называется полным если любые две вершины соединены ровно одним ребром. Если полный граф имеет <Latex>{`$n$`}</Latex> вершин, то его количество ребер <Latex>{`$m = C_n^2.$`}</Latex> Если задан некоторый граф с <Latex>{`$n$`}</Latex> вершинами, то его дополнением называется граф с такими же вершинами и такими ребрами, которых не хватает у графа чтобы он стал полным.</p>
                    <p>Степенью вершины графа <Latex>{`$d_i$`}</Latex> называется количество ребер, выходящих из данной вершины. Вершина называется четной (нечетной) если её степень <Latex>{`$d_i$`}</Latex> четная (нечетная). Количество нечетных вершин в любом графе четно. В графе с <Latex>{`$n$`}</Latex> вершинами всегда найдется две вершины одинаковой четности. Сумма степеней вершин любого графа равна удвоенному количеству ребер.</p>
                    <Latex>{`$$\\sum\\limits_{i=1}^n d_i = 2m$$`}</Latex>
                    <h3 id='6b'>Пути и циклы в графе</h3>
                    <p>Путем между вершинами <Latex>{`$x_i, x_j$`}</Latex> называется последовательность ребер, начинающихся в <Latex>{`$x_i,$`}</Latex> и заканчивавшихся в <Latex>{`$x_j,$`}</Latex> состоящих из смежных ребер. Длинной пути называется количество ребер в пути. Путь называется простым если он проходит через каждую вершину только один раз. Путь в графе, у которого начальная и конечная точка совпадает называется циклом. Длинной цикла называются количеством ребер в цикле. Цикл называется простым если он проходит через каждую вершину только один раз.</p>
                </div>
            </main>
            <Footer
                prevPage="Статистика" prevHref="https://qqqqbbpp.github.io/math/statistics"
            />
        </>
    )
}