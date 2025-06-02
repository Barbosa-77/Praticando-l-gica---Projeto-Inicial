function sortear(){
 let quantidade = parseInt(document.getElementById('quantidade').value);
let de = parseInt(document.getElementById('de').value);
let ate = parseInt(document.getElementById('ate').value);

console.log(`Quantidade ${quantidade}`)
    console.log(`Do número ${de}`)
    console.log(`Até ${ate}`)
}

let sorteados =[]
let numero 

for(i = 0; i< quantidade; i++){
    numero = numeroaleatorio(de, ate)
    sorteados.push(numero)
}


function numeroaletorio(min , max){
   return Math.floor(Math.random() * (max - min + 1)) + min;
}