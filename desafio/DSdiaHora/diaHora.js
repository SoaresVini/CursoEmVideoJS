
var data = new Date();
var hora = data.getHours()

function carregar(){

    var msg = document.querySelector('#msg')
    var foto = document.querySelector('#foto')
    var img = document.querySelector('#imagem')
    
    if(hora == 24){
        msg.innerHTML = `Agora é meia noite.`
    }
    else if(hora == 12){ 
        msg.innerHTML = `Agora é meio dia.`
    }else{
        msg.innerHTML = `Agora são ${hora} horas.`
    }
    
    if(hora <= 12 ){

        img.src = '/desafio/img/manha.jpg'
        document.body.style.backgroundColor = '#FACE23'

    }else if(hora > 12 && hora < 18){
        img.src = '/desafio/img/tarde.jpg'
        document.body.style.backgroundColor = '#F97710'
    }else{
        img.src = '/desafio/img/noite.jpg'
        document.body.style.backgroundColor = '#141649'
    }

}

function boa(){

    if(hora <= 12 ){

        alert('Bom dia')

    }else if(hora > 12 && hora < 18){

        alert('Boa tarde')

    }else{
        alert('Boa noite')
    }
 
}




