function caesar(input1, input2) {

    var record1 = [];
    var record2 = "";//global var
    var ch = "";
    record1 = input1.split(""); // ["a", "b", "c"]
    record2 = record1.map(letter => {
        // letter  = "a"
        letter = letter.charCodeAt();//字母轉換為數字
        if (isUpperCase(letter)) {
            return uppercase1(input2, letter);//進行平移並對應英文
        }
        else if (isLowerCase(letter)) {
            return lowercase1(input2, letter);
        }
        else {
            return "Error"
        }
    })
    return record2;
}//function


function isLowerCase(letter) {
    return (letter >= 97) && (letter <= 122);
}

function isUpperCase(letter) {
    return (letter >= 65) && (letter <= 90);
}

function uppercase1(input2, ch) {
    input2 = parseInt(input2, 10);
    ch = ch - 65 + input2;
    if (ch > 25) {
        ch = ch % 26;
    }
    ch = ch + 65;
    ch = String.fromCharCode(ch);
    return ch;
}

function lowercase1(input2, ch) {
    input2 = parseInt(input2, 10);
    ch = ch - 97 + input2;
    if (ch > 25) {
        ch = ch % 26;
    }
    ch = ch + 97;
    ch = String.fromCharCode(ch);
    return ch;
}

module.exports = {
    caesar, isLowerCase, isUpperCase,
    uppercase1, lowercase1
}