import {useEffect, useState} from "react";
import styled from "@emotion/styled";
import {Error} from "./Error.jsx";
import {UseSelectMonedas} from "../hooks/UseSelectMonedas.jsx";//importo así el hook propio
import {monedas} from "../data/monedas.js";


const InputSubmit=styled.input`
	background-color: #9497ff;
	border: none;
	width: 100%;
	padding: 10px;
	color: #FFF;
	font-weight: 700;
	text-transform: uppercase;
	font-size: 20px;
	border-radius: 5px;
	transition: background-color 0.3s ease;
	margin-top: 30px;
	&:hover{
		background-color: #7a7dfe;
		cursor: pointer;
	}
`;
// eslint-disable-next-line react/prop-types
export const Formulario = ({setMonedas}) => {
	const [criptos, setCriptos] = useState([])
	const [error, setError] = useState(false)
    //extraigo la función SelectMonedas del hook
    const [moneda, SelectMonedas] = UseSelectMonedas("Elige tu moneda", monedas) //el primer parámetro, se corresponde con el primer parametro en el hook. Es decir el Laberl, el segundo elarray importado de monedas
    const [criptomoneda, SelectCriptomoneda] = UseSelectMonedas("Elige tu criptomoneda", criptos) //el primer parámetro, se corresponde con el primer parametro en el hook. Es decir el Laberl
    //const [SelectCriptomonedas] = UseSelectMonedas("Elige tu Criptomoneda") /se puede duplicar, y con simplementte cambiar el contenido interno ya hay otro
    //SelectMonedas()//llamo a la  función exportada

	useEffect(()=>{//cuando el componente esté listo, va a mandar llamar a la API
		const consultarAPI = async ()=>{
			const url="https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
			const respuesta = await  fetch(url)

			const resultado = await respuesta.json();
			//Para saber los valores o como está estructurado, tenemos que verlo console.log(resultado.Data)
			const arrayCriptos = resultado.Data.map( cripto =>{
				//console.log(cripto.CoinInfo.Name +" - "+cripto.CoinInfo.FullName)
				const objeto={
					id: cripto.CoinInfo.Name,
					nombre: cripto.CoinInfo.FullName
				}
				return objeto; //al ponerle el return, meto lo que devuelva el return en el array
			})
			setCriptos(arrayCriptos)
		}
		consultarAPI();
	}, [])
	const handleSubmit =(e)=>{
		e.preventDefault();
		//console.log(moneda + " - " + criptomoneda)
		if ([moneda, criptomoneda].includes("")){//si lo enviamos vacío no hace nada
			setError(true)
			return;
		}
		setError(false)
		setMonedas({
			moneda,
			criptomoneda
		})
	}
	return (
		<>
			{/**Recuerda, error recibe un {children} y children es lo que va dentro de Error, en este caso el texto*/}
			{error && <Error>Todos los campos son obligatorios</Error>}
			<form
				onSubmit={handleSubmit}
			>
				{/*Select monedas es un hook propio*/}
				<SelectMonedas />
				<SelectCriptomoneda /> {/*Este select funciona igual que el primero, solo que los valores que le estoy pasando son diferentes*/}
				{/**Los select de arriba reciben un array*/}
				<InputSubmit type="submit" value="Cotizar"
				/>
			</form>
		</>
	)
}