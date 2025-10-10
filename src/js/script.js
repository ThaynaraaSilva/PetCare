    document.querySelector('.mobile-menu').addEventListener('click', function() {
            document.querySelector('nav ul').classList.toggle('show');
        });
        
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.addEventListener('click', () => {
                document.querySelector('nav ul').classList.remove('show');
            });
        });
    
        document.querySelector('.contact-form form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Consulta agendada com sucesso! Entraremos em contato em breve para confirmar.');
            this.reset();
        });
        
        document.querySelector('.footer-col form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Obrigado por se inscrever em nossa newsletter!');
            this.reset();
        });