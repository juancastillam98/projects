export const Mensaje = ({children, tipo}) => {//Recuerda, children es el primer campo, en este caso todo el mensaje. Si pongo mensaje en vez de childrren no se muestra nada
								//Es decir, children es el contido y tipo, en este caso, es el prop
	return (
		//lo que hay en ${tipo} es una forma de mostrar un mensaje de error
		<div className={`alerta ${tipo}`}>
			{children}
		</div>
	)
}