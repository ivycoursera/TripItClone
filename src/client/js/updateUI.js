function updateUI(loc, trvDate, days, forecast) {
  // update destination
  document.getElementById("place").innerHTML = `My Trip to: ${loc}`;
  // update departing date
  document.getElementById("date").innerHTML = `Departing: ${trvDate}`;
  // update days to travel
  document.getElementById("content").innerHTML = `${loc} is ${days} days away!`;
}

export { updateUI };
