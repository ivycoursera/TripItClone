function handleSubmit(event) {
  event.preventDefault();
  console.log("Okay then!");
  // get coordinates
  const loc = document.getElementById("place-name").value;

  // Calculate days to travel
  const trvDate = document.getElementById("departing").value;

  // Show error if fields are blank
  if (loc === "" || trvDate === "") {
    document.getElementById("err").innerHTML = "Fields cannot be left blank!";
    return;
  } else {
    document.getElementById("err").innerHTML = "";
  }

  // calculate days left
  const trDate = new Date(trvDate);

  const getTodayDate = new Date();
  let month = getTodayDate.getMonth() + 1;
  const todDate =
    getTodayDate.getFullYear() + "-" + month + "-" + getTodayDate.getDate();

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
  Client.updateUI(loc, trvDate, daysleft);
}

export { handleSubmit };
