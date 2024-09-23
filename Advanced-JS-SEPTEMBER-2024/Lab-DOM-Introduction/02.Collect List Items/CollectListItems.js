function extractText() {
    const input = document.getElementById('items');
    const output = document.getElementById('result');

    const result = [];

    for (const item of input.children) {
        result.push(item.textContent);
    }

    output.textContent = result.join('\n');
}