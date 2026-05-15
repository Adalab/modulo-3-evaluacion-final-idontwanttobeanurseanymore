import { Link, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import GryffindorImport from '../assets/harry-potter-gryffindor.avif';
import SlytherinImport from '../assets/harry-potter-slytherin.avif';
import RavenclawImport from '../assets/harry-potter-ravenclaw.avif';
import HufflepuffImport from '../assets/harry-potter-hufflepuff.avif';

export default function CharacterDetailPage({ findCharacter, translation }) {
  useEffect(() => {
    document.body.classList.add('bgDetailCard');

    return () => {
      document.body.classList.remove('bgDetailCard');
    };
  }, []);

  const params = useParams();
  const characterFound = findCharacter(params.id);
  if (!characterFound) {
    return <p>Personaje no encontrado</p>;
  }

  const housesImg = {
    imgGryffindor: GryffindorImport,
    imgSlytherin: SlytherinImport,
    imgRavenclaw: RavenclawImport,
    imgHufflepuff: HufflepuffImport,
  };

  return (
    <article className={` detailCard house${characterFound.house}`}>
      <Link to='/' className='backLink'>
        Volver
      </Link>
      <img
        className='characterImgDetail'
        src={characterFound.image}
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
            alt={`Escudo de la casa ${characterFound.house} `}
            title={`Escudo de la casa ${characterFound.house} `}
          ></img>
        </div>
        <hr />
        <div className='gridInfo'>
          <p>
            Fecha de nacimiento
            <br />
            <span>{characterFound.birthDate || 'desconocida'}</span>
          </p>
          <p>
            Género
            <br /> <span>{translation.gender[characterFound.gender]}</span>
          </p>
          <p>
            Ascendencia
            <br /> <span>{characterFound.ancestry || 'desconocida'}</span>
          </p>
          <p>
            Estatus
            <br />
            <span>
              {
                translation.status[characterFound.isItAlive][
                  characterFound.gender
                ]
              }
            </span>
          </p>
          <p>
            Estudiante <span>{characterFound.student ? '✔' : '✗'}</span>
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
