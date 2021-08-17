import Layout from '../../Shared/Layout';
import { Link } from '@inertiajs/inertia-react';
import Notification from '../../Shared/Notification';

export default function Index() {
    return (
        <Layout>
            <nav className="breadcrumb mt-5" aria-label="breadcrumbs">
                <ul>
                    <li><a href={route('servicos.index')}>Serviços</a></li>
                    <li className="is-active"><a href={route('servicos.index')}>Listagem</a></li>
                </ul>
            </nav>
            <Notification/>
            <div id="lista-servicos-div">
                <div className="columns">
                    <div className="column">
                        <h4 className="subtitle is-4">Listagem de serviços</h4>
                    </div>
                    <div className="column">
                        <Link href="#" className="button is-link is-pulled-right">Novo serviço</Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
