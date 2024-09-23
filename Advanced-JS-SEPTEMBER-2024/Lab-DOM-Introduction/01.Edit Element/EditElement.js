function editElement(element, match, replacer) {
    const regex = new RegExp(match, 'g');
    element.textContent = element.textContent.replace(regex, replacer);
}