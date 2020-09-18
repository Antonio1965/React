import React from 'react';

function Lista(props){
    return (<div>
        <h2>Lita de {props.tipo} </h2>

        <ul>
        {
            props.lista.map((item)=>(
                     <li key={item}>{item}</li>
                 )
            )
        }
        </ul>
        {/*
        <ul>
            <li>Merlot</li>
            <li>Caberned Savignion</li>
            <li> Varitales</li>
            <li>Malvec</li>
            <li>Trapiche</li>
            <li>Zucardi</li>
            <li>Sabrero</li>
            <li>Linda</li>
        </ul>
        */}
    </div>);
}
export default Lista;