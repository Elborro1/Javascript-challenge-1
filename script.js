// DATA 1 //
const markHeight = 1.69;
const markWeight = 78;

const johnHeight = 1.95;
const johnWeight = 92;

const johnBmi = ( johnWeight / (johnHeight * johnHeight) );

console.log(johnBmi);

const markBmi = ( markWeight / (markHeight * markHeight));

console.log(markBmi);

const markHigherBmi = markBmi > johnBmi;

console.log(markHigherBmi);


// DATA 2 //

const heightMark = 1.88;
const massMark = 95;

const heightJohn = 1.76;
const massJohn = 85;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;

console.log(bmiMark, bmiJohn);

const higherBmiMark = bmiMark > bmiJohn;

console.log( higherBmiMark);
