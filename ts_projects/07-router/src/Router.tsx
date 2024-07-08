import { ReactNode, useEffect, useState } from "react";
import { EVENTS } from "./constants";
import { match } from "path-to-regexp";

export default function Router({
  routes = [],
  defaultComponent: DefaultComponent = () => <h1>404</h1>,
}: {
  routes: Array<any>;
  defaultComponent?: () => ReactNode;
}) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);

  let routeParams = {};

  const Page = routes.find(({ path }) => {
    if (path === currentPath) return true;

    const matchedUrl = match(path, { decode: decodeURIComponent });
    const matched = matchedUrl(currentPath);
    if (!matched) return false;
    routeParams = matched.params;
    return true;
  })?.component;

  return Page ? <Page routeParams={routeParams} /> : <DefaultComponent />;
}
