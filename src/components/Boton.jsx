import React from 'react';

function Boton(props){
    return (<button onClick={() => {alert("Tomar con moderacion.")}}>
        {props.texto}
    </button>);
}

export default Boton;