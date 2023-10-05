const API_KEY = '1b883b3ef3ee0136a045e74f8248861f';
const city = '';
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

async function getDetails(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  );
  const data = await response.json();
  console.log(data.base);
  return { name: data.base };
  // return {name:data.name,temp:data.main.temp,humidity:data.main.humidity,speed:data.wind.speed};
}
getDetails('pune');

const temprature = document.querySelector('.temprature').textContent;
console.log(temprature);

const searchButton = document
  .querySelector('.search-bar__button')
  .addEventListener('click', function () {
    console.log('text');
    const inputCity = document.querySelector('.search-bar__input').value;
    const cityInfo = getDetails(inputCity);
    console.log(cityInfo);
    document.querySelector('.search-bar__input').value = '';
  });
