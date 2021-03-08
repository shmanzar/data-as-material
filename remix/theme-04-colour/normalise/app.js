function changeColour(tagName) {
  document.querySelectorAll(tagName).forEach((el) => {
    let colour = el.textContent;
    // console.log(colour);
    el.style.backgroundColor = "#" + colour + "FF";
    el.style.color = "transparent";
    el.style.fontSize = "8px";
    el.style.opacity = 0.85;
    el.style.fontFamily = "Helvetica";
    el.onmouseover = function () {
      this.style.color = "whitesmoke";
    };
    el.onmouseout = function () {
      this.style.color = "transparent";
    };
  });
}

changeColour("span");
