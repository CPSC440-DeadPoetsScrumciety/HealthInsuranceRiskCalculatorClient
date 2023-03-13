const url = "https://dps-insuranceriskcalculator-server.azurewebsites.net/api";
//const url = "http://localhost:3000/api";             // for testing purposes

async function ping() {
    const response = await fetch(url + "/ping");       
    const data = await response.text();
    console.log(data);
    
}

ping();

function performCalculations() {
    getAgePoints();
    //getBMIPoints();
    //getBPPoints();
    //getHistoryPoints();
}

async function getAgePoints() {
    currURL = url + "/calc-age";
    
    var data = document.getElementById("age").value;
    let request = new Request(currURL, {
        mode: "cors",
        method: "POST",
        body: data,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    });
    const response = await fetch(request);
    const result = await response.json();
    document.getElementById("age-points").value = result.points;
    console.log(result);
}

async function getBMIPoints() {
    currURL = url + "/calc-bmi";
    
    var data = document.getElementById("bmi").value;
    let request = new Request(currURL, {
        mode: "cors",
        method: "POST",
        body: data,
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

/*
async function calculateRisk() {
    currURL = url + "/calc-total-risk";

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
    currURL = url + "/test";
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
