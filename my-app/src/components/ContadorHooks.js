//useState sirve para crear y modificar la información
//de los estados del componente.
import React, {useState} from "react";

export default function ContadorHooks(Props) {
    const [contador, setContador] = useState(0);

    const sumar  = ()=> setContador(contador + 1 );
    const restar = ()=> setContador(contador - 1 );
    return(
        <>
            <h2>Hooks - useState</h2>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>
            <p>Contador de {Props.titulo}</p>
            <h3>{contador}</h3>
        </>
    );
}

ContadorHooks.defaultProps ={
    titulo: "Clicks"
}