// User Interface Logic
function handleForm(e) {
  e.preventDefault();
  const userSelections = document.querySelectorAll(
      "input[name=transportation-option]:checked" //gets all of the checkbox inputs that have been checked
  );
}

window.addEventListener("load", function () {
  document.querySelector("form#transportation_survey").addEventListener("submit", handleForm);
});