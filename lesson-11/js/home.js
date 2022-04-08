// set the JSON source URL
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject); // checking for response
    const towns = jsonObject['towns'];


        //creating preston inputs
        const preston = document.querySelector('.homeDataPreston');
        const prestonfilter = towns.filter(x => x.name == "Preston");
        prestonfilter.forEach(townpreston => {
            let town = document.createElement('section');
            let h3 = document.createElement('h3');
            let p = document.createElement('p');
            //use templet Literals
            h3.innerHTML = `${townpreston.name}`;
            p.innerHTML = `<i>${townpreston.motto}</i> <br> </p><p>Year Founded: ${townpreston.yearFounded} <br> Population: ${townpreston.currentPopulation} <br> Annual Rain Fall: ${townpreston.averageRainfall}`;
            town.append(h3);
            town.append(p);
            preston.append(town);
        });

        //creating fish haven inputs
        const fishhaven = document.querySelector('.homeDataFishhaven');
        const fishhavenfilter = towns.filter(x => x.name == "Fish Haven");
        fishhavenfilter.forEach(townfish => {
            let town = document.createElement('section');
            let h3 = document.createElement('h3');
            let p = document.createElement('p');
            //use templet Literals
            h3.innerHTML = `${townfish.name}`;
            p.innerHTML = `<i>${townfish.motto}</i> <br> </p><p>Year Founded: ${townfish.yearFounded} <br> Population: ${townfish.currentPopulation} <br> Annual Rain Fall: ${townfish.averageRainfall}`;
            town.append(h3);
            town.append(p);
            fishhaven.append(town);
        });


        //creating soda springs inputs
        const sodasprings = document.querySelector('.homeDataSodaSprings');
        const sodafilter = towns.filter(x => x.name == "Soda Springs");
        sodafilter.forEach(townsoda => {
            let town = document.createElement('section');
            let h3 = document.createElement('h3');
            let p = document.createElement('p');
            //use templet Literals
            h3.innerHTML = `${townsoda.name}`;
            p.innerHTML = `<i>${townsoda.motto}</i> <br> </p><p>Year Founded: ${townsoda.yearFounded} <br> Population: ${townsoda.currentPopulation} <br> Annual Rain Fall: ${townsoda.averageRainfall}`;
            town.append(h3);
            town.append(p);
            sodasprings.append(town);
        });

  });