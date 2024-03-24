import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class PageFooter extends LitElement {
     
      static properties = {
        title: {type:String},
        _year: {state: true}
     };

      static style = css`
      :host { font-family: monospace; }
      h3 {text-align: center; }
      `;
    
      constructor(){
        super();
        this._year = (new Date()).getFullYear();
      }
      render() {
        return html`
        <footer>
          <h3>${this.title} ${this._year} &copy; Salma Khan</h3>
        <footer>`
      }
    }
    customElements.define('page-footer', PageFooter);
    
 