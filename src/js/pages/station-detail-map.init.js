/*
Template Name: saj - Admin & Dashboard Template
Author: Themesbrand
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: leaflet init js
*/

const getLocation = async function (id, station_name) {
  const request = await fetch(
    `https://saj-dashboard.herokuapp.com/api/station-coordinate/${id}`
  );
  const latest_location = await request.json();
  const latitude = latest_location.latitude;
  const longitude = latest_location.longitude;

  var stations = L.layerGroup();

  coordinate = [longitude, latitude];

  L.marker(coordinate).bindPopup(station_name).addTo(stations).openPopup();

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
    center: coordinate,
    zoom: 11,
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
