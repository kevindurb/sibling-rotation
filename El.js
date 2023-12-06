export class El {
  $el;

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

  static tag(tagName, ...children) {
    return new El(tagName, ...children);
  }

  text(text) {
    this.$el.textContent = text;
    return this;
  }

  attr(key, value) {
    this.$el.setAttribute(key, value);
    return this;
  }

  href(url) {
    this.attr('href', url);
    return this;
  }
}

const supportedTags = [
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
];

supportedTags.forEach((tag) => {
  El[tag] = function (...children) {
    return this.tag(tag, ...children);
  };
});
