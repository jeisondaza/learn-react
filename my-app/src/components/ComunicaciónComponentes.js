import React, { Component } from 'react';

export default class Padre extends Component {
    state = {
        contador: 0
    }

    incrementar = (e) => {
        this.setState({
                contador: this.state.contador + 1
            })
    }

    render() { 
        return (
            < >
                <h2>Comunicaión entre compomentes</h2>
                <h4>{this.state.contador}</h4>
                <Hijo mensaje="Mensaje para el hijo #1"/>
                <Hijo incrementar={this.incrementar} mensaje="Mensaje para el hijo #2"/>
            </>
        );
    }
}


    function Hijo(props) {
        return(
            < >
                <h3>{props.mensaje}</h3>
                <button onClick={props.incrementar}>+</button>  
            </>
        );
    }