// static imports do currently not work with shared libs,
// hence the dynamic one inside an async IIFE below
import * as rxjs from 'rxjs';


class MicroFrontend1 extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    async connectedCallback() {
        const styleText = require('!raw-loader!./styles.css');

        this.shadowRoot.innerHTML = `
            <style>${ styleText.default }</style>
            <div id="container">
                <h1>MF1</h1>

                <div>
                    <input type="text" placeholder="From">
                </div>
                <div>
                    <input type="text" placeholder="To">
                </div>
                <div>
                    <button id="search">Search</button>
                    <button id="terms">Terms...</button>
                </div>
            </div>
        `;

        const search = this.shadowRoot.getElementById('search');
        const terms = this.shadowRoot.getElementById('terms');
        const container = this.shadowRoot.getElementById('container');

        // const rxjs = await require('rxjs');
        rxjs.fromEvent(search, 'click').subscribe(() => {
            alert('Not implemented for this demo!');
        });

        rxjs.fromEvent(terms, 'click').subscribe(async () => {
            const module = await import('./lazy-load');
            const elem = document.createElement(module.elementName);
            container.appendChild(elem);
        });

    }
}


const elementName = 'micro-frontend-1';
customElements.define(elementName, MicroFrontend1);

export { elementName };