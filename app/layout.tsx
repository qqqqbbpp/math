import type { Metadata } from "next";
import { PT_Serif } from 'next/font/google';
import { ThemeProvider } from "next-themes";
import Header from "@/app/components/Header";
import "./styles/globals.css";
import "./styles/9x16.css";
import "./styles/9x16 - 4x3.css";
import "./styles/4x3 - 16x9.css";
import "./styles/16x9.css";

const ptSerif = PT_Serif({ subsets: ['cyrillic'], weight: '400', style: ['normal', 'italic'], display: 'swap', variable: '--pt-serif' });

export const metadata: Metadata = {
    title: "Math",
    description: "Mafs and latex math app"
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru" suppressHydrationWarning={true}>
            <body className={`${ptSerif.variable}`}>
                <ThemeProvider defaultTheme="system" enableSystem>
                    <Header />{children}
                </ThemeProvider>
            </body>
        </html>
    );
}