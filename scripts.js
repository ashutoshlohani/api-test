window
   .fetch('https://dog.ceo/api/breeds/image/random')
   .then(response => {
      return response.json();
   })
   .then(data => {
      console.log(data);
      const img = document.querySelector('img');
      img.src = `${data.message}`;
   });

let button = document.getElementById('get-location');

button.addEventListener('click', function () {
   navigator.geolocation.getCurrentPosition(function (position) {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;

      const key = '0ce3296b605184eccfd09dfd52da3e19';
      console.log(lat, long);

      window
         .fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`
         )
         .then(response => {
            return response.json();
         })
         .then(data => {
            console.log(data);
            let cityname = data.name;
            let temprature = data.main.temp;

            let city = document.getElementById('city');
            let temp = document.getElementById('temp');

            city.innerText = `${cityname}`;
            temp.innerText = `${temprature}`;
         });
   });
});
