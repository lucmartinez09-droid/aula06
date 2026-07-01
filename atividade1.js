let saldo = 200;
let saque = 150;

try {
    if (saque > saldo) {
        throw new Error("Saldo insuficiente para realizar o saque.");
    }

    saldo = saldo - saque;
    console.log("Saque realizado com sucesso!");
    console.log("Saldo atual: R$ " + saldo);
} catch (erro) {
    console.log("Erro: " + erro.message);
} finally {
    console.log("obrigado por usar o sistema");
}