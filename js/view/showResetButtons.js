import btnFillingValidationComponent from '../view/btn-validations/btn-fill-validate.js';
import { BtnValidator } from '../view/btn-validations/btn-validator.js';

// Form querySelectors
const form = document.querySelector('[name=counter]');
const formSubmitBtn = form.querySelector('.form__submit-button');
const resetBtn = form.querySelector('.form__reset-button');
const textInputs = form.querySelectorAll('[data-input-value]')

// validation classes
const btnValidatorAll = new BtnValidator(textInputs, formSubmitBtn, new btnFillingValidationComponent);
const btnValidatorOne = new BtnValidator(textInputs, resetBtn, new btnFillingValidationComponent);

const resultsTable = document.querySelector('.counter__result');

export class ShowButtonsComponent {
    showButtons() {
        btnValidatorAll.btnValidationAll();
        btnValidatorOne.btnValidationOne();
    }

    resetView() {
        resetBtn.disabled = true;
        formSubmitBtn.disabled = true;

        resultsTable.classList.add('counter__result--hidden');
    }
}