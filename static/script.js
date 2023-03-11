const url = "https://dps-insuranceriskcalculator-server.azurewebsites.net";

async function start() {
    //const response = await fetch("http://localhost:3000"); // for testing on local machine    TODO: remove later
    const response = await fetch(url + "/api/ping"); // for running with web server
    const data = await response.json();
    console.log(data.message());
    
}

async function getAgePoints() {
    currURL = url + "/api/calc-age";    
    
    var data = document.getElementById("age").value;

    let request = new Request (currURL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    });
    const res = await fetch(request);
    const result = await res.json();
    document.getElementById("age-points").innerHTML = result;
    console.log(result);
}

async function getBMIPoints() {
    currURL = url + "/api/calc-bmi";
    
    var data = document.getElementById("bmi").value;
    let request = new Request(currURL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    });
    const res = await fetch(request);
    const result = await res.json();
    document.getElementById("bmi-points").innerHTML = result;
    console.log(result);
}


function calculateRisk() {
    getAgePoints();
    getBMIPoints();
}
    

start();
calculateRisk();
