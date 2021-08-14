import Layout from "../../Shared/Layout";
import { Link } from "@inertiajs/inertia-react";
import Notification from "../../Shared/Notification";

export default function Index() {
    return (
        <Layout>
            <nav className="breadcrumb mt-5" aria-label="breadcrumbs">
                <ul>
                    <li><a href={route('atendentes.index')}>Atendentes</a></li>
                    <li className="is-active"><a href={route('atendentes.index')}>Listagem</a></li>
                </ul>
            </nav>
            <Notification />
            <div id="lista-atendentes-div" className="mt-6">
                <div className="columns">
                    <div className="column">
                        <h4 className="subtitle is-4">Listagem de atendentes</h4>
                    </div>
                    <div className="column">
                        <Link href={route('atendentes.cadastro')} className="button is-primary is-pulled-right">Novo atendente</Link>
                    </div>
                </div>
                <table className="table is-striped is-hoverable is-fullwidth">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th className="has-text-centered">Data de nascimento</th>
                            <th className="has-text-centered">Gênero</th>
                            <th className="has-text-centered">Ações</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </Layout>
    );
}
