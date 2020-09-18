import React from 'react';

function Cabecera (props){
    return(<header style= {
        { 
            
            textAlign:"center",
            backgroundColor:props.color,
            padding:"2em",
            
        }
            }>
        <h1>
            {props.titulo}
        </h1>
    </header>)
}
export default Cabecera;