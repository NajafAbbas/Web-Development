// Select DOM elements
const tempratureField = document.querySelector('.temp p');
const locationField = document.querySelector('.Location-Time p:first-child');
const dataField = document.querySelector('.Location-Time p:last-child');
const weatherField = document.querySelector('.condition p:last-child');
const searchField = document.querySelector('.Search-area');
const form = document.querySelector('form');

// Add event listener for form submission
form.addEventListener('submit', handleSearch);

// Default location
let targetLocation = 'Attock';

// Fetch weather data from the API
const fetchResult = async(targetLocation) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=9b6a17fa4b6f4bc0a9a53656241408&q=${targetLocation}&aqi=no`;
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('Failed to fetch data');
        const data = await res.json();
        console.log(data);

        // Extract relevant data
        let locationName = data.location.name;
        let time = data.location.localtime;
        let temp = data.current.temp_c;
        let condition = data.current.condition.text;

        // Update the UI with fetched data
        updateDetails(locationName, temp, time, condition);
    } catch (error) {
        console.error('Error:', error);
    }
};

// Function to update the UI
function updateDetails(locationName, temp, time, condition) {
    if (tempratureField) tempratureField.innerText = temp + ' °C';
    if (locationField) locationField.innerText = locationName;
    if (dataField) dataField.innerText = time;
    if (weatherField) weatherField.innerText = condition;
}

// Handle form submission
function handleSearch(e) {
    e.preventDefault();
    if (searchField && searchField.value) {
        targetLocation = searchField.value;
        fetchResult(targetLocation);
    }
}

// Initial fetch with default