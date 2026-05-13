import { Link, useParams } from 'react-router';

export default function CharacterDetailPage({ findCharacter }) {
  const params = useParams();
  const characterFound = findCharacter(params.id);

  // console.log(characterFound);
  return (
    <article className=''>
      <img
        className='characterImg'
        src={`${characterFound.image ? characterFound.image : characterImg}`}
        alt={`Foto de ${characterFound.name}`}
        title={`Foto de ${characterFound.name}`}
      ></img>
      <section>
        <h2>{characterFound.name}</h2>
        <div>
          <p>Casa: {characterFound.house}</p>
          <p>Estudiante: {characterFound.student}</p>
          <p>Género: {characterFound.gender}</p>
          <p>Fecha de nacimiento: {characterFound.birthDate}</p>
          <p>
            {characterFound.isItAlive
              ? `Estatus: ${characterFound.isItAlive}`
              : ''}
          </p>
          <p>{characterFound.specie}</p>
          <p>{characterFound.actor ? characterFound.actor : ''}</p>
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
