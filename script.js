// Do your work in this file.

var boxes = document.querySelectorAll(".box");
var n = boxes.length;

console.log(n);

function boxClicked() {
    console.log("box clicked")
    switch(n) {
        case n>=201 && n<=300:
           boxes.style.backgroundColor = "yellow";
           break;
        case n>=301 && n <=400:
           boxes.style.backgroundColor = "green";
           break;
        case n>=401 && n <=500:
           boxes.style.backgroundColor = "purple";
           break;
        case n>=501 && n <=600:
           boxes.style.backgroundColor = "orange";
           break;
        case n>=601 && n <=700:
           boxes.style.backgroundColor = "pink";
           break;
        case n>=701 && n <=800:
           boxes.style.backgroundColor = "black";
           break;
        case n>=801 && n <=900:
           boxes.style.backgroundColor = "brown";
           break;
        default:
           boxes.style.backgroundColor = "blue";
           break;
    }
}



for (var i = 0; i < n; i++) {
    boxes[i].addEventListener("click", boxClicked);
}
