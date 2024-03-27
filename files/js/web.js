const title = document.getElementById("fileTitle");
const desc = document.getElementById("fileDesc");
const par = document.getElementById("PAR");
const mlf = document.getElementById("MLF");
const sci = document.getElementById("SCI");


par.addEventListener("click", parDesc);

function parDesc() {
    title.innerHTML = "PAR (wip)";
    desc.innerHTML = "PAR is a golf gear store that i made up for my design class. during my web and database classes i had to develop an online store for my brand using laravel.<br><br> the frontend and concept of the site were done by me, and the backend of the site was done by someone else.<br><br>expected release: 30-03-2024"
}

mlf.addEventListener("click", mlfDesc);

function mlfDesc() {
    title.innerHTML = "Medisch LeerFonds";
    desc.innerHTML = "Medisch LeerFonds ( Medical Learning Fund ) is a project i worked on with 2 friends during the digital proof hackathon 2023.<br><br> Our challenge was to make a website to help general practitioners get a subsidy for their employees in training.<br><br> We had 4 days to complete the challenge and ended up winning the audience vote award.<br><br> click <a href='https://github.com/kris-den-hertog/Medisch-leerfonds' target='_blank'>Here</a> for the Github page<br><br> click <a href='https://medischleerfonds.vercel.app/' target='_blank'>Here</a> for the finished product."
}

sci.addEventListener("click", sciDesc);

function sciDesc() {
    title.innerHTML = "Silly Code Index";
    desc.innerHTML = "The Silly Code Index is a page where i showcase all the simple silly codes that i made for my school assignments<br><br> click <a href='https://github.com/kris-den-hertog/SillyCodeIndex' target='_blank'>Here</a> for the github page<br><br>click <a href='https://hub.krisdh.dev/index.html' target='_blank'>Here</a> for the finished product."
}