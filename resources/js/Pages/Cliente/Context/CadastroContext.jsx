import { createContext, useContext } from "react";
import { useForm } from "@inertiajs/inertia-react";

export const CadastroContext = createContext({});

export function CadastroContextProvider({ children }) {

    const { data, setData, post, put, errors } = useForm({
        nome: '',
        data_nascimento: '',
        genero: '',
        motivo: '',
        cep: '',
        logradouro: '',
        bairro: '',
        cidade: '',
    });

    return (
        <CadastroContext.Provider value={{
            data,
            setData,
            post,
            put,
            errors
        }}>
            {children}
        </CadastroContext.Provider>
    )
}

export const useCadastro = () => {
    return useContext(CadastroContext);
}
