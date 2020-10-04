// static imports do currently not work with shared libs,
// hence the dynamic one inside an async IIFE below
import * as rxjs from 'rxjs';


class MicroFrontend2 extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    async connectedCallback() {
        const styleText = require('!raw-loader!./styles.css');

        this.shadowRoot.innerHTML = `
            <style>${ styleText.default }</style>
            <div id="container">
                <h1>MF2</h1>
            </div>
        `;

        const container = this.shadowRoot.getElementById('container');
    }
}


const elementName = 'micro-frontend-2';
customElements.define(elementName, MicroFrontend2);

export { elementName };