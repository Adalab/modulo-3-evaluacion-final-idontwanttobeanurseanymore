import { Link, useParams } from 'react-router';
import { useEffect, useState } from 'react';

export default function CharacterDetailPage({ findCharacter }) {
  const [changeBg, setChangeBg] = useState(false);
  const changingBg = () => {
    setChangeBg(true);
  };
  useEffect(() => {
    document.body.classList.add('bgDetailCard');

    return () => {
      document.body.classList.remove('bgDetailCard');
    };
  }, []);

  const params = useParams();
  const characterFound = findCharacter(params.id);
  const dummyCharacterImg =
    'https://dummyimage.com/210x295/ffffff/656565.png&text=Harry+Potter';
  const housesImg = {
    imgGryffindor: './src/assets/harry-potter-gryffindor.avif',
    imgSlytherin: './src/assets/harry-potter-slytherin.avif',
    imgRavenclaw: './src/assets/harry-potter-ravenclaw.avif',
    imgHufflepuff: './src/assets/harry-potter-hufflepuff.avif',
  };
  let gender;

  if (characterFound.gender) {
    if (characterFound.gender === 'male') {
      gender = 'masculino';
    } else if (characterFound.gender === 'female') {
      gender = 'femenino';
    } else {
      gender = 'desconocido';
    }
  }

  const translation = {
    status: {
      true: {
        male: 'vivo',
        female: 'viva',
      },
      false: {
        male: 'muerto',
        female: 'muerta',
      },
    },
    gender: {
      male: 'masculino',
      female: 'femenino',
    },
  };

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
            <br /> <span>{translation.gender[characterFound.gender]}</span>
          </p>
          <p>
            Estudiante: <span>{characterFound.student ? '✔' : '✗'}</span>
          </p>
          <p>
            Estatus
            <br />{' '}
            <span>
              {
                translation.status[characterFound.isItAlive][
                  characterFound.gender
                ]
              }
            </span>
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
