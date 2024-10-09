import { useState } from 'react'
import ContadorView from './ContadorView'
import "./Contador.css"

const Contador = () => {

const [contador, setContador] = useState(0)
const [toggle, setToggle] = useState(true)

    const aumentarContador = () => {
       // contador = contador + 1
        setContador (contador + 1) 
    }

    const disminuirContador = () => {
        if (contador > 0) {
            setContador (contador - 1)
        }
    };

    const alternarToggle = () => {
        setToggle (!toggle)
    }

    return (
        <>
            <div>
                <p>Valor Toggle: {toggle.toString() }</p>
                <button onClick={alternarToggle} className='boton-toggle'>Alternar valor del toggle</button>
            </div>
            <ContadorView contador={contador} 
            aumentarContador={aumentarContador} disminuirContador={disminuirContador} />
        </>
    )
}

export default Contador