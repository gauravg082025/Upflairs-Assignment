const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const weatherResult = document.getElementById('weatherResult');
const errorMsg = document.getElementById('error');

searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (!city) return;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error('City not found');
      return res.json();
    })
    .then(data => {
      errorMsg.classList.add('hidden');
      weatherResult.classList.remove('hidden');

      document.getElementById('cityName').textContent = data.name;
      document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
      document.getElementById('condition').textContent = `Condition: ${data.weather[0].main}`;
      document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
      document.getElementById('wind').textContent = `Wind Speed: ${data.wind.speed} m/s`;
      document.getElementById('weatherIcon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    })
    .catch(() => {
      weatherResult.classList.add('hidden');
      errorMsg.classList.remove('hidden');
    });
});
