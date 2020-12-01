// Countdown
let countdown = new Date(2021, 1, 30, 00, 00, 00).getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countdown - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    $("#countdown").html(days + " dias, " + hours + " horas, " + minutes + " minutos e " + seconds + " segundos ");

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      $("#finalDay").html("É hoje!");
    }

}, 1000); 


