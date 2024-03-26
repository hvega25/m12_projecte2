/*Componente rutas de la web, si estas logeado o no te dejará ingresar a las páginas*/

import {BrowserRouter} from "react-router-dom";
//Importación de componentes que se podran ver en todas la paginas
import Header from "../helpers/global_component/Header";
import Footer from "../helpers/global_component/Footer";
//Componentes de rutas que segun si estas logeado o no te dirige a determinadas paginas
import RutasPrivadas from "../components/layout/private/pages/RutasPrivadas";
import RutasPublicas from "../components/layout/public/RutasPublicas";



const Rutas = () => {



    //prueba de usuario autenticado
    const usuarioAutenticado = true;
    return (

        <BrowserRouter>
            <Header/>
            {/*"Condicional para saber que rutas tomar"*/}
            {usuarioAutenticado ? (
                /*Si el condicional es true se ejecutara esta ruta*/
                <>
                    <RutasPrivadas/>
                </>
                /*Si el condicional es false se ejecuta esta parte*/
            ) : (<RutasPublicas/>)


            }
            <Footer/>
        </BrowserRouter>

    );
};


export default Rutas;