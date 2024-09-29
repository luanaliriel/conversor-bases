// conversão de base
function converterBase(){
    const baseInicial = document.getElementById(`base1`).value
    const numeroConvertido = document.getElementById(`valorparaserconvertido`).value

    let resultado = ``

    if (baseInicial === `2`) {
        resultado = `Binário: ${numeroConvertido} 
        Decimal: ${parseInt(numeroConvertido, 2).toString(10)} 
        Octal: ${parseInt(numeroConvertido, 2).toString(8)} 
        Hexadecimal: ${parseInt(numeroConvertido, 2).toString(16).toUpperCase()}`
    } else if (baseInicial === `10`) {
        resultado = `Decimal: ${numeroConvertido} 
        Binário: ${parseInt(numeroConvertido, 10).toString(2)} 
        Octal: ${parseInt(numeroConvertido, 10).toString(8)} 
        Hexadecimal: ${parseInt(numeroConvertido, 10).toString(16).toUpperCase()}`
    } else if (baseInicial === `8`) {
        resultado = `Octal: ${numeroConvertido} 
        Binário: ${parseInt(numeroConvertido, 8).toString(2)} 
        Decimal: ${parseInt(numeroConvertido, 8).toString(10)} 
        Hexadecimal: ${parseInt(numeroConvertido, 8).toString(16).toUpperCase()}`
    } else if (baseInicial === `16`) {
        resultado = `Hexadecimal: ${numeroConvertido} 
        Binário: ${parseInt(numeroConvertido, 16).toString(2)} 
        Decimal: ${parseInt(numeroConvertido, 16).toString(10)} 
        Octal: ${parseInt(numeroConvertido, 16).toString(8)}`
    }

    document.getElementById(`resultadoconversao`).innerText = resultado
}

// função pra converter os números na base selecionada
function converterParaDecimal(valor, base) {
    return parseInt(valor, base)
}

function converterDeDecimal(valor, base) {
    return valor.toString(base)
}

// atualizar os resultados em todas as bases
function mostrarResultadoEmTodasAsBases(resultado) {
    document.getElementById(`resultadoBinario`).innerText = resultado.toString(2)
    document.getElementById(`resultadoOctal`).innerText = resultado.toString(8)
    document.getElementById(`resultadoDecimal`).innerText = resultado.toString(10)
    document.getElementById(`resultadoHexadecimal`).innerText = resultado.toString(16).toUpperCase()
}











// funções da calculadora com base individual
function somar() {
    const base1 = parseInt(document.getElementById(`basePrimeiroNumero`).value)
    const base2 = parseInt(document.getElementById(`baseSegundoNumero`).value)
    const valor1 = converterParaDecimal(document.getElementById(`Numero1Inserido`).value, base1)
    const valor2 = converterParaDecimal(document.getElementById(`Numero2Inserido`).value, base2)
    const resultado = valor1 + valor2
    mostrarResultadoEmTodasAsBases(resultado)
}

function subtrair() {
    const base1 = parseInt(document.getElementById(`basePrimeiroNumero`).value)
    const base2 = parseInt(document.getElementById(`baseSegundoNumero`).value)
    const valor1 = converterParaDecimal(document.getElementById(`Numero1Inserido`).value, base1)
    const valor2 = converterParaDecimal(document.getElementById(`Numero2Inserido`).value, base2)
    const resultado = valor1 - valor2
    mostrarResultadoEmTodasAsBases(resultado)
}

function multiplicar() {
    const base1 = parseInt(document.getElementById(`basePrimeiroNumero`).value)
    const base2 = parseInt(document.getElementById(`baseSegundoNumero`).value)
    const valor1 = converterParaDecimal(document.getElementById(`Numero1Inserido`).value, base1)
    const valor2 = converterParaDecimal(document.getElementById(`Numero2Inserido`).value, base2)
    const resultado = valor1 * valor2;
    mostrarResultadoEmTodasAsBases(resultado)
}

function dividir() {
    const base1 = parseInt(document.getElementById(`basePrimeiroNumero`).value)
    const base2 = parseInt(document.getElementById(`baseSegundoNumero`).value)
    const valor1 = converterParaDecimal(document.getElementById(`Numero1Inserido`).value, base1)
    const valor2 = converterParaDecimal(document.getElementById(`Numero2Inserido`).value, base2)
    if (valor2 !== 0) {
        const resultado = valor1 / valor2;
        mostrarResultadoEmTodasAsBases(resultado)
    } else {
        document.getElementById(`resultadoCalculoEmTodasBases`).innerText = `Erro.`
    }
}