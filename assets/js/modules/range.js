const range = {
  input: null,
  label: null,
  boxesAmounts: [],
  box: null,
  value: null,
  init: function () {
    console.log("Hello world, I'm range.js");

    range.input = document.getElementById("input-range");
    range.label = document.getElementById("input-range-label");

    // We use the Array.from() method to crearte a array from the element.
    range.boxesAmounts = Array.from(document.querySelectorAll(".amount__box"));

    for (range.box of range.boxesAmounts) {
      range.box.addEventListener("click", range.handleAmountSwitch);
    }

    // We get the value of the input type range and we use the parseFloat() function to convert the string value to a point number.
    range.value = parseInt(range.input.value);

    range.updateInput();

    range.input.addEventListener("input", range.handleInput);
    range.input.addEventListener("click", range.handleInput);
  },
  /**
   * Method that fill the input range background according to its value.
   * @return {void}
   */
  updateInput: function () {
    // console.log("range.updateInput()");

    // We set the percentage for the input.
    let percentage = (100 * range.value) / 8000;

    // We update the value of the input range slider.
    range.input.value = range.value;

    // We change the style of the range.input background according to his value in percentage.
    range.input.style.background = `linear-gradient(90deg, rgba(117,20,241,1) 0%, rgba(175,26,170,1) ${percentage}%, rgba(223,61,90,1) ${percentage}%, rgba(62,48,56,1) ${percentage}%)`;
    range.label.innerText = `$${range.value}`;
  },
  /**
   * Methot that fill the input range background when we change its value after a input or a click event.
   * @param {Event} event
   * @return {void}
   */
  handleInput: function (event) {
    // console.log("range.handleInput()");

    // We get the value of the DOM element form which the event occured and we use the parseFloat() function to convert the string value to a point number.
    range.value = parseInt(event.currentTarget.value);

    // We set the percentage for the input.
    let percentage = (100 * range.value) / 8000;

    // We change the style of the input background according to his value in percentage.
    range.input.style.background = `linear-gradient(90deg, rgba(117,20,241,1) 0%, rgba(175,26,170,1) ${percentage}%, rgba(223,61,90,1) ${percentage}%, rgba(62,48,56,1) ${percentage}%)`;
    range.label.innerText = `$${range.value}`;
  },
  /**
   * Method that add and remove a CSS class according to the clicked amount.
   * @param {Event} event
   * @return {void}
   */
  handleAmountSwitch: function (event) {
    // console.log("range.handleAmountSwitch()");

    // We get the DOM element from wich the event occured.
    let clickedElement = event.currentTarget;

    // We initialaze our index.
    let index = 0;
    // The index is the index of the clickedElement.
    index = range.boxesAmounts.indexOf(clickedElement);

    for (range.box of range.boxesAmounts) {
      // If the clicked element is strictly equal to range.box.
      if (clickedElement === range.box) {
        // We use the JS API classList to add a class to the element.
        clickedElement.classList.add("active");
        // We get the value of clicked box that is in a HTML dataset attribut whose name is data-amount and we use the parseFloat() function to convert the string value to a point number.
        range.value = parseInt(range.box.dataset.amount);
        range.updateInput();
      } else {
        // We use the JS API classList to remove a class from the elements.
        range.box.classList.remove("active");
      }
    }
  },
};
