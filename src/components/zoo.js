import { useEffect, useState } from "react";

const Zoo = () => {
  const [zoo, setZoo] = useState("Fact zoo");

  useEffect(() => {
    getZoo();
  }, []);

  const getZoo = async () => {
    const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    setZoo(data.value);
  };

  return (
    <div className="zoo">
      <h1>Apresentação do Zoológico</h1>
      <p className="joke">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet sollicitudin hendrerit. Donec commodo mollis enim congue ornare. In fringilla nisl lorem, a lobortis dui dapibus id. Nullam quis enim orci. In pulvinar commodo lacinia. Vivamus volutpat imperdiet ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor auctor velit et rutrum. Nulla facilisi. Vivamus ac risus at tortor sollicitudin gravida quis nec est. Etiam sagittis libero velit, nec ornare leo ornare id.</p>
  
      
    </div>
  );
};

export default Zoo; 

