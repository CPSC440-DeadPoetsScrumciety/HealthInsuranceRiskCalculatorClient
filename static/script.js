const apiUrl = "https://dps-insuranceriskcalculator-server.azurewebsites.net";

async function start() {
    //const response = await fetch("http://localhost:3000") // for testing on local machine    TODO: remove later
    const response = await fetch(apiUrl + "/ping") // for running with web server
    const data = await response.json()
    console.log(data.message())
}

start()

async function agePoints() {
    var url = apiUrl + "/calc-age";    
    
    var data = document.getElementById("age").value;

    let request = new Request (url, {
    mode: "no-cors",
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json"
    }
});
    const res = await fetch(request)
    const result = await res.json()
    document.getElementById("age-points").innerHTML = result
    console.log(result)
}

agePoints();