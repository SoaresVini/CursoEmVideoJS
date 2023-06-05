

function tabuada(){
    let numero = document.querySelector('#numero')
    let tab = document.querySelector('#seltab')
    let mult = 0

    if(numero.value.length == 0){
        alert('Por favor, digite um número!!')
    }else{
        let num = Number(numero.value)
        let i = 1
        tab.innerHTML = ''
        while (i <= 10){

            let item = document.createElement('option')
            mult = num * i
            item.text = `${num} x ${i} = ${num*i}`
            item.value = `tab${i}`
            i++

            tab.appendChild(item)
        }
    }

}