const links = document.querySelectorAll('.navbar a');
const sections = document.querySelectorAll('section');

for (const link of links) {
    link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const targetSection = document.querySelector(href);

    // Verifica se o elemento alvo existe
    if (targetSection) {
        const offsetTop = targetSection.offsetTop - document.querySelector('.header').offsetHeight;

        // Rola a página até o título da seção alvo com efeito suave
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });

        // Remove a classe 'active' de todas as seções
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Adiciona a classe 'active' à seção alvo
        targetSection.classList.add('active');

        // Altera o foco na navegação
        for (const link of links) {
            if (link.getAttribute('href') === href) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    }
}

window.onload = function() {
    var form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(event) {
      // Impedir o envio do formulário por padrão
      event.preventDefault();
      
      // Validar os campos do formulário
      var nomeInput = document.getElementById('nome');
      var emailInput = document.getElementById('email');
      var telefoneInput = document.getElementById('telefone');
      var assuntoInput = document.getElementById('assunto');
      var mensagemInput = document.getElementById('mensagem');
  
      if (!nomeInput.value.trim()) {
        alert('Por favor, preencha o campo de nome.');
        return;
      }
  
      if (!validateName(nomeInput.value.trim())) {
        alert('Por favor, insira pelo menos dois nomes no campo de nome (nome e sobrenome).');
        return;
      }
  
      if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return;
      }
  
      if (!telefoneInput.value.trim() || !validatePhoneNumber(telefoneInput.value)) {
        alert('Por favor, insira um número de celular válido.');
        return;
      }
  
      if (!assuntoInput.value.trim()) {
        alert('Por favor, preencha o campo de assunto.');
        return;
      }
  
      if (!mensagemInput.value.trim()) {
        alert('Por favor, preencha o campo de mensagem.');
        return;
      }
  
      // Se todos os campos forem válidos, o formulário pode ser enviado
      alert('O formulário foi enviado com sucesso!');
      // Resetar o formulário
      form.reset();
    });
  
    // Função para validar o formato do email
    function validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
  
    // Função para validar o formato do número de celular
    function validatePhoneNumber(phoneNumber) {
      var re = /^[0-9]{10}$/; // Aceita apenas números com exatamente 10 dígitos
      return re.test(phoneNumber);
    }
  
    // Função para validar o nome contendo pelo menos dois nomes
    function validateName(name) {
      // Dividir o nome em partes (pelo espaço)
      var parts = name.split(' ');
      // Verificar se há pelo menos dois elementos na array
      return parts.length >= 2;
    }
  };