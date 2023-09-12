document.addEventListener("DOMContentLoaded", function () {
    const folders = document.querySelectorAll(".folder");
    const menuButton = document.getElementById("menuButton");
    const projectWindow = document.getElementById("projectWindow");
    const contactWindow = document.getElementById("contactWindow");
    const menuWindow = document.getElementById("menuWindow");
    let isProjectWindowVisible = false;
    let isContactWindowVisible = false;
    let isMenuWindowVisible = false;

    folders.forEach(function (folder) {
        const folderImg = folder.querySelector(".folderImg");
        const folderName = folder.querySelector(".folderName");
        let isSelected = false;

        folder.addEventListener("click", function () {
            if (folder.id === "projects") {
                if (!isProjectWindowVisible) {
                    projectWindow.style.display = "block";
                } else {
                    projectWindow.style.display = "none";
                }
                isProjectWindowVisible = !isProjectWindowVisible;
            } else if (folder.id === "contact") {
                if (!isContactWindowVisible) {
                    contactWindow.style.display = "block";
                } else {
                    contactWindow.style.display = "none";
                }
                isContactWindowVisible = !isContactWindowVisible;
            }

            if (!isSelected) {
                folderImg.src = "img/folderSel.png";
                folderName.classList.add("selected");
            } else {
                folderImg.src = "img/folderNonSel.png";
                folderName.classList.remove("selected");
            }
            isSelected = !isSelected;
        });
    });

    menuButton.addEventListener("click", function () {
        if (!isMenuWindowVisible) {
            menuWindow.style.display = "block";
        } else {
            menuWindow.style.display = "none";
        }
        isMenuWindowVisible = !isMenuWindowVisible;
    });
});