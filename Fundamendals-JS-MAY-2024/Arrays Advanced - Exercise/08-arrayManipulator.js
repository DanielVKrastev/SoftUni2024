function arrayManipulator(nums, commands){

    for(const command of commands){
        let tokens = command.split(' ');
        const action = tokens.shift();

        if(action === 'add'){
            const index = Number(tokens.shift());
            const element = Number(tokens.shift());

            nums.splice(index, 0, element); //add element

        }else if(action === 'addMany'){
            let index = Number(tokens.shift());
            
            for(let element of tokens){
                nums.splice(index, 0, element);
                index++;
            }

        }else if(action === 'contains'){
            const element = Number(tokens.shift());
            const elementIndex = nums.indexOf(element);
            console.log(elementIndex);

        }else if(action === 'remove'){
            const index = Number(tokens.shift());
            nums.splice(index, 1);

        }else if(action === 'shift'){
            const rotations = Number(tokens.shift());
            
            for(let rotation = 1; rotation <= rotations; rotation++){
                const firstElement = nums.shift();
                nums.push(firstElement);
            }
        }else if(action === 'sumPairs'){
            let resultArr = [];

            for(let i = 0; i < nums.length; i += 2){
                const curNum = Number(nums[i]);
                const nextNum = Number(nums[i + 1]);

                if(nextNum === undefined){
                    resultArr.push(curNum);
                }else{
                    resultArr.push(curNum + nextNum);
                }
                
            }

            nums = resultArr;
        }else{
            console.log(`[ ${nums.join(', ')} ]`);
        }
    }
}
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']    
)