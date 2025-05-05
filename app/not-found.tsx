import Link from 'next/link';

export default async function NotFound() {
    return (
        <main>
            <div className="main">
                <p>Страница с заданным адресом не найдена. Прейдите в <Link aria-label="Оглавление" href="https://qqqqbbpp.github.io/math/">оглавление</Link>.</p>
            </div>
        </main>
    )
}