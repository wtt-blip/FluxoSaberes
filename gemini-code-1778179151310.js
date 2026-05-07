function verificar(ano) {
    const display = document.getElementById('resultado');
    
    if (ano === '2030') {
        display.innerText = "🌟 Excelente! A Agenda 2030 é o compromisso global para a educação.";
        display.style.color = "#27ae60"; // Verde Sucesso
        
        // Pequena animação de "confete" via console ou alert
        console.log("Parabéns por apoiar a ODS 4!");
    } else {
        display.innerText = "❌ Quase! A meta global é para 2030. Vamos estudar mais?";
        display.style.color = "#e74c3c"; // Vermelho Erro
    }
}