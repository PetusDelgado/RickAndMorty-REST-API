import { useEffect, useState } from "react";
import character from './Character'
import Character from "./Character";
function CharacterList() {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacters(data.results);
    }

    fetchData();
  }, []);

  return (
    <div>
      {characters.map((character) => {
        return (
          <Character character={character}/>
        );
      })}
    </div>
  );
}
export default CharacterList;
