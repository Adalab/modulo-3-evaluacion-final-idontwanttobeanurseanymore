import { Link } from 'react-router';
import Hogwarts from '../assets/icon-hogwarts.png';
import LondonTrain from '../assets/london.jpg';

export default function Error404Page() {
  const hogwartsImg = Hogwarts;
  const trainImg = LondonTrain;
  return (
    <article className='error404Page'>
      <h1 className='error404Pagetitle'>¡Ups!</h1>
      <p className='error404PageContent'>
        No hemos podido encontrar la página que buscas
      </p>{' '}
      <Link to='/'>
        <div className='error404Link'>
          <img src={trainImg} className='error404PageImg2'></img>

          <p className='error404TextLink'>Volver</p>
        </div>
      </Link>
    </article>
  );
}
