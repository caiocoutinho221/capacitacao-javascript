// Declare diferentes variáveis utilizando os prefixos let, var e const e atribua números e palavras a cada uma delas.

function funcao() {
    var x = "Caio"
    let y = "Caio 2"
    console.log(x, y)
    {
        var z = "Caio 3"
        let xx = "Caio 4"
        console.log(z, xx)
    }
    
    console.log(z)
    console.log(xx) // erro
}
funcao()