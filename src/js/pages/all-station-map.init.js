const getLocation = async function (station_details) {
  const request = await fetch(
    `saj-dashboard.herokuapp.com/api/all-station-coordinate/`
  );
  const value = await request.json();

  var stations = L.layerGroup();

  for (let i = 0; i < value.length; i++) {
    L.marker([value[i].longitude, value[i].latitude])
      .bindPopup(station_details[i])
      .addTo(stations)
      .openPopup();
  }

  var mbAttr =
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    mbUrl =
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw";

  var grayscale = L.tileLayer(mbUrl, {
      id: "mapbox/light-v9",
      tileSize: 512,
      zoomOffset: -1,
      attribution: mbAttr,
    }),
    streets = L.tileLayer(mbUrl, {
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      attribution: mbAttr,
    });

  var layergroupcontrolmap = L.map("leaflet-map-group-control", {
    center: [1.4918884378420592, 103.74327548670779],
    zoom: 8,
    layers: [streets, stations],
  });

  var baseLayers = {
    Grayscale: grayscale,
    Streets: streets,
  };

  var overlays = {
    Stations: stations,
  };

  L.control.layers(baseLayers, overlays).addTo(layergroupcontrolmap);
};
