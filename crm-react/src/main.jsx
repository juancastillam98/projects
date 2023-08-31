import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
/*Vamos a importar un componente, que es un provider y una función. RouterProvider va a ser el compoente principal*/
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Layout} from "./components/Layout.jsx"
import {NuevoCliente, action as nuevoClienteAction} from "./pages/NuevoCliente.jsx";
import {Index, loader as clientesLoader} from "./pages/Index.jsx";//loader es la función loader del Index
import {ErrorPage} from "./components/ErrorPage.jsx";
import {EditarCliente, loader as editarClienteLoader, action as actualizarCliente} from "./pages/EditarCliente.jsx";
import {action as eliminarClienteAction} from "./components/Cliente.jsx"

//Este va a ser el encargo de definir las rutas
const router = createBrowserRouter([
  {
    /*Para que lo entiendes, en este primer bloque, vamos a definir qué contenido va a estar en toddas las páginas. En este caso, estamos diciendo que
    el componente <Layout> va ser lo que se va a mostrar en todas las páginas. Lo que vaya dentro de children va a ser el contenido dinámico */
    path: '/',
    element: <Layout/>,//Layout es el componente a mostrar. Este compoentente se mostrará en todas las páginas
    children: [//lo que haya dentro de children es lo que se va mostrar en el <Outlet/>
      {
        index: true, //así estamos diciendo cuál va a ser el contenido de la página principal (cuando accedamos a /)
        element: <Index />,
        loader: clientesLoader,
        errorElement: <ErrorPage />
      },
      {
          path: '/clientes/nuevo',
          element: <NuevoCliente />,
          action: nuevoClienteAction,
        errorElement: <ErrorPage />
      },
      {
        path: "/clientes/:clienteId/editar",//al ponerle los : estamos indicando que va a ser una ruta dinámica.Es decir, que va a cambiar (en este caso) el id del cliente.
          element: <EditarCliente />,
        loader: editarClienteLoader,
        action: actualizarCliente,
        errorElement: <ErrorPage />
      },
      {
        path: "/clientes/:clienteId/eliminar",
        action: eliminarClienteAction
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   {/* <App />*/}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
