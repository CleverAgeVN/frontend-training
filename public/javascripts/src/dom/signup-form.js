/**
 * Signup form
 */
function SignUpForm() {
    this.firstNameEle = document.getElementById('firstName');
    this.lastNameEle = document.getElementById('lastName');
    this.ageEle = document.getElementById('age');
    this.addressEle = document.getElementById('address');
    this.phoneNumberEle = document.getElementById('phone');
    this.addUserBtnEle = document.getElementById('addUserBtn');
}

/**
 * Validate input data from signup form
 */
function validate() {
    var validator = require('../utils/validator');

    var errorMessage = '';
    if (this.firstNameEle && this.firstNameEle.value && !validator.isValidName(this.firstNameEle.value)) {
        errorMessage += 'First name is invalid. Please input letters only';
    }

    if (this.lastNameEle && this.lastNameEle .value && !validator.isValidName(this.lastNameEle .value)) {
        errorMessage += '\nLast name is invalid. Please input letters only';
    }
    
    if (this.ageEle && this.ageEle.value && !validator.isValidNumber(this.ageEle.value)) {
        errorMessage += '\nAge is invalid. Please input numbers only';
    }
    
    if (this.addressEle && this.addressEle.value && !validator.isValidAddress(this.addressEle.value)) {
        errorMessage += '\nAddress is invalid. Please input numbers/lettters only';
    }
    
    if (this.phoneNumberEle && this.phoneNumberEle.value && !validator.isValidPhoneNumber(this.phoneNumberEle.value)) {
        errorMessage += '\nPhone number is invalid. Please input phone number in Vietnamese format';
    }

    return errorMessage;
}

/**
 * Handle events on signup form
 */
SignUpForm.prototype.handleEvents = function () {
    try {
        this.addUserBtnEle.addEventListener('click', function (event) {
            event.preventDefault();
            var errorMessage = validate.call(this);
            if (errorMessage !== '') {
                alert(errorMessage);
                return;
            }
    
        }.bind(this));
    } catch (err) {
        console.log(err);
    }
}

module.exports = new SignUpForm();