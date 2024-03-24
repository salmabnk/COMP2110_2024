import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class StarWars extends LitElement {

    static properties = {
        film: {type: String},
        _data: {state: true} //data you get from API
    }
    static BASE_URL = "https://swapi.dev/api/films/";

    constructor() {         
        super();
        this.film = "1";        //initialise the value to 1
    }

    connectedCallback(){        //connect to the DOM, then call back
        super.connectedCallback();
        const url = StarWars.BASE_URL + this.film;
        fetch(url)        
        .then(response => response.json())
        .then(data => {
            this._data = data;
        });
    }

    render() {
        console.log('render',this._data);
        if (this._data){
            return html`<h2>${this._data.title}</h2>
            <p>Directed by: ${this._data.director}</p>`;
        }
        else {
            return html`<p>Loading ...${this.film}</p>`;
        }
    }

}

customElements.define('star-wars', StarWars);
