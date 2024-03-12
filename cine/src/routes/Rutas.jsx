/*Componente rutas de la web, si estas logeado o no te dejará ingresar a las páginas*/

import {BrowserRouter} from "react-router-dom";
import Header from "../helpers/global_component/Header";
import Footer from "../helpers/global_component/Footer";
import React from "react";
import RutasPublicas from "../components/layout/public/RutasPublicas";
import RutasPrivadas from "../components/layout/private/page/RutasPrivadas";

const Rutas = () => {

    /*Recordatorio para herson del futuro
     Crear el public layout y el private layout
    */

    //prueba de usuario autenticado
    const usuarioAutenticado = true;
    return (

        <BrowserRouter>
            <Header/>
            {/*"Condicional para saber que rutas tomar"*/}
            {usuarioAutenticado ? (
                /*Si el condicional es false se ejecutara esta ruta*/
                <>
                    <RutasPrivadas/>
                </>
                /*Si el condicional es true se ejecuta esta parte*/
            ) : (<RutasPublicas/>)


            }
            <Footer/>
        </BrowserRouter>

    );
};


export default Rutas;