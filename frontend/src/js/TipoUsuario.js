document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que o formulário seja submetido
    
    // Obtém o email inserido pelo usuário
    var email = document.getElementById('email').value;

    // Obtém o tipo de usuário selecionado
    var userType = document.getElementById('userType').value;

    // Redireciona o usuário para a página específica dependendo do tipo de usuário
    switch(userType) {
        case 'estudante':
            window.location.href = '../pages/Usuario.html';
            console.log('estudante')
            break;
        case 'professor':
            window.location.href = '../pages/professor.html';
            break;
        case 'colaborador':
            window.location.href = 'colaborador.html';
            break;
        case 'colaboradorTecnico':
            window.location.href = 'colaboradorTecnico.html';
            break;
        case 'fornecedor':
            window.location.href = '../pages/fornecedor.html';
            break;
        default:
            alert('Selecione um tipo de usuário válido.');
    }
});
