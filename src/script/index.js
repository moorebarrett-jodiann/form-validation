'use strict';

/**
 * JavaScript Basics
 * Jodi-Ann Barrett
 * 
 * Validation
 * */

// Utility Functions 
function onEvent(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

// Select HTML element by class, id and html element
function select(selector, parent = document) {
  return parent.querySelector(selector);
}

const form = select('form');
const btn = select('.send');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValid(input) {
  if(Number.isInteger(input)) {
    return true;
  }
  return false;
}

function validate () {
  let firstName = select('.first-name').value.trim();
  let lastName = select('.last-name').value.trim();
  let age = select('.age').value.trim();
  let email = select('.email').value.trim();

  let message = '';
  let valid = true;
  let count = 0;

  if(firstName.length === 0) {
    message += 'First Name is required\n';
    valid = false;
    count++;
  }
  
  if(lastName.length === 0) {
    message += 'Last Name is required\n';
    valid = false;
    count++;
  }
  
  if(age.length === 0) {
    message += 'Age is required\n';
    valid = false;
    count++;
  } else if(!isValid(Number(age))) {
    message += 'A valid Age is required\n';
  }

  if(email.length === 0) {
    message += 'Email is required\n';
    valid = false;
    count++;
  } else if(!emailRegex.test(email)) {
    message += 'A valid Email is required\n';
    valid = false;
  }

  if(count === 5) {
    alert('Fields with * are required');
  } else if (!valid) {
    alert(message);
  } else {
    alert('Form Submitted!');
    // form.submit();
  }
}

onEvent('click', btn, function () {
  validate();
});