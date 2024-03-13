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
        document.getElementById("redBtn").setAttribute("onclick", "catchMoneyRed()");
        document.getElementById("blueBtn").setAttribute("onclick", "catchMoneyBlue()");

        document.addEventListener("keypress", function keypress(key) {
            if (key.key == "s" || key.key == "S") {
                catchMoneyRed();
            }
            else if (key.key == "l" || key.key == "L") {
                catchMoneyBlue();
            }
        });

        bags[0].style.visibility = "visible";
        bags[1].style.visibility = "visible";

        changeCoin();
        coinChanger = setInterval(function () {
            changeCoin();
        }, 3000);

    }, 3000);
}

function changeCoin() {

    let redWinLable = document.getElementById("redWinLable");
    let blueWinLable = document.getElementById("blueWinLable");

    let bags = document.getElementsByClassName("score");

    if (redMoney == 8) {
        document.getElementById("redBtn").setAttribute("onclick", "");
        document.getElementById("blueBtn").setAttribute("onclick", "");
        bags[0].style.visibility = "hidden";
        bags[1].style.visibility = "hidden";
        redWinLable.style.visibility = "visible";
        clearInterval(coinChanger);
        return;
    } else if (blueMoney == 8) {
        document.getElementById("blueBtn").setAttribute("onclick", "");
        document.getElementById("redBtn").setAttribute("onclick", "");
        bags[0].style.visibility = "hidden";
        bags[1].style.visibility = "hidden";
        blueWinLable.style.visibility = "visible";
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
    redBtn.setAttribute("onclick", "");

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
            redBtn.setAttribute("onclick", "catchMoneyRed()");
        }, 750);
    }

    else if (coinExist == true && coinOrTrash == false) {
        setTimeout(function () {
            wrongEffect.style.visibility = "visible";
            document.body.style.transform = "rotate(2deg) scale(1.02)";
            navigator.vibrate(300);
        }, 140);
        setTimeout(function () {
            wrongEffect.style.visibility = "hidden";
            document.body.style.transform = "rotate(0) scale(1)";
            redHand.classList.remove("catch");
        }, 300);
        setTimeout(function () {
            redHand.style.zIndex = "3";
            redBtn.setAttribute("onclick", "catchMoneyRed()");
        }, 750);
    }

    else {
        setTimeout(function () {
            redHand.classList.remove("catch");
        }, 300);
        setTimeout(function () {
            redHand.style.zIndex = "3";
            redBtn.setAttribute("onclick", "catchMoneyRed()");
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
    blueBtn.setAttribute("onclick", "");

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
            blueBtn.setAttribute("onclick", "catchMoneyBlue()");
        }, 750);
    }

    else if (coinExist == true && coinOrTrash == false) {
        setTimeout(function () {
            wrongEffect.style.visibility = "visible";
            document.body.style.transform = "rotate(-2deg) scale(1.02)";
            navigator.vibrate(300);
        }, 140);
        setTimeout(function () {
            wrongEffect.style.visibility = "hidden";
            document.body.style.transform = "rotate(0) scale(1)";
            blueHand.classList.remove("catch");
        }, 300);
        setTimeout(function () {
            blueHand.style.zIndex = "3";
            blueBtn.setAttribute("onclick", "catchMoneyBlue()");
        }, 750);
    }

    else {
        setTimeout(function () {
            blueHand.classList.remove("catch");
        }, 300);
        setTimeout(function () {
            blueHand.style.zIndex = "3";
            blueBtn.setAttribute("onclick", "catchMoneyBlue()");
        }, 750);
    }


}