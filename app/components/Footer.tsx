import React from 'react';
import Link from 'next/link';

interface FooterProps {
    prevPage: string;
    prevHref: string;
    nextPage: string;
    nextHref: string;
}

const Footer: React.FC<FooterProps> = ({ prevPage, prevHref, nextPage, nextHref }) => {
    return (
        <footer>
            <Link aria-label={prevPage} href={prevHref}>{'<<'}&nbsp;{prevPage}</Link>
            <Link aria-label={nextPage} href={nextHref}>{nextPage}&nbsp;{'>>'}</Link>
        </footer>
    );
};

export default Footer;
