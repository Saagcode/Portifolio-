var nome = window.prompt('Qual e o seu nome?')
while (nome == '') {
    window.alert('Nome invalido')
    var nome = window.prompt('Qual e o seu nome?')
    if (nome !== '') {
        window.alert(`Ola! ${nome}`)
        break;
    }
}
function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var aux = document.getElementById('aux')
    var horario = new Date()
    var hora = horario.getHours()
    msg.innerHTML = `Agora sao ${hora}:00h`
    img.style.boxShadow = '5px 5px 10px black'
    img.style.borderRadius = '50%'
    if (hora >= 0 && hora < 12 ) {
        img.src = 'manha.jpg'
        aux.innerHTML = 'Bom dia!'
        document.body.style.background = '#EDBD99'
    } else if (hora < 18 && hora >= 12) {
        img.src = 'tarde.jpg'
        aux.innerHTML = 'Boa tarde!'
        document.body.style.background = '#FFB922'
    } else {
        img.src = 'noite.jpg'
        aux.innerHTML = 'Boa noite!'
        document.body.style.background = '#2C4D82'
    }

}
