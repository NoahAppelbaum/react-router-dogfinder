import { useState } from "react";
import getDogs from "./utils";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";
import RoutesList from "./RoutesList";


function DogFinderApp() {
  const [dogs, setDogs] = useState(null);

  async function makeDogList() {
    const newDogs = await getDogs();
    setDogs(newDogs);
  }

  return (

    <div className="DogFinderApp" onLoad={makeDogList}>
      {!dogs
        ? (
          <h1>Loading...</h1>

        )
        : (
          <BrowserRouter>
            <Nav dogNames={dogs.map(d => d.name)} />
            <RoutesList dogs={dogs} />
          </BrowserRouter>
        )
      }
    </div>
    /*
    if !dogs
    render "loading"
    call makeDogList

    else
    render Nav (pass dog names)
    render dogList

    OR

    render BrowserRouter here??? so that routes are all children?
    */

  );

}

export default DogFinderApp;
