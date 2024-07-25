function getInternetTime(showDecimals = false) {
  const date = new Date();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();
  const milliseconds = date.getUTCMilliseconds();
  let hours = date.getUTCHours();
  hours = hours == 23 ? 0 : hours + 1;

  const timeInMilliseconds =
    ((hours * 60 + minutes) * 60 + seconds) * 1000 + milliseconds;
  const millisecondsInABeat = 86400;

  if (showDecimals) {
    return Math.abs(timeInMilliseconds / millisecondsInABeat).toFixed(2);
  } else {
    return Math.floor(Math.abs(timeInMilliseconds / millisecondsInABeat));
  }
}

function updateInternetTime() {
  const internetTime = document.querySelector("#internet-time");
  internetTime.innerText = "@" + getInternetTime();
}

function setCurrentDate() {
  const currentDate = document.querySelector("#current-date");
  if (!!currentDate) {
    const date = new Date();
    currentDate.innerText = new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(date);
  }
}

setInterval(() => updateInternetTime(), 864);
setCurrentDate();
