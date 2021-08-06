import Layout from "../../Shared/Layout"

export default function Index() {
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
                        <a href={route('clientes.cadastro')} className="button is-primary is-pulled-right">Novo cliente</a>
                    </div>
                </div>
                <table className="table is-striped is-fullwidth">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Data de Nascimento</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </Layout>
    )
}
