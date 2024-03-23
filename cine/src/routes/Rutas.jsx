/*Componente rutas de la web, si estas logeado o no te dejará ingresar a las páginas*/

import {BrowserRouter} from "react-router-dom";
import Header from "../helpers/global_component/Header";
import RutasPrivadas from "../components/layout/private/pages/RutasPrivadas";
import RutasPublicas from "../components/layout/public/RutasPublicas";
import Footer from "../helpers/global_component/Footer";


const Rutas = () => {



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