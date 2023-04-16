const sysInfo = require('systeminformation');

//CPU temp log

sysInfo.cpuTemperature()

.then(data => {
    console.log("CPU: " + Math.round(data.main) + "°C");
})

.catch(error => console.error(error));

//GPU temp log while keeping in mind the number of gpus

sysInfo.graphics()

.then(data => {
    data.controllers.forEach((controller, no) => {
        console.log("GPU " + (no + 1) + " temperature: " + Math.round(controller.temperature) + "°C");
    });
})

.catch(error => console.error(error));