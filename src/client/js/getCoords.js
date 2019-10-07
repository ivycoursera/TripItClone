async function getCoords(url) {
  const res = await fetch(url);
  try {
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("Error: " + e);
  }
}

export { getCoords };
