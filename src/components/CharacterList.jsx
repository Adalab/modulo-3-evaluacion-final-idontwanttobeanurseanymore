import CharacterCard from './CharacterCard';

export default function CharacterList({ characters, showList }) {
  if (!showList) return;
  return (
    <>
      <h2 className='filtersText'>Tu búsqueda:</h2>
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
