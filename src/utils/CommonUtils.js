
export const Common = {
    
    validateEmail: (emailValue) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(emailValue);
    },

    validateName: (name) => {
        var re = /^[a-zA-Z]+$/;
        return re.test(name);
    },
    validateMobileNumber: (phoneNo) => {
        var re = /^\d{10}$/;
        return re.test(phoneNo);
    },
}

export const checkBoxISChecking = () => {
    return {
    type: 'PRESSED_DONE_BUTTON'
    };
}
