let res = document.getElementById('res')


function calcular(){
    let consumoMensal = Number(document.getElementById('consumoMensal').value)
    
    let quantidadeDePlacas = Math.ceil(consumoMensal / 40);

    res.innerHTML = ``
    res.innerHTML += `A quantidade de placas solares que você precisa é ${quantidadeDePlacas}`
}