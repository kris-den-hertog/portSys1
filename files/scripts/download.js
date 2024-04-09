// Download NL
var dutchDiv = document.getElementById('dutch');

dutchDiv.addEventListener('click', function() {
  downloadCVNL('KrisdenHertogCvDutch.jpg');
});

function downloadCVNL(filename) {
  var linkNL = document.createElement('a');

  linkNL.href = 'cv/' + filename;
  linkNL.download = filename;

  document.body.appendChild(linkNL);
  linkNL.click();
  document.body.removeChild(linkNL);
}

// Download EN
var englishDiv = document.getElementById('english');

englishDiv.addEventListener('click', function() {
  downloadCV('KrisdenHertogCv.jpg');
});

function downloadCV(filename) {
  var link = document.createElement('a');

  link.href = 'cv/' + filename;
  link.download = filename;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
