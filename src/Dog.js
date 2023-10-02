/**
 * Dog: Renders individual dog details
 *
 * props:
 * - dog: { name, age, src, facts }
 *
 * {DogDetails, DogList} -> Dog
 */
function Dog({ dog }) {
  return (
    <div>
      <h3>{dog.name}</h3>
      <p>Age: {dog.age}</p>
      <img alt={dog.name} src={`/${dog.src}.jpg`} />
      <ul>
        {dog.facts.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
    </div>
  );
}

export default Dog;
