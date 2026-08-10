document.addEventListener('DOMContentLoaded', () => {

    // 1. Mensagem de Acolhimento no Portal de Escuta
    const formEscuta = document.getElementById('form-escuta');
    const respostaBox = document.getElementById('resposta-acolhimento');

    formEscuta.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const texto = document.getElementById('mensagem').value;
        if (texto.trim() === '') return;

        // Limpa o campo e exibe a mensagem de apoio
        document.getElementById('mensagem').value = '';
        
        respostaBox.classList.remove('hidden');
        respostaBox.innerHTML = `
            <h3><i class="fa-solid fa-heart"></i> Mensagem de Acolhimento:</h3>
            <p>Obrigado por compartilhar seus pensamentos. Lembre-se de que seus sentimentos são válidos e que <strong>você não está sozinho(a)</strong>.</p>
            <p>Se você precisa conversar sobre uma situação difícil ou buscar ajuda, procure a equipe pedagógica ou a direção da escola. Sempre há alguém pronto para te ouvir!</p>
        `;
    });

    // 2. Lógica do Quiz Interativo
    const btnSubmitQuiz = document.getElementById('btn-submit-quiz');
    const resultadoQuiz = document.getElementById('resultado-quiz');

    btnSubmitQuiz.addEventListener('click', () => {
        let pontos = 0;
        const totalPerguntas = 5;

        for (let i = 1; i <= totalPerguntas; i++) {
            const resposta = document.querySelector(`input[name="p${i}"]:checked`);
            if (resposta) {
                pontos += parseInt(resposta.value);
            }
        }

        resultadoQuiz.classList.remove('hidden');
        resultadoQuiz.innerHTML = `
            <p>Você acertou <strong>${pontos}</strong> de <strong>${totalPerguntas}</strong> perguntas!</p>
            <p style="font-size: 0.95rem; font-weight: normal; margin-top: 8px;">
                ${pontos === 5 ? '🎉 Parabéns! Você demonstra excelente conscientização sobre respeito e apoio!' : '💡 Continue se informando sobre o assunto para ajudar a construir um ambiente seguro para todos.'}
            </p>
        `;
    });

    // 3. Acessibilidade: Alto Contraste
    const btnContrast = document.getElementById('btn-contrast');
    btnContrast.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
    });

    // 4. Acessibilidade: Ajuste do Tamanho da Fonte
    let currentFontSize = 100; // porcentagem
    const btnFontIncrease = document.getElementById('btn-font-increase');
    const btnFontReset = document.getElementById('btn-font-reset');

    btnFontIncrease.addEventListener('click', () => {
        if (currentFontSize < 130) {
            currentFontSize += 10;
            document.body.style.fontSize = `${currentFontSize}%`;
        }
    });

    btnFontReset.addEventListener('click', () => {
        currentFontSize = 100;
        document.body.style.fontSize = '100%';
    });

    // 5. Botão Voltar ao Topo
    const btnBackToTop = document.getElementById('btn-back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btnBackToTop.style.display = 'block';
        } else {
            btnBackToTop.style.display = 'none';
        }
    });

    btnBackToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});