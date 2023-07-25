import {useState} from "react";
import {Mensaje} from "./Mensaje.jsx";

export const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {
	const [mensaje, setMensaje] =useState("")
	const handlePresupuesto = (e)=>{
		e.preventDefault();
		if (!presupuesto ||presupuesto < 0){
				setMensaje("No es un presupuesto válido")
			return
		}

		setMensaje("")
		setIsValidPresupuesto(true)
	console.log(presupuesto)
	}
	return (
		<div className="contenedor-presupuesto contenedor sombra">
			<h2>Nuevo Presupuesto</h2>
			<form onSubmit={handlePresupuesto} className="formulario">
				<div className="campo">
					<label>Definir Presupuesto</label>
					<input className="nuevo-presupuesto"
					type="number" placeholder="Añade tu presupuesto" value={presupuesto}
					onChange={ (e)=>{setPresupuesto(Number(e.target.value))}}/>
				</div>
				<input type="submit" value="Añadir"/>
				{/*Compriebo si mensaje es true, en cuyo caso se renderiza el componente con un prop llamado tipo establecido en error.*/}
				{mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
				{/*El código "mensaje &&" es una forma de comparar si es cierta. Es una forma de hacer un if ternario sin evaluear el else.
					iEsta es la forma común.
						if(esCierto){
							//Código cierto
						}else{
							//código falso
						}
					//La versión ternaria de esta forma es {esCierto ? //codigo cierto : //código falso}

					//SI solo quiero ejecutar algo cuanso sea cierto, la forma común es esta
					if(esCierto){
						//Código es cierto
					}
					//La versión ternaria de esta forma es {esCierto && //codigo cierto}
				*/}
			</form>
		</div>
	)
}