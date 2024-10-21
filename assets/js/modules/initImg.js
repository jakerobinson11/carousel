const initImg = () => {
    console.dir(carousel);
    const fixedImage = document.createElement("img");
    fixedImage.classList.add("fixedImage");
    fixedImage.src = dataSlider[currentImg].urlImg;
    carousel.append(fixedImage);

    const moveImage = document.createElement("img");
    moveImage.classList.add("moveImage");
    moveImage.src = dataSlider[currentImg].urlImg;
    carousel.append(moveImage);
    fixedImage.width = moveImage.width = 300;
    fixedImage.height = moveImage.height = 200;
}
export { initImg }
