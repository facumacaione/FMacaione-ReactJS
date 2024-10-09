import NavBar from './components/NavBar/NavBar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import './App.css'
import './components/Ejemplos/Contador'
import Contador from './components/Ejemplos/Contador'
import Listado from './components/ListadoProductos/Listado'

function App() {
  

  return (
    <div>
      <NavBar />
      <Listado />
      <ItemListContainer saludo={"Hola, proximamente estará mejor la pagina jeje"} />
      <Contador />
    </div>
  )
}

export default App
