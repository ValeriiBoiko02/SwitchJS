const tableRef = document.getElementById('myTable');
tableRef.addEventListener('click', (e) => {
    let target = e.target
    if (target.matches('td')) {
        target.style.backgroundColor = 'red'
    }
})

function addRow(columns, rowNumber) {
    let newRow = tableRef.insertRow(0);

    for (let i = columns; i >= 1; i--) {
        let newCell = newRow.insertCell(0);

        let newText = document.createTextNode(i);
        newCell.appendChild(newText);
        newText.parentNode.id = rowNumber + '.' + i;
        newText.parentNode.draggable = true
    }
}

function createTable(rows, columns) {
    let rowNumber = rows;
    for (let i = 1; i <= rows; i++) {
        addRow(columns, rowNumber)
        rowNumber--
    }
}


const dragAndDrop = (function(){
    let elementText = ''
    let elementID = ''

    function dragStart (e){
        let target = e.target
        if (target.matches('td')) {
            target.classList.add('hidden')
            elementText = target.textContent
            elementID = target.id
        }
    }

    function dragEnd(e){
        let target = e.target
        if (target.matches('td')) {
            target.classList.remove('hidden')
        }
    }

    function dragOver(e){
        let target = e.target
        if (target.matches('td')) {
            e.preventDefault()
        }
    }

    function dragEnter(e){
        let target = e.target
        if (target.matches('td')) {
            target.classList.add('hovered')
        }
    }

    function dragLeave(e){
        let target = e.target
        if (target.matches('td')) {
            target.classList.remove('hovered')
        }
    }

    function dragDrop(e){
        let target = e.target
        if (target.matches('td')) {
            let text = target.textContent
            target.classList.remove('hovered')
            target.textContent = elementText

            let transformed = document.getElementById(elementID)
            transformed.textContent = text
        }
    }

    tableRef.addEventListener('dragstart', dragStart)
    tableRef.addEventListener('dragend', dragEnd)
    tableRef.addEventListener('dragover', dragOver)
    tableRef.addEventListener('dragenter', dragEnter)
    tableRef.addEventListener('dragleave', dragLeave)
    tableRef.addEventListener('drop', dragDrop)
})()


createTable(10, 10)