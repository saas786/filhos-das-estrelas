import axios from 'axios';

export default function Endereco(props) {

    function limparFormularioCep() {
        //Limpa valores do formulário de cep.
        document.getElementById('rua').value = ("");
        document.getElementById('bairro').value = ("");
        document.getElementById('cidade').value = ("");
        document.getElementById('uf').value = ("");
        document.getElementById('ibge').value = ("");
    }

    function meuCallback(conteudo) {
        if (!("erro" in conteudo)) {
            //Atualiza os campos com os valores.
            setData('logradouro',conteudo.logradouro);
        } //end if.
        else {
            //CEP não Encontrado.
            limparFormularioCep();
            alert("CEP não encontrado.");
        }
    }

    function buscarEndereco(e) {

        var valor = e.target.value;

        //Nova variável "cep" somente com dígitos.
        var cep = valor.replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if (validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                setData('logradouro', '...');

                //Cria um elemento javascript.
                var script = document.createElement('script');

                //Sincroniza com o callback.
                script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meuCallback';

                //Insere script no documento e carrega o conteúdo.
                document.body.appendChild(script);

            } //end if.
            else {
                //cep é inválido.
                limparFormularioCep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limparFormularioCep();
        }
    }

    return (
        <div id="formulario-endereco">
            <h5 className="subtitle is-5 mt-6">Endereço</h5>
            <div className="columns">
                <div className="column is-2">
                    <div className="field">
                        <label className="label">CEP</label>
                        <div className="control">
                            <input type="text" className="input" onBlur={buscarEndereco} placeholder="Informe o CEP" />
                        </div>
                    </div>
                </div>
                <div className="column is-4">
                    <div className="field">
                        <label className="label">Logradouro</label>
                        <div className="control">
                            <input type="text" className="input" value={props.data.logradouro} onChange={e => setData('logradouro', e.target.value)} id="rua" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
