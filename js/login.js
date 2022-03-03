document.getElementById( 'login-btn' ).addEventListener( 'click', function () {
    const userEmailField = document.getElementById( 'user-email' );
    const userEmail = userEmailField.value;
    const userPasswordfield = document.getElementById( 'user-password' );
    const userPassword = userPasswordfield.value;
    if ( userEmail == 'ahzihan@gmail.com' && userPassword == 'ahzihan' ) {
        window.location.href = 'baper-bank.html';
    }
    else {
        alert( 'Please, Enter valid email or password!' );
    }
})