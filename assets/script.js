$("#currentDay").text(moment().format("Do, MMMM, YYYY, h:mm a"));

var text1 = $("#text1");
var text2 = $("#text2");
var text3 = $("#text3");
var text4 = $("#text4");
var text5 = $("#text5");
var text6 = $("#text6");
var text7 = $("#text7");
var text8 = $("#text8");
var text9 = $("#text9");
const textContent = document.getElementsByClassName('content');
var saveBtn = $('.row').children('.btn');


const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));


Array.from(rows).forEach(row=>{
    let
        rowIDString = row.id,
        rowHour;
    if (rowIDString){
        rowHour = parseInt(rowIDString);
    }
    if (rowHour){
        if (currentHour === rowHour){
            setColor(row, "red");
        } else if ((currentHour < rowHour) && (currentHour >= rowHour-7)){
            setColor(row, "green");
        }else{
        setColor(row, "lightgrey");
    }
}
});
//sets the color of the rows
function setColor(element, color){
    element.style.backgroundColor = color;
}

