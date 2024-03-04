let balanceValue = 0;

function deposit() {
    const valueDeposit = parseFloat(document.getElementById('deposit__amount_input').value);

    if (valueDeposit > 0) {
        balanceValue += valueDeposit;

        document.getElementById('balance').innerText = balanceValue;

        localStorageDeposit();
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

        localStorageWithdraw();
        localStorageBalance();
        document.getElementById('withdraw__amount').value = '';
    } else {
        alert('Digite um número válido para saque!')
        document.getElementById('withdraw__amount').value = ''
    }

}

function localStorageDeposit() {
    const valueDeposit = document.getElementById('deposit__amount_input').value;

    const objDeposit = { valor: valueDeposit };

    localStorage.setItem('deposito', JSON.stringify(objDeposit));

}

function localStorageWithdraw() {
    const valueWithdraw = document.getElementById('withdraw__amount').value;

    const objWithdraw = { valor: valueWithdraw };

    localStorage.setItem('saque', JSON.stringify(objWithdraw));

}

function localStorageBalance() {
    const objBalance = { saldo: balanceValue };

    localStorage.setItem('saldo', JSON.stringify(objBalance))

}

window.onload = function catchValueBalance() {
    const getBalance = JSON.parse(localStorage.getItem('saldo'));
    
    balanceValue = getBalance.saldo;

    document.getElementById("balance").innerText = getBalance.saldo;

    historicDeposit();
    historicWithdraw();
}

function historicDeposit() {
    const getDeposit = JSON.parse(localStorage.getItem('deposito'));

    document.getElementById("element__last-deposit").innerText = getDeposit.valor; 
}

function historicWithdraw() {
    const getWithdraw = JSON.parse(localStorage.getItem('saque'));

    document.getElementById("element__last-withdraw").innerText = getWithdraw.valor;
}