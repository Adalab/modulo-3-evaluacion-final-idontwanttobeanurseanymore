import { Link } from 'react-router';

export default function CharacterCard({ characterObj }) {
  return (
    <Link to={`/detalle/${characterObj.id}`}>
      <img
        className='characterImg'
        src={characterObj.image}
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
