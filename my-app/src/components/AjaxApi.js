import React, { Component } from 'react';

function Pokemon(props) {
    return(
        <figure>
            <img src={props.avatar} alt={props.name} />
            <figcaption>{props.name}</figcaption>
        </figure>
    )
}

export default class AjaxApi extends Component{
    state = {
        pokemons: []
    }

    componentDidMount(){
        let url = 'https://pokeapi.co/api/v2/pokemon';
        fetch(url)
            .then(res => res.json())
            .then(json => {
                // console.log(json);
              
                json.results.forEach(element => {
                    fetch(element.url)
                        .then(res => res.json())
                        .then(json =>{
                            // console.log(json);
                            let pokemon = {
                                id: json.id,
                                name: json.name,
                                avatar: json.sprites.front_default
                            }
                            let pokemons = [...this.state.pokemons, pokemon]
                            this.setState({pokemons})
                            // console.log(this.state.pokemons);
                        })
                });
            })
    }

    render(){
        return (
            <>
                <h2>Peticiones asíncronas en componentes de clase</h2>
                <ul>
                    {this.state.pokemons.map(element => <Pokemon key={element.id} name={element.name} avatar={element.avatar} />)}
                </ul>
            </>
        )
    }
}