import {useRouteError} from "react-router-dom";

export const ErrorPage = () => {
	const error = useRouteError();
	console.log(error)
	return (
		<div className={"space-y-8"}>
			<h1 class={"text-center text-6xl font-extrabold mt-20 text-blue-900"}>CRM - Clientes</h1>
			<p className={"text-center"}>Hubo un error</p>
			{/*En base al tipo de errro que se produzca en la web, se mostrará un mensaje u otro.
			Estos mensajes son los que se producen en la aplicación como lo error de los try catch.
			Ahora bien, para poder mostrarlos así, han de pasarse al main en errorElement:
			*/}
			<p className={"text-center text-red-800"}>{error.statusText || error.message}</p>

		</div>
	)
}