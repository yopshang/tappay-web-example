(function(){
        let CardNumber = document.getElementById('CardNumber')
        CardNumber.addEventListener('input', (e)=>{
            varify_bank_handler(e.target.value)
        })
        function varify_bank_handler(credit_card_number){
            let bank = identify_card_type(credit_card_number)
            checkIfNumberAvaliable(credit_card_number)
    
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
                    // throw new Error('信用卡號錯誤')
                    return null;
            }
        }
        function checkIfNumberAvaliable(credit_card_number){
            let evenTotal = evenNumTotal(credit_card_number)
            let oddTotal = oddNumTotal(credit_card_number)
            console.log('evenTotal:', evenTotal, 'oddTotal:', oddTotal);
        }
        function evenNumTotal(cardNumber){
            if(cardNumber.length < 14) return null

            let sum = 0;
            for(let i =1; i<= 13; i +=2){
                let number = Number(cardNumber[i]);
                sum += number
            }
            console.log('sum',sum)
            return sum;
        }
        function oddNumTotal(cardNumber) {
            if(cardNumber.length < 16) return null
            let sum = 0;
            for (let i = 0; i <= 15; i += 2) {
                let number = Number(cardNumber[i]);
                sum += number
            }
            return sum;
          }
    class Error {
        constructor(message){
            this.message = message;
            this.name = 'Error'
        }
    }
})()