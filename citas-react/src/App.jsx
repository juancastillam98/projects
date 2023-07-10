import Header from "./Componentes/Header.jsx";
import {Formulario} from "./Componentes/Formulario.jsx";
import {ListadoPacientes} from "./Componentes/ListadoPacientes.jsx";
import {useState, useEffect} from "react";

function App() {
    //pacientes es una lista de los pacinetes,
    const [pacientes, setPacientes] = useState([]); {/*Aquí se almacenará un lista de los pacientes, recuerda que setPacientes es la función que modifica el arreglo de pacientes*/}
    const [paciente, setPaciente] = useState({})

    //este primer useEffect es para comprobar si hay algo en el localStorage
    useEffect(()=>{
        //si hay algo, lo leerá
        const obtenerLocalStorage =()=>{
            const pacientesLS = JSON.parse( localStorage.getItem("pacientes")) ?? []; //esto indica que si no hay nada, decuelva un array vacío.
            setPacientes(pacientesLS) //actualizo el array de pacientes
        }
        obtenerLocalStorage();
    }, [])//recuerda, al estar vacío quiere decir que solamente se va ejecutar 1 VEZ

    useEffect(() =>{//cada vez que se produzca un cambio en la lista de pacientes
        if (pacientes.length >0) {
            localStorage.setItem("pacientes", JSON.stringify(pacientes));//solamente estará en storage hasta que recargue la página cada vez que recarguemos, pacientes es un array vacío.
            //por eso tenemos que ahcer que antes que nada comprobemos el localstorage.
        }
    }, [pacientes]);

    const eliminarPaciente =(id_paciente)=>{
        //la idea es que devuelva todos los pacientes que sean disitintos del id del paciente al que le he hecho click. O sea mostrar todos menos el id
       const pacientesActualizados = pacientes.filter(paciente=>{
           return paciente.id !== id_paciente
       })
        setPacientes(pacientesActualizados)
    }

    /*Los props es una forma que tiene react de intercambiar información entre componentes, así es como vamos a pasra la información
    * del compoente Formulario al componente ListadoPacientes
    * -LOS props se pasan del padre al hijo, nunca viceversa.
    *
    * const imprime2mas2=()=>{
    * console.log(2+2)
    * Ejemplo práctico. --> lo de la izq, es el nombre, lo de la derecha su valor.
    *         <Header
            numeros={{1}}
            isAdmin={false}
            *funcion={imprime2mas2}
        />
    * */
    const toma1Valor=(valor)=>{
        console.log(valor)
    }
  return (
    <div className="container mx-auto mt-20">
        <Header
            toma1Valor={toma1Valor}
        />
        <div className="mt-12 md:flex ">
            <Formulario
                pacientes={pacientes}/*Listado de pacientes*/
                setPacientes={setPacientes}
                paciente={paciente}
                setPaciente ={setPaciente}
            />
            <ListadoPacientes
                pacientes={pacientes}
                setPaciente={setPaciente}//este set es el encargado de modificar el paciente
                eliminarPaciente={eliminarPaciente}
            />
        </div>

    </div>
  )
}

export default App
