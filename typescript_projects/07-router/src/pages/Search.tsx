import { useEffect } from "react";
import { RouteParams } from "../Router";

export default function Search(props:{routeParams:RouteParams}) {
  useEffect(()=> {
    document.title =`Búsqueda ${props.routeParams.query}`

    // Aca se efectuaría la búsqueda
  }, [])
  return <h1>Has buscado "{props.routeParams.query}"</h1>
}
