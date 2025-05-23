function calculateBedTimes() {
  const wakeTimeInput = document.getElementById('wake-time').value;
  const result = document.getElementById('result');
if (!wakeTimeInput) {
    result.innerHTML = "<p>Please select a wake-up time.</p>";
    return;
  }
