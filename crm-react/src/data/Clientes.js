export async function obtenerClientes(){
	//const url="http://localhost:3000/clientes";
	const respuesta = await fetch(import.meta.env.VITE_API_URL); //fetch utiliza por defecto el método get, por lo que es innecesario
	const resultado = await respuesta.json();

	return resultado;
}

export async function obtenerCliente(id){
	//const url="http://localhost:3000/clientes";
	const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`); //fetch utiliza por defecto el método get, por lo que es innecesario
	const resultado = await respuesta.json();

	return resultado;
}

export async function agregarCliente(datos){
	try{
		//esto es insertar un nuevo registro en un fichero
		const respuesta = await fetch(import.meta.env.VITE_API_URL, {
			method:"POST", //métod a utilizar, recuerda al igual que en los forms, se utiliza en el fetch el POST para insertar datos
			//ESTA INFORMACIÓN (body, headers...) SE PONE CUANDO QUEREMOS AÑADIR INFORMACIÓN, COMO EN ESTE CASO QUE ESTAMOS INSERTANDO
			body: JSON.stringify(datos), //en body va el contenido a insertar
			headers: {//heders es una etiqueta para indicar el tipo de contenido a insertar
				"Content-Type": "application/json" //content type para especificar el tipo de contenido, en este caso un json
			}
		})
		await  respuesta.json()//devolverá true o false en base a si se ha insertado o no
	}catch (error){
		console.log(error)
	}
}
export async  function actualizarCliente(id, datos){
	try{
		//esto es insertar un nuevo registro en un fichero
		const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
			method:"PUT",
			body: JSON.stringify(datos),
			headers: {
				"Content-Type": "application/json"
			}
		})
		await  respuesta.json()
	}catch (error){

	}
}
export async function eliminarCliente(id){
	try {
		const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
			method:"DELETE",
		})
		await  respuesta.json();
	}catch (error){

	}
}