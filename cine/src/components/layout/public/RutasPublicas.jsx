/*Componente que contiene las rutas si un usuario no esta registrado y logeado*/

/*Importacion de componentes*/
import {Route, Routes} from "react-router-dom";

import Error from "../../../helpers/global_component/Error"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cartelera from "./pages/Cartelera";
import Promociones from "./pages/Promociones";
import Salas from "./pages/Salas";
import Registro from "./pages/Registro";

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
            <Route path="/registro" element={<Registro/>}/>

            {/*En caso de que no coincida ninguna ruta nos llevará a la página de error*/}
            <Route path="*" element={<Error/>}></Route>
        </Routes>
    );
};


export default RutasPublicas;