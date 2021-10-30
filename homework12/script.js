const tooltip = document.getElementById('tooltip');
const button = document.getElementById('ex-but');
// console.dir(tooltip);
desiredText = prompt('Which text do u wanna to see?', '1000-7');
// console.log(tooltip.innerText)


const createTooltip = (elem, text) =>{
    tooltip.innerText = text;
    button.onmouseover = function(){
        tooltip.style.display = "block";
    }
    button.onmouseout = function(){
        tooltip.style.display = "none";
    }
    
}

createTooltip(button, desiredText)