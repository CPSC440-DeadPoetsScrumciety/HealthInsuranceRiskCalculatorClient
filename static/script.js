const url = "https://dps-insuranceriskcalculator-server.azurewebsites.net/api";
//const url = "http://localhost:3000/api";             // for testing purposes

async function ping() {
    const response = await fetch(url + "/ping");       
    const data = await response.text();
    console.log(data);
    
}

ping();



async function getAgePoints() {
    var data = document.getElementById("age").value;
    const response = await fetch(url + "/calc-age");
    const result = await res.text();
    document.getElementById("age-points").value = result;
    
    console.log(result);
}
/*
async function getBMIPoints() {
    currURL = url + "/calc-bmi";
    
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
