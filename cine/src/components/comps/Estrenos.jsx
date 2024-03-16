/*Componente próximos estrenos que mostrara 4 peliculas a estrenar*/

/*Importación estilos estrenos*/
import "../estilos/estrenos.css"

/*Importacion de datos de prueba*/
import datos_prueba from "./Datos_prueba";

const Estrenos = () => {
    return (

        /**Contenedor principal de todos los componentes*/
        <div className={"contenedor-estrenos"}>
            <div className="estrenos">
                <h1>Próximos Estrenos</h1>
            </div>
            {/*Mapeo de los datos de prueba el separador es para poner el titulo arriba y el grupo de estrenos abajo*/}
            <div className="separador">
                {/*estrenos grupos es un pequeño contenedor centrado con un color de fondo*/}
                <div className="estrenos_grupos">

                    {/*Empieza a crear los poster segun los que obtenga del json*/}
                    {datos_prueba && datos_prueba.map((item) => (
                        /**Cada vez que itere creara un nuevo grupo */
                        <div key={item.id} className="poster">
                            <div className="posterContenedor">
                                {/*Ingresar la imagen obtenida del json*/}
                                <img src={item.url} alt={"imagen"}/>
                                {/*Ingresar el texto obtenido del json*/}
                                <div className={"estrenos_tituloTexto"}>
                                    <div className={"titulo"}><span> {item.titulo}</span></div>
                                    <div className={"Texto"}><p>{item.descripcion}</p></div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default Estrenos;