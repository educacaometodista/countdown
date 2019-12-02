// Set the date we're counting down to
var countDownDate = new Date("Dec 05, 2019 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.querySelector("h4.varejo").innerHTML =
    '' +
    days +
    (days == 1 ? ' dia, ' : ' dias, ') + 
    hours +
    (hours == 1 ? ' hora, ' : ' horas, ') +
    minutes +
    (minutes == 1 ? ' minuto e ' : ' minutos e ') +
    seconds +
    (seconds == 1 ? ' segundo ' : ' segundos ');

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    var countDownDate = new Date("Dec 05, 2019 23:59:59").getTime();
    document.querySelector("h2.varejo").innerHTML = "A prova tradicional acontecerá em"
  }
}, 1000);