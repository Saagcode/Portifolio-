var seletor = document.getElementById('seletor')
var num = document.getElementById('numero')
var show = document.createElement('option')
var array = []
show.text = 'Aguardando...'
seletor.appendChild(show)
function clicar() {
   var valor = Number(num.value)
    if (valor > 100 || valor < 1) {
        window.alert('Escolha apenas entre 1 e 100!')
}   else if (array.includes(valor)) {
        window.alert('Valor ja inserido')
    } else { 
        array.push(valor);
        seletor.innerHTML = ''
            for (var i = 0; i < array.length; i++) {
                var usernum = document.createElement('option')
                usernum.text = `Valor ${array[i]} adicionado.`
                seletor.appendChild(usernum)
        }  
        }
    num.value = '' 
    num.focus()
    total.innerHTML = ''
    maior.innerHTML = ''
    menor.innerHTML = ''
    media.innerHTML = ''
    mais.innerHTML = ''
    menos.innerHTML = ''
    s.innerHTML = ''
        }  
function tap() {
    var val = Number(num.value)
    if (val == 0 && array == 0) {
        window.alert('Preencha o campo solicitado!')
    } else { 
    var total = document.getElementById('total')
    var maior = document.getElementById('maior')
    var menor = document.getElementById('menor')
    var media = document.getElementById('media')
    var s = document.getElementById('soma')
    var mais = Math.max(...array)
    var menos = Math.min(...array)
    total.innerHTML = `Ao todo, temos ${array.length} numeros cadastrados`
    maior.innerHTML = `O maior numero e o ${mais}`
    menor.innerHTML = `O menor numero e o ${menos}`
    var soma = 0
    for (var i = 0; i < array.length; i++)   {
        soma += array[i]
    }
    s.innerHTML = `A soma dos numeros e igual a ${soma}` 
tot = soma / array.length
format = parseFloat(tot.toFixed(2))
    media.innerHTML = `A media dos valores e ${format}` 
}
    if (val == 0) {
        window.alert('Preencha o campo solicitado!')
    }
}


    


