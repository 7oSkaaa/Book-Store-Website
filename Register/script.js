function validateForm(){
    const namesList = [
        'firstName', 'lastName', 'password', 'confirmPassword', 'EMail'
    ];
    var checkingList = [];

    for(let i = 0; i < namesList.length; i++)
        checkingList[i] = document.forms['form'][namesList[i]];

    var anyIsEmpty = -1;
    for(let i = 0; i < checkingList.length; i++)
        if(checkingList[i].value == ''){
            anyIsEmpty = i;
            break;
        }
    
    var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


    if(anyIsEmpty != -1){
        alert("The first 5 fields must be filled out!");
        checkingList[anyIsEmpty].focus();
        return false;
    }else if(checkingList[2].value.length < 8){
        alert("The password must be at least 8 characters!");
        checkingList[2].focus();
        return false;
    }else if(checkingList[2].value != checkingList[3].value){
        alert("The two entered passwords do not match!");
        checkingList[3].focus();
        return false;
    }else if(emailPattern.test(checkingList[4].value) == 0){
        alert("This Email is invalid, please enter a valid one!");
        checkingList[4].focus();
        return false;
    }

}