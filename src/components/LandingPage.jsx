import CharacterList from './CharacterList';
import Filters from './Filters';

export default function LandingPage({
  characters,
  name,
  house,
  houses,
  handleInputName,
  handleInputHouse,
  sortBy,
  setSortBy,
  human,
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
        sortBy={sortBy}
        setSortBy={setSortBy}
        human={human}
      ></Filters>
      <section className='searchText'>
        {hasNoResults ? (
          <p>"{name}" no coincide con ningún personaje</p>
        ) : (
          <CharacterList characters={characters} />
        )}
      </section>
    </>
  );
}
