"use client"
import Header from "@/app/components/Header";
import { useEffect } from "react";
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';
import { Mafs, Coordinates, Line, useMovablePoint, Plot, Transform} from "mafs"
import Footer from "@/app/components/Footer";

export default function Functions() {

useEffect(() => {
    const element = document.querySelector('main');
    element?.focus();
}, []);

const blue = "#0089ff"

const linearFunctionPointB = useMovablePoint([0, 1], { constrain: "vertical", color: blue});
const linearFunctionPointK = useMovablePoint([1, 0], { constrain: "horizontal", color: blue});

const quadraticFunctionPointA = useMovablePoint([0, 0], { constrain: "horizontal", color: blue});
const quadraticFunctionPointB = useMovablePoint([1, 0], { constrain: "horizontal", color: blue});
const quadraticFunctionPointK = useMovablePoint([0, -1], { constrain: "vertical", color: blue});

const mid = (quadraticFunctionPointA.x + quadraticFunctionPointB.x) / 2
const fn = (x: number) => (x - quadraticFunctionPointA.x) * (x - quadraticFunctionPointB.x)

    return (
        <>
            <Header/>
            <main tabIndex={1}>
                <div className="main">
                    <h1 id="1">Линейные</h1>
                    <p>Линейные функции&nbsp;&mdash; это функции вида <Latex>{`$y = kx + b$`}</Latex>.</p>
                        <Mafs preserveAspectRatio={false} height={300} viewBox={{x:[-3,3], y:[-1,1]}}>
                            <Coordinates.Cartesian/>
                            <Line.ThroughPoints
                                point1={linearFunctionPointB.point}
                                point2={linearFunctionPointK.point}
                            />
                            {linearFunctionPointB.element}
                            {linearFunctionPointK.element}
                        </Mafs>
                    <h2 id="2">Квадратные</h2>
                    <p>Квадратные функции&nbsp;&mdash; это функции вида <Latex>{`$y = ax^2 + bx + c$`}</Latex>. </p>
                        <Mafs preserveAspectRatio={false} height={300} viewBox={{x:[-3,3], y:[-1,1]}}>
                            <Coordinates.Cartesian/>
                            <Plot.OfX y={(x) => (quadraticFunctionPointK.y * fn(x)) / fn(mid)}/>
                                {quadraticFunctionPointA.element}
                                {quadraticFunctionPointB.element}
                            <Transform translate={[(quadraticFunctionPointA.x + quadraticFunctionPointB.x) / 2, 0]}>
                                {quadraticFunctionPointK.element}
                            </Transform>
                        </Mafs>
                </div>
            </main>
            <Footer 
                prevPage="Уравнения" prevHref="/math/equations" 
                nextPage="Вероятности" nextHref="/math/probabilities" 
            />
        </>
    )
}
