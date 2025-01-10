function setAlarm(hours, minutes) {
  if (!hours || !minutes) {
    return console.log("Somthing is missing!");
  }

  if (typeof hours !== "number" || typeof minutes !== "number") {
    return console.log("Please provide valid minutes and hours!");
  }

  if (hours < 0 || minutes < 0) {
    return console.log("Hours and minutes must be positive number!");
  }

  if (!(hours > 0 && hours <= 23)) {
    return console.log("Please provide hours between 0 and 23!");
  }

  if (!(minutes > 0 && minutes <= 59)) {
    return console.log("Please provide minutes between 0 and 59!");
  }

  const now = new Date();
  const alarmDate = new Date();
  alarmDate.setHours(hours);
  alarmDate.setMinutes(minutes);
  const difference = alarmDate - now;

  if (difference < 0) {
    console.log("Please Provide future time!");
    return;
  }

  setTimeout(() => {
    console.log("Alarm is running...");
  }, difference);
}

setAlarm(21, 37);
