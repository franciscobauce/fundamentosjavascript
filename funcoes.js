//function imprimeTexto(texto) {
//    console.log(texto)
// }

// imprimeTexto('oi')

function soma(num1, num2) {
    return num1 + num2;
}

function multiplica(num1 = 1, num2 = 1) {
    return num1 * num2;    
}

//                           12  
console.log(multiplica(soma(5, 7)))


function cumprimentar(){
    return "Oi gente!";
}

function cumprimentarPessoa(nome){
(`${cumprimentar()} Meu nome é ${nome}!`) ; 
}

console.log(cumprimentarPessoa('Helena'))


