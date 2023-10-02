import { useParams } from "react-router-dom";
import Dog from "./Dog";

/**
 * DogDetails: Grabs a particular dog from the doglist based on URL
 *
 * props:
 * - dogs: [{dog info}, ...]
 *
 * RoutesList->DogDetails->Dog
 */
function DogDetails({ dogs }) {
  const { name } = useParams();
  const dog = dogs.find(d => name.toLowerCase() === d.name.toLowerCase());
  return (
    <Dog dog={dog} />
  );
};

export default DogDetails;
