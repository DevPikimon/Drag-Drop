// 1. 요소의 취득
const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");
// console.log(empties);

// 2. 드래그 트리거
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

// 4. 하나하나의 empty요소를 취득
for (const empty of empties) {
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", dragDrop);
}

// 3. 드래그 함수
function dragStart() {
    console.log("start");
    fill.className += " hold";
    setTimeout(() => {
        fill.className = "invisible";
    }, 0);
}

function dragEnd() {
    console.log("end");
    fill.className = "fill";
}

function dragOver(e) {
    e.preventDefault();
    console.log("over");
}

function dragEnter() {
    console.log("enter");
    this.className += " hovered";
}

function dragLeave() {
    console.log("leave");
}

function dragDrop() {
    console.log("drop");
}
