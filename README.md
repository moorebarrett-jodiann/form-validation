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

Your starter form should look like the snippet below 

```html 

<form name="my-form" novalidate>               
    <input type="text" class="first-name" placeholder="First Name *" required/>
    <input type="text" class="last-name" placeholder="Last Name *" required/>
    <input type="text" class="age" placeholder="Age *" required/>
    <input type="email" class="email" placeholder="Email (john@email.com) *" required/>     
    <input type="text" class="postal-code" placeholder="Postal Code (A#A #A#) *" required/>
    <input type="button" class="send" value="Submit"/>               
</form>
```
#### Validating the Input



Click [here](https://moorebarrett-jodiann.github.io/form-validation/) for live DEMO