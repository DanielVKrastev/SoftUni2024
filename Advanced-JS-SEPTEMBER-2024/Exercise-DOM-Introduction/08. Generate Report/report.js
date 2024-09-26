function generateReport() {
    const outputEl = document.querySelector('#output');
    const tHeadRow = document.querySelector('table thead tr');
    const tBodyRows = document.querySelectorAll('table tbody tr');

    const checkInputElements = [...tHeadRow.children]
        .map((item, index) => ({
            el: item.children[0],
            name: item.children[0].getAttribute('name'),
            index: index
        })).filter((item) => item.el.checked);
    
    const outputData = [...tBodyRows]
        .map((tr) => {
            return checkInputElements.reduce((acc, curr) => {
                acc[curr.name] = tr.children[curr.index].textContent;
                return acc;
            }, {})
        })

    outputEl.value = JSON.stringify(outputData);
    
}