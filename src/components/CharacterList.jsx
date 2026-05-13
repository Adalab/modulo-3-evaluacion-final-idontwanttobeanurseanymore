import CharacterItem from './CharacterItem';

export default function CharacterList({ characters }) {
  return (
    <ul className=''>
      {characters.map((characterObj) => (
        <li key={characterObj.id} className=''>
          <CharacterItem characterObj={characterObj}></CharacterItem>
        </li>
      ))}
    </ul>
  );
}
