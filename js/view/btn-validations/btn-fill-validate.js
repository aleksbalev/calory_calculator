export default class BtnFillingValidationComponent {

    _isOneFieldFilled(inputs) {
        let isDisabled = true;

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value) {
                isDisabled = false;
            }
        }

        return isDisabled;
    }

    _isAllFieldsFilled(inputs) {
        let isDisabled = false;

        for (let i = 0; i < inputs.length; i++) {
            if (!inputs[i].value) {
                isDisabled = true;
            }
        }

        return isDisabled;
    }

    btnShowAllFilled(inputs, btnElement) {
        btnElement.disabled = this._isAllFieldsFilled(inputs);
    }

    btnShowOneFilled(inputs, btnElement) {
        btnElement.disabled = this._isOneFieldFilled(inputs);
    }

}
