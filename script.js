//switch
document.getElementById('fetchWeather').addEventListener('click', async () => {
    const location = document.getElementById('location').value;
    const weatherConditionsElement = document.getElementById('weatherConditions');
    const temperatureElement = document.getElementById('temperature');

    if (!location) {
        weatherConditionsElement.textContent = 'Please enter a location.';
        temperatureElement.textContent = '';
        return;
    }

    try {
        const apiKey = '79742a54256344a4997140429240608';
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`);
        
        if (!response.ok) {
            throw new Error('Location not found');
        }

        const data = await response.json();
        const weather = data.current.condition.text;
        const temperature = data.current.temp_c;

        weatherConditionsElement.textContent = `Weather: ${weather}`;
        temperatureElement.textContent = `Temperature: ${temperature}°C`;
    } catch (error) {
        weatherConditionsElement.textContent = 'Error fetching weather data.';
        temperatureElement.textContent = '';
    }
});


