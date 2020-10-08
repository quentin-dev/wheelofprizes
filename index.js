let rotateAngle = 0;

setInterval(function() {
    var image = document.getElementById("chart_img");
    image.setAttribute("style", "transform: rotate(" + rotateAngle + "deg)");
    rotateAngle = rotateAngle + 2;
}, 17);