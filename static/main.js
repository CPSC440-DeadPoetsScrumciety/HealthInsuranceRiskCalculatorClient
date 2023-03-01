async function start() {
    const response = await fetch("http://localhost:3000") // for testing on local machine    TODO: remove later
   // const response = await fetch("https://dps-insuranceriskcalculator-server.azurewebsites.net") // for running with web server
    const data = await response.json()
    console.log(data.message())
    
}

start()