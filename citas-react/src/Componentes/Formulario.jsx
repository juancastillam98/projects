import {useState, useEffect} from "react";/*impor estos hooks en react*/
import {Error} from "./Error.jsx";
/*
Ejemplo. El hook useState, o estado nos dice cuál es el estado de una aplicación. Ejmpl en un carrito de compra--> cúal es el estado del carrito de compra
	¿Tíene elementos o está vacío? ¿Estoy descargado un listado o clientes, o ya lo hice..? Es una variable con información relevante. En el caso de un formulario,
	el state se puede usar para ver si se ha validado el formulario. IMportante, lEL STATE QUE CREES EN TUS COMPONENTES, SOLO ESTARÁN DISPONIBLE EN ESE COMPONENTE

	ejmplo Práctico
	const [cliente, setCliente]=useState({});
		--> cliente, es la variable que contiente el valor del estado
		--> setCliente, modificador (función que va modificar la variable de cliente). NO PUEDE MODIFICAR OTROS ESTADOS, SOLO EL DE la variable cliente
		-->useState({}) Valor inicial.-> como va entre {} y están vacías. El objeto cliente inicia como vacío.
		Esto es lo mismo, que la POO. usetState, es como el constructor, setCliente modficadores, cliente los atributos

		const [total, setTotal] = useState(0): --> conforme el usuario va añadiendo elementos al carrito de compras, el total va a ir cambiando
		const [clientes, setClientes] = useState([]) -->un array de clientes con valor inicial vacío. Problablemente cuando hagamos una consulta a la API el state se llene
		const [modal, setModal]=useState(false) -->esto es un modal, cuando el usuario pulse un botón, se muestra la ventana del modal

Cada vez que el state cambie, la aplicación va a renderizar y actualizarse con los cambios. Siempre se modifica la variable de cliente, total, clientes, modal con set/Total/Modal/Clientes)...

Hook useEffect, se ejcutan el stateCambia o el componente está listo, siendo éste último el sitio idioneo para consultar una API o local storage
Uso.
	useEffect(()=>{
		console.log("El comente está listo")
	}, []) dentro del arry van las dependencias, el código que va a estar revisando
* */



export const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {//pacientes es un array. Lo que estoy haciendo es pasarle (desde App) a formulario un hook, que en este caso es una lista
		//en la que pueda almacenar lun listado de pacientes
	const [nombre, setNombre] = useState("");//valor inicial Hook
	const [propietario, setPropietario] = useState("");//valor inicial Hook
	const [email, setEmail] = useState("");//valor inicial Hook
	const [alta, setAlta] = useState("");//valor inicial Hook
	const [sintomas, setSintomas] = useState("");//valor inicial Hook

	const [error, setError] = useState(false);

	/*
	// este useEffect se va a ejecutar cuando paciente cambie. Paciente cambia cuando cambie su valor inicial (useState). En nuestro caso cuando pulsamos el boón de editar
		useEffect(()=>{
			console.log("Cuando el componente cambia")
		}, [paciente])
	*/

	//isi no le paso nada al arraty se va a ejcutar solamente una vez. Este useEffect se ejecuta cuando paciente cambia de estado
	useEffect(()=>{
		//console.log(Object.keys(paciente).length>0)//Esto es una forma de comprobar si un objeto tiene algo
		if (Object.keys(paciente).length > 0){
			console.log(paciente);
			setNombre(paciente.nombre)
			setPropietario(paciente.propietario)
			setEmail(paciente.email)
			setAlta(paciente.alta)
			setSintomas(paciente.sintomas)
		}else{
			console.log("No hay algo")
		}
	}, [paciente])

	const generarId = ()=>{
		const random =Math.random().toString(36).substring(2);
		const fecha =Date.now().toString(36)
		return random+fecha;
	}
	/*console.log(nombre)
	setNombre("pepe");
	console.log(nombre)*/
	const handleSubmit=(e) => {
		e.preventDefault();
		if ([nombre, propietario, email, alta, sintomas].includes("")){
			setError(true)
			return;
		}
		setError(false)
		//Objeto de paciente para añadir a la lista
		const objPaciente={
			nombre,
			propietario,
			email,
			alta,
			sintomas

		}
		if (paciente.id){
			//Editando el registro
			objPaciente.id = paciente.id; //sobreescribo el paciente
			const pacientesActualizados = pacientes.map(pacienteState => {
				return  pacienteState.id === paciente.id ? objPaciente : pacienteState
			})
			setPacientes(pacientesActualizados)
			setPaciente({})
		}else{
			//Nuevo registro
			objPaciente.id= generarId()//genero un nuevo id por cada nuevo paciente
			//setPacientes(objPaciente) //si lo dejo asíí, se va sobreescribiendo.
			setPacientes([...pacientes, objPaciente])/*Voy añadiendo más elementos al array sin modificar el original*/
		}
		//Reinicio el formulario.
		setNombre("");
		setPropietario("");
		setEmail("");
		setAlta("");
		setSintomas("");


	}
	return (
		<div className="md:w-1/2 lg:w-2/5 mx-4">
			<h2 className="font-black text-3xl text-center">Seguimiento de pacientes</h2>
			<p className=" text-lg mt-5 text-center mb-10">
				Añade Pacientes y {" "}<span className="text-indigo-600 font-bold">Administralos</span>
			</p>

			<form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"  onSubmit={handleSubmit}>
				{/*{error ? "Hay campos vacíos" : "NO hay campos vacíos"} // así imprime o uno u otro*/}
				{/*solo va a mostrr el mensaje en caso de que hay campos vacíos*/}
				{/*{error && <Error mensaje="Todos los campos son obligatorios"/>} Le paso como prop un mensaje*/}
				{/*rambién se puede pasar un prop de esta manera, --en Error.jsx -> se pone el nombre de childrn*/}
				{error && <Error> Todos los campos son obligatorios</Error>} {/*esta manera es muy común porque puedes pasarle mucho código html. ejm <p>hay errores</p>*/}
				<div className="mb-5">
					<label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
					<input id="mascota" type="text" placeholder="Nombre de la mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={nombre}
						   onChange={(evento)=>setNombre(evento.target.value)}/>
					{/*cada vez que se registre el evento, llama método que modifica el valor*/}
				</div>

				<div className="mb-5">
					<label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre del propietario</label>
					<input id="propietario" type="text" placeholder="Nombre del propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={propietario}
							onChange={(evento)=>{
								setPropietario(evento.target.value)
							}}/>
				</div>

				<div className="mb-5">
					<label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email contacto</label>
					<input id="email" type="email" placeholder="Email Contacto Propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={email}
							onChange={(evento)=>{setEmail(evento.target.value)}}/>
				</div>

				<div className="mb-5">
					<label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Fecha de alta</label>
					<input id="alta" type="date"  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={alta}
							onChange={(evento)=>{setAlta(evento.target.value)}}/>
				</div>

				<div className="mb-5">
					{/*En react, el for es palabra reservada de js, por consiguiente, al igual que classNmae, no vale for, sino htmlFOR*/}
					<label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Síntomas</label>
					<textarea htmlFor="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
					placeholder="Describe los síntomas" value={sintomas} onChange={(evento)=>{setSintomas(evento.target.value)}}/>
				</div>

				<input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 transition-colors cursor-pointer"
					   value={paciente.id ? "Guardar cambios" : "Agregar paciente"}
				/>
			</form>
		</div>
	)
}
