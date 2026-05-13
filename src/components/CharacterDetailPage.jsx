import { Link, useParams } from 'react-router';

export default function CharacterDetailPage({ findCharacter }) {
  const params = useParams();
  const characterFound = findCharacter(params.id);
  console.log(params.id);
  return (
    <article>
      {params.id}
      <img className='' src={characterFound.image} alt=''></img>
      <section>
        <h2>{characterFound.name}</h2>
        <div>
          <p>{characterFound.isItAlive}</p>
          <p>{characterFound.actor}</p>
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
            }; */
}
