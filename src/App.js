import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import Componente from './components/Componente';
import Cabecera from './components/Cabecera';
import Lista from './components/Lista';
import Boton from './components/Boton';


var Subtitulo = ()=>(<h2>Vinos de primera calidad en sus sabores...</h2>)
var listaVinos = ["Merlot",
                  "Nina",
                  "Padrillos",
                  "Trapiche",
                  "Emilia",
                  "Zuccardi serie A",
                  "Sobrero Cabernet Franc"
                  ]


function App() {
  return (
    <div>
       <Cabecera titulo= "Hola Componente" color="#777777" />
       <Lista tipo="vinos"
       lista={listaVinos}></Lista>
        <Subtitulo/>
        <Boton texto="Clikeame"/>
    </div>
  );
}

export default App;
