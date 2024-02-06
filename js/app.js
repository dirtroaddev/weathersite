const btn = document.getElementById('weather__btn');
const impData = document.getElementById('weather_city');
const dDisplay = document.querySelector('.data__display');

btn.addEventListener('click', async (e) => {
    e.preventDefault();
    dDisplay.innerHTML = '';
    async function getWeather() {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=dc499f9dd5e341209ca23852240502&q=${impData.value}`);
        const data = await response.json();
        return data;
    
    }
    
    let wData = await getWeather()
    const h1 = document.createElement('h1');
    const img = document.createElement('img');
    const p = document.createElement('p');
    img.src = wData.current.condition.icon
    p.innerText = wData.current.condition.text
    h1.innerText = wData.location.name;
    dDisplay.appendChild(h1);
    dDisplay.appendChild(p);
    dDisplay.appendChild(img);
    console.log(wData);
});



