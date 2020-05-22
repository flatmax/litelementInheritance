import { LitElement, html } from 'lit-element';
export { html };

export class ParentElement extends LitElement {
  render(){
    return html`
      we are in parent
      <p>
      ${this.name}
    `;
  }

  static get properties() {
    return {
      name: { type: String }, ///< name
    };
  }

  /// Constructor - set starting member variables (properties) here
  constructor(){
    super();
    this.name='parent element';
  }
}
customElements.define('parent-element', ParentElement);
