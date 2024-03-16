/*Primera pagina que el usuario podra visualizar*/

/*Importación de librerias */
import Carrusel from "../../comps/Carrusel";
import Estrenos from "../../comps/Estrenos"


import "../../estilos/home.css"

const Home = () => {
    return (
        <>
            {/*Componente carrusel*/}
            <Carrusel/>
            {/*Componente Estrenos*/}
            <Estrenos/>
        </>

    )
        ;
}

export default Home;