const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const number = document.getElementById('number');
const donation = document.getElementById('donation');
const form = document.getElementById('form');
form.addEventListener('submit', function(e) {
  console.log('yo' + typeof form);
  e.preventDefault();
  validateInputs();
});

const setErrorFor = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');
  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');
  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};
const validateInputs = () => {
  const fnameValue = fname.value.trim();
  const lnameValue = lname.value.trim();
  const numberValue = number.value.trim();
  const donationValue = donation.value.trim();
  if (fnameValue === '') {
    setErrorFor(fname, 'First name is required');
  } else {
    setSuccess(fname);
  }
  if (lnameValue === '') {
    setErrorFor(lname, 'Last name is required');
  } else {
    setSuccess(lname);
  }
  if (numberValue === '') {
    setErrorFor(number, 'Phone number is required');
  } else {
    setSuccess(number);
  }
  if (donationValue === '') {
    setErrorFor(donation, 'Donation value is required');
  } else {
    setSuccess(donation);
  }
};