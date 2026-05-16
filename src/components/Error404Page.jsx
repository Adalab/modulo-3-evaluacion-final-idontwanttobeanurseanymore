import { Link } from 'react-router';

export default function Error404Page() {
  return (
    <article className='error404Page'>
      <h1>¡Ups!</h1>
      <p>No hemos podido encontrar la página que buscas</p>

      <Link to='/'>Volver a la página de inicio</Link>
    </article>
  );
}
