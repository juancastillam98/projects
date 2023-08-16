import styled from "@emotion/styled";
const Contenedor = styled.div`
	color: #fff;
	font-family: "Lato", sans-serif;
	display: flex;
	align-items: center;
	gap: 2rem;
	margin-top: 120px;
`;
const Imagen = styled.img`
	display: block;
	width: 110px;
`;

const Texto=styled.p`
	font-size: 18px;
	span{
		font-weight: 700;
	}
`;
const Precio=styled.p`
	font-size: 25px;
	span{
		font-weight: 700;
	}
`;
export const Resultado = ({resultado}) => {
	const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado;
	return (
		<Contenedor>
			<Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen cript"/>
			<div>
				<Precio>El precio actual es de <span>{PRICE}</span></Precio>
				<Texto>El precio más alto del día es de <span>{HIGHDAY}</span></Texto>
				<Texto>El precio más bajo del día es de <span>{LOWDAY}</span></Texto>
				<Texto>Variación últimas 24 horas <span>{CHANGEPCT24HOUR}</span></Texto>
				<Texto>Última actualización <span>{LASTUPDATE}</span></Texto>
			</div>
		</Contenedor>
	)
}