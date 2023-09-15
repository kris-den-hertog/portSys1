document.addEventListener("DOMContentLoaded", function () {
    const def = document.getElementById("def");
    const che = document.getElementById("che");
    const main = document.getElementById("main");

    let backgrounddef = true;
    let backgroundche = false;

    che.addEventListener("click", function () {
        main.style.backgroundImage = "url('../img/check.png')";

    });
    def.addEventListener("click", function () {
        main.style.backgroundImage = "url('../img/default.png')";

    });

});