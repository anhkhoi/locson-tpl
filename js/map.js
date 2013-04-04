function init() {
    var cdX = 10.844771; //Longitude
    var cdY = 106.607702; //Latitude

    if (document.getElementById("map-canvas") !== null) {
        var myLatLng = new google.maps.LatLng(cdX, cdY);
        var _options = {
            center: myLatLng,
            scaleControl: true,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map-canvas"),_options);

        var marker = new google.maps.Marker({
            map: map,
            position: map.getCenter()
        });
        //Create Info Window for location founded
        myHtml = "Cty TNHH MTV ABC";
        var infowindow = new google.maps.InfoWindow({
            content: myHtml,
            pixelOffset: new google.maps.Size(0, 15),
            maxWidth: '100'
        });
//        infowindow.open(map, marker);

        /* 
         TH: Use geocode alternative LatLng (no exactly) 
        
        geocoder.geocode({'address': siteAddress}, function(results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location
                });
            } else {
                alert("Geocode was not successful for the following reason: " + status);
            }
        });
        */
    }
}
$(document).ready(function() {
    init();
});