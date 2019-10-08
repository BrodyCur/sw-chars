import React, { useState } from 'react';
import StarWarsChars from './components/char-info';
import './App.css';

function App() {

  const [currentCharacter, setCharacterValues] = useState({});

  const fetchData = () => {

    const url = 'https://swapi.co/api/people/1';

    fetch(url, {
      method: 'get',
      dataType: 'json'
    })
    .then((response) => response.json())
    .then(response => { 
      setCharacterValues(response)
      console.log(response)
    })
    .catch(err => {
      console.log('Fetch Error :-S', err);
    })
  }

  return (
    <div>
      <button onClick={() => fetchData()}>Lets go</button>
      <StarWarsChars fetchData={fetchData} currentCharacter={currentCharacter} />
    </div>
  );
}

export default App;
