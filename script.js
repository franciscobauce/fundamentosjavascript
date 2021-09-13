const forma = "triângulo"
const altura = 5
const comprimento = 6
let area;

if (forma === "retângulo"){
   area = altura * comprimento
} else {
    area = (altura * comprimento) / 2
}

console.log(area)