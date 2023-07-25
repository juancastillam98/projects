import { useState, useEffect } from 'react'
import { Header } from "./components/Header.jsx";
import { Filtros } from "./components/Filtros.jsx";
import { ListadoGastos } from "./components/ListadoGastos.jsx";
import { Modal } from "./components/Modal.jsx";
import { generarId } from "./helpers/index.js";
import iconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {

    const [gastos, setGastos] = useState(
        localStorage.getItem("gastos") ? JSON.parse(localStorage.getItem("gastos")) : []
    );
    const [presupuesto, setPresupuesto] = useState(
        Number(localStorage.getItem("presupuesto")) ?? 0 //si mo existe presupuesto en localStorage, su valor inicial va a ser 0
    );
    const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
    const [modal, setModal] = useState(false)
    const [animarModal, setAnimarModal] = useState(false)

    const [gastoEditar, setGastoEditar] = useState({})
    const [filtro, setFiltro] = useState("")
    const [gastosFiltrados, setGastosFiltrados] = useState([])//array con el resultado de los filtros

    //Este useEffect va a escuchar por gastoEditar, es decir cuando queramos editar un gasto.
    useEffect(() => {
        if (Object.keys(gastoEditar).length > 0) {
            setModal(true)
            setTimeout(() => {
                setAnimarModal(true)
            }, 500)
        }
    }, [gastoEditar])
    useEffect(() => {
        localStorage.setItem("presupuesto", presupuesto ?? 0)
    }, [presupuesto])

    useEffect(() => {
        localStorage.setItem("gastos", JSON.stringify(gastos) ?? []);
    }, [gastos]);

    useEffect(() => {
        const presupuestoLS = Number(localStorage.getItem("presupuesto")) ?? 0;
        if (presupuestoLS > 0) {
            setIsValidPresupuesto(true)
        }
    }, [])//Recuerda, vacío es que lee una sola vez

    useEffect(() => {
        const gastosLS = Number(localStorage.getItem("gastos")) ?? 0;
    }, [])
    useEffect(() => {
        if (filtro) {
            //filtramos gastos por categorías
            const gastosFiltrados = gastos.filter(gastos => gastos.categoria === filtro)
            setGastosFiltrados(gastosFiltrados)
        }
    }, [filtro])
    const handleNuevoGasto = () => {
        setModal(true)
        setGastoEditar({})
        setTimeout(() => {
            setAnimarModal(true)
        }, 500)
    }
    const guardarGasto = (gasto) => {
        if (gasto.id) {//si ya existe un gasto con el mismo id, actualizo el contenido de ese gasto en el array
            const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState);// si coinciden, devuelve el gasto que estará actualizado, si no, devuelve que el haya.
            //así me aseguro de devolver todos
            setGastos(gastosActualizados);
            setGastoEditar({})
        } else {
            gasto.id = generarId()
            gasto.fecha = Date.now();
            setGastos([...gastos, gasto])
        }
        setAnimarModal(false)
        setTimeout(() => {
            setModal(false)
        }, 1000)
    }
    const eliminarGasto = (id) => {
        //la mejor forma de eliminar es con filter. RECUERDA filter devuele todos aquellos elementos que cumplen una condciión, y la condición es casi simpre que sea distinto de.
        const gastosActualizados = gastos.filter((gasto) => gasto.id !== id)//es decir, muestrame los gastos que sean distintos del que le paso.
        setGastos(gastosActualizados) //importante, estoy sobreescribiendo.
    }
    return (
        <div className={modal ? "fijar" : ""}>
            <Header
                gastos={gastos}
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                isValidPresupuesto={isValidPresupuesto}
                setIsValidPresupuesto={setIsValidPresupuesto}
                setGastos={setGastos}
            />
            {isValidPresupuesto &&
                <>
                    <main>
                        <Filtros
                            filtro={filtro}
                            setFiltro={setFiltro}
                        />
                        <ListadoGastos
                            gastos={gastos}
                            setGastoEditar={setGastoEditar}
                            eliminarGasto={eliminarGasto}
                            filtro={filtro}
                            gastosFiltrados={gastosFiltrados}
                        ></ListadoGastos>
                    </main>
                    <div className="nuevo-gasto">
                        <img
                            src={iconoNuevoGasto} alt="icono nuevo gasto"
                            onClick={handleNuevoGasto}
                        />
                    </div>
                </>
            }
            {/*Solo va a existir el modal cuando haga click*/}
            {modal && <Modal
                setModal={setModal}//al pasarle el setModal, puedo luego desde Modal.jsx modificar el valor
                animarModal={animarModal}
                setAnimarModal={setAnimarModal}
                guardarGasto={guardarGasto}//función encargada de almacenar los gastos creados por el modal en un array
                gastoEditar={gastoEditar}
                setGastoEditar={setGastoEditar}
            />}
        </div>
    )
}

export default App
