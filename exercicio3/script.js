const listarNomes = function () {
    const nomesCarros = ["Corolla Cross", "Nivus", "Fastback", "Chevrolet Seeker", "Haval H6"];

    for (let i = 0; i < nomesCarros.length; i++) {
        console.log(`${i + 1} - ${nomesCarros[i]}`);
    }
}

listarNomes();