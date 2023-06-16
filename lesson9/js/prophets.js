const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data.prophets;
}

  
const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element
  
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let birthdate = document.createElement('p');
      let birthplace = document.createElement('p')
      let portrait = document.createElement('img');
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${prophet.name} ${prophet.lastname}`;
      birthdate.innerHTML = `<strong>Date of Birth</strong>: ${prophet.birthdate}`;
      birthplace.innerHTML = `<strong>Place of Birth</strong>: ${prophet.birthplace}`;
  
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '220');
      portrait.setAttribute('height', '320');
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(birthdate)
      card.appendChild(birthplace)
      card.appendChild(portrait);
  
      cards.appendChild(card);
    }); // end of forEach loop
} // end of function expression


// The API was not working, so I used chatGPT to get what happens
getProphetData(url) 
  .then((prophets) => {  // handle the successful response from the API
    displayProphets(prophets); //display the prophets' data on the web page.
  })
  .catch((error) => { // to handle any errors that may occur during the API request.
    console.error('Error:', error);
  });