/**
 * Renders individual dog details
 */
function Dog({ dog }) {
  return (
    <div>
      <h3>{dog.name}</h3>
      <p>{dog.age}</p>
      <img src={`../public/${dog.src}.jpg`} />
      <ul>
        {dog.facts.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
    </div>
  );
}

export default Dog;