document.getElementById("cnpj-form").addEventListener("submit", async function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    const cnpj = document.getElementById("cnpj").value; // Obtém o CNPJ inserido
    document.getElementById("result").innerHTML = "Consultando...";

    // Chame a função de consulta aqui
    const resultado = await consultarCNPJ(cnpj);
    document.getElementById("result").innerHTML = resultado;
});

async function consultarCNPJ(cnpj) {
    // Aqui você deve implementar a lógica de consulta ao script do Tampermonkey
    // Para simplificação, retornaremos um resultado fictício.
    return `Resultado da consulta para CNPJ ${cnpj}`;
}
