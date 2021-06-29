
import '/es-first-aid/es-first-aid.js';

const registeredViews = new WeakSet;

export class View extends HTMLElement {
  static register(viewConstructor) {
    if (registeredViews.has(viewConstructor)) return;
    registeredViews.add(viewConstructor);
    customElements.define('menhera-' + firstAid.getRandomUuid(), viewConstructor);
  }
}

