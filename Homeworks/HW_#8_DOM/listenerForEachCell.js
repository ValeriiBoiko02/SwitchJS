function addRow(columns, rowNumber) {
    // Get a reference to the table
    let tableRef = document.getElementById('myTable');

    // Insert a row in the table at row index 0
    let newRow = tableRef.insertRow(0);

    for (let i = columns; i >= 1; i--) {
        // Insert a cell in the row at index 0
        let newCell = newRow.insertCell(0);

        // Append a text node to the cell and give each cell and id
        let newText = document.createTextNode(i);
        newCell.appendChild(newText);
        newText.parentNode.id = rowNumber + '.' + i;

        //add event listener for each cell
        newCell.addEventListener('click',()=>{
            alert(newText.parentNode.id)
        } )
    }
}

function createTable(rows, columns) {
    let rowNumber = rows;
    for (let i = 1; i <= rows; i++) {
        addRow(columns, rowNumber)
        rowNumber--
    }
}

createTable(10, 10)