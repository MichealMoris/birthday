const birthday = new Date("2025-07-07T00:00:00");

function updateCountdown() {
  const now = new Date();
  const timeLeft = birthday - now;

  if (timeLeft <= 0) {
    document.getElementById("msg").innerHTML = "Hey Enjojty, I just wanted to say that I truly love you. I want to be there for you on every birthday, through every moment. I hope this year brings you blessings, achievements, and endless joy. You mean so much to me.❤️";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

// Update every second
setInterval(updateCountdown, 1000);
updateCountdown(); 