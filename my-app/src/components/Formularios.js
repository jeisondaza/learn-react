import React, { useState } from 'react';

// export default function Formularios() {
//     const [nombre, setNombre] = useState("");
//     const [sabor, setSabor] = useState("");
//     const [lenguaje, setLenguaje] = useState("");
//     const [terminos, setTerminos] = useState(false);

//     const handleSubmit = e => {
//         e.preventDefault();
//         alert("El formulario se ha enviado")
//     }

//     return(
//         <>
//             <h2>Formularios en React</h2>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="name">Nombre</label>
//                 <input 
//                     type="text"
//                     id="name"
//                     name="nombre"
//                     value={nombre}
//                     onChange={(e) => setNombre(e.target.value)}
//                 />
//                 <p>Elije tu sabor de JS favorito</p>
//                 <input 
//                     type="radio" 
//                     id="vanilla" 
//                     name="sabor"
//                     value="vanilla"
//                     onChange={e => setSabor(e.target.value)}
//                     defaultChecked
//                 />
//                 <label htmlFor="vanilla">Vanilla</label>
//                 <input 
//                     type="radio" 
//                     id="react" 
//                     name="sabor"
//                     value="react"
//                     onChange={e => setSabor(e.target.value)}
//                 />
//                 <label htmlFor="react">React</label>
//                 <input 
//                     type="radio" 
//                     id="vue" 
//                     name="sabor"
//                     value="vue"
//                     onChange={e => setSabor(e.target.value)}
//                 />
//                 <label htmlFor="vue">Vue</label>
//                 <p>Elige tu lenguaje de programación favorito</p>
//                 <select 
//                     name="lenguaje" 
//                     onChange={e => setLenguaje(e.target.value)}
//                     defaultValue=""
//                     >
//                     <option value="">---</option>
//                     <option value="cs">C#</option>
//                     <option value="js">JavaScript</option>
//                     <option value="dart">Dart</option>
//                 </select>
//                 <br/>
//                 <input
//                     type="checkbox" 
//                     name="terminos"
//                     id="terminos"
//                     onChange={e => setTerminos(e.target.checked)}
//                 />
//                 <label htmlFor="terminos">Acepto términos y condiciones</label>
//                 <br/>
//                 <input type="submit" value="Enviar" />
//             </form>
//         </>
//     ); 
// }
export default function Formularios() {
    const [form, setForm] = useState({});

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }
    const handleChecked = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.checked,
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        alert("El formulario se ha enviado")
    }

    return(
        <>
            <h2>Formularios en React</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input 
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                />
                <p>Elije tu sabor de JS favorito</p>
                <input 
                    type="radio" 
                    id="vanilla" 
                    name="sabor"
                    value="vanilla"
                    defaultChecked
                    onChange={handleChange}
                />
                <label htmlFor="vanilla">Vanilla</label>
                <input 
                    type="radio" 
                    id="react" 
                    name="sabor"
                    value="react"
                    onChange={handleChange}
                />
                <label htmlFor="react">React</label>
                <input 
                    type="radio" 
                    id="vue" 
                    name="sabor"
                    value="vue"
                    onChange={handleChange}
                    />
                <label htmlFor="vue">Vue</label>
                <p>Elige tu lenguaje de programación favorito</p>
                <select 
                    name="lenguaje" 
                    defaultValue=""
                    onChange={handleChange}
                    >
                    <option value="">---</option>
                    <option value="cs">C#</option>
                    <option value="js">JavaScript</option>
                    <option value="dart">Dart</option>
                </select>
                <br/>
                <input
                    type="checkbox" 
                    name="terminos"
                    id="terminos"
                    onChange={handleChecked}
                />
                <label htmlFor="terminos">Acepto términos y condiciones</label>
                <br/>
                <input type="submit" value="Enviar" />
            </form>
        </>
    ); 
}
