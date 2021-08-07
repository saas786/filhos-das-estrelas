import InputMask from 'react-input-mask';

export default function Endereco(props) {
    return (
        <div id="formulario-endereco">
            <h5 className="subtitle is-5 mt-6">Endereço</h5>
            <div className="columns">
                <div className="column is-2">
                    <div className="field">
                        <label className="label">CEP</label>
                        <div className="control">
                            <InputMask mask="99999-999" className="input"/>
                        </div>
                    </div>
                </div>
                <div className="column is-4">
                    <div className="field">
                        <label className="label">Logradouro</label>
                        <div className="control">
                            <input type="text" className="input" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="column is-2">
                    <div className="field">
                        <label className="label">Cidade</label>
                        <div className="control">
                            <input type="text" className="input" />
                        </div>
                    </div>
                </div>
                <div className="column is-1">
                    <div className="field">
                        <label className="label">UF</label>
                        <div className="control">
                            <input type="text" className="input" />
                        </div>
                    </div>
                </div>
                <div className="column is-3">
                    <div className="field">
                        <label className="label">Bairro</label>
                        <div className="control">
                            <input type="text" className="input" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
