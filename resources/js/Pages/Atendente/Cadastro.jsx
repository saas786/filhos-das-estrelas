import Layout from "../../Shared/Layout";
import Notification from "../../Shared/Notification";

export default function Cadastro() {
    return (
        <Layout>
            <nav className="breadcrumb mt-5" aria-label="breadcrumbs">
                <ul>
                    <li><a href={route('atendentes.index')}>Atendentes</a></li>
                    <li className="is-active"><a href={route('atendentes.cadastro')}>Cadastro</a></li>
                </ul>
            </nav>
            <Notification />
            <div id="div-atendentes-cadastro" className="mt-6">
                <h4 className="subtitle is-4">Cadastro de atendente</h4>
                <hr />
                <form>

                </form>
            </div>
        </Layout>
    );
}
