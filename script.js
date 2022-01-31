//lista com os valores da conta
conta = []

//Função que captura números
function cap_num (num) {
    conta.push(num)
    document.getElementById('conta').innerText = conta.join(' ')
}

//função que limpa a conta
function limpar() {
    conta = []
    document.getElementById('conta').innerText = '0'
}

//função que realiza o cálculo (se o cálculo for inválido, ela mostra uma mensagem de erro)
function calcular() {
    try {
    document.getElementById('conta').innerText = eval(conta.join(''))
    conta = []
        } catch(error) {
            document.getElementById('conta').innerText = 'E R R O' 
            conta = []
        }
}
