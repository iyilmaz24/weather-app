/* eslint-disable prefer-destructuring */


const API_KEY = "API_KEY";
const resultDiv = document.getElementById("resultsDiv");


const weatherDisplay = (response) => {

    let city = response.location.name;
    const country = response.location.country;
    const description = response.current.condition.text;
    const farenheit = response.current.temp_f;
    const celsius = response.current.temp_c;

    if(city !== response.location.region){
    // ex. 'Orlando' becomes 'Orlando, Florida' but 'Tokyo' does not become 'Tokyo, Tokyo'
            city += `, ${response.location.region}`
    };

    function makeWeatherDiv(){
        const parentDiv = document.createElement("div");

        const locationDiv = document.createElement("div");
        locationDiv.innerText = `${city}, ${country}`;

        const numbersDiv = document.createElement("div");
        numbersDiv.innerText = `Farenheit: ${farenheit}, Celsius: ${celsius}`;
        
        const descriptionDiv = document.createElement("div");
        descriptionDiv.innerText = `${description}`;
        
        parentDiv.appendChild(locationDiv);
        parentDiv.appendChild(numbersDiv);
        parentDiv.appendChild(descriptionDiv);

        return parentDiv;
    };

    return makeWeatherDiv();
};


export default async function makeApiCall(city) {

    const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
    try {
        const res = await fetch(url);
        const response = await res.json();

        const forecast = weatherDisplay(response);
        resultDiv.innerHTML = forecast.innerHTML;

    } catch(error) {
        resultDiv.innerText = "Error Processing Your Request";
        console.log(error);
    }

};



