import { El } from './El.js';

export class View extends HTMLElement {
  connectedCallback() {
    this.requestRender();
  }

  attributeChangedCallback() {
    this.requestRender();
  }

  appendElement(el) {
    if (el instanceof El) {
      this.appendChild(el.$el);
    } else {
      this.appendChild(el);
    }
  }

  requestRender() {
    const result = this.render();
    this.innerHTML = '';

    if (!result) return;
    if (Array.isArray(result)) {
      result.map(($el) => this.appendElement($el));
    } else {
      this.appendElement(result);
    }
  }

  render() {}
}
