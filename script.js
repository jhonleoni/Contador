function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var inputAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (inputAno.value.length == 0 || Number(inputAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var inputGender = document.getElementsByName('radiogen')
        var idade = ano - Number(inputAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (inputGender[0].checked) {
            gênero = 'masculino'
            if (idade >= 0 && idade < 12 ){
                // CRIANÇA
                img.setAttribute('src', 'menino.png')
            }
            else if (idade < 23){
                // JOVEM
                img.setAttribute('src', 'homem.png')
            }
            else if (idade < 60){
                // ADULTO
                img.setAttribute('src', 'homem.png')
            }
            else{
                // IDOSO
                img.setAttribute('src', 'velho.png')
            }
        } else if(inputGender[1].checked){
            gênero = 'feminino'
            if (idade >= 0 && idade < 12 ){
                // CRIANÇA
                img.setAttribute('src', 'menina.png')
            }
            else if (idade < 23){
                // JOVEM
                img.setAttribute('src', 'mulher.png')
            }
            else if (idade < 60){
                // ADULTA
                img.setAttribute('src', 'mulher.png')
            }
            else{
                // IDOSA
                img.setAttribute('src', 'velha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Gênero ${gênero} com ${idade} anos de idade.`
        res.appendChild(img)
    }
} 