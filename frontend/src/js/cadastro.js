document.getElementById('cadastroPessoaFisica').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = {
        nome: document.getElementById('nome').value,
        cpf: document.getElementById('cpf').value,
        dataNascimento: document.getElementById('dataNascimento').value,
        endereco: document.getElementById('endereco').value,
        telefone: document.getElementById('telefone').value,
        email: document.getElementById('email').value
    };

    fetch('http://localhost:8080/pessoas-fisicas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert('Pessoa Física cadastrada com sucesso!');
        document.getElementById('cadastroPessoaFisica').reset();
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao cadastrar Pessoa Física.');
    });
});
