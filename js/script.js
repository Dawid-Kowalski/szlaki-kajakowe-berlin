function initMap() {
  	let startPoint1 = {lat: 52.296987, lng: 13.624872};
  	let startPoint2 = {lat: 52.431474, lng: 13.573225};

  	let map = new google.maps.Map(document.getElementById('map'), {zoom: 12, center: startPoint1});

  	let marker1 = new google.maps.Marker({position: startPoint1, map: map});
  	let marker2 = new google.maps.Marker({position: startPoint2, map: map});


	let routs = [
						[
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
			       		],
			       		[
				            {lng: 13.5732407, lat: 52.4314199},
				            {lng: 13.5727472, lat: 52.4348213},
				            {lng: 13.5759873, lat: 52.4375554},
				            {lng: 13.5711593, lat: 52.4428072},
				            {lng: 13.573627, lat: 52.4484179},
				            {lng: 13.5755796, lat: 52.4486926},
				            {lng: 13.5743136, lat: 52.4498173},
				            {lng: 13.574614, lat: 52.4510727},
				            {lng: 13.5773177, lat: 52.4512819},
				            {lng: 13.5804505, lat: 52.4498826},
				            {lng: 13.5807295, lat: 52.4478033},
				            {lng: 13.5808153, lat: 52.4459854},
				            {lng: 13.5805483, lat: 52.4456818},
				            {lng: 13.5803444, lat: 52.4455804},
				            {lng: 13.5783703, lat: 52.4447107},
				            {lng: 13.5771043, lat: 52.4442496},
				            {lng: 13.5762782, lat: 52.443939},
				            {lng: 13.5736175, lat: 52.4401687}
			       		]
			    ];

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