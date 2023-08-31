import {useLoaderData} from "react-router-dom";
import {Cliente} from "../components/Cliente.jsx";
import {obtenerClientes} from "../data/Clientes.js";

export function loader(){//la función loader es muy similar al useEffect, se va a ejecutar cuando el componente esté listo.
	//Es ideal para consultar una API
	//console.log(import.meta.env)//esta es la forma de leer el contenido del archivo .env
	const clientes = obtenerClientes();
	return clientes;

}
export const Index = () => {
	const clientes = useLoaderData();//este useLoaderData va a funcionar porque lo estoy pasando en el main, en loader: clientesLoader
	//error
	return (
		<>
			<h1 className={"font-black text-4xl text-blue-900"}>Clientes</h1>
			<p className={"mt-3"}>Administra tus clientes</p>

			{clientes.length ?
				(
					<table className={"w-full bg-white shadow mt-5 table-auto"}>
						<thead className={"bg-blue-800 text-white"}>
							<tr>
								<th className={"p-2"}> Clientes</th>
								<th className={"p-2"}> Contactos</th>
								<th className={"p-2"}> Acciones</th>
							</tr>
						</thead>
						<tbody>
							{clientes.map(cliente =>(
								<Cliente
									cliente={cliente}
									key={cliente.id}
								/>
								)
							)}
						</tbody>

					</table>
				) :
				(
				<p className={"text-center mt-10"}>No hay clientes aún</p>
				)
			}
		</>
	)
}