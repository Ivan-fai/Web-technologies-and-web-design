let salary = parseFloat(prompt("Input your salary: "));
if(salary < 6000){
    alert(`Your salary: ${salary*0.85}, your tax: ${salary*0.15}`);
}
else if (salary >= 6000 && salary <= 10000){
    alert(`Your salary: ${salary*0.82}, your tax: ${salary*0.18}`);
}
else{
    alert(`Your salary: ${salary*0.8}, your tax: ${salary*0.2}`);
}