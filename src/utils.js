async function getDogs() {
  const response = await fetch("http://localhost:5001");
  return await response.json();
}

export default getDogs;
