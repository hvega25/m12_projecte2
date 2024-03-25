/*Página Login que contiene al componente Login*/

/*Importación de  la hoja de estilos*/
import "../estilos/login.css"

const LoginComp = () => {
    return (
        <>
            <div className={"formulario-login"}>
                <div className={"contenedor-form"}>
                    <form>
                        <div className={"contenedor-usuario-contraseña"}>
                            <div className={"formulario-usuario"}>
                                <div className={"form-us"}>
                                    <span> Usuario </span>
                                </div>
                                <div className={"input-usuario"}>
                                    <input className={"input-user"} placeholder={"Ingrese su usuario"}/>
                                </div>
                            </div>
                            <div className={"formulario-contraseña"}>
                                <div className={"form-pass"}>
                                    <span> Contraseña </span>
                                </div>
                                <div className={"input-pass"}>
                                    <input className={"input-contraseña"} type={"password"} placeholder={"Ingrese su contraseña"}/>
                                </div>
                            </div>
                        </div>
                        <div className={"formularioBotonera"}>
                            <button className={"registrar"}> Registrate</button>
                            <button className={"acceder"}> Acceder</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LoginComp;