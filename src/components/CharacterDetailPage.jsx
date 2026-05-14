import { Link, useParams } from 'react-router';

export default function CharacterDetailPage({ findCharacter }) {
  const params = useParams();
  const characterFound = findCharacter(params.id);
  const dummyCharacterImg =
    'https://dummyimage.com/210x295/ffffff/656565.png&text=Harry+Potter';
  const housesImg = {
    imgGryffindor: '/harry-potter-gryffindor.avif',
    imgSlytherin: '/harry-potter-slytherin.avif',
    imgRavenclaw: '/harry-potter-ravenclaw.avif',
    imgHufflepuff: '/harry-potter-hufflepuff.avif',
  };
  let gender;
  let isItAlive;
  if (characterFound.gender) {
    if (characterFound.gender === 'male') {
      gender = 'masculino';
      isItAlive = 'vivo';
    } else if (characterFound.gender === 'female') {
      gender = 'femenino';
      isItAlive = 'viva';
    } else {
      gender = 'desconocido';
    }
  }

  return (
    <article className={` detailCard house${characterFound.house}`}>
      <Link to='/' className='backLink'>
        Volver
      </Link>
      <img
        className='characterImgDetail'
        src={`${characterFound.image ? characterFound.image : dummyCharacterImg}`}
        alt={`Foto de ${characterFound.name}`}
        title={`Foto de ${characterFound.name}`}
      ></img>

      <section className='detailContent'>
        <h2 className='detailName'>{characterFound.name}</h2>
        <hr />
        <div class='houseRow'>
          <p>{characterFound.house}</p>
          <img
            className='housesImg'
            src={housesImg[`img${characterFound.house}`]}
            alt='house'
            alt={`Escudo de la casa ${characterFound.house} `}
            title={`Escudo de la casa ${characterFound.house} `}
          ></img>
        </div>
        <hr />
        <div className='gridInfo'>
          <p>
            Género: <span>{gender}</span>
          </p>
          <p>Estatus: {isItAlive ? isItAlive : 'Sin vida'}</p>
          <p>Estudiante: {characterFound.student ? 'Si' : 'No'}</p>
          <p>Fecha de nacimiento {characterFound.birthDate || 'desconocida'}</p>

          <p>
            Intérprete:{' '}
            {characterFound.actor ? characterFound.actor : 'desconocido'}
          </p>
        </div>
      </section>
    </article>
  );
}
{
}
