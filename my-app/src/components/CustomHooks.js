import React from 'react';
import { useFetch } from '../hooks/useFetch';

export default function CustomHooks() {
    // console.log(useFetch());
    let url = 'https://pokeapi.co/api/v2/pokemon';
    let { data, isPengind, error } = useFetch(url);

    return (
        <>
            <h2>Hooks Personalizados</h2>
            <h3>{JSON.stringify(isPengind)}</h3>
            <h3>
                <mark>{JSON.stringify(error)}</mark>
            </h3>

            <pre style={{ whiteSpace: "pre-wrap" }}>
                <code>{JSON.stringify(data)}</code>
            </pre>

        </>
    );
}