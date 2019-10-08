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

  // Show error if fields are blank
  if (loc === "" || trDate === "") {
    document.getElementById("err").innerHTML = "Fields cannot be left blank!";
  } else if (trDate.getTime() / 1000 < today.getTime() / 1000) {
    document.getElementById("err").innerHTML =
      "Departing date cannot be earlier than today!";
  } else if (edDate.getTime() / 1000 < trDate.getTime() / 1000) {
    document.getElementById("err").innerHTML =
      "Your trip's ending date cannot be less than starting date!";
  } else {
    document.getElementById("err").innerHTML = "";
    Client.handleSubmit(loc, trvDate, endDate, trDate, edDate, today);
  }
  return true;
}

export { validateFields };
