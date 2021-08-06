import { Link } from "@inertiajs/inertia-react"

export default function Header() {
    return (
        <nav className="navbar box" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a href="/" className="navbar-item">
                    <h4>Projeto <span className="tag is-link is-light is-medium">FDE</span></h4>
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="mainNavbar">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="mainNavbar" className="navbar-menu">
                <div className="navbar-start">
                    <Link href={route('dashboard.index')} className="navbar-item">
                        Dashboard
                    </Link>
                    <Link href={route('clientes.index')} className="navbar-item">
                        Clientes
                    </Link>
                    <a className="navbar-item">
                        Atendimentos
                    </a>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <Link href="/logout" method="post" className="button">
                            Logout
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
