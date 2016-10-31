
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
	var map = document.getElementById("map");
	var friend = document.getElementById("friendSelect").value;
    var location = document.getElementById("locationSelect").value;
    var date = new Date();
    
	if (tbody.rows.length > 0) {
		for (var i = 0; i < tbody.rows.length; i++) {
			if (friend == tbody.rows[i].cells[0].innerHTML) {tbody.deleteRow(i);}
		}
		
		var row = x.insertRow(0);
		var nameCell = row.insertCell(0);
        var locCell = row.insertCell(1);
        var dateCell = row.insertCell(2);
        nameCell.innerHTML = friend;
        locCell.innerHTML = location;
        dateCell.innerHTML = date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear()+" at "+date.getHours()+":"+date.getMinutes();
        var content = friend+" was here on"+dateCell.innerHTML;
        addMarker(map, friend, content, location);
	}
	
    else {
        var row = x.insertRow(-1);
        var nameCell = row.insertCell(0);
        var locCell = row.insertCell(1);
        var dateCell = row.insertCell(2);
        nameCell.innerHTML = friend;
        locCell.innerHTML = location;
        dateCell.innerHTML = date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear()+" at "+date.getHours()+":"+date.getMinutes();
        var content = friend+" was here on"+dateCell.innerHTML;
        addMarker(map, friend, content, location);
    }
}

function addMarker(map, title, content, location) {
	if (location == "MUN") {var ltln = new google.maps.LatLng(47.572479, -52.733879)}
	else if (location == "Avalon Mall") {var ltln = new google.maps.LatLng(47.560972, -52.755122)}
	else if (location == "Downtown") {var ltln = new google.maps.LatLng(47.561725, -52.709991)}
	else (location == "Village Mall") {var ltln = new google.maps.LatLng(47.534963, -52.750613)}
	
	var markerOptions = {
			position: ltln,
			map: map,
			title: title,
			clickable: true
	}
	var marker = new google.maps.Marker(markerOptions); 
	
    var infoWindowOptions = {
    	content: content,
    	position: ltln
    }
    var infoWindow = new google.maps.InfoWindow(infoWindowOptions);

    google.maps.event.addListener(marker, "click", function() {infoWindow.open(map);});
}