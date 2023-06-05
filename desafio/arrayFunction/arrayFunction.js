var numero = document.querySelector('#numero')
var tab = document.querySelector('#seltab')
let res = document.querySelector('#res')
let valores = []


function isNumero(n){

    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }

}

function inLista(n, l){

    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }

}

function add(){


    if(isNumero(numero.value) && !inLista(numero.value, valores)){

        let item = document.createElement('option')

        valores.push(Number(numero.value))

        item.text = `valor ${Number(numero.value)} adicionado`
        tab.appendChild(item)

        
    }else{
        alert('valor invalido ou já exite dentro da lista')
    }

    numero.value = ''
    res.innerHTML = ''
    numero.focus()

}

function finalizar(){

    if(valores.length == 0){
        alert('Adicona um valor ai')
    }else{
        let menor = valores[0]
        let maior = valores[0]
        let soma = 0
        let media = 0

        for (let i in valores) {

            soma += valores[i]

            media = soma / valores.length
            
            if(valores[i] > maior){
                maior = valores[i]
            }else if(valores[i] < menor){
                menor = valores[i]
            }
        }

        res.innerHTML = ''

        res.innerHTML += `<p> Ao todo, temos ${valores.length} numeros cadastrados.</p>`

        res.innerHTML += `<p> O menor valor cadastrado foi  ${menor}.</p>`

        res.innerHTML += `<p> O maior valor cadastrado foi  ${maior}.</p>`

        res.innerHTML += `<p> A soma dos valores cadastrados é  ${soma}.</p>`

        res.innerHTML += `<p> A media dos valores cadastrados é ${media.toFixed(2)}.</p>`

        valores.sort

        res.innerHTML += `<p> Os valores cadastrados são ${valores}.</p>`

    }
}



