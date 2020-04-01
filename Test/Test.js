/*// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

 //When the user clicks the button, open the modal 
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
*/
//##########################################

 //When the user clicks the button, open the modal 
 /*
 function vidclick() {
    modal.style.display = "block";
  }
  function spanClick() {
    modal.style.display = "none";
  }
  */
  
    //console.log(tbl)
/*
    $.getJSON('Chassi.json' , function(data) {
        console.log(data)
        // EXTRACT VALUE FOR HTML HEADER. 
        var col = [];
        for (var i = 0; i < data.length; i++) {
            for (var key in data[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.
        console.log(col)
        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        var i = 1

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = data[i][col[j]];
                console.log(data[i][col[j]])
            }
        

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }
    );
*/
//########################
/*
function inputChange(e) {
    log.textContent = `Position: (${e.clientX}, ${e.clientY})`;
  }
  */

    var Chassi;
    $.getJSON('Chassi.json' , function(data) {
        console.log(data)
        Chassi=data
    

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");

       tr = table.insertRow(-1);

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < data.length; i++) {

            
            
                var tabCell = tr.insertCell(-1);
                var img = document.createElement('img');
                img.id="ChassiImg"+i
                img.src = data[i]['image']
                img.width='100px'
                img.height='100px'
                img.onclick=function() {
                    vidclick();
                   };
                //document.getElementById("imgid").src = "https://upload.wikimedia.org/wikipedia/commons/1/11/Kanye_West_at_the_2009_Tribeca_Film_Festival.jpg";

                
                tabCell.appendChild(img);
                console.log(img)
               
                
                //tabCell.innerHTML = <img id="imgid" src="" alt="bild">

                console.log(data[i]['namn'])
            
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("Chassi");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }
    );
   
//######################################################################
 $.getJSON('Chassi.json' , function(Chassi) {
   
    
    var table = document.getElementById("students");
     
     var row = table.insertRow(-1);
     var cellName = row.insertCell(0);
     var cellValue = row.insertCell(1);
    cellName.innerHTML = "Namn";
    cellValue.innerHTML = Chassi[0].namn;

     row = table.insertRow(-1);
    cellName = row.insertCell(0);
    cellValue = row.insertCell(1);
   cellName.innerHTML = "Färg";
   cellValue.innerHTML = Chassi[0].color;

   row = table.insertRow(-1);
   cellName = row.insertCell(0);
   cellValue = row.insertCell(1);
  cellName.innerHTML = "Formfaktor";
  cellValue.innerHTML = Chassi[0].Formfaktor;

  row = table.insertRow(-1);
    cellName = row.insertCell(0);
    cellValue = row.insertCell(1);
   cellName.innerHTML = "Moderbord supported";
   cellValue.innerHTML = Chassi[0].supportedmotherbords;
   
   row = table.insertRow(-1);
    cellName = row.insertCell(0);
    cellValue = row.insertCell(1);
   cellName.innerHTML = "Max bredd moderkort";
   cellValue.innerHTML = Chassi[0].Maxbreddmoderkort;

   row = table.insertRow(-1);
    cellName = row.insertCell(0);
    cellValue = row.insertCell(1);
   cellName.innerHTML = "soundproof";
   cellValue.innerHTML = Chassi[0].soundproof;

   row = table.insertRow(-1);
    cellName = row.insertCell(0);
    cellValue = row.insertCell(1);
   cellName.innerHTML = "fönstersida";
   cellValue.innerHTML = Chassi[0].windowside;
    
   row = table.insertRow(-1);
   cellName = row.insertCell(0);
   cellValue = row.insertCell(1);
  cellName.innerHTML = "LED-belysning";
  cellValue.innerHTML = Chassi[0].LEDbelysning;

  row = table.insertRow(-1);
    cellName = row.insertCell(0);
    cellValue = row.insertCell(1);
   cellName.innerHTML = "Dammfilter";
   cellValue.innerHTML = Chassi[0].Dammfilter;

   row = table.insertRow(-1);
    cellName = row.insertCell(0);
    cellValue = row.insertCell(1);
   cellName.innerHTML = "fläktkontoller";
   cellValue.innerHTML = Chassi[0].Flaktkontoller;

   row = table.insertRow(-1);
    cellName = row.insertCell(0);
    cellValue = row.insertCell(1);
   cellName.innerHTML = "Expansionsplatser";
   cellValue.innerHTML = Chassi[0].Expansionsplatser;

   row = table.insertRow(-1);
    cellName = row.insertCell(0);
    cellValue = row.insertCell(1);
   cellName.innerHTML = "Övrigt";
   cellValue.innerHTML = Chassi[0].ovrigt;
     //specifikation.innerHTML = country[i].Color;
 
})