import React, {useState, useEffect} from "react";

const Perfil = () =>{
    // contador likes
    const [contadorLikes, setContadorLikes] = useState(0)

    const handleContador = () =>{
        setContadorLikes(contadorLikes+1)
    }
    return(
        <>
            <h1>Hola desde Perfil</h1>
            <button type="button" onClick={handleContador}>Sumar Like</button>
            <p>Conteo de likes: {contadorLikes}</p>
        </>
    )
}

export default Perfil