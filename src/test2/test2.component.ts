import { html,css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from 'lit/directives/class-map.js';

import { TailwindElement } from "../shared/tailwind.element";

import scssStyles from "./test2.component.scss?inline";

@customElement("test2-component")
export class Test2Component extends TailwindElement(scssStyles) {
  @property()
  name?: string = "World";
  @property({type: Number}) count = 0;
  @property() externalStyle?: string; // New property for external style
  @property() customClasses = {}; // New property for custom classes
  @property({type: String}) headerText = "Hello, World!"; // New property for header text
  protected render() {
    const classes = classMap(this.customClasses); // Use classMap directive

    return html`
      <div style="${this.externalStyle}" class="${classes}">
        <span>${this.headerText}</span>
        <b class="lh- orange">${this.name}</b>
        <span @click="${this._increment(2)}">2130191901!</span>
        <span>${this.count}</span>
      </div>
      <button class="bg-violet-200  dark:bg-red-200 grid hover:bg-green-600 text-violet-700 p-4 rounded-full text-2xl">Hello world!</button>
    `;
  }

  private _increment = (amount: number) => () => {
    console.log(this.count);
    this.count += amount;
  }
}
