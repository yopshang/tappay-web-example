(function(){
        let CardNumber = document.getElementById('CardNumber')
        CardNumber.addEventListener('input', (e)=>{
            varify_bank_handler(e.target.value)
        })
        function varify_bank_handler(credit_card_number){
            const bank = identify_card_type(credit_card_number) // 銀行別
            let evenTotal = evenNumTotal(credit_card_number)
            let oddTotal = oddNumTotal(credit_card_number)
            let sum = evenTotal + oddTotal
            let resultNum = resultNumHandler(sum, credit_card_number);

            if(bank === null || resultNum)  {
                console.log('無效卡號')
            } else {
                console.log('通過！！！！！！')
            }
        } 
        function resultNumHandler(sum, credit_card_number){
            let resultNum = sum % 10
            if(resultNum != 0){
                resultNum = 10 - resultNum
            }
            if(resultNum != (credit_card_number[15]) * 1){
                return true // 卡號驗證不通過
            } else {
                return false // 卡號驗證通過
            }
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
        function evenNumTotal(cardNumber){
            let sum = 0;
            for(let i =1; i<= 13; i +=2){
                let number = Number(cardNumber[i]);
                sum += number
            }
            return sum;
        }
        function oddNumTotal(cardNumber) {
            let sum = 0;
            for (let i = 0; i <= 15; i += 2) {
                let number = Number(cardNumber[i]) * 2;
                if(number >= 10) number -=9
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