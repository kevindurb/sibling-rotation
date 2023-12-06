import { El } from './El.js';
import { View } from './View.js';

class SiblingRotation extends View {
  family = window.location.hash.substring(1);

  constructor() {
    super();
    window.addEventListener('hashchange', () => {
      this.family = window.location.hash.substring(1);
      this.requestRender();
    });
  }

  render() {
    if (this.family) return El.tag('family-result').attr('family', this.family);
    return [
      El.h1().text('Welcome!'),
      El.ul(
        El.li(El.a().text('East').href('#east')),
        El.li(El.a().text('Forest').href('#forest')),
        El.li(El.a().text('Monument').href('#monument')),
        El.li(El.a().text('West').href('#west')),
      ),
    ];
  }
}

window.customElements.define('sibling-rotation', SiblingRotation);
