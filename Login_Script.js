function login() {
    if (document.getElementById("text").value == "counter") {
        location = "Plugins/Counter.html"
    } else if (document.getElementById("text").value == "2048") {
        location = "Game/2048.html"
    } else {
        location = "Home/House.html"
    }
}

function moiter() {
    document.getElementById("moiter").style.height = "100vh";
    document.getElementsByClassName("img")[0].style.display = "none";
    document.getElementsByTagName("main")[0].style.gridTemplateColumns = "1fr";
    document.getElementsByTagName("main")[0].style.padding = "0";
    document.getElementsByTagName("h1")[0].style.display = "none";
    document.getElementsByTagName("body")[0].style.margin = "0";
    document.getElementsByClassName("card")[0].style.backgroundColor = "#252B48";
    document.getElementsByClassName("card")[0].style.border = "0";
    document.getElementsByClassName("card")[0].style.borderRadius = "0";
    document.getElementsByClassName("card")[0].style.boxShadow = "0px 0 14px 3px hsl(51.5deg 88.98% 75.1% / 0%)";


    setTimeout(function () {
        location = "Home/House.html";
    }, 750)
}

function game2048() {
    document.getElementById("moiter").style.height = "0";
    document.getElementById("moiter").style.border = "0";
    document.getElementById("game2048").style.height = "130vh";
    document.getElementsByClassName("img")[1].style.display = "none";
    document.getElementsByTagName("main")[0].style.gridTemplateColumns = "1fr";
    document.getElementsByTagName("main")[0].style.gap = "0";
    document.getElementsByTagName("main")[0].style.padding = "0";
    document.getElementsByTagName("h1")[1].style.display = "none";
    document.getElementsByTagName("body")[0].style.margin = "0";
    document.getElementsByClassName("card")[1].style.backgroundColor = "#eaeaea";
    document.getElementsByClassName("card")[1].style.border = "0";
    document.getElementsByClassName("card")[1].style.borderRadius = "0";
    document.getElementsByClassName("card")[1].style.boxShadow = "0";


    setTimeout(function () {
        location = "Game/2048/2048.html";
    }, 750)
}

function XO() {
    document.getElementById("moiter").style.height = "0";
    document.getElementById("moiter").style.border = "0";
    document.getElementById("game2048").style.height = "0";
    document.getElementById("game2048").style.border = "0";
    document.getElementById("XOgame").style.height = "130vh";
    document.getElementsByClassName("img")[2].style.display = "none";
    document.getElementsByTagName("main")[0].style.gridTemplateColumns = "1fr";
    document.getElementsByTagName("main")[0].style.gap = "0";
    document.getElementsByTagName("main")[0].style.padding = "0";
    document.getElementsByTagName("h1")[2].style.display = "none";
    document.getElementsByTagName("body")[0].style.margin = "0";
    document.getElementsByClassName("card")[2].style.backgroundColor = "#dddddd";
    document.getElementsByClassName("card")[2].style.border = "0";
    document.getElementsByClassName("card")[2].style.borderRadius = "0";
    document.getElementsByClassName("card")[2].style.boxShadow = "0";


    setTimeout(function () {
        location = "Game/XO/XO.html";
    }, 750)
}