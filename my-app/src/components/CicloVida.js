import React, { Component } from 'react';

class Reloj extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return <h3>{this.props.hora}</h3>
    }
    componentWillUnmount(){
        console.log(3, "El componente ha sido eliminado del DOM");
    }
}

export default class CicloVida extends Component{
    constructor(props){
        super(props);
        // console.log(0, "El componente se inicializa, pero no está en el DOM");
        this.state = {
            hora: new Date().toLocaleTimeString(),
            visible: false
        }
        this.temp = null;
    }

    componentDidMount(){
        // console.log(1, "El componente se conectó al DOM");
    }
    componentDidUpdate(prevProps, prevState){
        // console.log(2, "El estado del componente ha cambiado");
        console.log(prevProps);
        console.log(prevState);
    }

    titac = () => {
        this.temp = setInterval(() => {
            this.setState({
                hora: new Date().toLocaleTimeString(),
            })
        }, 1000);
    }
    iniciar = () => {
        this.titac();
        this.setState({
            visible: true
        })
    }
    detener = () => {
        clearInterval(this.temp);
        this.setState({
            visible: false
        })
    }

    render(){
        // console.log(4, "Renderizado del componente");
        return(
            <>
                <h2>Ciclo de vida de los componentes de Clase</h2>
                {this.state.visible && <Reloj hora={this.state.hora} />}
                <button onClick={this.iniciar}>Iniciar</button>
                <button onClick={this.detener}>Detener</button>
            </>
        ) 
    }
}
