import React, { createContext } from "react";
export const WatchedContext = createContext([]);

function WatchedProvider({ children }) {
    let listaAssistidos = [];
    function verificaAssistido(id) {
        if (listaAssistidos.includes(id)) {
            return true;
        }
        else {
            return false;
        }
    }
    function addAssistido(id) {
        if (listaAssistidos.includes(id) == false) {
            listaAssistidos.push(id);
            retornaListaAssistidos();
        }
    }
    function removerAssistido(id) {
        if (listaAssistidos.includes(id) == true) {
            listaAssistidos = listaAssistidos.filter((item) => item !== id);
            retornaListaAssistidos();
        }
    }
    function retornaListaAssistidos(){

        return listaAssistidos;
    }

    return (
        <WatchedContext.Provider value={{ listaAssistidos, retornaListaAssistidos, verificaAssistido, addAssistido, removerAssistido }}>
            {children}
        </WatchedContext.Provider>
    );
}
export default WatchedProvider;