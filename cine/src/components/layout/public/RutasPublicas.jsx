/*Componente que contiene las rutas si un usuario no esta registrado y logeado*/

/*Importacion de componentes*/
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import Salas from "./Salas";
import Login from "./Login";
import Cartelera from "./Cartelera";
import Promociones from "./Promociones";
import Error from "../../../helpers/global_component/Error";
import React from "react";


const RutasPublicas = () => {
    return (
        <Routes>
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


export default RutasPublicas;