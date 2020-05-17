let numero = document.querySelector('#numero')
let lista = document.querySelector('#lista')
let resultado = document.querySelector('#resultado')

let valores = []

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

function inLista(n, l){
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function adicionar() {
  if (isNumero(numero.value) && !inLista(numero.value, valores)) {
    valores.push(Number(numero.value))

    var opcao = document.createElement('option')
    opcao.innerText = `Valor ${numero.value} inserido.`
    lista.appendChild(opcao)
    resultado.innerHTML = ''

  } else {
    alert('Valor inválido ou já encontrado na lista!')
  }
  numero.value = ''
  numero.focus()
}

function finalizar() {
  
  if(valores.length == 0) {
    alert('Adicione valores antes de finalizar')
  } else {
    let total = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0

    for (let pos in valores) {
        if (valores[pos] > maior) {
        maior = valores[pos]
      } if (valores[pos] < menor) {
        menor = valores[pos]
      }
     soma += valores[pos]
    }
    Number(total)
    Number(soma)
    media = soma / total
    
    resultado.innerHTML = ''
    resultado.innerHTML += `<p> Ao todo, temos ${total} números cadastrados.`
    resultado.innerHTML += `<p> O maior número adicionado foi: ${maior}.`
    resultado.innerHTML += `<p> O menor número adicionado foi: ${menor}.`
    resultado.innerHTML += `<p> Somando todos os valores, temos: ${soma}.`
    resultado.innerHTML += `<p> A média dos valores digitados é: ${media}.`

  }

}

