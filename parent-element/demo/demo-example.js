import { LitElement, html } from 'lit-element';
import '../parent-element.js';

/** Example demo element for testing element loading
*/
class DemoExample extends LitElement {
  render(){
    return html`
      <parent-element></parent-element>
    `;
  }
}
customElements.define('demo-example', DemoExample);
