import axios from "axios";
import { useEffect } from "react";
import Layout from "../../Shared/Layout"
import InputMask from 'react-input-mask';
import Notification from "../../Shared/Notification";
import { useForm, usePage } from "@inertiajs/inertia-react"

export default function Cadastro() {

    const { cliente, endereco, contato } = usePage().props;

    const { data, setData, post, put, errors } = useForm({
        nome: cliente ? cliente.nome : '',
        data_nascimento: cliente ? cliente.data_nascimento : '',
        genero: cliente ? cliente.genero : '',
        motivo: cliente ? cliente.motivo : '',
        cep: endereco ? endereco.cep : '',
        logradouro: endereco ? endereco.logradouro : '',
        bairro: endereco ? endereco.bairro : '',
        cidade: endereco ? endereco.cidade : '',
        uf: endereco ? endereco.uf : '',
        numero: endereco ? endereco.numero : '',
        telefone_fixo: contato && contato.telefone_fixo ? contato.telefone_fixo : '',
        telefone_celular: contato && contato.telefone_celular ? contato.telefone_celular : '',
        email: contato && contato.email ? contato.email : ''
    });

    function submit(e) {
        e.preventDefault();

        cliente ? put(route('clientes.editar', cliente)) : post(route('clientes.salvar'));
    }

    useEffect(() => {
        let inputCep = document.getElementById('cep');
        inputCep.addEventListener('blur', function (e) {
            buscarEndereco(e);
        });
    });

    // TODO: Verificar a implementação do preenchimento do formulário de endereço
    function buscarEndereco(e) {
        let endereco = axios.get('https://viacep.com.br/ws/' + e.target.value + '/json/').then((endereco) => {
            let enderecoData = endereco.data;
            setData(data => ({
                ...data,
                logradouro: enderecoData.logradouro,
                bairro: enderecoData.bairro,
                cidade: enderecoData.localidade,
                uf: enderecoData.uf
            }));
            bloquearCamposEndereco();
        });
    }

    function bloquearCamposEndereco() {
        document.getElementById('logradouro').disabled = true;
        document.getElementById('bairro').disabled = true;
        document.getElementById('cidade').disabled = true;
        document.getElementById('uf').disabled = true;
    }

    return (
        <Layout>
            <nav className="breadcrumb mt-5" aria-label="breadcrumbs">
                <ul>
                    <li><a href={route('clientes.index')}>Clientes</a></li>
                    <li className="is-active">
                        <a href={cliente ? route('clientes.cadastro', cliente) : route('clientes.cadastro')}>{cliente ? cliente.nome : 'Cadastro'}</a>
                    </li>
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
                                        <InputMask mask="99999-999"
                                            id="cep"
                                            className="input"
                                            value={data.cep}
                                            onChange={e => setData('cep', e.target.value)} />
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
                                        <input type="number"
                                            className={errors.numero ? 'input is-danger' : 'input'}
                                            id="numero"
                                            value={data.numero}
                                            maxLength="2"
                                            onChange={e => setData('numero', e.target.value)} />
                                        {errors.numero && <span className="help is-danger">{errors.numero}</span>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="formulario-contato">
                        <h5 className="subtitle is-5 mt-6">Contato</h5>
                        <div className="columns">
                            <div className="column is-2">
                                <div className="field">
                                    <label className="label">Telefone fixo</label>
                                    <div className="control">
                                        <InputMask mask="(99) 9999-9999" className="input" id="telefone_fixo" value={data.telefone_fixo} onChange={e => setData('telefone_fixo', e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="column is-2">
                                <div className="field">
                                    <label className="label">Telefone celular</label>
                                    <div className="control">
                                        <InputMask mask="(99) 99999-9999" className="input" value={data.telefone_celular} onChange={e => setData('telefone_celular', e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="column is-3">
                                <div className="field">
                                    <label className="label">Email</label>
                                    <div className="control">
                                        <input type="email" className="input" value={data.email} onChange={e => setData('email', e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="formulario-motivo">
                        <h5 className="subtitle is-5 mt-6">Motivo</h5>
                        <div className="columns">
                            <div className="column is-7">
                                <textarea className="textarea"
                                    rows="10"
                                    placeholder="Informe o motivo pelo qual o cliente procurou os filhos das estrelas"
                                    value={data.motivo}
                                    onChange={e => setData('motivo', e.target.value)} />
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
    )
}
