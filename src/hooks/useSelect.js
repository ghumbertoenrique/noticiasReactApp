import React, {useState} from 'react';

const useSelect = (stateInicial, opciones) => {

    //Inicializar valor del state
    const [state, actualizarState] = useState(stateInicial);

    const selectNoticias = () =>{
        return (
            <select
              className="browser-default"
              value={state}
              onChange={e => actualizarState(e.target.value)}
            >
                {opciones.map( opcion => (
                    <option key={opcion.value} value={opcion.value} > {opcion.label} </option>
                ))};

            </select>
        )
    }

    return [state, selectNoticias];
}
 
export default useSelect;