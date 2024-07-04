// script.js
function updateTimeAndDay() {
  const currentTimeElement = document.getElementById("current-time");
  const currentDayElement = document.getElementById("current-day");

  const now = new Date();
  const utcTime = now.toISOString().slice(0, 19).replace("T", " ");
  const dayOfWeek = now.toLocaleDateString("en-US", { weekday: "long" });

  currentTimeElement.textContent = utcTime;
  currentDayElement.textContent = dayOfWeek;
}

window.onload = updateTimeAndDay;
