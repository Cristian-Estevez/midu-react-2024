import { ReactNode, useEffect, useState } from "react";
import { EVENTS } from "./constants";

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

  const Page = routes.find(({ path }) => path === currentPath)?.component;
  return Page ? <Page /> : <DefaultComponent />;
}
