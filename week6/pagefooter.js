import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class PageFooter extends LitElement {
     
      static properties = {
        title: {type:String},
        _year: {state: true}
     };

      static style = css`
      :host { font-family: monospace; }
      p { position: relative; text-align: center; bottom: 0; font-family: 'Lato'; }
      `;
    
      constructor(){
        super();
        this._year = (new Date()).getFullYear();
      }
      render() {
        return html`
        <footer>
        <hr>  
        <p>${this.title} ${this._year} &copy; Salma Khan</p>
        <footer>`
      }
    }
    customElements.define('page-footer', PageFooter);
    
 