import Link from 'next/link';

interface FooterProps {
    prevPage?: string;
    prevHref?: string;
    nextPage?: string;
    nextHref?: string;
}

const Footer: React.FC<FooterProps> = ({ prevPage, prevHref, nextPage, nextHref }) => {
    return (
        <>
            <hr />
            <footer>
                {prevPage && prevHref && (
                    <Link aria-label={prevPage} href={prevHref}>
                        {'<<'}&nbsp;{prevPage}
                    </Link>
                )}
                {nextPage && nextHref && (
                    <Link aria-label={nextPage} href={nextHref}>
                        {nextPage}&nbsp;{'>>'}
                    </Link>
                )}
            </footer>
        </>
    );
};

export default Footer;
