

class formaDeBolo {
    constructor(saborDaMassa, saborRecheio) { // dentro de constructor recebe dois parâmetros 
        this.saborDaMassa = saborDaMassa // (this.) para guardar as variáveis declaradas 
        this.saborRecheio = saborRecheio // que vai receber os paramêtros 
    }

    escrever(){ // não ha necessidade de criar uma function, o js já vai enteder que é uma função
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    }
    
    assar(){
        console.log("bolo de " + this.saborDaMassa + " assando")
    }
}

let boloFesta = new formaDeBolo("chocolate", "nutella")
let boloPremium = new formaDeBolo("baunilha", "coco")
// new para dizer que é uma nova instância 
// console.log(boloFesta.saborDaMassa)
// console.log(boloFesta.saborRecheio)


boloFesta.escrever()
boloPremium.escrever()
boloPremium.assar()


// A classe é uma forma de padronizar, reaproveitar o código 