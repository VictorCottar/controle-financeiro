let balanceValue = 0;

function deposit() {
    const valueDeposit = parseFloat(document.getElementById('deposit__amount_input').value);

    if (valueDeposit > 0) {
        balanceValue += valueDeposit;

        document.getElementById('balance').innerText = balanceValue;

        storeValueDeposit();
        localStorageBalance();
        document.getElementById('deposit__amount_input').value = '';
    } else {
        alert('Digite um número válido para depósito!')
    }

}

function withdraw() {
    const valueWithdraw = parseFloat(document.getElementById('withdraw__amount').value);

    if (valueWithdraw <= balanceValue) {
        balanceValue -= valueWithdraw;

        document.getElementById('balance').innerText = balanceValue;

        storeValueWithdraw();
        localStorageBalance();
        document.getElementById('withdraw__amount').value = '';
    } else {
        alert('Digite um número válido para saque!')
        document.getElementById('withdraw__amount').value = ''
    }
}

function storeValueDeposit() {
    const valueDeposit = document.getElementById('deposit__amount_input').value;

    const objDeposit = { valor: valueDeposit };

    localStorage.setItem('deposito', JSON.stringify(objDeposit));

};

function storeValueWithdraw() {
    const valueWithdraw = document.getElementById('withdraw__amount').value;

    const objWithdraw = { valor: valueWithdraw };

    localStorage.setItem('saque', JSON.stringify(objWithdraw));

}

function localStorageBalance() {
    const objBalance = { saldo: balanceValue };

    localStorage.setItem('saldo', JSON.stringify(objBalance))
}


window.onload = function newValueBalance() {
    const balanceElement = document.getElementById('balance');

    const getDeposit = JSON.parse(localStorage.getItem('deposito'));
    const getWithdraw = JSON.parse(localStorage.getItem('saque'));


    if (getDeposit) {
        balanceValue += getDeposit.valor;
    }

    if (getWithdraw) {
        balanceValue -= getWithdraw.valor;
    }
    balanceElement.innerText = balanceValue;

}