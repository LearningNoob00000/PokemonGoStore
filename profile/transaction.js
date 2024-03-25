document.addEventListener("DOMContentLoaded", function() {
    const playerEmail = localStorage.getItem("CurrentLogin");
    let transactions = localStorage.getItem(`${playerEmail}transactionData`) ? localStorage.getItem(`${playerEmail}transactionData`).split(';') : [];

    const transactionTable = document.getElementById('transaction-table');

    const tableHeader = document.createElement('tr');
    const headers = ['Date and Time', 'Name', 'Price'];
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        tableHeader.appendChild(th);
    });
    transactionTable.appendChild(tableHeader);

    transactions.forEach(transaction => {
        const [dateTime, name, price] = transaction.split(',');
        const row = document.createElement('tr');
        const dateCell = document.createElement('td');
        dateCell.textContent = dateTime;
        const nameCell = document.createElement('td');
        nameCell.textContent = name;
        const priceCell = document.createElement('td');
        priceCell.textContent = price;

        row.appendChild(dateCell);
        row.appendChild(nameCell);
        row.appendChild(priceCell);

        transactionTable.appendChild(row);
    });
});