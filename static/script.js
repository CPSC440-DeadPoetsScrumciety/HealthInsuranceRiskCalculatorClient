const url = "https://dps-insuranceriskcalculator-server.azurewebsites.net/api";
//const url = "http://localhost:3000";             // for testing purposes

async function ping() {
    const response = await fetch(url + "/ping");       
    const data = await response.text();
    console.log(data);
}

ping();

async function performCalculations() {
    currURL = url + "/calc-total-risk";

    //var agePoint = document.getElementById("age-points").value;
    //var bmiPoint = document.getElementById("bmi-points").value;
    var totalPoint = getAgePoints() + getBMIPoints();

    let request = new Request(currURL, {
        mode: "cors",
        method: "POST",
        body: JSON.stringify(totalPoint),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const res = await fetch(request);
    const result = {} 
    result = await res.json();
    document.getElementById("total-points").value = result.points;
    console.log(result.points);
    document.getElementById("total-category").value = result.category;
    console.log(result.category);
}


async function getAgePoints() {
    currURL = url + "/calc-age";

    var data = document.getElementById("age").value;
    let request = new Request(currURL, {
        mode: "cors",
        method: "POST",
        body: data.toString(),
        headers: {
            "Content-Type": "text/html"
        }
    });
    const response = await fetch(request);
    const result = await response.text();
    document.getElementById("age-points").value = parseInt(result);
    console.log(parseInt(result));
    return parseInt(result);
}

async function getBMIPoints() {
    currURL = url + "/calc-bmi";
    
    var data = {};
    data.heightFeet = document.getElementById("heightFeet").value;
    data.heightInches = document.getElementById("heightInches").value;
    data.weight = document.getElementById("weight").value;

    let request = new Request(currURL, {
        mode: "cors",
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const res = await fetch(request);
    var result = {}; 
    result = await res.json();
    document.getElementById("bmi-points").value = result.points;
    console.log(result.points);
    document.getElementById("bmi-category").value = result.category;
    console.log(result.category);
    return result.points;
}

/*
async function calculateRisk() {
    currURL = url + "/calc-total-risk";

    var agePoint = document.getElementById("age-points").value;
    //var bmiPoint = document.getElementById("bmi-points").value;
    var totalPoint = agePoint; //+ bmiPoint;

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
*/


