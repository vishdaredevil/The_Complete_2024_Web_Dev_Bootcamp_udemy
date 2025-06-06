function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    bmi = Math.round(bmi * 10) / 10; // Round to 1 decimal place
    var interpretation = "";

    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    } else {
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }

    return interpretation;
}
