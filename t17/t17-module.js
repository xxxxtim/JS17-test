const priorityOfArray = [
    4, 4, 4, 4,
    3, 3, 3, 3,
    2, 2, 2, 2,
    1, 1, 1, 1,
]
const candidate1 = [
    1, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 1, 1, 1,
]

const candidate2 = [
    0, 0, 1, 0,
    0, 1, 0, 0,
    1, 0, 0, 1,
    0, 0, 0, 0,
]
const candidate3 = [
    0, 1, 0, 0,
    1, 0, 1, 1,
    0, 0, 0, 0,
    0, 0, 0, 0,
]
const candidate4 = [
    0, 0, 0, 1,
    0, 0, 0, 0,
    0, 1, 1, 0,
    1, 0, 0, 0,
]

function countTicket(ticketOfArray, priorityOfArray, candidate) {
    return ticketOfArray.map((value, index) => (value * priorityOfArray[index]) * candidate[index]);
}//function

module.exports = {
    priorityOfArray, candidate1, candidate2, candidate3, candidate4, countTicket
}