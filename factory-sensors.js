// TASK 1
// CHECK HUMIDITY
function checkHumidityLevel(humidityPercentage) {
  if (humidityPercentage > 70) {
    throw new Error('Error! Humidity can not exceed 70%')
  }
}

// TASK 2
// DETECT OVERHEATING
function reportOverheating(temperature) {
  if (temperature == null) {
    throw new ArgumentError('Sensor is broken');
  } else if (temperature > 500) {
    throw new OverheatingError(temperature);
  }
}

// TASK 3
// MONITOR MACHINE
function monitorTheMachine({check, alertDeadSensor, alertOverheating, shutdown}) {
  try {
    check();
  } catch (error) {
      if (error instanceof ArgumentError) {
        alertDeadSensor();
    } else if (error instanceof OverheatingError) {
        if (error.temperature < 600) {
          alertOverheating()
        } else {
        shutdown()
        }
    } else {
      throw error;
    }
  }
  }

