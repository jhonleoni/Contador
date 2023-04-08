function contar() {
let inic = document.getElementById('inic')
let fim = document.getElementById('fim')
let pula = document.getElementById('pula')
let res = document.getElementById('res')


if(inic.value.length == 0 || fim.value.length == 0 || pula.value.length == 0) {
    res.innerHTML = 'Impossível contar!'
    window.alert('[ERRO] campos vazios!')
    
} else {
    res.innerHTML = 'Contando... <br>'
    let i = Number(inic.value)
    let f = Number(fim.value)
    let p = Number(pula.value)
    if (p <= 0) {
        window.alert('Número inválido! Contando considerando como 1 ')
    }

    if (i < f) {
        // CONTAGEM CRESCENTE
    for(let c = i; c <= f; c += p) {
      res.innerHTML += ` ${c} \u{1F449}`
    }
      res.innerHTML += "FIM! `\u{1F3C1}`"
    }
    else {
        //CONTAGEM  REGRESSIVA
        for(let c = i; c >= f; c -=p) {
            res.innerHTML += ` ${c} \u{1F449}`
        }
            res.innerHTML += "FIM! `\u{1F3C1}`"
    
        }
}
}