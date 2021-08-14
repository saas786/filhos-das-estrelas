import Parser from 'html-react-parser';
import { Link } from '@inertiajs/inertia-react';

export default function Paginator({data}) {
    function checkActivePage(link) {
        if(link.active && link.url !== null) {
            return 'pagination-link is-current';
        }

        return 'pagination-link';
    }

    return (
        <nav className="pagination" role="navigation" aria-label="pagination">
            <ul className="pagination-list">
                {
                    data.links.map((link) => (
                        <li key={link.label}>
                            <Link href={link.url}
                                className={checkActivePage(link)}
                                disabled={link.url === null ? 'disabled' : ''}>
                                    {Parser(link.label)}
                             </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
