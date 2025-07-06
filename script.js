const birthday = new Date("2025-07-07T00:00:00");

function updateCountdown() {
  const now = new Date();
  const timeLeft = birthday - now;

  if (timeLeft <= 0) {
    document.getElementById("msg").innerHTML = "Hey Enjojty, my love, happy birthday! 🎂❤️ Today isn't just your special day — it's a celebration of the most beautiful soul I've ever known. I can’t put into words how grateful I am that you exist, and even more so, that you're in my life. You light up my world in ways no one else ever could. I want to be there for you, not just on your birthdays, but through every smile, every tear, every ordinary moment that becomes extraordinary just because you're in it. I hope this new year in your life brings you peace, success, laughter, and everything your heart desires. You deserve all the love in the world — and I promise to spend my days showing you just how much you mean to me. I love you endlessly, and always will. ❤️🌹";
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
