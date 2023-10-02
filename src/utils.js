const BASE_URL = "http://localhost:5001";

/** getDogs: fetches dog data from API */
async function getDogs() {
  const response = await fetch(`${BASE_URL}/dogs`);
  return await response.json();
}

export default getDogs;
