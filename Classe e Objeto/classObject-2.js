

class formaDeBolo {
    constructor(saborDaMassa, saborRecheio) { // dentro de constructor recebe dois parâmetros 
        this.saborDaMassa = saborDaMassa // (this.) para guardar as variáveis declaradas 
        this.saborRecheio = saborRecheio // que vai receber os paramêtros 
    }
}

let boloFesta = new formaDeBolo("massa de chocolate", "recheio de nutella")
// new para dizer que é uma nova instância 
console.log(boloFesta.saborDaMassa)
console.log(boloFesta.saborRecheio)

