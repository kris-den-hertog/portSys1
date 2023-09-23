document.addEventListener("DOMContentLoaded", function () {
const french = document.getElementById("fc");
const about = document.getElementById("am");
const port = document.getElementById("pf");
const delay = document.getElementById("dp");

//alert("Thank you for testing the BETA of my portfolio. If you have any feedback on this site, feel free to let me know via my social media accounts!");
french.addEventListener("click", function () {
    window.open("https://github.com/kris-den-hertog/frenchcore---fixed--", "_blank");

})
port.addEventListener("click", function () {
    window.open("https://github.com/kris-den-hertog/portSys1", "_blank");

})
delay.addEventListener("click", function () {
    window.open("https://github.com/kris-den-hertog/delaypaymobile", "_blank");

})

});