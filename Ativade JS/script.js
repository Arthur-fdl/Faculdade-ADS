function calculateAge() {
    
    const yearOfBirth = document.getElementById('yearOfBirth').value;
    const currentYear = new Date().getFullYear();

    
    if (!yearOfBirth || isNaN(yearOfBirth) || yearOfBirth <= 0) {
        document.getElementById('result').textContent = 'Por favor, insira um ano válido.';
        return;
    }

    
    const age = currentYear - parseInt(yearOfBirth);

    
    const status = age >= 18 ? 'maior' : 'menor';

    
    document.getElementById('result').textContent = `Você tem ${age} anos e é ${status} de idade.`;
}