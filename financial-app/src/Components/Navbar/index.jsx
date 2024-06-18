import { NavLink } from "react-router-dom"

const Nabar = () => {
    return (
        <nav className="flex justify-between items-center fixed z-10  top-0 w-full py-5 px-8 text-sm font-light">
            <NavLink className="font-semibold text-lg"
                to="/">
                Prueba Alexandra inicio
            </NavLink>
        </nav>
    )
}
export default Nabar