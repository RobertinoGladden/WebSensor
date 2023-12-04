const api_url =
  "https://api.thingspeak.com/channels/2367683/feeds.json?results=2";

setInterval(() => {
  fetch(api_url)
    .then((hasil) => hasil.json())
    .then((res) => {
      var field = JSON.stringify(res.feeds[0]);
      var obj = JSON.parse(field);
      var motionStatus = obj.field2 === '1' ? 'HIGH' : 'LOW'; // Ubah teks sesuai dengan kondisi field2
      
      document.getElementById("field-1").innerHTML = obj.field1;
      document.getElementById("field-2").innerHTML = motionStatus;
    });
}, 1000);