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
  const hasNoResults = characters.length === 0;

  return (
    <>
      <Filters
        name={name}
        house={house}
        houses={houses}
        handleInputHouse={handleInputHouse}
        handleInputName={handleInputName}
      ></Filters>
      <section class='filtersText'>
        {hasNoResults ? (
          <p>"{name}" no coincide con ningún personaje</p>
        ) : (
          <CharacterList characters={characters} />
        )}
      </section>
    </>
  );
}
