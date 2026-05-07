function verificar(ano) {
    const display = document.getElementById('resultado');
    if (ano === '2030') {
        display.innerText = "🌟 Correto! A meta é 2030.";
        display.style.color = "#27ae60";
    } else {
        display.innerText = "❌ Tente novamente! A meta global é 2030.";
        display.style.color = "#e74c3c";
    }
}