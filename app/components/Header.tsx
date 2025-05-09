"use client"
import Link from 'next/link';
import dynamic from 'next/dynamic'
const ThemeToggle = dynamic(() => import("@/app/components/ThemeToggle"), { ssr: false })

export default function Header() {
    return (
        <>
            <header>
                <Link className="logo-link" aria-label="Оглавление" href="https://qqqqbbpp.github.io/math">
                    <svg className="logo-0" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" fill="#fff" opacity={0} viewBox="0 0 30 30">						<polyline points="7.5,5.0000005 2.5,5.0000005 2.5,2.5 7.5,2.5000005 " />
                        <path d="M15.2189999,2.5H17.5v5h-2.2810001" />
                        <path d="M22.5,7.5v-5H25v5" />
                        <path d="M5.2189999,12.5H7.5v5H5.2189999" />
                        <path d="M24.7709999,17.5H22.5v-5h2.2709999" />
                        <path d="M5.2189999,22.5H7.5v5H5.2189999" />
                        <path d="M12.5,22.5h2.2810001v5H12.5" />
                        <polyline points="27.5,22.5 27.5,25 27.5,25 22.5,25 22.5,22.5 " />
                    </svg>
                    <svg className="logo-1" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 30 30">
                        <polyline points="7.5,2.5000005 7.5,5.0000005 7.5,5.0000005 4,7 7.5,7 7.5,7.5 2.5,7.5 7,5 2.5,5.0000005 2.5,2.5000005 " />
                        <path d="M17.5,2.5v5h-1.7137585l0.0012779-1.1611929h-1.6045542L13,7.5h-0.5 M15.7882881,6.067862V4.7141833L14.5,6.0276074
                            L15.7882881,6.067862z"/>
                        <path d="M22.5,2.5h5L25,5.0032434L27.5,7.5h-5V2.5z M24.7709999,2.859v1.8659999L26.7250004,2.859H24.7709999z
                            M24.7709999,5.2810001v1.8540001h1.9540005L24.7709999,5.2810001z"/>
                        <path d="M2.5,15H3l2.2199998,2l-0.0009999-4.5H7.5v5H5.2189999" />
                        <polyline points="22.5,7.5091562 22.5,7.0097656 7.5,22.5 7.5,23.0097656 " />
                        <path d="M24.7709999,17.5H22.5v-5h2.2709999l0.0002441,2L27,12.5h0.5L24.7709999,15h0.0100002L27.5,17.5H27l-2.2290001-2" />
                        <path d="M7.5,22.5v5H5.7862415l0.0012779-1.1433277H4.1829653L3,27.5H2.5 M5.7882881,26.0898952v-1.3328533L4.5,26.0502586
                            L5.7882881,26.0898952z"/>
                        <path d="M14.21,27.5H12.5v-5h2.8680849c0.5478725,0,0.9925528,0.1368542,1.3361712,0.4114361
                                c0.3404255,0.2745819,0.5106373,0.6302299,0.5106373,1.066946c0,0.355648-0.1159573,0.6598682-0.3489361,0.9135284
                                c-0.2329788,0.2554054-0.5436172,0.4279995-0.9319143,0.5160389L17.5,27.5H17l-1.5699997-2.0292892H14.21V27.5z
                                M15.5230055,23.0090656H14.21v1.9560661h1.3130054c0.3542547,0,0.6425524-0.091526,0.8638296-0.2754517
                                c0.2212772-0.1856709,0.3319149-0.4227695,0.3319149-0.711298c0-0.2928867-0.1106377-0.5273705-0.3319149-0.7043228
                                C16.1687508,23.0971069,15.8804522,23.0090656,15.5230055,23.0090656z"/>
                        <polyline points="27.5,22.5 27.5,25 27.5,25 25.25,25 25.25,27.5 24.75,27.5 24.75,25 22.5,25 22.5,22.5 " />
                    </svg>
                </Link>
                <ThemeToggle/>
            </header>
            <hr />
        </>
    );
}