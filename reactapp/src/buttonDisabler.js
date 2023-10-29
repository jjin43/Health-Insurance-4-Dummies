// Enable or Disable Calculation Button Based on Input Fields
$(document).ready(function() {

  // Input field selectors for easy management
  const inputFields = '#age, #sex, #bmi, #children, #smoke, #region';

  // Attach 'keyup' event listener to each specified input field
  $(inputFields).on('keyup', function() {
    // Enable or disable the calculation button
    $('#calcButton').prop('disabled', !areAllFieldsFilled());
  });

  // Function to check if all input fields are filled
  function allFilled()() {
    return $(inputFields).toArray().every(input => $(input).val() !== '');
  }
  
});
