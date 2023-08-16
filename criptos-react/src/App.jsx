import { useState, useEffect } from 'react'
import styled from "@emotion/styled";
import {Formulario} from "./components/Formulario.jsx";
import {Resultado} from "./components/Resultado.jsx";
import {Spinner} from "./components/Spinner.jsx";
import imagenCripto from "./img/imagen-criptos.png";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;
const Imagen = styled.img`
max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

const Heading=styled.h1`
  font-family: "Lato", sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin: 80px 50px;
  font-size: 34px;
  
  &::after{
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

function App() {
    const  [monedas, setMonedas]=useState({})//es un obj que se va a llenar con los datos del formualrio
    const  [resultado, setResultado]=useState({})//es un obj que se va a llenar con los datos del formualrio
    const  [cargando, setCargando]=useState(false)//es un obj que se va a llenar con los datos del formualrio
    useEffect(() => {
        if (Object.keys(monedas).length > 0) {//compruebo si hay un objeto en monedas porque si no pongo nada, la priemera vez que se jejecute me dirá que está vacío.
            console.log(monedas)
            const cotizarCripto = async ()=>{
                setCargando(true)
                setResultado({})//reseteo el obj
                const {moneda, criptomoneda} = monedas;
                const url =`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
                const respuesta = await fetch(url)
                const resultado = await  respuesta.json();
                setResultado(resultado.DISPLAY[criptomoneda][moneda])
                setCargando(false)
            }
            cotizarCripto();
        }
    },[monedas]);
    return (
          <Contenedor>
            <Imagen src={imagenCripto} alt="imagenes criptomonedas  "/>
              <div>
                  <Heading>Cotiza criptomonedas al instante</Heading>
                  <Formulario
                      setMonedas={setMonedas}
                  />
                  {/*Si solamente le paso resutlado &&, no funcionará porque resultado no es un booleano, sino un obj y por consiguiente siempre se ejecutará*/}
                  {cargando && <Spinner />}
                  {resultado.PRICE && <Resultado resultado={resultado}/>}
                  {/*Le pasamos props, y luego dentro del componente comprobamos si no está vacío. Es otra forma de mostrar contenido si hay algo*/}
              </div>
          </Contenedor>
    )
}

export default App

/**
 * Los Styled es una forma de crear un elemento HTML con la sintaxis de un componente y añadirle estilos CSS. Así se escribe CSS en JS.
 * Los estyled es una manera de crear compoentes con sus propios estiolos, siendo una manera muy eficioente de ahorrar código puesto que los
 * compoentes solamente se crean cuando se les llama y estos ya tienen sus propios estilos.
 */
