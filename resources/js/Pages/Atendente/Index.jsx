import Layout from "../../Shared/Layout";
import { Link, usePage } from "@inertiajs/inertia-react";
import Notification from "../../Shared/Notification";
import { Inertia } from "@inertiajs/inertia";
import Paginator from "../../Shared/Paginator";

export default function Index() {
    const { atendentes } = usePage().props;

    function excluirAtendente(atendente) {
        let confirmation = confirm('Você realmente deseja excluir este atendente?');

        if (confirmation === true) {
            Inertia.delete(route('atendentes.excluir', atendente));
        }
    }

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
                        <Link href={route('atendentes.cadastro')} className="button is-link is-pulled-right">Novo atendente</Link>
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
                        {atendentes.data.map((atendente) => (
                            <tr key={atendente.id}>
                                <td>{atendente.nome}</td>
                                <td className="has-text-centered">{atendente.nascimento}</td>
                                <td className="has-text-centered">{atendente.genero === 'MASCULINO' ? 'Masculino' : 'Feminino'}</td>
                                <td className="has-text-centered">
                                    <Link href={route('atendentes.cadastro', atendente)} className="button is-link mr-2" method="get">Editar</Link>
                                    <button className="button is-danger" onClick={e => excluirAtendente(atendente)}>Excluir</button>
                                </td>
                            </tr>
                        ))}
                        {atendentes.data.length === 0 && (
                            <tr>
                                <td colSpan="5" className="has-text-centered">Nenhum atendente cadastrado</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <Paginator data={atendentes} />
            </div>
        </Layout>
    );
}
