import {Route, Routes} from "react-router-dom";
import Perfil from "./Perfil";
import React from "react";

const RutasPrivadas = () => {
    return (
        <Routes>
            {/*Ruta privada que nos llevará a la página de perfil que debe de estar logeado y/o registrado*/}
            <Route path="/perfil" element={<Perfil/>}/>
        </Routes>
    );
};


export default RutasPrivadas;