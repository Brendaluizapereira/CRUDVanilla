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


//Validating functions

function validate() {
  let validateEmail = document.getElementById("email").value;

  if ((validateEmail == "") |=  !(pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$") ) {

      document.getElementById("modalEmail").style.display = "block";

      return false;

  } else {

      window.alert("Pronto! Assim que o app chegar, te avisaremos.");
      document.getElementById("modalEmail").style.display = "none";
      document.getElementById("contactForm").reset();
      return true;
      
    }
}


function send() {
  let email = document.getElementById("email").value;

    if (validate()) {
      $.ajax({
        "URL":"https:ec2-52-25-113-53.us-west-2.compute.amazonaws.com", 
        "method": "POST",
        "content-type": "text/JSON",
        "body": {
          "email": email
        }
      })
    }  

    $("#contactForm");
}

// When the user clicks on <span> (x), close the modal

function closeModal() {
  document.getElementById("modalEmail").style.display = "none";
}


