const sysInfo = require('systeminformation');

//GPU temp log while keeping in mind the number of gpus

sysInfo.graphics()
    .then(data => {
        data.controllers.forEach(controller => {
            if (controller.temperatureGpu) {
                console.log("GPU:", controller.model +",", "Temperature:", controller.temperatureGpu)
            }
        })
    })
    
    
    .catch(error => console.error(error));


