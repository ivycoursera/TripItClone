function handleSubmit(event) {
  event.preventDefault();
  console.log("Okay then!");

  // Calculate days to travel
  const trvDate = document.getElementById("departing").value;
  const trDate = new Date(trvDate);

  const getTodayDate = new Date();
  let month = getTodayDate.getMonth() + 1;
  const todDate =
    getTodayDate.getFullYear() + "-" + month + "-" + getTodayDate.getDate();

  const daysleft = Client.calcDays(todDate, trDate);

  Client.updateUI(daysleft);

  // get coordinates
  const loc = document.getElementById("place-name").value;
  console.log(loc);
  const data = Client.getCoords(
    `http://api.geonames.org/placenameSearchJSON?placename=${loc}&maxRows=10&username=vi29`,
  );
  //TODO: Fetch from client side is returning cors error. Move
  // geonames fetching to server side.

  console.log(data);
}

export { handleSubmit };
