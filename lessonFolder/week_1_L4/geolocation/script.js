let messageRef = document.getElementById("message");

//inbuilt api so no need called just used navigator.geolocation
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
    messageRef.innerHTML = `Latitude: ${lat}, longitude: ${lng}`;
}

function showError(error) {
    //use switch (error.code) to hande diff type of error for each case happens
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
            messageRef.innerHTML = "An unknown error occured.";
            break;
    }
}
//calling the function
init();
