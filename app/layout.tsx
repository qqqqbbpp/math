import { ThemeProvider } from 'next-themes';
import { Metadata, Viewport } from "next";
import { PT_Serif } from 'next/font/google';
import Head from 'next/head';
import "./styles/globals.css";
import "./styles/9x16.css";
import "./styles/9x16 - 4x3.css";
import "./styles/4x3 - 16x9.css";
import "./styles/16x9.css";

export const metadata: Metadata = {
    title: "Math",
    description: "Mafs and latex math app",
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false
}

const ptSerif = PT_Serif({ subsets: ['cyrillic'], weight: '400', style: ['normal', 'italic'], display: 'swap', variable: '--pt-serif' });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className={ptSerif.variable} suppressHydrationWarning={true} lang="ru">
            <Head>
                <link rel="icon" href="/icon.svg" sizes="any"/>
            </Head>
            <body>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
