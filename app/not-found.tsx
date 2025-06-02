'use client';
import Link from 'next/link';
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';
import { usePathname } from 'next/navigation';

export default function NotFound() {
    const path = usePathname();
    const decodedPath = decodeURIComponent(path);

    return (
        <>
            <main>
                <div className='main'>
                    <h1> <Latex>{`$\\hslash \\mathbb{O} \\Tau ~f(o) \\tilde\\mu \\eta d$`}</Latex>: {decodedPath}</h1>
                    <p>Перейдите в <Link aria-label="оглавление" href="https://qqqqbbpp.github.io/math/">оглавление</Link>.</p>
                </div>
            </main>
        </>
    );
}