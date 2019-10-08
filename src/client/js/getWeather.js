async function getWeather(loc, time) {
  const handleData = data => {
    if (data.error) {
      document.getElementById("error-message").textContent = data.error;
    } else {
      let h = document.getElementById("high").innerHTML;
      let l = document.getElementById("low").innerHTML;
      document.getElementById("high").innerHTML = h + data.high;
      document.getElementById("low").innerHTML = l + data.low;
      document.getElementById("forecast").textContent = data.message;
    }
  };
  if (time) {
    await fetch(`http://localhost:8081/coords?place=${loc}&time=${time}`).then(
      response => {
        response.json().then(data => {
          handleData(data);
        });
      },
    );
  } else {
    await fetch(`http://localhost:8081/coords?place=${loc}`).then(response => {
      response.json().then(data => {
        handleData(data);
      });
    });
  }
}

export { getWeather };
