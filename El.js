export class El {
  $el;

  /** @type {(...children: Array<string | Node | El>) => El} */
  static h1;
  /** @type {(...children: Array<string | Node | El>) => El} */
  static h2;
  /** @type {(...children: Array<string | Node | El>) => El} */
  static h3;
  /** @type {(...children: Array<string | Node | El>) => El} */
  static a;
  /** @type {(...children: Array<string | Node | El>) => El} */
  static u;

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

const supportedTags = /** @type {const} */ ([
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'a',
  'ul',
  'li',
  'strong',
  'p',
  'u',
  'div',
]);

supportedTags.forEach((tag) => {
  /**
   * @param {Array<string | Node | El>} children
   * @returns {El}
   */
  El[tag] = function (...children) {
    return this.tag(tag, ...children);
  };
});
