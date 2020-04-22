function countOfBacterial(numofbac, minutes) {
    var powerOfBacterial = 0;
    var currentCount = 0;
    powerOfBacterial = Math.floor(minutes / 20);
    return twofold(numofbac, powerOfBacterial, currentCount);

}//countOfBacterial

module.exports = {
    countOfBacterial,
    twofold
}

function twofold(numofbac, powerOfBacterial, currentCount) {

    if (currentCount < powerOfBacterial) {
        numofbac = numofbac * 2;
        currentCount = currentCount + 1;
        return twofold(numofbac, powerOfBacterial, currentCount);
    }
    else {
        return numofbac;
    }//else

}//function