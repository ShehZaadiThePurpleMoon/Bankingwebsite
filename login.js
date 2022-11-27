document.getElementById('Submit-button').addEventListener('click',function(){
    //console.log('Submit button clicked');
    const UserEmailField = document.getElementById('user-email');
    //console.log(UserEmailField);
    const userEmail = UserEmailField.value;
    console.log(userEmail);

    const UserPasswordField = document.getElementById('user-password');
    const userPassword = UserPasswordField.value;
    //console.log(userPassword);

    if(userEmail == 'suraiya@gmail.com' && userPassword == 123456){
        window.location.href = "banking.html";
    }
    
})