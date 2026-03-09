import rl from "node:readline";

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function fazerPergunta(pergunta) {
    return new Promise((resolve) => {
        prompt.question(pergunta, (resposta) => {
            resolve(resposta);
        });
    });
}

async function main() {
    const nome = await fazerPergunta("Qual é o seu nome? ");
    console.log(`Olá, ${nome}!`);

    const email = await fazerPergunta("Qual é o seu email? ");
    console.log(`Seu email é ${email}!`);

    const idade = await fazerPergunta("Qual é a sua idade? ");
    console.log(`Você tem ${idade} anos!`);

    if (idade >= 18 && idade < 60) {
        console.log("Você pode criar uma conta");
        console.log("Bem-vindo ao nosso sistema!");
    } else {
        console.log("Você não pode criar uma conta");
        process.exit(0);
    }

    const escolha = await fazerPergunta("============ MENU ============\n1 - Ver perfil\n2 - Editar perfil\n3 - Sair\nEscolha uma opção: ");

    if (escolha === "1") {
        console.log(`Nome: ${nome}`);
        console.log(`Email: ${email}`);
        console.log(`Idade: ${idade}`);
    } else if (escolha === "2") {
        const novoNome = await fazerPergunta("Digite o novo nome: ");
        const novoEmail = await fazerPergunta("Digite o novo email: ");
        const novaIdade = await fazerPergunta("Digite a nova idade: ");
        console.log("Perfil atualizado!");
        console.log(`Nome: ${novoNome}`);
        console.log(`Email: ${novoEmail}`);
        console.log(`Idade: ${novaIdade}`);
    } else if (escolha === "3") {
        console.log("Saindo...");
        process.exit(0);
    } else {
        for(let i = 0; i < 3; i++) {
            console.log("Opção inválida, tente novamente.");
        }
    }

    prompt.close();
}

main();
