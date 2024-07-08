import Link from "../Link";

export default function Default404() {
  return (
    <>
      <div>
        <h1>This is NOT fine</h1>
        <img
          src="https://midu.dev/images/this-is-fine-404.gif"
          alt="Gif perro this is fine 404."
        />
      </div>
      <Link to="/">Volver a home</Link>
    </>
  );
}
