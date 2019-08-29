//Declaração de uma funcão
function calculatabu(){
    //obtendo do html o tdoby da tabela
    let tabu = document.querySelector('#tabu tbody');
    //convertendo um inteiro e obtendo o valor a do campo 
    let valora = parseInt(document.querySelector("#valorA").value);
    //limpando o conteudo do tdboy
    tabu.innerHTML = '';
    //criando um laço de repeticao de 0 a 10
    for (let valorb = 0; valorb <= 10; valorb++){
        //calculando o resultado da atual
        let result = valora * valorb;
        //criando o templete das colunas da linha atual
        let template = `
                <td>${valora}</td>
                <td>operador</td>
                <td>${valorb}</td>
                <td>&nbsp;</td>
                <td>${result}</td>
        `;
        //criando o elemento tr
        let tr = document.createElement('tr');
        //inserindo as colunas na linha
        tr.innerHTML = template;
        //inserndo a linha na tabela
        tabu.append(tr);
    }// fechando o for
}//fechando a funcao
//chamando a funcao pela primeira vez
calculatabu();
//adicionando o evento de alteração ao campo numero
document.querySelector("#valorA").addEventListener('change', calculatabu)