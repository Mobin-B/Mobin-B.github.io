var cells = document.getElementsByClassName("cells");

function setColorAndScore() {
    var score = "2";
    for (let cell = 0; cell < cells.length; cell++) {


        if (cells[cell].innerHTML == 2) {
            cells[cell].style.backgroundColor = "#eb9e45";
        }
        else if (cells[cell].innerHTML == 4) {
            cells[cell].style.backgroundColor = "#eb4566";
        }
        else if (cells[cell].innerHTML == 8) {
            cells[cell].style.backgroundColor = "#ebd245";
        }
        else if (cells[cell].innerHTML == 16) {
            cells[cell].style.backgroundColor = "#d5eb45";
        }
        else if (cells[cell].innerHTML == 32) {
            cells[cell].style.backgroundColor = "#7ceb45";
        }
        else if (cells[cell].innerHTML == 64) {
            cells[cell].style.backgroundColor = "#45eb8d";
        }
        else if (cells[cell].innerHTML == 128) {
            cells[cell].style.backgroundColor = "#45c7eb";
        }
        else if (cells[cell].innerHTML == 256) {
            cells[cell].style.backgroundColor = "#455eeb";
        }
        else if (cells[cell].innerHTML == 512) {
            cells[cell].style.backgroundColor = "#7f45eb";
        }
        else if (cells[cell].innerHTML == 1024) {
            cells[cell].style.backgroundColor = "#cc45eb";
        }
        else if (cells[cell].innerHTML == 2048) {
            cells[cell].style.backgroundColor = "#eb4585";
        }
        else {
            cells[cell].style.backgroundColor = "#eaeaea";
        }

        if (+cells[cell].innerHTML > +score) {
            score = cells[cell].innerHTML;
        }

    }

    document.getElementById("score").innerHTML = score;
}

function gameStart() {
    let cell1 = Math.floor(Math.random() * 16);
    let cell2 = cell1;
    while (cell2 == cell1) {
        cell2 = Math.floor(Math.random() * 16);
    }


    document.getElementById("cell" + cell1).innerHTML = 2;
    document.getElementById("cell" + cell2).innerHTML = (Math.floor(Math.random() * 2) * 2) + 2;;
    setColorAndScore();
}

function addNum() {
    let num = (Math.floor(Math.random() * 2) * 2) + 2;
    let addCell;

    do {
        addCell = Math.floor(Math.random() * 16);
    } while (cells[addCell].innerHTML != "");

    cells[addCell].innerHTML = num;
    setColorAndScore();
}

function checkGameLose() {
    let i;
    for (i = 0; i <= 15; i++) {

        let leftColumn = [0, 4, 8, 12];
        let rightColumn = [3, 7, 11, 15];

        // left side cell
        let leftCell = 1;
        try {
            if (!(leftColumn.includes(i))) {
                leftCell = cells[i - 1].innerHTML;
            }
        } catch { }
        // right side cell
        let rightCell = 1;
        try {
            if (!(rightColumn.includes(i))) {
                rightCell = cells[i + 1].innerHTML;
            }
        } catch { }
        // up side cell
        let upCell = 1;
        try {
            upCell = cells[i - 4].innerHTML;
        } catch { }
        // down side cell
        let downCell = 1;
        try {
            downCell = cells[i + 4].innerHTML;

        } catch { }

        if (cells[i].innerHTML == ""
            || cells[i].innerHTML == leftCell
            || cells[i].innerHTML == rightCell
            || cells[i].innerHTML == upCell
            || cells[i].innerHTML == downCell
        ) {

            break;
        }
    }

    if (i == 16) {
        document.getElementById("logo").innerHTML = "GAMEOVER";
        document.getElementById("logo").style.fontSize = "2em";
        document.getElementById("retry").style.display = "flex";
        document.getElementById("header").style.gridTemplateColumns = "2fr 0.75fr 1fr 1fr";
        document.getElementById("main_container").style.backgroundColor = "#696969"
    }
}

function keyPress(e) {
    var event = window.event ? window.event : e;
    switch (event.keyCode) {
        case 37:
            pushLeft();
            //left
            break;
        case 38:
            pushUp();
            //up
            break;
        case 39:
            pushRight();
            //right
            break;
        case 40:
            pushDown();
            //down
            break;
        case 32:
            location.reload();
            //refresh page
            break;
    }
}

function pushDown() {
    let j;
    for (let i = 11; i >= 0; i--) {
        for (j = i + 4; j <= 15 && cells[j].innerHTML == ""; j += 4);
        if (j - 4 != i && cells[i].innerHTML != "") {
            cells[i].style.transform = "translateY(8px) scaleY(1.05)";
            cells[j - 4].innerHTML = cells[i].innerHTML;
            cells[i].innerHTML = "";
        }
    }

    for (let i = 11; i >= 0; i--) {
        j = i + 4;
        if (cells[j].innerHTML == cells[i].innerHTML && cells[i].innerHTML != "") {
            cells[i].style.transform = "translateY(8px)";
            cells[j].innerHTML = cells[i].innerHTML * 2;
            cells[i].innerHTML = "";
            cells[j].style.transform = "scale(1.12)"
        }

    }

    for (let i = 11; i >= 0; i--) {
        for (j = i + 4; j <= 15 && cells[j].innerHTML == ""; j += 4);
        if (j - 4 != i && cells[i].innerHTML != "") {
            cells[j - 4].innerHTML = cells[i].innerHTML;
            cells[i].innerHTML = "";
        }
    }

    setTimeout(function () {
        for (let i = 0; i <= 15; i++) {
            cells[i].style.transform = "translateY(0)";
        }
    }, 100)

    setColorAndScore();
    addNum();
    checkGameLose();
}

