import {Paciente} from "./Paciente.jsx";
import {useEffect} from "react";
export const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
	useEffect(()=>{
		if (pacientes.length >0){
			console.log("hay pacientes")
		}
	}, [pacientes])

	return (
		<div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
			{pacientes && pacientes.length ?(
				<>
					<h2 className="font-black text-3xl text-center">Seguimiento de pacientes</h2>
					<p className="text-xl mt-5 mb-10 text-center">Administra tus {" "}
						<span className="text-indigo-600 font-bold">Pacientes y Citas</span>
					</p>
					{/*Para no tener que repetir todos los divs para cada uno de los clientes, crearemos un nuevo componente
			El componente es el de Paciente.jsx*/}

					{pacientes.map((paciente, index) =>{//SIEMRPRE que usemos un map, hay que pasarle un índice llamado key
						return (

							<Paciente
								key= {paciente.id}//obligatorio si uso un map
								paciente={paciente}
								setPaciente={setPaciente}
								eliminarPaciente={eliminarPaciente}
							/>
						)
					})}
				</>
			) :(
				<>
					<h2 className="font-black text-3xl text-center">No hay pacientes</h2>
					<p className="text-xl mt-5 mb-10 text-center">Añade nuevos {" "}
						<span className="text-indigo-600 font-bold">pacientes</span>
					</p>
				</>
			)}

		</div>
	)
}