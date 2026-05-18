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
      <Link to='/' className='error404Link'>
        <div className='error404Img'>
          <img src={trainImg} className='error404PageImg2'></img>
        </div>
        <p className='error404TextLink'>Volver</p>
      </Link>
    </article>
  );
}
