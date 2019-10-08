function validateFields(event) {
  event.preventDefault();
  console.log("Okay then!");

  // get coordinates
  const loc = document.getElementById("place-name").value;

  // get dates
  const trvDate = document.getElementById("departing").value;
  const endDate = document.getElementById("return-date").value;
  const edDate = new Date(endDate);
  const trDate = new Date(trvDate);
  const today = new Date();

  console.log(loc, trvDate.length, endDate);
  // Show error if fields are blank
  if (loc === "") {
    document.getElementById("err").innerHTML = "Location cannot be left blank!";
    return;
  } else if (trvDate.length === 0) {
    document.getElementById("err").innerHTML =
      "Departure date cannot be left blank!";
    return;
  } else if (endDate.length === 0) {
    document.getElementById("err").innerHTML =
      "Return date cannot be left blank!";
    return;
  } else if (trDate.getTime() / 1000 < today.getTime() / 1000) {
    document.getElementById("err").innerHTML =
      "Departing date cannot be earlier than today!";
    return;
  } else if (edDate.getTime() / 1000 < trDate.getTime() / 1000) {
    document.getElementById("err").innerHTML =
      "Your trip's ending date cannot be less than starting date!";
    return;
  } else {
    document.getElementById("err").innerHTML = "";
    Client.handleSubmit(loc, trvDate, endDate, trDate, edDate, today);
  }
}

export { validateFields };
