function validateForm(){
    let emailValue = document.forms['form']['EMail'];
    let pass = document.forms['form']['password'];

    var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


    if(emailValue.value == '' || pass.value == ''){
        alert('Email and password must be filled out!');
        
        if(emailValue.value == '')
            emailValue.focus();
        else
            pass.focus();

        return false;
    }else if(emailPattern.test(emailValue.value) == 0){
        alert('This Email is invalid, please enter a valid one!');
        
        emailValue.focus();
        
        return false;
    }else if(pass.value.length < 8){
        alert('Password should be at least 8 characters long!');
        
        pass.focus();
        
        return false;
    }
}