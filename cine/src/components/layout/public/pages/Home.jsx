/*Primera pagina que el usuario podra visualizar*/

/*Importación de componentes de comps*/

//importación de hoja de estilos
import "../../../estilos/home.css";

//Importación de componentes
import Carrusel from "../../../comps/Carrusel";
import Estrenos from "../../../comps/Estrenos";
import Promociones from "../../../comps/Promociones";

const Home = () => {
    return (
        <>
            {/*Componente carrusel*/}
            <Carrusel/>
            {/*Componente estrenos  <Estrenos/>*/}

            {/*Componente promociones <Promociones/>
     */}
        </>
    );
};

export default Home;