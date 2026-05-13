import { Link } from 'react-router';
//, ${new Date().getFullYear() - characterObj.birthYear} años
export default function CharacterItem({ characterObj }) {
  return (
    <Link to={`/detalle${characterObj.id}`} className=''>
      <img
        className='characterImg'
        src={`${characterObj.image ? characterObj.image : `https://placehold.co/210x295/ffffff/666666/?format=svg&text=${characterObj.name}`}`}
        alt={`Foto de ${characterObj.name}`}
        title={`Foto de ${characterObj.name}`}
      ></img>
      <h3 className=''>{characterObj.name}</h3>
      <div>
        <p>{characterObj.house}</p>
        <p>{characterObj.species}</p>
      </div>
    </Link>
  );
}
{
  /**const age = character.birthYear
  ? new Date().getFullYear() - character.birthYear
  : 'Desconocida'; */
}
