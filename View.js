import { El } from './El.js';

/**
 * Base view with some render helpers
 * @extends HTMLElement
 */
export class View extends HTMLElement {
  connectedCallback() {
    this.requestRender();
  }

  attributeChangedCallback() {
    this.requestRender();
  }

  /**
   * append element to view
   *
   * @param {El | Node | string} el - element to append
   */
  appendElement(el) {
    if (el instanceof El) {
      this.append(el.$el);
    } else {
      this.append(el);
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

  /**
   * Main render function
   *
   * @returns {void | string | El | Array<string | El>}
   */
  render() {}
}
