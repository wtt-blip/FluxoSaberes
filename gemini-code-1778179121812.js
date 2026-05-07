function verificarResposta(escolha) {
    const mensagem = document.getElementById('resultado');
    
    if (escolha === 'a') {
        mensagem.innerText = "Correto! A ODS 4 foca em educação inclusiva e equitativa.";
        mensagem.style.color = "green";
    } else {
        mensagem.innerText = "Quase lá! Tente pesquisar mais sobre inclusão.";
        mensagem.style.color = "red";
    }
}