import NavBar from './components/NavBar/NavBar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import './App.css'
import Contador from './components/Ejemplos/Contador'

function App() {
  

  return (
    <div>
      <NavBar />
      <ItemListContainer saludo={"Hola Mundo"} />
      <ItemListContainer saludo={"Hola MAMA"} />
      <Contador />
    </div>
  )
}

export default App
