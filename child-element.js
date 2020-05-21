import { html } from 'lit-element';
import { ParentElement } from './parent-element.js';

export class ChildElement extends ParentElement {
  render(){
    return html`
      <style>
        :host { display: block; }
        :host([hidden]) { display: none; }
      </style>
      we are in child
      <p>
      ${super.render()}
    `;
  }

  static get properties() {
    return {
      childData: { type: String }, ///< name
    };
  }

  /// Constructor - set starting member variables (properties) here
  constructor(){
    super();
    this.childData='child data';
    this.name='child name';
  }
}
customElements.define('child-element', ChildElement);
