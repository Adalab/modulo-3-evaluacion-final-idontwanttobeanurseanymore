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
  let isItAlive = characterFound.isItAlive;
  if (characterFound.gender) {
    if (characterFound.gender === 'male' && isItAlive) {
      gender = 'masculino';
      isItAlive = 'vivo';
    } else if (characterFound.gender === 'female' && isItAlive) {
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
        <div className='houseRow'>
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
            Género
            <br /> <span>{gender}</span>
          </p>
          <p>
            Estudiante: <span>{characterFound.student ? 'si' : 'no'}</span>
          </p>
          <p>
            Estatus
            <br /> <span>{isItAlive ? isItAlive : 'Sin vida'}</span>
          </p>

          <p>
            Fecha de nacimiento
            <br />
            <span>{characterFound.birthDate || 'desconocida'}</span>
          </p>
          <p>
            Ascendencia
            <br /> <span>{characterFound.ancestry || 'desconocida'}</span>
          </p>

          <p>
            Intérprete
            <br />
            <span>
              {characterFound.actor ? characterFound.actor : 'desconocido'}
            </span>
          </p>
        </div>
      </section>
    </article>
  );
}
{
}
