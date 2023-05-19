function menuToggle(){
    var x = document.getElementById("menu");
    var y = document.getElementById("content");
    var z = document.getElementById("hamburger");

    if(x.style.display === "block"){
        x.style.display = "none";
        y.style.pointerEvents = "all";
        y.style.backgroundColor = "rgba(0,0,0,0)";
        y.style.filter = "brightness(100%)";
        z.style.display = "block"
    } else{
        x.style.display = "block";
        y.style.pointerEvents = "none";
        y.style.backgroundColor = "rgba(0,0,0,50%)";
        y.style.filter = "brightness(50%)";
        z.style.display = "none"
    }
}