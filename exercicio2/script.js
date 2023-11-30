const imprimirTabuada = (numero) => {
    let i = 1;
    console.log(`A tabuada de ${numero} é:`)
    while (i <= 10) {
        console.log(`${numero} x ${i} = ${numero * i}`);
        i++;
    }
}

imprimirTabuada(+prompt("Digite um número inteiro:"));