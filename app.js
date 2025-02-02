//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []

function adicionarAmigo() {
    const input = document.querySelector(".input-name");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome); 
    console.log();
    
    input.value = ""; 
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li); 
    }
    console.log(lista);
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Nenhum amigo disponível para sorteio.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length); 
    const amigoSorteado = amigos[indiceAleatorio]; 
    
    document.getElementById("resultado").innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
