// var setme = document.querySelector(".setme")
// var headme = document.querySelector("#headme")
// var tablewalaform = document.querySelector("#tablewalaform")
// var setval = document.querySelector("#setval")

// function prinTable() {
//     setval.innerHTML ="";
//     headme.innerHTML =  "your table is printed "
//     for (var table = 1; table <= 10; table++ ){
//         headme.innerHTML=+ `${input.value} x ${table} = ${table * input.value} <br />`
//     } 
// } 


var setme = document.querySelector(".setme");
var headme = document.querySelector("#headme");
var tablewalaform = document.querySelector("#tablewalaform");
var setval = document.querySelector("#setval");

// function prinTable() {
//     headme.innerHTML = "";
//     var number = tablewalaform.value; // Get value from input
//     if (number) {
//         for (var table = 1; table <= 10; table++) {
//             headme.innerHTML += `${number} x ${table} = ${number * table} <br /> `;
//         }
//     } else {
//         headme.innerHTML = "Please enter a valid number.";
//     }
// }

function prinTable(){
    headme.innerHTML = "";
    var number = tablewalaform.value;
    if (number){
        for (var table = 1; table <=10; table ++){
            headme.innerHTML+= `${number} x ${table} = ${number * table} <br />`
        }
    } else{
        headme.innerHTML = "Please enter valid number"
    }
}