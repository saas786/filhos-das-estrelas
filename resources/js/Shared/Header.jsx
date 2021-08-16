import { Link } from "@inertiajs/inertia-react"

export default function Header() {

    toggleNavbar();

    function toggleNavbar() {
        document.addEventListener('DOMContentLoaded', () => {

            // Get all "navbar-burger" elements
            const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

            // Check if there are any navbar burgers
            if ($navbarBurgers.length > 0) {

                // Add a click event on each of them
                $navbarBurgers.forEach(el => {
                    el.addEventListener('click', () => {

                        // Get the target from the "data-target" attribute
                        const target = el.dataset.target;
                        const $target = document.getElementById(target);

                        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                        el.classList.toggle('is-active');
                        $target.classList.toggle('is-active');

                    });
                });
            }
        });
    }

    function checkRouteActive(routeName) {
        return route().current(routeName + '.*') ? 'navbar-item is-active' : 'navbar-item';
    }

    return (
        <nav className="navbar box" style={{ padding: 5 }} role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a href="/" className="navbar-item">
                    <h4>Projeto FDE</h4>
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="mainNavbar">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="mainNavbar" className="navbar-menu">
                <div className="navbar-start">
                    <Link href={route('dashboard.index')} method="get" className={checkRouteActive('dashboard')} as="a">
                        Dashboard
                    </Link>
                    <Link href={route('clientes.index')} method="get" className={checkRouteActive('clientes')} as="a">
                        Clientes
                    </Link>
                    <Link href={route('atendentes.index')} method="get" className={checkRouteActive('atendentes')} as="a">
                        Atendentes
                    </Link>
                    <a className="navbar-item">
                        Atendimentos
                    </a>
                    <Link href={route('servicos.index')} method="get" className={checkRouteActive('servicos')} as="a">Serviços</Link>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <Link href="/logout" method="post" className="button" as="button">
                            Logout
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
