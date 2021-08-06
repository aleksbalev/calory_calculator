import { activityMap } from "../utils/coefficients.js";

export const getFormData = (evt) => {
    const formData = new FormData(evt.target);

    const activity = activityMap.get(formData.get('activity'));
    const weight = formData.get('weight');
    const height = formData.get('height');
    const age = formData.get('age');
    const gender = formData.get('gender');

    return {activity, weight, height, age, gender};
}