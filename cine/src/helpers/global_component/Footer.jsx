/*Componente footer sera global y se podra visualizar en toda la web*/


/*Importación de la página de estilos*/
import "../estilos/footer.css"

/*Importación de iconos de font awesome*/
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitterSquare, faInstagram, faTiktok} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faLocationDot, faPhone} from "@fortawesome/free-solid-svg-icons";

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
                    <a href={"instagram.com"}>
                        <div className="instagram"><FontAwesomeIcon icon={faTiktok}/> Tiktok</div>
                    </a>

                </div>
            </div>
            <div className={"contenedor-info-copyright"}>
                <div className={"info-footer"}>
                    <p><FontAwesomeIcon icon={faLocationDot}/> Dirección</p>
                    <p><FontAwesomeIcon icon={faPhone}/> Teléfono</p>
                    <p><FontAwesomeIcon icon={faEnvelope}/> Email</p>
                </div>
                <div className={"footer-copyright"}>
                    <p> © 2024 Todos los derechos reservados </p>
                </div>
            </div>

        </footer>
    );
}

export default Footer;