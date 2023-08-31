import {agregarCliente, obtenerCliente, actualizarCliente} from "../data/Clientes.js";
import {Error} from "../components/Error.jsx";
import {Form, useNavigate, useLoaderData, redirect, useActionData} from "react-router-dom";
import {Formulario} from "../components/Formulario.jsx";
export async function loader({params}){//params coje los parámetros que haya en la url
	//console.log(params)
	const cliente = await obtenerCliente(params.clienteId); //obtenerCliente es una función asincrona que obtene toda la información de un cliente específico
	console.log(cliente) //en cliente está almacenado el objeto entero de Cliente
	if (Object.values(cliente).length===0){//compruebo si el objeto cliente está vacío.
		throw new Response("", {
			status: 404,
			statusText: "No hay resultado"
		})
	}
	return  cliente;
}

export async function action({request, params}){
	const formData = await  request.formData();
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
		return errores
	}
	//Actualizar el cliente
	await actualizarCliente(params.clienteId, datos)//le pongo await para indicar que es asíncrona
	return redirect("/")
}
export const EditarCliente = () => {
	const navigate=useNavigate();
	const cliente = useLoaderData(); //recuerda, el useLoaderData es para obtener la información del loader
	const errores = useActionData();//recuerda para leer los datos del formulario, se usa el action. Para poder mostrarlos luego, se usa el useActionData
	return (
		<>
			<h1 className={"font-black text-4xl text-blue-900"}>Editar Cliente</h1>
			<p className={"mt-3"}>A continuación podrás modificar la información de un cliente</p>

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
						{/*Lo que hay aquí dentro es el childre*/}
						{error}
					</Error>
				)}
				<Form
					method={"POST"}
					noValidate //esto es una propiedad para desactiva la validación de HTML5
				>
					<Formulario cliente={cliente}/>
					<input type="submit"
						   className="mt-5 w-full bg-blue-800 uppercase font-bold text-white text-lg"
						   value={"Actualizar cliente"}/>
				</Form>
			</div>
		</>
	)
}