import React, {Component} from "react";

//Componente desde función expresada
const Componente = (props) => <h2>{props.msg}</h2>

//Compenente desde función declarada.
// function Componente(props){
//     return <h2>{props.msg}</h2>
// }

//Componente desde clases
// class Componente extends Component{
//     render() {
//         return <h2>{this.props.msg}</h2>
//     }
// }

export default Componente;