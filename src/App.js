import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaNoticias from './components/ListaNoticias';

function App() {

  //Categoria

  const [categoria, guardarCategoria]= useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect( () => {

    const consultarApi = async () =>{   
    const apiKey = '8e38ec0216174a3e8ea31520a166a42b';
    const url = `https://newsapi.org/v2/top-headlines?country=ve&category=${categoria}&apiKey=${apiKey}`;

    const respuesta = await fetch(url);
    const noticias = await respuesta.json();
    guardarNoticias(noticias.articles);
    }
    consultarApi();
  },[categoria] );

  return (
    <Fragment>
      <Header titulo="Buscador de noticias" />

      <div className="container white">
        <Formulario 
          guardarCategoria={guardarCategoria}
        />

        <ListaNoticias noticias={noticias} />

      </div>

    </Fragment>
  );
}

export default App;
