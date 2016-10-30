window.onload = getPosition;
var start;
function getPosition() {
	if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setLoc);
    } 
	else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function setLoc(position) {
	start = {lat: position.coords.latitude, lng: position.coords.longitude};
}

function initMap(position) {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: start
        });
        var marker = new google.maps.Marker({
          position: start
          map: map
        });
}