# 🚀 Calculadora de IMC - Versão Profissional

<p align="center">
  <img src="https://img.shields.io/static/v1?label=JavaScript&message=ES6+&color=f7df1e&style=for-the-badge&logo=javascript" alt="JavaScript">
  <img src="https://img.shields.io/static/v1?label=CSS3&message=Flexbox&color=1572b6&style=for-the-badge&logo=css3" alt="CSS3">
</p>

## 📝 Sobre o Projeto
Este projeto é uma **Calculadora de Índice de Massa Corporal (IMC)** desenvolvida para oferecer uma experiência de utilizador fluida e visualmente intuitiva. A aplicação capta o peso e a altura do utilizador, realiza o cálculo matemático e fornece um feedback instantâneo através de uma caixa de resultados que altera a sua cor conforme a classificação de saúde.

O projeto foi construído focando-se em conceitos fundamentais de desenvolvimento web, como a manipulação do DOM, gestão de eventos e o modelo de caixa (Box Model) do CSS.

## ✨ Funcionalidades
* **Cálculo Preciso:** Processamento automático da fórmula $IMC = peso / altura^2$.
* **Feedback Visual Dinâmico:** A caixa de resultado assume cores diferentes (Verde, Amarelo, Vermelho) para indicar visualmente o estado de saúde.
* **Interface Responsiva:** Layout adaptável para diferentes tamanhos de ecrã, garantindo usabilidade em dispositivos móveis e desktops.
* **Prevenção de Erros:** Validação de dados para impedir cálculos com campos vazios ou formatos inválidos.

## 🛠️ Tecnologias Utilizadas
* **HTML5:** Estruturação semântica e acessível.
* **CSS3:** Estilização avançada com Flexbox, variáveis CSS e transições suaves.
* **JavaScript (Vanilla):** Lógica de cálculo, classificação de níveis e manipulação dinâmica de elementos HTML.

## 🧠 Desafios Técnicos Resolvidos
Durante o desenvolvimento, foram aplicadas soluções para problemas comuns de engenharia de software:
1. **Tratamento de Unidades:** Implementação de lógica para converter a altura inserida em centímetros para metros, garantindo a precisão do cálculo.
2. **Alinhamento e Box Model:** Utilização de `box-sizing: border-box` para garantir o alinhamento perfeito entre campos de entrada e botões.
3. **Persistência de Dados no Ecrã:** Uso de `event.preventDefault()` para evitar o comportamento padrão de recarregamento de formulários, permitindo a exibição do resultado sem perder o contexto.

## 🚀 Como Executar
1. Clone este repositório:
   ```bash
   git clone [https://github.com/o-seu-utilizador/calculadora-imc.git](https://github.com/o-seu-utilizador/calculadora-imc.git)
