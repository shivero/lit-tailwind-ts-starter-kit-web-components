import {CSSResultGroup, LitElement, unsafeCSS} from "lit";

import style from "./tailwind.global.css?inline";

const tailwindElement = unsafeCSS(style);

export const TailwindElement = (style) =>
    class extends LitElement {

        static styles = [tailwindElement, unsafeCSS(style)];
        // static styles = [unsafeCSS(style)] as CSSResultGroup;
    };
