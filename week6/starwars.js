import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class StarWars extends LitElement {

    static properties = {
        film: {type: String},
        _data: {state: true} //data you get from API
    }
    static BASE_URL = "https://swapi.dev/api/films/";
    static CHAR_URL = "https://swapi.dev/api/people/";
    static styles = css`
        body { background-color: green; }
        .episode { text-align: center; color: blue; }
        .details { color: red; }
    `;

    constructor() {         
        super();
        this.film = "1"; //initialise the value to 1  
        this.people ="1";     
    }

    connectedCallback(){        //connect to the DOM, then call back
        super.connectedCallback();
        const url = StarWars.BASE_URL + this.film;
        fetch(url)        
        .then(response => response.json())
        .then(data => {
            this._data = data;
        });
        const urlc = StarWars.CHAR_URL + this.people;
        fetch(urlc)        
        .then(response => response.json())
        .then(chardata => {
            this._chardata = chardata;
        });                                                                                                              
    }

    render() {
        console.log('render',this._data);
        if (this._data){
            return html`<h2 class="episode">${this._data.title} 
            Episode ID ${this._data.episode_id} </h2>
           
            <p>Opening Crawl: <em> ${this._data.opening_crawl} </em></p>
            <p class="details">Directed by: ${this._data.director},
            Produced by: ${this._data.producer},
            Release Date: ${this._data.release_date}
            <br><br>
            Characters: ${this._chardata.name}, 
            height ${this._chardata.height}, 
            mass ${this._chardata.mass}</p>
        `;
        }
        else {
            return html`<p>Loading ...${this.film}</p>`;
        }
    }
}
customElements.define('star-wars', StarWars);
