const url = "https://dps-insuranceriskcalculator-server.azurewebsites.net";

async function start() {
    //const response = await fetch("http://localhost:3000") // for testing on local machine    TODO: remove later
    const response = await fetch(url + "/ping") // for running with web server
    const data = await response.json()
    console.log(data.message())
    
}

start()

async function agePoints() {
    url = url + "/calc-age";    
    
    var data = document.getElementById("age").value;

    let request = new Request (url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
});
    const res = await fetch(request)
    const result = await res.json()
    document.getElementById("age-points").innerHTML = result
    console.log(result)
}

agePoints();