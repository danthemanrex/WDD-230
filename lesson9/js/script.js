const d = new Date();
let currentYear = d.getFullYear();

document.getElementById("currentYear").innerHTML = currentYear;

let lastmodified = new Date(document.lastModified);

let month = lastmodified.getMonth() + 1; // getMonth() returns a 0-based value, so adding 1 to match the correct month
let date = lastmodified.getDate();
let year = lastmodified.getFullYear();
let hours = lastmodified.getHours();
let minutes = lastmodified.getMinutes();
let seconds = lastmodified.getSeconds();

// Convert hours to 12-hour format
let ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
hours = hours ? hours : 12; // the hour '0' should be '12' in 12-hour format

let dateString = `Last Updated: ${month}/${date}/${year} - ${hours}:${minutes}:${seconds} ${ampm}`;

document.getElementById("lastUpdated").innerHTML = dateString;