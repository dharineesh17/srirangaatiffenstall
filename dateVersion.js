var websiteVersion = "2.0";
var lastUpdated = new Date(2024, 10, 21);
document.getElementById("v").textContent = websiteVersion;
document.getElementById("lu").textContent = lastUpdated.toLocaleString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});