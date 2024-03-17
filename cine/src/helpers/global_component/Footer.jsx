/*Componente footer sera global y se podra visualizar en toda la web*/


/*Importación de la página de estilos*/
import "../estilos/footer.css"

/*Importación de iconos de font awesome*/
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitterSquare, faInstagram} from "@fortawesome/free-brands-svg-icons";

//Componente footer este ira en cada página de la web
const Footer = () => {
    return (
        <footer className={"contenedor-footer"}>

            <div className={"contenedor-titulo-redes"}>
                <h2> Redes sociales </h2>
                <div className={"footer-redes"}>
                    <a href={"twitter.com"}>
                        <div className="twitter"><FontAwesomeIcon icon={faTwitterSquare}/> Twitter</div>
                    </a>
                    <a href={"instagram.com"}>
                        <div className="instagram"><FontAwesomeIcon icon={faInstagram}/> Instagram</div>
                    </a>

                </div>
            </div>
            <div className={"contenedor-info-copyright"}>
                <div className={"info-footer"}>
                    <p>Dirección</p>
                    <p>Teléfono</p>
                    <p>Email</p>
                </div>
                <div className={"footer-copyright"}>
                    <p> © 2024 Todos los derechos reservados </p>
                </div>
            </div>

        </footer>
    );
}

export default Footer;