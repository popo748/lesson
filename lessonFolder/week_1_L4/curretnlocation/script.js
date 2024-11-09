let messageRef = document.getElementById("message");

function init() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        messageRef.innerHTML = "Geolocatoin is not sepported by this browser.";
    }
}

function showPosition(position) {
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
    let map = L.map("map").setView([lat, lng], 14);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    let marker = L.marker([lat, lng]).addTo(map);

    marker
        .bindPopup("<b>My Current Location</b>", {
            closeOnClick: false,
            autoClose: false,
        })
        .openPopup();
    //messageRef.innerHTML = `Latitude: ${lat}, longitude: ${lng}`;
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            messageRef.innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            messageRef.innerHTML = "Location information is unavailable.";
            break;

        case error.TIMEOUT:
            messageRef.innerHTML =
                "The request to get user location timed out.";
            break;

        case error.UNKNOWN_ERROR:
            messageRef.innerHTML = "An known error occured.";
            break;
    }
}

init();
