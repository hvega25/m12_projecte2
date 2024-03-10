/*Componente página no encontrada*/
import React from "react";
/*Importación de elementos para la página*/
import "../estilos/error.css"

function Error() {
    return (
        <>
            {/*Cotenedor de la imagen*/}
            <div className="contenedor_imagen">
              <div className="imagen_fondo"></div>
                <div className="texto">
                    {/*Texto que se le muestra al usuario*/}
                    <h1> 404 no encontrado </h1>
                    <p> Nuestros servidores se estan tomando un descanso</p>
                </div>
            </div>

        </>

    );

}

export default Error;