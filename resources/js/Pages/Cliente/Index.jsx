import Filtro from "./Partial/Filtro"
import Layout from "../../Shared/Layout"
import { Inertia } from "@inertiajs/inertia"
import Paginator from "../../Shared/Paginator"
import Notification from "../../Shared/Notification"
import { Link, usePage } from "@inertiajs/inertia-react"

export default function Index() {
    const { clientes } = usePage().props;

    function excluirCliente(cliente) {
        let confirmation = confirm('Você deseja realmente excluir esse cliente?');

        if (confirmation === true) {
            Inertia.delete(route('clientes.excluir', cliente));
        }
    }

    return (
        <Layout>
            <nav className="breadcrumb mt-5" aria-label="breadcrumbs">
                <ul>
                    <li><a href={route('clientes.index')}>Clientes</a></li>
                    <li className="is-active"><a href={route('clientes.index')}>Listagem</a></li>
                </ul>
            </nav>
            <Notification />
            <div id="lista-clientes-div" className="mt-6">
                <div className="columns">
                    <div className="column">
                        <h4 className="subtitle is-4">Listagem de clientes</h4>
                    </div>
                    <div className="column">
                        <Link href={route('clientes.cadastro')} className="button is-link is-pulled-right">Novo cliente</Link>
                    </div>
                </div>
                <Filtro />
                <table className="table is-striped is-hoverable is-fullwidth mt-5">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th className="has-text-centered">Data de nascimento</th>
                            <th className="has-text-centered">Gênero</th>
                            <th className="has-text-centered">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.data.map((cliente) => (
                            <tr key={cliente.id}>
                                <td>{cliente.nome}</td>
                                <td className="has-text-centered">{cliente.nascimento} - {cliente.idade} anos</td>
                                <td className="has-text-centered">{cliente.genero == 'MASCULINO' ? 'Masculino' : 'Feminino'}</td>
                                <td className="has-text-centered">
                                    <Link className="button is-link mr-2" href={route('clientes.cadastro', cliente)} method="get">Editar</Link>
                                    <button type="button" className="button is-danger" onClick={e => excluirCliente(cliente)}>Excluir</button>
                                </td>
                            </tr>
                        ))}
                        {clientes.data.length === 0 && (
                            <tr>
                                <td colSpan="5" className="has-text-centered">Nenhum atendente cadastrado</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <Paginator data={clientes} />
            </div>
        </Layout>
    )
}
