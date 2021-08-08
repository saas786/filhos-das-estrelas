import Layout from "../../Shared/Layout"
import { Link, usePage } from "@inertiajs/inertia-react"

export default function Index() {
    const { clientes } = usePage().props;

    return (
        <Layout>
            <nav className="breadcrumb mt-5" aria-label="breadcrumbs">
                <ul>
                    <li><a href={route('clientes.index')}>Clientes</a></li>
                    <li className="is-active"><a href={route('clientes.index')}>Listagem</a></li>
                </ul>
            </nav>
            <div id="lista-clientes-div" className="mt-6">
                <div className="columns">
                    <div className="column">
                        <h4 className="subtitle is-4">Listagem de clientes</h4>
                    </div>
                    <div className="column">
                        <Link href={route('clientes.cadastro')} className="button is-primary is-pulled-right">Novo cliente</Link>
                    </div>
                </div>
                <table className="table is-striped is-hoverable is-fullwidth">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th className="has-text-centered">Data de Nascimento</th>
                            <th className="has-text-centered">Gênero</th>
                            <th className="has-text-centered">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.data.map((cliente) => (
                            <tr key={cliente.id}>
                                <td>{cliente.nome}</td>
                                <td className="has-text-centered">{cliente.data_nascimento}</td>
                                <td className="has-text-centered">{cliente.genero == 'MASCULINO' ? 'Masculino' : 'Feminino'}</td>
                                <td className="has-text-centered">
                                    <Link className="button is-link mr-2" href={route('clientes.cadastro', cliente)}>Editar</Link>
                                    <Link className="button is-danger" href="/">Excluir</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}
