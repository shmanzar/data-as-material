var identbutton = document.getElementById('btn-pass');
var imag = document.getElementById('img-coke');
var runtext = () => {
    imag.src = `./poem.png`
}
var check = () => {
  var password = document.getElementById("pass").value;
  console.log(password);
  if (password == 'San Sebastian') {
    runtext();
  }
}



