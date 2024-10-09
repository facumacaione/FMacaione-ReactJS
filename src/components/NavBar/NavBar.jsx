import CartWidget from "./CartWidget"
import Escudo from "./Escudo"
import TituloNav from "./TituloNav"
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className="navbar">
            <Escudo />
            <TituloNav />
            <CartWidget />
        </nav>
    )
}

export default NavBar