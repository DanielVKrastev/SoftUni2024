function bitcoinMining(arr){
    let bitcoinCount = 0;
    let firstBitcoinDay = 0;
    let totalMoney = 0;
    let curDay = 1;

    for(let i = 0; i < arr.length; i++){
        let gold = Number(arr[i]);

        if(curDay % 3 === 0){
            gold *= 0.70;
        }

        let moneyFromGold = gold * 67.51;
        
        totalMoney += moneyFromGold;

        while(totalMoney >= 11949.16){
            if(bitcoinCount === 0){
                firstBitcoinDay = curDay;
            }

            bitcoinCount++;
            totalMoney -= 11949.16;
        }

        curDay++;
    }

    console.log(`Bought bitcoins: ${bitcoinCount}`);

    if(bitcoinCount > 0){
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

bitcoinMining([3124.15, 504.212, 2511.124])