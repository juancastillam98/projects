
import {useState} from "react";
import styled from "@emotion/styled";

const Label = styled.label`
	color: #FFF;
	display: block;
	font-family: "Lato", sans-serif;
	font-weight: 700;
	font-size: 24px;
	margin: 15px 0;
`;

const Select = styled.select`
	width: 100%;
	font-size: 18px;
	padding: 14px;
	border-radius: 10px;
	
`;
//Esta es la estructura de un hook propio
export const UseSelectMonedas = (label, monedas) => {//el primer param es el label, el seg un array de monedas llamado monedas
	const [moneda, setMoneda]=useState("")
		const SelectMonedas = () => (//si pongo llaveves ,{} es para indicar un bloque de contenido, no una sola línea. Luego si pongo llaves y devuelvo una sola línea tengo que poner un return

			<>
				<Label>{label}</Label>
				<Select value={moneda}
						onChange={e =>setMoneda(e.target.value)}
				>
					<option value="">Seleccione</option>
					{monedas.map( moneda=> {
						return (
						<option
							key={moneda.id}
							value={moneda.id}
						>{moneda.nombre}</option>
						)
					})}
				</Select>
			</>
		)
	return [moneda, SelectMonedas]//puedeo devolver lo que vea combeniente. En este caso el state y el selectMonedas

}