import React from 'react';
import PropTypes from 'prop-types'
import useSelect from '../hooks/useSelect';
import styles from './Formulario.module.css';


const Formulario = ({guardarCategoria}) => {

    const OPCIONES = [
        {value:'general', label:'general'},
        {value:'business', label:'Negocios'},
        {value:'entertainment', label:'Entretenimiento'},
        {value:'health', label:'Salud'},
        {value:'science', label:'Ciencia'},
        {value:'sports', label:'Deportes'},
        {value:'technology', label:'Tecnologia'}
    ];

    // custom hook
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

    //submit al form, pasar la categoria al app.js
    const buscarNoticias = e =>{
        e.preventDefault();
        guardarCategoria(categoria);
    }

    return ( 
        <div className={` ${styles.buscador} row `} >
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading} >Encuentra noticias por categorias</h2>
                    <SelectNoticias 

                     />
                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className={`btn-large amber darken-2 ${styles.btn_block}`}
                            value="Buscar"
                            />  
                    </div>
                </form>
            </div>
        </div>
     );
}

Formulario.propTypes = {
    guardarCategoria : PropTypes.func.isRequired
} 
 
export default Formulario;