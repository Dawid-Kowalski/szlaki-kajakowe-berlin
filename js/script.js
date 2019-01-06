let map;

function initMap() {

	map = new google.maps.Map(document.getElementById('map'), {zoom: 9, center: centerPoint});
	addMarkers(map, markers);
	addMarkersModal(map, markers);
	addRoutes (map, routs);

}

function addMarkers(map, markers) {
  	
  	for(let i=0; i<4; i++) {
  		markers[i] = new google.maps.Marker({position: markerCoordinats[i], map: map, icon: 'images/canoe.png', title: 'szczegóły'});
  	}
}

function addMarkersModal(map, markers) {

	for(let i=0; i<4;i++) {

  		let markerInfo = 	'<div>' + 
  							'<p>Początek: '+ routsDetails[i].start + '</p>' +
  							'<p>Koniec: '+ routsDetails[i].end +'</p>' +
  							'<p>Dystans: ok '+ routsDetails[i].distance +' km </p>' +
  							'</div>'

  		let markerWindow = new google.maps.InfoWindow({
          	content: markerInfo
    	});

	  		markers[i].addListener('click', function() {
	        markerWindow.open(map, markers[i]);
	    });
	}
}

function addRoutes (map, routs) {
	for(let i = 0; i<routs.length;i++){

	    let rout = new google.maps.Polyline({
	          path: routs[i],
	          geodesic: true,
	          strokeColor: '#FF0000',
	          strokeOpacity: 1.0,
	          strokeWeight: 2
	    });

	    rout.setMap(map);
	}
}