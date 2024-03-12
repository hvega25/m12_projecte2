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
            <div className={"footer-redes"}>
                <div className="redes"><h2> Redes sociales </h2></div>
                <div className="twitter"><FontAwesomeIcon icon={faTwitterSquare}/> Twitter</div>
                <div className="instagram"><FontAwesomeIcon icon={faInstagram}/> Instagram</div>
            </div>
        </footer>
    );
}

export default Footer;