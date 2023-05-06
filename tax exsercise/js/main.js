var salary= prompt("Please enter your salary");
var tax="";
 if (salary<25000) {
   tax= salary*0.1
alert(tax)
}
if (salary<50000){
tax= (salary-25000)*0.2+2500;
alert(tax)
}
if(salary<100000){
    tax= (salary-7500)*0.3
    alert(tax)
}
if(salary<150000){
    tax=(salary-22500)*0.4
    alert(tax)
}
else{
    tax= (salary-22500)*0.5
    alert(tax)
}

