function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`
    if (hora > 0 && hora < 12) {
        img.src = "fotos/manha.png"
        document.body.style.background = "#cece00"
    } else if (hora >= 12 && hora <= 18) {
        img.src = "fotos/tarde.png"
        document.body.style.background = "#c04e0c"
    } else {
        img.src = "fotos/noite.png"
        document.body.style.background = "#090853"
    }
}
