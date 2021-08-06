import Layout from "../../Shared/Layout"
import Endereco from "../../Shared/Cadastros/Endereco"
import { useForm } from "@inertiajs/inertia-react"

export default function Cadastro() {
    const {data, setData, post, processing, errors} = useForm({
        cep: '',
        logradouro: ''
    });

    return (
        <Layout>
            <nav className="breadcrumb mt-5" aria-label="breadcrumbs">
                <ul>
                    <li><a href={route('clientes.index')}>Clientes</a></li>
                    <li className="is-active"><a href={route('clientes.cadastro')}>Cadastro</a></li>
                </ul>
            </nav>
            <div id="cadastro-clientes-div" className="mt-6">
                <h4 className="subtitle is-4">Cadastro de cliente</h4>
                <hr />
                <form action="">
                    <div id="formulario-dados-basicos">
                        <h5 className="subtitle is-5">Dados básicos</h5>
                        <div className="columns">
                            <div className="column is-4">
                                <div className="field">
                                    <label className="label">Nome</label>
                                    <div className="control">
                                        <input type="email" className="input" placeholder="Insira o nome do cliente" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-3">
                                <div className="field">
                                    <label className="label">Data de nascimento</label>
                                    <div className="control">
                                        <input type="date" className="input" />
                                    </div>
                                </div>
                            </div>
                            <div className="column is-3">
                                <div className="field">
                                    <label className="label">Gênero</label>
                                    <div className="select">
                                        <select>
                                            <option value="">Selecione</option>
                                            <option value="FEMININO">Feminino</option>
                                            <option value="MASCULINO">Masculino</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Endereco data={data}/>
                </form>
            </div>
        </Layout>
    )
}
