var cells = document.getElementsByClassName("cells");
var player = true;
var cellsNum = [0, 0, 0, 0, 0, 0, 0, 0, 0]

var redScore = 0;
var blueScore = 0;

function redCell(num) {
    cellsNum[num] = 1;
    cells[num].style.transform = "scale(0.8)";
    setTimeout(function () {
        cells[num].classList.add("redCells");
        cells[num].classList.remove("blueCells");
        cells[num].style.transform = "scale(1)";
        player = !player;
    }, 100)
}

function blueCell(num) {
    cellsNum[num] = 2;
    cells[num].style.transform = "scale(0.8)";
    setTimeout(function () {
        cells[num].classList.add("blueCells");
        cells[num].style.transform = "scale(1)";
        player = !player;
    }, 100)
}

function press(num) {

    if (player == true && cellsNum[num] == 0) {
        redCell(num);

        checkWin();
        score();
    }

    else if (player == false && cellsNum[num] == 0) {
        blueCell(num);

        checkWin();
        score();
    }


}

function checkWin() {
    if (
        (cellsNum[0] != 0 && cellsNum[0] == 1 && cellsNum[1] == 1 && cellsNum[2] == 1) ||
        (cellsNum[0] != 0 && cellsNum[0] == 1 && cellsNum[4] == 1 && cellsNum[8] == 1) ||
        (cellsNum[0] != 0 && cellsNum[0] == 1 && cellsNum[3] == 1 && cellsNum[6] == 1) ||
        (cellsNum[4] != 0 && cellsNum[1] == 1 && cellsNum[4] == 1 && cellsNum[7] == 1) ||
        (cellsNum[4] != 0 && cellsNum[3] == 1 && cellsNum[4] == 1 && cellsNum[5] == 1) ||
        (cellsNum[4] != 0 && cellsNum[2] == 1 && cellsNum[4] == 1 && cellsNum[6] == 1) ||
        (cellsNum[8] != 0 && cellsNum[2] == 1 && cellsNum[5] == 1 && cellsNum[8] == 1) ||
        (cellsNum[8] != 0 && cellsNum[6] == 1 && cellsNum[7] == 1 && cellsNum[8] == 1)
    ) {
        redScore += 1;

        for (const i in cellsNum) {
            cellsNum[i] = 1;
            redCell(i);
        }

        document.getElementById("header").style.gridTemplateColumns = "1fr 1fr 1fr";
        document.getElementById("retry").style.display = "flex";

    }

    else if (
        (cellsNum[0] != 0 && cellsNum[0] == 2 && cellsNum[1] == 2 && cellsNum[2] == 2) ||
        (cellsNum[0] != 0 && cellsNum[0] == 2 && cellsNum[4] == 2 && cellsNum[8] == 2) ||
        (cellsNum[0] != 0 && cellsNum[0] == 2 && cellsNum[3] == 2 && cellsNum[6] == 2) ||
        (cellsNum[4] != 0 && cellsNum[1] == 2 && cellsNum[4] == 2 && cellsNum[7] == 2) ||
        (cellsNum[4] != 0 && cellsNum[3] == 2 && cellsNum[4] == 2 && cellsNum[5] == 2) ||
        (cellsNum[4] != 0 && cellsNum[2] == 2 && cellsNum[4] == 2 && cellsNum[6] == 2) ||
        (cellsNum[8] != 0 && cellsNum[2] == 2 && cellsNum[5] == 2 && cellsNum[8] == 2) ||
        (cellsNum[8] != 0 && cellsNum[6] == 2 && cellsNum[7] == 2 && cellsNum[8] == 2)
    ) {
        blueScore += 1;

        for (const i in cellsNum) {
            cellsNum[i] = 2;
            blueCell(i);
        }

        document.getElementById("header").style.gridTemplateColumns = "1fr 1fr 1fr";
        document.getElementById("retry").style.display = "flex";

    }

    else if (
        (cellsNum[0] != 0) &&
        (cellsNum[1] != 0) &&
        (cellsNum[2] != 0) &&
        (cellsNum[3] != 0) &&
        (cellsNum[4] != 0) &&
        (cellsNum[5] != 0) &&
        (cellsNum[6] != 0) &&
        (cellsNum[7] != 0) &&
        (cellsNum[8] != 0)
    ) {

        document.getElementById("header").style.gridTemplateColumns = "1fr 1fr 1fr";
        document.getElementById("retry").style.display = "flex";

    }
}

function score() {
    document.getElementById("X").innerHTML = redScore;
    document.getElementById("O").innerHTML = blueScore;
}

function reset() {
    for (const i in cellsNum) {
        cellsNum[i] = 0;
        cells[i].classList.remove("blueCells");
        cells[i].classList.remove("redCells");
    }

    document.getElementById("header").style.gridTemplateColumns = "1fr 1fr";
    document.getElementById("retry").style.display = "none";
    document.getElementById("X").style.fontSize = "3rem";
    document.getElementById("O").style.fontSize = "3rem";

}