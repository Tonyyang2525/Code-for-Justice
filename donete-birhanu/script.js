// const fname = document.getElementById('fname');
// const lname = document.getElementById('lname');
// const number = document.getElementById('number');
// const donation = document.getElementById('donation');
// const form = document.getElementById('form');
// form.addEventListener('submit', function(e) {
//   console.log('yo' + typeof form);
//   e.preventDefault();
//   validateInputs();
// });

// const setErrorFor = (element, message) => {
//   const inputControl = element.parentElement;
//   const errorDisplay = inputControl.querySelector('.error');
//   errorDisplay.innerText = message;
//   inputControl.classList.add('error');
//   inputControl.classList.remove('success');
// };
// const setSuccess = (element) => {
//   const inputControl = element.parentElement;
//   const errorDisplay = inputControl.querySelector('.error');
//   errorDisplay.innerText = '';
//   inputControl.classList.add('success');
//   inputControl.classList.remove('error');
// };
// const validateInputs = () => {
//   const fnameValue = fname.value.trim();
//   const lnameValue = lname.value.trim();
//   const numberValue = number.value.trim();
//   const donationValue = donation.value.trim();
//   if (fnameValue === '') {
//     setErrorFor(fname, 'First name is required');
//   } else {
//     setSuccess(fname);
//   }
//   if (lnameValue === '') {
//     setErrorFor(lname, 'Last name is required');
//   } else {
//     setSuccess(lname);
//   }
//   if (numberValue === '') {
//     setErrorFor(number, 'Phone number is required');
//   } else {
//     setSuccess(number);
//   }
//   if (donationValue === '') {
//     setErrorFor(donation, 'Donation value is required');
//   } else {
//     setSuccess(donation);
//   }
// };
// Function to display error messages and apply error styling
const setErrorFor = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

// Function to remove error messages and apply success styling
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = ""; // Clearing error message
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

// Function to validate form inputs
const validateInputs = () => {
  const fnameValue = fname.value.trim();
  const lnameValue = lname.value.trim();
  const numberValue = number.value.trim();
  const donationValue = donation.value.trim();

  // Validating first name
  if (fnameValue === "") {
    setErrorFor(fname, "First name is required");
  } else {
    setSuccess(fname);
  }

  // Validating last name
  if (lnameValue === "") {
    setErrorFor(lname, "Last name is required");
  } else {
    setSuccess(lname);
  }
  // Validating phone number
  if (numberValue === "") {
    setErrorFor(number, "Phone number is required");
  } else {
    setSuccess(number);
  }

  // Validating donation value
  if (donationValue === "") {
    setErrorFor(donation, "Donation value is required");
  } else {
    setSuccess(donation);
  }
};
