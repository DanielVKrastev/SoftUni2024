function solve(steps, footPrint, speed){
    let distanceInM = steps * footPrint;
    let speedMetersInSec = speed / 3.6
    let time = distanceInM / speedMetersInSec;

    let res = Math.floor(distanceInM / 500);

    let timeInM = Math.floor(time / 60);
    let timeInSec = Math.ceil(time - timeInM * 60);
    timeInM += res;
    let hours = Math.floor(timeInM/ 60);

    timeInM = timeInM % 60;

    let minutesToPrint = timeInM < 10 ? `0${timeInM}` : `${timeInM}`;
    let hoursToPrint = hours < 10 ? `0${hours}` : `${hours}`;
    
    console.log(`${hoursToPrint}:${minutesToPrint}:${timeInSec}`);
    
}
solve(4000, 0.60, 5)
solve(8000, 0.60, 5)
solve(2564, 0.70, 5.5)