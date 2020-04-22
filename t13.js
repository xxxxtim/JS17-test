// 龜兔賽跑，兔子每秒可以跑20公尺，烏龜每秒跑0.28公尺，
// 他們參加1000公尺競賽：兔子故意用每跑5秒鐘後退1公尺的方式來挑釁烏龜，
// 請問兔子在途中還可以偷懶休息幾秒鐘再繼續跑並且贏得比賽?


function timeOfRelax() {

    const distance = 1000;
    const speedOfRabbit = 20;
    const speedOfTurtle = 0.28;
    var timeOfRabbit, timeOfTurtle, disOfProvocative, answer;


    timeOfRabbit = (distance / speedOfRabbit);
    disOfProvocative = (timeOfRabbit / 5)
    timeOfRabbit = timeOfRabbit + (disOfProvocative / speedOfRabbit);
    timeOfTurtle = (distance / speedOfTurtle);
    answer = (timeOfTurtle - timeOfRabbit);
    console.log("兔子在中途可以休息(%f)秒", answer);
}//function

timeOfRelax();