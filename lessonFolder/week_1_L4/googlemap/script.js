function init() {
    //let the varible name map and L.map("map") is to crete a leaflet map instance and bind it to th HTML id named map,
    //set the initala view of map coord and
    //zoom level 14
    let map = L.map("map").setView([3.148268579614442, 101.62532308840025], 14);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    //create marker at the specidic location and add to map
    let marker1 = L.marker([3.1683012538659905, 101.61316247988736]).addTo(map);
    let marker2 = L.marker([3.126334518247103, 101.6165624346316]).addTo(map);

    marker1
        .bindPopup("<b>Gamuda Tower</b>", {
            closeOnClick: false,
            autoClose: false,
        })
        .openPopup();
    marker2
        .bindPopup("<b>Gamuda Learning Center</b>", {
            closeOnClick: false,
            autoClose: false,
        })
        .openPopup();
}
init();
