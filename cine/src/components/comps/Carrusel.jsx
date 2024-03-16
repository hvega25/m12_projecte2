/*Componente carrusel*/

//Importación necesarias
import "../estilos/carrusel-estilos.css"
import imagen from "../imagenes/lobo de wallstreet.jpg"


//Datos de prueba
const datos_prueba = [
    {
        id: 1,
        titulo: "Lorem ipsum",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" +
            ", sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        url: imagen,
    }, {
        id: 2,
        titulo: "Lorem ipsum",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" +
            ", sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        url: imagen,
    },
    {
        id: 3,
        titulo: "Lorem ipsum",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" +
            ", sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        url: imagen,
    },
    {
        id: 4,
        titulo: "Lorem ipsum",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" +
            ", sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        url: imagen,
    }
];
const Carrusel = () => {
    return (

        /**Contenedor principal del carrusel contiene texto e imagenes*/
        <div className={"contenedor-princial"}>
            <div className="titulo-carrusel">
                <h1>Esta semana</h1>
            </div>
            <div className="carrusel-img-boton">
                {/**Mapeo de datos del json de  prueba
                 Imprime el total del json cargado en este caso hay 4*/}
                {datos_prueba.map((item) => (
                   /**Crea el contenedor con todos sus componenente*/
                    <div key={item.id} className="contenedor-img-boton">
                        {/**Hace una un componente entre la imagen y el texto y el botón*/}
                        <div className="imagen-texto">
                            <img src={item.url} alt={"Imagen prueba"}/>
                            {/** Mini contenedor que une al titulo con la descripcion*/}
                            <div className="texto-pelicula">
                                <h3 className={"titulo-pelicula"}>{item.titulo}</h3>
                                <p className={"descripcion-pelicula"}> {item.descripcion} </p>
                            </div>
                            {/**Botón del componente*/}
                            <button className={"boton"}>Ver más</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Carrusel;