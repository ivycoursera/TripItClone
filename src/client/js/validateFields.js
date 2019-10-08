function validateFields(loc, trDate, edDate, today) {
  // Show error if fields are blank
  if (loc === "" || trDate === "") {
    document.getElementById("err").innerHTML = "Fields cannot be left blank!";
    return false;
  } else {
    document.getElementById("err").innerHTML = "";
  }
  if (trDate.getTime() / 1000 < today.getTime() / 1000) {
    document.getElementById("err").innerHTML =
      "Date cannot be earlier than today!";
    return false;
  }
  if (edDate.getTime() / 1000 < trDate.getTime() / 1000) {
    document.getElementById("err").innerHTML =
      "Your trip's ending date cannot be less than starting date!";
    return false;
  }
  return true;
}

export { validateFields };
