function loadingBar(num){
    
    function setupLoadingBar(percentLoaded){
        const percentSymbolCount = percentLoaded / 10;
        const dotSymbolCount = 10 - percentSymbolCount;

        const percents = '%'.repeat(percentSymbolCount);
        const dots = '.'.repeat(dotSymbolCount);

        const bar = `[${percents}${dots}]`;
        return bar;
    }

    const resultBar = setupLoadingBar(num);
    if(num === 100){
        console.log('100% Complete!');
        console.log(resultBar);
    }else{
        console.log(`${num}% ${resultBar}`);
        console.log('Still loading...');
    }
}
loadingBar(45);