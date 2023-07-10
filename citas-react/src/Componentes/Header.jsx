import  React from 'react';
/*al ponerle parámetros al Header, estoy indicando que voy a pasarle props.
--tabién puedo hacer destructuring dentro de los parámetros para obtener los valores
* */
function  Header( ) {
	/*Si yo creo una variable y se la paso al padre, no es posible porque los props se pasan del padre (App) al hijo (Header, Formulario....)
	const variableHeader =true --> esto no se le puede pasar al padre. Al revés sí.
	Para que funcione, si le paso al hedaer ({toma1Valor}) estoy usando la función que recibo del padre.
		const variableHeader = true;
		toma1Valor(variableHeader);
	* */

	return (
		<>
			<h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">Seguimiento Pacientes {" "}
				<span className="text-indigo-600">Veterinaria</span></h1>
		</>
	)
}
export default Header