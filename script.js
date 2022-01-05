function printPage() {
    window.print();
}

let countDownDate = new Date("Dec 31, 2021 23:59:59").getTime();
let counter = setInterval(() => {

    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor(((dateDiff % (1000 * 60 * 60)) / (1000 * 60)));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (dateDiff < 0) {
        clearInterval(counter);
    }

}, 1000);