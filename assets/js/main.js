const form = document.querySelector(".form");

form.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const intPeso = form.querySelector('.peso');
    const intAltura = form.querySelector('.altura');

    const peso = Number(intPeso.value);
    const altura = Number(intAltura.value);

    if (!peso) {
        envResultado('Peso invalido', false);
        erroInput(intPeso, true);
        return;
    } else {
        erroInput(intPeso, false);
    }
    if (!altura) {
        envResultado('Altura invalida', false);
        erroInput(intAltura, true);
        return;
    } else {
        erroInput(intAltura, false);
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    envResultado(msg, true);

});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc <= 18.5) return nivel[0];
    if (imc > 18.5 && imc <= 24.9) return nivel[1];
    if (imc >= 25 && imc <= 29.9) return nivel[2];
    if (imc >= 30 && imc <= 34.9) return nivel[3];
    if (imc >= 35 && imc <= 39.9) return nivel[4];
    if (imc >= 40) return nivel[5];
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP() {
    const p = document.createElement('p');
    return p;
}

function envResultado(msg, isValid) {
    const res = document.querySelector("#res");
    res.innerHTML = '';
    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-res');
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    res.appendChild(p); //inserir elemento
}

function erroInput(input, isError) {
    if (isError) {
        input.classList.add('input-error');
    } else {
        input.classList.remove('input-error');
    }
}