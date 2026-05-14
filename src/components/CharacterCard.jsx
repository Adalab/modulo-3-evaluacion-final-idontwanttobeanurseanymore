import { Link } from 'react-router';
//, ${new Date().getFullYear() - characterObj.birthYear} años
export default function CharacterCard({ characterObj, findCharacter }) {
  const dummyCharacterImg =
    'https://dummyimage.com/210x295/ffffff/656565.png&text=Harry+Potter';
  return (
    <Link to={`/detalle/${characterObj.id}`}>
      <img
        className='characterImg'
        src={`${characterObj.image ? characterObj.image : dummyCharacterImg}`}
        alt={`Foto de ${characterObj.name}`}
        title={`Foto de ${characterObj.name}`}
      ></img>
      <div>
        <h3 className='characterName'>{characterObj.name}</h3>
        <p className='characterHouse'>{characterObj.house}</p>
      </div>
    </Link>
  );
}
{
  /**const age = character.birthYear
  ? new Date().getFullYear() - character.birthYear
  : 'Desconocida'; 
          src={`${characterObj.image ? characterObj.image : `https://placehold.co/210x295/ffffff/666666/?format=svg&text=${characterObj.name}${characterObj.house}`}`}*/
}
