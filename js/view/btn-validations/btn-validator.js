export class BtnValidator {
    constructor(inputs, btnElement, btnComponent) {
        this.inputs = inputs;
        this.btnComponent = btnComponent;
        this.btnElement = btnElement
    }

    btnValidationAll() {
        this.btnComponent.btnShowAllFilled(this.inputs, this.btnElement);
    }

    btnValidationOne() {
        this.btnComponent.btnShowOneFilled(this.inputs, this.btnElement);
    }
}