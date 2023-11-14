document.addEventListener("DOMContentLoaded", function () {
    const def = document.getElementById("def");
    const che = document.getElementById("che");
    const gre = document.getElementById("gre");
    const main = document.getElementById("main");
    const hl = document.getElementById("hl");
    const hd = document.getElementById("hd");
    const cub = document.getElementById("cub");

    let backgrounddef = true;
    let backgroundche = false;
    def.style.color = "grey";

    def.addEventListener("click", function () {
        main.style.backgroundImage = "url('../img/backgrounds/default.png')";
        def.style.color = "grey";
        che.style.color = "black";
        gre.style.color = "black";
        hl.style.color = "black";
        hd.style.color = "black";
        cub.style.color = "black";
    });

    che.addEventListener("click", function () {
        main.style.backgroundImage = "url('../img/backgrounds/check.png')";
        che.style.color = "grey";
        def.style.color = "black";
        gre.style.color = "black";
        hl.style.color = "black";
        hd.style.color = "black";
        cub.style.color = "black";
    });
  
    gre.addEventListener("click", function () {
        main.style.backgroundImage = "url('#')";
        main.style.backgroundColor = "grey";
        gre.style.color = "grey";
        che.style.color = "black";
        def.style.color = "black";
        hl.style.color = "black";
        hd.style.color = "black";
        cub.style.color = "black";
    });

    hd.addEventListener("click", function () {
        main.style.backgroundImage = "url('../img/backgrounds/heartdark.png')";
        gre.style.color = "black";
        che.style.color = "black";
        def.style.color = "black";
        hl.style.color = "black";
        hd.style.color = "grey";
        cub.style.color = "black";
    });

    hl.addEventListener("click", function () {
        main.style.backgroundImage = "url('../img/backgrounds/heartlight.png')";
        gre.style.color = "black";
        che.style.color = "black";
        def.style.color = "black";
        hl.style.color = "grey";
        hd.style.color = "black";
        cub.style.color = "black";
    });

    cub.addEventListener("click", function () {
        main.style.backgroundImage = "url('../img/backgrounds/cubes.png')";
        gre.style.color = "black";
        che.style.color = "black";
        def.style.color = "black";
        hl.style.color = "black";
        hd.style.color = "black";
        cub.style.color = "grey";
    });

});