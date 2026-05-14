import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import CharacterList from './components/CharacterList';
import LandingPage from './components/LandingPage';
import CharacterDetailPage from './components/CharacterDetailPage';
import Error404Page from './components/Error404Page';

function App() {
  const [characters, setCharacters] = useState([]);
  const [characterName, setCharacterName] = useState('');
  const [characterHouse, setCharacterHouse] = useState('');

  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then((res) => res.json())
      .then((data) => {
        setCharacters(
          data.map((characterObj) => {
            return {
              id: characterObj.id,
              name: characterObj.name,
              house: characterObj.house,
              isItAlive: characterObj.alive,
              gender: characterObj.gender,
              specie: characterObj.species,
              alternativeName: characterObj.alternate_names,
              image: characterObj.image,
              actor: characterObj.actor,
              student: characterObj.hogwartsStudent,
              birthDate: characterObj.dateOfBirth || null,
            };
          })
        );
      });
  }, [characterHouse]);

  const allHouses = characters
    .map((characterObj) => characterObj.house)
    .filter((house) => house);
  const houses = [...new Set(allHouses)];

  const handleInputName = (ev) => {
    setCharacterName(ev.target.value);
  };
  const handleInputHouse = (ev) => {
    setCharacterHouse(ev.target.value);
  };
  const filteredCharacters = characters
    .filter((characterObj) =>
      characterObj.name.toLowerCase().includes(characterName.toLowerCase())
    )
    .filter((characterObj) =>
      characterHouse === '' ? true : characterObj.house === characterHouse
    );

  const findCharacter = (searchId) => {
    return characters.find((characterObj) => characterObj.id === searchId);
  };

  return (
    <div>
      <Header></Header>
      <main>
        <Routes>
          <Route
            index
            element={
              <LandingPage
                characters={filteredCharacters}
                name={characterName}
                house={characterHouse}
                houses={houses}
                handleInputHouse={handleInputHouse}
                handleInputName={handleInputName}
              ></LandingPage>
            }
          ></Route>
          <Route
            path='/detalle/:id'
            element={
              <CharacterDetailPage
                findCharacter={findCharacter}
              ></CharacterDetailPage>
            }
          ></Route>
          <Route path='*' element={<Error404Page></Error404Page>}></Route>
        </Routes>

        <section></section>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
