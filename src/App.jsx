import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import CharacterList from './components/CharacterList';
import LandingPage from './components/LandingPage';
import CharacterDetailPage from './components/CharacterDetailPage';
import Error404Page from './components/Error404Page';

import Castle from './assets/icon-magic-3.png';
import Harry from './assets/icon-magic-4.png';

function App() {
  const [characters, setCharacters] = useState([]);
  const [characterName, setCharacterName] = useState('');
  const [characterHouse, setCharacterHouse] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [features, setFeatures] = useState([]);

  const iconsImg = {
    imgCastle: Castle,
    imgHarry: Harry,
  };
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
              hasRealImage: !!characterObj.image,
              image: characterObj.image || iconsImg['imgHarry'],
              actor: characterObj.actor,
              student: characterObj.hogwartsStudent,
              ancestry: characterObj.ancestry,
              birthDate: characterObj.dateOfBirth || null,
              human: characterObj.species === 'human',
            };
          })
        );
      })
      .catch((error) => {
        console.error('Ha ocurrido un error:', error);
      });
  }, []);
  const translation = {
    status: {
      true: {
        male: 'vivo',
        female: 'viva',
      },
      false: {
        male: 'muerto',
        female: 'muerta',
      },
    },
    gender: {
      male: 'masculino',
      female: 'femenino',
    },
  };

  const allHouses = characters
    .map((characterObj) => characterObj.house)
    .filter((house) => house);

  const houses = [...new Set(allHouses)];
  useEffect(() => {
    if (houses.length > 0) {
      setCharacterHouse(houses[0]);
    }
  }, [characters]);

  const handleInputName = (ev) => {
    ev.preventDefault();
    setCharacterName(ev.target.value);
  };
  const handleInputHouse = (ev) => {
    ev.preventDefault();
    setCharacterHouse(ev.target.value);
  };
  const handleCheckbox = (ev) => {
    const { value, checked } = ev.target;

    setFeatures((prev) => {
      if (checked) {
        return [...prev, value];
      } else {
        return prev.filter((item) => item !== value);
      }
    });
  };
  const filteredCharacters = [...characters]
    .filter(
      (
        characterObj //filter()->array de los que coinciden
      ) => characterObj.name.toLowerCase().includes(characterName.toLowerCase())
    )
    .filter((characterObj) =>
      characterHouse ? characterObj.house === characterHouse : true
    )
    .filter((characterObj) => {
      if (features.length === 0) return true;

      return features.every((feature) => {
        // true/false de todos los que cumplen
        if (feature === 'human') return characterObj.human === true;
        if (feature === 'noHouse') return characterObj.house === '';
        if (feature === 'hasImage') return characterObj.hasRealImage;
        if (feature === 'student') return characterObj.student === true;
        //some() -> true/false al menos uno coincide
        return true;
      });
    })
    .sort((a, b) => {
      if (sortBy === 'abc') {
        const search = characterName.toLowerCase(); //mi busqueda
        const score = (name) => {
          const listName = name.toLowerCase(); // la lista
          if (listName.startsWith(search)) return 0;
          if (listName.includes(search)) return 1;
          return 2;
        };
        return (
          score(a.name) - score(b.name) ||
          a.name.localeCompare(b.name, 'es', { sensitivity: 'base' })
        );
      }
    });

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
                sortBy={sortBy}
                setSortBy={setSortBy}
                handleCheckbox={handleCheckbox}
                features={features}
              ></LandingPage>
            }
          ></Route>
          <Route
            path='/detalle/:id'
            element={
              <CharacterDetailPage
                findCharacter={findCharacter}
                translation={translation}
              ></CharacterDetailPage>
            }
          ></Route>
          <Route path='*' element={<Error404Page></Error404Page>}></Route>
        </Routes>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
