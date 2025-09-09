let abrevNome = (nome) => { // RECEBE O NOME COMPLETO
    let nomeAbrev= nome.split(' '); // SEPARA O NOME EM UM ARRAY DE STRINGS, USANDO O ESPAÇO COMO SEPARADOR
    let nome1 = nomeAbrev[0]; // PEGA O PRIMEIRO NOME
   for(let i of nomeAbrev){ // PERCORRE O ARRAY
        if(i != nome1){ // VERIFICA SE NÃO É O PRIMEIRO NOME
            nome1 += ' ' + i[0] + '.' // ADICIONA A INICIAL DO NOME + PONTO
        };
   }
   console.log(nome1); // RETORNA O NOME ABREVIADO
}