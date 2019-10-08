async function getImage(loc) {
  await fetch(`http://localhost:8081/image?place=${loc}`).then(response => {
    response.json().then(data => {
      for (let key in data) {
        document.getElementById("loc-image").setAttribute(key, data[key]);
      }
    });
  });
}

export { getImage };
