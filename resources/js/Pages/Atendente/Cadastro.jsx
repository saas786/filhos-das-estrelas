import Layout from "../../Shared/Layout";
import Notification from "../../Shared/Notification";
import { useForm, usePage } from "@inertiajs/inertia-react";

export default function Cadastro() {
    const { atendente } = usePage().props;

    const { data, setData, post, put, errors } = useForm({
        nome: atendente ? atendente.nome : '',
        genero: atendente ? atendente.genero : '',
        data_nascimento: atendente ? atendente.data_nascimento : '',
    })

    function submit(e) {
        e.preventDefault();

        atendente ? put(route('atendentes.editar', atendente)) : post(route('atendentes.salvar'));
    }

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
                <form onSubmit={submit}>
                    <div id="div-formulario-dados-basicos">
                        <h5 className="subtitle is-5">Dados básicos</h5>
                        <div className="columns">
                            <div className="column is-4">
                                <div className="field">
                                    <label className="label">Nome</label>
                                    <div className="control">
                                        <input type="text"
                                            className="input"
                                            placeholder="Insira o nome do atendente"
                                            value={data.nome}
                                            onChange={e => setData('nome', e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-3">
                                <div className="field">
                                    <label className="label">Data nascimento</label>
                                    <div className="control">
                                        <input type="date" className="input" value={data.data_nascimento} onChange={e => setData('data_nascimento', e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="column is-3">
                                <div className="field">
                                    <label className="label">Gênero</label>
                                    <div className="select">
                                        <select value={data.genero} onChange={e => setData('genero', e.target.value)}>
                                            <option value="">Selecione</option>
                                            <option value="FEMININO">Feminino</option>
                                            <option value="MASCULINO">Masculino</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns mt-2">
                        <div className="column">
                            <button type="submit" className="button is-link">Salvar</button>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    );
}
