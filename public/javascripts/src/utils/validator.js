function Validator() {

    var matchPattern = function(regex, value) {
        return new RegExp(regex).test(value);
    }

    this.isValidNumber = function(value) {
        var regex = /^\d+$/;
        return matchPattern(regex, value);
    }
    
    this.isValidName = function(value) {
        var regex = /^[a-zA-Z]+$/;
        return matchPattern(regex, value);
    }
    
    this.isValidAddress = function(value) {
        var regex = /^[0-9a-zA-Z]+$/;
        return matchPattern(regex, value);
    }

    this.isValidPhoneNumber = function(value) {
        var regex = /^(07[0|6|7|8|9]|03[2-9]|08[1-5]|05[6|8|9])+([0-9]{7})$/;
        return matchPattern(regex, value);
    }
}

var validator = new Validator();

module.exports = validator;