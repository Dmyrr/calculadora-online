const screen = document.querySelector('output');
var x = null;
operacao = null;
var apagarTela = false;

function aparecerNaTela(botao) {

    if (apagarTela === true) {
        screen.innerText = "";
        var tela = screen.innerText;
        var algarismos = tela.length;

        if (algarismos <= 9) {
            var digito = botao.innerText;
            screen.innerText = tela + digito;
        }

        apagarTela = false;
    } else {
        var tela = screen.innerText;
        var algarismos = tela.length;

        if (algarismos <= 9) {
            var digito = botao.innerText;
            screen.innerText = tela + digito;
        }
    }

}

function apagar() {
    var tela = screen.innerText;
    var novaTela = tela.slice(0, -1);
    screen.innerText = novaTela;
}

function limpar() {
    screen.innerText = "";
    x = null;
    apagarTela = false;
}

function somar() {
    var tela = parseFloat(screen.innerText);
    if (x == null || operacao == null) {
        x = tela;
    } else {
        x += tela;
    }
    operacao = 'somar';
    apagarTela = true;

    var i = x.toString();
    var algarismos = i.length;

    if (algarismos >= 11) {

        do {
            i = i.slice(0, -1);
        }while(i.length >=11);

        screen.innerText = i;
    } else {
        screen.innerText = i;
    }
}

function subtrair() {
    var tela = parseFloat(screen.innerText);
    if (x == null || operacao == null) {
        x = tela;
    } else {
        x -= tela;
    }
    operacao = 'subtrair';
    apagarTela = true;
    
    var i = x.toString();
    var algarismos = i.length;

    if (algarismos >= 11) {

        do {
            i = i.slice(0, -1);
        }while(i.length >=11);

        screen.innerText = i;
    } else {
        screen.innerText = i;
    }
}

function multiplicar() {
    var tela = parseFloat(screen.innerText);
    if (x == null || operacao == null) {
        x = tela;
    } else {
        x *= tela;
    }
    operacao = 'multiplicar';
    apagarTela = true;
    
    var i = x.toString();
    var algarismos = i.length;

    if (algarismos >= 11) {

        do {
            i = i.slice(0, -1);
        }while(i.length >=11);

        screen.innerText = i;
    } else {
        screen.innerText = i;
    }
}

function dividir() {
    var tela = parseFloat(screen.innerText);
    if (x == null || operacao == null) {
        x = tela;
    } else {
        x /= tela;
    }
    operacao = 'dividir';
    apagarTela = true;
    
    
    var i = x.toString();
    var algarismos = i.length;

    if (algarismos >= 11) {

        do {
            i = i.slice(0, -1);
        }while(i.length >=11);

        screen.innerText = i;
    } else {
        screen.innerText = i;
    }
}

function resultado() {
    switch (operacao) {
        case 'somar':
            somar();
            operacao = null;
            break;
        case 'subtrair':
            subtrair();
            operacao = null;
            break;
        case 'multiplicar':
            multiplicar();
            operacao = null;
            break;
        case 'dividir':
            dividir();
            operacao = null;
            break;
    }
}