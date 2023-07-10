import {useEffect} from "react";
export const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

	//como no le paso nada (all array) solamente se va a ejecutar una vez cuando el componente esté listo
	useEffect(()=>{
		console.log("Cuando el componente está listo")
	}, [])

	const  {nombre, propietario, email, alta, sintomas, id} =paciente
	const handleEliminar=()=>{
		const respuesta = confirm("¿Deseas eliminar este paciente?");
		if (respuesta){
			eliminarPaciente(id)
		}
	}
	return (
		<div className="mx-5 my-10 bg-white shadow-md py-10 px-5 rounded-xl">
			<p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {" "}

				<span className="font-normal normal-case">{nombre}</span>
			</p>

			<p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {" "}
				<span className="font-normal normal-case">{propietario}</span>
			</p>

			<p className="font-bold mb-3 text-gray-700 uppercase">email: {" "}
				<span className="font-normal normal-case">{email}</span>
			</p>

			<p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {" "}
				<span className="font-normal normal-case">{alta}</span>
			</p>

			<p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {" "}
				<span className="font-normal normal-case">{sintomas}</span>
			</p>
			<div className="flex justify-between mt-10">
				<button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounded-lg"
				onClick={()=>{
					setPaciente(paciente )//recuerpo los campos
				}}
				>Editar</button>
				<button type="button" className="py-2 px-10 bg-red-600 hover:bg-indigo-800 text-white font-bold uppercase rounded-lg"
						onClick={ handleEliminar}//si a la función no le voy a pasar ningún argumento, se puede quedar así.
					// Y si le pongo así, handleEliminar() se va a llamar a la función directamente.
				>Eliminar</button>

			</div>
		</div>
	)
}