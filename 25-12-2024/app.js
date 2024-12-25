// Problem 24:-
// Create a program that calculates tip for a worker on the base of amount.

function calcTip(amount, tipPercentage) {

    if (typeof amount !== "number") {
        return console.log("Please give a valid number!");
    }
    const tips = []
    for (let i = 0; i < tipPercentage.length; i++) {
        let calc = amount * tipPercentage[i] / 100
        const formatter = Intl.NumberFormat("en-PK", {
            style: "currency",
            currency: "PKR"
        })
        tips.push(formatter.format(calc))


    }
    return tips
}

console.log(calcTip(550, [5, 10, 15]));
