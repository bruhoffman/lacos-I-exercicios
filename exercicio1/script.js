function pedirCoxinha(pedido) {

    let i = 0;

    while (pedido === "S") {
        i = i + 1;
        pedido = prompt("Gostaria de mais uma coxinha? \nDigite 'S' para sim e 'N' para não");
    }

    let conta = i * 2.5;
    console.log(`O valor da conta deu R$ ${conta.toFixed(2)}`);
}

pedirCoxinha("S");