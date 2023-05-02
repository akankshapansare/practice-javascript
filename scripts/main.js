function generateTable() {
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");

    for(let i = 0; i < 2; i++) {
        const row = document.createElement("tr");
        for(let j = 0; j < 2; j++) {
            const cell = document.createElement("td");
            const cellText = document.createTextNode('cell in row ${i}, column{j}');
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    document.appendChild(tbl);
    tbl.setAttribute("border", "2");
}
function setBackground() {
    const paragraphs = document.getElementsByTagName("p");
    const secondParagraph = paragraphs[1];
    secondParagraph.style.background = "red";
    myTextNode = document.createTextNode("world");
    secondParagraph.appendChild(myTextNode);
}