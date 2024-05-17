document.addEventListener('DOMContentLoaded', (event) => {
    const roleSelect = document.getElementById('role');
    const containerAdicional = document.getElementById('containerAdicional');

    roleSelect.addEventListener('change', () => {
        // Limpa o container do select adicional antes de adicionar um novo
        containerAdicional.innerHTML = '';

        // Obtem a opção selecionada
        const selectedRole = roleSelect.value;

        // Verifica se a opção selecionada é diferente de "estudante"
        if (selectedRole === 'professor'|| selectedRole === 'fornecedor') {
            // Cria um novo elemento select
            const newSelect = document.createElement('select');
            newSelect.setAttribute('id', 'personType');
            newSelect.setAttribute('name', 'personType');
            newSelect.setAttribute('required', true);

            // Cria as opções para o novo select
            const option1 = document.createElement('option');
            option1.setAttribute('value', 'pessoaFisica');
            option1.textContent = 'Pessoa Física';

            const option2 = document.createElement('option');
            option2.setAttribute('value', 'pessoaJuridica');
            option2.textContent = 'Pessoa Jurídica';

            // Adiciona as opções ao select
            newSelect.appendChild(option1);
            newSelect.appendChild(option2);

            // Adiciona o novo select ao container
            containerAdicional.appendChild(newSelect);
        }

        if (containerAdicional) {
            const containerRole = document.getElementById('label_doc');
            const selectDoc =document.getElementById('personType');
    
            roleContainer = containerRole.value;
            docSelect = selectDoc.value;
                
            const newLabel = document.getElementById('label_doc');
            if (docSelect !== 'pessoaFisica') {
                newLabel.innerHTML = 'CNPJ';
            }
            else {
                newLabel.innerHTML = 'CPF';
            }
        }

    });
});