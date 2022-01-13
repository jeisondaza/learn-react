import React, { useState, useEffect } from 'react';

function Pokemon({ avatar, name }) {
    return (
        <figure>
            <img src={avatar} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
    )
}

export default function AjaxHooks() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const getPokemons = async (url) => {
            let res = await fetch(url),
                json = await res.json();
            // console.log(json);
            json.results.forEach(async element => {
                let res = await fetch(element.url),
                    json = await res.json(),
                    pokemon = {
                        id: json.id,
                        name: json.name,
                        avatar: json.sprites.front_default
                    }
                setPokemons((pokemons) => [...pokemons, pokemon]);
            });
        }

        getPokemons('https://pokeapi.co/api/v2/pokemon');
    }, []);

    return (
        <>
            <h2>Peticiones asíncronas con Hooks</h2>
            <ul>
                {pokemons.map(element => <Pokemon key={element.id} name={element.name} avatar={element.avatar} />)}
            </ul>
        </>
    )
}