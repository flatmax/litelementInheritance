import { LitElement, html } from 'lit-element';
import '../child-element.js';

/** Example demo element for testing element loading
*/
class DemoExample extends LitElement {
  render(){
    return html`
      <child-element></child-element>
    `;
  }
}
customElements.define('demo-example', DemoExample);
