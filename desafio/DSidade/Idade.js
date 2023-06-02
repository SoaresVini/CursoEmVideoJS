
var nasc = document.querySelector('#text')
var printIdade = document.querySelector('#printIdade')
var data = new Date();   
var sexo = document.getElementsByName('sexo')
var msg = document.querySelector('#msg')

function verificaIdade(){
    
    if(nasc.value.length == 0 || Number(nasc.value) > data.getFullYear()){
        alert('[ERRO] Verifique os dados e tente novamente!!')
    }else{

        var idade = data.getFullYear() - nasc.value
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'imagem')

        if(sexo[0].checked){
            genero = 'Homem'

            if(idade <= 15){
                img.setAttribute('src','/desafio/img/criançaH.jpg')

            }else if(idade > 15 && idade <= 18){
                img.setAttribute('src','/desafio/img/adolescenteH.jpg')

            }else if(idade > 18 && idade < 30) {
                img.setAttribute('src','/desafio/img/homem-jovem.jpg')
            
            }else if(idade > 30 && idade < 55){

                img.setAttribute('src','/desafio/img/homem.jpg')

            }else if(idade > 55 && idade < 90){
                img.setAttribute('src','/desafio/img/velhos.jpg')
            }else {
                img.setAttribute('src','/desafio/img/mumia.jpeg')
            }

        }else if (sexo[1].checked){
            genero = 'Mulher'

            if(idade <= 15){
                img.setAttribute('src','/desafio/img/criançaM.jpg')

            }else if(idade > 15 && idade <= 18){
                img.setAttribute('src','/desafio/img/adolescenteM.jpg')

            }else if(idade > 18 && idade < 30) {
                img.setAttribute('src','/desafio/img/mulher-jovem.jpg')
            
            }else if(idade > 30 && idade < 55){

                img.setAttribute('src','/desafio/img/mulher.jpg')

            }else if(idade > 55 && idade < 90){
                img.setAttribute('src','/desafio/img/velhos.jpg')
            }else {
                img.setAttribute('src','/desafio/img/mumia.jpeg')
            }
            
        }else{
            alert('[ERRO] Você não selecionou um gênero!!')
        }

        msg.innerHTML = `Detectadomos: ${genero} com a idade de ${idade} anos`

        msg.appendChild(img)

    }
}
