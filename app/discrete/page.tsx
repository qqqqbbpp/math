import Header from "@/app/components/Header";
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';
import Footer from "@/app/components/Footer";

export default function Discrete() {
    return (
        <>
            <Header/>
            <main>
                <div className="main">
                    <h1 id="1">...</h1>
                </div>
            </main>
            <Footer 
                prevPage="Математическая статистика" prevHref="https://qqqqbbpp.github.io/math/statistics" 
            />
        </>
    )
}
