var lincoln = 0
var frankfort = 0
var duncan = 0

function myFunction1() {
    let lincolntotal = lincoln++;
    document.getElementById("lincolntotal").innerHTML = lincoln;
    alert("You voted for Lincoln Heritage Scenic Byway");
}
function myFunction2() {
    let frankforttotal = frankfort++;
    document.getElementById("frankforttotal").innerHTML = frankfort;
    alert("You voted for Old Frankfort Pike");
}
function myFunction3() {
    let duncantotal = duncan++;
    document.getElementById("duncantotal").innerHTML = duncan;
    alert("You voted for Duncan Hines Scenic Byway");
}
