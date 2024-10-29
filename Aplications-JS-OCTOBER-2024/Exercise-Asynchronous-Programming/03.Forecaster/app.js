function attachEvents() {
    const locationsURL = 'http://localhost:3030/jsonstore/forecaster/locations';
    const locationTodayURL = 'http://localhost:3030/jsonstore/forecaster/today';
    const locationUpcomingURL = 'http://localhost:3030/jsonstore/forecaster/upcoming';

    // Get DOM element
    const locationInput = document.getElementById('location');
    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', loadLocations);

    const divMainForecasts = document.getElementById('forecast');
    
    
    function loadLocations(){
        const locationSearch = locationInput.value;

        fetch(locationsURL)
            .then(res => res.json())
            .then(data => compareLocations(locationSearch, data))
            .catch(err => console.log('Error'));
    }

    function compareLocations(locationSearch, data){
        let found = false;

        data.forEach(location => {
            if(locationSearch === location.name){
                loadToday(location.name, location.code);
                loadUpcoming(location.name, location.code);
                found = true;
            }
        });

        if(!found){
            return console.log('Error');
        }
    }

    function loadToday(locationName, locationCode){
        
        fetch(`${locationTodayURL}/${locationCode}`)
            .then(res => res.json())
            .then(data => createCurrentConditions(data))
            .catch(err => console.log('Error'));
    }

    function loadUpcoming(locationName, locationCode){
        
        fetch(`${locationUpcomingURL}/${locationCode}`)
            .then(res => res.json())
            .then(data => createUpcomingConditions(data))
            .catch(err => console.log('Error'));
    }

    function createCurrentConditions(data){
        const [forecast, name] = Object.values(data);
        const currentDivForecasts = document.getElementById('current');
        divMainForecasts.style.display = 'block';

        const divForecasts = createEl('div', '', ['class', 'forecasts']);
        
        let conditionSymbol = '';
        if(forecast.condition === 'Sunny'){
            conditionSymbol = '\&#x2600';
        }else if(forecast.condition === 'Partly sunny'){
            conditionSymbol = '\&#x26C5';
        }else if(forecast.condition === 'Overcast'){
            conditionSymbol = '\&#x2601';
        }else if(forecast.condition === 'Rain'){
            conditionSymbol = '\&#x2614';
        }

        const spanConditionSymbol = createEl('span', conditionSymbol, ['class', 'condition symbol']);
        const spanConditions = createEl('span', '', ['class', 'condition']);
        const spanCity = createEl('span', name, ['class', 'forecast-data']);
        const spanDegrees = createEl('span', `${forecast.low}\&#176/${forecast.high}\&#176`, ['class', 'forecast-data']);
        const spanCon = createEl('span', forecast.condition, ['class', 'forecast-data']);

        spanConditions.appendChild(spanCity);
        spanConditions.appendChild(spanDegrees);
        spanConditions.appendChild(spanCon);

        divForecasts.appendChild(spanConditionSymbol);
        divForecasts.appendChild(spanConditions);

        currentDivForecasts.appendChild(divForecasts);
    }

    function createUpcomingConditions(data){
        const [upcomingForecast, name] = Object.values(data);

        console.log(upcomingForecast);
        console.log(name);
        
        const currentDivUpcoming = document.getElementById('upcoming');

        const divForecastInfo = createEl('div', '', ['class', 'forecast-info']);

        upcomingForecast.forEach(forecast => {
            const spanUpcomig = createEl('span', '', ['class', 'upcoming']);

            if(forecast.condition === 'Sunny'){
                conditionSymbol = '\&#x2600';
            }else if(forecast.condition === 'Partly sunny'){
                conditionSymbol = '\&#x26C5';
            }else if(forecast.condition === 'Overcast'){
                conditionSymbol = '\&#x2601';
            }else if(forecast.condition === 'Rain'){
                conditionSymbol = '\&#x2614';
            }

            const spanSymbol = createEl('span', conditionSymbol, ['class', 'symbol']);
            const spanDegrees = createEl('span', `${forecast.low}\&#176/${forecast.high}\&#176`, ['class', 'forecast-data']);
            const spanCon = createEl('span', forecast.condition, ['class', 'forecast-data']);

            spanUpcomig.appendChild(spanSymbol);
            spanUpcomig.appendChild(spanDegrees);
            spanUpcomig.appendChild(spanCon);
            divForecastInfo.appendChild(spanUpcomig);
        });
        
    }

    function createEl(type, content = '', attributes = []){
        const element = document.createElement(type);

        if(content){
            element.innerHTML = content;
        }

        if(attributes.length > 0){
            for(let i = 0; i < attributes.length; i+=2){
                element.setAttribute(attributes[i],attributes[i+1]);
            }
        }

        return element;
    }
}

attachEvents();