import Dog from "./Dog";

/**
 * DogList: Displays all dogs
 *
 * props:
 * - dogs: [{dog info}, ...]
 *
 * RoutesList->DogList->Dog
 */
function DogList({ dogs }) {
  return (
    <div>
      {dogs.map(d => <Dog dog={d} key={d.name} />)}
    </div>
  );
}

export default DogList;
