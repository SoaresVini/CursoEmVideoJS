var idade = 68

console.log(`Você tem idade ${idade} anos`)

if (idade < 16){
    console.log('Não vota');
} else if(idade < 18 ||  idade > 67){
    console.log('Voto opcional');
} else {
    console.log('voto obrigatorio')
}

console.log('===============================================')

var agora = new Date()
var hora = agora.getHours

if ( hora < 12){
    console.log('Bom dia!!')
}else if (hora > 12 && hora < 18){
    console.log('Boa tarde!!')
}else if(hora > 18 && hora < 24){
    console.log('Boa noite!!')
}else{
    console.log('vai dormir')
}
