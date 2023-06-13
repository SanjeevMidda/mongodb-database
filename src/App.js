import { useEffect, useState } from 'react';
import './index.css';

function App() {

  const [homepage, setHomepage] = useState("");
  const [status, setStatus] = useState(false);

  useEffect(() => {
    async function getHomepage(){
      try{
        let request = await fetch("http://localhost:3001/fruits");
        let response = await request.json();

        function populate(){
          setHomepage(response)
          console.log(homepage);
          setStatus(true);
        }
        setTimeout(populate, 12000)

      }catch(error){
        console.log(error);
      }
    }

    getHomepage();

  }, [])

  console.log(homepage)
  return (     
    <div>
      {status &&
        homepage.map((fruit) => {
          return <h3 key={fruit._id}>{fruit.name}</h3>
        })
        }
    </div>
  );
}

export default App;
