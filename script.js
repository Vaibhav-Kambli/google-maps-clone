mapboxgl.accessToken =
	"pk.eyJ1IjoidmFpYmhhdjI2MDgiLCJhIjoiY2toZHFlemt4MDUyMTJ4bzh5aXRoN3J6ciJ9.LdVYkqwtXxwG-nJ-MiKw2Q";

navigator.geolocation.getCurrentPosition(success, error, {
	enableHighAccuracy: true,
});

function success(position) {
	console.log(position);
	setupMap([position.coords.longitude, position.coords.latitude]);
}
function error() {
	setupMap([-79.347015, 43.65107]);
}

function setupMap(center) {
	const map = new mapboxgl.Map({
		container: "map",
		style: "mapbox://styles/mapbox/streets-v11",
		center: center,
		zoom: 15,
	});

	const nav = new mapboxgl.NavigationControl();
	map.addControl(nav);

	var directions = new MapboxDirections({
		accessToken: mapboxgl.accessToken,
		unit: "metric",
		profile: "mapbox/cycling",
	});

	map.addControl(directions, "top-left");
}
