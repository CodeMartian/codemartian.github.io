import headerCss from './style.css';
window.customElements.define('my-header', 
    class header extends HTMLElement {
        constructor() {
            super();
        }
        
        connectedCallback() {
            const shadowRoot = this.attachShadow({ mode: 'open'});
            shadowRoot.appendChild(this.style);
            shadowRoot.appendChild(this.content);
        }
        onload(){
           // Do something here. Not sure what yet. 
        };
        onerror() {
            // Do something to fix the error here.
        }
        get style() {
            let style = document.createElement('style');
            style.innerHTML = headerCss;
            return style;
        }
        get content() {
            let content = document.createElement('link');
            content.rel = "import";
            content.href = "/header/header.html";
            content.onload = onload;
            content.onerror = onerror;
            return content;
        }
    }
);