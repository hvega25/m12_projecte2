/*Componente promociones que muestra 4 productos o servicios*/

/*Importaciones*/
import "../estilos/promociones.css"

//Importacion de datos de prueba
import promo from "../comps/DatosPruebaJson/PromoPrueba"


const Promociones = () => {
    return (

        /*Contenedor principal */
        <div className={"promociones-principal"}>
            <div className="titulo-promo">
                <h1>Promociones</h1>
            </div>

            {/**Contenedor principal de la imagen con su boton*/}
            <div className={"promociones-contenedor-img-boton"}>
                {/**Inicia el mapaeo de los datos*/}
                {promo && promo.map((item) => (
                    /**Aqui se crea el poster */
                    <div key={item.id} className={"promo-imagen-boton"}>
                        {/*Contenedor para el facil manejo del titulo dentro de la imagen*/}
                        <div className={"contenedor-titulo-promo-poster"}>
                            <span className={"titulo"}> {item.titulo}</span>
                        </div>
                        {/*Imagen del poster*/}
                        <img src={item.url} alt={"imagen_prueba"}/>
                        {/*Boton del poster*/}
                        <button className={"boton-promo"}>Ver más</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Promociones;