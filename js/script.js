function initMap() {
  	let startPoint1 = {lat: 52.296987, lng: 13.624872};

  	let map = new google.maps.Map(document.getElementById('map'), {zoom: 12, center: startPoint1});
  	let marker1 = new google.maps.Marker({position: startPoint1, map: map});


let firstroute = 	[
						{lng: 13.6249754, lat: 52.2966784},
						{lng: 13.6269065, lat: 52.2969015},
						{lng: 13.6277863, lat: 52.2971377},
						{lng: 13.6310479, lat: 52.2991848},
						{lng: 13.6333674, lat: 52.3006659},
						{lng: 13.6434605, lat: 52.3071476},
						{lng: 13.6457565, lat: 52.3148482},
						{lng: 13.6446836, lat: 52.3171962},
						{lng: 13.6453166, lat: 52.3209606},
						{lng: 13.6414006, lat: 52.3238197},
						{lng: 13.6431386, lat: 52.3283441},
						{lng: 13.6399844, lat: 52.337975},
						{lng: 13.6357773, lat: 52.3476297},
						{lng: 13.6403264, lat: 52.3632121},
						{lng: 13.6482228, lat: 52.36882},
						{lng: 13.6504115, lat: 52.372462},
						{lng: 13.6604108, lat: 52.3800859},
						{lng: 13.6792935, lat: 52.3775447},
						{lng: 13.6988629, lat: 52.3742961},
						{lng: 13.7029399, lat: 52.3734053},
						{lng: 13.6974467, lat: 52.3723048},
						{lng: 13.6934556, lat: 52.3694226},
						{lng: 13.692726, lat: 52.36882},
						{lng: 13.6936272, lat: 52.3679815},
						{lng: 13.6919106, lat: 52.3668023},
						{lng: 13.6739291, lat: 52.3636577},
						{lng: 13.6644877, lat: 52.3564242},
						{lng: 13.6492528, lat: 52.3385975},
						{lng: 13.6378587, lat: 52.3428057}
		       		]
		      




    let firstRoute = new google.maps.Polyline({
          path: firstroute,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
    });

    firstRoute.setMap(map);
}