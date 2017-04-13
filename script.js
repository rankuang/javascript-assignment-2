// Do your work in this file.

var boxes = document.querySelectorAll(".box");
var n = boxes.length;

console.log(n);

function boxClicked() {
    console.log("box clicked")
    switch(n) {
        case n >= 201 && n <= 300:
           boxes[0].style.backgroundColor = "yellow";
           break;
        case n >= 301 && n <= 400:
           boxes[0].style.backgroundColor = "green";
           break;
        case n >= 401 && n <= 500:
           boxes[0].style.backgroundColor = "purple";
           break;
        case n >= 501 && n <= 600:
           boxes[0].style.backgroundColor = "orange";
           break;
        case n >= 601 && n <= 700:
           boxes[0].style.backgroundColor = "pink";
           break;
        case n >= 701 && n <= 800:
           boxes[0].style.backgroundColor = "black";
           break;
        case n >= 801 && n <= 900:
           boxes[0].style.backgroundColor = "brown";
           break;
        default:
           boxes[0].style.backgroundColor = "blue";
           break;
    }
}



for (var i = 0; i < n; i++) {
    boxes[i].addEventListener("click", boxClicked);
}
