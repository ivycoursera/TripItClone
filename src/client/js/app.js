function handleSubmit(event) {
  event.preventDefault();
  console.log("Okay then!");

  // get coordinates
  const loc = document.getElementById("place-name").value;

  // get dates
  const trvDate = document.getElementById("departing").value;
  const endDate = document.getElementById("return-date").value;
  const edDate = new Date(endDate);
  const trDate = new Date(trvDate);
  const getTodayDate = new Date();
  let month = getTodayDate.getMonth() + 1;
  const todDate =
    getTodayDate.getFullYear() + "-" + month + "-" + getTodayDate.getDate();

  // validate fields

  if (Client.validateFields(loc, trDate, edDate, getTodayDate) === true) {
    return;
  } else {
    // toggle views
    document.getElementById("details").classList.toggle("hide");
    document.getElementById("location").classList.toggle("hide");

    //calculate length of trip
    const lengthOfTrip = Client.calcDays(trDate, edDate);

    // calculate days left
    const daysleft = Client.calcDays(todDate, trDate);

    // get weather forecast
    if (daysleft <= 7) {
      Client.getWeather(loc);
    } else {
      const unixTime = trDate.getTime() / 1000;
      Client.getWeather(loc, unixTime);
    }

    // get location image
    Client.getImage(loc);

    // Update the UI
    Client.updateUI(loc, trvDate, daysleft, lengthOfTrip);
  }
}

export { handleSubmit };
