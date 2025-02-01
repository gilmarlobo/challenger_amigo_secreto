// Aluno : Gilmar Pereira da Conceição
//e-mail : gilmarbassstrong@gmail.com
//github : gilmarlobo
let amigos = [];   // array que vai armazenar os nomes dos amigos
contador = 0;  //variavel que vai iterar a cada nome sorteado, pois nessa versão poderá ser sorteado mais de um amigo

function adicionarAmigo() {
    let nome = document.querySelector('input');// pegamos o input
    let valorNome = nome.value; // e nessa variavel pegamos apenas o valor digitado no input

    if (valorNome == '') {  // se o input estiver vazio, uma mensagem solicitará o preenchimento do input
        alert("Digite o nome de um amigo")
    } else {
        amigos.push(valorNome);  // se algo foi digitado, guardamos o valor no array

        let lista = document.getElementById('listaAmigos'); //pegamos nessa variavel a <ul> onde deverá aparecer os nomes inseridos para conferencia
        lista.innerHTML = ''; // a cada nome inserido a ul deverá ser limpa pois os nomes serão carregados a partir de um loop for
        for (amigo in amigos) {
            let novoAmigo = document.createElement('li');// criamos um elemento <li>
            novoAmigo.innerHTML = amigos[amigo];// pegamos um dos nomes salvos na array e colocamos na variavel
            lista.appendChild(novoAmigo); // colocamos o valor da li dentro da ul
        }
        nome.value = "";// limpamos o input para que outro nome seja digitado
    }
}

function sortearAmigo() {
   
    contador ++; // iteramos a nossa variavel contadora
    let tamanho = amigos.length;  // criamos uma variavel para guardar o tamanho da array
    if(tamanho == 0){  // se a array estiver vazia quer dizer que todos os nomes ja foram sorteados pois quando um numero é sorteado ele é eliminado da array
        alert('Todos os amigos ja foram sorteados, reinicie o sorteio.')
    }else{
   
    let valorAleatorio = parseInt(Math.random() * tamanho)// criamos um valor aleatorio de acordo com o tamanho da array

    let resultado = document.getElementById('resultado'); //pegamos a ul onde devem aparecer os resultados nessa variavel
    let sorteio = document.createElement('li'); // criamos um elemento li
    sorteio.innerHTML = `O ${contador}° amigo sorteado foi o ${amigos[valorAleatorio]}`; // aqui uma mensagem que indica com a variavel contadora o nome e qual foi o numero do sorteio
    resultado.appendChild(sorteio);
    amigos.splice(valorAleatorio, 1); // apagamos o nome sorteado da array
   
   }
}

function Limpar(){ // adicionamos um botão para resetar o sorteio do inicio
    amigos = []; // limpamos a array
    let lista = document.getElementById('listaAmigos'); // 
    let resultado = document.getElementById('resultado'); 
    
    lista.innerHTML = "";//limpamos a ul onde aparecem os valores inseridos
    resultado.innerHTML = ""; // limpamos a ul onde aparecem os amigos sorteados
    contador = 0; //resetamos o contador 

}
// como ja conhecia javascript poderia ter feito um sorteeador bem mais completo, porem
//não quis me afastar muito do que foi proposto no challenger


