document.getElementById('cnpj-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que a página recarregue
    const cnpj = document.getElementById('cnpj').value;
    // Aqui você pode fazer a chamada para a sua API para obter o PDF
    // Por enquanto, apenas exibimos uma mensagem
    document.getElementById('result').innerText = `Consultando o CNPJ: ${cnpj}`;
});