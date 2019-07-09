let email = prompt('Enter your email');
let promptForPassword = false;
const MIN_LENGTH__OF__EMAIL = 6;
const MIN_LENGTH__OF__PASSWORD = 5;
let emailList = {
    'user@gmail.com' : 'UserPass',
    'admin@gmail.com' : 'AdminPass'
}
if(email === '' || email === null){
    alert('Canceled');
}else{
    if(email.length < MIN_LENGTH__OF__EMAIL){
        alert('I don\'t know any emails having name length less than 6 symbols');
    }else{
        for(let key in emailList){
            if(email === key){
                promptForPassword = true;
                break;  
            }
        }
        if(promptForPassword){
            let password = prompt('Enter password');
            if(password === '' || password === null){
                alert('Canceled');
            }else{
                let wrongPassword = true;
                for(let key in emailList){
                    if(password === emailList[key] && email === key){
                        wrongPassword = false;
                        let changePassword = confirm('Do you want to change your password?');
                        if (changePassword) {
                            let oldPassword = prompt('Enter your old  password');
                            if (oldPassword === '' || oldPassword === null) {
                                alert('Canceled');
                            }else if(oldPassword === password){
                                let newPassword = prompt('Enter new password');
                                if(newPassword.length < MIN_LENGTH__OF__PASSWORD){
                                    alert('It\'s too short password. Sorry.');
                                }else{
                                    let checkNewPassword = prompt('Enter new password again');
                                    if(checkNewPassword === newPassword){
                                        alert('You have successfully changed your password');
                                    }else{
                                        alert('You wrote the wrong password');
                                    }
                                }
                            }
                        }else{
                            alert('You have failed the change');
                        }
                        break;
                    }
                }
                if(wrongPassword){
                    alert('Wrong password');
                }
            }

        }else{
            alert('I don\'t know you');
        }
    }
}