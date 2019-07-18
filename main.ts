var div: HTMLDivElement = document.createElement("div");
div.style.border = "1px solid blue";
div.style.width = "100px";
div.style.height = "100px";
div.id = "demo";
document.body.appendChild(div);

var isDrag: boolean = false;
//根据指针的相对位置偏移
var position: [number, number] = [100, 200];
div.onmousedown = e => {
  isDrag = true;
  position = [e.clientX, e.clientY];
};
document.onmouseup = e => {
  isDrag = false;
};
document.onmousemove = e => {
  //鼠标按下时拖拽
  if (isDrag) {
    var newPositionX = e.clientX - position[0];
    var newPositionY = e.clientY - position[1];
    var top = parseInt(div.style.top!) || 0;
    var left = parseInt(div.style.left!) || 0;
    div.style.top = top + newPositionY + "px";
    div.style.left = left + newPositionX + "px";
    position = [e.clientX, e.clientY];
  }
};
