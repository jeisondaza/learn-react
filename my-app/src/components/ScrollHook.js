//useEffect se usar para administrar el ciclo de vida
//de un componente.
import React, {useState, useEffect} from "react";

export default function ScrollHooks() {
    const [scrollY, setScrollY] = useState(0);

    //Con el arry vacio sólo se ejecuta al montarse = componentDidMount()
    useEffect(() =>{
        // console.log("Fase de montaje");
    }, [])
    
    //En el arry se ponen las varibles que estará vilando por cambian. = componentDidUpdate
    useEffect(() => {
        // console.log("Fase de actualización");
        const detectarScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', detectarScroll);

        return () => {
            window.removeEventListener('scroll', detectarScroll)
        };
    }, [scrollY]);
    
    //Retornando una función se hace realiza la fases desmontaje = componentWillUnmount()
    useEffect(() =>{
        return () => {
            // console.log("Fase de desmontaje");
        }
    })
    return(
        <>
            <h2>Hooks - UseEffect</h2>
            <p>Scroll Y del navegador: {scrollY}px</p>
        </>
    );
}