let num1 = []
let num2 = []
let num3 = [5,8,7,9,1]
let num4 = []

for (let i = 0; i < 10; i++) {
   num1[i] = i + 2
   console.log(`A posição ${i} tem o valor: ${num1[i]} `)
}

i = 0
console.log('===================================')
for (i = 0; i < 10; i++) {
   num2.push(i+2)
   console.log(`A posição ${i} tem o valor: ${num1[i]} `)
}

console.log('===================================')
num3.sort()
console.log(`Os valores do vetor são: ${num3} `)

console.log('===================================')

for (let pos in num1){
    console.log(`A posição ${i} tem o valor: ${num1[pos]}`);
}

if (num1.indexOf(1000) != -1 ){
    console.log('tá errado isso ai')
}else{
    console.log(`${num1.indexOf(1000)}`)
}


