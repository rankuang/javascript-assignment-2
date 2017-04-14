// Do your work in this file.

var boxes = document.querySelectorAll(".box");
var n = boxes.length;

console.log(n);

function boxClicked(index) {
    console.log("box clicked")
    if (n >= 201 && n <= 300) {
        boxes[i].style.backgroundColor = "yellow";
    } else if (n >= 301 && n <= 400) {
        boxes[i].style.backgroundColor = "green";
    } else if (n >= 401 && n <= 500) {
        boxes[i].style.backgroundColor = "purple";
    } else if (n >= 501 && n <= 600) {
        boxes[i].style.backgroundColor = "orange";
    } else if (n >= 601 && n <= 700) {
        boxes[i].style.backgroundColor = "pink";
    } else if (n >= 701 && n <= 800) {
        boxes[i].style.backgroundColor = "black";
    } else if (n >= 801 && n <= 900) {
        boxes[i].style.backgroundColor = "brown";
    } else {
        boxes[i].style.backgroundColor = "blue";
    }
}

    // switch (true) {
    //     case n >= 201 && n <= 300:
    //        boxes[index].style.backgroundColor = "yellow";
    //        break;
    //     case n >= 301 && n <= 400:
    //        boxes[index].style.backgroundColor = "green";
    //        break;
    //     case n >= 401 && n <= 500:
    //        boxes[index].style.backgroundColor = "purple";
    //        break;
    //     case n >= 501 && n <= 600:
    //        boxes[index].style.backgroundColor = "orange";
    //        break;
    //     case n >= 601 && n <= 700:
    //        boxes[index].style.backgroundColor = "pink";
    //        break;
    //     case n >= 701 && n <= 800:
    //        boxes[index].style.backgroundColor = "black";
    //        break;
    //     case n >= 801 && n <= 900:
    //        boxes[index].style.backgroundColor = "brown";
    //        break;
    //     default:
    //        boxes[index].style.backgroundColor = "blue";
    //        break;
    // }



for (var i = 0; i < n; i++) {
    boxes[i].addEventListener("click", boxClicked(i));
}
