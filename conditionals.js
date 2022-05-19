const raining = true;
const temperature = -60

if (raining) {
  console.log("Don't forget your umbrella!");
} else {
  console.log("Leave your umbrella at home.w")
}

if (temperature <= 0 && temperature>-40) {
  console.log("Make sure you pick out a scarf and jacket!");

} else if (temperature <15 && temperature >0 ) {
  console.log("Short sleeves won't cut it!");

} else if (temperature <=-40 || temperature >40) {
  console.log("Maybe going outside isn't such a great idea...");

} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");



const isCitizen = false;
const age = 26

if (isCitizen && age >=18) {
  console.log("You are eligible to vote.");

} else if (isCitizen && age <18) { 
  console.log("You are not eligible to vote. You must be 18 years of age or older.");

} else if (!isCitizen && age <18) {
  console.log("You are not eligible to vote. You must be a Canadian Citizen and be 18 years of age or older. ");

} else {
  console.log("You are not eligible to vote. You must be a Canadian Citizen. ");

}