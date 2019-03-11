function calcAverage(){
    var mk1 = document.getElementById("1").value;
    var mk2 = document.getElementById("2").value;
    var mk3 = document.getElementById("3").value;
    var mk4 = document.getElementById("4").value;
    var avg = (mk1+mk2+mk3+mk4)/4;
    window.alert(average)
}
function doSomething(){
    var g1=parseFloat(document.myform.g1.value);
    var g2=parseFloat(document.myform.g2.value);
    var g3=parseFloat(document.myform.g3.value);
    var g4=parseFloat(document.myform.g4.value);
    var average = (g1+g2+g3+g4)/4;
    window.alert("Your average grade is " + average);
}

function calcAverage(){
    if (document.getElementById("1") == "" || document.getElementById("2") == "" || document.getElementById("3") == "" || document.getElementById("4") == "") {
        window.alert("A text box does not have a valid number")
    }
    else {
    var mk1 = parseFloat(document.getElementById("1").value);
    var mk2 = parseFloat(document.getElementById("2").value);
    var mk3 = parseFloat(document.getElementById("3").value);
    var mk4 = parseFloat(document.getElementById("4").value);
    var avg = (mk1+mk2+mk3+mk4)/4;
    window.alert(avg)
}
}