
let userName = getFirstName("Cristiano Ronaldo dos Santos Aveiro")

console.log("Seja bem vindo, " + userName + "ooo!!!")
console.log("SIIIUUUUUUUU !!!!!!")

function getFirstName(name) {
    let firstName = name.split(" ")[0]
    return firstName
}

// metodo split pega um caracter declarado no parâmetro e quebra-o 
// o vetor na posição [0] do vetor pega o primeiro nome 

