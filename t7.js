


original();
console.log("選轉180度");
turn90();







function original() {
    var up = "";
    var down = "";
    for (var i = 2; i <= 4; i++) {
        for (var j = 0; j <= 4 - i; j++) {
            up = up + " ";
        }
        for (var k = 0; k <= i * 2; k++) {
            if ((i === 2) && (k === 2)) {
                up = up = up + " ";
            }
            else {
                up = up + "*";
            }
        }
        up = up + "\n";
    }
    for (var m = 0; m <= 4; m++) {
        for (var n = 0; n <= m; n++) {
            down = down + " ";
        }
        for (var a = 0; a < 9 - m * 2; a++) {
            down = down + "*";
        }
        down = down + "\n";
    }
    console.log(up + down);
}//function

function turn90() {
    var up = "";
    var down = "";
    for (var i = 0; i <= 4; i++) {
        for (var j = 0; j <= 4 - i; j++) {
            up = up + " ";
        }
        for (var k = 0; k <= i * 2; k++) {
            up = up + "*";
        }
        up = up + "\n";

    }
    for (var m = 0; m <= 2; m++) {
        for (var n = 0; n <= m; n++) {
            down = down + " ";
        }
        for (var a = 0; a < 9 - m * 2; a++) {
            if ((m === 2) && (a === 2)) {
                down = down + " ";
            }
            else {
                down = down + "*";
            }
        }
        down = down + "\n";
    }
    console.log(up + down);
}


