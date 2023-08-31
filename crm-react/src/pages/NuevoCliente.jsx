//el hook useNavigate sirve para añadir enlaces/redirecciones
//el hook Form está predefinido con reactRouter y sirve para procesar los formularios.
//el hook useActionData es para acceder al contenido del acction, que a su vez el action es para acceder al contenido del form, ergo el useActionData es para acceder al contenido del form
import {useNavigate, Form, useActionData, redirect} from "react-router-dom";
import {Formulario} from "../components/Formulario.jsx"; //este hook
import {Error} from "../components/Error.jsx";
import {agregarCliente} from "../data/Clientes.js";

export async function action({request}){//NO te confundas, esa función action se corresponde con el action del form.
	//la función es asíncrona porque puede tardar un tiempo en procesarse, as´ que es mejor que hasta que no se recupere o procese toda la información del formulario,
	//no continuar ejecutando código.
	const formData = await  request.formData();//formData es un array que contiene toda la información. Si te fijas, es como consumir una API
	//console.log(formData.get("nombre"));
	const datos = Object.fromEntries(formData) //esto es una maravilla. Así lo que obtienes es un objeto cuya clave son los names del formulario y los values sus respectivos valores
	const email =formData.get("email"); //si bien podemos usar Objetc.fromEntries(formData), email lo queremos evaluar por separado
	const errores=[]
	if (Object.values(datos).includes("")){
		errores.push("Todos los campos son obligatorios");
	}
	let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
	if (!regex.test(email)){//test es un método propio de regex
		errores.push("El Email no es válido")
	}

	if(Object.keys(errores).length){
		//console.log(Object.keys()); esto es para que veas los errores
		console.log("hay un error jajaj")
		return errores
	}
	await agregarCliente(datos)//le pongo await para indicar que es asíncrona
	return redirect("/")
}
export const NuevoCliente = () => {
	const navigate = useNavigate();
	const errores = useActionData(); //de la misma forma que use el hook de useLoaderData es para acceder a los datos del loader, el hook useActionDate hace lo mismo

	return (
		<>
			<h1 className={"font-black text-4xl text-blue-900"}>Nuevo Cliente</h1>
			<p className={"mt-3"}>Llena todos los campos para registrar un nuevo cliente</p>

			<div className ="flex justify-end">
				<button
					className={"bg-blue-800 text-white px-3 py-1 font-bold uppercase"}
					onClick={()=>navigate(-1)}//EL -1 indica la página anterior. También podemos poner la ruta a la que queremos rediriigir
					>
					Volver
				</button>
			</div>
			<div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
				{/*si hay errores, los recorremos*/}
				{errores?.length && errores.map( (error, i)=>
					<Error key={i}>
						{/*Lo que hay aquí dentro es el children*/}
						{error}
					</Error>
				)}
				<Form
					method={"POST"}
					noValidate //esto es una propiedad para desactiva la validación de HTML5
				>
					<Formulario/>
					<input type="submit"
						   className="mt-5 w-full bg-blue-800 uppercase font-bold text-white text-lg"
						   value={"Registrar cliente"}/>
				</Form>
			</div>
		</>
	)
}