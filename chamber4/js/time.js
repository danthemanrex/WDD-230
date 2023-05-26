// Get the element with the ID "time"
const time = document.getElementById("datetime");

// Update the time element with the current date and time every 1000 milliseconds (1 second)
setInterval(() => {
    time.innerHTML = new Date().toLocaleString();
}, 1000);