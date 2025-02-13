function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');
}

function armazenar_valor() {
    let valor = document.getElementById('password').value;

    document.getElementById('password_confirm').value = valor;

    return valor
}

// Esse é o comando para chamar a função que realiza a ação de passar o valor
// É definido o id de destino na função, deve ser alterado de acordo com a pagina destino
document.getElementById('password').addEventListener('input', armazenar_valor);

password = document.getElementById('password').value
password_confirm = document.getElementById('password_confirm').value

function check_password(password, password_confirm) {

    password = document.getElementById('password').value
    password_confirm = document.getElementById('password_confirm').value

    const regex = /[A-Z]/; 
    if (password == password_confirm) {
        if (regex.test(password)) {
            console.log('Registrado com sucesso!')
        }
        else {
            console.log('A senha deve conter ao menos uma letra maiscula!')
        }
    }
    else {
        console.log('Ambas as senhas devem ser iguais!');
    }
}

// This function could be used later to get the data from some table in the page

// function getTableData() {
//     // Select the element "table" where class is equal to "w-100"
//     // Query selector allows to select css in the page
//     var table = document.querySelector('table.w-100');
//     // Get all elements in the body, how this works i don't know yet
//     var rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
//     // Create an empty array to store the date
//     var tableData = [];

//     // this loop will get all the data from the table and store in the array
//     for (var i = 0; i < rows.length; i++) {
//         var cells = rows[i].getElementsByTagName('td'); //Get all cells in the current row
//         var rowData = {
//             tecnico_responsavel: cells[0].innerText, //Get the first cell in the current row
//             evolucao_percepcoes: cells[1].innerText, //Get the second cell in the current row
//             medida: cells[2].innerText, //Get the third cell in the current row
//             tipo_penal: cells[3].innerText, //Get the fourth cell in the current row
//             data_registro: cells[4].innerText, //Get the fifth cell in the current row
//         };
//         tableData.push(rowData);
//     }
//     return tableData; //Return all table data in an array
// }

// // Showing the data in the console
// var data = getTableData();
// console.log(data);









