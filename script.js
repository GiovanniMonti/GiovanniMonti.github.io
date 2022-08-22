document.getElementById("github_profile").onclick = function(){
    window.open("https://github.com/GiovanniMonti", '_blank').focus();
}
/*
this is no longer used, now using moment library for timezoned time.
function startTime(){
    const clock = new Date();
    let h = clock.getHours();
    let  m = clock.getMinutes();
    let s = clock.getSeconds();

    let time = h + ":" + m + ":" + s;

    document.getElementById("clock").textContent = time;
    document.getElementById("clock").innerText = time;

    setTimeout(startTime,1000);
} //startTime();

*/
function startTime_n(){
    let time = moment().tz("Europe/Rome").format("h:m:s");

    document.getElementById("clock").textContent = time;
    document.getElementById("clock").innerText = time;

    setTimeout(startTime_n,1000);
}startTime_n();
