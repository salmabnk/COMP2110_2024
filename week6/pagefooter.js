import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class PageFooter extends LitElement {
     
      static properties = {
        title: {type:String},
        _year: {state: true}
     };
        
      constructor(){
        super();
        this._year = (new Date()).getFullYear();
      }
      render() {
        return html`
        <footer style="border-top: 1px solid black;">
       ${this.title} ${this._year} &copy; Salma Khan
        <footer>`
      }
    }
    customElements.define('page-footer', PageFooter);
    
 