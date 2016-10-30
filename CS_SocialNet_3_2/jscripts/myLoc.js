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

function handleButtonClick() {
	alert("button was clicked");
}