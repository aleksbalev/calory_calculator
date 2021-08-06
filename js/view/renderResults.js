import { CalculationsComponent } from "../controller/calculations.js";

const resultsTable = document.querySelector('.counter__result');
const caloriesMaintaining = resultsTable.querySelector('#calories-norm');
const caloriesLoss = resultsTable.querySelector('#calories-minimal');
const caloriesGain = resultsTable.querySelector('#calories-maximal');

const calculationsComponent = new CalculationsComponent();

export const renderResults = (maintainingCcal) => {
    const maintaining = `${maintainingCcal.toFixed()}`;
    const loss = calculationsComponent.lossWeight(maintainingCcal)
    const gain = calculationsComponent.gainWeight(maintainingCcal)

    caloriesMaintaining.textContent = maintaining;
    caloriesLoss.textContent = loss;
    caloriesGain.textContent = gain;

    resultsTable.classList.remove('counter__result--hidden');
}
