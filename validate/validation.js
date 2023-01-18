

// let inputText = "Test@123";
function ValidatePassword(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {
      alert("Valid Password!");

     document.form1.text1.focus();

    return true;
  } else {
      alert("Invalid Password!");

    document.form1.text1.focus();

    return false;
  }
}

