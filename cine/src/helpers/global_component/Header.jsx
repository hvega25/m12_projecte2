//Componente Header este se podrá visualizar en cada página de la web

import React from "react";
import "../estilos/header.css"
import {Link} from "react-router-dom";


//Importaciones de componenentes necesarios

const Header = () => {
    return (
        <header className={"header_principal"}>
            <div className="contenedor_header">

                <div className="inicio">
                    <Link to={"/"}> Inicio</Link>
                </div>
                <div className="botonera">
                    <Link to={"/salas"}>Salas</Link>
                    <Link to={"/cartelera"}>Cartelera</Link>
                    <Link to={"/promociones"}>Promociones</Link>
                    <Link to={"/login"}>Login</Link>
                </div>
            </div>
        </header>

    );
}

export default Header;