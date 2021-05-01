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


saveBtn.on("click", function(){
    console.log('saved??')
    alert('Your Event Has Been Saved')
    
    localStorage.setItem("9AM", (text1.val()))
    localStorage.setItem("10AM", (text2.val()))
    localStorage.setItem("11AM", (text3.val()))
    localStorage.setItem("12PM", (text4.val()))
    localStorage.setItem("1PM", (text5.val()))
    localStorage.setItem("2PM", (text6.val()))
    localStorage.setItem("3PM", (text7.val()))
    localStorage.setItem("4PM", (text8.val()))
    localStorage.setItem("5PM", (text9.val()))
})
//appends text boxs with information from local storage
text1.append(localStorage.getItem("9AM"));
text2.append(localStorage.getItem("10AM"));
text3.append(localStorage.getItem("11AM"));
text4.append(localStorage.getItem("12PM"));
text5.append(localStorage.getItem("1PM"));
text6.append(localStorage.getItem("2PM"));
text7.append(localStorage.getItem("3PM"));
text8.append(localStorage.getItem("4PM"));
text9.append(localStorage.getItem("5PM"));


const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('h'));

Array.from(rows).forEach(row =>{
    let
        rowIDString = row.id,
        rowHour;
    if (rowIDString){
        rowHour = parseInt(rowIDString);
    }
    if (rowHour){
        if (currentHour === rowHour){
            setColor(row, "red");
        } else if ((currentHour < rowHour) && (currentHour >= rowHour-12)){
            setColor(row, "green");
        } else{
        setColor(row, "lightgrey");
    }
}
});
//sets the color of the rows
function setColor(element, color){
    element.style.backgroundColor = color;
}

