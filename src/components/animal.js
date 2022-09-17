/*import { useEffect, useState } from "react";

function DadJoke() {
  const [joke, setJoke] = useState("jokes here");

  useEffect(() => {
    getJoke();
  }, []);

  const getJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    setJoke(data.joke);
    
  };

  return (
    <div className="container">
      <h1>Dad Joke</h1>
      <p className="joke">{joke}</p>
      <button type="button" className="btn" onClick={getJoke}>
        Get Another Joke
      </button>
    </div>
  );
}

export default DadJoke; */

import { useEffect, useState } from "react";

function Animal() {
  const [animal, setAnimal] = useState("animal here");
  const [animal1, setAnimal1] = useState("animal here");
  const [animal2, setAnimal2] = useState("animal here");
  const [animal3, setAnimal3] = useState("animal here");
  const [animal4, setAnimal4] = useState("animal here");
  const [animal5, setAnimal5] = useState("animal here");
//   const [id, setAnimal5] = props.Animal;
 

  useEffect(() => {
    getAnimal();
  }, []);

  const getAnimal = async () => {
    const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    setAnimal(data.name);
    setAnimal1(data.habitat);
    setAnimal2(data.latin_name);
    setAnimal3(data.diet);
    setAnimal4(data.geo_range);
    setAnimal5(data.image_link);
    
  };

  return (
    <div className="container">
      <h1>Animal</h1>
      <img src = {animal5} height="150" width="300"/>
      <p className="joke" ><b>Nome:</b> {animal}</p>
      <p className="joke1"><b>Habitat: </b> {animal1}.</p>
      <p className="joke2"><b>Nome em latim: </b> {animal2}.</p>
      <p className="joke3"><b>Dieta: </b> {animal3}.</p>
      <p className="joke4"><b>Localização: </b> {animal4}.</p>
      
      <button type="button" className="btn" onClick={getAnimal}>
        Buscar Animal
      </button>
    </div>
  );
}

export default Animal;