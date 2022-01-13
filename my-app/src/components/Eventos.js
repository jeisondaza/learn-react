import React, { Component } from 'react';

export class EventosES6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }

        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }

    sumar() {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    restar() {
        this.setState({
            counter: this.state.counter - 1
        });
    }

    render() {
        return (
            <div>
                <h2>Eventos en Componentes de clase ES6</h2>
                <h4>{this.state.counter}</h4>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
            </div>
        );
    }
}

//Properties initializer
export class EventosES7 extends Component {

    state = {
        counter: 0
    }

    //Arrow functions
    sumar = (e) => {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    restar = (e) => {
        this.setState({
            counter: this.state.counter - 1
        });
    }

    render() {
        return (
            <div>
                <h2>Eventos en Componentes de clase ES7</h2>
                <h4>{this.state.counter}</h4>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
            </div>
        );
    }
}

const Boton = ({myOnClick}) => <button onClick={myOnClick}>Botón hecho componente</button>

export class MasSobreEventos extends Component{
    
    handleClick = (e, mensaje) => {
        console.log(e);
        console.log(e.nativeEvent);
        console.log(e.target);
        console.log(mensaje);

    }

    render() {
        return (
            <div>
                <h2>Más Sobre eventos</h2>
                <button onClick={(e) => this.handleClick(e, "Parámetro desde evento")}>Saludar</button>
                {/* Evento personalizado */}
                {/* <Boton onClick={(e) => this.handleClick(e, "Parámetro desde evento")}/> No hace nada*/} 
                <Boton myOnClick={(e) => this.handleClick(e, "Parámetro desde evento")}/>
            </div>
        );
    }
}
