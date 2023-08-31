//Este va a ser el componente que va a variar dependiendo de la página en la que etemos
import {Outlet, Link, NavLink, useLocation} from 'react-router-dom';//Esto nos va a permitir mostrar el contenido que varía. Todo lo que esté fuera del Outlet se mantendrá constante en todas las páginas
export const Layout = () => {
	const location = useLocation();
	return (
		<div className="md:flex md:min-h-screen">
			<aside className="md:w-1/4 bg-blue-900 px-5 py-10">
				<h2 className="text-4xl font-black text-center text-white"> CRM Cliente</h2>
				<nav className="mt-10">
					<Link to="/" className={`${location.pathname ==="/" ? "text-blue-300":"text-white"} text-2xl block mt-2 hover:text-blue-300 text-white`}>Inicio</Link>
					<Link to="/clientes/nuevo" className={`${location.pathname ==="/clientes/nuevo" ? "text-blue-300":"text-white"} text-2xl block mt-2 hover:text-blue-300 text-white`}>Nuevo Cliente</Link>

					{/*Esto sería un ejemplo pero con NavlLink en vez de con Link
					<NavLink to={"/clientes/nuevo"} className={({isActive})=>isActive ? "text-blue-300 text-2xl block mt-2" : "text-whie text-2xl block mt-2"}>Nuevo Clinete</NavLink>
					*/}
				</nav>
			</aside>

			<main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
				{/**Lo que esté por fuera del Outlet se mostrará en todas las páginas. Lo que va a variar en función de cada página es lo que esté dentro del outlet.
				 Para mostrar lo que esté dentro del outlet, tendremos que pasárselo como children. Es decir, outiet significa muestrame lo que esté en children*/}
				<Outlet/>
			</main>
		</div>
	)
}