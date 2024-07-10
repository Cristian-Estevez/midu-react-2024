import { Link } from '../Link'

export default function Home() {
  return (
    <>
      <h1>Custom React Router</h1>
      <p>Página de desarrollo para un React-Router demo</p>
      <Link to="/about">Acerca del desarrollador.</Link>
    </>
  )
}
