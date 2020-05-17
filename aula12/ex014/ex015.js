function carregar() {
  //seleciona o local e atribui a mensagem ao titulo da pagina
  var titulo = document.getElementById('titulo')
  //seleciona o local mensagem e atribui a variavel msg
  var msg = document.getElementById('msg')
  //seleciona o local da imagem e atribui a variavel imagem
  var img = document.getElementById('imagem')
  //cria uma instancia do objeto mensagem
  var data = new Date()
  //seleciona e atribui a hora atual do sistema
  var hora = data.getHours()
  //inclui o testo com a hora no Html com id msg
  msg.innerHTML = `Agora são ${hora} hora(s)`

  if(hora >= 0 && hora < 12) {
    titulo.innerHTML = 'Bom dia!'
    img.innerHTML = '<img src="img/manha.png" alt="foto do dia">'
    document.body.style.background = '#e2cd9f'
  } else if (hora >= 12 && hora < 18) {
    titulo.innerHTML = 'Boa tarde!'
    img.innerHTML = '<img src="img/tarde.png" alt="foto do dia">'
    document.body.style.background = '#b9846f'
  } else {
      titulo.innerHTML = 'Boa noite!'
      img.innerHTML = '<img src="img/noite.png" alt="foto do dia">'
      document.body.style.background = '#515154'
      }
}
