let balanceValue = 0;

function deposit() {
    const valueDeposit = parseFloat(document.getElementById('deposit__amount').value);

    if (valueDeposit > 0) {
        balanceValue += valueDeposit;

        document.getElementById('balance').innerText = balanceValue;
        document.getElementById('deposit__amount').value = '';
    } else {
        alert('Digite um número válido para depósito!')
    }
}

function withdraw() {
    const valueWithdraw = parseFloat(document.getElementById('withdraw__amount').value);

    if (valueWithdraw <= balanceValue) {
        balanceValue -= valueWithdraw;

        document.getElementById('balance').innerText = balanceValue;
        document.getElementById('withdraw__amount').value = '';
    } else {
        alert('Digite um número válido para saque!')
        document.getElementById('withdraw__amount').value = ''
    }
}