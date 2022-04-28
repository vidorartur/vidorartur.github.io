function calculaImc(){

    var peso= document.getElementById('txtpeso')
    var altura = document.getElementById('txtaltura')
    var resp = document.getElementById("resp")
    var imc = peso.value / (altura.value * altura.value);
    var resimc = imc.toFixed(2)
    resp.innerHTML = `Seu IMC é de ${resimc}`
    
    if (resimc >= 24.9){ 
    var resultado = document.getElementById("resultado")
    resultado.innerHTML = "Sobrepeso"} 
    else if (resimc <= 18.5) {
    var resultado = document.getElementById("resultado")
    resultado.innerHTML = "Magreza"}
    else if (resimc >= 30) {
    var resultado = document.getElementById("resultado")
    resultado.innerHTML = "Obesidade"
    }
    else { var resultado = document.getElementById("resultado")
    resultado.innerHTML = "Normal"}

    console.log(imc)

}