import { Link } from 'react-router';

export default function Error404Page() {
  return (
    <article>
      <h1>¡Ups!</h1>
      <p>No hemos podido encontrar la página que buscas.</p>
      <p>&mdash; El equipo</p>
      <p>
        <Link to='/'>Volver a la página de inicio</Link>
      </p>
    </article>
  );
}
