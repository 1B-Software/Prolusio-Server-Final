// I hate js...

let heading = document.getElementById('heading');

window.addEventListener("scroll", function() {
    const scrollLocation = window.pageYOffset;
    heading.style.backgroundSize = `${130-scrollLocation/12}%`
    const value = 1-scrollLocation/700;
    if(scrollLocation != 0) heading.style.opacity = value;
    else heading.style.filter = 'blur(0px)';
});