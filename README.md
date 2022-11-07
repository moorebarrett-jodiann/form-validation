# Simple Form Validation

JavaScript provides a way to validate user data entered in a form  before it is sent to a web server. Form validation generally performs two functions.

- Basic Validation − This validation checks whether all the required form fields are filled in.

- Data Format Validation − This validation simply checks whether the data entered for each field is done in the correct form and using appropriate values. Your code must include appropriate logic to test correctness of data.

### Building the Form

#### The ```<form>``` element

All forms start with a ```<form>``` element, like this:
``` html
<form name="my-form" novalidate>…</form>
```

#### Input Fields

The basic form structure will include a combination of the following input fields:

- Text boxes for entering a line of text
- Buttons for triggering an action
- Radio buttons for making one selection among a group of options
- Check boxes for selecting or deselecting a single, independent option

#### The 'required' Attribute

The simplest HTML validation feature is the ```required``` attribute. To make an input mandatory, add this attribute to the form element. When this attribute is set, the form won't submit when the input is empty and you will receive an error message. 

Your starter HTML form should look like the snippet below 

```html 

<form name="my-form" novalidate>               
    <input type="text" class="first-name" placeholder="First Name *" required/>
    <input type="text" class="last-name" placeholder="Last Name *" required/>
    <input type="text" class="age" placeholder="Age *" required/>
    <input type="email" class="email" placeholder="Email (john@email.com) *" required/> 
    <input type="button" class="send" value="Submit"/>               
</form>
```
#### Validating the Input

The following notes will guide developers on how to perform simple validation on data entered into an HTML form:

- ##### Validating Strings

To validate strings in JavaScript, you can simply check if the value retrieved is not empty ```!empty()``` or if it contains an appropriate length of characters ```entry.length > 0```.

- ##### Validating Numbers

To validate numbers in JavaScript, the input type can remain as ```text``` and you will simply check if the value retrieved is a number. This is done by wrapping the value in the ```isInteger()``` static function of the Number constructor. 

``` javascript 

Number.isInteger(entry)
```
- ##### Validating Email

To validate email in JavaScript, the input type will be ```email```. There is built in validation that will verify the email pattern that is entered. However, this native functionality can be further strengthened by adding ```regular expressions``` or ```RegEx``` for pattern matching. This will take care of any special character requirements that the email value needs to meet. 

``` javascript

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

##### Basic Form Validation using JavaScript

``` javascript

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

  if(count === 4) {
    alert('Fields with * are required');
  } else if (!valid) {
    alert(message);
  } else {
    alert('Form Submitted!');
  }
}

```

Data validation is the process of ensuring that user input is clean, correct, and useful.

A typical form validation checklist answers questions such as:

1. Did the user filled in all required fields?
2. Did the user entered a valid date or email?
3. Did the user entered text in a numeric field?

Most often, the purpose of data validation is to ensure correct user input.

Click [here](https://moorebarrett-jodiann.github.io/form-validation/) for live DEMO

### References

- [Client-Side Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [JavaScript Form Validation](https://www.tutorialspoint.com/javascript/javascript_form_validations.htm#:~:text=Form%20validation%20generally%20performs%20two,form%20and%20check%20for%20data.)
- [JavaScript Forms](https://www.tutorialspoint.com/javascript/javascript_form_validations.htm#:~:text=Form%20validation%20generally%20performs%20two,form%20and%20check%20for%20data.)

