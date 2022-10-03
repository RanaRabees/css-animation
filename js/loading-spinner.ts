import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { componentStyles } from './component.styles';

@customElement('loading-spinner')
export class LoadingSpinner extends LitElement {
    static styles = css`
        ${componentStyles}
        .loading-spinner {
            height: 4rem;
            width: 4rem;

            border: 4px solid #d1d5db;
            border-top-color: #3b82f6;
            border-radius: 50%;

            animation: spinner 800ms linear infinite;
        }

        @keyframes spinner {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
    `;

    render() {
        return html`<div class="loading-spinner"></div>`;
    }
}
