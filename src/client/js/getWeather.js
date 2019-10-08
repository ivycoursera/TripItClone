async function getWeather(loc, time) {
  const handleData = data => {
    if (data.error) {
      document.getElementById("error-message").textContent = data.error;
    } else {
      console.log(data);
      document.getElementById("high").textContent = "HIGH: " + data.high;
      document.getElementById("low").textContent = "LOW: " + data.low;
      document.getElementById("forecast").textContent = data.message;
    }
  };
  if (time) {
    await fetch(`http://localhost:8081/coords?place=${loc}&time=${time}`).then(
      response => {
        console.log(response);
        response.json().then(data => {
          handleData(data);
        });
      },
    );
  } else {
    await fetch(`http://localhost:8081/coords?place=${loc}`).then(response => {
      console.log(response);
      response.json().then(data => {
        handleData(data);
      });
    });
  }
}

export { getWeather };
