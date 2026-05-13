import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import CharacterList from './components/CharacterList';
import LandingPage from './components/LandingPage';
import CharacterDetailPage from './components/CharacterDetailPage';

function App() {
  const [characters, setCharacters] = useState([]);
  const [characterName, setCharacterName] = useState('');
  const [characterHouse, setCharacterHouse] = useState('');

  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters/house/gryffindor')
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
              birthYear: parseInt(characterObj.hogwartsStudent.yearOfBirth),
            };
          })
        );
      });
  }, []);

  const handleInputName = (ev) => {
    setCharacterName(ev.target.value);
  };

  const handleInputHouse = (ev) => {
    setCharacterHouse(ev.target.value);
  };

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
                name={name}
                house={house}
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
        </Routes>

        <section></section>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
