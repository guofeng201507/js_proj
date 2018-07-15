let story = '';

window.addEventListener("keydown", function(e) {
    console.log(e);
    let oldEles = document.querySelector(".letter");
    if(oldEles) {
        oldEles.parentNode.removeChild(oldEles);
    }
    let ele = document.createElement("p");
    ele.innerText = e.key;
    ele.classList.add("letter");
    document.body.appendChild(ele);

    let tmp = '';
    if (e.key === 'Enter') {
        tmp = '<br>';
    } else if (e.key === 'Backspace') {
        story = story.slice(0, -1);
    } else {
        tmp = e.key;
    }
    story = story.concat(tmp);
    document.getElementById("story").innerHTML = story;
});