import axios from "axios";
import Layout from "../../Shared/Layout"
import InputMask from 'react-input-mask';
import Notification from "../../Shared/Notification";
import { useForm, usePage } from "@inertiajs/inertia-react"

export default function Cadastro() {
    const { cliente, endereco } = usePage().props;

    const { data, setData, post, put, errors } = useForm({
        nome: cliente ? cliente.nome : '',
        data_nascimento: cliente ? cliente.data_nascimento : '',
        genero: cliente ? cliente.genero : '',
        cep: endereco ? endereco.cep : '',
        logradouro: endereco ? endereco.logradouro : '',
        bairro: endereco ? endereco.bairro : '',
        cidade: endereco ? endereco.cidade : '',
        uf: endereco ? endereco.uf : '',
        numero: endereco ? endereco.numero : ''
    });

    // function buscarCep(e) {
    //     axios.get("https://viacep.com.br/ws/" + e.target.value + "/json/").then(function (endereco) {
    //         let enderecoData = endereco.data;

    //         if (enderecoData.erro) {
    //             alert('Endereço não encontrado!');
    //         } else {
    //             preencherFormularioEndereco(enderecoData);
    //         }
    //     })
    // }

    // function preencherFormularioEndereco(enderecoData) {
    //     desabilitarFormularioEndereco();
    // }

    // function desabilitarFormularioEndereco() {
    //     document.getElementById('logradouro').disabled = true;
    //     document.getElementById('bairro').disabled = true;
    //     document.getElementById('cidade').disabled = true;
    //     document.getElementById('uf').disabled = true;
    // }

    function submit(e) {
        e.preventDefault();

        cliente ? put(route('clientes.editar', cliente)) : post(route('clientes.salvar'));
    }

    return (
        <Layout>
            <nav className="breadcrumb mt-5" aria-label="breadcrumbs">
                <ul>
                    <li><a href={route('clientes.index')}>Clientes</a></li>
                    <li className="is-active"><a href={route('clientes.cadastro')}>Cadastro</a></li>
                </ul>
            </nav>
            <Notification />
            <div id="cadastro-clientes-div" className="mt-6">
                <h4 className="subtitle is-4">Cadastro de cliente</h4>
                <hr />
                <form onSubmit={submit}>
                    <div id="formulario-dados-basicos">
                        <h5 className="subtitle is-5">Dados básicos</h5>
                        <div className="columns">
                            <div className="column is-4">
                                <div className="field">
                                    <label className="label">Nome</label>
                                    <div className="control">
                                        <input type="text"
                                            className={errors.nome ? 'input is-danger' : 'input'}
                                            placeholder="Insira o nome do cliente"
                                            value={data.nome}
                                            onChange={e => setData('nome', e.target.value)} />
                                    </div>
                                    {errors.nome && <span className="help is-danger">{errors.nome}</span>}
                                </div>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-3">
                                <div className="field">
                                    <label className="label">Data de nascimento</label>
                                    <div className="control">
                                        <input type="date"
                                            className="input"
                                            value={data.data_nascimento}
                                            onChange={e => setData('data_nascimento', e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="column is-3">
                                <div className="field">
                                    <label className="label">Gênero</label>
                                    <div className={errors.genero ? 'select is-danger' : 'select'}>
                                        <select value={data.genero} onChange={e => setData('genero', e.target.value)}>
                                            <option value="">Selecione</option>
                                            <option value="FEMININO">Feminino</option>
                                            <option value="MASCULINO">Masculino</option>
                                        </select>
                                    </div>
                                    {errors.genero && <span className="help is-danger">{errors.genero}</span>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="formulario-endereco">
                        <h5 className="subtitle is-5 mt-6">Endereço</h5>
                        <div className="columns">
                            <div className="column is-2">
                                <div className="field">
                                    <label className="label">CEP</label>
                                    <div className="control">
                                        <InputMask mask="99999-999" className="input" value={data.cep} onChange={e => setData('cep', e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="column is-4">
                                <div className="field">
                                    <label className="label">Logradouro</label>
                                    <div className="control">
                                        <input type="text" className="input" id="logradouro" value={data.logradouro} onChange={e => setData('logradouro', e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-1">
                                <div className="field">
                                    <label className="label">UF</label>
                                    <div className="control">
                                        <input type="text" className="input" id="uf" value={data.uf} onChange={e => setData('uf', e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="column is-2">
                                <div className="field">
                                    <label className="label">Cidade</label>
                                    <div className="control">
                                        <input type="text" className="input" id="cidade" value={data.cidade} onChange={e => setData('cidade', e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="column is-2">
                                <div className="field">
                                    <label className="label">Bairro</label>
                                    <div className="control">
                                        <input type="text" className="input" id="bairro" value={data.bairro} onChange={e => setData('bairro', e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="column is-1">
                                <div className="field">
                                    <label className="label">Numero</label>
                                    <div className="control">
                                        <input type="number" className="input" id="numero" value={data.numero} onChange={e => setData('numero', e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <button type="submit" className="button is-primary">Salvar</button>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    )
}
