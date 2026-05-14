import { Link, useParams } from 'react-router';

export default function CharacterDetailPage({ findCharacter }) {
  const params = useParams();
  const characterFound = findCharacter(params.id);
  const dummyCharacterImg =
    'https://dummyimage.com/210x295/ffffff/656565.png&text=Harry+Potter';
  let gender;
  let isItAlive;
  if (characterFound.gender) {
    if (characterFound.gender === 'male') {
      gender = 'masculino';
      isItAlive = 'vivo';
    }
  } else if (characterFound.gender === 'female') {
    gender = 'femenino';
    isItAlive = 'viva';
  } else {
    gender = 'desconocido';
  }

  // console.log(characterFound);
  return (
    <article className={`house${characterFound.house}`}>
      <img
        className='characterImg'
        src={`${characterFound.image ? characterFound.image : dummyCharacterImg}`}
        alt={`Foto de ${characterFound.name}`}
        title={`Foto de ${characterFound.name}`}
      ></img>
      <section>
        <h2>{characterFound.name}</h2>
        <div>
          <p>Casa: {characterFound.house}</p>
          <p>Estudiante: {characterFound.student ? 'Si' : 'No'}</p>
          <p>Género: {gender}</p>
          <p>
            Fecha de nacimiento: {characterFound.birthDate || 'desconocida'}
          </p>
          <p>Estatus: {isItAlive ? isItAlive : 'Sin vida'}</p>
          <p>
            Especie:{' '}
            {characterFound.specie ? characterFound.specie : 'desconocida'}
          </p>
          <p>
            Intérprete:{' '}
            {characterFound.actor ? characterFound.actor : 'desconocido'}
          </p>
        </div>
        <Link to='/'>Volver</Link>
      </section>
    </article>
  );
}
{
  /**   return {
              id: characterObj.id,
              name: characterObj.name,
              house: characterObj.house,
              isItAlive: characterObj.alive,
              gender: characterObj.gender,
              specie: characterObj.species,
              alternativeName: characterObj.alternate_names,
              image: characterObj.image,
              actor: characterObj.actor,
              student: characterObj.hogwartsStudent,
              birthYear: parseInt(characterObj.hogwartsStudent.yearOfBirth),
            };
            new Date().getFullYear() - character.birthYear */
}
