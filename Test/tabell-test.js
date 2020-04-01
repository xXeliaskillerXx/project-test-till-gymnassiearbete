
$.get('Chassi.json', function(data) {
    document.getElementById("GFG_UP").innerHTML = JSON.parse(data[0]);
});

$.getJSON('Chassi.json' , function(data) {
    var tbl_body = document.createElement("tbody");
    var odd_even = false;
    $.each(data, function() {
        var tbl_row = tbl_body.insertRow();
        tbl_row.className = odd_even ? "odd" : "even";
        $.each(this, function(k , v) {
            var cell = tbl_row.insertCell();
            cell.appendChild(document.createTextNode(v.toString()));
        });        
        odd_even = !odd_even;               
    });
    $("#target_table_id").append(tbl_body);   //DOM table doesn't have .appendChild
});