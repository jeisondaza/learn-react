import React from 'react';
import PropType from 'prop-types';

export default function Propiedades(props) {
    return (
        <div>
            <h2>Aprendiendo desde las {props.porDefecto}</h2>
            <ul>
                <li>{props.string}</li>
                <li>{props.number}</li>
                <li>{props.boolean ? "true" : "false"}</li>
                <li>{props.array.join(", ")}</li>
                <li>{`${props.object.name} - ${props.object.lastName}`}</li>
                <li>{props.array.map(props.funcion).join(", ")}</li>
                <li>{props.reactElement}</li>
                <li>{props.reactComponent}</li>
            </ul>
        </div>
    );
}

Propiedades.defaultProps = {
    porDefecto: "Las props"
}

Propiedades.propType = {
    number: PropType.number.isRequired
}