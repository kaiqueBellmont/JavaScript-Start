function formatarValorDecimal(valorDecimal) {
    // tofixed = .2f ou duas cadas decimais.
    //
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")} `
    console.log(valorEmReais)
}
formatarValorDecimal(0.1 + 0.2)


