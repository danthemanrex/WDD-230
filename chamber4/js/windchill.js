//Script for Windchill in Celcius
const temp = parseFloat(document.querySelector("#temp").textContent);
const speed = parseFloat(document.querySelector("#speed").textContent);
let windchill;
const f = 13.12 + 0.6215 * temp - 11.37 * speed ** 0.16 + 0.3965 * temp * speed ** 0.16
if (temp <= 10 && speed > 4.8) {
  windchill = f.toFixed(1);
} else {
  windchill = "NA";
}
document.getElementById("windchill").innerHTML = windchill;