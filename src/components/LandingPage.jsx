import CharacterList from './CharacterList';
import Filters from './Filters';

export default function LandingPage({
  characters,
  name,
  house,
  houses,
  handleInputName,
  handleInputHouse,
  showList,
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
      <section>
        {hasNoResults ? (
          <p>No se encuentran resultados</p>
        ) : (
          <CharacterList characters={characters} showList={showList} />
        )}
      </section>
    </>
  );
}
