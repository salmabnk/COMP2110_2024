import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class PageFooter extends LitElement {
     
      static properties = {
        title: {type:String},
        _year: {state: true}
     };

      // static style = css`
      // :host{ display: block;}
      // footer{
      //     position: bottom;
      //     border-bottom: 1px solid black;
      //   }
      // `;
    
      constructor(){
        super();
        this._year = (new Date()).getFullYear();
      }
      render() {
        return html`
        <footer><hr>
       ${this.title} ${this._year} &copy; Salma Khan
        <footer>`
      }
    }
    customElements.define('page-footer', PageFooter);
    
 