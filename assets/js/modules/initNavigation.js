const moveImageEffect = (classEffect)=>{
    document.querySelector(".moveImage").classList.add("transEffect");
    document.querySelector(".fixedImage").src = dataSlider[currentImg].urlImg;
    document.querySelector(".moveImage").classList.add(classEffect);
    setTimeout(()=>{
        document.querySelector(".moveImage").classList.remove("transEffect");
        document.querySelector(".moveImage").src = dataSlider[currentImg].urlImg;
        document.querySelector(".moveImage").classList.remove(classEffect);
    },500)
}

const createNavBtn = (className,faClass)=>{  //next->fa-caret-right
    const div = document.createElement("div");
    div.classList.add(className);
    carousel.append(div);
    const i = document.createElement("i");
    i.classList.add(["fa-solid"]);
    i.classList.add([faClass]);
    div.append(i);
    return div;
}

const initNavigation = ()=>{
    const divNext = createNavBtn("divNext","fa-caret-right");
    divNext.addEventListener("click",()=>{
        if(currentImg === dataSlider.length -1){
            currentImg = 0;
        } else {
            currentImg++;
        }
        moveImageEffect("slide-right");
    })
    const divPrev = createNavBtn("divPrev","fa-caret-left");
    divNext.addEventListener("click",()=>{
        if(currentImg === 0){
            currentImg = dataSlider.length -1;
        } else {
            currentImg--;
        }
        moveImageEffect("slide-left");
    })
}

export {initNavigation}