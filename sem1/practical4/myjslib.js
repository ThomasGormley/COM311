function sayHello(course, campus, university) {
    return "I'm a second year " + course + " student in " + university + " at " + campus;
}
document.getElementById("demo").innerHTML = sayHello("CT", "Jordanstown", "Ulster");