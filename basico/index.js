// const não tem reatribuicao, mas tem mutabilidade //
// let tem reatribuicao, e tabém tem mutabilidade //
// e var é uma variável global, que pode ser usada fora de blocos;


const userNames = ['pedro', 'maria', 'roger'];

userNames.push('josé');

for(let i = 0; i < userNames.length; i++){
    console.log(userNames[i]);
}
