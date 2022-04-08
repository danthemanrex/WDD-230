// set the JSON source URL
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];

    const prestonfilter = towns.filter(x => x.name == "Preston");
    let prestonEvents = prestonfilter[0].events;
    let ul = document.createElement('ul'); 

    prestonEvents.forEach(event => {
    let listItem = document.createElement('li');
    listItem.innerHTML = event;
    ul.append(listItem);
  }); 

  document.getElementById("eventPreston").appendChild(ul);
});