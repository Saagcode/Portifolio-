var entrada0 = document.getElementById('init')
var entrada1 = document.getElementById('end')
var entrada2 = document.getElementById('pass')
function clicar() {
    var escr = document.getElementById('escr')
    var cont = document.getElementById('cont')
    var aux = Number(entrada0.value) // importante puxar uma nova variavel e designar a entrada da caixa como um valor numerico
    var aux1 = Number(entrada1.value)
    var aux2 = Number(entrada2.value)
    if (entrada0.value.length == 0 || entrada1.value.length == 0 || entrada2.value.length == 0) { //evitar que o usuario nao coloque nada nas entradas
        window.alert('Dado incorreto.')
        cont.innerHTML = 'Impossivel contar.'
        return

    } else if (aux == String || aux1 == String || aux2 == String) { //evitar que o usuario coloque letras nas entradas
        window.alert('Dado incorreto.')
        cont.innerHTML = 'Impossivel contar'

    } else if (aux1 < aux){ // caso o valor final seja menor que o valor inicial (contagem tras pra frente)
        escr.innerHTML = '' // serve para zerar a entrada na variavel correspondente
        cont.innerHTML = ''
        cont.innerHTML = 'Contando: </br>'
        for (var c = aux; c >= aux1; c -= aux2) { // nesse caso necessario nao esquecer de negativar o resultado c -= aux2 pois esta descrecendo o valor da contagem
            cont.innerHTML += `\u{1F449} ${c}  `
        }
        cont.innerHTML += `\u{1F3C1}`
    } else if (aux2 <= 0) { // caso o usuario digite 0 no passo 
        escr.innerHTML = 'Passo informado invalido, novo passo: 1'  
        cont.innerHTML = ''
        cont.innerHTML = 'Contando: </br>'
        aux2 = 1 
        for (var c = aux; c <= aux1; c += aux2) {
            cont.innerHTML += `\u{1F449} ${c}  `
        }
        cont.innerHTML += `\u{1F3C1}`
    } else if (aux2 <= 0) {
        escr.innerHTML = 'Passo informado invalido, novo passo: 1'
        cont.innerHTML = ''
        cont.innerHTML = 'Contando: </br>'
        aux2 = 1
        for (var c = aux; c >= aux1; c -= aux2) {
            cont.innerHTML += `\u{1F449} ${c}  `
        }
        cont.innerHTML += `\u{1F3C1}`
    } else {
        escr.innerHTML = ''
        cont.innerHTML = ''
        cont.innerHTML = 'Contando: </br>'
        for (var c = aux; c <= aux1; c += aux2) { // variavel c recebe o bloco de texto inicial, c menor ou igual bloco final, c igual bloco do passo
            cont.innerHTML += `\u{1F449} ${c} ` //emoji de mao
        } 
        cont.innerHTML += `\u{1F3C1}` //emoji de bandeira
    }
}

