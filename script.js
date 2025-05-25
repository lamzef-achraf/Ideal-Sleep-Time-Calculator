function calculateBedTimes() {
  const wakeTimeInput = document.getElementById('wake-time').value;
  const result = document.getElementById('result');

  if (!wakeTimeInput) {
    result.innerHTML = "<p>Please select a wake-up time.</p>";
    return;
  }

  const [wakeHour, wakeMinute] = wakeTimeInput.split(':').map(Number);
  const wakeDate = new Date();
  wakeDate.setHours(wakeHour, wakeMinute, 0, 0);

  const sleepCycles = 6; 
  let times = [];

  for (let i = sleepCycles; i >= 3; i--) {
    const sleepTime = new Date(wakeDate.getTime() - i * 90 * 60000);
    let h = sleepTime.getHours().toString().padStart(2, '0');
    let m = sleepTime.getMinutes().toString().padStart(2, '0');
    times.push(`${h}:${m}`);
  }

  result.innerHTML = `<p>To wake up at <strong>${wakeTimeInput}</strong>, try sleeping at:</p><ul>` +
    times.map(time => `<li>${time}</li>`).join('') +
    '</ul><p>(Each cycle is ~90 minutes)</p>';
}
