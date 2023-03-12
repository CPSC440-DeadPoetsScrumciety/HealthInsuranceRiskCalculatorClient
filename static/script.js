const url = "https://dps-insuranceriskcalculator-server.azurewebsites.net/api";
//const url = "http://localhost:3000/";             // for testing purposes

async function start() {
    const response = await fetch(url);                  // for testing on local machine     
    // const response = await fetch(url + "/ping");     // for running with web server
    const data = await response.json();
    console.log(data.message());
    
}

setInterval(function () {
  ping();
}, 150000);

function ping() {
  $.ajax({
    type: "GET",
    url: url + "/ping",
    dataType: "text",
    success: function (response) {
      console.log(response);
    },
  });
}


/*
async function getAgePoints() {
    currURL = url + "/api/calc-age";    
    
    var data = document.getElementById("age").value;

    let request = new Request (currURL, {
        mode: "no-cors",
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    });
    const res = await fetch(request);
    const result = await res.json();
    document.getElementById("age-points").value = result.points;
    console.log(result);
}

async function getBMIPoints() {
    currURL = url + "/api/calc-bmi";
    
    var data = document.getElementById("bmi").value;
    let request = new Request(currURL, {
        mode: "no-cors",
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    });
    const res = await fetch(request);
    const result = await res.json();
    document.getElementById("bmi-points").value = result.points;
    console.log(result);
}


async function calculateRisk() {
    currURL = url + "/api/calc-total-risk";

    var agePoint = document.getElementById("age-points").value;
    var bmiPoint = document.getElementById("bmi-points").value;
    var totalPoint = agePoint + bmiPoint;

    let request = new Request(currURL, {
        mode: "no-cors",
        method: "POST",
        body: JSON.stringify(totalPoint),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    });
    const res = await fetch(request);
    const result = await res.json();
    document.getElementById("total-points").value = result.points;
    console.log(result);
}
    
async function test() {
    currURL = url + "/api/test";
    let request = new Request(currURL, {
        mode: "no-cors",
        method: "POST",
        body: JSON.stringify(totalPoint),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    });
    const res = await fetch(request);
    const result = await res.json();
    console.log(result);
}

start();
test();

getAgePoints();
getBMIPoints();
calculateRisk();
*/