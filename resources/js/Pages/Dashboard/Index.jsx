import Layout from '../../Shared/Layout';

export default function Index() {
    return (
        <Layout>
            <div>
                <div className="notification">
                    <h1>Seja bem vindo ao projeto Filhos das Estrelas</h1>
                </div>
                <div className="dashboard-content">
                    <div className="columns">
                        <div className="column">
                            <div className="notification is-primary">
                                Clientes
                            </div>
                        </div>
                        <div className="column">
                            <div className="notification is-success">
                                Atendimentos
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
