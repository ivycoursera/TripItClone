function validateFields(loc, trvDate, today) {
  let trDate = new Date(trvDate);
  // Show error if fields are blank
  if (loc === "" || trvDate === "") {
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
  return true;
}

export { validateFields };
