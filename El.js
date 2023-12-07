export class El {
  /**
   * @type {HTMLElement}
   */
  $el;

  /**
   * @param {string} tagName
   * @param {Array<string | El | Node>} children
   */
  constructor(tagName, ...children) {
    this.$el = document.createElement(tagName);

    for (const child of children) {
      if (child instanceof El) {
        this.$el.append(child.$el);
      } else {
        this.$el.append(child);
      }
    }
  }

  /**
   * @param {string} tagName
   * @param {Array<string | El | Node>} children
   */
  static tag(tagName, ...children) {
    return new El(tagName, ...children);
  }

  /**
   * @static
   * @param {Array<string | Node | El>} children
   * @returns {El}
   */
  static h1(...children) {
    return this.tag('h1', ...children);
  }

  /**
   * @static
   * @param {Array<string | Node | El>} children
   * @returns {El}
   */
  static h2(...children) {
    return this.tag('h1', ...children);
  }

  /**
   * @static
   * @param {Array<string | Node | El>} children
   * @returns {El}
   */
  static h3(...children) {
    return this.tag('h1', ...children);
  }

  /**
   * @static
   * @param {Array<string | Node | El>} children
   * @returns {El}
   */
  static a(...children) {
    return this.tag('h1', ...children);
  }

  /**
   * @static
   * @param {Array<string | Node | El>} children
   * @returns {El}
   */
  static u(...children) {
    return this.tag('h1', ...children);
  }

  /**
   * @param {string} text
   * @returns {El}
   */
  text(text) {
    this.$el.textContent = text;
    return this;
  }

  /**
   * @param {string} key
   * @param {string} value
   * @returns {El}
   */
  attr(key, value) {
    this.$el.setAttribute(key, value);
    return this;
  }

  /**
   * @param {string} url
   * @returns {El}
   */
  href(url) {
    this.attr('href', url);
    return this;
  }
}
