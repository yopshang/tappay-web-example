(function(){
    let CardNumber = document.getElementById('CardNumber')
    CardNumber.addEventListener('input', (e)=>{
        varify_bank_handler(e.target.value)
    })
    function varify_bank_handler(credit_card_number){
        let bank = identify_card_type(credit_card_number)
        console.log('bank:', bank)

    }
    function identify_card_type(from_this_number){
        let current_bank_code = Number(from_this_number[0]);
        // Master Card: 5
        // Visa : 4
        // JCB: 3
        switch(current_bank_code){
            case 5:
                return 'MasterCard';
            case 4:
                return 'Visa';
            case 3:
                return 'JCB';
            default:
                return null;
        }
    }
})()