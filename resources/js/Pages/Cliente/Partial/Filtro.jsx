import { useForm, usePage } from "@inertiajs/inertia-react";

export default function Filtro() {

    const { request } = usePage().props.flash;

    const { data, setData, get, reset } = useForm({
        nome: request.nome ? request.nome : '',
        data_nascimento: request.data_nascimento ? request.data_nascimento : ''
    });

    function filtrar(e) {
        e.preventDefault();
        get(route('clientes.index'));
    }

    function limparFiltro()
    {
        setData({nome: '', data_nascimento: ''});
    }

    return (
        <form onSubmit={filtrar}>
            <div className="columns">
                <div className="column is-3">
                    <div className="field">
                        <label className="label">Nome</label>
                        <div className="control">
                            <input type="text" className="input" value={data.nome} onChange={e => setData('nome', e.target.value)} placeholder="Insira um nome para pesquisar" />
                        </div>
                    </div>
                </div>
                <div className="column is-2">
                    <div className="field">
                        <label className="label">Data de nascimento</label>
                        <div className="control">
                            <input type="date" className="input" value={data.data_nascimento} onChange={e => setData('data_nascimento', e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="field">
                        <div className="control" style={{ marginTop: 33 }}>
                            <button type="submit" className="button">
                                <span className="icon">
                                    <em className="fa fa-search"></em>
                                </span>
                                <span>Filtrar</span>
                            </button>
                            <button className="button ml-2" onClick={limparFiltro}>
                                Limpar filtro
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
