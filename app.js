let count = 0;
function increment() {
    count = count + 1
    let countEl = document.getElementById('count-el');
    countEl.innerText = count;

}
function save() {
    console.log(count)
}
save();