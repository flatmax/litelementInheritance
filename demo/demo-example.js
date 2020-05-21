import { LitElement, html } from 'lit-element';
import '../child-element.js';
import '../parent-element.js';

/** Example demo element for testing element loading
*/
class DemoExample extends LitElement {
  render(){
    return html`
      <style>
        :host { display: block; }
        div[hidden] {
          display: none;
        }
      </style>
      <child-element></child-element>
      <!-- <parent-element></parent-element> -->
      </div>
    `;
  }

  /**
   * Lifecycle called after DOM updated on the first time
   * Pulling the app config and waiting for the sts state
   */
  firstUpdated() {
    super.firstUpdated();
  }
}
customElements.define('demo-example', DemoExample);
