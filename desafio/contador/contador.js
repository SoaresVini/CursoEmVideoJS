//caixa vaxia ou passo 0 = alert 


function contar(){

    let inicio = document.querySelector('#inicio')
    let fim = document.querySelector('#fim') 
    let passo = document.querySelector('#passo')
    let res = document.querySelector('#res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] faltam dados!!')
    }else{
        res.innerHTML = 'Contando: '

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        // Contagem crescente
        if(i < f){
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
                
            }
            
        }else{
            // Contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        
        res.innerHTML += `\u{1F3F4}`
    
    }
    
}



