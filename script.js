let counter = 0;
function randomizePosition() {
    
if (counter === 0) {
    setTimeout(() => {
        console.log("10 seconds have gone by");
    }, 10000);
    }

    let x = (Math.floor(Math.random() * 39));
    let y = (Math.floor(Math.random() * 70));
    document.getElementById("button").style.top = y + "vh";
    document.getElementById("button").style.left = x + "vw";
    counter++;
    document.getElementById('score').innerHTML = counter;
}