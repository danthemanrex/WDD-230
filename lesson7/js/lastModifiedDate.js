var lastTampering = document.lastModified;
var outputElement = document.getElementById("output");
if (outputElement !== null) {
  outputElement.textContent = "Last Updated: " + lastTampering;
}
var classYearElement = document.getElementById("classYear");
if (classYearElement !== null) {
  var currentYear = new Date();
  classYearElement.textContent = currentYear.getFullYear();
}