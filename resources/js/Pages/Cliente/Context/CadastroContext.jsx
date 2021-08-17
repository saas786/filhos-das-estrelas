import { createContext, useContext } from "react";
import { useForm } from "@inertiajs/inertia-react";

export const CadastroContext = createContext({});

export function CadastroContextProvider({ children }) {

    return (
        <CadastroContext.Provider value={{}}>
            {children}
        </CadastroContext.Provider>
    )
}

export const useCadastro = () => {
    return useContext(CadastroContext);
}
