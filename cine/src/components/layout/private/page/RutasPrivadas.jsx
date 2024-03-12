/*Componente que contiene las rutas privadas y que solo
* un usuario ya registrado my logeado podra acceder*/

import {Route, Routes} from "react-router-dom";
import Perfil from "./Perfil";
import React from "react";
import Error from "../../../../helpers/global_component/Error";
import Home from "../../public/Home";
import Salas from "../../public/Salas";
import Login from "../../public/Login";
import Cartelera from "../../public/Cartelera";
import Promociones from "../../public/Promociones";

const RutasPrivadas = () => {
    return (
        <Routes>
            {/*Ruta privada que nos llevará a la página de perfil que debe de estar logeado y/o registrado*/}
            <Route path="/perfil" element={<Perfil/>}/>

            {/*Rutas públicas agregadas*/}
                  {/*Ruta pública que tendŕa acceso a la mayoria de las páginas*/}
            <Route path="/" index element={<Home/>}>
            </Route>
            <Route path="/salas" element={<Salas/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cartelera" element={<Cartelera/>}/>
            <Route path="/promociones" element={<Promociones/>}/>

            {/*En caso de que no coincida ninguna ruta nos llevará a la página de error*/}
            <Route path="*" element={<Error/>}></Route>
        </Routes>
    );
};


export default RutasPrivadas;