const getLocation=async function(a){const t=await fetch("https://saj-dashboard.herokuapp.com/api/all-station-coordinate/");var e=await t.json(),o=L.layerGroup();for(let t=0;t<e.length;t++)L.marker([e[t].longitude,e[t].latitude]).bindPopup(a[t]).addTo(o).openPopup();var r='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',i="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",s=L.tileLayer(i,{id:"mapbox/light-v9",tileSize:512,zoomOffset:-1,attribution:r}),i=L.tileLayer(i,{id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1,attribution:r}),r=L.map("leaflet-map-group-control",{center:[1.4918884378420592,103.74327548670779],zoom:8,layers:[i,o]});L.control.layers({Grayscale:s,Streets:i},{Stations:o}).addTo(r)};