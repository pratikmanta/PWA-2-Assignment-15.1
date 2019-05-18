var main = document.getElementById("main")

// gets the list of flights 
var req = new XMLHttpRequest();
req.open('GET','https://raw.githubusercontent.com/pratikmanta/flights-status/master/db.json',true)
req.onload = function () {
    if (this.status == 200)
        var res = JSON.parse(req.responseText)
        var arrival = "";
        var count = 0;
        
        for (var i=0; i<res.arrival.length; i++) {
            var card = document.createElement("div")
            card.className = "box"
            main.appendChild(card).innerHTML = `<span>${res.arrival[count].flightsrc} to ${res.arrival[count].flightdest}</span> <span id="span_status">${res.arrival[count].status}</span><h5>${res.arrival[count].time}</h5> `
            count++
    
        }  
    }
req.send()









