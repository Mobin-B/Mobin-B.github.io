// variables --------

var coinOrTrash = false;
var coinExist = false;

var redMoney = 0;
var blueMoney = 0;

var redPosition = false;
var bluePosition = false;

// functions --------

function gameStart() {
    let bags = document.getElementsByClassName("score");
    let counter = document.getElementById("countDown");

    setTimeout(function () {
        counter.setAttribute("src", "../Object/CountDown/2.svg");
    }, 1000);
    setTimeout(function () {
        counter.setAttribute("src", "../Object/CountDown/1.svg");
    }, 2000);
    setTimeout(function () {
        counter.style.visibility = "hidden";

        document.getElementById("redBtn").addEventListener("touchstart", catchMoneyRed);
        document.getElementById("blueBtn").addEventListener("touchstart", catchMoneyBlue);

        document.addEventListener("keypress", keypress);
        function keypress(key) {
            if (key.key == "s" || key.key == "S") {
                catchMoneyRed();
            }
            else if (key.key == "l" || key.key == "L") {
                catchMoneyBlue();
            }
        }

        bags[0].style.visibility = "visible";
        bags[1].style.visibility = "visible";

        changeCoin();
        coinChanger = setInterval(function () {
            changeCoin();
        }, 3000);

    }, 3000);
}

function changeCoin() {

    let redWinLabel = document.getElementById("redWinLabel");
    let blueWinLabel = document.getElementById("blueWinLabel");

    let bags = document.getElementsByClassName("score");

    if (redMoney == 8) {
        document.getElementById("redBtn").removeEventListener("touchstart", catchMoneyRed);
        document.getElementById("blueBtn").removeEventListener("touchstart", catchMoneyBlue);
        bags[0].style.visibility = "hidden";
        bags[1].style.visibility = "hidden";
        redWinLabel.style.visibility = "visible";
        clearInterval(coinChanger);
        return;
    } else if (blueMoney == 8) {
        document.getElementById("redBtn").removeEventListener("touchstart", catchMoneyRed);
        document.getElementById("blueBtn").removeEventListener("touchstart", catchMoneyBlue);
        bags[0].style.visibility = "hidden";
        bags[1].style.visibility = "hidden";
        blueWinLabel.style.visibility = "visible";
        clearInterval(coinChanger);
        return;
    }

    coinExist = true;
    redPosition = false;
    bluePosition = false;

    let num = Math.floor(Math.random() * 6) + 1;
    let coin = document.getElementById("coinImage");

    if (num % 2 == 0) {
        coinOrTrash = false;
    }
    else {
        coinOrTrash = true;
    }

    coin.setAttribute("src", "../Object/Money/Coin" + num + ".svg")
    coin.style.visibility = "visible";
}

function catchMoneyRed() {

    let redHand = document.querySelector("#red .hand");
    let coin = document.getElementById("coinImage");
    let redBag = document.getElementById("redPoint");
    let redBtn = document.getElementById("redBtn");
    let wrongEffect = document.getElementById("wrong");

    redPosition = true;

    if (bluePosition == false) {
        redHand.style.zIndex = "2";
    } else if (bluePosition == true) {
        redHand.style.zIndex = "4";
    }

    redHand.classList.add("catch");

    if (bluePosition == false && coinExist == true && coinOrTrash == true) {
        setTimeout(function () {
            redHand.classList.remove("catch");
            coin.classList.add("coinRedCatched");
            redMoney++;
            redBag.innerHTML = redMoney + "$";
            coinExist = false;
        }, 300);
        setTimeout(function () {
            coin.style.visibility = "hidden";
        }, 350);
        setTimeout(function () {
            redHand.style.zIndex = "3";
            coin.classList.remove("coinRedCatched");
        }, 750);
    }

    else if (coinExist == true && coinOrTrash == false) {
        setTimeout(function () {
            wrongEffect.style.visibility = "visible";
            document.body.style.transform = "rotate(2deg) scale(1.02)";
            if (navigator.vibrate) {
                navigator.vibrate(300);
            }
        }, 140);
        setTimeout(function () {
            if (redMoney > 0) {
                redMoney--;
                redBag.innerHTML = redMoney + "$";
            }
            wrongEffect.style.visibility = "hidden";
            document.body.style.transform = "rotate(0) scale(1)";
            redHand.classList.remove("catch");
        }, 300);
        setTimeout(function () {
            redHand.style.zIndex = "3";
        }, 750);
    }

    else {
        setTimeout(function () {
            redHand.classList.remove("catch");
        }, 300);
        setTimeout(function () {
            redHand.style.zIndex = "3";
        }, 750);
    }


}

function catchMoneyBlue() {

    let blueHand = document.querySelector("#blue .hand");
    let coin = document.getElementById("coinImage");
    let blueBag = document.getElementById("bluePoint");
    let blueBtn = document.getElementById("blueBtn");
    let wrongEffect = document.getElementById("wrong");

    bluePosition = true;

    if (redPosition == false) {
        blueHand.style.zIndex = "2";
    } else if (redPosition == true) {
        blueHand.style.zIndex = "4";
    }

    blueHand.classList.add("catch");

    if (redPosition == false && coinExist == true && coinOrTrash == true) {
        setTimeout(function () {
            blueHand.classList.remove("catch");
            coin.classList.add("coinBlueCatched");
            blueMoney++;
            blueBag.innerHTML = blueMoney + "$";
            coinExist = false;
        }, 300);
        setTimeout(function () {
            coin.style.visibility = "hidden";
        }, 350);
        setTimeout(function () {
            blueHand.style.zIndex = "3";
            coin.classList.remove("coinBlueCatched");
        }, 750);
    }

    else if (coinExist == true && coinOrTrash == false) {
        setTimeout(function () {
            wrongEffect.style.visibility = "visible";
            document.body.style.transform = "rotate(-2deg) scale(1.02)";
            if (navigator.vibrate) {
                navigator.vibrate(300);
            }
        }, 140);
        setTimeout(function () {
            if (blueMoney > 0) {
                blueMoney--;
                blueBag.innerHTML = blueMoney + "$";
            }
            wrongEffect.style.visibility = "hidden";
            document.body.style.transform = "rotate(0) scale(1)";
            blueHand.classList.remove("catch");
        }, 300);
        setTimeout(function () {
            blueHand.style.zIndex = "3";
        }, 750);
    }

    else {
        setTimeout(function () {
            blueHand.classList.remove("catch");
        }, 300);
        setTimeout(function () {
            blueHand.style.zIndex = "3";
        }, 750);
    }


}