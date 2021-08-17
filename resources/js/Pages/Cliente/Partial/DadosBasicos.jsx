export default function DadosBasicos() {
    return (
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
    )
}
