function updateUI(days) {
  // update days to travel
  const dtt = document.getElementById("date");
  dtt.innerHTML = `Days left to travel: ${days} `;
}

export { updateUI };
