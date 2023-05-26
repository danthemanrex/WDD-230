function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburguerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburguerBtn');

x.onclick = toggleMenu;

document.querySelector('#©').textContent = new Date().getFullYear();

const opciones = 
{ weekday: 'long', 
year: 'numeric', 
month: 'numeric', 
day: 'numeric' };

document.querySelector('#dateMod').textContent = 
new Date(Date.now()).toLocaleString();

const opciones2 = 
{ weekday: 'long', 
year: 'numeric', 
month: 'long', 
day: 'numeric' };


document.querySelector('#datetime').textContent = 
new Date(Date.now()).toLocaleString('en-US',opciones2);

// Script for the to display a banner on Mondays or Tuesdays only at the very 
// top of the page that says "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m." 
const banner = document.querySelector('#top-page-banner');

let dayOfWeek = new Date().getDay();

if (dayOfWeek == 1 || dayOfWeek == 2) {
    banner.style.display = 'block';
}
else {
    banner.style.display = 'none';
}

// Script for closing the banner
const closeBtn = document.querySelector('.bannerBtn');
closeBtn.addEventListener('click', function() {
    if (banner.style.display !== "none") {
        banner.style.display = "none";
    }
})

//Script for Windchill in Celcius
const temp = parseFloat(document.querySelector("#temp").textContent);
const speed = parseFloat(document.querySelector("#speed").textContent);
const f = 13.12 + 0.6215 * temp - 11.37 * speed ** 0.16 + 0.3965 * temp * speed ** 0.16
if (temp <= 10 && speed > 4.8) {
windchill= f.toFixed(1);
}
else {
    windchill = "NA";
}
document.getElementById("windchill").innerHTML = windchill;