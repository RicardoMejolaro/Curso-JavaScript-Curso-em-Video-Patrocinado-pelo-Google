function contar() {
  var inicio = ''
  inicio = document.querySelector('#inicio').value
  var fim = ''
  fim = document.querySelector('#fim').value
  var passo = ''
  passo = document.querySelector('#passo').value
  var resultado = document.querySelector('#resultado')

  if (inicio === '' || inicio < 0) {
    resultado.innerHTML = `O valor digitado no campo <strong>INICIO</strong> foi <strong>inválido, zero ou negativo</strong>, assim é impossivel contar incluir um número válido e/ou maior que zero!`
  } else if (fim === '' || fim <= inicio || fim < 0) {
    resultado.innerHTML = `O valor digitado no campo <strong>FIM</strong> foi <strong>inválido, zero ou negativo</strong>, assim é impossivel contar: incluir um número válido e/ou maior que o número de inicio: ${inicio}!`
  } else if (passo === '' || passo <= 0) {
    alert(`Passo inválido, o valor digitado no campo PASSO foi inválido ou zero, considerado o valor de inicio para contagem: ${inicio}`)
    passo = inicio
    } if (passo !== '') {
    resultado.innerHTML = `<strong>Contando: </strong>`
    var i = Number(inicio)
    var f = Number(fim)
    var p = Number(passo)

    for(var c = i; c <= f; c += p) {
      resultado.innerHTML += ` ${c} \u{1F449}`      
    }
    resultado.innerHTML += `\u{1F3C1}`
  }    
}