let balanceValue = 0;

function deposit() {
    const valueDeposit = parseFloat(document.getElementById('deposit__amount_input').value);

    if (valueDeposit > 0) {
        balanceValue += valueDeposit;

        document.getElementById('balance').innerText = balanceValue;
        document.getElementById('deposit__amount_input').value = '';
        
        armazenarValorDeposito();
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

function armazenarValorDeposito() {

    //pego o valor digitado pelo usuário no input de deposito.
    const valorDeposito = document.getElementById('deposit__amount_input').value;

    //crio o obj passando o valor da chave com a variável que pega o input depósito.
    const objDeposito = { valor: valorDeposito };

    localStorage.setItem('deposito', JSON.stringify(objDeposito));

    const lerDeposito = JSON.parse(localStorage.getItem('deposito'));

    console.log(lerDeposito);
};