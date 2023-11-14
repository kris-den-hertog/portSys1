document.addEventListener("DOMContentLoaded", function () {
    const folders = document.querySelectorAll(".folder");
    const menuButton = document.getElementById("menuButton");
    const projectWindow = document.getElementById("projectWindow");
    const contactWindow = document.getElementById("contactWindow");
    const menuWindow = document.getElementById("menuWindow");
    const ct = document.getElementById("contactTitle");
    const cc = document.getElementById("contactContainer");
    const pt = document.getElementById("projectTitle");
    const pc = document.getElementById("projectContainer");
    const mt = document.getElementById("menuTitle");
    const mc = document.getElementById("menuContainer");
    const tts = document.getElementById("tts"); 
    const ttsX = document.getElementById("ttsX");
    const ttsWindow = document.getElementById("ttsWindow"); 

    let isTtsWindowVisible = false;
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
                    pt.style.display = "none";
                    pc.style.display = "none";
                    projectWindow.style.backgroundColor = "none";
                    projectWindow.style.display = "block";
                    projectWindow.classList.add('open-projectWindow');
                    setTimeout(function () {
                        projectWindow.style.backgroundColor = "rgb(228, 228, 228)";
                        pt.style.display = "block";
                        pc.style.display = "block";
                        projectWindow.classList.remove('open-projectWindow'); 
                    }, 700);

                } else {
                    pt.style.display = "none";
                    pc.style.display = "none";
                    projectWindow.classList.add('close-projectWindow');
                    setTimeout(function () {
                        projectWindow.style.display = "none";
                        projectWindow.classList.remove('close-projectWindow'); 
                    }, 700);
                }
                isProjectWindowVisible = !isProjectWindowVisible;
                
            } else if (folder.id === "contact") {
                if (!isContactWindowVisible) {
                    cc.style.display = "none";
                    ct.style.display = "none";
                    contactWindow.style.display = "block";
                    contactWindow.classList.add('open-contactWindow');
                    setTimeout(function () {
                        ct.style.display = "block";
                        cc.style.display = "block";
                        contactWindow.classList.remove('open-contactWindow'); 
                    }, 700);

                } else {
                    cc.style.display = "none";
                    ct.style.display = "none";
                    contactWindow.style.display = "block";
                    contactWindow.classList.add('close-contactWindow');
                    setTimeout(function () {
                        contactWindow.style.display = "none";
                        contactWindow.classList.remove('close-contactWindow'); 
                    }, 700);
               
                }
                isContactWindowVisible = !isContactWindowVisible;
            }

            if (!isSelected) {
                folderImg.src = "img/icons/folderSel.png";
                folderName.classList.add("selected");
            } else {
                folderImg.src = "img/icons/folderNonSel.png";
                folderName.classList.remove("selected");
            }
            isSelected = !isSelected;
        });
    });

    menuButton.addEventListener("click", function () {
        if (!isMenuWindowVisible) {
            mc.style.display = "none";
            mt.style.display = "none";
            menuWindow.style.display = "block";
            menuWindow.classList.add('open-menuWindow');
            setTimeout(function () {
                mt.style.display = "block";
                mc.style.display = "block";
                menuWindow.classList.remove('open-menuWindow'); 
            }, 700);

        } else {
            mc.style.display = "none";
            mt.style.display = "none";
            menuWindow.style.display = "block";
            menuWindow.classList.add('close-menuWindow');
            setTimeout(function () {
                menuWindow.style.display = "none";
                menuWindow.classList.remove('close-menuWindow'); 
            }, 700);
        }
        isMenuWindowVisible = !isMenuWindowVisible;
    });

    tts.addEventListener("click", function () {
        if (!isTtsWindowVisible) {
            ttsWindow.style.display = "block";
            tts.style.color = "grey";

        } else {
            ttsWindow.style.display = "none";
            tts.style.color = "black";
        }
        isTtsWindowVisible = !isTtsWindowVisible;
    });
    ttsX.addEventListener("click", function () {
        ttsWindow.style.display = "none";
        tts.style.color = "black";
        isTtsWindowVisible = false;
    });
});

