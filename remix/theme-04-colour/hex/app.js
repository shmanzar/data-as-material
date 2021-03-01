function changeColour(tagName) {
    document.querySelectorAll(tagName).forEach(el => {
        let colour = el.textContent;
        el.style.backgroundColor = "#"+colour;
        el.style.color = "transparent";
        el.style.fontSize="15px";
        el.style.opacity = 0.95;
        el.style.fontFamily ="Helvetica";
        el.onmouseover = function () {
        this.style.color = "whitesmoke";
        }
         el.onmouseout = function () {
        this.style.color = "transparent";
        }
    });
}

changeColour('span')

