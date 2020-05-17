function verificarIdade() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')

  if (fano.value.length == 0 || Number(fano.value > ano) || Number(fano.value) < 0) {
    alert('[ERRO]: Verifique os dados digitados e tente novamente')
  } else {
    var fsexo = document.getElementsByName('radsexo')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fsexo[0].checked) {
      genero = 'Masculino'
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute('src', 'img/menino-bebe.png')
      } else if (idade < 21) {
        //Jovem
        img.setAttribute('src', 'img/homem-jovem.png')
      } else if (idade < 50) {
        //Adulto
        img.setAttribute('src', 'img/homem-adulto.png')
      } else {
        //Idoso
        img.setAttribute('src', 'img/homem-idoso.png')
      }
    } else {
      genero = 'Feminino'
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute('src', 'img/menina-bebe.png')
      } else if (idade < 21) {
        //Jovem
        img.setAttribute('src', 'img/mulher-jovem.png')
      } else if (idade < 50) {
        //Adulta
        img.setAttribute('src', 'img/mulher-adulta.png')
      } else {
        //idosa
        img.setAttribute('src', 'img/mulher-idosa.png')
      }
    }
    res.style.textAlign = 'center'
    img.style.padding = '10px'
    res.innerHTML = `Detectamos uma pessoa do gênero <strong>${genero}</strong> com <strong>${idade}</strong> anos.`
    res.appendChild(img)
  }

}