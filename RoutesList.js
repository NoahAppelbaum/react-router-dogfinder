import { Route, Routes } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

function RoutesList({ dogs }) {

  return (
    <Routes>
      <Route path="/" element={<DogList dogs={dogs} />} />
      <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
    </Routes>
  );

}

export default RoutesList;
