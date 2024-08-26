document.getElementById('get-weather').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherInfo = `
                    <span><strong>City:</strong> ${data.name}</span>
                    <span><strong>Temperature:</strong> ${data.main.temp} °C</span>
                    <span><strong>Weather:</strong> ${data.weather[0].description}</span>
                    <span><strong>Humidity:</strong> ${data.main.humidity}%</span>
                    <span><strong>Wind Speed:</strong> ${data.wind.speed} m/s</span>
                `;
                document.getElementById('weather-info').innerHTML = weatherInfo;
            } else {
                document.getElementById('weather-info').innerHTML = '<span>City not found!</span>';
            }
        })
        .catch(error => {
            document.getElementById('weather-info').innerHTML = '<span>Error fetching data!</span>';
        });
});