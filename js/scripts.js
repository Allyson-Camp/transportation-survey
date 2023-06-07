// User Interface Logic
function handleForm(e) {
  e.preventDefault();
  const userSelections = document.querySelectorAll(
    "input:checked"
  ); //gets all of the checkbox inputs that have been checked
  const userSelectionsArray = Array.from(userSelections); //changed userSelections to an array with array.from

//results heading
  const resultsHeading = document.createElement("h2");
  resultsHeading.setAttribute("class", "result-heading");
  resultsHeading.append("You use the following methods of transport!:");
  document.body.append(resultsHeading);

  userSelectionsArray.forEach(function (element) { //loop thorugh userselections array with foreach method
    const paragraph = document.createElement("p");//callback is an anonymous function with callback "element" that is the placeholder for the actual array element
    paragraph.append(element.value);
    document.body.append(paragraph);
  });
}
  //WHAT WAS DONE:
      // Create a new HTML paragraph element, with const paragraph = document.createElement("p");.
      // Add the input's value (element.value) as the text to that paragraph element, with paragraph.append(element.value);.
      // Add the new paragraph to the inside/end of our document's body tag with document.body.append(paragraph);.

  window.addEventListener("load", function () {
    document
      .querySelector("form#transportation_survey")
      .addEventListener("submit", handleForm);
  });