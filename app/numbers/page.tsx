"use client"
import Header from "@/app/components/Header";
import { Mafs, Coordinates, Vector, MovablePoint, Text} from "mafs"
import { useState } from "react";
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';
import Footer from "@/app/components/Footer";

export default function Numbers() {

const [position, setPosition] = useState([1, 2])

const [positiveCount, setPositiveCount] = useState(1);
const [divider, setDivider] = useState(0);
const [negativeCount, setNegativeCount] = useState(0);
const [negativeDivider, setNegativeDivider] = useState(0);

const handlePositiveClick = () => setPositiveCount(positiveCount + 1);
const handlePositiveDivideClick = () => setDivider(divider + 1);
const handleNegativeClick = () => setNegativeCount(negativeCount + 1);
const handleNegativeDivideClick = () => setNegativeDivider(negativeDivider + 1);

    return (
        <>
            <Header/>
            <main>
                <div className="main">
                    <h1 id="1">Комплексные</h1>
                        <p>Комплексные числа&nbsp;&mdash; это числа вида <Latex>{`$ z = a + bi$`}</Latex>, где <Latex>{`$a$`}</Latex>&nbsp;и&nbsp;<Latex>{`$b$`}</Latex>&nbsp;&mdash; вещественные числа, а&nbsp;<Latex>{`$i$`}</Latex>&nbsp;&mdash; мнимая единица, такая что <Latex>{`$i^2 = -1.$`}</Latex></p>
                        <Mafs preserveAspectRatio={false} height={300} viewBox={{x:[-3,3], y:[-1,2]}}>
                            <Coordinates.Cartesian yAxis={{labels: (y) => {return `${y}i`}}}/>
                            <MovablePoint
                                point={[position[0], position[1]]}
                                constrain={([x, y]) => [Math.round(x), Math.round(y)]}
                                onMove={(newPosition) => setPosition([(newPosition[0]), (newPosition[1])])}
                                color="#0089ff"
                            />
                            <Vector tail={[0, 0]} tip={[position[0], position[1]]}/>
                            <Text x={position[0] + 0.25} y={position[1] + 0.25} attach="e">
                                z = {position[0]} {position[1] >= 0 ? "+" : "-"} {Math.abs(position[1])}i
                            </Text>
                        </Mafs>
                        <h2 id="1a">Вещественные</h2>
                            <p>Вещественные числа включают в&nbsp;себя два ряда рациональных и&nbsp;иррациональных чисел.</p>
                            <h3 id="1a1">Рациональные</h3>
                                <p>Рациональные числа&nbsp;&mdash; это числа, которые можно представить в виде дроби <Latex>{`$\\frac{p}{q},$`}</Latex> где <Latex>{`$p$`}</Latex> и <Latex>{`$q$`}</Latex>&nbsp;&mdash; целые числа, а <Latex>{`$q\\neq$`}</Latex> 0.</p>
                                <h4 id="1a1a">Целые</h4>
                                    <p>Целые числа включают в&nbsp;себя положительные и&nbsp;отрицательные целые числа, а&nbsp;также ноль.</p>
                                    <h5 id="1a1a1">Целые положительные</h5>
                                    <p>Мы&nbsp;можем получить весь ряд целых положительных чисел путём бесконечного складывания единиц.</p>
                                    <Mafs preserveAspectRatio={false} height={300} viewBox={{x:[0,10], y:[0,1]}}>
                                        <Coordinates.Cartesian
                                            xAxis={{ labels: false }}
                                            yAxis={{ labels: false }}
                                        />
                                        {[...Array(positiveCount)].map((_, index) => (
                                            <Text key={index} x={index + 1} y={-0.25}>
                                                {index + 1}
                                            </Text>
                                        ))}
                                    </Mafs>
                                    <div className="button"><button aria-label="Прибавить 1" onClick={handlePositiveClick}><Latex>{`$+1$`}</Latex></button></div>
                                    <h5 id="1a1a2">Целые отрицательные</h5>
                                        <p>Мы&nbsp;можем получить весь ряд целых отрицательных чисел и&nbsp;ноль путём бесконечного отнимания единиц.</p>
                                        <Mafs preserveAspectRatio={false} height={300} viewBox={{x:[-10,0], y:[0,1]}}>
                                            <Coordinates.Cartesian
                                                xAxis={{ labels: false }}
                                                yAxis={{ labels: false }}
                                            />
                                            {[...Array(negativeCount + 1)].map((_, index) => (
                                                <Text key={index} x={-(index)} y={-0.25}>
                                                    {-(index)}
                                                </Text>
                                            ))}
                                        </Mafs>
                                        <div className="button"><button aria-label="Вычесть 1" onClick={handleNegativeClick}><Latex>{`$-1$`}</Latex></button></div>
                                    <h5 id="1a1a3">Ноль</h5>
                                        <p>Ноль не&nbsp;является ни&nbsp;положительным, ни&nbsp;отрицательным числом.</p>
                                <h4 id="1a1b">Дробные</h4>
                                    <p>Дробные числа включают в&nbsp;себя все числа, которые могут быть выражены в&nbsp;виде дроби, отличной от&nbsp;целого числа.</p>
                                    <h5 id="1a1b1">Дробные положительные</h5>
                                        <p>Мы&nbsp;можем получить последовательность дробных положительных чисел, начиная с&nbsp;деления единицы на&nbsp;<Latex>{`$\\frac{10}{n},$`}</Latex> после чего продолжая делить каждое получившееся значение. Те&nbsp;же действия можно повторить для любого числа из&nbsp;множества целых положительных чисел.</p>
                                        <Mafs preserveAspectRatio={false} height={300} viewBox={{x:[0,10], y:[0,1]}}>
                                            <Coordinates.Cartesian
                                                xAxis={{ labels: false }}
                                                yAxis={{ labels: false }} 
                                            />
                                            {[...Array(divider)].map((_, index) => (
                                                <Text key={index} x={index + 1} y={-0.25}>
                                                    {(1 / (10 / (index + 1))).toFixed(1)}
                                                </Text>
                                            ))}
                                            <Text x={10} y={-0.25}>1</Text>
                                        </Mafs>
                                        <div className="button"><button aria-label="Поделить 1 на 10 деленное на n" onClick={handlePositiveDivideClick} disabled={divider >= 9}><Latex>{`$:\\frac{10}{${divider + 1}}$`}</Latex></button></div>
                                    <h5 id="1a1b2">Дробные отрицательные</h5>
                                        <p>Мы&nbsp;можем получить последовательность дробных отрицательных чисел, начиная с&nbsp;деления единицы на&nbsp;<Latex>{`$-\\frac{10}{n},$`}</Latex> после чего продолжая делить каждое получившееся значение. Те&nbsp;же действия можно повторить для любого числа из&nbsp;множества целых положительных чисел.</p>
                                        <Mafs preserveAspectRatio={false} height={300} viewBox={{x:[-10,0], y:[0,1]}}>
                                            <Coordinates.Cartesian
                                                xAxis={{ labels: false }}
                                                yAxis={{ labels: false }}
                                            />
                                            {[...Array(negativeDivider)].map((_, index) => (
                                                <Text key={index} x={-(index + 1)} y={-0.25}>
                                                    {(-1 / (10 / (index + 1))).toFixed(1)} 
                                                </Text>
                                            ))}
                                            <Text x={-10} y={-0.25}>-1</Text>
                                        </Mafs>
                                        <div className="button"><button aria-label="Поделить 1 на минус 10 деленное на n" onClick={handleNegativeDivideClick} disabled={negativeDivider >= 9}><Latex>{`$ : -\\frac{10}{${negativeDivider + 1}}$`}</Latex></button></div>
                            <h3 id="1a2">Иррациональные</h3>
                                <p>Иррациональные числа&nbsp;&mdash; это числа, которые не&nbsp;могут быть представлены в&nbsp;виде дроби, их&nbsp;десятичное представление бесконечно и&nbsp;непериодично.</p>
                </div>
            </main>
            <Footer 
                prevPage="Операции" prevHref="https://qqqqbbpp.github.io/math/operations" 
                nextPage="Уравнения" nextHref="https://qqqqbbpp.github.io/math/equations" 
            />  
        </>
    )
}
