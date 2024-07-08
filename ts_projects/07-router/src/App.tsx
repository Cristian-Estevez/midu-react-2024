import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Router from "./Router";
import Default404 from "./pages/Default404";

const appRoutes = [
  {
    path: "/about",
    component: About,
  },
  {
    path: "/",
    component: Home,
  },
];

export default function App() {
  return (
    <main>
      <Router routes={appRoutes} defaultComponent={Default404} />
    </main>
  );
}
