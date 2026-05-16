import CharacterCard from './CharacterCard';

export default function CharacterList({ characters }) {
  return (
    <>
      <p className='searchText'>Tu búsqueda:</p>
      <ul className='characterUl'>
        {characters.map((characterObj) => (
          <li key={characterObj.id} className='characterList'>
            <CharacterCard characterObj={characterObj}></CharacterCard>
          </li>
        ))}
      </ul>
    </>
  );
}
