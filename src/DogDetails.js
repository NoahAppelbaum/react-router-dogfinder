import { useParams } from "react-router-dom";
import Dog from "./Dog";

/**
 * Renders dog
 */
function DogDetails({ dogs }) {
  const { name } = useParams();
  const dog = dogs.find(d => name === d.name.toLowerCase());

  return (
    <Dog dog={dog} />
  );
};

export default DogDetails;