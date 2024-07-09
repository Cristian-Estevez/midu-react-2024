import { lazy, Suspense } from "react";
import "./App.css";
import Router from "./Router";
import Default404 from "./pages/Default404";
import Route from "./Route";

const About = lazy(()=> import('./pages/About'))
const Home = lazy(() => import('./pages/Home'))
const Search = lazy(() => import('./pages/Search'))

const appRoutes = [
  {
    path: "/search/:query",
    Component: Search,
  },
];

export default function App() {
  return (
    <main>
      <Suspense fallback={<div>Cargando...</div>}>
        <Router routes={appRoutes} defaultComponent={Default404} >
          <Route path='/' Component={Home} />
          <Route path='/about' Component={About} />
        </Router>
      </Suspense>
    </main>
  );
}
