function handleSubmit(event) {
  zip = document.getElementById("zip").value;
  feelings = document.getElementById("feelings").value;
  const newUrl = baseURL + zip + units + apiKey;

  console.log("form submitted");
  return newUrl;
}

export { handleSubmit };
