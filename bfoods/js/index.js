// weather data =====================
 
const apiKey = '142b654ce7a04633acb143706231507 ';
const city = 'Carlsbad';

// Fetch current weather data
fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
  .then(response => response.json())
  .then(data => {
    const currentTemperature = data.current.temp_c;
    const humidity = data.current.humidity;
    const weatherCondition = data.current.condition.text;
    const weatherIconURL = data.current.condition.icon;

    // Display current weather data
    const currentWeatherDiv = document.getElementById('current-weather');
    currentWeatherDiv.innerHTML = `
        <div class="temp_area">
            <div class="temp_img">
                <img src="${weatherIconURL}" alt="Weather Icon">
            </div>
            <h4>${currentTemperature}Â°C</h4>
        </div>
        <div class="weather_insider">
            <p>Humidity: ${humidity}%</p>
            <p>${weatherCondition}</p>
        </div>
    `;
  })
  .catch(error => console.error('Error:', error));

// Fetch three-day forecast
fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=4`)
.then(response => response.json())
.then(data => {
const forecastDays = data.forecast.forecastday.slice(1, 4); // Exclude current day
const forecastDiv = document.getElementById('forecast');

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    forecastDays.forEach((day, index) => {
        const date = new Date(day.date);
        const dayLabel = daysOfWeek[date.getDay()];

        const temperature = day.day.avgtemp_c;
        const weatherIconURL = day.day.condition.icon;

        const forecastDayDiv = document.createElement('div');
        forecastDayDiv.classList.add('forecastday');
        forecastDayDiv.innerHTML = `
        <div class="day">
            <p>${dayLabel}</p>
        </div>
        <div class="temp_area">
            <div class="temp_img">
                <img src="${weatherIconURL}" alt="Weather Icon">
            </div>
            <h4>${temperature}Â°C</h4>
        </div>
        `;

        forecastDiv.appendChild(forecastDayDiv);
    });
})
.catch(error => console.error('Error:', error));









// json data for select options =================================


// Fetch the JSON data from the server
fetch('json/fruit.json')
.then(response => response.json())
.then(data => {
  // Get the select element
  const selectone = document.getElementById('fruitone');
  const selectwo = document.getElementById('fruittwo');
  const selectthree = document.getElementById('fruitthree');

  // Loop through the data and create option elements
  data.forEach(fruit => {
    const option = document.createElement('option');
    option.value = fruit.name;
    option.textContent = fruit.name;
    selectone.appendChild(option.cloneNode(true));
    selectwo.appendChild(option.cloneNode(true));
    selectthree.appendChild(option.cloneNode(true));
  });
})
.catch(error => {
  console.error('Error fetching JSON data:', error);
});



// Requird field Display for the fresh form =================================

function validateForm(event) {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const fruitOneSelect = document.getElementById('fruitone');
  const fruitTwoSelect = document.getElementById('fruittwo');
  const fruitThreeSelect = document.getElementById('fruitthree');
  const requestInput = document.getElementById('request');

  // Get selected fruit options
  const fruitOne = fruitOneSelect.value;
  const fruitTwo = fruitTwoSelect.value;
  const fruitThree = fruitThreeSelect.value;

  // Fetch the JSON data
  fetch('json/fruit.json')
    .then(response => response.json())
    .then(jsonData => {
      // Find the selected fruits in the JSON data
      const selectedFruits = jsonData.filter(fruit => {
        return fruit.name === fruitOne || fruit.name === fruitTwo || fruit.name === fruitThree;
      });

      // Calculate nutrition summary
      let totalCarbohydrates = 0;
      let totalProtein = 0;
      let totalFat = 0;
      let totalSugar = 0;
      let totalCalories = 0;

      selectedFruits.forEach(fruit => {
        totalCarbohydrates += fruit.nutritions.carbohydrates;
        totalProtein += fruit.nutritions.protein;
        totalFat += fruit.nutritions.fat;
        totalSugar += fruit.nutritions.sugar;
        totalCalories += fruit.nutritions.calories;
      });

      // Display order summary
      const orderDate = new Date().toLocaleString();
      const submitbeforetext = document.getElementById('submitbeforetext');
      const orderSummary = document.getElementById('orderSummary');
      const orderDateElement = document.getElementById('orderDate');
      const fruitSelectionElement = document.getElementById('fruitSelection');
      const nutritionSummaryElement = document.getElementById('nutritionSummary');
      const firstNameElement = document.getElementById('firstName');
      const emailElement = document.getElementById('emailDisplay');
      const mailInfo = document.getElementById('mailinfo');
      const phoneElement = document.getElementById('phoneDisplay');
      const phoneInfo = document.getElementById('numinfo');
      const messageElement = document.getElementById('messageDisplay');

      orderDateElement.textContent = orderDate;
      fruitSelectionElement.innerHTML =
      `<li><span>First Fruit:</span> ` + fruitOne + `</li>
	    <li><span>Second Fruit:</span> ` + fruitTwo + `</li>
	    <li><span>Third Fruit:</span> ` + fruitThree + `</li>`;
      

        
      nutritionSummaryElement.innerHTML =
        `<li><span>Carbohydrates:</span> ` + totalCarbohydrates.toFixed(1) + `g</li>
            <li><span>Protein:</span> ` + totalProtein.toFixed(1) + `g</li>
            <li><span>Fat:</span> ` + totalFat.toFixed(1) + `g</li>
            <li><span>Sugar:</span> ` + totalSugar.toFixed(1) + `g</li>
            <li><span>Calories:</span> ` + totalCalories.toFixed(0) + `</li>`;


        // 'Total Nutrition Summary - Carbohydrates: ' +
        // totalCarbohydrates +
        // 'g, Protein: ' +
        // totalProtein +
        // 'g, Fat: ' +
        // totalFat +
        // 'g, Sugar: ' +
        // totalSugar +
        // 'g, Calories: ' +
        // totalCalories;
      firstNameElement.textContent = nameInput.value;
      emailElement.textContent = emailInput.value;
      mailInfo.textContent = emailInput.value;
      phoneInfo.textContent = phoneInput.value;
      phoneElement.textContent = phoneInput.value;
      messageElement.textContent = requestInput.value;

      orderSummary.style.display = 'block';
      submitbeforetext.style.display = 'none';
    })
    .catch(error => {
      console.error('Error fetching JSON data:', error);
    });

    // Update the total number of orders
    updateTotalOrders();
}


function updateTotalOrders() {
    const totalOrders = localStorage.getItem('totalOrders');
    const newTotalOrders = totalOrders ? parseInt(totalOrders) + 1 : 1;
    localStorage.setItem('totalOrders', newTotalOrders.toString());
  }
  

// footer update dynamically ===================================================================


// Get the HTML element for the date
const yearFooter = document.getElementById('yearfooter');
const dateFooter = document.getElementById('datefooter');

// Get the current year and date
const currentYear = new Date().getFullYear();
const currentDate = new Date();

// Format the date string as MM/DD/YYYY
const formattedDateTime = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;


// Update the HTML element with the formatted date and year
yearFooter.textContent = currentYear
dateFooter.textContent = formattedDateTime;



// sticky menu =====================================================================

window.addEventListener('scroll', function() {
    var menu = document.getElementById('header');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 200) {
      menu.classList.add('sticky');
      menu.classList.remove('stickyout');
    } else {
      menu.classList.remove('sticky');
      menu.classList.add('stickyout');
    }
  });


// preloader =====================================================================

let preloaderGroup = document.getElementById("Preloader");
window.addEventListener("load", vanish);
function vanish() {
  preloaderGroup.classList.add("vanish");
  setTimeout(() => {
    preloaderGroup.style.display = "none";
  }, 1500);
}


// navbar =====================================================================


const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggler.addEventListener('click', function() {
  navbarCollapse.classList.toggle('show');
});