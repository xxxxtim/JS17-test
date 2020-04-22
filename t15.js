// 有一輛搬運車，限重1噸
// 啞鈴每箱重30kg，單槓每箱重20kg，跑步機一台重50kg
// 在不將空間列入考慮的情況下，設一陣列 sport[3] 用來儲存三種器材的數量，以一亂數決定每次要搬到車上的器材為何，當超過限重時即停止搬運，並列印出三種器材的個數及總重量。
var totalweight = 0;
var nextState = 0;
var sport = [];
const maxWeight = 1000;
sport[0] = 0;
sport[1] = 0;
sport[2] = 0;


do {
    var i = Math.floor(Math.random() * 3);
    switch (i) {
        case 0: {
            sport[i] = sport[i] + 1;
            break;
        }
        case 1: {
            sport[i] = sport[i] + 1;
            break;

        }
        case 2: {
            sport[i] = sport[i] + 1;
            break;
        }
        default: { return; }
    }//switch
    nextState = sport[0] * 30 + sport[1] * 20 + sport[2] * 50;
    if (nextState < maxWeight) {
        totalweight = nextState;
    }
    else if (nextState >= maxWeight) {
        break;
    }
}//do
while (totalweight < maxWeight);

// }//for
// console.timeEnd("timer");
console.log(`30公斤物品數量=${sport[0]}`);
console.log(`20公斤物品數量=${sport[1]}`);
console.log(`50公斤物品數量=${sport[2]}`);
console.log(`物品總重量=${totalweight}`);