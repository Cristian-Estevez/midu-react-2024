import { Children, PropsWithChildren, ReactNode, useEffect, useState } from "react";
import { EVENTS } from "./constants";
import { match } from "path-to-regexp";
import { getCurrentPath } from "./utils";

export interface RouteParams extends Record<string,any>{}

export interface RouterParams extends PropsWithChildren{
  routes: Array<any>;
  defaultComponent?: () => ReactNode;
}

export default function Router({
  routes = [],
  defaultComponent: DefaultComponent = () => <h1>404</h1>,
  children
}:
  RouterParams
) {
  const [currentPath, setCurrentPath] = useState(getCurrentPath());

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(getCurrentPath());
    };

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);

  let routeParams: RouteParams= {};

  const routesFromchildren = Children.map(children, ({props, type} : any) => {
    return type.name === 'Route' ? props : null
  })

  const routesToUse = routes.concat(routesFromchildren).filter(Boolean)

  const Page = routesToUse.find(({ path }:{path:string}) => {
    if (path === currentPath) return true;

    const matchedUrl = match(path, { decode: decodeURIComponent });
    const matched = matchedUrl(currentPath);
    if (!matched) return false;
    routeParams = matched.params;
    return true;
  })?.Component;

  return Page ? <Page routeParams={routeParams} /> : <DefaultComponent />;
}
