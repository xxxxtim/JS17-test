function costOfGym(count) {
    let i = 0;
    let cost = 0;
    let off = 0;
    off = Math.floor(count / 5);
    do {
        i = i + 1;
        if (i === 1) {
            cost = (500 * 0.79);
        }
        else {

            cost = cost + 500
        }//else
    }//do
    while (i < count);
    cost = cost - (200 * off);
    return cost;
}//costOfGym

module.exports = costOfGym