let button = document.getElementById('ageCalculator');
button.addEventListener('click', clickBtn);
let app = document.getElementById('calculate');
let dob = document.createElement('input'); 
dob.type = "date";
dob.id = "dobInput"
dob.name = "dynamicInput";

dob.addEventListener("change", checkDateValidity);

submitButton.addEventListener("click", calculateAge)
let calculateButton = document.createElement('button');
calculateButton.name = "calculate";

// Function Assigned to the submit button.

function calculateAge() {
  let dobInput = document.getElementById("dobInput");
  let dob = dobInput.value;
  let dobDate = new Date(dob);
  let todayDate = new Date();
  let age = todayDate.getFullYear() - dobDate.getFullYear();

  let monthDiff = todayDate.getMonth() - dobDate.getMonth();
  let result = document.getElementById("result");
  result.innerHTML = "Your age is " + age;
  console.log(age);
}
//Function to show submit button on Date completion.

function checkDateValidity() {
  let dateInput = document.getElementById("dobInput");
  let submitButton = document.getElementById("submitButton");

  if (dateInput.validity.valid) {
    submitButton.style.display = "block";
  }
  else {
    submitButton.style.display = "none";
  }

}
//Function to show date input onClick. 
function clickBtn() {
  dob.inputMode.includes('number');
  //dob.innerHTML = 12;
  app.appendChild(dob);
  console.log(dob);
  console.log(app);
}
