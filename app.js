/*let count = 0;
function increment() {
    count += 1
    let countEl = document.getElementById('count-el');
    countEl.innerText = count;

}



function save() {
    let saveCount = count + ' - '
    let saveEl = document.getElementById('save-el');
    saveEl.innerText += saveCount;
}
save();*/


let countEl = document.getElementById('count-el');
let count = 0;

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let saveEl = document.getElementById('save-el');
    let saveCount = count + ' - '
    saveEl.textContent += saveCount
    count = 0
    countEl.textContent = 0;
}