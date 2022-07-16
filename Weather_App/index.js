const form = document.querySelector('form');
const search = document.getElementById('search');
const weather = document.getElementById('weather')
const key = "2a0ac80f430596bde1f829c8d5e6b0c6";

const getWeather = async (city)=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    const response = await fetch( url);
    const data  = await response.json();
    showWeather(data);
     
}

const showWeather = (data)=>{

    if (data.cod>='400'){
        weather.innerHTML = '<h2>Oops! City not Found</h2>';

        return;
    }
   weather.innerHTML =
    `

   <div>
        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather">
    </div>

            <div>
                <h2>${data.main.temp}</h2>
                <h4>${data.weather[0].main}</h4>
            </div>
    `;
}

form.addEventListener('submit',function (event){
   getWeather(search.value);
   event.preventDefault();
})