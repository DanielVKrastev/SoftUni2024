function addItem() {
    
    const menuEl = document.querySelector('#menu');

    const newItemTextEl = document.querySelector('#newItemText');
    const newItemValueEl = document.querySelector('#newItemValue');

    //console.log(menuEl, newItemText, newItemValue);
    
    if(newItemTextEl.value == '' || newItemValueEl == ''){
        return;
    }

    const newOption = document.createElement('option');
    newOption.textContent = newItemTextEl.value;
    newOption.setAttribute('value', newItemValueEl.value);

    menuEl.appendChild(newOption);

    newItemTextEl.value = '';
    newItemValueEl.value = '';

    newItemTextEl.focus();
}