/*Primera pagina que el usuario podra visualizar*/

/*Importación de componentes de comps*/
import Carrusel from "../../comps/Carrusel";
import Estrenos from "../../comps/Estrenos"
import Promociones from "../../comps/Promociones";

import "../../estilos/home.css";

const Home = () => {
    return (
        <>
            {/*Componente carrusel*/}
            <Carrusel/>
            {/*Componente estrenos*/}
            <Estrenos/>
            {/*Componente promociones*/}
            <Promociones/>
        </>
    );
};

export default Home;