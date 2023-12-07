import { El } from './El.js';
import { View } from './View.js';

const rotation = {
  farmers: ['monument', 'forest', 'west'],
  forest: ['farmers', 'west', 'monument'],
  monument: ['west', 'farmers', 'forest'],
  west: ['forest', 'monument', 'farmers'],
};

class FamilyResult extends View {
  now = new Date();

  /**
   * @param {string} text
   * @returns {string}
   */
  capitalize(text) {
    return text.charAt(0).toUpperCase() + text.substring(1);
  }

  render() {
    const family = this.getAttribute('family');
    const year = this.now.getFullYear();
    const receivingFamily = rotation[family][(year - 1) % 3];
    return [
      El.h1(`🎅 Merry Christmas ${this.capitalize(family)} Durbins! 🦌`),
      El.h2(
        `Its ${year} and its your turn to give gifts to the `,
        El.u(this.capitalize(receivingFamily)),
        ' Durbins!',
      ),
    ];
  }
}

window.customElements.define('family-result', FamilyResult);
