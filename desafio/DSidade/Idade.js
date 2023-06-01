
var nasc = document.querySelector('#text')
    var printIdade = document.querySelector('#printIdade')
    var img = document.querySelector('#imagem')
    var data = new Date();
    
    var sexo = document.getElementsByName('sexo')


function verificaIdade(){
    

    if(nasc.value.length == 0 || Number(nasc.value) > data.getFullYear()){
        alert('[ERRO] Verifique os dados e tente novamente!!')
    }else{

        var idade = data.getFullYear() - nasc.value
        var genero = ''

        if(sexo[0].checked){
            genero = 'Homem'
        }else if (sexo[1].checked){
            genero = 'Mulher'
        }else{
            alert('[ERRO] Você não selecionou um gênero!!')
        }

        printIdade.innerHTML = `Detectadomos ${genero} com a idade de ${idade}`
        img.style.display = "flex";  

    }
}
