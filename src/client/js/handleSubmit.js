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
  Client.getCoords(loc);
}

export { handleSubmit };
