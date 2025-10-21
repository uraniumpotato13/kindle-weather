var api_locParams = "lat=50.1243111&lon=14.4901953";
var api_appId = "e68f9fae53273627d62ac93d0061a915";
var api_lang = "sk"
var api_units = "metric"; 

var api_params = null;

// refresh time in miliseconds (default 30 mins)
var refreshTime = 10 * 60 * 1000;

// Browser in kindle paperwhite doesn't support rotation.
// You can override with this parameter 'll' and 'lr' for landscape left/right, 'up' for upside down.
//var rotation = "ll";

// You can set night mode,
// "auto" - by sunrise and sunset,
// "HH-HH - like: ""22-06", from 22:00 to 06:00
// "on" - night mode all the day :)
var night_mode = "off";

// Timezone offset - kindle doesnt report correct local time to the kindle (always it is GMT),
// You can set custom GMT offset, in format "+08:00".
// You may need to set it again after winter/summer time change.
// Null is default
var utcOffset = null

