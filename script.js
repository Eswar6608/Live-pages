function updateClock() {
  const hourHand = document.getElementById("hour-hand");
  const minuteHand = document.getElementById("minute-hand");
  const secondHand = document.getElementById("second-hand");

  const now = new Date();

  const seconds = now.getSeconds() * 6;
  //const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${seconds}deg)`;

  const minutes = now.getMinutes() * 6;
  // const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  minuteHand.style.transform = `rotate(${minutes}deg)`;

  const hours = now.getHours() * 30 + Math.round(minutes / 12);
  //const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hours}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
