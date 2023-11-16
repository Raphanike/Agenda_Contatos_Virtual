function somar() {
    var tn1 = document.getElementById('text1')
    var tn2 = document.getElementById('text2')
    var res = document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2 
    res.innerHTML = `A soma do valor ${n1} mais ${n2} é igual <strong>${s}</strong>` 
    if(n1 > n2){
        res.innerHTML = `Error! O valor do CAMPO A é maior que do campo B.`
        res.style.background = 'red'
        
    }else{
        res.innerHTML = `Parabéns! O valor do CAMPO B é maior que do CAMPO A.`
        res.style.background = 'green'
    }
}