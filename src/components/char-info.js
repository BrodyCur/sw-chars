import React from 'react';

const StarWarsChars = ( {currentCharacter} ) => {

  // const charDetails = currentCharacter.map(character => {
  //   return (<li>{character}</li>)
  // })

  return (
    <div className="character-info" >
      <h2>Lookit Star Wars Chars</h2>
      <ul>
        <li>{currentCharacter.name}</li>
        <li>{currentCharacter.birth_year}</li>
        <li>{currentCharacter.height}</li>
        <li>{currentCharacter.mass}</li>
      </ul>
    </div>
  )
};

export default StarWarsChars;