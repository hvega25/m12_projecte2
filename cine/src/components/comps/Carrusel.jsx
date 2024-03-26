/*Componente carrusel*/

/*RECORDAR PARA HERSON DEL FUTURO COPIAR ANTEORIOR COMPONENTE
* Y USARLO COMO SEGUNDA OPCION Y CAMBIAR ASPECTO CON RELACION A LA PANTALLA*/
//Importación necesarias
import "../estilos/carrusel-estilos.css";
//importación básica antes de hacer tener una api
import datos_prueba from "../comps/DatosPruebaJson/Datos_prueba";

/*Importación de librerias de terceros*/
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carrusel = () => {


    //Ajsutes para el componente de tercero en el carrusel
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,

    };

    //Arreglo donde se ingresa los posters creados
    const carruselItems = [];
    //Recorrido del json y su carga al arreglo
    datos_prueba.forEach((item) => {
        carruselItems.push(
            <div key={item.id} className="contenedor-img-boton">
                <div className="imagen-texto">
                    <img className={"imagenPoster"} src={item.url} alt={"Imagen prueba"}/>
                    <div className="texto-pelicula">
                        <h3 className={"titulo-pelicula"}>{item.titulo}</h3>
                        <p className={"descripcion-pelicula"}>{item.descripcion}</p>
                    </div>
                    <button className={"boton"}>Ver más</button>
                </div>
            </div>
        );
    });


    return (
        <div className={"contenedor-principal"}>
            <div className="titulo-carrusel">
                <h1>Esta semana</h1>
            </div>
            <div className="carrusel-img-boton">
                <Slider {...settings}>
                    {carruselItems}
                </Slider>
            </div>
        </div>

    );
}

export default Carrusel;