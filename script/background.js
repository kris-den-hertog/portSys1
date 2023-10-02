document.addEventListener("DOMContentLoaded", function () {
    const def = document.getElementById("def");
    const che = document.getElementById("che");
    const gre = document.getElementById("gre");
    const main = document.getElementById("main");

    let backgrounddef = true;
    let backgroundche = false;
    def.style.color = "grey";

    def.addEventListener("click", function () {
        main.style.backgroundImage = "url('../img/default.png')";
        def.style.color = "grey";
        che.style.color = "black";
        gre.style.color = "black"

    });

    che.addEventListener("click", function () {
        main.style.backgroundImage = "url('../img/check.png')";
        che.style.color = "grey";
        def.style.color = "black";
        gre.style.color = "black"

    });
  
    gre.addEventListener("click", function () {
        main.style.backgroundImage = "url('#')";
        main.style.backgroundColor = "grey";
        gre.style.color = "grey";
        che.style.color = "black";
        def.style.color = "black"

    });

});