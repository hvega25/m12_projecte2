/*Página Login que contiene al componente Login*/

//Importación de librerias
import {Link} from "react-router-dom";

/*Importación de  la hoja de estilos*/
import "../estilos/login.css"

const LoginComp = () => {


    //Pequeña funcion que renderiza el formulario para hacer mas legible el codigo
    const RenderizarFormulario = () => {
        return (
            <form>
                {/*Contenedor de los input para escribir el usuario y la contraseña*/}
                <div className={"contenedor-usuario-contraseña"}>

                    {/*Contenedor del label e input de usuario*/}
                    <div className={"formulario-usuario"}>
                        <div className={"form-us"}>
                            <span> Usuario </span>
                        </div>
                        <div className={"input-usuario"}>
                            <input type={"text"} className={"input-user"} placeholder={"Ingrese su usuario"}/>
                        </div>
                    </div>
                    {/*Contenedor del label e input de contraseña*/}
                    <div className={"formulario-contraseña"}>
                        <div className={"form-pass"}>
                            <span> Contraseña </span>
                        </div>
                        <div className={"input-pass"}>
                            <input className={"input-contraseña"} type={"password"}
                                   placeholder={"Ingrese su contraseña"}/>
                        </div>
                    </div>
                </div>

                {/*Botones para acceder al perfil o registrarte*/}
                <div className={"formularioBotonera"}>
                    <div className="ContRegistro">
                        <Link to={"/registro"} className={"registrar"}> Registrate</Link>
                    </div>
                    <div className="ContAcceder">
                        <Link to={"/perfil"} className={"perfil"}> Acceder</Link>
                    </div>
                </div>
            </form>
        );
    };


    return (
        <>
            {/*Contenedor principal del login*/}
            <div className={"formulario-login"}>
                {/*Contenedoor secundario que contiene inputs, labels y botones*/}
                <div className={"contenedor-form"}>
                    {/*Llamada a la función que renderiza todo el formulario*/}
                    {RenderizarFormulario()}
                </div>
            </div>
        </>
    );
};

export default LoginComp;