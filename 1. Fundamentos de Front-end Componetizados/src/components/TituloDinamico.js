class TituloDinamico extends HTMLElement {
  constructor() {
    super()

    const shadow = this.attachShadow({ mode: "open" });

    // base do component
    const componmentRoot = document.createElement('h1');
    componmentRoot.textContent = this.getAttribute('titulo');

    // estilizar o component
    const style = document.createElement('style');
    style.textContent = `
      h1 {
        color: red;
      }
    `;

    // enviar para a shadow
    shadow.appendChild(componmentRoot);
    shadow.appendChild(style);
  }
}

customElements.define('titulo-dinamico', TituloDinamico);