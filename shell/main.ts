// static imports do currently not work with shared libs,
// hence the dynamic one inside an async IIFE below
//import * as rxjs from 'rxjs';

const container = document.getElementById('container');
const shellLink = document.getElementById('shell');
const mf1Link = document.getElementById('mf1');
const mf2Link = document.getElementById('mf2');

function removeFirstChild() {
    if (container.firstChild) {
        container.firstChild.remove();
    }
}

function displayWelcomeMessage() {
    removeFirstChild();
    container.innerHTML = `<h1>Shell App!</h1>`;
}

(async function() {
    const rxjs = await import('rxjs');

    displayWelcomeMessage();

    rxjs.fromEvent(mf1Link, 'click').subscribe(async () => {
        const module = await import('mf1/component');
        const elem = document.createElement(module.elementName);
        removeFirstChild();
        container.appendChild(elem);
    });

    rxjs.fromEvent(mf2Link, 'click').subscribe(async () => {
        const module = await import('mf2/component');
        const elem = document.createElement(module.elementName);
        removeFirstChild();
        container.appendChild(elem);
    });

    rxjs.fromEvent(shellLink, 'click').subscribe(() => {
        displayWelcomeMessage();
    })

})();