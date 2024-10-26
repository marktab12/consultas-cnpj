document.getElementById('cnpj-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    const cnpj = document.getElementById('cnpj').value; // Pega o valor do CNPJ
    const resultDiv = document.getElementById('result'); // Referência à div onde os resultados aparecerão

    // Exemplo de chamada para a API ou código de consulta
    // Aqui você deve colocar seu código para consultar os CNPJs e obter os PDFs
    // Para fins de exemplo, vamos apenas simular a resposta

    resultDiv.innerHTML = 'Consultando CNPJ: ' + cnpj + '...'; // Mensagem de consulta

    // Simulando um atraso para a consulta (substitua isso pelo seu código real)
    setTimeout(() => {
        resultDiv.innerHTML = 'Consulta concluída! PDF gerado com sucesso para: ' + cnpj;
    }, 2000); // Espera 2 segundos antes de mostrar a mensagem
});
