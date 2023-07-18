
const dataURL = 'https://danthemanrex.github.io/wdd230/chamber/js/data.json';
const listDiv = document.querySelector('.list-view');
const cardDiv = document.querySelector('.grid-view');
const gridDiv = document.querySelector('.grid-div');

fetch(dataURL)
    .then((response) => {
        return response.json();
    })
    .then((jsonObject) => {
        console.table(jsonObject);

        const businesses = jsonObject['businesses'];
        businesses.forEach(appendGridView);
        businesses.forEach(appendListView);
    });

    function appendGridView(business) {
        let directoryGrid = `
            <section class="directory-grid">
                <img class="image-fluid directory-image" src="${business.images}"
                    alt="Image of ${business.name}" loading="lazy">
                <h2>${business.name}</h2>
                <hr>
                <p class="directory-phone">${business.phone}</p>
                <p class="directory-address">${business.address}</p>
                <p class="directory-link"><a class="directory-anchor" href="${business.website}">${business.website}</a></p>
            </section>
        `;
        $("#grid-div").append(directoryGrid);
    }
    function appendListView(business) {
        let directoryList = `
            <section class="directory-grid">
                <h2>${business.name}</h2>
                <hr>
                <p class="directory-phone">${business.phone}</p>
                <p class="directory-address">${business.address}</p>
                <p class="directory-link"><a class="directory-anchor" href="${business.website}">${business.website}</a></p>
            </section>
        `;
        $("#list-div").append(directoryList);
    }

    function displayBusinessesInGrid(business) {

        let media_card = document.createElement('section');
        let h2 = document.createElement('h2');
        let image = document.createElement('img');
        let hr = document.createElement('hr');
        let phone = document.createElement('p');
        let address = document.createElement('p');
        let website = document.createElement('a');

        h2.textContent = `${business.name}`
        phone.textContent = `${business.phone}`
        address.textContent = `${business.address}`
        website.textContent = `${business.website}`
        
        website.setAttribute("href", business.website);
        image.setAttribute("src", business.images);
        image.setAttribute("alt", `Image of ${business.name}`);
        image.setAttribute("loading", "lazy");
       
        media_card.appendChild(h2);
        media_card.appendChild(image);
        media_card.appendChild(hr);
        media_card.appendChild(phone);
        media_card.appendChild(address);
        media_card.appendChild(website);
            
        // cardDiv.appendChild(media_card);

        // mseriesco
        let directoryGrid = `
            <section class="directory-grid">
                <img class="image-fluid directory-image" src="${business.images}"
                    alt="Image of ${business.name}" loading="lazy">
                <h2>${business.name}</h2>
                <hr>
                <p class="directory-phone">${business.phone}</p>
                <p class="directory-address">${business.address}</p>
                <p class="directory-link"><a class="directory-anchor" href="${business.website}">${business.website}</a></p>
            </section>
        `;
        cardDiv.appendChild(directoryGrid);
    }

    function displayBusinessesInList(business) {

        let media_card = document.createElement('section');
        let h2 = document.createElement('h2');
        let phone = document.createElement('p');
        let address = document.createElement('p');
        let website = document.createElement('p');

        h2.textContent = business.name
        phone.textContent = business.phone
        address.textContent = business.address
        website.textContent = business.website
        
       
        media_card.appendChild(h2);
        media_card.appendChild(phone);
        media_card.appendChild(address);
        media_card.appendChild(website);
            
        listDiv.appendChild(media_card);
    }

// Script for Grid and List Views
let viewsButtons = document.querySelectorAll('.links ul li');
let views = document.querySelectorAll('.view-div');

viewsButtons.forEach((link) => {
    link.addEventListener('click', () => {
        viewsButtons.forEach((item) => {
            item.classList.remove('active');
        })
        link.classList.add('active');
        
        let li_view = link.getAttribute('data-view');

        views.forEach((view) => {
            view.style.display = 'none';
        })
        
        if (li_view == 'grid-view') {
            $("#grid-div").css("display", "block");
            $("#list-div").css("display", "none");
        } else {
            $("#grid-div").css("display", "none");
            $("#list-div").css("display", "block");
        }
    })

})