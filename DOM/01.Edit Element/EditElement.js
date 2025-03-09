function editElement(element, match, replacer) {
    // TODO
    const matchRegex = new RegExp(match, 'g');
    element.textContent = element.textContent.replace(matchRegex, replacer);

}