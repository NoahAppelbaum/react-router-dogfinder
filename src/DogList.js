import Dog from "./Dog";

//FIXME: figure out solution for keys later
function DogList({ dogs }) {
  return (
    <div>
      {dogs.map(d => <Dog dog={d} key={d.name} />)}
    </div>
  );
}

export default DogList;