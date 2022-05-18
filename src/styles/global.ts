import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33cc95;
    
    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --background: #f0f2f5;
    --shape: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html { 
    @media (max-width: 1080px) {
      // Por padrão o font-size é 16px
      font-size: 93.75% //93.75% de 16 é 15px, não usamos 15px direto pois se um usuário estiver utilizando aumento de font, o 15px vai ficar fixo.
    }

    @media (max-width: 720px) {
      // Por padrão o font-size é 16px
      font-size: 87.5% //93.75% de 16 é 15px, não usamos 15px direto pois se um usuário estiver utilizando aumento de font, o 15px vai ficar fixo.
    }
  }

  body { 
    background: var(--background);
    --webkit-font-smoothing: antialiased; // deixa as fonts mais nítidas.
  }

  body, input, textarea, button { // Chamamos todos eles, pois cada um tem um padrão de font, só o body não ia funcionar.
    font-family: 'Poppins', sans-serif;
    font-weight: 400; // O font-weight padrão é 500, e queremos 400.
  }

  h1, h2 ,h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button { 
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1rem;
    top: 1rem;
    border: 0;
    background: transparent;
    
    transition: filter 0.2s;
    
    &:hover {
      filter: brightness(0.8);
    }
  }
`;
