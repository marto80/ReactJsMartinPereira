import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Tema } from "../../contexts/Tema";
import CartWidget from "../CartWidget";
import './estilos.css';

const NavBar = () => {

    const {themeColor, setThemeColor} = useContext(Tema)

    const handleChange = (event) => {
        setThemeColor(event.target.value)
    }

    console.log(themeColor);

    return (
        <ul>
            
            <li>
                <Link to="/category/human">Human</Link>
            </li>
            <select value={themeColor} onChange={handleChange}>
                <option value={'light'}>Light</option>
                <option value={'dark'}> Dark</option>
            </select>
            <li>
                <Link to="/category/alien">Alien</Link>
            </li>
            <li>
                <Link to="/">Contacto</Link>
            </li>
            <li>
                <Link to="/">Home</Link>
            </li>
            
            <CartWidget />
        </ul>
    );
};

export default NavBar;