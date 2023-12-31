import {LeadingActions, SwipeableListItem, SwipeableList, SwipeAction, TrailingActions} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import {formatearFecha} from "../helpers/index.js";
import iconoAhorro from "../img/icono_ahorro.svg";
import iconoCasa from "../img/icono_casa.svg";
import iconoComida from "../img/icono_comida.svg";
import iconoGastos from "../img/icono_gastos.svg";
import iconoSalud from "../img/icono_salud.svg";
import iconoOcio from "../img/icono_ocio.svg";
import iconoSuscripciones from "../img/icono_suscripciones.svg";


const diccionarIconos={
	ahorro: iconoAhorro,
	comida: iconoComida,
	casa: iconoCasa,
	gastos: iconoGastos,
	ocio:iconoOcio,
	salud: iconoSalud,
	suscripciones: iconoSuscripciones
}
export const Gasto = ({gasto, setGastoEditar, eliminarGasto}) => {
	const {categoria, nombre, cantidad, id, fecha} =	gasto;
	const leadingActions=()=>( //al cambiar el { } por el () estoy indicando que quiero devolver un componente
		<LeadingActions>
			<SwipeAction onClick={()=> {return  setGastoEditar(gasto)}}>
				Editar
			</SwipeAction>
		</LeadingActions>
	)
	const trailingActions=()=>(
		<TrailingActions>
			<SwipeAction onClick={()=> {return  eliminarGasto(id)}}
						 destructive={true}//esto es simplemente un efecto para hacer la transición más smoothie
			>
				Eliminar
			</SwipeAction>
		</TrailingActions>
	)
	return (
		<SwipeableList>
			<SwipeableListItem
				leadingActions={leadingActions()}
				trailingActions={trailingActions()}
			>
				<div className="gasto sombra">
					<div className="contenido-gasto">
						<img src={diccionarIconos[categoria]} alt="icono gasto"/>
						<div className="descripcion-gasto">
							<p className="nombre-gasto">{categoria}</p>
							<p className="nombre-gasto">{nombre}</p>
							<p className="fecha-gasto">
								Agregado el: {" "}
								<span>{formatearFecha(fecha)}</span>
							</p>
						</div>
					</div>
					<p className="cantidad-gasto">${cantidad}</p>
				</div>
			</SwipeableListItem>
		</SwipeableList>
	)
}