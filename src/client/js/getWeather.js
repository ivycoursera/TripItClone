function getWeather(coords) {
  fetch(`http://localhost:8081/getWeather?text=${coords}`);
}

export { getWeather };
