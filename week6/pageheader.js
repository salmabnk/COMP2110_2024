import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class PageHeader extends LitElement {

    static properties = {
        title: {type: String},
        logo: {type: String}
    };

    static styles = css`
        :host { font-family: monospace; }
        header { background-color: cyan; }
        .center {
            display: block;
            border: 1px solid black; width: 100px; height: 100px; 
            margin-left: auto;
            margin-right: auto; }        
        h1 { text-align: center; color: grey;}
    `;

    render() {
        return html`
        <header>
        <h1>${this.title}</h1>
        <img src=${this.logo} alt="company logo" class="center">
        </header>`
    }
}
customElements.define('page-header', PageHeader);

