function getInputField( fieldId ) {
    const inputTag = document.getElementById( fieldId );
    const inputField = parseFloat( inputTag.value );
    inputTag.value = '';
    return inputField;
}
function getTextField( fieldId ) {
    const fieldTag = document.getElementById( fieldId );
    const textField = parseFloat( fieldTag.innerText );
    return textField;
}
function updateTotal( fieldId, amount ) {
    const textField = getTextField( fieldId );
    document.getElementById( fieldId ).innerText = textField + amount;

}

function updateBalance( amount, isAdded ) {
    const fieldTag = document.getElementById( 'total-balance' );
    const textField = getTextField( 'total-balance' );
    if ( isAdded == true ) {
        fieldTag.innerText = textField + amount;
    } else {
        fieldTag.innerText = textField - amount;
    }

}

//Deposit Section
document.getElementById( 'deposit-btn' ).addEventListener( 'click', function () {
    const amount = getInputField( 'deposit-input' );
    const balance = getTextField( 'total-balance' );
    if ( amount > 0 && amount <= balance ) {
        updateTotal( 'deposit-balance', amount );
        updateBalance( amount, true );
    }
} );
//Withdraw Section
document.getElementById( 'withdraw-btn' ).addEventListener( 'click', function () {
    const amount = getInputField( 'withdraw-input' );
    const balance = getTextField( 'total-balance' );
    if ( amount > 0 && amount <= balance ) {
        updateTotal( 'withdraw-balance', amount );
        updateBalance( amount, false );
    }
} );