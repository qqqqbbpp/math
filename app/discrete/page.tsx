import Header from "@/app/components/Header";
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';
import Footer from "@/app/components/Footer";

export default function Discrete() {
    return (
        <>
            <Header />
            <main>
                <div className="main">
                    <h1 id="1">Основные понятия</h1>
                    <h2 id="1a">Элементы теории множеств</h2>
                    <Latex>{`$$A \\sub B \\Leftrightarrow x \\in A \\Rightarrow x \\in B$$`}</Latex>
                    <Latex>{`$$x \\in A \\cup B \\Leftrightarrow x \\in A \\vee x \\in B$$`}</Latex>
                    <Latex>{`$$x \\in A \\cap B \\Leftrightarrow x \\in A \\wedge x \\in B$$`}</Latex>
                    <Latex>{`$$x \\in A \\subset A \\Leftrightarrow x \\in E \\wedge x \\notin A$$`}</Latex>
                    <Latex>{`$$X \\subset A \\setminus B \\Leftrightarrow x \\in a \\wedge x \\notin B$$`}</Latex>
                    <h2 id="1b">Свойства операций</h2>
                    <p>Пусть <Latex>{`$E$`}</Latex>&nbsp;&mdash; некоторое множество и <Latex>{`$A, B, C$`}</Latex>&nbsp;&mdash; его подмножество.</p>
                    <Latex>{`$$A \\cup B = B \\cup A,  ~A \\cap B = B \\cap A$$`}</Latex>
                    <Latex>{`$$A \\cup (B \\cup C) = (A \\cup B) \\cup C, ~A \\cap (B \\cap C) = (A \\cap B) \\cap C$$`}</Latex>
                    <Latex>{`$$A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C), ~A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$$`}</Latex>
                    <Latex>{`$$A \\cup A = A, ~A \\cap A = A$$`}</Latex>
                    <Latex>{`$$A\\cup E = E, ~A \\cap E = A$$`}</Latex>
                    <Latex>{`$$A \\cup \\emptyset = A, ~A \\cap \\emptyset = \\emptyset$$`}</Latex>
                    <Latex>{`$$A \\cup \\subset A = E, ~A \\cap \\subset A = \\emptyset$$`}</Latex>
                    <h2 id="1c">Элементы математической логики</h2>
                    <p>Предложение в формальной логике о котором можно сказать истино оно или ложно называется высказыванием. Если <Latex>{`$A \\vee B$`}</Latex>&nbsp;&mdash;  некоторое высказывание, то <Latex>{`$\\neg A, ~A \\cap B, ~A \\cup B, A \\Rightarrow B, ~A\\Leftrightarrow B$`}</Latex> тоже являются высказываниями.</p>
                    <h2 id="1d">Таблица истиности</h2>
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
                                <td>0</td>
                                <td>1</td>
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
                    <h2 id="1d">Свойства логических операций</h2>
                    <p><Latex>{`$T$`}</Latex>&nbsp;&mdash; некоторое истиное высказывание, <Latex>{`$F$`}</Latex>&nbsp;&mdash; некоторое ложное высказывание.</p>
                    <Latex>{`$$A \\wedge T = A, ~A \\vee T = T$$`}</Latex>
                    <Latex>{`$$A \\wedge \\neg A = F, ~A \\cup \\neg A = T$$`}</Latex>
                    <Latex>{`$$\\neg (A \\wedge B) = \\neg A \\vee \\neg B, ~\\neg (A \\vee B) = \\neg A \\cap \\neg B$$`}</Latex>
                    <Latex>{`$$$$`}</Latex>
                    <p>Если несколько высказываний связаны между собой различными знаками логических операций, то полученные выражения называют логической формулой.</p>
                    <p>Значение истиности логической формулы определяется логическими значениями входящих в неё высказываний. Установить истиность логической формулы можно с помощью таблицы истиности или с помощью равносильных преобразований.</p>
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
                    <p>Формула выполнима при <Latex>{`$A=(1, 1, 0), ~B=(1, 0, 0).$`}</Latex></p>
                    <p>Две формулы называются равносильными если их значения истиности совпадают при любых значениях входящих в них высказываний.</p>
                    <Latex>{`$$A \\equiv B$$`}</Latex>
                    <h2 id="2">Равносильности</h2>
                    <h3 id="2a">Основные равносильности</h3>
                    <Latex>{`$$A \\wedge A \\equiv A, ~A \\vee A \\equiv A$$`}</Latex>
                    <Latex>{`$$A \\wedge 1 \\equiv A, ~A \\vee 1 \\equiv 1$$`}</Latex>
                    <Latex>{`$$A \\wedge 0 \\equiv 0, ~A \\vee 0 \\equiv A$$`}</Latex>
                    <Latex>{`$$A \\wedge \\neg A \\equiv 0, ~A \\vee \\neg A = 1$$`}</Latex>
                    <Latex>{`$$x \\wedge (y \\vee x) \\equiv x, ~x \\vee (y \\wedge x) \\equiv x$$`}</Latex>
                    <h3 id="2b">Равносильности при раскрытии логических операций</h3>
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
                    <h2 id="3">Построение отрицания к логической формуле</h2>
                    <ol>
                        <li>
                            <p>Все входящии в нее элементарные высказывания меняются их отрицаниями.</p>
                            <Latex>{`$$A \\to \\neg A$$`}</Latex>
                        </li>
                        <li>
                            <p>Все кванторы меняются на смежные.</p>
                            <Latex>{`$$\\forall \\to E, ~E \\to \\forall$$`}</Latex>
                        </li>
                        <li>
                            <p>Все "и" меняются на "или".</p>
                            <Latex>{`$$\\wedge \\to \\vee, ~\\vee \\to \\wedge$$`}</Latex>
                        </li>
                    </ol>
                </div>
            </main>
            <Footer
                prevPage="Статистика" prevHref="https://qqqqbbpp.github.io/math/statistics"
            />
        </>
    )
}