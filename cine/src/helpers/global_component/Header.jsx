//Componente Header este se podrá visualizar en cada página de la web

import React from "react";
import {Link} from "react-router-dom";
//Importación de hoja de estilos
import "../estilos/header.css"
/*Importación de íconos de fontawesome*/
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faHouse, faUser} from "@fortawesome/free-solid-svg-icons";


const Header = () => {
    return (
        /*Etiqueta header trabaja como el contenedor principal*/
        <header className={"header_principal"}>
            {/*Contenedor secundario este contiene los iconos y texto*/}
            <div className="contenedor_header">

                {/*Contenedor del logo o icono de la pagina*/}
                <div className="inicio">
                    <Link to={"/"}> <FontAwesomeIcon className={"inicioIcono"} icon={faHouse}/></Link>
                </div>
                {/*Contenedor del las paginas de la web*/}
                <div className="botonera">
                    <Link to={"/salas"}>Salas</Link>
                    <Link to={"/cartelera"}>Cartelera</Link>
                    <Link to={"/promociones"}>Promociones</Link>
                    <Link to={"/login"}><FontAwesomeIcon icon={faUser}/></Link>

                </div>

            </div>
            <div className={"contenedorMenuHamburguesa"}>
                <FontAwesomeIcon className={"menuHamburguesa"} icon={faBars}/>
            </div>
        </header>

    );
}

export default Header;