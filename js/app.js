const btn = document.getElementById('weather__btn');
const impData = document.getElementById('weather_city');



btn.addEventListener('click', (e) => {
    e.preventDefault();

});
async function getWeather() {
    const response = await fetch('https://api.weatherapi.com/v1/current.json?key=dc499f9dd5e341209ca23852240502&q=32024');
    const data = await response.json();

    return data.current;

}


getWeather().then(response => console.log(response))