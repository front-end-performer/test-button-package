import { LitElement, html, css } from "lit";

export class MyButton extends LitElement {
  // Declare property manually
  static properties = {
    background: { type: String },
    label: { type: String },
    placeholder: { type: String },
  };

  constructor() {
    super();
    this.label = "Button";
    this.background = "#3700b3";
    this.type = "text";
    this.placeholder = "Enter button label";
  }

  static styles = css`
    button {
      background-color: var(--button-bg-background, #3700b3);
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      cursor: pointer;
    }

    button:hover {
      background-color: #3700b3;
    }

     input {
        margin: 10px 0;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 14px;
      }
  `;

   // Event handler for input change
   _handleInput(event) {
    const value = event.target.value;
    this.label = value; // Update label dynamically
    
    // Dispatch a custom event with the input value
    this.dispatchEvent(new CustomEvent('input-change', {
      detail: { value }, // Pass the input value in event detail
      bubbles: true,     // Allow event to bubble up
      composed: true     // Allow event to cross the Shadow DOM
    }));
  }

  render() {
    return html`
      <style>
        button {
          --button-bg-background: ${this.background};
        }
      </style>

      <button @click=${() => console.log("clicked")}>
        <slot>${this.label}</slot>
      </button>

      <input
        type="{${this.type}}"
        placeholder="{${this.placeholder}}"
        @input="${this._handleInput}"
      />
    `;
  }
}

customElements.define("my-button", MyButton);
