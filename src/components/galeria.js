import { useEffect, useState } from "react";

function Galeria() {
  const [galeria, setGaleria] = useState("galeria here");
  const [galeria1, setGaleria1] = useState("galeria here");
  const [galeria2, setGaleria2] = useState("galeria here");
  const [galeria3, setGaleria3] = useState("galeria here");
  const [galeria4, setGaleria4] = useState("galeria here");
  const [galeria5, setGaleria5] = useState("galeria here");
  const [galeria0, setGaleria0] = useState("galeria here");
  const [galeria11, setGaleria11] = useState("galeria here");
  const [galeria21, setGaleria21] = useState("galeria here");
  const [galeria31, setGaleria31] = useState("galeria here");
  const [galeria41, setGaleria41] = useState("galeria here");
  const [galeria51, setGaleria51] = useState("galeria here");
  const [galeria00, setGaleria00] = useState("galeria here");
  const [galeria111, setGaleria111] = useState("galeria here");
  const [galeria211, setGaleria211] = useState("galeria here");
  const [galeria311, setGaleria311] = useState("galeria here");
  const [galeria411, setGaleria411] = useState("galeria here");
  const [galeria511, setGaleria511] = useState("galeria here");
  const [galeria000, setGaleria000] = useState("galeria here");
  const [galeria1111, setGaleria1111] = useState("galeria here");
  const [galeria2111, setGaleria2111] = useState("galeria here");
  const [galeria3111, setGaleria3111] = useState("galeria here");
  const [galeria4111, setGaleria4111] = useState("galeria here");
  const [galeria5111, setGaleria5111] = useState("galeria here");
  const [galeria0000, setGaleria0000] = useState("galeria here");
  const [galeria11111, setGaleria11111] = useState("galeria here");
  const [galeria21111, setGaleria21111] = useState("galeria here");
  const [galeria31111, setGaleria31111] = useState("galeria here");
  const [galeria41111, setGaleria41111] = useState("galeria here");
  const [galeria51111, setGaleria51111] = useState("galeria here");
//   const [id, setGaleria5] = props.Galeria;
 

  useEffect(() => {
    getGaleria();
    getGaleria1();
    getGaleria2();
    getGaleria3();
    getGaleria4();
  }, []);

  const getGaleria = async () => {
    const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    setGaleria(data.name);
    setGaleria1(data.habitat);
    setGaleria2(data.latin_name);
    setGaleria3(data.diet);
    setGaleria4(data.geo_range);
    setGaleria5(data.image_link);
    
  };

  const getGaleria1 = async () => {
    const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    setGaleria0(data.name);
    setGaleria11(data.habitat);
    setGaleria21(data.latin_name);
    setGaleria31(data.diet);
    setGaleria41(data.geo_range);
    setGaleria51(data.image_link);
    
  };

  const getGaleria2 = async () => {
    const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    setGaleria00(data.name);
    setGaleria111(data.habitat);
    setGaleria211(data.latin_name);
    setGaleria311(data.diet);
    setGaleria411(data.geo_range);
    setGaleria511(data.image_link);
    
  };

  const getGaleria3 = async () => {
    const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    setGaleria000(data.name);
    setGaleria1111(data.habitat);
    setGaleria2111(data.latin_name);
    setGaleria3111(data.diet);
    setGaleria4111(data.geo_range);
    setGaleria5111(data.image_link);
    
  };

  const getGaleria4 = async () => {
    const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    setGaleria0000(data.name);
    setGaleria11111(data.habitat);
    setGaleria21111(data.latin_name);
    setGaleria31111(data.diet);
    setGaleria41111(data.geo_range);
    setGaleria51111(data.image_link);
    
  };

  return (
    <div className="container">
      <h1>Animal</h1>
      <img src = {galeria5} height="150" width="300"/>
      <p className="joke" ><b>Nome:</b> {galeria}</p>
      <p className="joke1"><b>Habitat: </b> {galeria1}.</p>
      <p className="joke2"><b>Nome em latim: </b> {galeria2}.</p>
      <p className="joke3"><b>Dieta: </b> {galeria3}.</p>
      <p className="joke4"><b>Localização: </b> {galeria4}.</p>
      <img src = {galeria51} height="150" width="300"/>
      <p className="joke" ><b>Nome:</b> {galeria0}</p>
      <p className="joke1"><b>Habitat: </b> {galeria11}.</p>
      <p className="joke2"><b>Nome em latim: </b> {galeria21}.</p>
      <p className="joke3"><b>Dieta: </b> {galeria31}.</p>
      <p className="joke4"><b>Localização: </b> {galeria41}.</p>
      <img src = {galeria511} height="150" width="300"/>
      <p className="joke" ><b>Nome:</b> {galeria00}</p>
      <p className="joke1"><b>Habitat: </b> {galeria111}.</p>
      <p className="joke2"><b>Nome em latim: </b> {galeria211}.</p>
      <p className="joke3"><b>Dieta: </b> {galeria311}.</p>
      <p className="joke4"><b>Localização: </b> {galeria411}.</p>
      <img src = {galeria5111} height="150" width="300"/>
      <p className="joke" ><b>Nome:</b> {galeria000}</p>
      <p className="joke1"><b>Habitat: </b> {galeria1111}.</p>
      <p className="joke2"><b>Nome em latim: </b> {galeria2111}.</p>
      <p className="joke3"><b>Dieta: </b> {galeria3111}.</p>
      <p className="joke4"><b>Localização: </b> {galeria4111}.</p>
      <img src = {galeria51111} height="150" width="300"/>
      <p className="joke" ><b>Nome:</b> {galeria0000}</p>
      <p className="joke1"><b>Habitat: </b> {galeria11111}.</p>
      <p className="joke2"><b>Nome em latim: </b> {galeria21111}.</p>
      <p className="joke3"><b>Dieta: </b> {galeria31111}.</p>
      <p className="joke4"><b>Localização: </b> {galeria41111}.</p>

      
    </div>
  );
}

export default Galeria;