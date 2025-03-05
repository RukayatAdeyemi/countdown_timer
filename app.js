const day = document.getElementById("day");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const demo = document.getElementById("demo");

const targetDate = new Date('2024-12-08T15:00:00+01:00');
const updateCountdown = () => {
    const currentTime = new Date ();
    let timeLeft = targetDate - currentTime;
    let days = Math.floor(timeLeft / (1000 * 60 *60 *24));
    let hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);
    day.textContent = days;
    hours.textContent = hoursLeft.toString().padStart(2, '0');;
    minutes.textContent = minutesLeft.toString().padStart(2, '0');;
    seconds.textContent = secondsLeft.toString().padStart(2, '0');;
    if (timeLeft <= 0) {
        clearInterval(intervalId);
        demo.textContent = "Countdown End!";
    }
}
const intervalId = setInterval(updateCountdown, 1000);
updateCountdown();
