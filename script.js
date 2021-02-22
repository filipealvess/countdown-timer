const daysContainer = document.querySelector('[data-timer="days"]');
const hoursContainer = document.querySelector('[data-timer="hours"]');
const minutesContainer = document.querySelector('[data-timer="minutes"]');
const secondsContainer = document.querySelector('[data-timer="seconds"]');

const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 2);

updateCountdown();

let countdown = setInterval(updateCountdown, 1000);

function updateCountdown() {
  const now = new Date();
  const timeLeft = targetDate - now;

  if (timeLeft <= 0) {
    clearInterval(countdown);
    return;
  }

  let secondsLeft = Math.floor(timeLeft / 1000);
  let minutesLeft = Math.floor(secondsLeft / 60);
  let hoursLeft = Math.floor(minutesLeft / 60);
  let daysLeft = Math.floor(hoursLeft / 24);

  secondsLeft %= 60;
  minutesLeft %= 60;
  hoursLeft %= 60;
  daysLeft %= 24;

  secondsLeft = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
  minutesLeft = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
  hoursLeft = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
  daysLeft = daysLeft < 10 ? '0' + daysLeft : daysLeft;

  secondsContainer.innerText = secondsLeft;
  minutesContainer.innerText = minutesLeft;
  hoursContainer.innerText = hoursLeft;
  daysContainer.innerText = daysLeft;
}
