function sumTable() {
    const output = document.getElementById('sum');

    //select all rows from the first table
    //convert the collection to an array and skip first and last row
    //map each row to last column
    //in a buffer variable, sum the converted text content to each row
    //print output

    const tableRows = document.querySelectorAll('table tr');
    const rows = Array.from(tableRows).slice(1, -1);
    const cols = rows.map(r => r.children[r.children.length - 1]);

    let sum = 0;

    for(let col of cols){
        sum += Number(col.textContent);
    }

    output.textContent = sum.toFixed(2);
    
    
}