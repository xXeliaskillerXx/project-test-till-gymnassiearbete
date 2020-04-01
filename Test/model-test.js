// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
function vidclick() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function spanClick() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
/*
var i;
var j = 'Chassi.json'.length;
for(i=0; i<=j; i++){
    var table = document.getElementById("students");
    var row = table.insertRow(0);
    var moderkort = row.insertCell(0);
    var specifikation = row.insertCell(1);

    moderkort.innerHTML = 'Chassi.json'[0].namn;
    //specifikation.innerHTML = country[i].Color;
}
*/