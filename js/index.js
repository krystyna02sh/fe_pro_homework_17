const question = document.getElementById('question');
const enterName = document.getElementById("name");
const nameInput = document.getElementById('nameInput');
const submitBut = document.getElementById('submitBut');
const form = document.getElementById('form');
const greet = document.getElementById('greeting')
submitBut.addEventListener('click', () => {
    const text = nameInput.value.trim();
    if (text !== '') {
        enterName.textContent = text;
        addHidden(question);
        addHidden(form);
        remHidden(greet);
        remHidden(enterName);
        saveName(nameInput);
    }
})
function addHidden(element) {
    element.classList.add('hidden');
};
function remHidden(el) {
    el.classList.remove('hidden');
}
function saveName(input) {
    const valSave = input.value
    localStorage.setItem('userName', valSave)
}
const savedName = localStorage.getItem('userName');
if (savedName) {
    addHidden(question);
    addHidden(form);
    enterName.textContent = savedName;
}
else {
    addHidden(enterName)
    addHidden(greet);
}

