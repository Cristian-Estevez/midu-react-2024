import { LazyExoticComponent } from "react";

export interface RouteProps {path:string, Component: LazyExoticComponent<() => JSX.Element>}

export default function Route(props: RouteProps) {
    return null
}
