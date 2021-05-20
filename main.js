// Button Buy ticket
var modal = document.getElementById("modal");
function buyticket() {
    modal.style.display = "block";
}
function btnclose() {
    modal.style.display = "none"
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Button to the top 
var btn = document.getElementById("btn-tothetop");
// display button to the top
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.documentElement.scrollTop > 600) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}
// To the top
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//Image automatic
var myIndex = 0;
carousel();
function carousel() {
    var i;
    var x = document.getElementsByClassName("myslider");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length){
         myIndex = 1 
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}