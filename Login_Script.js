function login() {
    if (document.getElementById("text").value == "counter") {
        location = "Plugins/Counter.html"
    } else if (document.getElementById("text").value == "2048") {
        location = "Game/2048.html"
    } else {
        location = "Home/House.html"
    }
}