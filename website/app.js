// /* Global Variables */
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const units = '&units=Imperial';
const apiKey = '&APPID=7af9e97ca9418cbeed57d0ddfd866f44';
const form = document.getElementById('location');
const formErr = document.getElementById('err');
let feelings,zip;

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    zip = document.getElementById('zip').value;
    feelings = document.getElementById('feelings').value;
    const newUrl = baseURL+zip+units+apiKey;

    console.log('form submitted');
    getWeather(newUrl);
})

const getWeather = async(newUrl)=> {
    const res = await fetch(newUrl);
    try{
        const data = await res.json();
        if (data.cod == '404'){
          formErr.innerHTML = data.message+". Please try again.";
          document.getElementById('place').innerHTML = '';
          document.getElementById('date').innerHTML = '';
          document.getElementById('temp').innerHTML = '';
          document.getElementById('content').innerHTML = '';
        }else {
          formErr.innerHTML = '';
          postData('/', data);
          updateUI();
        }


    }catch(e){
        formErr.innerHTML = e;
        console.log('Error', e);
    }
}

const postData = async(url='', data={}) => {
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data)
      });
      try{
        const newData = await res.json();
        return newData;
      }catch(e) {
        console.log('Error', e);
      }
}

const updateUI = async () => {
    const request = await fetch('/all');
    try{
      const allData = await request.json();
      document.getElementById('place').innerHTML = `The weather forecast for <strong><u>${allData[0].userResponse}</u></strong>, zipcode: ${zip}`;
      document.getElementById('date').innerHTML = `on ${newDate}`
      document.getElementById('temp').innerHTML = `is ${allData[0].temperature} degrees Farenheit with ${allData[0].message}!`;
      document.getElementById('content').innerHTML = feelings;
  
    }catch(e){
      console.log("error", e);
    }
  }
