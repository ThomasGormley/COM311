function countUp() {
    window.document.write("Start the counting:<br>");
	for (i=1; i<=7; i++){
		window.document.write("Counter i = " +i+"<br>");
	}
	window.document.write("Counting is completed!");
}

function countDown() {
    var i= 7;
	document.write("Start the counting:<br />");
	
	while (i=>0){
		document.write("Counter i =" +i+ "<br />");
		i--;
	}
	
	window.document.write("Counting is completed!");
}

function countTotal() {
    var total = document.getElementById("textLoop").value;
    var counter = 1;
    var sum = 0;
    do {
        sum+=counter;
        counter++
    }
    while (counter <= parseInt(total))
    alert("Counting is complete! Total is " + sum);
}

function countEven(){
    var i = 0;
    var input = parseInt(document.getElementById("textLoop").value);
    document.write("Begin counting even numbers <br/>")

    while (i <= input) {
        document.write("Counter i = " + i + "<br/>");
        i+=2;
    }
    window.document.write("Counting is completed!");
}
function countOdd(){
    var i = 1;
    var input = parseInt(document.getElementById("textLoop").value);
    document.write("Begin counting odd numbers <br/>")
    while (i <= input) {
        document.write("Counter i = " + i + "<br/>");
        i+=2;
    }
    window.document.write("Counting is completed!");
}