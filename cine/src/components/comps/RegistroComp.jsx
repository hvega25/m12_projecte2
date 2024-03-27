/*Componente registro que es un formulario para obtener un perfil*/


/*Recordar crear validadores */

//Importación de librerias
import {Link} from "react-router-dom";


//Importación de página de estilos
import "../estilos/regitros.css"
import {useState} from "react";

const RegistroComp = () => {
    const placeholderManual = {
        nombre: 'Nombre',
        apellido: 'Apellido',
        fecha: 'Fecha de nacimiento',
        correo: 'Correo electrónico',
        contraseña: 'Contraseña',
        confirmacontraseña: 'Confirma contraseña',
        sexo: 'Sexo'
    };
    const
        [placeholders, setPlaceholders] = useState(placeholderManual);

    const RestaurarPlaceHolder = (campo) => {
        setPlaceholders({...placeholders, [campo]: placeholderManual[campo]});
    };
    const cambiarPlaceholder = (campo) => {
        switch (campo) {
            case 'nombre':
                setPlaceholders({...placeholders, nombre: 'Ejemplo: Homero'});
                break;
            case 'apellido':
                setPlaceholders({...placeholders, apellido: 'Ejemplo: Simpson'});
                break;
            case 'fecha':
                setPlaceholders({...placeholders, fecha: 'Selecciona tu fecha de nacimiento'});
                break;
            case 'correo':
                setPlaceholders({...placeholders, correo: 'Ejemplo: homerosimpson@correo.com'});
                break;
            case 'contraseña':
                setPlaceholders({...placeholders, contraseña: 'Mayor a 8 dígitos con mayúsculas y un número'});
                break;
            case 'confirmacontraseña':
                setPlaceholders({...placeholders, confirmacontraseña: 'Confirma tu contraseña'});
                break;
            case 'sexo':
                setPlaceholders({...placeholders, sexo: 'Selecciona tu sexo'});
                break;
            default:
                break;
        }
    };

    return (

        /*Contenedor principal del formulario de registro*/
        <div className={"RegistroPrincipal"}>

            {/*Contenedor secundario del formulario de registro que contiene los elementos*/}
            <div className={"RegistroSecundario"}>
                <h2>¿NO TIENES CUENTA? REGÍSTRATE</h2>
                <h3>ESCRIBE TUS DATOS DE REGISTRO</h3>
                <form>
                    {/*Inputs del formulario*/}
                    <input className={"nombre"} type={"text"} placeholder={placeholders.nombre}
                           onFocus={() => cambiarPlaceholder('nombre')}
                           onBlur={() => RestaurarPlaceHolder('nombre')}
                    />
                    <input className={"apellido"} type={"text"} placeholder={placeholders.apellido}
                           onClick={() => cambiarPlaceholder('apellido')}
                           onBlur={() => RestaurarPlaceHolder('apellido')}/>
                    <input className={"fecha"} type={"date"}/>
                    <input className={"correo"} type={"email"} placeholder={placeholders.correo}
                           onClick={() => cambiarPlaceholder('correo')}
                           onBlur={() => RestaurarPlaceHolder('correo')}
                    />
                    <input className={"contraseña"} type={"password"}
                           placeholder={placeholders.contraseña}
                           onClick={() => cambiarPlaceholder('contraseña')}
                           onBlur={() => RestaurarPlaceHolder('contraseña')}
                    />
                    <input  className={"confirmacontraseña"} type={"password"}
                           placeholder={placeholders.confirmacontraseña}
                           onClick={() => cambiarPlaceholder('confirmaContraseña')}
                           onBlur={() => RestaurarPlaceHolder('confirmaContraseña')}
                    />
                    <select className={"sexo"} className={"sexo"}>
                        <option>Hombre</option>
                        <option>Mujer</option>
                        <option>Licuadora</option>
                        <option>USS Missouri (BB-63)</option>
                    </select>
                </form>
                {/*Botón para crear el usuario y si los validadores son correctos se procede a crear el usuario y te llevara a la pagina de login*/}
                <div className="RegistroBoton">
                    <Link to={"/login"} className={"crearCuenta"}>CREAR CUENTA</Link>
                </div>
            </div>
        </div>
    );
};


export default RegistroComp;