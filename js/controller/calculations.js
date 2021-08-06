import { getFormData } from "../model/getData.js";
import { LOSS_GAIN_WEIGHT } from "../utils/coefficients.js";
import { femaleFormula, maleFormula } from '../utils/formulas.js';

export class CalculationsComponent {
    maintainingWeight(evt) {
        const {activity, weight, height, age, gender} = getFormData(evt);
        let maintainingCcal;

        gender === 'male' 
            ? maintainingCcal = maleFormula(weight, height, age, activity)
            : maintainingCcal = femaleFormula(weight, height, age, activity);
        
        return maintainingCcal;
    }

    lossWeight(maintainingCcal) {
        return `${(maintainingCcal - maintainingCcal * LOSS_GAIN_WEIGHT).toFixed()}`;
    }

    gainWeight(maintainingCcal) {
        return `${(maintainingCcal + maintainingCcal * LOSS_GAIN_WEIGHT).toFixed()}`;
    }
}