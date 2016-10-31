window.onload = setMap;


function setMap() {
    var start = {lat: 47.552400, lng: -52.71};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: start
    });
    
    var button = document.getElementById("addLoc");
    button.onclick = handleButtonClick;
}

function handleButtonClick() { var x = document.getElementById("tbody")
	var friend = document.getElementById("friendSelect").value;
    var location = document.getElementById("locationSelect").value;
    
	if (tbody.rows.length > 0) {
		for (var i = 0; i < tbody.rows.length; i++) {
			if (friend == tbody.rows[i].cells[0].innerHTML) {tbody.deleteRow(i);}
		}
		
		var row = x.insertRow(0);
		var nameCell = row.insertCell(0);
        var locCell = row.insertCell(1);
        nameCell.innerHTML = friend;
        locCell.innerHTML = location;
	}
	
    else {
        var row = x.insertRow(-1);
        var nameCell = row.insertCell(0);
        var locCell = row.insertCell(1);
        nameCell.innerHTML = friend;
        locCell.innerHTML = location;
    }
}