function pushUp() {
    let j;
    for (let i = 4; i <= 15; i++) {
        for (j = i - 4; j >= 0 && cells[j].innerHTML == ""; j -= 4);

        if (j + 4 != i && cells[i].innerHTML != "") {
            cells[i].style.transform = "translateY(-8px) scaleY(1.05)";
            cells[j + 4].innerHTML = cells[i].innerHTML;
            cells[i].innerHTML = "";
        }
    }

    for (let i = 4; i <= 15; i++) {
        j = i - 4;
        if (cells[j].innerHTML == cells[i].innerHTML && cells[i].innerHTML != "") {
            cells[i].style.transform = "translateY(-8px)";
            cells[j].innerHTML = cells[i].innerHTML * 2;
            cells[i].innerHTML = "";
            cells[j].style.transform = "scale(1.12)"
        }

    }

    for (let i = 4; i <= 15; i++) {
        for (j = i - 4; j >= 0 && cells[j].innerHTML == ""; j -= 4);
        if (j + 4 != i && cells[i].innerHTML != "") {
            cells[j + 4].innerHTML = cells[i].innerHTML;
            cells[i].innerHTML = "";
        }
    }

    setTimeout(function () {
        for (let i = 0; i <= 15; i++) {
            cells[i].style.transform = "translateY(0)";
        }
    }, 100)

    setColorAndScore();
    addNum();
    checkGameLose();
}

function pushRight() {
    let j;
    let rightColumn = [11, 7, 3];

    for (let i = 14; i >= 0; i--) {
        if (rightColumn.includes(i)) { continue } //Skip right column
        else {
            for (j = i + 1; j <= 15 && cells[j].innerHTML == "" && !(rightColumn.includes(j - 1)); j++);

            if (j - 1 != i && cells[i].innerHTML != "") {
                cells[i].style.transform = "translateX(8px) scaleX(1.05)";
                cells[j - 1].innerHTML = cells[i].innerHTML;
                cells[i].innerHTML = "";
            }
        }
    }

    for (let i = 14; i >= 0; i--) {
        j = i + 1;
        if (rightColumn.includes(i)) { continue }
        else if (cells[j].innerHTML == cells[i].innerHTML && cells[i].innerHTML != "") {
            cells[i].style.transform = "translateX(8px)";
            cells[j].innerHTML = cells[i].innerHTML * 2;
            cells[i].innerHTML = "";
            cells[j].style.transform = "scale(1.12)"
        }
    }

    for (let i = 14; i >= 0; i--) {
        if (rightColumn.includes(i)) { continue } //Skip right column
        else {
            for (j = i + 1; j <= 15 && cells[j].innerHTML == "" && !(rightColumn.includes(j - 1)); j++);

            if (j - 1 != i && cells[i].innerHTML != "") {
                cells[j - 1].innerHTML = cells[i].innerHTML;
                cells[i].innerHTML = "";
            }
        }
    }

    setTimeout(function () {
        for (let i = 0; i <= 15; i++) {
            cells[i].style.transform = "translateX(0)";
        }
    }, 100)

    setColorAndScore();
    addNum();
    checkGameLose();
}

function pushLeft() {
    let j;
    let leftColumn = [4, 8, 12];

    for (let i = 1; i <= 15; i++) {
        if (leftColumn.includes(i)) { continue } //Skip right column
        else {
            for (j = i - 1; j >= 0 && cells[j].innerHTML == "" && !(leftColumn.includes(j + 1)); j--);

            if (j + 1 != i && cells[i].innerHTML != "") {
                cells[i].style.transform = "translateX(-8px) scaleX(1.05)";
                cells[j + 1].innerHTML = cells[i].innerHTML;
                cells[i].innerHTML = "";
            }
        }
    }

    for (let i = 1; i <= 15; i++) {
        j = i - 1;
        if (leftColumn.includes(i)) { continue }
        else if (cells[j].innerHTML == cells[i].innerHTML && cells[i].innerHTML != "") {
            cells[i].style.transform = "translateX(-8px)";
            cells[j].innerHTML = cells[i].innerHTML * 2;
            cells[i].innerHTML = "";
            cells[j].style.transform = "scale(1.12)"
        }
    }

    for (let i = 1; i <= 15; i++) {
        if (leftColumn.includes(i)) { continue } //Skip right column
        else {
            for (j = i - 1; j >= 0 && cells[j].innerHTML == "" && !(leftColumn.includes(j + 1)); j--);

            if (j + 1 != i && cells[i].innerHTML != "") {
                cells[j + 1].innerHTML = cells[i].innerHTML;
                cells[i].innerHTML = "";
            }
        }
    }

    setTimeout(function () {
        for (let i = 0; i <= 15; i++) {
            cells[i].style.transform = "translateX(0)";
        }
    }, 100)

    setColorAndScore();
    addNum();
    checkGameLose();
}