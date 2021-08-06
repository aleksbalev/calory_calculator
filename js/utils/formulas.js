export const femaleFormula = (weight, height, age, activity) => {
    return (10 * weight) + (6.25 * height) - (5 * age) - 161 * activity;
};

export const maleFormula = (weight, height, age, activity) => {
    return ((10 * weight) + (6.25 * height) - (5 * age) + 5) * activity;
};
