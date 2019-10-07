async function getCoords(loc) {
  if (!loc.length > 0) {
    document.getElementById("err").innerHTML = "Please enter a location";
  } else {
    await fetch(`http://localhost:8081/coords?place=${loc}`).then(response => {
      console.log(response);
    });
  }
}

export { getCoords };
