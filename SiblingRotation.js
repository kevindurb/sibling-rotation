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
      El.h1('🎄 Merry Christmas! 🎁'),
      El.h2('Who are you?'),
      El.h3('🧑‍🌾 ', El.a('Farmers').href('#farmers')),
      El.h3('🐻 ', El.a('Forest').href('#forest')),
      El.h3('🗿 ', El.a('Monument').href('#monument')),
      El.h3('🤠 ', El.a('West').href('#west')),
    ];
  }
}

window.customElements.define('sibling-rotation', SiblingRotation);
