import "./estilos/header.css"

//Componente Header este se podrá visualizar en cada página de la web
function Header (){
    return(
        <header id={"header_home"}>
            <ul>
                <li>Salas</li>
                <li>Cartelera</li>
                <li>Promociones</li>
                <li>Login</li>
            </ul>
        </header>
    );
}

export default Header;