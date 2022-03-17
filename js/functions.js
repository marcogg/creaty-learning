var acordeon = document.getElementsByClassName("acordeon");
var i;
for (i = 0; i < acordeon.length; i++) {
    acordeon[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}