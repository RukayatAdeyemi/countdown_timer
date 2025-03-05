const day = document.getElementById("day");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const demo = document.getElementById("demo");

const targetDate = new Date('2025-03-6T19:41:00+01:00');
const updateCountdown = () => {
    const currentTime = new Date ();
    let timeLeft = targetDate - currentTime;
    let days = Math.floor(timeLeft / (1000 * 60 *60 *24)); // 1 day is 86,400,000 miliseconds
    let hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); //1 hpur is 3,600,000 miliseconds
    let minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)); //1 minutes is 60,000 miliseconds
    let secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000); // 1 seconds is 1,000 miliseconds
    day.textContent = days;
    // The padStart(2, '0') method ensures that the hours, minutes, and seconds are always displayed as two-digit numbers (e.g., 03 instead of 3).
    hours.textContent = hoursLeft.toString().padStart(2, '0');;
    minutes.textContent = minutesLeft.toString().padStart(2, '0');;
    seconds.textContent = secondsLeft.toString().padStart(2, '0');;
    // This checks if the timeLeft is less than or equal to zero
    if (timeLeft <= 0) {
        clearInterval(intervalId);
        demo.textContent = "WELCOME!";
        day.textContent = '0';
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
        return;
    }
}
const intervalId = setInterval(updateCountdown, 1000);
updateCountdown();



