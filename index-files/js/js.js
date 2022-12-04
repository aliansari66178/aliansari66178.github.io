function set (url) {
    document.getElementById("if").setAttribute("src", url);
}
document.getElementById("M").onclick = function () {
    set("index-files/data/m.html")
}
document.getElementById("1").onclick = function () {
    set("index-files/data/1.html")
}
document.getElementById("2").onclick = function () {
    set("index-files/data/2.html")
}
document.getElementById("home").onclick = function () {
    set("index-files/data/home.html")
}
document.getElementById("about").onclick = function () {
    set("index-files/data/about.html")
}
document.getElementById("Dooz").onclick = function () {
    set("index-files/data/Dooz/index.html")
}
document.getElementById("DB").onclick = function () {
    set("index-files/data/DorostBeja/index.html")
}