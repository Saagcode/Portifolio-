var img1, detect, nasc, gen, idade 
function clicar() {
    var data = new Date()
    var aux = data.getFullYear()
    var img1 = document.getElementById('imagem')
    var detect = document.getElementById('detect')
    nasc = document.getElementById('oano')
    
    img1.style.borderRadius ='100px'
     if (nasc.value.length != 4 || nasc.value > aux) {
        window.alert('Dados invalidos.')
        return 
    } else {
        var gen = document.getElementsByName('sex')
        idade = Number(aux - nasc.value)
        var genero = ''
      if (gen[0].checked) {
        genero = 'mulher'
    } else if (gen[1].checked) {
        genero = 'homem'
    }
}
    if (idade >= 0 && idade <= 4 && genero == 'homem') {
        detect.innerHTML = `Detectamos um homem de ${idade} anos.`
        img1.src = 'meninobb.jpg'
    } else if (idade >= 5 && idade <= 17 && genero == 'homem') {
        detect.innerHTML = `Detectamos um homem de ${idade} anos.`
        img1.src = 'meninocrianca.jpg'
    } else if (idade >= 18 && idade <= 28 && genero == 'homem') {
        detect.innerHTML = `Detectamos um homem de ${idade} anos.`
        img1.src = 'mascjovem.jpg'
    } else if (idade >= 29 && idade <= 59 && genero == 'homem') {
        detect.innerHTML = `Detectamos um homem de ${idade} anos.`
        img1.src = 'homemadulto.jpg'
    } else if (idade >= 60 && genero == 'homem') {
        detect.innerHTML = `Detectamos um homem de ${idade} anos.`
        img1.src = 'idoso.jpg'
    } else if (idade > 0 && idade <= 4 && genero == 'mulher') {
        detect.innerHTML = `Detectamos uma mulher de ${idade} anos.`
        img1.src = 'meninabb.jpg' 
    } else if (idade >= 5 && idade <= 17 && genero == 'mulher') {
        detect.innerHTML = `Detectamos uma mulher de ${idade} anos.`
        img1.src = 'meninacrianca.jpg'
    } else if (idade >= 18 && idade <= 28 && genero == 'mulher') {
        detect.innerHTML = `Detectamos uma mulher de ${idade} anos.`
        img1.src = 'mulherjovem.jpg'
    } else if (idade >= 29 && idade <= 59 && genero == 'mulher') {
        detect.innerHTML = `Detectamos uma mulher de ${idade} anos.`
        img1.src = 'mulheradulta.jpg'
    } else if (idade >= 60 && genero == 'mulher') {
        detect.innerHTML = `Detectamos uma mulher de ${idade} anos.`
        img1.src = 'idosa.jpg'
    }
}