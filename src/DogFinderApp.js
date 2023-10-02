import { useState } from "react";
import getDogs from "./utils";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";
import RoutesList from "./RoutesList";
import { v4 as uuid } from "uuid";
/**DogFinderApp: Logical parent component for App
 *
 * state:
 * dogs: [{dog info}, ...] (OR null)
 *
 * App->DogFinderApp->{ Nav, RoutesList }
 */

function DogFinderApp() {
  const [dogs, setDogs] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // We don't need this!?

  async function makeDogList() {
    console.log("making dog list");

    const newDogs = await getDogs();
    setDogs(newDogs.map(d => ({ ...d, id: uuid() })));

    console.log("Got dogs!?", dogs);
  }

  if (!dogs) {
    makeDogList();
  }

  return (
    <div className="DogFinderApp">
      {!dogs
        ? (
          <h1>Loading...</h1>
        )
        : (
          <BrowserRouter>
            <>
              <Nav dogNames={dogs.map(d => d.name)} />
              <RoutesList dogs={dogs} />
            </>
          </BrowserRouter>
        )
      }
    </div>

  );

}

export default DogFinderApp;
