function initMap() {
  	let startPoint1 = {lng: 13.6249754, lat: 52.2966784};
  	let startPoint2 = {lng: 13.5732407, lat: 52.4314199};

  	let startPoint3 = {lng: 13.1854872, lat: 53.0763313};
  	let endPoint3 = {lng: 13.3214859, lat: 53.0062133};


  	let map = new google.maps.Map(document.getElementById('map'), {zoom: 12, center: startPoint1});

  	let marker1 = new google.maps.Marker({position: startPoint1, map: map, icon: 'images/canoe.png'});
  	let marker2 = new google.maps.Marker({position: startPoint2, map: map, icon: 'images/canoe.png'});
  	let marker3 = new google.maps.Marker({position: startPoint3, map: map, icon: 'images/canoe.png'});
  	let marker4 = new google.maps.Marker({position: endPoint3, map: map, icon: 'images/canoe.png'});

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
			       		],
			       		[
					        {lng: 13.1854872, lat: 53.0763313},
					        {lng: 13.1894783, lat: 53.0774657},
				            {lng: 13.1919245, lat: 53.0781102},
				            {lng: 13.2032542, lat: 53.0788063},
				            {lng: 13.2130389, lat: 53.064625},
				            {lng: 13.2127814, lat: 53.0629487},
				            {lng: 13.2369856, lat: 53.0554433},
				            {lng: 13.2558684, lat: 53.0544631},
				            {lng: 13.2607607, lat: 53.0554433},
				            {lng: 13.2648806, lat: 53.0549274},
				            {lng: 13.2663183, lat: 53.0540633},
				            {lng: 13.2691507, lat: 53.0526833},
				            {lng: 13.272262, lat: 53.0523866},
				            {lng: 13.278635, lat: 53.0520771},
				            {lng: 13.289514, lat: 53.0515225},
				            {lng: 13.2939128, lat: 53.0511742},
				            {lng: 13.295093, lat: 53.0509807},
				            {lng: 13.2952861, lat: 53.050065},
				            {lng: 13.2957582, lat: 53.0497167},
				            {lng: 13.2982258, lat: 53.0489299},
				            {lng: 13.2984189, lat: 53.0478205},
				            {lng: 13.2980971, lat: 53.0471498},
				            {lng: 13.2999639, lat: 53.0461307},
				            {lng: 13.3010797, lat: 53.044802},
				            {lng: 13.3021311, lat: 53.0440409},
				            {lng: 13.3038477, lat: 53.0431895},
				            {lng: 13.3045344, lat: 53.0416801},
				            {lng: 13.3055, lat: 53.0406996},
				            {lng: 13.3068947, lat: 53.040377},
				            {lng: 13.3088044, lat: 53.0407383},
				            {lng: 13.3106927, lat: 53.0392417},
				            {lng: 13.3093838, lat: 53.0378225},
				            {lng: 13.3095984, lat: 53.0368806},
				            {lng: 13.3122591, lat: 53.0362742},
				            {lng: 13.3131174, lat: 53.0358097},
				            {lng: 13.3124737, lat: 53.0322742},
				            {lng: 13.3127527, lat: 53.0312289},
				            {lng: 13.3142762, lat: 53.0301966},
				            {lng: 13.3151345, lat: 53.0298094},
				            {lng: 13.3157782, lat: 53.0279511},
				            {lng: 13.3169369, lat: 53.0272543},
				            {lng: 13.3172373, lat: 53.0263251},
				            {lng: 13.3156924, lat: 53.0254475},
				            {lng: 13.3157782, lat: 53.0243892},
				            {lng: 13.3179669, lat: 53.0227629},
				            {lng: 13.3182244, lat: 53.0214464},
				            {lng: 13.319941, lat: 53.0186842},
				            {lng: 13.3206276, lat: 53.0148375},
				            {lng: 13.3210568, lat: 53.0125396},
				            {lng: 13.3223442, lat: 53.0102674},
				            {lng: 13.322988, lat: 53.0091313},
				            {lng: 13.3240179, lat: 53.006988},
				            {lng: 13.3239321, lat: 53.0061359},
				            {lng: 13.3214859, lat: 53.0062133}
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