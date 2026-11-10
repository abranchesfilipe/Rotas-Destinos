// Abrir e fechar o menu no telemóvel
function abrirMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("ativo");
}

// Pesquisa simples de destinos
function pesquisar() {
    const destino = document.getElementById("destino").value.trim();

    if (destino === "") {
        alert("Por favor, escreva o destino que pretende visitar!");
    } else {
        alert("Está a procurar viagens para: " + destino);
    }
}
