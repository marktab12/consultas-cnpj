document.getElementById('start-process').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado

    const cnpjInput = document.getElementById('cnpj').value; // Pega o valor do campo de entrada
    const cnpjs = cnpjInput.split(',').map(cnpj => cnpj.trim()); // Divide os CNPJs em um array

    // Salva os CNPJs no localStorage para que o Tampermonkey possa acessá-los
    localStorage.setItem('listaCNPJs', JSON.stringify(cnpjs));

    console.log('CNPJs salvos:', cnpjs);
    alert('CNPJs salvos, inicie o processo no Tampermonkey!');
});
