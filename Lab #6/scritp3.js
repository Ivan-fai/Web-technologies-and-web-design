let names = ['Код', 'Найменування', 'Ціна за одиницю', 'Кількість', 'Сума'];
let products = [
    ["101", "Клавіатура", 1200, 5],
    ["102", "Миша комп'ютерна", 600, 10],
    ["103", "Монітор", 8500, 2],
    ["104", "Килимок", 300, 15],
    ["105", "Навушники", 1500, 4]
];

let totalSum = 0; 
document.write("<table>");

document.write("<tr>");
for (let i = 0; i < names.length; i++){
    document.write("<th>" + names[i] + "</th>");
}
document.write("</tr>");

for (let i = 0; i < 5; i++){
    document.write("<tr>");

    let rowSum = products[i][2] * products[i][3]; 
    totalSum += rowSum;

    for (let j = 0; j < products[i].length; j++){
        document.write("<td>" + products[i][j] + "</td>");
    }
    document.write("<td>" + rowSum + "</td>");
    document.write("</tr>");
}

document.write("<tr>");
document.write('<td colspan="4" style="text-align: right; padding-right: 10px;">Всього:</td>');
document.write('<td>' + totalSum + '</td>');
document.write('</tr>');

document.write("</table>");