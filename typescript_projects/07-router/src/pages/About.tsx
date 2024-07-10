import { Link } from '../Link'

export default function About() {
  return (
    <>
      <h1>Acerca de mí.</h1>
      <div>
        <img
          src="https://lh3.googleusercontent.com/ogw/AF2bZygn3nFQI7rRrsjEhA3eDfyiW-_LzwfN8g4dWXuyuI22UY8=s32-c-mo"
          alt="Foto de cristian estevez"
        />
      </div>
      <p>Hola Mi nombre es Cristian y estoy creando un clon de react-router</p>
      <Link to="/">Volver a home.</Link>
    </>
  )
}
