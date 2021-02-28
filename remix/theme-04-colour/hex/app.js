// const span_array = document.querySelectorAll('span')
//     .map(sel => {
//         
//         let colour = this.innerText;
//         this.style.backgroundColor = colour;
//     })
    
function changeColour(tagName) {
    document.querySelectorAll(tagName).forEach(el => {
        let colour = el.textContent;
        el.style.backgroundColor = "#"+colour;
        el.style.color = "transparent";
        el.style.fontSize="15px";
        el.style.opacity = 0.95;
        el.style.fontFamily ="Helvetica";
// document.querySelectorAll('span')[1].style.color="#"+document.querySelectorAll('span')[99].innerText
    });
}

changeColour('span')
