import CharacterList from './CharacterList';
import Filters from './Filters';

export default function LandingPage({
  characters,
  name,
  house,
  houses,
  handleInputName,
  handleInputHouse,
}) {
  return (
    <>
      <Filters
        name={name}
        house={house}
        houses={houses}
        handleInputHouse={handleInputHouse}
        handleInputName={handleInputName}
      ></Filters>
      <section>
        <h2></h2>
        <CharacterList characters={characters}></CharacterList>
      </section>
    </>
  );
}
