import React from 'react';
import logo from './logo.svg';
import './App.css';

import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizandoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import {EventosES6, EventosES7, MasSobreEventos} from './components/Eventos';
import Padre from './components/ComunicaciónComponentes';
import CicloVida from './components/CicloVida';
import AjaxApi from './components/AjaxApi';
import ContadorHooks from './components/ContadorHooks';
import ScrollHooks from './components/ScrollHook';
import RelojHooks from './components/RelojHooks';
import AjaxHooks from './components/AjaxHooks';
import CustomHooks from './components/CustomHooks';
import Referencias from './components/Referencias';
import Formularios from './components/Formularios';
import Estilos from './components/Estilos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </section>
        <section>
          <Componente msg="Hola desde componente"/>
          <hr/>
          <Propiedades
            string="String"
            number={20}
            boolean={true}
            array={[1,2,3]}
            object={{name: "Jeison", lastName: "Daza"}}
            funcion={(num) => num*num}
            reactElement={<i>Elemento de react</i>}
            reactComponent={<Componente msg="componente pasado como props"/>}
          />
          <hr/>
          <Estado/>
          <hr/>
          <RenderizandoCondicional/>
          <hr/>
          <RenderizadoElementos/>
          <hr/>
          <EventosES6/>
          <EventosES7/>
          <hr/>
          <MasSobreEventos/>
          <hr/>
          <Padre/>
          <hr/>
          <CicloVida />
          <hr/>
          <AjaxApi />
          <hr/>
          <ContadorHooks titulo="Seguidores"/>
          <hr/>
          <ScrollHooks />
          <hr/>
          <RelojHooks />
          <hr/>
          <AjaxHooks />
          <hr/>
          <CustomHooks />
          <hr/>
          <Referencias />
          <hr/>
          <Formularios />
          <hr/>
          <Estilos />
        </section>
      </header>
    </div>
  );
}

export default App;

