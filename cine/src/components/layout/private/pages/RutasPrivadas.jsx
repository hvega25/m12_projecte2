/*Componente que contiene las rutas privadas y que solo
* un usuario ya registrado my logeado podra acceder*/

import {Route, Routes} from "react-router-dom";
import Perfil from "./page/Perfil";
import Home from "../../public/pages/Home";
import Salas from "../../public/pages/Salas";
import Login from "../../public/pages/Login";
import Cartelera from "../../public/pages/Cartelera";
import Promociones from "../../../comps/Promociones";
import Error from "../../../../helpers/global_component/Error"


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