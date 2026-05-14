import CharacterCard from './CharacterCard';

export default function CharacterList({ characters }) {
  return (
    <ul className='characterUl'>
      {characters.map((characterObj) => (
        <li key={characterObj.id} className='characterList'>
          <CharacterCard characterObj={characterObj}></CharacterCard>
        </li>
      ))}
    </ul>
  );
}
