console.log('Calculadora de IMC'); // Exibe a mensagem "Calculadora de IMC" no console do navegador para indicar que o script foi carregado corretamente.

// Primeiro, selecionamos o formulário usando o método `querySelector` e armazenamos a referência em uma variável chamada `formulario`. O seletor `#formulario` indica que estamos selecionando um elemento com o ID "formulario".
const formulario = document.querySelector('#formulario'); 

// Em seguida, adicionamos um ouvinte de evento ao formulário usando o método `addEventListener`. O evento que estamos ouvindo é o "submit", que é acionado quando o formulário é enviado. A função anônima passada como segundo argumento será executada quando o evento ocorrer.
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Dentro da função de evento, chamamos `event.preventDefault()` para evitar que o formulário seja enviado e a página seja recarregada. Isso nos permite processar os dados do formulário usando JavaScript sem interromper a experiência do usuário.
    const inputPeso = document.querySelector('#peso'); // Selecionamos o campo de entrada para o peso usando o seletor `#peso` e armazenamos a referência em uma variável chamada `inputPeso`.	
    const inputAltura = document.querySelector('#altura'); // Selecionamos o campo de entrada para a altura usando o seletor `#altura` e armazenamos a referência em uma variável chamada `inputAltura`.
    
    //Agora vamos converter os valores dos campos de entrada para números usando a função `Number()`. Armazenamos os valores convertidos em variáveis chamadas `peso` e `altura`.
    const peso = Number(inputPeso.value); 
    const altura = Number(inputAltura.value);

    //Validacao de dados basica -> Se nao peso ou nao altura: retorne falso.
    if (!peso || !altura) {
        setResultado('Peso ou altura invalidos.', false);
        return;
    }

    const imc = calculaImc(peso, altura); // Chamamos a função `calculaImc` passando o peso e a altura como argumentos, e armazenamos o resultado em uma variável chamada `imc`. A função `calculaImc` é responsável por realizar o cálculo do IMC com base nos valores fornecidos.
    const info = classificaImc(imc); // Chama a função que retorna {texto, classe}

    const msg = `Seu IMC é ${imc} (${info.texto})`; // Criamos uma mensagem formatada usando template literals (as crases ``) para incluir o valor do IMC e a classificação correspondente. A mensagem é armazenada em uma variável chamada `msg`.
    
    // Chama a função de exibir na tela passando a mensagem e a classe de cor
    setResultado(msg, info.classe); // Passamos a mensagem completa e a classe CSS para a função `setResultado`, que exibirá a mensagem na tela com o estilo apropriado com base na classificação do IMC.
})

function classificaImc(imc) {
    if (imc < 18.5) return { texto: 'Abaixo do peso', classe: 'cor-alerta' };
    if (imc < 25)   return { texto: 'Peso normal', classe: 'cor-normal' };
    if (imc < 30)   return { texto: 'Sobrepeso', classe: 'cor-alerta' };
    
    // Todos os graus de obesidade ficam em vermelho
    return { texto: 'Obesidade', classe: 'cor-perigo' };
}

/**Agora criaremos a funcao que calcula o IMC. O cálculo do IMC é feito dividindo o peso (em kg) pela altura (em metros) ao quadrado. A função `calculaImc` recebe o peso e a altura como parâmetros, realiza o cálculo e retorna o resultado arredondado para duas casas decimais usando o método `toFixed(2)`.
 * Calcula o IMC baseado no peso e altura.
 * @param {number} peso 
 * @param {number} altura 
 * @returns {string} IMC com duas casas decimais
 */

function calculaImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);	
}

/**Por ultimo, criamos a função `setResultado` que exibe a mensagem final para o usuário na tela. A função recebe a mensagem completa (por exemplo, "Seu IMC é 25.4 (Sobrepeso)") e um booleano `isValid` para indicar se a mensagem é de sucesso ou erro. Com base no valor de `isValid`, podemos aplicar estilos diferentes para mensagens de sucesso e erro.
 * Exibe a mensagem final para o usuário na tela.
 * @param {string} msg - A frase completa (Ex: "Seu IMC é 25.4 (Sobrepeso)")
 * @param {boolean} isValid - Para sabermos se a mensagem é de sucesso ou erro
 */

function setResultado(msg, classeCss) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; 

    const p = document.createElement('p');
    p.classList.add(classeCss); // É aqui que a mágica da cor acontece!
    p.innerHTML = msg; // Atribuímos a mensagem completa ao conteúdo HTML do parágrafo criado.
    
    resultado.appendChild(p); // Por fim, adicionamos o parágrafo criado como um filho do elemento `resultado`, o que fará com que a mensagem seja exibida na tela para o usuário.
}