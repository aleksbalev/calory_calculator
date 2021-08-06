import { renderResults } from './view/renderResults.js';
import { CalculationsComponent } from './controller/calculations.js';
import { ShowButtonsComponent } from './view/showResetButtons.js';

const form = document.querySelector('[name=counter]');
const calculationsClass = new CalculationsComponent();
const showResetButtonsComponent = new ShowButtonsComponent();

form.addEventListener('input', (evt) => {
    if (!evt.target.matches('[data-input-value]')) return;

    showResetButtonsComponent.showButtons();
});

form.addEventListener('reset', showResetButtonsComponent.resetView);

form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const maintainingCcal = calculationsClass.maintainingWeight(evt);

    renderResults(maintainingCcal);
});