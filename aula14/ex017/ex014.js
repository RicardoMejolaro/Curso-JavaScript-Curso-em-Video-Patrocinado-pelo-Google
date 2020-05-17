function gerar() {
  var v = ''
  v = document.querySelector('#valor').value
  var resultado = document.querySelector('#resultado')
  if (v == '') {
    alert('Dados inválidos, por gentileza digite um valor!')
  } else {
    var valor = Number(v) 
    resultado.innerHTML = ''
     for (let x = 1; x <= 10; x++) {  
       let item = document.createElement('option')
       item.text = `${valor} x ${x} = ${valor*x}`
       item.value = `resultado${x}`
       resultado.appendChild(item)
    }
  }
}
