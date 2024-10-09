
const ContadorView = ( {contador, aumentarContador, disminuirContador} ) => {
    return (
        <div>
            <p>Contador: {contador} </p>
            <button onClick={aumentarContador}>+</button>
            <button onClick={disminuirContador}>-</button>
        </div>
    )
}

export default ContadorView