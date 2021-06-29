
import {View} from "./View.mjs";

export class ScrollView extends HTMLElement {
  constructor() {
    //
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `<div id="scroll-container"><div id="scroll-content"><slot></slot></div></div>`;
    this.style.overflow = 'auto';
    this.scrollContainer = this.shadowRoot.querySelector('#scroll-container');
    this.scrollContent = this.shadowRoot.querySelector('#scroll-content');
  }
}

View.register(ScrollView);

