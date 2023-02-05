function check(){
  var altura = window.document.getElementById("altura").value
  var peso = window.document.getElementById('peso').value
  var res = window.document.getElementById("resultado")
  var imc = peso / ((altura/100) * (altura/100))
  res.innerText = `Seu imc é: ${imc}`
}