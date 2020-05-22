import { ParentElement, html } from 'parent-element/parent-element';

export class ChildElement extends ParentElement {
  render(){
    return html`
      we are in child
      <p>
      ${super.render()}
      ${this.childData}
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
