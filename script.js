function addIndex() {
    let input = document.getElementById('input');
    let elenco = document.getElementById('elenco');
    let count = document.getElementById('count');

    if (input.value.trim() !== '') {
        let list = document.createElement('li');
        list.appendChild(document.createTextNode(input.value));
        let bottone = document.createElement('button');
        bottone.appendChild(document.createTextNode('Remove'));
            bottone.onclick = function() {
                removeList(list);
            };
        list.appendChild(bottone);
        elenco.appendChild(list);
        input.value = '';

        let varCount = parseInt(count.innerText, 10);
        count.innerText = varCount + 1;
    } 
}

function removeList(task){
    let elenco = document.getElementById('elenco');
    elenco.removeChild(task);

    let count = document.getElementById('count');
    let varCount = parseInt(count.innerText, 10);
    count.innerText = varCount - 1;
}
