import Layout from "../../Shared/Layout"

export default function Index() {
    return (
        <Layout>
            <nav className="breadcrumb" aria-label="breadcrumbs">
                <ul>
                    <li><a href={route('clientes.index')}>Clientes</a></li>
                    <li className="is-active"><a href={route('clientes.index')}>Listagem</a></li>
                </ul>
            </nav>
            <div className="card mt-3">
                <div className="card-content">
                    <h4 className="subtitle is-4">Listagem de clientes</h4>
                    <hr />
                    <div className="table-container">
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
                </div>
            </div>
        </Layout>
    )
}
