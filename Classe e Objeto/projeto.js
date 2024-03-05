

class Heroi {
    constructor(nome, idade, tipo, ataque) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    }
    mago() {
        console.log(`O ${mago.tipo} atacou usando ${mago.ataque}`)
    }
    guerreiro() {
        console.log(`O ${guerreiro.tipo} atacou usando a ${guerreiro.ataque}`)
    }
    monge() {
        console.log(`O ${monge.tipo} atacou usando as ${monge.ataque}`)
    }
    ninja() {
        console.log(`O ${ninja.tipo} atacou usando uma ${ninja.ataque}`)
    }
}


// criar novo objeto a partir da classse, instanciar
let mago = new Heroi("beatriz reis", 27, "mago", "magia") // representa um novo objeto de Heroi
let guerreiro = new Heroi("sova", 22, "Guerreiro", "espada")
let monge = new Heroi("juliette", 18, "monge", "artes maciais")
let ninja = new Heroi("quarto duelista", 31, "ninja", "shuriken")


// atribuir valores para atributos de um objeto

mago.mago()
guerreiro.guerreiro()
monge.monge()
ninja.ninja()

