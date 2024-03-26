/*Primera pagina que el usuario podra visualizar*/

/*Importación de componentes de comps*/

//importación de hoja de estilos
import "../../../estilos/home.css";

//Importación de componentes
import Carrusel from "../../../comps/Carrusel";
import Estrenos from "../../../comps/Estrenos";
import PromocionesComp from "../../../comps/PromocionesComp";

const Home = () => {
    return (
        <>
            {/*Componente carrusel*/}

            {/*Componente estrenos  */}
            <Estrenos/>
            {/*Componente promociones */}
            <PromocionesComp/>
        </>
    );
};

export default Home;